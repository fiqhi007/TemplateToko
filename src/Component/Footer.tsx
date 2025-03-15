import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-black shadow-[0_-5px_0_0_#000] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Bagian Kiri: Logo dan Teks */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-center text-xl font-bold">
              N
            </div>
            <p className="text-lg font-semibold">
              &copy; 2023 Neobrutalism Co.
            </p>
          </div>

          {/* Bagian Tengah: Link Navigasi */}
          <nav className="flex gap-4">
            <a
              href="#"
              className="text-black hover:text-yellow-500 transition-colors border-b-2 border-transparent hover:border-black"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-yellow-500 transition-colors border-b-2 border-transparent hover:border-black"
            >
              About
            </a>
            <a
              href="#"
              className="text-black hover:text-yellow-500 transition-colors border-b-2 border-transparent hover:border-black"
            >
              Services
            </a>
            <a
              href="#"
              className="text-black hover:text-yellow-500 transition-colors border-b-2 border-transparent hover:border-black"
            >
              Contact
            </a>
          </nav>

          {/* Bagian Kanan: Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 bg-white border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-center hover:bg-yellow-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-center hover:bg-yellow-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A3.309 3.309 0 0 1 .78 13.58a9.32 9.32 0 0 0 5.034 1.475c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A3.309 3.309 0 0 1 .78 13.58a9.32 9.32 0 0 0 5.034 1.475z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white border-2 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-center hover:bg-yellow-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;