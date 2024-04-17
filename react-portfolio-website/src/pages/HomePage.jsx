import React from 'react'
import Introduction from '../components/Introduction'
import useFetch from '../hooks/useFetch'
import Carousel from '../components/carousel/Carousel'
import ButtonToTop from '../components/ButtonToTop'

const HomePage = () => {
    // const data = useFetch("http://localhost:5000/images");
    // console.log(data)
    return (
        <div className='overflow-hidden'>
            <Carousel
            autoSlide={true}
            autoSlideInterval={4000}
            >
                <Introduction />
            </Carousel>  
            <div className='h-[550px]'>ak</div>  
            <ButtonToTop showBelow={100} /> 
        </div>
    )
}

export default HomePage