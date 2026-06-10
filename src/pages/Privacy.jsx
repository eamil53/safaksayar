import React from 'react';

export default function Privacy() {
  return (
    <div className="container legal-container animate-fade-in">
      <div className="legal-header">
        <h1 className="hero-title" style={{ fontSize: '36px' }}>Gizlilik Politikası</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Son Güncelleme: 9 Haziran 2026</p>
      </div>
      
      <div className="legal-content">
        <p>
          <strong>Şafak Sayar 2026</strong> mobil uygulaması ve web sitesi olarak gizliliğinize büyük önem veriyoruz. Bu gizlilik politikası metni, uygulamamızı ve web sitemizi kullanırken hangi verilerinizin işlendiğini ve gizliliğinizin nasıl korunduğunu açıklamaktadır.
        </p>

        <h2>1. Veri Toplama ve İşleme İlkeleri</h2>
        <p>
          Şafak Sayar uygulaması, <strong>çevrimdışı (offline-first)</strong> çalışma prensibiyle tasarlanmıştır. Bu bağlamda:
        </p>
        <ul>
          <li><strong>Hesaplama Verileri:</strong> Girdiğiniz sülüs tarihi, memleket, askerlik yeri, kullanılan izin ve yol izni bilgileri yalnızca cihazınızın kendi güvenli hafızasında (yerel depolama) saklanır. Bu veriler hiçbir uzak sunucuya aktarılmaz.</li>
          <li><strong>Günlük Notları:</strong> Not Tutma modülünde oluşturduğunuz kişisel hatıra ve anı notlarınız tamamen yerel veri tabanında tutulur ve üçüncü taraflarla paylaşılmaz.</li>
        </ul>

        <h2>2. Analitik ve Üçüncü Taraf Hizmetleri</h2>
        <p>
          Uygulama performansını izlemek ve hataları tespit edebilmek amacıyla standart analitik araçları (örneğin Apple App Store Analytics) kullanılabilir. Bu araçlar yalnızca kişisel olmayan, anonim cihaz ve hata verilerini (çökme raporları, cihaz modeli vb.) toplar.
        </p>

        <h2>3. Bilgi Güvenliği</h2>
        <p>
          Cihazınızda saklanan verilerin güvenliğini sağlamak amacıyla cihazınızın kendi şifreleme mekanizmaları kullanılır. Uygulamanın silinmesi durumunda, cihazınızda saklanan tüm yerel veriler (notlar ve şafak ayarları) otomatik olarak kalıcı olarak silinir.
        </p>

        <h2>4. Çocukların Gizliliği</h2>
        <p>
          Uygulamamız 13 yaşın altındaki çocukları hedef almamaktadır ve bilerek bu yaş grubundaki çocuklardan veri toplamamaktadır.
        </p>

        <h2>5. İletişim</h2>
        <p>
          Gizlilik politikamız hakkında sorularınız olması durumunda bizimle <a href="mailto:destek@safaksayar2026.com" style={{ color: 'var(--color-primary)' }}>destek@safaksayar2026.com</a> e-posta adresi üzerinden iletişime geçebilirsiniz.
        </p>
      </div>
    </div>
  );
}
