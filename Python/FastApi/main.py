from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/url")
async def root  ():
    return {"url": "https://bubble.io/page?version=test&type=page&name=app&id=bevold-34980&tab=tabs-1"}