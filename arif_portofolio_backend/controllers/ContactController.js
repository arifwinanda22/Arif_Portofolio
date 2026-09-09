const Message = require('../models/Message');

const recentSubmissions = new Map(); 
const SUBMISSION_COOLDOWN_MS = 30 * 1000; 

function isRateLimited(ip) {
  const lastSubmittedAt = recentSubmissions.get(ip);
  if (!lastSubmittedAt) return false;
  return Date.now() - lastSubmittedAt < SUBMISSION_COOLDOWN_MS;
}

async function createMessage(req, res) {
  try {
    const ip = req.ip;

    if (isRateLimited(ip)) {
      return res.status(429).json({
        success: false,
        message: 'Anda baru saja mengirim pesan. Silakan tunggu beberapa saat sebelum mengirim lagi.',
      });
    }

    const { name, email, message } = req.body;

    
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Nama, email, dan pesan wajib diisi.',
      });
    }

    const newMessage = await Message.create({ name, email, message });

    recentSubmissions.set(ip, Date.now());


    return res.status(201).json({
      success: true,
      message: 'Pesan berhasil dikirim. Terima kasih telah menghubungi saya!',
      data: {
        id: newMessage._id,
        createdAt: newMessage.createdAt,
      },
    });
  } catch (error) {
    // Error validasi dari Mongoose (misal format email salah)
    if (error.name === 'ValidationError') {
      const firstError = Object.values(error.errors)[0]?.message;
      return res.status(400).json({
        success: false,
        message: firstError || 'Data yang dikirim tidak valid.',
      });
    }

    console.error('Error saat menyimpan pesan kontak:', error);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server. Silakan coba lagi nanti.',
    });
  }
}

// (Opsional) Endpoint untuk melihat daftar pesan masuk — hanya untuk Anda sendiri,
// sebaiknya dilindungi dengan autentikasi (lihat catatan di README).
async function getAllMessages(req, res) {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error('Error saat mengambil daftar pesan:', error);
    return res.status(500).json({
      success: false,
      message: 'Gagal mengambil daftar pesan.',
    });
  }
}

module.exports = { createMessage, getAllMessages };