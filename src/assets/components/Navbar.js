import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookie";
import { setToken } from "../../redux/reducers/auth/authLogin";
import { useDispatch, useSelector } from "react-redux";
import actionsUser from "../../redux/actions/actionsUser";
import ModalComponent from "./ModalComponent";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleUserClick = () => {
  setModalOpen(true);
  };

  useEffect(() => {
    dataUser();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/${search}`);
  }

  const handleBrand = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookieKeys.AuthToken, {
      path: "/",
      expires: new Date(0),
    });

    navigate("/");
  };

  const dataUser = () => {
    dispatch(actionsUser());
  };

  const dataUserMovie = useSelector((state) => state.auth.user);

  useEffect(() => {
    dataUser();
  }, []);

  return (
    <div className="relative items-center bg-transparent z-10 ">
      <div className="fixed flex justify-around items-center w-full mt-6 bg-black-500 z-5">
        <button
          onClick={handleBrand}
          className="font-bold text-4xl text-red-600"
        >
          MovieList
        </button>
        <form
          className="flex gap-2 items-center border-2 rounded-full border-red-600"
          onSubmit={handleSubmit}
        >
          <input
            className="w-[25rem] h-[2rem] rounded-[2rem] py-2 pl-9 pr-3 bg-transparent border-none focus:outline-none focus:text-white"
            placeholder="What do you want to match?"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          ></input>
          <button type="submit" className="">
            <svg
            className="w-6 h-6 mr-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
        <div className="flex items-center space-x-5">
          <button
            onClick={handleLogout}
            className="px-[2.5rem] py-[0.5rem] rounded-xl bg-red-600 text-white font-semibold"
          >
            Logout
          </button>
        
        <div className="flex items-center"onClick={handleUserClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <h1 className="text-white pl-3 font-semibold">{dataUserMovie.name} </h1>
        </div>
        </div>
        <ModalComponent isOpen={isModalOpen} onClose={() => setModalOpen(false)} userData={dataUserMovie} />
      </div>
    </div>
  );
};
