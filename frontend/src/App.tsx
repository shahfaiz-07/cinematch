import { useEffect, useState } from 'react'
import { addToast, Autocomplete, AutocompleteItem } from "@heroui/react"
import { MdMovie } from "react-icons/md";
import axios from 'axios';
import { Spinner } from "@heroui/react";
import { Button } from "@heroui/react";
import { MdLocalMovies } from "react-icons/md";
import type { RecommendedMovies } from './types';
import MovieCard from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState<Array<string>>([])
  const [movie, setMovie] = useState("")
  const [loading, setLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [touched, setTouched] = useState(false)

  const [recommendedMovies, setRecommendedMovies] = useState<Array<RecommendedMovies>>([])
  const fetchAllMovies = async () => {
    setLoading(true)
    try {
      const response = await axios.get("http://localhost:8000/all")
      if (response.data?.success) {
        setMovies(response.data.data)
        addToast({
          title: "Movies fetched",
          description: "Movie details fetched successfully!",
          color: "success",
        })
      }
    } catch (error) {
      addToast({
        title: "Failed to fetch movies",
        description: "Please try again later",
        color: "danger",
      })
    } finally {
      setLoading(false)
    }
  }

  const getRecommendations = async () => {
    setFetchLoading(true)
    if (!movies.includes(movie)) {
      setFetchLoading(false)
      setIsValid(false)
      return
    }
    setIsValid(true)
    try {
      const response = await axios.get(`http://localhost:8000`, {
        params: { movie }
      })
      console.log(response)
      if (response.data.success) {
        setRecommendedMovies(response.data.data)
      }
    } catch (error) {

    } finally {
      setFetchLoading(false)
    }
  }
  useEffect(() => {
    fetchAllMovies()
  }, [])
  return (
    <>
      {
        loading ? (
          <div className='flex justify-center items-center min-h-screen'>
            <Spinner classNames={{ label: "text-foreground mt-4" }} label="Loading" variant="gradient" />
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center min-h-screen py-10 px-5'>
            <div className='flex flex-col items-center justify-center gap-y-5'>
              <h1 className='text-3xl text-white font-bold'>📽️CineMatch - Movie Recommender:</h1>
              <Autocomplete
                isVirtualized
                required
                errorMessage={isValid || !touched ? "" : "You must select a movie from the list"}
                isInvalid={isValid || !touched ? false : true}
                onInputChange={(value) => setMovie(value)}
                label="Movies"
                placeholder="Select a movie"
                startContent={<MdMovie className='text-xl text-white' />}
                variant="flat"
                onClose={() => {
                  setTouched(true)
                }}
                isDisabled={fetchLoading}
              >
                {movies.sort().map((movie) => (
                  <AutocompleteItem key={movie}>{movie}</AutocompleteItem>
                ))}
              </Autocomplete>
              <Button color="primary" variant='shadow' size="lg" radius='full' style={{ alignSelf: "end" }} isLoading={fetchLoading} endContent={<MdLocalMovies />} onClick={getRecommendations}>
                Recommend
              </Button>
            </div>
            {
              (recommendedMovies.length > 0) && (
                <div className='flex flex-col space-y-2 px-5 mt-5 w-full'>
                  <h2 className='text-2xl font-bold text-white'>Similar Movies:</h2>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center'>
                    {
                      recommendedMovies.map((item) => <MovieCard key={item.title} {...item} />)
                    }
                  </div>
                </div>
              )
            }
          </div >)
      }
    </>
  )
}

export default App
