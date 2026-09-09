// routes/contactRoutes.js
// ==============================================================
// Definisi endpoint untuk fitur form kontak.
// ==============================================================

const express = require('express');
const { createMessage, getAllMessages } = require('../controllers/contactController');

const router = express.Router();

// Endpoint publik — dipanggil oleh ContactForm.jsx di frontend
router.post('/', createMessage);

// Endpoint privat — sebaiknya ditambahkan middleware autentikasi
// sebelum digunakan di produksi (lihat README.md)
router.get('/', getAllMessages);

module.exports = router;