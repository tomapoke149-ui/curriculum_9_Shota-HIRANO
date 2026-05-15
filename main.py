from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import AsyncOpenAI
import os

app = FastAPI(title="Simple Chatbot API")

# 環境変数を使わず、直接キーを指定する（確実！）
OPENAI_API_KEY = "sk-"

client = AsyncOpenAI(api_key=OPENAI_API_KEY)

# --- 以下は変更なし ---
class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

@app.post("/chat", response_model=ChatResponse)
async def chat_with_gpt(request: ChatRequest):
    try:
        response = await client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "あなたは親切なAIアシスタントです。"},
                {"role": "user", "content": request.message}
            ]
        )
        reply_content = response.choices[0].message.content
        return ChatResponse(reply=reply_content)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"API通信エラー: {str(e)}")
