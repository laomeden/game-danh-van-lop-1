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

Trò này gọi API **OpenRouter** (chỉ dùng model `:free`) trực tiếp từ trình duyệt.

**Bước 1 — lấy API key (làm 1 lần):**
1. Mở `openrouter.ai` → đăng ký bằng Google
2. Vào `openrouter.ai/keys` → **Create Key**
3. Copy key (`sk-or-v1-...`) dán vào ô trong app

Key chỉ lưu trong localStorage của trình duyệt, không gửi đi đâu ngoài OpenRouter.

**Bước 2 — chọn model:** bấm nút **🤖 Đổi model** trong trò chat. Có 7 model miễn phí để chọn:

| Model | Đặc điểm |
|---|---|
| Nemotron 3 Nano Omni (NVIDIA) | Mặc định — nhẹ, nhanh |
| Nemotron 3.5 Lightning (NVIDIA) | Rất nhanh, ngữ cảnh lớn |
| Nemotron 3 Super (NVIDIA) | Khỏe hơn, câu hay hơn |
| Gemma 4 31B (Google) | Nói tự nhiên, thân thiện |
| Gemma 4 26B (Google) | Nhẹ hơn Gemma 31B |
| LFM2.5-2.6B (LiquidAI) | Nhỏ nhất, phù hợp máy yếu |
| Apodex 1.1 Mini | Nhẹ, ổn định |

Tất cả đều là model `:free` → **không mất phí**. Lựa chọn được lưu lại, lần sau không cần chọn lại.

Công tắc 🇻🇳 ở đầu trang bật/tắt hiển thị bản dịch tiếng Việt.

## Truy cập

https://laomeden.github.io/game-danh-van-lop-1/

## Chạy tại máy

Mở file `index.html` bằng trình duyệt. 6 trò chơi đầu chạy offline; trò chat AI cần internet + API key.
