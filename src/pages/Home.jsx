import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Video, Camera, ShieldCheck, DollarSign, FileText, MonitorPlay, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counter = ({ value, duration = 2, decimals = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return latest.toFixed(decimals);
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="page-transition">
      {/* 1. HERO SECTION */}
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        minHeight: '75vh',
        flexWrap: 'wrap',
        paddingTop: '20px'
      }}>
        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          style={{ flex: '1 1 500px', zIndex: 2 }}
        >

          <motion.h1 variants={fadeUp} style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>
            Revolutionizing Road Safety through <br />
            <span className="gradient-text">AI-Driven Decentralized Intelligence.</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.7 }}>
            GoodRoad bridges the enforcement gap by empowering citizens to report traffic violations via dashcam footage. Powered by state-of-the-art AI validation, we create safer roads while rewarding community contributors.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '20px' }}>
            <Link to="/domain" className="btn" style={{ padding: '14px 28px', fontSize: '1.1rem' }}>
              Explore Our Research <ArrowRight size={20} />
            </Link>
            <Link to="/contact-us" className="btn" style={{ padding: '14px 28px', fontSize: '1.1rem', background: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'var(--text-main)' }}>
              Contact Team
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
            <div style={{
              position: 'absolute', top: '10%', left: '10%', right: '-10%', bottom: '-10%',
              background: 'var(--gradient-main)', filter: 'blur(80px)', opacity: 0.2, borderRadius: '50%', zIndex: 0
            }}></div>
            <img
              src="/Images/hero.png"
              alt="GoodRoad Smart Road Infrastructure"
              style={{
                width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '30px',
                border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)', position: 'relative', zIndex: 1
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* 2. THE PROBLEM & VISION */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        style={{ marginTop: '120px', textAlign: 'center', padding: '60px 20px', background: 'var(--surface)', borderRadius: '30px', border: '1px solid var(--border)' }}
      >
        <motion.h2 variants={fadeUp} style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>
          The <span className="gradient-text">Enforcement Gap</span>
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, textAlign: 'center' }}>
          Traditional fixed-camera systems cover less than 0.3% of our road networks, leaving a massive compliance crisis where 67% of violations occur unmonitored. GoodRoad solves this without requiring massive infrastructure investments by turning everyday dashcams into a nationwide, decentralized enforcement network.
        </motion.p>
      </motion.section>

      {/* 3. CORE INNOVATIONS (Cards) */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        style={{ marginTop: '120px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h2 variants={fadeUp} style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Our <span className="gradient-text">Four-Pillar</span> Innovation</motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {[
            { icon: <ShieldCheck size={32} color="#3b82f6" />, color: 'rgba(59, 130, 246, 0.1)', title: 'Deep Fake Detection', desc: 'Advanced forensic framework ensuring all user-submitted video evidence is completely authentic and untampered.' },
            { icon: <Video size={32} color="#8b5cf6" />, color: 'rgba(139, 92, 246, 0.1)', title: 'Vision-Language AI', desc: 'Automated analysis of dashcam footage to instantly classify and validate various traffic violation types.' },
            { icon: <Camera size={32} color="#10b981" />, color: 'rgba(16, 185, 129, 0.1)', title: 'Hybrid ANPR System', desc: 'Robust Automatic Number Plate Recognition that functions reliably across diverse local environmental conditions.' },
            { icon: <DollarSign size={32} color="#f59e0b" />, color: 'rgba(245, 158, 11, 0.1)', title: 'Dynamic Rewards', desc: 'A sustainable incentive ecosystem where citizens earn directly from the fine revenue generated by their verified reports.' }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="card" style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ background: item.color, width: '70px', height: '70px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', fontWeight: 700 }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, textAlign: 'center' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 4. PROJECT IMPACT METRICS */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        style={{ marginTop: '150px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h2 variants={fadeUp} style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px' }}>
            Transforming the <span className="gradient-text">Enforcement Landscape</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Empowering communities with AI-driven intelligence to create safer roads for everyone.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {[
            { value: 0.3, suffix: '%', label: 'Current camera coverage', desc: 'Leaving 99.7% of roads completely unmonitored.', decimals: 1 },
            { value: 67, suffix: '%', label: 'Undetected violations', desc: 'Occurring outside traditional fixed monitoring zones.' },
            { value: 95, suffix: '%+', label: 'AI Detection Accuracy', desc: 'Achieved through Vision-Language model validation.' },
            { value: 70, suffix: '%', label: 'Violation Reduction', desc: 'Projected through decentralized community monitoring.' },
            { value: 2.3, prefix: 'LKR ', suffix: 'M+', label: 'Citizen Earnings', desc: 'Projected annually through our dynamic reward system.', decimals: 1 },
            { value: 24, suffix: '/7', label: 'Global Enforcement', desc: 'Operating across all road networks without infrastructure limits.' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                background: 'var(--surface)',
                padding: '50px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '24px',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              <h3 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '10px', color: 'var(--text-main)' }}>
                {stat.prefix}<Counter value={stat.value} decimals={stat.decimals || 0} />{stat.suffix}
              </h3>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{stat.label}</p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, textAlign: 'center' }}>{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. RESEARCH REPOSITORY CTA */}
      <motion.section
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        style={{ marginTop: '150px', padding: '80px 40px', background: 'linear-gradient(135deg, var(--surface) 0%, #0f172a 100%)', borderRadius: '40px', border: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--gradient-main)' }}></div>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px' }}>
          Explore Our <span className="gradient-text">Research</span>
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 50px', lineHeight: 1.7, textAlign: 'center' }}>
          Dive deep into our methodology. All academic documents, project charters, progress reports, and interactive presentations are fully accessible.
        </p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/documents" className="btn" style={{ padding: '16px 32px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileText size={24} /> View Documents
          </Link>
          <Link to="/presentations" className="btn" style={{ padding: '16px 32px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'var(--text-main)' }}>
            <MonitorPlay size={24} /> Watch Presentations
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
