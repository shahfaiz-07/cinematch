# CineMatch (Movie Recommendation System)

A content-based movie recommender built with FastAPI and React. The backend uses a precomputed similarity matrix (via CountVectorizer and cosine similarity) on the TMDB 5000 movies dataset to suggest similar movies based on user input.

---

## ⚠️ Dataset Info

This project uses the **[TMDB 5000 Movie Dataset](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata)** from Kaggle.  
To run the project locally, download the dataset from the above link and place the two CSV files (`tmdb_5000_movies.csv` and `tmdb_5000_credits.csv`) inside the `server/dataset/` folder.

---

## Overview

This project enables users to pick a movie from a dropdown/searchable select box and get personalized recommendations. The FastAPI backend handles the recommendation logic, while the React frontend (deployed on Vercel) provides a sleek UI.

---

## Features

* **Content-Based Recommendations:** Uses the TMDB dataset to compute similarities between movies.
* **Precomputed Model:** The similarity matrix is precomputed and stored as pickle files for fast retrieval.
* **RESTful API:** FastAPI backend with proper CORS handling.
* **Interactive UI:** React frontend with an autocomplete select box for movie selection.
* **Modular Code Structure:** Separated backend (FastAPI) and frontend (React) projects for clarity.

---

## Tech Stack

* **Backend:** FastAPI, Uvicorn, Python, Pandas, scikit-learn, Pickle  
* **Frontend:** React, Axios, [heroui/react](https://heroui.com/), Vercel (for deployment)  
* **Deployment:** FastAPI deployed on Render, React on Vercel

---

## Project Structure

```

movie-recommender/
├── server/                      # FastAPI backend code
│   ├── app/
│   │   ├── **init**.py
│   │   ├── main.py               # FastAPI entrypoint
│   │   ├── routes/               # API routes (get, get all)
│   │   ├── helpers/              # Utility functions (recommender, movie info, etc.)
│   │   └── artifacts/            # Pickled model artifacts (movie\_list.pkl, similarity.pkl)
│   ├── dataset/                  # Downloaded TMDB 5000 dataset CSVs
│   ├── model\_builder.ipynb       # Script to precompute and save artifacts
│   ├── requirements.txt          # Python dependencies
│   └── .env                      # Environment variables (not committed)
│
├── frontend/                     # React frontend code
│   ├── public/
│   ├── src/
│   │   ├── components/           # UI components (MovieCard, Autocomplete, etc.)
│   │   ├── App.tsx               # Main page
│   │   └── ...
│   ├── package.json              # Node dependencies
│   └── ...                       # Config files (vite.config.ts, tailwind.config.ts etc)
│
├── .gitignore                    # Ignores .venv/, node\_modules, .env, etc.
└── README.md                     # This file

````

---

## Setup & Running Locally

### Backend

1. **Clone the repo & navigate to the `server` folder:**

   ```bash
   cd server
   ```

2. **Create and activate a virtual environment:**

   ```bash
   python -m venv .venv
   source .venv/bin/activate       # On Windows use .\.venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Download the *two* datasets** from [Kaggle](https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata) and place the CSVs inside the `dataset/` folder.

5. **Build the model artifacts (if not already generated):**

   Open `model_builder.ipynb` in Jupyter and run all cells to generate artifacts.

6. **Run the FastAPI app:**

   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

7. **Access API Docs:**

   Open [http://localhost:8000/docs](http://localhost:8000/docs) in your browser.

---

### Frontend

1. **Navigate to the `frontend` folder:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Your app will be live at [http://localhost:5173](http://localhost:5173).

---

## 📦 Deployment

* Frontend → [Vercel](https://vercel.com)
* Backend → [Render](https://render.com)

---

## Environment Variables

Create a `.env` file inside the `server/` folder with your API key:

```
TMDB_API_KEY=your_secret_tmdb_api_key
```

---

## Contributing

Contributions, suggestions, and issues are welcome—just open an issue or a pull request.