/**
 * Cau noi tren mang cho tro choi "Be Hoc Tieng Anh"
 * -------------------------------------------------
 * De tai va dat tren Cloudflare Workers (mien phi).
 *
 * Cach hoat dong:
 *   trinh duyet cua nguoi choi  ->  Worker nay  ->  OpenRouter
 *
 * Worker giu API key cua ban trong bien moi truong (OPENROUTER_KEY),
 * nen KHONG AI thay duoc key khi xem source trang web.
 *
 * --- Cach dat len Cloudflare (mat ~5 phut) ---
 * 1. Dang ky Cloudflare mien phi: https://dash.cloudflare.com/sign-up  (khong can the tin dung)
 * 2. Ben trai chon: Workers & Pages  ->  Create  ->  Start with Hello World!
 *    (hoac: Create Worker, dat ten vd: be-hoc-tieng-anh)
 * 3. Bam Edit code, xoa het, dan TOAN BO file nay vao, Bam Deploy
 * 4. Vao tab Settings -> Variables and Secrets -> Add variable:
 *       ten bien  : OPENROUTER_KEY
 *       gia tri   : key OpenRouter cua ban (sk-or-v1-...)
 *       kieu      : Secret   <-- quan trong, de an gia tri
 *    Bam Deploy lai lan nua.
 * 5. Copy duong dan Worker (vd: https://be-hoc-tieng-anh.<ten-ban>.workers.dev)
 *    roi dan vao trong file index.html, o dong CLOUD_URL.
 *
 * An toan: Worker chi cho phep model ":free". Neu ai do thu goi model
 * tra phi qua Worker cua ban, Worker se tu choi.
 */

// Cho phep trang nao duoc goi Worker nay.
// Neu muon chat che hon, doi "*" thanh "https://laomeden.github.io"
const ALLOWED_ORIGIN = "*";

// Model mac dinh khi nguoi choi khong chon
const DEFAULT_MODEL = "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free";

// Chi cho phep model MIEN PHI (tranh bi dung tra phi)
function isFreeModel(id) {
  return typeof id === "string" && id.indexOf(":free") !== -1;
}

function json(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status: status,
    headers: {
      "Access-Control-Allow-Origin": cors,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
    }
  });
}

export default {
  async fetch(request, env) {
    const cors = ALLOWED_ORIGIN;

    // 1. Trinh duyet hoi truoc khi goi POST (CORS preflight)
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": cors,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    // 2. Chi nhan POST
    if (request.method !== "POST") {
      return json({ error: { message: "Chi nhan yeu cau POST" } }, 405, cors);
    }

    // 3. Phai co API key
    if (!env.OPENROUTER_KEY) {
      return json({ error: { message: "Worker chua duoc dat API key" } }, 500, cors);
    }

    // 4. Doc du lieu tu tro choi
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return json({ error: { message: "Du lieu khong hop le" } }, 400, cors);
    }

    const model = body.model || DEFAULT_MODEL;
    if (!isFreeModel(model)) {
      return json({ error: { message: "Chi duoc dung model mien phi (:free)" } }, 400, cors);
    }

    // 5. Gui len OpenRouter, gan key cua ban vao (nguoi choi khong thay key)
    const payload = {
      model: model,
      messages: Array.isArray(body.messages) ? body.messages.slice(-12) : [],
      temperature: 0.7,
      max_tokens: 900
    };

    let upstream;
    try {
      upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + env.OPENROUTER_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      return json({ error: { message: "Khong goi duoc OpenRouter: " + e.message } }, 502, cors);
    }

    // 6. Tra ket qua ve cho tro choi
    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: {
        "Access-Control-Allow-Origin": cors,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
      }
    });
  }
};
