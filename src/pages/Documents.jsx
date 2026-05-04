import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, X, Maximize, ChevronRight, ArrowLeft } from 'lucide-react';

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [activeSubDoc, setActiveSubDoc] = useState(null);
  const [textContent, setTextContent] = useState(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const doc = activeSubDoc || selectedDoc;
    if (doc && !doc.isFolder && doc.link && doc.link.endsWith('.txt')) {
      fetch(doc.link)
        .then(res => res.text())
        .then(text => setTextContent(text))
        .catch(err => console.error('Error fetching text file:', err));
    } else {
      setTextContent(null);
    }
  }, [selectedDoc, activeSubDoc]);

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

  const closeModal = () => {
    setSelectedDoc(null);
    setActiveSubDoc(null);
    setTextContent(null);
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

  const documents = [
    {
      title: 'Project Charter',
      status: 'Available',
      date: 'July 2025',
      link: '/Documents/Project Charter/Charter.pdf',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Proposal Document',
      status: 'Available',
      date: 'September 2025',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isFolder: true,
      subDocs: [
        {
          title: 'Individual Proposal',
          subtitle: 'Kanishka Rathnayake',
          date: 'September 2025',
          status: 'Available',
          link: '/Documents/Proposal Document/Kanishka.pdf'
        },
        {
          title: 'Individual Proposal',
          subtitle: 'Nimesh Liyanage',
          date: 'September 2025',
          status: 'Available',
          link: '/Documents/Proposal Document/Nimesh.pdf'
        },
        {
          title: 'Individual Proposal',
          subtitle: 'Sanjula Wijerathna',
          date: 'September 2025',
          status: 'Available',
          link: '/Documents/Proposal Document/Sanjula.pdf'
        },
        {
          title: 'Individual Proposal',
          subtitle: 'Pabasara Hendawitharana',
          date: 'September 2025',
          status: 'Available',
          link: '/Documents/Proposal Document/Pabasara.pdf'
        }
      ]
    },
    {
      title: 'Check List Documents',
      status: 'Available',
      date: 'January 2026',
      link: '/Documents/Checklist Documents/Checklist_01.txt',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Final Document (Main & 4 Subs)',
      status: 'Available',
      date: 'May 2026',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isFolder: true,
      subDocs: [
        {
          title: 'Final Report',
          subtitle: 'Document',
          date: 'May 2026',
          status: 'Available',
          link: '/Documents/Final Documents/Final Report/Final.pdf'
        },
        {
          title: 'Individual Report',
          subtitle: 'Kanishka Rathnayake',
          date: 'May 2026',
          status: 'Available',
          link: '/Documents/Final Documents/Individual Final Reopts/Kanishka.pdf',
        },
        {
          title: 'Individual Report',
          subtitle: 'Nimesh Liyanage',
          date: 'May 2026',
          status: 'Available',
          link: '/Documents/Final Documents/Individual Final Reopts/Nimesh.pdf',
        },
        {
          title: 'Individual Report',
          subtitle: 'Sanjula Wijerathna',
          date: 'May 2026',
          status: 'Available',
          link: '/Documents/Final Documents/Individual Final Reopts/Sanjula.pdf',
        },
        {
          title: 'Individual Report',
          subtitle: 'Pabasara Hendawitharana',
          date: 'May 2026',
          status: 'Available',
          link: '/Documents/Final Documents/Individual Final Reopts/Pabasara.pdf',
        },
      ]
    }
  ];

  const currentViewingDoc = activeSubDoc || selectedDoc;

  return (
    <motion.div
      className="page-transition"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '16px' }}>Project <span className="gradient-text">Documents</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Access all official research deliverables, status reports, and final submission documents here.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {documents.map((doc, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card"
            style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ position: 'relative', height: '200px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.8))', zIndex: 1 }}></div>
              <img src={doc.image} alt={doc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {doc.status === 'Available' && (
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
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '8px' }}>{doc.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.9rem' }}>
                  {doc.status === 'Available' ? `Released: ${doc.date}` : `Expected: ${doc.date}`}
                </p>
              </div>
              <button
                onClick={() => doc.status === 'Available' && setSelectedDoc(doc)}
                className="btn"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: doc.status === 'Available' ? 'var(--gradient-main)' : 'var(--surface-hover)',
                  color: doc.status === 'Available' ? 'white' : 'var(--text-muted)',
                  cursor: doc.status === 'Available' ? 'pointer' : 'not-allowed',
                  opacity: doc.status === 'Available' ? 1 : 0.6
                }}
                disabled={doc.status !== 'Available'}
              >
                {doc.isFolder ? 'View Document' : (doc.status === 'Available' ? 'View Document' : 'Coming Soon')}
                <ChevronRight size={18} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Document Viewer Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)', zIndex: 1000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px', backdropFilter: 'blur(8px)'
            }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{
                background: 'var(--surface)', width: '100%', maxWidth: '1200px', height: '85vh',
                borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column',
                position: 'relative', border: '1px solid var(--border)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div style={{ padding: '20px 30px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--surface)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  {activeSubDoc && (
                    <button
                      onClick={() => setActiveSubDoc(null)}
                      style={{ background: 'var(--surface-hover)', border: 'none', color: 'white', cursor: 'pointer', padding: '8px', borderRadius: '50%', display: 'flex' }}
                    >
                      <ArrowLeft size={20} />
                    </button>
                  )}
                  <div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>
                      {currentViewingDoc.title} {currentViewingDoc.subtitle && `- ${currentViewingDoc.subtitle}`}
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{currentViewingDoc.date}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {!selectedDoc.isFolder || activeSubDoc ? (
                    <>
                      {!textContent && (
                        <button onClick={toggleFullScreen} style={{ background: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'white', cursor: 'pointer', padding: '10px', borderRadius: '12px', display: 'flex' }} title="Full Screen">
                          <Maximize size={20} />
                        </button>
                      )}
                      <a href={currentViewingDoc.link} download style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--surface-hover)', border: '1px solid var(--border)', borderRadius: '12px', color: 'white', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>
                        <Download size={18} />
                      </a>
                    </>
                  ) : null}
                  <button onClick={closeModal} style={{ background: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'white', cursor: 'pointer', padding: '10px', borderRadius: '12px', display: 'flex' }}>
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div style={{ flex: 1, background: '#0f172a', position: 'relative', overflow: 'auto' }}>
                {selectedDoc.isFolder && !activeSubDoc ? (
                  <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                      {selectedDoc.subDocs.map((sub, idx) => (
                        <div
                          key={idx}
                          className="card"
                          onClick={() => sub.status === 'Available' && setActiveSubDoc(sub)}
                          style={{
                            cursor: sub.status === 'Available' ? 'pointer' : 'not-allowed',
                            opacity: sub.status === 'Available' ? 1 : 0.6,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            border: sub.status === 'Available' ? '1px solid var(--border)' : '1px dashed var(--border)'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ background: sub.status === 'Available' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(148, 163, 184, 0.1)', padding: '10px', borderRadius: '10px' }}>
                              <FileText size={24} color={sub.status === 'Available' ? 'var(--primary)' : 'var(--text-muted)'} />
                            </div>
                            {sub.status === 'Available' && <ChevronRight size={20} color="var(--text-muted)" />}
                          </div>
                          <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '4px', lineHeight: '1.4' }}>
                              {sub.title}
                              {sub.subtitle && (
                                <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '4px', fontWeight: 500, color: 'var(--text-main)' }}>
                                  {sub.subtitle}
                                </div>
                              )}
                            </h4>
                          </div>
                          <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{sub.date}</span>
                            <span style={{ color: sub.status === 'Available' ? '#4ade80' : 'inherit' }}>{sub.status.toUpperCase()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : textContent ? (
                  <div style={{ padding: '40px', minHeight: '100%', background: '#0f172a', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                      background: 'var(--surface)',
                      width: '100%',
                      maxWidth: '800px',
                      minHeight: '100%',
                      padding: '60px 80px',
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                      color: 'var(--text-main)',
                      position: 'relative',
                      border: '1px solid var(--border)'
                    }}>
                      {/* Document Header Decoration */}
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--gradient-main)' }}></div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '2px solid var(--border)', paddingBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <FileText size={32} color="var(--primary)" />
                          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>CHECK LIST 01</h3>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, fontWeight: 600 }}>GOODROAD RESEARCH</p>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{currentViewingDoc.date}</p>
                        </div>
                      </div>

                      <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                        {textContent.split('\n').map((line, i) => {
                          const trimmedLine = line.trim();
                          const isUrl = trimmedLine.startsWith('http');
                          return (
                            <div key={i} style={{ marginBottom: '15px' }}>
                              {isUrl ? (
                                <div style={{ marginTop: '10px' }}>
                                  <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginBottom: '4px', fontWeight: 600 }}>Reference Link:</span>
                                  <a
                                    href={trimmedLine}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      color: 'var(--primary)',
                                      textDecoration: 'none',
                                      fontWeight: 700,
                                      display: 'inline-block',
                                      padding: '12px 24px',
                                      background: 'rgba(59, 130, 246, 0.1)',
                                      border: '1px solid rgba(59, 130, 246, 0.2)',
                                      borderRadius: '8px',
                                      fontSize: '1rem',
                                      wordBreak: 'break-all',
                                      transition: 'all 0.2s'
                                    }}
                                    onMouseOver={e => {
                                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseOut={e => {
                                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                                      e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                  >
                                    {trimmedLine}
                                  </a>
                                </div>
                              ) : (
                                trimmedLine
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Document Footer */}

                    </div>
                  </div>
                ) : (
                  <>
                    <iframe
                      ref={iframeRef}
                      src={currentViewingDoc.link === '#' ? '' : `${currentViewingDoc.link}#view=FitH&pagemode=none&toolbar=0`}
                      style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                      title={currentViewingDoc.title}
                      allowFullScreen
                    />
                    {currentViewingDoc.link === '#' && (
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', padding: '40px' }}>
                        <FileText size={60} color="var(--primary)" style={{ marginBottom: '20px' }} />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Document Preview Unavailable</h3>
                        <p style={{ maxWidth: '450px', color: 'var(--text-muted)' }}>
                          This document is not yet available for viewing.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Documents;
