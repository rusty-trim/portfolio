import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import AboutMe from './pages/AboutMe'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<AboutMe />} />
                    <Route path='about-me' element={<Navigate to={"/"} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
