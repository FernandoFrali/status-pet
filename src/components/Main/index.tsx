import Image from 'next/image';
import catPic from '../../../public/cat.png';
import dogPic from '../../../public/dog.png';
import logo from '../../../public/StatusPets.svg';
import Link from 'next/link';

const Main = () => (
  <main>
    <div className="h-20 flex">
      <Link href="/" className="w-24">
        <Image src={logo} alt="Status Pet logo" className="h-20" />
      </Link>
    </div>
    <div className="justify-center h-screen grid sm:grid-cols-3">
      <Image
        src={dogPic}
        alt="A dog image"
        className="hidden lg:inline-block lg:row-start-1 lg:-scale-x-100 lg:max-w-fit lg:h-705 lg:w-386 lg:col-start-1 lg:col-end-1 lg:self-center lg:justify-self-end"
      />
      <Image
        src={catPic}
        alt="A cat image"
        className="hidden lg:inline-block lg:col-start-3 lg:self-center lg:max-w-fit"
      />
      <div className="mb-2 self-end sm:block sm:mt-24 col-start-2 col-end-2 sm:row-start-1 sm:self-start justify-self-center">
        <Image src={catPic} alt="A cat image" className="sm:hidden" />
        <h1 className="text-lg sm:text-right sm:text-4xl font-bold text-sp-10 col-start-2 col-end-2 sm:justify-self-center dark:text-sp-60">
          THE BEST FOR YOUR PET!
        </h1>
        <p className="hidden sm:block sm:text-xs sm:text-right sm:dark:text-sp-10">
          Adquire your pet collar now!
        </p>
      </div>
      <form className="sm:row-start-1 flex flex-col justify-center justify-self-center col-start-2 col-end-2 sm:h-575 sm:mt-28">
        <label className="dark:text-sp-white2">Pet Name:</label>
        <input
          className="indent-2 w-80 h-9 drop-shadow-lg rounded focus:outline focus:outline-sp-30 focus:border focus:outline-2 dark:bg-transparent dark:border-2 dark:border-sp-gray dark:focus:border-bg-sp-30 dark:focus:outline dark:focus:outline-2 dark:focus:outline-sp-30 dark:text-white"
          type="text"
        />
        <label className="mt-8 dark:text-sp-white2">Password:</label>
        <input
          className="indent-2 w-80 h-9 drop-shadow-lg rounded focus:outline focus:outline-sp-30 focus:border focus:outline-2 dark:bg-transparent dark:border-2 dark:border-sp-gray dark:focus:border-bg-sp-30 dark:focus:outline dark:focus:outline-2 dark:focus:outline-sp-30 dark:text-white"
          type="password"
        />
        <button
          type="button"
          className="bg-sp-10 active:bg-transparent active:border-2 active:border-sp-10 active:text-sp-10 hover:bg-sp-30 dark:hover:bg-sp-30 w-60 dark:active:bg-transparent h-14 rounded text-white self-center mt-10"
        >
          Login
        </button>
        <p className="text-sp-gray2 self-center mt-16">
          Don&apos;t have account?{' '}
          <Link
            href="/register"
            className="text-black dark:text-white dark:hover:text-sp-10 hover:text-sp-10"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  </main>
);

export default Main;
