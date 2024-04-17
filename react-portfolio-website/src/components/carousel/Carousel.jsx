import React, { useState, useEffect} from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Img1 from "../../assets/pictures/image1.jpeg";
import Img2 from "../../assets/pictures/image2.jpeg";
import Img3 from "../../assets/pictures/image3.jpg";
import Img4 from "../../assets/pictures/image4.jpeg";

const pictures = [
    {
        id: 1,
        img: Img1
    },
    {
        id: 2,
        img: Img2
    },
    {
        id: 3,
        img: Img3
    },
    {
        id: 4,
        img: Img4
    }
]

function Carousel({ images = pictures, children, autoSlide, autoSlideInterval }) {
    
    const [curr, setCurr] = useState(0);
  
    const prev = () => {
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1))
    }
    const next = () => {
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1))
    }

    useEffect(() => {
        if(!autoSlide) return 
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className='w-[100%] lg:h-[1000px] h-[750px] flex flex-col justify-center 
        items-center'>
            <div className='w-[100%] h-[100%] '>
                <div 
                className='h-[100%] w-[100%] bg-cover bg-no-repeat bg-center
                flex justify-center items-center'
                style={{ backgroundImage: `url(${images[curr].img})`}}
                >
                    <div
                    onClick={prev}
                    className='left h-[10%] bg-transparent bg-opacity-20 grid
                        place-items-center cursor-pointer'
                    style={{ flex: "10%"}}
                    >
                    
                    </div>
                    <div
                    style={{ flex: "80%" }}
                    className='center h-[100%] grid place-items-center 
                    text-justify text-white gap-0'
                    >
                        {children}
                    </div>
                    <div
                    onClick={next}
                    className='right h-[10%] bg-transparent bg-opacity-20 grid
                        place-items-center cursor-pointer'
                    style={{ flex: "10%" }}
                    >
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel