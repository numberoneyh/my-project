import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { CardBlog } from '../pages/CardBlog'
import { Home } from '../pages/Home'
import { Blog } from '../pages/Blog'
import { Todos } from '../pages/Todos'
import { LogInPage } from '../pages/LogInPage'
import { RegisterPage } from '../pages/RegisterPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='todos' element={<Todos />} />
        <Route path='blog' element={<Blog />} />
        <Route path='login' element={<LogInPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='shop/:id' element={<CardBlog />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  )
}

export { AppRouter }
