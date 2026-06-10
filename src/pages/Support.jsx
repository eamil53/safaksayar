import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Mail,
} from "lucide-react";
import SupportForm from "../components/SupportForm";

export default function Support() {
  const [activeTab, setActiveTab] = useState("faq"); // 'faq' or 'contact'
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      q: "Sülüs Tarihi nedir ve hesaplamayı nasıl etkiler?",
      a: "Sülüs tarihi, askeri birliğinize teslim olmanız gereken resmi sevk başlangıç tarihidir. Bu tarih, terhis tarihinizin ve şafak kalan sürenizin hesaplanmasındaki ana referans noktasıdır.",
    },
    {
      q: "Yol izni ve yasal izinler şafaktan nasıl düşülür?",
      a: "6 aylık erlik hizmetinde 12 gün, 12 aylık yedek subaylıkta ise 24 gün yasal izin hakkınız bulunur. Kullanmadığınız her izin günü şafağınızı 1 gün kısaltır (erken terhis olursunuz). Yol izni (genellikle 1 ila 4 gün arası) ise askerlik süresini baştan düşerek şafağı doğrudan azaltır.",
    },
    {
      q: "Uygulamadaki widgetlar ana ekrana nasıl eklenir?",
      a: 'iOS cihazınızda: Ana ekrandaki boş bir alana basılı tutun, sol üst köşedeki "+" simgesine dokunun, "Şafak Sayar"ı aratın ve dilediğiniz boyuttaki widgetı seçip "Widget Ekle" butonuna basın. Android cihazınızda ise ana ekrana basılı tutup "Araçlar/Widgets" menüsünden ekleyebilirsiniz.',
    },
    {
      q: "Not tutma özelliğindeki verilerim nerede saklanıyor?",
      a: "Askerlik anılarınızı kaydettiğiniz günlük notlarınız tamamen yerel olarak cihazınızın güvenli hafızasında (on-device) saklanır. Sunucularımıza hiçbir kişisel not veya anı verisi gönderilmez, verileriniz tamamen size özel ve gizlidir.",
    },
    {
      q: "Kim Milyoner Olmak İster ve Soru Modülü nedir?",
      a: "Askerlik süresince boş vakitlerinizi değerlendirebilmeniz için askeri terimler, genel kültür ve plaka kodlarından oluşan bilgi testleridir. Bu testleri çözerek bilgilerinizi tazeleyebilir ve keyifli vakit geçirebilirsiniz.",
    },
    {
      q: "Uygulama içi temaları nasıl değiştirebilirim?",
      a: 'Yönetim panelinden "Arka Plan Değiştir" veya "Temalar" menüsüne girerek, jandarma, komando, havacı veya karacı gibi yüksek çözünürlüklü askeri arka plan görsellerinden dilediğinizi seçip uygulama ana ekranını kişiselleştirebilirsiniz.',
    },
  ];

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <>
      <div className="bg-glow-container">
        <div className="bg-glow-red"></div>
        <div className="bg-glow-blue"></div>
      </div>

      <div className="container support-container animate-fade-in">
        <div className="support-header">
          <span className="section-tag">Destek Merkezi</span>
          <h1
            className="hero-title"
            style={{ fontSize: "48px", marginTop: "12px" }}
          >
            Size Nasıl Yardımcı Olabiliriz?
          </h1>
          <p className="hero-desc" style={{ margin: "16px auto 0 auto" }}>
            Şafak Sayar uygulaması ile ilgili aklınıza takılan soruların
            yanıtlarını bulun veya destek ekibimizle iletişime geçin.
          </p>
        </div>

        {/* Support Tabs */}
        <div className="support-tabs">
          <button
            className={`support-tab-btn ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => setActiveTab("faq")}
          >
            Sıkça Sorulan Sorular
          </button>
          <button
            className={`support-tab-btn ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Destek Talebi Gönder
          </button>
        </div>

        {/* Tab Contents */}
        <div style={{ marginBottom: "80px" }}>
          {activeTab === "faq" ? (
            <div className="faq-list animate-slide-up">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-item ${openFaqIndex === idx ? "active" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="calc-grid">
              <SupportForm />

              <div
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  padding: "20px",
                }}
              >
                <h4
                  style={{
                    fontSize: "20px",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Diğer İletişim Kanalları
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
                  Aşağıdaki kanallardan da bize ulaşabilirsiniz. Hafta içi mesai
                  saatleri içerisinde gönderilen taleplere genellikle 24 saat
                  içinde dönüş sağlanır.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      className="feature-icon-wrapper"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div
                        style={{ fontSize: "12px", color: "var(--text-muted)" }}
                      >
                        E-posta
                      </div>
                      <a
                        href="mailto:bayesatechnology@gmail.com"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                      >
                        bayesatechnology@gmail.com
                      </a>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      className="feature-icon-wrapper"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <HelpCircle size={18} />
                    </div>
                    <div>
                      <div
                        style={{ fontSize: "12px", color: "var(--text-muted)" }}
                      >
                        Geliştirici Web Sitesi
                      </div>
                      <a
                        href="https://safaksayar.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                      >
                        safaksayar.vercel.app
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
