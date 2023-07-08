import logo from "./images/logo.svg";
import heroMobile from "./images/hero-mobile.jpg";
import iconArrow from "./images/icon-arrow.svg";

const App = () => {
  return (
    <div>
      <header className="p-6 md:p-10">
        <img className="w-24 md:w-32" src={logo} alt="Logo" />
      </header>
      <img className="w-screen" src={heroMobile} alt="Hero Mobile" />
      <main className="p-6 text-center md:p-10">
        <h1 className="text-4xl tracking-[.3em] m-4 font-semibold md:text-6xl">
          <span className="text-desaturatedRed font-normal">WE'RE</span> COMING
          SOON
        </h1>
        <p className="text-desaturatedRed mb-5 md:text-2xl">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form className="text-left m-4 relative md:m-6">
          <input
            className="border border-desaturatedRed w-full px-4 py-3 mt-3 rounded-full placeholder:text-desaturatedRed placeholder:opacity-50 md:text-2xl md:px-5 md:py-4"
            type="email"
            placeholder="Email Address"
          />
          <button className="bg-gradient-to-r from-gradient1 to-gradient2 absolute top-3 right-0 py-[15px] px-7 rounded-full drop-shadow-md md:py-[23px] md:px-10">
            <img src={iconArrow} alt="Icon Arrow" />
          </button>
        </form>
      </main>
    </div>
  );
};

export default App;
