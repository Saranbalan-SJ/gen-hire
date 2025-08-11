// // // // import React, { useEffect, useState } from 'react';
// // // // import Layout from './RecruiterLayout';
// // // // import './Recruiterprofile.css';

// // // // const RecruiterProfile = () => {
// // // //   const [profile, setProfile] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     const fetchProfile = async () => {
// // // //       try {
// // // //         // Replace with actual recruiter ID or authentication logic as needed
// // // //         const res = await fetch('http://localhost:5000/api/User/profile');
// // // //         if (res.ok) {
// // // //           const data = await res.json();
// // // //           setProfile(data.user);
// // // //         } else {
// // // //           setError('Failed to fetch profile');
// // // //         }
// // // //       } catch (err) {
// // // //         setError('Error fetching profile');
// // // //       }
// // // //       setLoading(false);
// // // //     };
// // // //     fetchProfile();
// // // //   }, []);

// // // //   return (
// // // //     <Layout>
// // // //     <div className="recruiter-profile">
// // // //       <h2>Recruiter Profile</h2>
// // // //       {loading ? (
// // // //         <p>Loading...</p>
// // // //       ) : error ? (
// // // //         <p style={{ color: 'red' }}>{error}</p>
// // // //       ) : profile ? (
// // // //         <div className="profile-details">
// // // //           <p><strong>Username:</strong> {profile.username}</p>
// // // //           <p><strong>Email:</strong> {profile.email}</p>
// // // //           {/* Add more fields as needed */}
// // // //         </div>
// // // //       ) : (
// // // //         <p>No profile data found.</p>
// // // //       )}
// // // //     </div>
// // // //     </Layout>
// // // //   );
// // // // };

// // // // export default RecruiterProfile;


// // // import React, { useEffect, useState } from 'react';
// // // import Layout from './RecruiterLayout';
// // // import './Recruiterprofile.css';
// // // import image from './images/Hexa.png';

// // // const RecruiterProfile = () => {
// // //   const [profile, setProfile] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');

// // //   // Default avatar image (base64 encoded placeholder or you can use a URL)
// // //   const defaultAvatar = image;

// // //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       try {
// // //         // Replace with actual recruiter ID or authentication logic as needed
// // //         const res = await fetch('http://localhost:5000/api/User/profile');
// // //         if (res.ok) {
// // //           const data = await res.json();
// // //           setProfile(data.user);
// // //         } else {
// // //           setError('Failed to fetch profile');
// // //         }
// // //       } catch (err) {
// // //         setError('Error fetching profile');
// // //       }
// // //       setLoading(false);
// // //     };
// // //     fetchProfile();
// // //   }, []);

// // //   return (
// // //     <Layout>
// // //       <div className="recruiter-profile">
// // //         <div className="profile-header">
// // //           <h2>Recruiter Profile</h2>
// // //         </div>
        
// // //         {loading ? (
// // //           <div className="loading-container">
// // //             <div className="loading-spinner"></div>
// // //             <p>Loading profile...</p>
// // //           </div>
// // //         ) : error ? (
// // //           <div className="error-container">
// // //             <div className="error-icon">⚠️</div>
// // //             <p className="error-message">{error}</p>
// // //             <button onClick={() => window.location.reload()} className="retry-btn">
// // //               Try Again
// // //             </button>
// // //           </div>
// // //         ) : profile ? (
// // //           <div className="profile-content">
// // //             <div className="profile-card">
// // //               <div className="profile-avatar-section">
// // //                 <div className="avatar-container">
// // //                   <img 
// // //                     src={profile.avatar || defaultAvatar} 
// // //                     alt="Profile Avatar"
// // //                     className="profile-avatar"
// // //                     onError={(e) => {
// // //                       e.target.src = defaultAvatar;
// // //                     }}
// // //                   />
// // //                   <div className="avatar-overlay">
// // //                     <span className="change-photo-text">Change Photo</span>
// // //                   </div>
// // //                 </div>
// // //                 <div className="profile-name">
// // //                   <h3>{profile.fullName || profile.username}</h3>
// // //                   <p className="profile-role">Recruiter</p>
// // //                 </div>
// // //               </div>

// // //               <div className="profile-details">
// // //                 <div className="detail-group">
// // //                   <div className="detail-item">
// // //                     <span className="detail-label">Username</span>
// // //                     <span className="detail-value">{profile.username}</span>
// // //                   </div>
                  
// // //                   <div className="detail-item">
// // //                     <span className="detail-label">Email</span>
// // //                     <span className="detail-value">{profile.email}</span>
// // //                   </div>
                  
// // //                   <div className="detail-item">
// // //                     <span className="detail-label">Company</span>
// // //                     <span className="detail-value">{profile.company || 'Not specified'}</span>
// // //                   </div>
                  
// // //                   <div className="detail-item">
// // //                     <span className="detail-label">Phone</span>
// // //                     <span className="detail-value">{profile.phone || 'Not provided'}</span>
// // //                   </div>
                  
// // //                   <div className="detail-item">
// // //                     <span className="detail-label">Location</span>
// // //                     <span className="detail-value">{profile.location || 'Not specified'}</span>
// // //                   </div>
                  
// // //                   <div className="detail-item">
// // //                     <span className="detail-label">Member Since</span>
// // //                     <span className="detail-value">
// // //                       {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString() : 'N/A'}
// // //                     </span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="profile-actions">
// // //                   <button className="btn-primary">Edit Profile</button>
// // //                   <button className="btn-secondary">Change Password</button>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="profile-stats">
// // //   <div className="stat-card">
// // //     <div className="stat-number">{profile.jobsPosted || 0}</div>
// // //     <div className="stat-label">Jobs Posted</div>
// // //   </div>
// // //   <div className="stat-card">
// // //     <div className="stat-number">{profile.applicationsReceived || 0}</div>
// // //     <div className="stat-label">Applications</div>
// // //   </div>
// // //   <div className="stat-card">
// // //     <div className="stat-number">{profile.candidatesHired || 0}</div>
// // //     <div className="stat-label">Hired</div>
// // //   </div>
// // // </div>

// // //           </div>
// // //         ) : (
// // //           <div className="no-data-container">
// // //             <div className="no-data-icon">👤</div>
// // //             <p className="no-data-message">No profile data found.</p>
// // //             <button onClick={() => window.location.reload()} className="retry-btn">
// // //               Refresh
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </Layout>
// // //   );
// // // };

// // // export default RecruiterProfile;

// // import React, { useEffect, useState } from 'react';
// // import Layout from './RecruiterLayout';
// // import './Recruiterprofile.css';

// // const RecruiterProfile = () => {
// //   const [profile, setProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [stats, setStats] = useState({
// //     jobsPosted: 0,
// //     applicationsReceived: 0
// //   });

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         // Replace with actual recruiter ID or authentication logic as needed
// //         const res = await fetch('https://document-comparision.onrender.com/api/User/profile');
// //         if (res.ok) {
// //           const data = await res.json();
// //           setProfile(data.user);
          
// //           // Fetch recruiter statistics
// //           await fetchRecruiterStats();
// //         } else {
// //           setError('Failed to fetch profile');
// //         }
// //       } catch (err) {
// //         setError('Error fetching profile');
// //       }
// //       setLoading(false);
// //     };

// //     const fetchRecruiterStats = async () => {
// //       try {
// //         // Fetch jobs count
// //         const jobsRes = await fetch('https://document-comparision.onrender.com/api/jobs');
// //         const jobsData = await jobsRes.json();
// //         const jobsCount = jobsData.jobs ? jobsData.jobs.length : 0;

// //         // Fetch total applications count across all jobs
// //         let totalApplications = 0;
// //         if (jobsData.jobs && jobsData.jobs.length > 0) {
// //           const applicationPromises = jobsData.jobs.map(async (job) => {
// //             try {
// //               const appRes = await fetch(`https://document-comparision.onrender.com/api/applications/${job._id}`);
// //               const appData = await appRes.json();
// //               return appData.applications ? appData.applications.length : 0;
// //             } catch (err) {
// //               console.error(`Error fetching applications for job ${job._id}:`, err);
// //               return 0;
// //             }
// //           });
          
// //           const applicationCounts = await Promise.all(applicationPromises);
// //           totalApplications = applicationCounts.reduce((sum, count) => sum + count, 0);
// //         }

// //         setStats({
// //           jobsPosted: jobsCount,
// //           applicationsReceived: totalApplications
// //         });
// //       } catch (err) {
// //         console.error('Error fetching recruiter stats:', err);
// //         // Keep default stats if there's an error
// //       }
// //     };

// //     fetchProfile();
// //   }, []);

// //   return (
// //     <Layout>
// //       <div className="recruiter-profile">
// //         <div className="profile-header">
// //           <h2>Recruiter Profile</h2>
// //         </div>
        
// //         {loading ? (
// //           <div className="loading-container">
// //             <div className="loading-spinner"></div>
// //             <p>Loading profile...</p>
// //           </div>
// //         ) : error ? (
// //           <div className="error-container">
// //             <div className="error-icon">⚠️</div>
// //             <p className="error-message">{error}</p>
// //             <button onClick={() => window.location.reload()} className="retry-btn">
// //               Try Again
// //             </button>
// //           </div>
// //         ) : profile ? (
// //           <div className="profile-content">
// //             <div className="profile-card">
// //               <div className="profile-name-section">
// //                 <div className="profile-name">
// //                   <h3>{profile.fullName || profile.username}</h3>
// //                   <p className="profile-role">Recruiter</p>
// //                 </div>
// //               </div>

// //               <div className="profile-details">
// //                 <div className="detail-group">
// //                   <div className="detail-item">
// //                     <span className="detail-label">Username</span>
// //                     <span className="detail-value">{profile.username}</span>
// //                   </div>
                  
// //                   <div className="detail-item">
// //                     <span className="detail-label">Email</span>
// //                     <span className="detail-value">{profile.email}</span>
// //                   </div>
                  
// //                   <div className="detail-item">
// //                     <span className="detail-label">Company</span>
// //                     <span className="detail-value">{profile.company || 'GenHire'}</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Statistics Section */}
// //             <div className="profile-stats">
// //               <div className="stat-card">
// //                 <div className="stat-number">{stats.jobsPosted}</div>
// //                 <div className="stat-label">Jobs Posted</div>
// //               </div>
// //               <div className="stat-card">
// //                 <div className="stat-number">{stats.applicationsReceived}</div>
// //                 <div className="stat-label">Applications Received</div>
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="no-data-container">
// //             <div className="no-data-icon">👤</div>
// //             <p className="no-data-message">No profile data found.</p>
// //             <button onClick={() => window.location.reload()} className="retry-btn">
// //               Refresh
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default RecruiterProfile;




// import React, { useEffect, useState } from 'react';
// import Layout from './RecruiterLayout';
// import './Recruiterprofile.css';

// const RecruiterProfile = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState({
//     jobsPosted: 0,
//     applicationsReceived: 0
//   });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         // Replace with actual recruiter ID or authentication logic as needed
//         const res = await fetch('https://document-comparision.onrender.com/api/User/profile');
//         if (res.ok) {
//           const data = await res.json();
//           setProfile(data.user);
          
//           // Fetch recruiter statistics
//           await fetchRecruiterStats();
//         } else {
//           setError('Failed to fetch profile');
//         }
//       } catch (err) {
//         setError('Error fetching profile');
//       }
//       setLoading(false);
//     };

//     const fetchRecruiterStats = async () => {
//       try {
//         // Fetch jobs count
//         const jobsRes = await fetch('https://document-comparision.onrender.com/api/jobs');
//         const jobsData = await jobsRes.json();
//         const jobsCount = jobsData.jobs ? jobsData.jobs.length : 0;

//         // Fetch total applications count across all jobs
//         let totalApplications = 0;
//         if (jobsData.jobs && jobsData.jobs.length > 0) {
//           const applicationPromises = jobsData.jobs.map(async (job) => {
//             try {
//               const appRes = await fetch(`https://document-comparision.onrender.com/api/applications/${job._id}`);
//               const appData = await appRes.json();
//               return appData.applications ? appData.applications.length : 0;
//             } catch (err) {
//               console.error(`Error fetching applications for job ${job._id}:`, err);
//               return 0;
//             }
//           });
          
//           const applicationCounts = await Promise.all(applicationPromises);
//           totalApplications = applicationCounts.reduce((sum, count) => sum + count, 0);
//         }

//         setStats({
//           jobsPosted: jobsCount,
//           applicationsReceived: totalApplications
//         });
//       } catch (err) {
//         console.error('Error fetching recruiter stats:', err);
//         // Keep default stats if there's an error
//       }
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <Layout>
//       <div className="profile-outer-bg">
//         {loading ? (
//           <div className="profile-card-advanced">
//             <div className="loading-container-advanced">
//               <div className="loading-spinner-advanced"></div>
//               <p className="loading-text-advanced">Loading your profile...</p>
//             </div>
//           </div>
//         ) : error ? (
//           <div className="profile-card-advanced">
//             <div className="error-container-advanced">
//               <div className="error-icon-advanced">⚠️</div>
//               <p className="error-message-advanced">{error}</p>
//               <button onClick={() => window.location.reload()} className="retry-btn-advanced">
//                 Try Again
//               </button>
//             </div>
//           </div>
//         ) : profile ? (
//           <div className="profile-card-advanced">
//             <div className="profile-header">
//               <div className="profile-avatar">
//                 <span role="img" aria-label="Recruiter">🏢</span>
//               </div>
//               <div>
//                 <h2 className="profile-title">Welcome, {profile.fullName || profile.username}!</h2>
//                 <p className="profile-role"><span className="profile-role-badge">Recruiter</span></p>
//               </div>
//             </div>

//             <div className="profile-details-advanced">
//               <div className="profile-detail-row">
//                 <span className="profile-detail-icon" title="Username">🆔</span>
//                 <span className="profile-detail-label">Username:</span>
//                 <span className="profile-detail-value">{profile.username}</span>
//               </div>
              
//               <div className="profile-detail-row">
//                 <span className="profile-detail-icon" title="Email">📧</span>
//                 <span className="profile-detail-label">Email:</span>
//                 <span className="profile-detail-value">{profile.email}</span>
//               </div>
              
//               <div className="profile-detail-row">
//                 <span className="profile-detail-icon" title="Company">🏢</span>
//                 <span className="profile-detail-label">Company:</span>
//                 <span className="profile-detail-value">{profile.company || 'GenHire'}</span>
//               </div>
//             </div>

//             <div className="divider"></div>

//             {/* Statistics Section */}
//             <div className="stats-section-advanced">
//               <h3>
//                 <span role="img" aria-label="Statistics">📊</span> Your Statistics
//               </h3>
//               <div className="stats-grid-advanced">
//                 <div className="stat-card-advanced">
//                   <div className="stat-icon">💼</div>
//                   <div className="stat-number-advanced">{stats.jobsPosted}</div>
//                   <div className="stat-label-advanced">Jobs Posted</div>
//                 </div>
//                 <div className="stat-card-advanced">
//                   <div className="stat-icon">📝</div>
//                   <div className="stat-number-advanced">{stats.applicationsReceived}</div>
//                   <div className="stat-label-advanced">Applications Received</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="profile-card-advanced">
//             <div className="no-data-container-advanced">
//               <div className="no-data-icon-advanced">👤</div>
//               <p className="no-data-message-advanced">No profile data found.</p>
//               <button onClick={() => window.location.reload()} className="retry-btn-advanced">
//                 Refresh
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default RecruiterProfile;



import React, { useEffect, useState } from 'react';
import Layout from './RecruiterLayout';
import './Recruiterprofile.css';

const RecruiterProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    jobsPosted: 0,
    applicationsReceived: 0
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Replace with actual recruiter ID or authentication logic as needed
        const res = await fetch('https://document-comparision.onrender.com/api/User/profile');
        if (res.ok) {
          const data = await res.json();
          setProfile(data.user);
          
          // Fetch recruiter statistics
          await fetchRecruiterStats();
        } else {
          setError('Failed to fetch profile');
        }
      } catch (err) {
        setError('Error fetching profile');
      }
      setLoading(false);
    };

    const fetchRecruiterStats = async () => {
      try {
        // Fetch jobs count
        const jobsRes = await fetch('https://document-comparision.onrender.com/api/jobs');
        const jobsData = await jobsRes.json();
        const jobsCount = jobsData.jobs ? jobsData.jobs.length : 0;

        // Fetch total applications count across all jobs
        let totalApplications = 0;
        if (jobsData.jobs && jobsData.jobs.length > 0) {
          const applicationPromises = jobsData.jobs.map(async (job) => {
            try {
              const appRes = await fetch(`https://document-comparision.onrender.com/api/applications/${job._id}`);
              const appData = await appRes.json();
              return appData.applications ? appData.applications.length : 0;
            } catch (err) {
              console.error(`Error fetching applications for job ${job._id}:`, err);
              return 0;
            }
          });
          
          const applicationCounts = await Promise.all(applicationPromises);
          totalApplications = applicationCounts.reduce((sum, count) => sum + count, 0);
        }

        setStats({
          jobsPosted: jobsCount,
          applicationsReceived: totalApplications
        });
      } catch (err) {
        console.error('Error fetching recruiter stats:', err);
        // Keep default stats if there's an error
      }
    };

    fetchProfile();
  }, []);

  return (
    <Layout>
      <div className="profile-outer-bg">
        {loading ? (
          <div className="profile-card-advanced">
            <div className="loading-container-advanced">
              <div className="loading-spinner-advanced"></div>
              <p className="loading-text-advanced">Loading your profile...</p>
            </div>
          </div>
        ) : error ? (
          <div className="profile-card-advanced">
            <div className="error-container-advanced">
              <div className="error-icon-advanced">⚠️</div>
              <p className="error-message-advanced">{error}</p>
              <button onClick={() => window.location.reload()} className="retry-btn-advanced">
                Try Again
              </button>
            </div>
          </div>
        ) : profile ? (
          <div className="profile-card-advanced">
            <div className="profile-header">
              <div className="profile-avatar">
                <span role="img" aria-label="Recruiter">🏢</span>
              </div>
              <div className="profile-info-container">
                <h2 className="profile-title">Welcome Back!</h2>
                <p className="profile-subtitle">{profile.fullName || profile.username}</p>
                <div className="profile-role">
                  <span className="profile-role-badge">Recruiter</span>
                </div>
                <div className="profile-meta">
                  <div className="profile-meta-item">
                    <span className="profile-meta-icon">🏢</span>
                    <span>{profile.company || 'GenHire'}</span>
                  </div>
                  <div className="profile-meta-item">
                    <span className="profile-meta-icon">📧</span>
                    <span>{profile.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-details-advanced">
              <div className="profile-detail-row">
                <span className="profile-detail-icon" title="Username">🆔</span>
                <span className="profile-detail-label">Username:</span>
                <span className="profile-detail-value">{profile.username}</span>
              </div>
              
              <div className="profile-detail-row">
                <span className="profile-detail-icon" title="Email">📧</span>
                <span className="profile-detail-label">Email:</span>
                <span className="profile-detail-value">{profile.email}</span>
              </div>
              
              <div className="profile-detail-row">
                <span className="profile-detail-icon" title="Company">🏢</span>
                <span className="profile-detail-label">Company:</span>
                <span className="profile-detail-value">{profile.company || 'GenHire'}</span>
              </div>
            </div>

            <div className="divider"></div>

            {/* Statistics Section */}
            <div className="stats-section-advanced">
              <h3>
                <span role="img" aria-label="Statistics">📊</span> Your Statistics
              </h3>
              <div className="stats-grid-advanced">
                <div className="stat-card-advanced">
                  <div className="stat-icon">💼</div>
                  <div className="stat-number-advanced">{stats.jobsPosted}</div>
                  <div className="stat-label-advanced">Jobs Posted</div>
                </div>
                <div className="stat-card-advanced">
                  <div className="stat-icon">📝</div>
                  <div className="stat-number-advanced">{stats.applicationsReceived}</div>
                  <div className="stat-label-advanced">Applications Received</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-card-advanced">
            <div className="no-data-container-advanced">
              <div className="no-data-icon-advanced">👤</div>
              <p className="no-data-message-advanced">No profile data found.</p>
              <button onClick={() => window.location.reload()} className="retry-btn-advanced">
                Refresh
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RecruiterProfile;