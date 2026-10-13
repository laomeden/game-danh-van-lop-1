# Bé Học Tiếng Anh — 7 Trò Chơi

Webapp học tập cho bé lớp 1, dùng chung kho **108 từ vựng cơ bản** (có nghĩa tiếng Việt) với 7 trò chơi:

| Trò chơi | Cách chơi |
|---|---|
| 🐝 Điền chữ còn thiếu | Nhìn hình, **gõ chữ còn thiếu bằng bàn phím của thiết bị** |
| 🔊 Nghe và chọn hình | Nghe từ tiếng Anh rồi chọn đúng hình |
| 🖼️ Nhìn hình chọn từ | Nhìn hình và chọn từ tiếng Anh đúng |
| 🃏 Lật thẻ tìm cặp | Tìm cặp hình và từ giống nhau |
| 🤖 Robot đoán chữ | Xem hình, đoán cả từ bằng từng chữ cái (sai 6 lần robot được "lắp" đủ) |
| 🧩 Kéo từ vào hình | Kéo hoặc chạm từ khớp với hình |
| 💬 Nói chuyện với Cô Lily | Trò chuyện tiếng Anh với cô giáo AI |

**Tính năng:** đọc to bằng **giọng nữ tiếng Anh** (tự chọn giọng nữ tự nhiên nhất của máy), gợi ý, âm thanh vui, pháo giấy, chấm sao 1–3 ⭐, màn "Ôn từ vựng", chơi bằng chuột hoặc chạm tay.

## 🐝 Điền chữ còn thiếu — dùng bàn phím thiết bị

Không còn bảng chữ cái A–Z trên màn hình. Bé gõ trực tiếp bằng **bàn phím điện thoại / máy tính**:

- Trên điện thoại: ô nhập tự mở bàn phím ảo của máy
- Trên máy tính: ô nhập tự được chọn sẵn, bé gõ thẳng
- Gõ sai thì ô rung lên + đỏ, có đếm "còn N lần thử"

## 💬 Cô Lily — giáo viên tiếng Anh AI

Cô Lily là **giáo viên**, không phải trợ lý ảo chung:

- Phản hồi theo đúng lời bé vừa nói, rồi hỏi tiếp để bé muốn trả lời
- Khen bé mỗi lượt, không bao giờ nói "sai"
- Bé gõ tiếng Việt → cô trả lời tiếng Anh kèm câu mẫu để bé bắt chước
- Chỉ nói về gia đình, con vật, đồ ăn, trường học, màu sắc, đồ chơi, thiên nhiên
- Không bao giờ hỏi thông tin cá nhân của bé

Mỗi câu trả lời hiện 3 phần: **ENGLISH** (cô nói) / **VIETNAMESE** (bản dịch, bật/tắt được) / **QUESTION** (câu hỏi cho bé).

## 🔌 Trò 💬 cần 1 trong 2 "cầu nối" — app tự chọn

App thử cầu nối **Hermes trên máy bạn** trước (miễn phí qua đăng ký Portal). Không được thì tự chuyển sang **cầu nối Cloud** (cho người ngoài dùng qua mạng, cũng miễn phí). Bé không cần biết đang dùng cái nào — chỉ cần 1 trong 2 chạy là chat được.

| Cầu nối | Ai dùng | Backend | Model mặc định |
|---|---|---|---|
| 🏠 Hermes (máy bạn) | bé ở nhà | bridge.py → hermes proxy → Portal | Solar Mini 4 |
| ☁️ Cloud (mạng) | mọi người qua link | Cloudflare Worker → OpenRouter | Nemotron 3 Nano Omni |

Cả 2 đều **không cần API key trong app**.

### Cách 1 — Hermes trên máy bạn (dùng cho bé ở nhà)

```
trò chơi (trình duyệt)  →  bridge.py (localhost:8646)  →  hermes proxy (localhost:8645)  →  Portal
```

1. Tải `bridge.py` và `Bat-Hermes.bat` về **cùng thư mục với `index.html`**
2. Bấm đúp **`Bat-Hermes.bat`**
3. Đợi cửa sổ đen hiện `Cau noi chay tai: http://127.0.0.1:8646`
4. **Bấm đúp mở `index.html`** (mở trực tiếp từ máy, không qua link github.io)

**Giữ cửa sổ đen mở** trong khi bé chơi. Quên bật thì app hiện hướng dẫn tiếng Việt, bé không cần làm gì.

> Lưu ý: nếu bé mở qua link `https://laomeden.github.io/...`, Chrome có thể chặn gọi localhost (chính sách Local Network Access). Mở file `index.html` trực tiếp thì không bị chặn.

### Cách 2 — Cloudflare Worker (cho mọi người dùng qua link)

Để **người khác** cũng chat được khi vào link github.io:

1. Đăng ký Cloudflare (miễn phí) → **Workers & Pages** → **Create Worker**
2. Xoá nội dung mẫu, dán toàn bộ `cloud-worker.js` → **Deploy**
3. Vào **Settings → Variables** → thêm biến mật (secret):
   - Tên: `OPENROUTER_KEY`
   - Giá trị: key OpenRouter của bạn (tạo miễn phí tại openrouter.ai)
4. Copy đường dẫn Worker (dạng `https://xxx.ten-ban.workers.dev`)
5. Mở `index.html`, tìm dòng `const CLOUD_URL = "";` → dán đường dẫn vào giữa hai dấu nháy
6. Commit + push lên repo → GitHub Pages tự build lại

Miễn phí **100.000 request/ngày** — đủ cho hàng trăm bé. Worker giữ key trong biến mật, không ai đọc được từ source code.

### Model AI

Bấm 🤖 Đổi model để đổi (app tự hiện model của cầu nối đang chạy):

- **Hermes (Portal):** Solar Mini 4 (mặc định) · Laguna S 2.1 · LongCat 2.5
- **Cloud (OpenRouter):** Nemotron 3 Nano Omni (mặc định) · Gemma 4 31B · Nemotron 3.5 Lightning

Toàn bộ model đều `:free` — không mất phí.

### Bảo mật

`hermes proxy` **tự từ chối** request từ trình duyệt (bảo vệ đăng ký của bạn khỏi trang web lạ). `bridge.py` chạy ngoài trình duyệt nên được chấp nhận — nó là "cầu nối" đáng tin trên máy bạn. `cloud-worker.js` giữ key trong biến mật của Cloudflare, không bao giờ nằm trong source công khai.

## Truy cập

https://laomeden.github.io/game-danh-van-lop-1/

## Chạy tại máy

Tải `index.html`, `bridge.py`, `Bat-Hermes.bat` cùng thư mục → bấm đúp `Bat-Hermes.bat` → bấm đúp `index.html`.

6 trò chơi đầu chạy offline; trò 💬 cần 1 trong 2 cầu nối ở trên.
