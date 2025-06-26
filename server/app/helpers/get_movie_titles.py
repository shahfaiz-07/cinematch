import pickle
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ARTIFACTS_PATH = os.path.join(BASE_DIR, "../artifacts")

dataset = pickle.load(open(os.path.join(ARTIFACTS_PATH, "movie_list.pkl"), "rb"))

def get_movie_titles():
    return dataset["title"].values