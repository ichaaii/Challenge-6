import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../assets/components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { actionDetail } from "../redux/actions/actionDetail";

export const DetailMovie = () => {
  //setiingredux
  const  params  = useParams();
  const dispatch = useDispatch();
  const detailsMovie = useSelector((state) => state.movieDetail.movieDetail);

  const getDetailMovie = () => {
    dispatch(actionDetail(params.movieId))
  }

  useEffect(()=> {
    getDetailMovie()
  }, [params.movieId, dispatch])

  const genres = detailsMovie && detailsMovie.genres.map((gen) => gen.name).join(" | ");
  const rate = detailsMovie && detailsMovie.vote_average.toFixed(1);

  return (
    <div className="">
      <Navbar />
      <img
        className="w-full h-[50rem] brightness-50 "
        src={`https://image.tmdb.org/t/p/original/${detailsMovie.backdrop_path}`}
      />
      <div className="absolute flex flex-col justify-center top-0 w-[50%] h-full gap-[1rem] pl-10 text-white">
        <h1 className="text-4xl font-bold ">{detailsMovie.title}</h1>
        <p className="text-lg ">{detailsMovie.overview}</p>
        <p className="text-lg">{genres}</p>
        <div className="flex content-center items-center gap-2">
          <svg
            className="fill-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <p className="text-lg">{rate}</p>
        </div>

        <button className="bg-red-600 flex justify-center rounded-md block w-[25%] py-2 font-semibold  gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Watch Trailer
        </button>
      </div>
    </div>
  );
};
