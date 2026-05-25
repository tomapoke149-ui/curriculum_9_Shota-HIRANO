from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import AsyncOpenAI
import os

app = FastAPI(title="Simple Chatbot API")

# 【改善点】APIキーはコードに直接書かず、OSの環境変数（Environment Variable）から安全に読み込む
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    # キーが設定されていない場合は、エラーを発生させて開発者に知らせる
    raise RuntimeWarning("エラー: 環境変数 'OPENAI_API_KEY' が設定されていません。")

# クライアントの初期化
client = AsyncOpenAI(api_key=OPENAI_API_KEY)

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
