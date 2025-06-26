from fastapi import APIRouter, Query
from app.helpers.recommender import recommend
from app.helpers.get_movie_info import movie_info
from app.helpers.response import ServerResponse
from app.helpers.get_movie_titles import get_movie_titles
from app.schemas.movie import movieEntity
router = APIRouter()

@router.get('/')
def get_recommendations(movie: str = Query(..., description="Movie Title")):
    movie_ids = recommend(movie)
    response = []
    for movie_id in movie_ids:
        movie_data = movie_info(movie_id)
        if movie_data.get("success") == False:
            continue
        response.append(movieEntity(movie_data))
    return ServerResponse(200, "Data fetched!", data=response)

@router.get('/all')
def get_all_movies():
    all_movies = list(get_movie_titles())
    return ServerResponse(200, "All movies fetched", data=all_movies)