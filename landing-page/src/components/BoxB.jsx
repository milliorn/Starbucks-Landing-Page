import Img from "../img/box-b.png";

export function BoxB() {
  return (
    <section class="mb-8 text-white bg-rose-600 gap-8	items-center justify-between grid grid-cols-2">
      <img src={Img} alt="BoxB" className="max-w-full " />
      <div class="box-text max-w-md	text-center justify-self-center	py-5 px-0 my-0 mx-auto mb-8">
        <h2 class="text-5xl	uppercase tracking-widest	font-semibold	">
          New to the nice list
        </h2>
        <p class="text-2xl mb-5 leading-7	">
          For a nondairy twist on a holiday cookie classic, try the new Iced
          Sugar Cookie Almond Milk Latte.
        </p>
        <a
          href="/"
          class="btn btn-light-outline cursor-pointer max-w-xl inline-block bg-none py-2 px-4 leading-5	text-center no-underline border-2	border-solid	rounded-full"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
