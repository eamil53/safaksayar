import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShieldAlert, Smartphone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/' && location.pathname !== '/home') {
      navigate('/' + sectionId);
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Smartphone size={24} className="nav-logo-dot" />
          <span>Şafak Sayar<span className="nav-logo-dot"> 2026</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') || isActive('/home') ? 'active' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Ana Sayfa
          </Link>
          <a 
            href="#features" 
            className="nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick('#features'); }}
          >
            Özellikler
          </a>
          <a 
            href="#calculator" 
            className="nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick('#calculator'); }}
          >
            Hesaplayıcı
          </a>
          <a 
            href="#widgets" 
            className="nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick('#widgets'); }}
          >
            Widgetlar
          </a>
          <Link 
            to="/support" 
            className={`nav-link ${isActive('/support') ? 'active' : ''}`}
          >
            Destek & SSS
          </Link>
          <Link to="/support" className="btn btn-primary">
            İletişim
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="nav-mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="nav-links-mobile">
          <Link 
            to="/" 
            className="nav-link"
            onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Ana Sayfa
          </Link>
          <a 
            href="#features" 
            className="nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick('#features'); }}
          >
            Özellikler
          </a>
          <a 
            href="#calculator" 
            className="nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick('#calculator'); }}
          >
            Hesaplayıcı
          </a>
          <a 
            href="#widgets" 
            className="nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick('#widgets'); }}
          >
            Widgetlar
          </a>
          <Link 
            to="/support" 
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Destek & SSS
          </Link>
          <Link 
            to="/support" 
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
            style={{ width: '100%', marginTop: '10px' }}
          >
            İletişim
          </Link>
        </div>
      )}
    </nav>
  );
}
