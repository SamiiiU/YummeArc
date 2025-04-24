import React from 'react'
import { faqs } from '../../../WebData/ComissionData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const FAQs = () => {
  return (
    <div className='w-full   px-4 sm:px-12  2xl:px-80  py-10   relative'>
      <AOSInitializer/>
      <h1 data-aos="fade-up" className='w-full text-center  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-textColor  '>
        Frequently Asked Questions
      </h1>

      <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-8  p-6'>
        {faqs.map((faq, idx) => (
          <div data-aos="fade-in" key={idx} className='col-span-1  p-4   flex flex-col  rounded-md '>
              <h1 className='font-bold text-xl'>{faq.question}</h1>
              <p className='text-lg'>{faq.answer}</p>
          </div>
        ))}
      </div>




    </div>
  )
}

export default FAQs
