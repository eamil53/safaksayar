import React, { useState, useEffect } from 'react';
import { Calendar, Shield, Clock, MapPin, Compass } from 'lucide-react';

export default function CountdownCalc() {
  const [sulusDate, setSulusDate] = useState('2026-02-15');
  const [serviceType, setServiceType] = useState('6'); // 6 Months (Er) or 12 Months (Yedek Subay/Astsubay)
  const [yolIzni, setYolIzni] = useState(2); // Travel leave (1-4 days)
  const [usedIzni, setUsedIzni] = useState(0); // Used leave days
  const [askerlikYeri, setAskerlikYeri] = useState('Ardahan');
  const [memleket, setMemleket] = useState('Batman');

  // Outputs
  const [safak, setSafak] = useState(180);
  const [atarsa, setAtarsa] = useState(179);
  const [terhisDate, setTerhisDate] = useState('');
  const [gecenGun, setGecenGun] = useState(0);
  const [kalanSüreFormatted, setKalanSüreFormatted] = useState('');
  const [gecenSüreFormatted, setGecenSüreFormatted] = useState('');
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    calculateSafak();
  }, [sulusDate, serviceType, yolIzni, usedIzni]);

  const calculateSafak = () => {
    const today = new Date();
    // Reset hours to compare dates accurately
    today.setHours(0, 0, 0, 0);

    const sulus = new Date(sulusDate);
    sulus.setHours(0, 0, 0, 0);

    // 1. Base Service Days
    const baseDays = serviceType === '6' ? 180 : 365;
    const maxLeaveAllowed = serviceType === '6' ? 12 : 24;

    // 2. Unused leave reduces service length
    const unusedLeave = Math.max(0, maxLeaveAllowed - parseInt(usedIzni || 0));
    
    // Total net service days from sülüs
    // Net Days = Base Days - Yol Izni - Unused Leave
    const netDays = baseDays - parseInt(yolIzni || 0) - unusedLeave;

    // 3. Terhis Tarihi (Discharge Date)
    const terhis = new Date(sulus);
    terhis.setDate(sulus.getDate() + netDays);
    
    // Format Terhis Date (DD.MM.YYYY)
    const formattedTerhis = terhis.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    setTerhisDate(formattedTerhis);

    // 4. Time calculations
    const totalTimeDiff = terhis.getTime() - sulus.getTime();
    const elapsedTimeDiff = today.getTime() - sulus.getTime();

    let calculatedGecen = Math.floor(elapsedTimeDiff / (1000 * 60 * 60 * 24));
    if (calculatedGecen < 0) calculatedGecen = 0;
    if (calculatedGecen > netDays) calculatedGecen = netDays;

    let calculatedKalan = Math.floor((terhis.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (calculatedKalan < 0) calculatedKalan = 0;
    if (calculatedKalan > netDays) calculatedKalan = netDays;

    setGecenGun(calculatedGecen);
    setSafak(calculatedKalan);
    setAtarsa(calculatedKalan > 0 ? calculatedKalan - 1 : 0);

    // Formatted time outputs (Days, Hours, Minutes simulation)
    setKalanSüreFormatted(`${calculatedKalan} Gün 09 Saat 29 Dakika`);
    setGecenSüreFormatted(`${calculatedGecen} Gün 14 Saat 30 Dakika`);

    // Percentage
    const pct = netDays > 0 ? Math.round((calculatedGecen / netDays) * 100) : 0;
    setPercentage(pct);
  };

  return (
    <div className="calc-grid animate-slide-up">
      {/* Inputs Form */}
      <div className="calc-card-input">
        <h3 style={{ fontSize: '24px', marginBottom: '24px', textAlign: 'left', fontFamily: 'var(--font-heading)' }}>
          Şafak Bilgilerini Girin
        </h3>
        
        <div className="form-group">
          <label>Sülüs Tarihi (Başlangıç)</label>
          <div style={{ position: 'relative' }}>
            <input 
              type="date" 
              className="form-control" 
              value={sulusDate}
              onChange={(e) => setSulusDate(e.target.value)} 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Askerlik Tipi</label>
            <select 
              className="form-control"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="6">Er / Erbaş (6 Ay)</option>
              <option value="12">Yedek Subay / Astsubay (12 Ay)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Yol İzni (Gün)</label>
            <select 
              className="form-control"
              value={yolIzni}
              onChange={(e) => setYolIzni(parseInt(e.target.value))}
            >
              <option value="1">1 Gün</option>
              <option value="2">2 Gün</option>
              <option value="3">3 Gün</option>
              <option value="4">4 Gün</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Kullanılan İzin (Gün)</label>
            <input 
              type="number" 
              min="0" 
              max={serviceType === '6' ? '12' : '24'}
              className="form-control"
              value={usedIzni}
              onChange={(e) => setUsedIzni(Math.max(0, parseInt(e.target.value) || 0))}
              placeholder="Örn: 5"
            />
          </div>

          <div className="form-group">
            <label>Askerlik Yeri</label>
            <input 
              type="text" 
              className="form-control" 
              value={askerlikYeri}
              onChange={(e) => setAskerlikYeri(e.target.value)}
              placeholder="Örn: Ankara"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Memleket (Plaka Takibi İçin)</label>
          <input 
            type="text" 
            className="form-control" 
            value={memleket}
            onChange={(e) => setMemleket(e.target.value)}
            placeholder="Örn: İstanbul"
          />
        </div>
        
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'left', marginTop: '12px' }}>
          * Sülüs tarihi, resmi olarak birliğinize teslim olduğunuz tarihtir.
        </p>
      </div>

      {/* App Interface Mockup Preview */}
      <div className="calc-card-result">
        <div className="result-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.1em' }}>
              Uygulama İçi Önizleme
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>İzleme Ekranı</span>
          </div>
          
          {/* Simulated App Card */}
          <div className="result-app-profile">
            <div className="profile-avatar">🇹🇷</div>
            <div className="profile-info">
              <span className="profile-name">MEHMETÇİK</span>
              <span className="profile-title">ASKER - {serviceType === '6' ? 'ER / ERBAŞ' : 'ASTSUBAY'}</span>
              <span className="profile-days">Şafak: {safak} | Atarsa: {atarsa}</span>
            </div>
          </div>
        </div>

        {/* Simulated Countdown Cards */}
        <div>
          <div className="result-countdown-grid">
            <div className="result-countdown-card">
              <div className="result-countdown-title">Kalan Süre</div>
              <div className="result-countdown-val" style={{ color: 'var(--color-primary)' }}>{safak} Gün</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>09s 29d kalan</div>
            </div>

            <div className="result-countdown-card">
              <div className="result-countdown-title">Geçen Süre</div>
              <div className="result-countdown-val" style={{ color: 'var(--color-success)' }}>{gecenGun} Gün</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>14s 30d geçen</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="result-progress-container">
            <div className="progress-label-row">
              <span>Askerlik Tamamlanma Oranı</span>
              <span>%{percentage}</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
        </div>

        {/* Simulated Dates List */}
        <div className="result-dates-list">
          <div className="result-date-row">
            <span className="result-date-label">Sülüs Tarihi</span>
            <span className="result-date-value">
              {new Date(sulusDate).toLocaleDateString('tr-TR')}
            </span>
          </div>

          <div className="result-date-row">
            <span className="result-date-label">Terhis Tarihi</span>
            <span className="result-date-value" style={{ color: 'var(--color-primary)' }}>
              {terhisDate}
            </span>
          </div>

          <div className="result-date-row">
            <span className="result-date-label">Askerlik Yeri</span>
            <span className="result-date-value">{askerlikYeri}</span>
          </div>

          <div className="result-date-row">
            <span className="result-date-label">Memleket</span>
            <span className="result-date-value">{memleket}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
