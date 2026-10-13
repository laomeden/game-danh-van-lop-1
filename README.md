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

## 💬 Trò chuyện với AI — không cần nhập key

Trò này gọi API **OpenRouter** (chỉ dùng model `:free`) trực tiếp từ trình duyệt.

**Cấu hình (làm 1 lần, chỉ cho người lớn):**
- Mở `index.html`, vào trò 💬 → vào màn "cần API key" → dán key OpenRouter (dùng trường hợp key đã bị hỏng).
- Model mặc định: **Nemotron 3 Nano Omni (NVIDIA)**, có thể đổi sang 7 model free khác trong trò chat.

**Cách dùng với bé:**
- Chỉ cần mở link, vào trò 💬 → nói chuyện. **Không cần** nhập key, không cần chọn model.
- Key và model được nhúng (hardcode) vào file, lưu trong localStorage của trình duyệt.
- ⚠️ File public trên GitHub Pages nên key chỉ bảo vệ bằng **chỉ dùng model free** và giới hạn ~$1.

## Truy cập

https://laomeden.github.io/game-danh-van-lop-1/

## Chạy tại máy

Mở file `index.html`. 6 trò chơi đầu chạy offline; trò chat AI cần internet.
