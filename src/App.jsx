import logo from "./images/logo.svg";
import heroMobile from "./images/hero-mobile.jpg";
import iconArrow from "./images/icon-arrow.svg";
import heroDesktop from "./images/hero-desktop.jpg";

const App = () => {
  return (
    <div className="flex">
      <div>
        <header className="p-6 md:p-10 lg:px-24 xl:px-28">
          <img className="w-24 md:w-32 lg:w-24" src={logo} alt="Logo" />
        </header>
        <img
          className="w-screen lg:hidden"
          src={heroMobile}
          alt="Hero Mobile"
        />
        <main className="p-6 text-center md:p-10 lg:px-24 lg:text-left xl:px-28">
          <h1 className="text-4xl tracking-[.3em] m-4 font-semibold md:text-6xl lg:m-0 lg:text-5xl xl:text-7xl">
            <span className="text-desaturatedRed font-normal">WE'RE</span>{" "}
            COMING SOON
          </h1>
          <p className="text-desaturatedRed mb-5 md:text-2xl lg:text-base lg:mt-4 xl:text-xl xl:mt-9">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form className="text-left m-4 relative md:m-6 lg:m-0 lg:mt-7 xl:mt-10">
            <input
              className="border border-desaturatedRed w-full px-4 py-3 mt-3 rounded-full placeholder:text-desaturatedRed placeholder:opacity-50 md:text-2xl md:px-5 md:py-4 lg:text-base lg:px-4 lg:py-3 xl:text-xl"
              type="email"
              placeholder="Email Address"
            />
            <button className="bg-gradient-to-r from-gradient1 to-gradient2 absolute top-3 right-0 py-[15px] px-7 rounded-full drop-shadow-md md:py-[23px] md:px-10 lg:py-[15px] lg:px-9 xl:py-[17px]">
              <img src={iconArrow} alt="Icon Arrow" />
            </button>
          </form>
        </main>
      </div>
      <img
        className="hidden lg:block lg:h-screen"
        src={heroDesktop}
        alt="Hero Desktop"
      />
    </div>
  );
};

export default App;
