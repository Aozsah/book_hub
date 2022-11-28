// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Navigation, Pagination, A11y } from 'swiper';
import './swiper.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SwiperBook() {
    const [width, setWidth] = useState(0);
    const [books, setBooks] = useState([]);
    const carousel = useRef();

  
    useEffect(() => {
      axios ('https://www.breakingbadapi.com/api/characters?limit=30')
      .then((res) =>{ 
        setBooks(res.data)
      })
    }, [])

  return (

    <Swiper 
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={50}
    slidesPerView={5}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      {books.map(book => {
        return(
      <SwiperSlide  key={book.char_id}>
        <Link to={`/book/${book.char_id}`}>
          <img className='bookImg' src={book.img} alt="Resim Çalışmıyor!"/>
        </Link>
      </SwiperSlide>
    )})}
    </Swiper>
  )
}
  export default SwiperBook;
