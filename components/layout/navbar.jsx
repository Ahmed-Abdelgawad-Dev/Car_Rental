import Image from "next/image";
import Link from "next/link";

const Appnavbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light tw-bg-white tw-px-2">
        <div className="container-fluid">
          <Link href="/">
            <a>
              <img
                style={{ width: "100px" }}
                classNameName="tw-w-10 tw-object-contain tw-cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4bmuZOzNXLTohhEgEn3jvwyH_BTl4-s02_-eGyAfNu8QYdOHmzAHbZk5-k7QnmMYJPc&usqp=CAU"
                //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4bmuZOzNXLTohhEgEn3jvwyH_BTl4-s02_-eGyAfNu8QYdOHmzAHbZk5-k7QnmMYJPc&usqp=CAU"
                alt="Logo"
              />
            </a>
          </Link>
          <a
            className="tw-text-red-700 tw-font-semibold tw-uppercase tw-font-mono"
            href="#"
          >
            Selmi cars
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto tw-space-x-20">
              <Link href="#">
                <a
                  className="tw-text-black tw-font-semibold tw-uppercase hover:tw-text-red-700  hover:tw-text-lg"
                  href="#"
                >
                  Home
                </a>
              </Link>
              <Link href="#">
                <a
                  className="tw-text-black tw-font-semibold tw-uppercase hover:tw-text-red-700  hover:tw-text-lg"
                  href="#"
                >
                  Car rental
                </a>
              </Link>
              <Link href="#">
                <a
                  className="tw-text-black tw-font-semibold tw-uppercase hover:tw-text-red-700  hover:tw-text-lg"
                  href="#"
                >
                  About
                </a>
              </Link>
              <Link href="#">
                <a
                  className="tw-text-black tw-font-semibold tw-uppercase hover:tw-text-red-700  hover:tw-text-lg"
                  href="#"
                >
                  Contact us
                </a>
              </Link>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="tw-text-white tw-bg-red-700 tw-rounded-md tw-px-4 tw-p-2 tw-font-semibold hover:tw-bg-red-900"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Appnavbar;
