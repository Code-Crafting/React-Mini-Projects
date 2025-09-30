function Pagination({ size, currentPage, setCurrentPage }) {
  const paginationSize = Array.from({ length: size }, (_, i) => i);

  return (
    <div className="flex justify-center items-center gap-4 py-8">
      {currentPage > 0 && (
        <span
          className="hover:cursor-pointer"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &#60; Prev
        </span>
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
              {el + 1}
            </div>
          );
        })}
      </div>

      {currentPage < size - 1 && (
        <span
          className="hover:cursor-pointer w-[50px]"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next &#62;
        </span>
      )}
    </div>
  );
}
export default Pagination;
