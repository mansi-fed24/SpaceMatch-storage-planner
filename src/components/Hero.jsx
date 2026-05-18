import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import fridgeBefore from '../assets/fridge-transform-before-first-half.jpg'
import fridgeAfter from '../assets/fridge-transform-afte-first-half.jpg'

const Hero = () => {

  const [position, setPosition] = useState(50)
  
  return (
    <section className=' bg-[#f7f3ee] flex items-center min-h-[calc(100vh-78px)] ' >
      
        <div className='grid items-center w-full grid-cols-1 gap-10 px-6 py-20 mx-auto max-w-7xl md:grid-cols-2 md:px-10 '>
            {/* Left: Text content */}
            <div className='flex flex-col' >
                {/* Tag / small pill */}
                 < span className="inline-flex items-center gap-2 self-start text-[11px] font-medium tracking-widest uppercase text-[#C9614A] bg-[#F5E8E4] px-4 py-1.5 rounded-full mb-6">
                <span className='w-1.5 h-1.5 rounded-full bg-[#c9614a]' />
                Smart organisation for every space
                </span>

                {/* Heading */}
                <h1 className='text-5xl font-light text-[#3d2f28]'
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                  Organise
                  <span className='text-[#c9614a] italic '> smart.</span>
                  <br />
                  Live better.
                </h1>
                <p className='text-[#6b4f45] text-lg leading-relaxed max-w-md mt-4'>SpaceMatch finds the perfect storage solutions for your exact space — enter your dimensions and get matched products instantly.</p>
                
                {/* Call to Action */}
                <div className='flex flex-wrap items-center gap-4 mt-8 mb-10' >
                  <Link to="/planner" className="bg-[#C9614A] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#3D2F28] transition-colors duration-200 flex items-center gap-2">Start planning →</Link>
                  <Link to="/inspiration" className="text-[#6B4F45] text-sm  hover:text-[#3D2F28] transition-colors">See real transformations ↓</Link>
                </div>
                {/* Trust indicators */}
                <div className='flex gap-10 pt-8 mt-6 border-[#3d2f28]/10 border-t' >
                  <div className='flex flex-col'>
                    <span className='text-3xl font-light text-[#3d2f28]'>6+</span>
                    <span className='text-[11px] text-[#b8a89a] tracking-wide mt-1'>Space types</span>
                  </div>
                  
                  <div className='flex flex-col'>
                    <span className='text-3xl font-light text-[#3d2f28]'>30+</span>
                    <span className='text-[11px] text-[#b8a89a] tracking-wide mt-1'>Products matched</span>
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-3xl font-light text-[#3d2f28]'>100%</span>
                    <span className='text-[11px] text-[#b8a89a] tracking-wide mt-1'>Real Sortix products</span>
                  </div>
                </div>
            </div>
            {/* Right: Image */}
            <div className='relative justify-self-center overflow-hidden rounded-2xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.15)] aspect-[3/4] w-full max-w-md  ' 
            onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const percent = (x / rect.width) * 100

                if (percent >= 0 && percent <= 100) {
                  setPosition(percent)
                }
              }} >
                
              {/* BEFORE */}
              
                <img src={fridgeBefore} alt="Fridge Before" className='absolute inset-0 object-cover w-full h-full transition-all duration-300'  />
                {position < 85  && (<span className="absolute top-3 z-30 right-3 text-[10px] font-semibold uppercase text-white bg-[#3d2f28]/60 px-3 py-1 rounded-full ">
                Before
                </span>
                )}
              
              {/* AFTER */}
              
                <img src={fridgeAfter} alt="Fridge Transformation" className='absolute inset-0 object-cover w-full h-full' style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />
                 {position > 15 && (<span className="absolute top-3 left-3 text-[10px] z-30 font-semibold uppercase  text-white bg-[#3d2f28]/60 px-3 py-1 rounded-full">
                After
                </span>
                 )}
              
                {/* Divider line */}
              <div
                className="absolute top-0 bottom-0 z-20 w-[2px] bg-white"
                style={{ left: `${position}%` }}
              > 
              </div>
              {/* Circle handle */}
              <div className="absolute z-30 -translate-x-1/2 -translate-y-1/2 top-1/2" style={{ left: `${position}%` }}>
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg">
                  ↔
                </div>
              </div>
            </div>
            
        </div>

    </section>
  )
}

export default Hero