import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="page-transition"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        minHeight: '70vh',
        flexWrap: 'wrap'
      }}>
        <motion.div variants={itemVariants} style={{ flex: '1 1 500px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
            Transforming the Future of <span className="gradient-text">Connected Highways</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '30px', maxWidth: '600px' }}>
            GoodRoad is an innovative project focused on developing next-generation intelligent transportation systems designed to enhance road safety, optimize traffic flow, and create a sustainable driving ecosystem.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/domain" className="btn">
              Explore Research <ArrowRight size={18} />
            </Link>
            <Link to="/contact-us" className="btn" style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-main)' }}>
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '540px' }}>
            <div style={{
              position: 'absolute',
              top: '-20px', left: '-20px', right: '-20px', bottom: '-20px',
              background: 'var(--gradient-main)',
              filter: 'blur(60px)',
              opacity: 0.15,
              borderRadius: '50%'
            }}></div>
            <img
              src="/Images/hero.png"
              alt="GoodRoad Smart Road Infrastructure"
              style={{
                width: '100%',
                aspectRatio: '1/1',
                objectFit: 'cover',
                borderRadius: '24px',
                border: '1px solid var(--border)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative'
              }}
            />
          </div>
        </motion.div>
      </section>

      <section style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <motion.div variants={itemVariants} className="card">
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#3b82f6' }}>
            <Shield size={28} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Enhanced Safety</h3>
          <p style={{ color: 'var(--text-muted)' }}>Proactive hazard detection and automated alerts reduce accidents and make commuting safer for everyone.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="card">
          <div style={{ background: 'rgba(99, 102, 241, 0.1)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#6366f1' }}>
            <Activity size={28} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Traffic Optimization</h3>
          <p style={{ color: 'var(--text-muted)' }}>Real-time analytics optimize traffic lights and road mapping, drastically reducing commute times.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="card">
          <div style={{ background: 'rgba(168, 85, 247, 0.1)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#a855f7' }}>
            <Cpu size={28} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Smart Infrastructure</h3>
          <p style={{ color: 'var(--text-muted)' }}>Integrating advanced AI and IoT sensors to build resilient and adaptable road networks.</p>
        </motion.div>
      </section>
    </motion.div>
  );
};
export default Home;
