import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Presentation, X, Download, FileText, Maximize, Play } from 'lucide-react';

const Presentations = () => {
  const [selectedPres, setSelectedPres] = useState(null);
  const [viewMode, setViewMode] = useState('slides'); // 'slides' or 'video'
  const iframeRef = useRef(null);

  const toggleFullScreen = () => {
    const element = iframeRef.current;
    if (element) {
      if (!document.fullscreenElement) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  };

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

  const presentations = [
    {
      title: 'Proposal Presentation',
      date: 'Feb 2026',
      available: true,
      link: '/Presentations/Proposal Presentation.pdf',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Progress Presentation 1',
      date: 'April 2026',
      available: true,
      link: '/Presentations/Progress Presentation 1.pdf',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      title: 'Progress Presentation 2', 
      date: 'June 2026', 
      available: true, 
      link: '/Presentations/Progress Presentation 2.pdf',
      video: '/Presentations/Progress Presentation Video.mp4',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
    },
    { 
      title: 'Final Presentation', 
      date: 'August 2026', 
      available: false, 
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
    }
  ];

  const handleOpenModal = (pres) => {
    setSelectedPres(pres);
    setViewMode('slides');
  };

  return (
    <motion.div
      className="page-transition"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>Project <span className="gradient-text">Presentations</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Explore our presentation materials detailing the progression of the GoodRoad ecosystem.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {presentations.map((pres, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card"
            style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ position: 'relative', height: '200px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.4)', zIndex: 1 }}></div>
              <img src={pres.image} alt={pres.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {pres.available && (
                <div 
                  style={{ 
                    position: 'absolute', top: '12px', right: '12px', zIndex: 2,
                    background: 'rgba(34, 197, 94, 0.9)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700
                  }}
                >
                  AVAILABLE
                </div>
              )}
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, textAlign: 'center' }}>{pres.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '20px', textAlign: 'center' }}>Presented on {pres.date}</p>
              </div>
              <button 
                onClick={() => pres.available && handleOpenModal(pres)}
                className="btn" 
                style={{ 
                  width: '100%', 
                  justifyContent: 'center',
                  background: pres.available ? 'var(--gradient-main)' : 'var(--surface-hover)',
                  color: pres.available ? 'white' : 'var(--text-muted)',
                  cursor: pres.available ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                disabled={!pres.available}
              >
                {pres.available ? 'View Presentation' : 'Coming Soon'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Presentation Viewer Modal */}
      <AnimatePresence>
        {selectedPres && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backdropFilter: 'blur(8px)'
            }}
            onClick={() => setSelectedPres(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{
                background: 'var(--surface)',
                width: '100%',
                maxWidth: '1200px',
                height: '85vh',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                border: '1px solid var(--border)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ padding: '20px 30px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--surface)', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>{selectedPres.title}</h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{selectedPres.date}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  {selectedPres.video && (
                    <div style={{ display: 'flex', background: 'var(--surface-hover)', borderRadius: '12px', padding: '4px', border: '1px solid var(--border)' }}>
                      <button 
                        onClick={() => setViewMode('slides')}
                        style={{ 
                          padding: '8px 16px', borderRadius: '8px', border: 'none',
                          background: viewMode === 'slides' ? 'var(--gradient-main)' : 'transparent',
                          color: viewMode === 'slides' ? 'white' : 'var(--text-muted)',
                          cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px'
                        }}
                      >
                        <FileText size={16} /> Slides
                      </button>
                      <button 
                        onClick={() => setViewMode('video')}
                        style={{ 
                          padding: '8px 16px', borderRadius: '8px', border: 'none',
                          background: viewMode === 'video' ? 'var(--gradient-main)' : 'transparent',
                          color: viewMode === 'video' ? 'white' : 'var(--text-muted)',
                          cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px'
                        }}
                      >
                        <Play size={16} /> Video
                      </button>
                    </div>
                  )}

                  <button 
                    onClick={toggleFullScreen}
                    style={{ 
                      background: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'white', 
                      cursor: 'pointer', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center'
                    }}
                    title="Full Screen"
                  >
                    <Maximize size={20} />
                  </button>
                  <a 
                    href={viewMode === 'slides' ? selectedPres.link : selectedPres.video} 
                    download 
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', 
                      background: 'var(--surface-hover)', border: '1px solid var(--border)', borderRadius: '12px', color: 'white', 
                      textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600
                    }}
                  >
                    <Download size={18} />
                  </a>
                  <button 
                    onClick={() => setSelectedPres(null)}
                    style={{ 
                      background: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'white', 
                      cursor: 'pointer', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center' 
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              <div style={{ flex: 1, background: '#1e293b', position: 'relative' }}>
                {viewMode === 'slides' ? (
                  <>
                    {selectedPres.link.toLowerCase().endsWith('.pdf') ? (
                      <iframe 
                        ref={iframeRef}
                        src={`${selectedPres.link}#view=FitH&pagemode=none&toolbar=0`} 
                        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                        title={selectedPres.title}
                        allowFullScreen
                      />
                    ) : (
                      <div 
                        ref={iframeRef}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', padding: '40px', textAlign: 'center' }}
                      >
                        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '30px', borderRadius: '50%', marginBottom: '24px' }}>
                          <Presentation size={60} color="var(--primary)" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Interactive Preview Unavailable</h3>
                        <p style={{ maxWidth: '450px', marginBottom: '32px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          This presentation file format cannot be previewed directly in the browser. 
                          Please download the file to view it on your device.
                        </p>
                        <a 
                          href={selectedPres.link} 
                          download 
                          className="btn"
                          style={{ background: 'var(--gradient-main)', color: 'white', textDecoration: 'none', padding: '12px 32px' }}
                        >
                          <Download size={20} /> Download and View
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  <div ref={iframeRef} style={{ width: '100%', height: '100%', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <video 
                      src={selectedPres.video} 
                      controls 
                      autoPlay
                      style={{ maxWidth: '100%', maxHeight: '100%', outline: 'none' }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Presentations;
