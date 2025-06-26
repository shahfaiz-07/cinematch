from app.config.settings import settings
import requests
API_KEY = settings.TMDB_API_KEY
BASE_URL = "https://api.themoviedb.org/3/movie/{}?api_key={}&language=en-US"
def movie_info(movie_id):
    url = BASE_URL.format(movie_id, API_KEY)
    data = requests.get(url)
    return data.json()