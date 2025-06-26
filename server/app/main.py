from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from app.routes.movie import router as movie_routes

app = FastAPI()

origins = [
    "http://localhost:5173",
    "localhost:5173",
    "https://cinematch-sage-three.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.include_router(movie_routes)