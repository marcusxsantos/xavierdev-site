import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader as Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section__title">{t.contact.title}</h2>
        <p className="section__subtitle">{t.contact.subtitle}</p>
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon"><Phone size={22} /></div>
              <div>
                <h4>{t.contact.phone}</h4>
                <p>(21) 3272-2636</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon"><Mail size={22} /></div>
              <div>
                <h4>{t.contact.email}</h4>
                <p>contato@xavierdev.com.br</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon"><MapPin size={22} /></div>
              <div>
                <h4>{t.contact.address}</h4>
                <p>Rua São Brás, 68 - B2 - 304<br />Todos Os Santos<br />Rio de Janeiro - RJ<br />CEP: 20.770-150</p>
              </div>
            </div>
            <div className="contact__company">
              <h4>{t.contact.companyInfo}</h4>
              <p><strong>{t.contact.companyName}</strong><br />Xavier Dev Serviços em Informática EIRELI - ME</p>
              <p><strong>CNPJ:</strong> 28.651.037/0001-07</p>
              <p><strong>{t.contact.activity}</strong><br />{t.contact.activityDesc}</p>
            </div>
            <div className="contact__social">
              <a href="https://instagram.com/xavierdev" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="https://facebook.com/xavierdev" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="https://linkedin.com/company/xavierdev" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input type="text" id="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t.contact.form.phone}</label>
              <input type="tel" id="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea id="message" rows="5" value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn--primary btn--full" disabled={sending}>
              {sending ? <><Loader2 size={18} className="spin" /> {t.contact.form.sending}</> : <><Send size={18} /> {t.contact.form.submit}</>}
            </button>
            {status === 'success' && <div className="form-msg form-msg--success">{t.contact.form.success}</div>}
            {status === 'error' && <div className="form-msg form-msg--error">{t.contact.form.error}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
