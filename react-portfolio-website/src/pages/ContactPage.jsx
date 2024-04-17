import React from 'react'
import ContactForm from '../components/ContactForm'
import Carousel from '../components/carousel/Carousel'

function ContactPage() {
  return (
    <Carousel
    autoSlide={true}
    autoSlideInterval={10000}
    >
      <ContactForm />
    </Carousel>
  )
}

export default ContactPage