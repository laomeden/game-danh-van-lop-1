#!/usr/bin/env python3
"""Cau noi cho tro choi "Be Hoc Tieng Anh".

Cach hoat dong:
    webapp (trinh duyet)  ->  cau noi nay (localhost:8646)  ->  hermes proxy (localhost:8645)  ->  Nous Portal

Tai sao can cau noi nay:
    'hermes proxy' TU CHOI request tu trinh duyet (bao mat: proxy gan credential dang nhap cua ban,
    nen mot trang web khong duoc phep dieu khien no). Cau noi chay ngoai trinh duyet nen duoc chap nhan,
    va no tu them CORS de trinh duyet doc duoc ket qua.

Chay:  python bridge.py     (can 'hermes proxy start' dang chay truoc)
Hoac:  chay file Bat-Hermes.bat de bat ca hai cung luc.
"""
import json
import os
import urllib.error
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

PROXY = "http://127.0.0.1:8645"     # hermes proxy
PORT = int(os.environ.get("BRIDGE_PORT", "8646"))
MODEL = os.environ.get("BRIDGE_MODEL", "upstage/solar-mini4:free")
TIMEOUT = 180


class Handler(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        # Chrome tu phien ban 92 chan trang HTTPS cong khai goi vao may rieng (Private Network Access).
        # Header nay la "giay phep" de trang github.io (HTTPS) duoc goi cau noi localhost nay.
        self.send_header("Access-Control-Allow-Private-Network", "true")

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        # de kiem tra cau noi con song
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self._cors()
        self.end_headers()
        self.wfile.write(json.dumps({"ok": True, "proxy": PROXY, "model": MODEL}).encode())

    def do_POST(self):
        length = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(length) if length else b"{}"
        try:
            data = json.loads(raw or b"{}")
        except Exception:
            data = {}
        payload = {
            "model": data.get("model") or MODEL,
            "messages": data.get("messages") or [],
            "temperature": data.get("temperature", 0.7),
            "max_tokens": data.get("max_tokens", 900),
        }
        req = urllib.request.Request(
            PROXY + "/v1/chat/completions",
            data=json.dumps(payload).encode(),
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
                out, status = r.read(), r.status
        except urllib.error.HTTPError as e:
            out, status = e.read(), e.code
        except Exception as e:
            out = json.dumps({"error": {"message": "Chua bat hermes proxy? (%s)" % e}}).encode()
            status = 502
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self._cors()
        self.end_headers()
        self.wfile.write(out)

    def log_message(self, *a):
        pass


if __name__ == "__main__":
    print("=" * 56)
    print("  CAU NOI CHO TRO CHOI - dang chay")
    print("=" * 56)
    print("  Cau noi chay tai : http://127.0.0.1:%d/chat" % PORT)
    print("  Chuyen tiep den  : %s" % PROXY)
    print("  Model            : %s" % MODEL)
    print()
    print("  Giu cua so nay mo trong khi be choi.")
    print("  Dong cua so = tat AI cua tro choi.")
    print("=" * 56)
    try:
        ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
    except KeyboardInterrupt:
        print("\nDa tat cau noi.")
