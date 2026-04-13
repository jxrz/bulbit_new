import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2 - 4 Personas',
    date: '',
    time: 'Almuerzo (11:30 - 15:00)',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Reserva Bulbit - ${formData.name}`;
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Número de personas: ${formData.guests}
Fecha: ${formData.date}
Horario preferido: ${formData.time}

Requisitos especiales / Ocasión:
${formData.message}
    `;
    
    window.location.href = `mailto:jarzinyolo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} | Bulbit Korean BBQ</title>
        <meta name="description" content={t('contact.subtitle')} />
      </Helmet>

      <div className="bg-background min-h-screen py-8 md:py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          
          {/* Header */}
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-4">{t('contact.title')}</h1>
              <p className="text-lg text-text-light max-w-2xl">
                {t('contact.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Info & Map */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Contact Info Cards */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-surface rounded-3xl p-6 md:p-8 shadow-soft border border-primary/5 flex flex-col gap-8"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-text-light uppercase tracking-wider mb-1">{t('contact.loc_title')}</h3>
                    <p className="text-text-dark font-medium leading-relaxed">
                      Tokio 52, Juárez, Cuauhtémoc<br />
                      06600 Cuauhtémoc, CDMX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-text-light uppercase tracking-wider mb-1">{t('contact.phone_title')}</h3>
                    <p className="text-text-dark font-medium leading-relaxed">
                      +52 55 5922 8402
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-text-light uppercase tracking-wider mb-1">{t('contact.hours_title')}</h3>
                    <p className="text-text-dark font-medium leading-relaxed">
                      {t('contact.hours_desc1')}<br />
                      <span className="text-text-light text-sm">{t('contact.hours_desc2')}</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-64 bg-primary/90 rounded-3xl overflow-hidden shadow-soft flex items-center justify-center border border-primary/20"
                style={{ backgroundImage: "url('/src/assets/images/mnwu9n10-ab9ky05.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-primary font-bold hover:scale-105 transition-transform cursor-pointer">
                    <Navigation size={18} />
                    {t('contact.map_btn')}
                  </div>
                  <p className="text-white/80 text-sm mt-4 text-center px-4 drop-shadow">{t('contact.map_desc')}</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-surface rounded-3xl p-6 md:p-10 shadow-soft border border-primary/5"
              >
                <div className="mb-8">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{t('contact.form_subtitle')}</p>
                  <h2 className="text-3xl font-bold text-text-dark mb-2">{t('contact.form_title')}</h2>
                  <p className="text-text-light text-sm">
                    {t('contact.form_desc')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-text-light uppercase tracking-wider">{t('contact.lbl_name')}</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.plh_name')}
                        className="bg-secondary/10 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-text-light uppercase tracking-wider">{t('contact.lbl_email')}</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.plh_email')}
                        className="bg-secondary/10 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="guests" className="text-xs font-bold text-text-light uppercase tracking-wider">{t('contact.lbl_guests')}</label>
                      <select 
                        id="guests" 
                        name="guests" 
                        value={formData.guests}
                        onChange={handleChange}
                        className="bg-secondary/10 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                      >
                        <option>{t('contact.opt_guest1')}</option>
                        <option>{t('contact.opt_guest2')}</option>
                        <option>{t('contact.opt_guest3')}</option>
                        <option>{t('contact.opt_guest4')}</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="date" className="text-xs font-bold text-text-light uppercase tracking-wider">{t('contact.lbl_date')}</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-secondary/10 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="time" className="text-xs font-bold text-text-light uppercase tracking-wider">{t('contact.lbl_time')}</label>
                      <select 
                        id="time" 
                        name="time" 
                        value={formData.time}
                        onChange={handleChange}
                        className="bg-secondary/10 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                      >
                        <option>{t('contact.opt_time1')}</option>
                        <option>{t('contact.opt_time2')}</option>
                        <option>{t('contact.opt_time3')}</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-text-light uppercase tracking-wider">{t('contact.lbl_msg')}</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.plh_msg')}
                      className="bg-secondary/10 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-[0_8px_20px_-6px_rgba(25,102,154,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(25,102,154,0.6)] hover:-translate-y-0.5"
                    >
                      {t('contact.btn_submit')}
                    </button>
                    <p className="text-center text-xs text-text-light mt-4 px-4">
                      {t('contact.form_disclaimer')}
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}