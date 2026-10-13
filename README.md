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

- **Model mặc định:** Nemotron 3 Nano Omni (NVIDIA), đổi được sang 7 model free khác bằng nút 🤖 Đổi model.
- **Bé chỉ cần mở link → vào trò 💬 → nói chuyện.** Không cần nhập key, không cần chọn model.
- Nếu model trả về rỗng (do "suy luận" ăn hết token), app **tự thử lại** với chế độ suy luận tắt; nếu vẫn rỗng thì nhắc bé đổi model.
- Nếu key hết hạn/hết tiền, app hiện màn hình "Bạn AI đang tạm bận" để người lớn dán key riêng.

## Truy cập

https://laomeden.github.io/game-danh-van-lop-1/

## Chạy tại máy

Mở file `index.html`. 6 trò chơi đầu chạy offline; trò chat AI cần internet.
