import React from 'react';
import { burger, drink, pasta } from 'assets/images';

function AboutUsSection() {
  return (
    <>
      <div className="grid gap-2 grid-cols-3 pt-10 pb-10 text-center">
        <div className="col-4"></div>
        <div className="col-4">
          <h1 className='text-3xl font-bold'>Our Top Rated Dishes</h1>
          <p className='text-2xl'>Lorem ipsum lorem ipsum</p>
        </div>
        <div className="col-4"></div>
      </div>

      <div className="grid gap-2 grid-cols-3 pt-10 pb-10">
        <div className="col-4">
          <img src={burger} alt="burger" />
        </div>
        <div className="col-4">
          <img src={drink} alt="chicken" />
        </div>
        <div className="col-4">
          <img src={pasta} alt="pasta" />
        </div>
      </div>
    </>
  );
}

export default AboutUsSection;
