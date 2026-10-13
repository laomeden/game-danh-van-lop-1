# Bé Học Tiếng Anh — 7 Trò Chơi

Webapp học tập cho bé lớp 1, dùng chung kho **108 từ vựng cơ bản** (có nghĩa tiếng Việt) với 7 trò chơi:

| Trò chơi | Cách chơi |
|---|---|
| 🐝 Điền chữ còn thiếu | Nhìn hình, điền chữ cái còn thiếu vào từ |
| 🔊 Nghe và chọn hình | Nghe từ tiếng Anh rồi chọn đúng hình |
| 🖼️ Nhìn hình chọn từ | Nhìn hình và chọn từ tiếng Anh đúng |
| 🃏 Lật thẻ tìm cặp | Tìm cặp hình và từ giống nhau |
| 🤖 Robot đoán chữ | Xem hình, đoán cả từ bằng từng chữ cái (sai 6 lần robot được "lắp" đủ) |
| 🧩 Kéo từ vào hình | Kéo hoặc chạm từ khớp với hình |
| 💬 Nói chuyện với AI | Trò chuyện tiếng Anh với AI |

**Tính năng:** đọc to từ tiếng Anh (giọng trình duyệt), gợi ý, âm thanh vui, pháo giấy, chấm sao 1–3 ⭐, màn "Ôn từ vựng", chơi bằng chuột hoặc chạm tay.

## 💬 Trò chuyện với AI — dùng Hermes của bạn

Trò này **không cần API key**. AI chạy qua Hermes Agent trên máy bạn:

```
trò chơi (trình duyệt)  →  bridge.py (localhost:8646)  →  hermes proxy (localhost:8645)  →  Nous Portal
```

### Cách bật (1 bước)

1. Tải `bridge.py` và `Bat-Hermes.bat` về **cùng thư mục với file `index.html`**
2. Bấm đúp **`Bat-Hermes.bat`**
3. Đợi cửa sổ đen hiện chữ `Cau noi chay tai: http://127.0.0.1:8646`
4. Mở `index.html` → vào trò 💬 → nói chuyện

**Giữ cửa sổ đen mở** trong khi bé chơi. Đóng cửa sổ = tắt AI.

Nếu quên bật Hermes, trò chơi sẽ hiện hướng dẫn bằng tiếng Việt — bé không cần làm gì cả.

### Model AI

3 model miễn phí qua Portal (bấm 🤖 Đổi model để đổi):

| Model | Đặc điểm |
|---|---|
| Solar Mini 4 (Upstage) | Nhẹ, nhanh — mặc định |
| Laguna S 2.1 (Poolside) | Vui vẻ, hợp với bé |
| LongCat 2.5 (Meituan) | Câu dài, hay kể chuyện |

### Bảo mật

`hermes proxy` **tự từ chối** request từ trình duyệt (bảo vệ đăng ký của bạn khỏi trang web lạ).
`bridge.py` chạy ngoài trình duyệt nên được chấp nhận — nó là "cầu nối" đáng tin trên máy bạn.

## Truy cập

https://laomeden.github.io/game-danh-van-lop-1/

## Chạy tại máy

Tải `index.html`, `bridge.py`, `Bat-Hermes.bat` cùng thư mục → bấm đúp `Bat-Hermes.bat` → mở `index.html`.

6 trò chơi đầu chạy offline; trò 💬 cần Hermes đang bật.
