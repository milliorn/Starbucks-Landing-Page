import React from "react";
import Img from "../img/box-e.jpg";

export function BoxE() {
  return (
    <section className="grid items-center justify-between grid-cols-2 gap-8 text-white box box-c bg-secondary grid-reversed bg-rose-700 mb-7">
      <img src={Img} alt="" className="order-2 max-w-full" />
      <div className="max-w-md px-0 py-5 mx-auto my-0 text-center box-text justify-self-center">
        <h2
          id="text-xl-BoxE"
          className="text-2xl font-semibold leading-snug tracking-widest capitalize "
        >
          Fighting hunger this holiday
        </h2>
        <p
          id="text-md-BoxE"
          className="py-5 mb-5 text-lg leading-relaxed tracking-wider"
        >
          Hunger is affecting millions of people across America this holiday
          season. Join us in our commitment to hunger relief and help feed
          neighbors in need.
        </p>
        <a
          href="/"
          className="inline-block max-w-xl px-4 py-2 leading-5 text-center no-underline border-2 border-solid rounded-full cursor-pointer btn btn-light-outline bg-none"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
