import React from "react";
import Img1 from "../img/box-f1.jpg";
import Img2 from "../img/box-f2.jpg";

export function BoxF() {
  return (
    <section className="grid items-center justify-between grid-cols-2 gap-8 mb-8 box box-f">
      <div>
        <img className="max-w-full" src={Img1} alt="" />
        <div className="px-0 py-10 bg-gray-200 bg-extra">
          <div className="max-w-xl px-0 py-5 mx-auto my-0 text-center box-text justify-self-center">
            <h2 id="text-sm_BoxF" className="mb-5 text-2xl font-bold text-md">
              Let the holiday cheer come to you
            </h2>
            <p id="text-sm_BoxF" className="mx-0 my-1 mb-5 text-xl leading-8 ">
              Make the moment merry. Order Starbucks® holiday favorites on Uber
              Eats.*
            </p>
            <a
              href="/"
              className="inline-block max-w-xl px-4 py-2 mt-5 leading-5 text-center text-black no-underline border-2 border-black border-solid rounded-full cursor-pointer btn bg-none btn-dark-outline"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>

      <div>
        <img className="max-w-full" src={Img2} alt="" />
        <div className="px-0 py-10 text-white bg-emerald-800 bg-extra">
          <div className="max-w-xl px-0 py-5 mx-auto my-0 text-center box-text justify-self-center">
            <h2 id="text-sm_BoxF" className="mb-5 text-2xl font-bold text-md">
              Loved Passing on Netflix?
            </h2>
            <p id="text-sm_BoxF" className="mx-0 my-1 mb-5 text-xl leading-8 ">
              Our new social series about film adaptations kicks off with the
              actors and directors who brought the book to life.
            </p>
            <a
              href="/"
              className="inline-block max-w-xl px-4 py-2 mt-5 leading-5 text-center no-underline border-2 border-white border-solid rounded-full cursor-pointer btn bg-none btn-dark-outline"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
