import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NewPost from './NewPost'
import Favourites from './Favourites'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Login from './Login'


const AllRoutes = () => {
  return (
    <Box>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/login" element={<Login />} />

        </Routes>
    </Box>
  )
}

export default AllRoutes