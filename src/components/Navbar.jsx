import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Domain', path: '/domain' },
    { name: 'Milestones', path: '/milestones' },
    { name: 'Documents', path: '/documents' },
    { name: 'Presentations', path: '/presentations' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            background: 'var(--gradient-main)',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '20px'
          }}>
            G
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.05em' }}>GoodRoad</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name} style={{ position: 'relative' }}>
                <Link 
                  to={link.path} 
                  style={{
                    color: isActive(link.path) ? 'var(--primary)' : 'var(--text-main)',
                    fontWeight: isActive(link.path) ? 600 : 400,
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {link.name}
                  {(link.name === 'Milestones' || link.name === 'Documents' || link.name === 'Presentations') && (
                    <ChevronDown size={14} />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile menu toggle class using inline styles via media query is tricky, we'll rely on an internal toggler and standard react conditional render for simplicity */}
        <div className="mobile-toggle" style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              background: 'var(--surface)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              padding: '16px 20px',
              gap: '12px'
            }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '10px',
                  borderRadius: '6px',
                  background: isActive(link.path) ? 'var(--surface-hover)' : 'transparent',
                  color: isActive(link.path) ? 'var(--primary)' : 'var(--text-main)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
