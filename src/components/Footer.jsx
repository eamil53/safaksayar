import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="nav-logo" style={{ marginBottom: '12px' }}>
              <Smartphone size={24} className="nav-logo-dot" />
              <span>Şafak Sayar<span className="nav-logo-dot"> 2026</span></span>
            </Link>
            <p>
              Askerlik vazifeniz boyunca şafağınızı, kalan günlerinizi, terhis ve sülüs tarihlerinizi en doğru şekilde takip edin, widget ve temalarla ana ekranınızı kişiselleştirin.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Hızlı Linkler</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Ana Sayfa</Link>
              <Link to="/support" className="footer-link">Destek & SSS</Link>
              <Link to="/privacy" className="footer-link">Gizlilik Politikası</Link>
              <Link to="/terms" className="footer-link">Kullanım Koşulları</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Uygulamayı İndir</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <a href="#" className="btn btn-appstore" onClick={(e) => { e.preventDefault(); alert("App Store indirme bağlantısı yakında eklenecektir."); }}>
                <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-47.5-21-76.5-21-37.6 0-77.8 24.3-97.1 57.6-40.2 68.5-10.2 168.7 28.5 224.2 19 27.2 41.5 57.4 70.8 56.2 28.2-1.1 38.9-18.2 73-18.2 34 0 43.6 18.2 73 17.6 29.9-.6 49.2-27.2 67.9-54.8 21.9-32 30.9-63 31.2-64.6-.6-.2-60-23-60.4-92.3zM278.5 76c22-26.7 36.8-64 32.8-101-31.9 1.3-70.6 21.4-93.5 48.2-19.5 22.8-36.5 60.5-31.8 96.6 35.7 2.8 72.1-17.1 92.5-43.8z"/>
                </svg>
                <div>
                  <div style={{ fontSize: '10px', opacity: 0.6 }}>Download on the</div>
                  <div style={{ fontSize: '15px', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>App Store</div>
                </div>
              </a>
              
              <a href="#" className="btn btn-appstore" onClick={(e) => { e.preventDefault(); alert("Google Play indirme bağlantısı yakında eklenecektir."); }}>
                <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1L475 201.7c16.3-9.3 26.2-24.8 26.2-42.3 0-17.6-9.9-33.1-26.2-42.4L372.2 62.7 447.2 137.7 472.2 225.6zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
                </svg>
                <div>
                  <div style={{ fontSize: '10px', opacity: 0.6 }}>GET IT ON</div>
                  <div style={{ fontSize: '15px', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Şafak Sayar. Tüm Hakları Saklıdır.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-link">Gizlilik</Link>
            <Link to="/terms" className="footer-link">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
