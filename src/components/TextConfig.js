import React from "react";

export default function TextConfig() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="inline-flex rounded-md items-center" role="group">
          <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:focus:ring-blue-500 dark:focus:text-white">
            <button className="mx-3 hover:text-primary">@ punctuation</button>
            <button className="mx-3 hover:text-primary"># numbers</button>
          </div>
          <div className="px-4 flex py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:focus:ring-blue-500 dark:focus:text-white">
            <button className="flex mx-1 hover:text-primary">
              <svg
                width="17px"
                height="17px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  fill="#323232"
                />
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#ffffff"
                  stroke-width="2"
                />
                <path
                  d="M12 7L12 11.5L12 11.5196C12 11.8197 12.15 12.1 12.3998 12.2665V12.2665L15 14"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="mx-1 self-center text-sm font-semibold whitespace-nowrap">
                time
              </div>
            </button>
            <button className="flex mx-1 hover:text-primary">
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 21L7.5 15M18 21L16.5 15M16.5 15L14 5C14 5 13.5 3 12 3C10.5 3 10 5 10 5L7.5 15M16.5 15H7.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="mx-1 self-center text-sm font-semibold whitespace-nowrap">
                words
              </div>
            </button>
            <button className="flex mx-1 hover:text-primary">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.62231 6.78278C10.0546 6.43909 10.1265 5.81001 9.78277 5.3777C9.43908 4.94539 8.81001 4.87354 8.37769 5.21724C4.73471 8.11342 4 11.8784 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16C10 14.3432 8.65685 13 7 13C6.71233 13 6.43412 13.0405 6.17076 13.1161C6.5162 10.5872 7.45738 8.50391 9.62231 6.78278ZM20 16C20 17.6569 18.6569 19 17 19C15.3431 19 14 17.6569 14 16C14 11.8784 14.7347 8.11342 18.3777 5.21724C18.81 4.87354 19.4391 4.94539 19.7828 5.3777C20.1265 5.81001 20.0546 6.43909 19.6223 6.78278C17.4574 8.50391 16.5162 10.5872 16.1708 13.1161C16.4341 13.0405 16.7123 13 17 13C18.6569 13 20 14.3432 20 16Z"
                  fill="#ffffff"
                />
              </svg>
              <div className="mx-1 self-center text-sm font-semibold whitespace-nowrap">
                words
              </div>
            </button>
            <button className="flex mx-1 hover:text-primary">
              <svg
                width="17px"
                height="17px"
                fill="#ffffff"
                viewBox="0 0 56 56"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M 9.5899 50.2070 L 46.4102 50.2070 C 49.9257 50.2070 52.1289 47.6758 52.1289 44.4883 C 52.1289 43.5273 51.8947 42.5664 51.3791 41.6758 L 32.9336 8.6758 C 31.8789 6.7773 29.9570 5.7930 28.0117 5.7930 C 26.0899 5.7930 24.1211 6.7773 23.0664 8.6758 L 4.6446 41.6992 C 4.1289 42.5898 3.8711 43.5273 3.8711 44.4883 C 3.8711 47.6758 6.0977 50.2070 9.5899 50.2070 Z M 28.0117 42.0273 C 24.4258 42.0273 21.4961 39.2148 21.4961 35.6523 C 21.4961 33.5899 22.4805 31.6445 23.4648 29.8399 L 27.4024 22.5742 C 27.5664 22.3164 27.7305 22.1523 28.0117 22.1523 C 28.2930 22.1523 28.5039 22.3164 28.6211 22.5742 L 32.5586 29.8399 C 33.5195 31.6445 34.5273 33.5899 34.5273 35.6523 C 34.5273 39.2148 31.5977 42.0273 28.0117 42.0273 Z"></path>
                </g>
              </svg>
              <div className="mx-1 self-center text-sm font-semibold whitespace-nowrap">
                zen
              </div>
            </button>
            <button className="flex mx-1 hover:text-primary">
              <svg
                width="17px"
                height="17px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.6316 7.63137C15.2356 7.23535 15.0376 7.03735 14.9634 6.80902C14.8981 6.60817 14.8981 6.39183 14.9634 6.19098C15.0376 5.96265 15.2356 5.76465 15.6316 5.36863L18.47 2.53026C17.7168 2.18962 16.8806 2 16.0002 2C12.6865 2 10.0002 4.68629 10.0002 8C10.0002 8.49104 10.0592 8.9683 10.1705 9.42509C10.2896 9.91424 10.3492 10.1588 10.3387 10.3133C10.3276 10.4751 10.3035 10.5612 10.2289 10.7051C10.1576 10.8426 10.0211 10.9791 9.74804 11.2522L3.50023 17.5C2.6718 18.3284 2.6718 19.6716 3.50023 20.5C4.32865 21.3284 5.6718 21.3284 6.50023 20.5L12.748 14.2522C13.0211 13.9791 13.1576 13.8426 13.2951 13.7714C13.4391 13.6968 13.5251 13.6727 13.6869 13.6616C13.8414 13.651 14.086 13.7106 14.5751 13.8297C15.0319 13.941 15.5092 14 16.0002 14C19.3139 14 22.0002 11.3137 22.0002 8C22.0002 7.11959 21.8106 6.28347 21.47 5.53026L18.6316 8.36863C18.2356 8.76465 18.0376 8.96265 17.8092 9.03684C17.6084 9.1021 17.3921 9.1021 17.1912 9.03684C16.9629 8.96265 16.7649 8.76465 16.3689 8.36863L15.6316 7.63137Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <div className="mx-1 self-center text-sm font-semibold whitespace-nowrap">
                custom
              </div>
            </button>
          </div>
          <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:focus:ring-blue-500 dark:focus:text-white">
            <button className="mx-3 hover:text-primary">10</button>
            <button className="mx-3 hover:text-primary">25</button>
            <button className="mx-3 hover:text-primary">50</button>
            <button className="mx-3 hover:text-primary">100</button>
          </div>
        </div>
      </div>
    </>
  );
}
