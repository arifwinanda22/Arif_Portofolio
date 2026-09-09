// models/Message.js
// ==============================================================
// Skema Mongoose untuk menyimpan pesan dari form kontak.
// ==============================================================

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama wajib diisi.'],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, 'Email wajib diisi.'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Format email tidak valid.'],
    },
    message: {
      type: String,
      required: [true, 'Pesan tidak boleh kosong.'],
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // otomatis menambahkan createdAt & updatedAt
);

module.exports = mongoose.model('Message', messageSchema);