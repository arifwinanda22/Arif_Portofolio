// src/components/ContactForm.jsx
// ==============================================================
// Form kontak (email + pesan) yang mengirim data ke backend API.
// Ditempatkan di dalam Footer atau sebagai section terpisah.
// ==============================================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Ganti dengan URL backend Anda setelah di-deploy
// (gunakan environment variable agar mudah dikonfigurasi per environment)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Hapus error field ini saat user mulai mengetik ulang
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Nama wajib diisi.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Email wajib diisi.';
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = 'Format email tidak valid.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Pesan tidak boleh kosong.';
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Pesan minimal 10 karakter.';
    }
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setServerMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || 'Terjadi kesalahan pada server.');
      }

      setStatus('success');
      setServerMessage(result.message || 'Pesan berhasil dikirim. Terima kasih!');
      setFormData(initialFormState);
    } catch (error) {
      setStatus('error');
      setServerMessage(error.message || 'Gagal mengirim pesan. Silakan coba lagi.');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem' }}>
          Nama
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nama Anda"
          disabled={status === 'loading'}
        />
        {errors.name && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '4px' }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem' }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email@contoh.com"
          disabled={status === 'loading'}
        />
        {errors.email && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '4px' }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem' }}>
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tulis pesan Anda di sini..."
          disabled={status === 'loading'}
        />
        {errors.message && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '4px' }}>{errors.message}</p>}
      </div>

      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
      </button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ color: '#34d399', fontSize: '0.9rem' }}
          >
            {serverMessage}
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ color: '#f87171', fontSize: '0.9rem' }}
          >
            {serverMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

export default ContactForm;