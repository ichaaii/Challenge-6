import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { AllMovie } from '../pages/AllMovie'
import { SearchMovie } from '../pages/SearchMovie'
import { DetailMovie } from '../pages/DetailMovie'
import { Register } from '../pages/auth/Register'
import { LoginPage } from '../pages/auth/LoginPage'
import { Dashboard } from '../pages/halamanRouter/Dashboard'
import {Responsive} from '../pages/Responsive'
import TokenProtected from '../assets/components/protected/TokenProtected'

export const TodoList = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/Responsive' element={<Responsive/>}/>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/home' element={
      <TokenProtected>
        <Home/>
      </TokenProtected>
      }/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/allmovie' element={<AllMovie/>}/>
    <Route path='/:params' element={<SearchMovie/>}/>
    <Route path='/detail/:movieId' element={<DetailMovie/>}/>
    </Routes>
    </BrowserRouter>
  )
}
