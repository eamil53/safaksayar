import { useState } from 'react';
import { BookOpen, PenTool, Palette, Award, Zap } from 'lucide-react';
import CountdownCalc from '../components/CountdownCalc';

export default function Home() {
  const [activeScreen, setActiveScreen] = useState('main');

  const screenshots = [
    { id: 'main', name: 'Sayaç Ekranı', src: '/screen-main.png', desc: 'Sülüs, Terhis, Kalan/Geçen Gün ve Tamamlanma oranınızı anlık görün.' },
    { id: 'info', name: 'Bilgi Ekranı', src: '/screen-info.png', desc: 'Soru çözerek eğlenin, rütbelere bakın, not alın ve şafak sözlerini okuyun.' },
    { id: 'widget', name: 'Widget Desteği', src: '/screen-widget.png', desc: 'Şafak sayacınızı telefonunuzun ana ekranına ekleyin ve anlık takip edin.' },
    { id: 'panel', name: 'Yönetim Paneli', src: '/screen-panel.png', desc: 'Profil bilgilerinizi düzenleyin, arka planı değiştirin ve hesabı yönetin.' },
    { id: 'themes', name: 'Askeri Temalar', src: '/screen-themes.png', desc: 'Uygulamanın temasını dilediğiniz askeri arka plan görselleriyle özelleştirin.' }
  ];

  const activeScreenshot = screenshots.find(s => s.id === activeScreen);

  return (
    <>
      {/* Background Glow Effect */}
      <div className="bg-glow-container">
        <div className="bg-glow-red"></div>
        <div className="bg-glow-blue"></div>
      </div>

      {/* Hero Section */}
      <section className="section container">
        <div className="hero-grid">
          <div className="hero-content animate-slide-up">
            <span className="hero-tag">Askerlik Sayacı 2026</span>
            <h1 className="hero-title text-gradient-red">
              Şafak Takip Etmek Artık Çok Daha Kolay!
            </h1>
            <p className="hero-desc">
              Askerlik şafağınızı, kalan günlerinizi ve terhis tarihinizi anlık takip edin. Widget desteği, soru çözme modülleri, rütbe listeleri ve özel askeri temalar ile askerlik sürecinizi kolaylaştırın.
            </p>
            
            <div className="hero-ctas">
              <a href="#calculator" className="btn btn-primary">
                Şafağını Hesapla
              </a>
              <a href="#features" className="btn btn-secondary">
                Uygulama Özellikleri
              </a>
            </div>

            <div className="app-stats">
              <div className="stat-item">
                <span className="stat-value">5.0</span>
                <span className="stat-label">Puan</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">10K+</span>
                <span className="stat-label">İndirme</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">iOS & Android</span>
                <span className="stat-label">Platform</span>
              </div>
            </div>
          </div>

          {/* Interactive Screenshot Showcase */}
          <div className="hero-mockup animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mockup-glow"></div>
            <div className="screenshot-container">
              <img 
                src={activeScreenshot.src} 
                alt={activeScreenshot.name} 
                className="app-screenshot" 
                key={activeScreenshot.src} /* Key forces remount/animation */
              />
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Navigator Tabs */}
      <section className="container" style={{ paddingBottom: '60px' }}>
        <div className="screenshot-viewer animate-slide-up">
          <div className="screenshot-tabs">
            {screenshots.map((screen) => (
              <button
                key={screen.id}
                className={`screenshot-tab-btn ${activeScreen === screen.id ? 'active' : ''}`}
                onClick={() => setActiveScreen(screen.id)}
              >
                {screen.name}
              </button>
            ))}
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '500px', margin: '0 auto' }}>
            <strong>{activeScreenshot.name}:</strong> {activeScreenshot.desc}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Özellikler</span>
            <h2 className="section-title">Şafak Sayar ile Neler Yapabilirsiniz?</h2>
            <p className="section-desc">
              Uygulamamız yalnızca bir gün sayacı değil, vatani göreviniz boyunca size eşlik edecek gelişmiş bir asistan uygulamasıdır.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Zap size={24} />
              </div>
              <h3 className="feature-card-title">Anlık Şafak Sayacı</h3>
              <p className="feature-card-desc">
                Sülüs tarihinizi girdikten sonra geçen gün, kalan gün ve askerlik tamamlanma yüzdenizi net, anlaşılır grafiklerle takip edin.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <BookOpen size={24} />
              </div>
              <h3 className="feature-card-title">Soru Çöz & Öğren</h3>
              <p className="feature-card-desc">
                Kim Milyoner Olmak İster benzeri mini testlerle vakit geçirin. Sıkça Sorulan Sorular, iller ve plaka kodları ve rütbeleri öğrenin.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <PenTool size={24} />
              </div>
              <h3 className="feature-card-title">Not Tut & Hatıra</h3>
              <p className="feature-card-desc">
                Askerlik anılarınızı ve günlük görevlerinizi not tutma modülü sayesinde kaydederek kalıcı birer hatıra haline getirin.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Palette size={24} />
              </div>
              <h3 className="feature-card-title">Özel Askeri Temalar</h3>
              <p className="feature-card-desc">
                Uygulama arka planını kara, deniz, hava veya jandarma temalı yüksek kaliteli askeri görsellerle kendi tarzınıza göre süsleyin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Calculator Section */}
      <section id="calculator" className="section calc-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Test Et</span>
            <h2 className="section-title">İnteraktif Şafak Hesaplayıcı</h2>
            <p className="section-desc">
              Aşağıdaki alanları doldurarak şafağınızı anında web sitemizde hesaplayabilir ve uygulamanın hesaplama mantığını test edebilirsiniz.
            </p>
          </div>

          <CountdownCalc />
        </div>
      </section>

      {/* Widgets & iOS Integration Section */}
      <section id="widgets" className="section" style={{ background: 'rgba(215, 4, 41, 0.02)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="widget-grid">
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span className="section-tag">Widget Desteği</span>
              <h2 className="section-title" style={{ fontSize: '36px' }}>Ana Ekranınızda Şafağınız Hep Göz Önünde!</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Uygulamayı açmanıza gerek kalmadan, iOS veya Android cihazınızın ana ekranına şafak widget'larını ekleyebilirsiniz. Farklı boyut ve tasarımlardaki şık widget'larımız sayesinde kalan gün sayınız her zaman kilit ekranınızda veya ana sayfanızda güncel olarak görüntülenir.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={18} style={{ color: 'var(--color-primary)' }} />
                  <span>Küçük Boyut Widget (2x2) ile sade ve şık gün takibi</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={18} style={{ color: 'var(--color-primary)' }} />
                  <span>Orta Boyut Widget (4x2) ile ilerleme çubuğu ve sülüs/terhis tarihleri</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={18} style={{ color: 'var(--color-primary)' }} />
                  <span>Karanlık Mod ve aydınlık mod renk uyumu</span>
                </li>
              </ul>
            </div>

            {/* Render Simulated Widgets (matching user's screen 3) */}
            <div className="widget-preview-area">
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                
                {/* 2x2 widget */}
                <div className="ios-widget-small">
                  <div className="widget-star">★ ŞAFAK SAYAR</div>
                  <div style={{ marginTop: '20px' }}>
                    <div className="widget-days-val">210</div>
                    <div className="widget-days-lbl">GÜN</div>
                  </div>
                  <div>
                    <div className="widget-label" style={{ background: 'rgba(255,255,255,0.15)', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>BRO</div>
                    <div className="widget-footer-text" style={{ marginTop: '4px' }}>Vatan Sağ Olsun!</div>
                  </div>
                </div>

                {/* another 2x2 simulated mockup */}
                <div className="ios-widget-small" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
                  <div className="widget-star">★ ŞAFAK SAYAR</div>
                  <div style={{ marginTop: '20px' }}>
                    <div className="widget-days-val" style={{ color: 'var(--color-secondary)' }}>210</div>
                    <div className="widget-days-lbl">GÜN</div>
                  </div>
                  <div>
                    <div className="widget-label" style={{ background: 'rgba(255,255,255,0.15)', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>MEHMETÇİK</div>
                    <div className="widget-footer-text" style={{ marginTop: '4px' }}>%40 Tamamlandı</div>
                  </div>
                </div>

              </div>

              {/* 4x2 medium widget */}
              <div className="ios-widget-medium">
                <div className="widget-med-grid">
                  <div className="widget-med-left">
                    <span className="widget-star">★ ŞAFAK SAYAR</span>
                    <div>
                      <div className="widget-days-val">210</div>
                      <div className="widget-days-lbl">GÜN</div>
                    </div>
                    <div>
                      <div className="widget-label" style={{ background: 'rgba(255,255,255,0.15)', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>BRO</div>
                    </div>
                  </div>
                  
                  <div className="widget-med-right">
                    <div>
                      <div className="widget-progress-txt">Tamamlanan</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                        <div style={{ width: '80px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: '40%', height: '100%', background: '#fff' }}></div>
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: 'bold' }}>40%</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '9px', opacity: 0.9 }}>
                      <div>Sülüs: <span style={{ fontWeight: 'bold' }}>15.01.2026</span></div>
                      <div>Terhis: <span style={{ fontWeight: 'bold' }}>05.01.2027</span></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
