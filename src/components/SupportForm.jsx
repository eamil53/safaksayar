import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, User } from 'lucide-react';

export default function SupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'feedback',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message to support API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'feedback',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="support-form-card animate-slide-up">
      <h3 style={{ fontSize: '24px', marginBottom: '8px', textAlign: 'left', fontFamily: 'var(--font-heading)' }}>
        Bize Ulaşın
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '32px', textAlign: 'left' }}>
        Şafak Sayar mobil uygulaması ile ilgili her türlü soru, hata bildirimi veya önerinizi aşağıdaki form aracılığıyla bize iletebilirsiniz. Destek ekibimiz en kısa sürede dönüş yapacaktır.
      </p>

      {isSuccess && (
        <div className="form-success-alert animate-fade-in">
          <CheckCircle2 size={20} />
          <span>Mesajınız başarıyla iletildi! En kısa sürede e-posta adresinize geri dönüş yapacağız.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="form-group">
          <label>Adınız Soyadınız</label>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Örn: Ahmet Yılmaz"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label>E-posta Adresiniz</label>
          <div>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Örn: ahmet@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label>Konu</label>
          <select 
            className="form-control"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          >
            <option value="feedback">Genel Öneri / Geri Bildirim</option>
            <option value="bug">Hata Bildirimi (Bug Report)</option>
            <option value="feature">Yeni Özellik Talebi</option>
            <option value="other">Diğer</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mesajınız</label>
          <textarea 
            className="form-control" 
            rows="5"
            placeholder="Destek almak istediğiniz konuyu detaylıca açıklayınız..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{ resize: 'vertical', minHeight: '120px' }}
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
          style={{ width: '100%', justifyContent: 'center', height: '48px', gap: '10px' }}
        >
          {isSubmitting ? (
            <span>Gönderiliyor...</span>
          ) : (
            <>
              <Send size={16} />
              <span>Mesajı Gönder</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
