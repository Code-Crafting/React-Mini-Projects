import { useState } from "react";

function Pagination({ size }) {
  const paginationSize = Array.from({ length: size }, (_, i) => i + 1);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex justify-center items-center gap-4 py-8">
      {currentPage > 1 && (
        <span className="hover:cursor-pointer">&#60; Prev</span>
      )}

      <div className="flex gap-1">
        {paginationSize.map((el, i) => {
          return (
            <div
              className={`${
                currentPage === el ? "bg-yellow-200" : "bg-yellow-500"
              } w-[30px] h-[30px] grid place-items-center rounded-full hover:cursor-pointer`}
              key={i}
              onClick={() => setCurrentPage(el)}
            >
              {el}
            </div>
          );
        })}
      </div>

      {currentPage < size && (
        <span className="hover:cursor-pointer">&#62; Next</span>
      )}
    </div>
  );
}
export default Pagination;
