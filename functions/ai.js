export async function onRequest(context) {
  // 1. 从“保险箱”里取出 Key
  const apiKey = context.env.API_KEY;

  // 2. 拿到前端发来的数据
  const requestBody = await context.request.json();

  // 3. 帮前端加上 Key，转发给 DeepSeek
  const response = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`, // 在这里偷偷加上 Key
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody) // 原样把数据传过去
  });

  // 4. 把 DeepSeek 的回复直接扔回给前端
  return response;
}
