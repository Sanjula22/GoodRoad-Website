import { motion } from 'framer-motion';
import { Mail, Award } from 'lucide-react';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const team = [
    {
      name: 'Kanishka Rathnayake',
      role: 'Project Member',
      image: '/Images/Kanishka.png',
      email: 'kanishka@example.com',
      linkedin: 'https://linkedin.com/in/kanishka',
      achievements: 'Specialist in System Analysis and Development.'
    },
    {
      name: 'Nimesh Liyanage',
      role: 'Project Member',
      image: '/Images/NImesh.png',
      email: 'nimesh@example.com',
      linkedin: 'https://linkedin.com/in/nimesh',
      achievements: 'Expert in Technical Research and Implementation.'
    },
    {
      name: 'Sanjula Wijerathna',
      role: 'Project Member',
      image: '/Images/Sanjula.png',
      email: 'sanjula@example.com',
      linkedin: 'https://linkedin.com/in/sanjula',
      achievements: 'Lead Researcher and Project Coordinator.'
    },
    {
      name: 'Pabasara Hendawitharana',
      role: 'Project Member',
      image: '/Images/Pabasara.png',
      email: 'pabasara@example.com',
      linkedin: 'https://linkedin.com/in/pabasara',
      achievements: 'Specialist in Backend Architecture and Integration.'
    }
  ];

  return (
    <motion.div
      className="page-transition"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>Meet the <span className="gradient-text">Team</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          We are a dedicated group of researchers and engineers from SLIIT, passionate about revolutionizing smart transportation systems.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {team.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card"
            style={{ textAlign: 'center', padding: '40px 24px' }}
          >
            <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 24px' }}>
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', borderRadius: '50%',
                  position: 'relative', zIndex: 1,
                  border: '2px solid var(--primary)',
                  padding: '4px'
                }}
              />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px', textAlign: 'center' }}>{member.name}</h3>
            <p style={{ color: 'var(--primary)', fontWeight: 500, marginBottom: '20px', textAlign: 'center' }}>{member.role}</p>

            <div style={{ background: 'var(--surface-hover)', padding: '16px', borderRadius: '12px', marginBottom: '24px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <Award size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{member.achievements}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a 
                href={`mailto:${member.email}`} 
                style={{ color: 'var(--text-muted)', transition: 'all 0.2s' }} 
                onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} 
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}
                title="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', transition: 'all 0.2s' }} 
                onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'} 
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutUs;
