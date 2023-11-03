import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Navbar } from '../assets/components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import actionSearch from '../redux/actions/actionSearch';

export const SearchMovie = () => {
    const {params} = useParams();
    const [search, setDatasearch] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
   
    const searchFilm = useSelector((state) => state.movieSearch.search) //moviesearch dari index, search dari authSearch
    console.log (searchFilm, "search")

    useEffect(() => {
      setLoading(true)
      dispatch(actionSearch(params))
      .then((result) => {
        setLoading (false)
      }).catch((err) => {
        setLoading (false)
      });
  }, [params, dispatch])

  useEffect(() => {
    if (!loading) {
        setDatasearch(searchFilm)
    }
  }, [searchFilm, loading])

  console.log (searchFilm, "datanya cari")

    return (
    <div className='bg-black'>
        <Navbar></Navbar>
        <div className='flex flex-wrap justify-center'>
        {searchFilm.map((search) => (
            <div key={search.id}>
                <div className='flex flex-col w-[15rem] h-[20rem] m-[7rem] text-white'>
                <Link to={`/detail/${search.id}`}>
                <img className='' src={`https://image.tmdb.org/t/p/original/${search.poster_path}`}></img>
                </Link>
                <h1 className='text-xl font-bold '>{search.title}</h1>
                <p>{search.release_date}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
    
  )
}
