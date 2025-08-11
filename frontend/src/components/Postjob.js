// import React, { useState } from 'react';
// import Layout from './RecruiterLayout';
// import './Postjob.css'; // Optional styling

// const experienceOptions = [
//   { value: 'freshers', label: 'Freshers' },
//   { value: '0-2', label: '0-2 yrs' },
//   { value: 'above-2', label: 'Above 2 yrs' }
// ];

// const Postjob = () => {
//   const [form, setForm] = useState({
//     title: '',
//     role: '',
//     description: '',
//     skills: '',
//     experience: 'freshers'
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!form.skills.trim()) {
//     setMessage('Please enter required skills.');
//     return;
//   }

//   try {
//     const res = await fetch('https://document-comparision.onrender.com/api/jobs', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form)
//     });

//     if (res.ok) {
//       setMessage('Job posted successfully!');
//       setForm({ title: '', role: '', description: '', skills: '', experience: 'freshers' });
//     } else {
//       // Check if response is JSON before parsing
//       const contentType = res.headers.get('content-type');
//       if (contentType && contentType.includes('application/json')) {
//         const errorRes = await res.json();
//         setMessage(`Failed to post job: ${errorRes.message}`);
//       } else {
//         setMessage('Failed to post job: Server error or not found.');
//       }
//     }
//   } catch (err) {
//     setMessage('Error posting job.');
//     console.error('Fetch error:', err);
//   }
// };


//   return (
//     <Layout>
//     <div className="postjob-container">
//       <h2>Post a Job</h2>
//       <form onSubmit={handleSubmit} className="postjob-form">
//         <label>
//           Job Title:
//           <input type="text" name="title" value={form.title} onChange={handleChange} required />
//         </label>
//         <label>
//           Role:
//           <input type="text" name="role" value={form.role} onChange={handleChange} required />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={form.description} onChange={handleChange} required />
//         </label>
//         <label>
//           Skills (comma separated):
//           <input type="text" name="skills" value={form.skills} onChange={handleChange} required />
//         </label>
//         <label>
//           Experience:
//           <select name="experience" value={form.experience} onChange={handleChange} required>
//             {experienceOptions.map(opt => (
//               <option key={opt.value} value={opt.value}>{opt.label}</option>
//             ))}
//           </select>
//         </label>
//         <button type="submit">Post Job</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//     </Layout>
//   );
// };

// export default Postjob;


import React, { useState } from 'react';
import Layout from './RecruiterLayout';
import './Postjob.css';

const experienceOptions = [
  { value: 'freshers', label: 'Freshers' },
  { value: '0-2', label: '0-2 yrs' },
  { value: 'above-2', label: 'Above 2 yrs' }
];

const Postjob = () => {
  const [form, setForm] = useState({
    title: '',
    role: '',
    description: '',
    skills: '',
    experience: 'freshers'
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.skills.trim()) {
      setMessage('Please enter required skills.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('https://document-comparision.onrender.com/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setMessage('Job posted successfully!');
        setForm({
          title: '',
          role: '',
          description: '',
          skills: '',
          experience: 'freshers'
        });
      } else {
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorRes = await res.json();
          setMessage(`Failed to post job: ${errorRes.message}`);
        } else {
          setMessage('Failed to post job: Server error or not found.');
        }
      }
    } catch (err) {
      setMessage('Error posting job.');
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="postjob-container">
        <div className="postjob-header">
          <div className="header-decoration">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
          </div>
          
          <h2>Create Your Next Opportunity</h2>
          <p className="postjob-subtitle">
            Connect with exceptional talent and build your dream team
          </p>
          
          <div className="job-stats">
            <div className="stat-item">
              <span className="stat-number">2.5M+</span>
              <span className="stat-label">Active Candidates</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Match Success</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">48H</span>
              <span className="stat-label">Avg Response</span>
            </div>
          </div>
        </div>

        <form className="postjob-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">🎯</span>
              Position Details
            </h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  <span className="label-icon"></span>
                  Job Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Senior React Developer"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="role" className="form-label">
                  <span className="label-icon"></span>
                  Role Category
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="e.g. Frontend Development"
                  className="form-input"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">📝</span>
              Job Information
            </h3>
            
            <div className="form-group full-width">
              <label htmlFor="description" className="form-label">
                <span className="label-icon"></span>
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                className="form-textarea"
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title">
              <span className="section-icon">🔧</span>
              Requirements
            </h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="skills" className="form-label">
                  <span className="label-icon"></span>
                  Required Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  placeholder="React, Node.js, MongoDB, etc."
                  className="form-input"
                  required
                />
                <span className="input-hint">Separate skills with commas</span>
              </div>
              
              <div className="form-group">
                <label htmlFor="experience" className="form-label">
                  <span className="label-icon"></span>
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  {experienceOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="submit-container">
            <button
              type="submit"
              className={`submit-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="btn-spinner"></span>
                  Posting Job...
                </>
              ) : (
                <>
                  🚀 Launch Job Post
                </>
              )}
            </button>
          </div>
        </form>

        {message && (
          <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
            <div className="message-icon">
              {message.includes('successfully') ? '✅' : '❌'}
            </div>
            <span>{message}</span>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Postjob;
