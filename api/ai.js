// /api/ai.js - Vercel Serverless Function
export default async function handler(req, res) {
  // 设置 CORS 头，允许所有来源访问
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.API_KEY || "sk-26d09fa903034902928ae380a56ecfd3";

  try {
    const requestBody = req.body;

    const response = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("AI 函数错误:", error);
    res.status(500).json({ 
      error: error.message,
      code: "INTERNAL_ERROR"
    });
  }
}
