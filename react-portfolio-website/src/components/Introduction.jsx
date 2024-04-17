import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from "react-router-dom"

function Introduction() {
  return (
    <div className='px-4 pt-32 bg-transparent 
     mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>
                Welcome to my portfolio
            </h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-[interFont]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing 
                elit. Iusto illum natus nostrum. Laudantium aliquam 
                temporibus doloribus nesciunt pariatur quia officiis,
                 cum perferendis illum? Placeat omnis rerum unde 
                aspernatur quisquam ducimus!
            </p>
            <div>
                <Link
                to="/project"
                className="font-medium hover:text-orange-500 inline-flex"
                >
                    See Project
                    <FaArrowRight
                    className='mt-1 ml-2'
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Introduction