// functions/ai.js
export default async function (request, context) {
  // 从环境变量读取 API Key
  const apiKey = context.env.API_KEY || "sk-26d09fa903034902928ae380a56ecfd3";
  
  try {
    const requestBody = await request.json();
    
    const response = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    
    return response;
    
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
