# Bé Học Tiếng Anh — 7 Trò Chơi

Webapp học tập cho bé lớp 1, dùng chung kho **108 từ vựng cơ bản** (có nghĩa tiếng Việt) với 7 trò chơi:

| Trò chơi | Cách chơi |
|---|---|
| 🐝 Điền chữ còn thiếu | Nhìn hình, điền chữ cái còn thiếu vào từ |
| 🔊 Nghe và chọn hình | Nghe từ tiếng Anh rồi chọn đúng hình |
| 🖼️ Nhìn hình chọn từ | Nhìn hình và chọn từ tiếng Anh đúng |
| 🃏 Lật thẻ tìm cặp | Tìm cặp hình và từ giống nhau |
| 🤖 Robot đoán chữ | Đoán cả từ bằng từng chữ cái (sai 6 lần robot được "lắp" đủ) |
| 🧩 Kéo từ vào hình | Kéo hoặc chạm từ khớp với hình |
| 💬 Nói chuyện với AI | Trò chuyện tiếng Anh với AI — gõ chữ hoặc bấm micro để nói |

**Tính năng:** đọc to từ tiếng Anh (giọng trình duyệt), gợi ý, âm thanh vui, pháo giấy, chấm sao 1–3 ⭐, màn "Ôn từ vựng", chơi bằng chuột hoặc chạm tay.

## 💬 Trò chuyện với AI

Trò này gọi API **OpenRouter** (model miễn phí) trực tiếp từ trình duyệt. Lần đầu bé cần dán API key:

1. Mở `openrouter.ai` → đăng ký bằng Google
2. Vào `openrouter.ai/keys` → **Create Key**
3. Copy key (`sk-or-v1-...`) dán vào ô trong app

Key chỉ lưu trong localStorage của trình duyệt, không gửi đi đâu ngoài OpenRouter. Dùng model `:free` nên **không mất phí**. Có nút 🔑 Đổi key để đổi hoặc xóa.

Công tắc 🇻🇳 ở đầu trang bật/tắt hiển thị bản dịch tiếng Việt cho câu trả lời của AI.

## Truy cập

https://laomeden.github.io/game-danh-van-lop-1/

## Chạy tại máy

Mở file `index.html` bằng trình duyệt. 6 trò chơi đầu chạy offline; trò chat AI cần internet + API key.
