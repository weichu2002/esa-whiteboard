// functions/ai.js - 阿里云 ESA 版本
export default async function (request, context) {
  // 获取环境变量中的 API Key
  const apiKey = context.env.API_KEY || "sk-26d09fa903034902928ae380a56ecfd3";
  
  try {
    // 阿里云 ESA 中，request 是 Fetch API 的 Request 对象
    const requestBody = await request.json();
    
    // 调用 DeepSeek API
    const response = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    
    // 返回响应
    return response;
    
  } catch (error) {
    // 错误处理
    return new Response(JSON.stringify({ 
      error: error.message,
      code: "INTERNAL_ERROR"
    }), {
      status: 500,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
