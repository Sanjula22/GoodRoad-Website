import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Calendar, Percent } from 'lucide-react';

const Milestones = () => {
  const [activeTab, setActiveTab] = useState(null);

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

  const milestones = [
    {
      id: 1,
      title: 'Project Proposal',
      date: 'Feb 15, 2026',
      marks: '10%',
      description: 'Initial submission of the project scope, objectives, methodology, and the feasibility study. The proposal establishes the foundation of the GoodRoad project architecture and literature survey.'
    },
    {
      id: 2,
      title: 'Progress Presentation - 1',
      date: 'April 10, 2026',
      marks: '15%',
      description: 'Detailed showcase of early design phases, basic prototyping, and initial evaluations of the core algorithms. Assessed on clarity of UI mockups and completion of core backend services.'
    },
    {
      id: 3,
      title: 'Progress Presentation - 2',
      date: 'June 05, 2026',
      marks: '20%',
      description: 'Comprehensive demonstration of the working system involving integration of front-end and real-time backend processing. Evaluation focuses on system stability and core feature completion.'
    },
    {
      id: 4,
      title: 'Final Assessment',
      date: 'August 20, 2026',
      marks: '40%',
      description: 'The ultimate presentation of the completed GoodRoad ecosystem. Includes project demonstrations, system performance measurements, and final report submission detailing all aspects of the pipeline.'
    },
    {
      id: 5,
      title: 'Viva',
      date: 'September 05, 2026',
      marks: '15%',
      description: 'Individual oral examinations testing each group member\'s contribution, depth of knowledge, and justification of technology choices throughout the software development lifecycle.'
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
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>Project <span className="gradient-text">Milestones</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Track our progress timeline and assessment details. Select any milestone below to learn more.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {milestones.map((milestone) => (
          <motion.div key={milestone.id} variants={itemVariants} style={{ marginBottom: '16px' }}>
            <button
              onClick={() => setActiveTab(activeTab === milestone.id ? null : milestone.id)}
              className="card"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
                border: activeTab === milestone.id ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: activeTab === milestone.id ? 'rgba(59, 130, 246, 0.05)' : 'var(--surface)'
              }}
            >
              <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{milestone.title}</span>
              <motion.div animate={{ rotate: activeTab === milestone.id ? 180 : 0 }}>
                <ChevronDown size={24} color="var(--primary)" />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeTab === milestone.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    padding: '24px',
                    background: 'var(--surface-hover)',
                    borderRadius: '0 0 12px 12px',
                    marginTop: '-12px',
                    border: '1px solid var(--border)',
                    borderTop: 'none'
                  }}>
                    <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                        <Calendar size={18} />
                        <span style={{ fontWeight: 500 }}>{milestone.date}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a855f7' }}>
                        <Percent size={18} />
                        <span style={{ fontWeight: 500 }}>Weight: {milestone.marks}</span>
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>{milestone.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Milestones;
