import Img from "../img/box-b.png";

export function BoxB() {
  return (
    <section className="grid items-center justify-between grid-cols-2 gap-8 mb-8 text-white bg-rose-600">
      <img src={Img} alt="BoxB" className="max-w-full " />
      <div className="max-w-md px-0 py-5 mx-auto my-0 mb-8 text-center box-text justify-self-center">
        <h2 className="text-5xl font-semibold leading-snug tracking-widest uppercase ">
          New to the nice list
        </h2>
        <p className="py-5 mb-5 text-2xl leading-relaxed tracking-wider">
          For a nondairy twist on a holiday cookie classic, try the new Iced
          Sugar Cookie Almond Milk Latte.
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
