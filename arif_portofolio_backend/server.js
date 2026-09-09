// server.js
// ==============================================================
// Entry point backend: setup Express, koneksi MongoDB, CORS,
// dan pendaftaran routes.
// ==============================================================

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const ALLOWED_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';

// ---------------- Middleware ----------------
app.use(express.json());
app.use(
  cors({
    origin: ALLOWED_ORIGIN, // hanya izinkan domain frontend Anda
    methods: ['GET', 'POST'],
  })
);

// ---------------- Routes ----------------
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Contact API is running.');
});

// ---------------- 404 handler ----------------
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint tidak ditemukan.' });
});

// ---------------- Koneksi Database & Start Server ----------------
async function startServer() {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI belum diset di file .env');
    }

    await mongoose.connect(MONGODB_URI);
    console.log('✅ Terhubung ke MongoDB');

    app.listen(PORT, () => {
      console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Gagal menjalankan server:', error.message);
    process.exit(1);
  }
}

startServer();