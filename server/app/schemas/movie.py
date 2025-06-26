# export type RecommendedMovies = {
#   title: string;
#   overview: string;
#   tagline: string;
#   release_data: string;
#   poster_path: string;
# }

def movieEntity(movie_data) -> dict:
    return {
        "title": movie_data["title"],
        "overview": movie_data["overview"],
        "tagline": movie_data["tagline"],
        "release_date": movie_data["release_date"],
        "poster_path": f"https://image.tmdb.org/t/p/w500{movie_data['poster_path']}",
    }