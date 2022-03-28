import React from "react";
import Img from "../img/box-d.png";

export function BoxD() {
  return (
    <section className="grid items-center justify-between grid-cols-2 gap-8 mb-8 text-white bg-emerald-800">
      <img src={Img} alt="BoxD" className="max-w-full " />
      <div className="max-w-md px-0 py-5 mx-auto my-0 mb-8 text-center box-text justify-self-center">
        <h2 className="text-5xl font-semibold leading-snug tracking-widest uppercase ">
          Starbucks Thanksgiving Blend{" "}
        </h2>
        <p className="py-5 mb-5 text-2xl leading-relaxed tracking-wider">
          This elegant dark roast returns, showcasing flavors from some of the
          world’s major coffee-growing regions.
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
