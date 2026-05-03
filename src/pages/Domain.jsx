import { motion } from 'framer-motion';
import { BookOpen, Target, Search, Settings, Cpu, Layers, ClipboardList, CheckCircle, ShieldCheck, Video } from 'lucide-react';

const Domain = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'FastAPI', 'React.js', 'MongoDB', 'Forensic AI'
  ];

  return (
    <motion.div 
      className="page-transition"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '60px', marginBottom: '100px', flexWrap: 'wrap-reverse' }}>
        <div style={{ flex: '1 1 500px' }}>
          <motion.h1 variants={fadeUp} style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px' }}>
            Research <span className="gradient-text">Domain</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
            Delve into the academic architecture of GoodRoad. Our research bridges critical gaps in traffic enforcement by fusing decentralized citizen participation with advanced AI forensics.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {techStack.map(tech => (
              <span key={tech} style={{ 
                padding: '8px 16px', 
                background: 'rgba(59, 130, 246, 0.1)', 
                border: '1px solid rgba(59, 130, 246, 0.2)', 
                borderRadius: '50px', 
                fontSize: '0.9rem', 
                color: 'var(--primary)',
                fontWeight: 600
              }}>
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div variants={fadeUp} style={{ flex: '1 1 400px', textAlign: 'center' }}>
          <img 
            src="/Images/ai_traffic_pipeline.png" 
            alt="AI Pipeline" 
            style={{ 
              width: '100%', 
              maxWidth: '300px', 
              borderRadius: '30px', 
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              border: '1px solid var(--border)'
            }} 
          />
        </motion.div>
      </div>

      {/* Domain Sections Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
        {/* Literature Survey */}
        <motion.div variants={fadeUp} className="card" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '12px' }}>
              <BookOpen color="var(--primary)" size={28} />
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Literature Survey</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
            Conventional traffic monitoring systems are restricted by high installation costs ($50,000–$150,000 per intersection) and limited geographical coverage. Research shows that fixed cameras monitor only <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>0.3% of the total road network</span>, leading to an enforcement crisis where violations often occur unpunished.
          </p>
        </motion.div>

        {/* Research Gap */}
        <motion.div variants={fadeUp} className="card" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '12px', borderRadius: '12px' }}>
              <Search color="#8b5cf6" size={28} />
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Research Gap</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
            While crowdsourcing exists for navigation, there is a distinct lack of a <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>secure, AI-validated framework</span> for legal enforcement. Current solutions fail to address evidence authenticity (Deep Fakes) and do not offer a sustainable, reward-based ecosystem for citizen participation.
          </p>
        </motion.div>

        {/* Research Problem - Full Width */}
        <motion.div variants={fadeUp} className="card" style={{ padding: '40px', gridColumn: '1 / -1', textAlign: 'center', background: 'linear-gradient(135deg, var(--surface) 0%, #0f172a 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: '12px' }}>
              <Target color="#ef4444" size={28} />
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Research Problem</h2>
          </div>
          <p style={{ color: 'var(--text-main)', fontSize: '1.3rem', fontWeight: 500, lineHeight: 1.6, maxWidth: '900px', margin: '0 auto' }}>
            "How can we develop a decentralized traffic enforcement framework that bridges the monitoring gap by leveraging citizen-led dashcam data, ensuring evidence integrity through AI, and creating a sustainable social incentive model?"
          </p>
        </motion.div>

        {/* Research Objectives */}
        <motion.div variants={fadeUp} className="card" style={{ padding: '40px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ClipboardList color="var(--primary)" /> Research Objectives
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Develop Vision-Language AI for automated violation classification.',
              'Design a forensic framework to detect deep fakes and evidence tampering.',
              'Implement a Hybrid ANPR system for localized vehicle identification.',
              'Establish a dynamic reward ecosystem powered by fine revenue.'
            ].map((obj, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                {obj}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Methodology */}
        <motion.div variants={fadeUp} className="card" style={{ padding: '40px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Layers color="#8b5cf6" /> Methodology
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              { step: 'Evidence Acquisition', icon: <Video size={20} /> },
              { step: 'Forensic Validation', icon: <ShieldCheck size={20} /> },
              { step: 'Analytical Processing', icon: <Cpu size={20} /> },
              { step: 'Enforcement Integration', icon: <Settings size={20} /> }
            ].map((m, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div style={{ color: '#8b5cf6' }}>{m.icon}</div>
                <span style={{ fontWeight: 600 }}>{m.step}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Domain;
