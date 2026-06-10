import React from "react";

export default function Terms() {
  return (
    <div className="container legal-container animate-fade-in">
      <div className="legal-header">
        <h1 className="hero-title" style={{ fontSize: "36px" }}>
          Kullanım Koşulları
        </h1>
        <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>
          Son Güncelleme: 9 Haziran 2026
        </p>
      </div>

      <div className="legal-content">
        <p>
          <strong>Şafak Sayar 2026</strong> mobil uygulamasını ve web sitesini
          kullanarak aşağıdaki kullanım koşullarını kabul etmiş bulunuyorsunuz.
          Lütfen hizmetimizi kullanmadan önce bu koşulları dikkatlice okuyunuz.
        </p>

        <h2>1. Hizmetin Kullanımı ve Sorumluluk</h2>
        <p>
          Şafak Sayar uygulaması, askerlik görevini yerine getiren kullanıcılara
          şafak takibi, bilgi testi çözme ve not tutma özellikleri sunan
          yardımcı bir asistan uygulamasıdır.
        </p>
        <ul>
          <li>
            <strong>Hesaplama Doğruluğu:</strong> Uygulama tarafından yapılan
            hesaplamalar, kullanıcı tarafından girilen verilere dayanmaktadır.
            Hesaplanan tarihler genel bilgilendirme amaçlıdır. Terhis
            tarihlerinde resmi makamların (Milli Savunma Bakanlığı, Askerlik
            Şubeleri vb.) belirlediği tarihlerin esas alınması gerekmektedir.
            Oluşabilecek ufak gün farklarından veya hesaplama hatalarından
            uygulama geliştiricisi sorumlu tutulamaz.
          </li>
          <li>
            <strong>Kullanıcı Verileri:</strong> Uygulama verilerinizi yerel
            hafızada saklar. Cihazın kaybolması, sıfırlanması veya uygulamanın
            silinmesi durumunda notlarınızın ve ayarlarınızın kaybolmasından
            kullanıcı sorumludur.
          </li>
        </ul>

        <h2>2. Fikri Mülkiyet</h2>
        <p>
          Uygulama tasarımı, logolar, kodlar ve diğer tüm içeriklerin fikri
          mülkiyet hakları uygulama geliştiricisine aittir. Bu içeriklerin
          izinsiz kopyalanması, dağıtılması veya tersine mühendislik yapılması
          yasaktır.
        </p>

        <h2>3. Koşullarda Değişiklik Yapılması</h2>
        <p>
          Bu kullanım koşullarını dilediğimiz zaman güncelleme hakkını saklı
          tutarız. Koşullarda yapılan değişiklikler web sitemizde yayınlandığı
          andan itibaren geçerlilik kazanır.
        </p>

        <h2>4. İletişim</h2>
        <p>
          Kullanım koşullarıyla ilgili her türlü bildirim ve sorunuz için
          bizimle{" "}
          <a
            href="mailto:bayesatechnology@gmail.com"
            style={{ color: "var(--color-primary)" }}
          >
            bayesatechnology@gmail.com
          </a>{" "}
          adresi üzerinden irtibat kurabilirsiniz.
        </p>
      </div>
    </div>
  );
}
