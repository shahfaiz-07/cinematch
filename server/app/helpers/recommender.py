# import pickle
# import os

# BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# ARTIFACTS_PATH = os.path.join(BASE_DIR, "../artifacts")

# dataset = pickle.load(open(os.path.join(ARTIFACTS_PATH, "movie_list.pkl"), "rb"))
# similarity = pickle.load(open(os.path.join(ARTIFACTS_PATH, "similarity.pkl"), "rb"))

# def recommend(movie_title):
#     index = dataset[dataset["title"] == movie_title].index[0]
#     recommendations = []
#     for ind, _ in sorted(enumerate(similarity[index]), reverse=True, key=lambda x: x[1])[1:11]:
#         recommendations.append(dataset.iloc[ind].id)
#     return recommendations

import pickle
import os
from sklearn.metrics.pairwise import cosine_similarity
from scipy.sparse import load_npz

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ARTIFACTS_PATH = os.path.join(BASE_DIR, "../artifacts")

dataset = pickle.load(open(os.path.join(ARTIFACTS_PATH, "movie_list.pkl"), "rb"))
vector_matrix = load_npz(os.path.join(ARTIFACTS_PATH, "vector_matrix.npz"))
similarity = cosine_similarity(vector_matrix)

def recommend(movie_title):
    index = dataset[dataset["title"] == movie_title].index[0]
    recommendations = []
    for ind, _ in sorted(enumerate(similarity[index]), reverse=True, key=lambda x: x[1])[1:11]:
        recommendations.append(dataset.iloc[ind].id)
    return recommendations
