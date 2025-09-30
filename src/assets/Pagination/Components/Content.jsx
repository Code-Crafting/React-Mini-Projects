import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useChunkData } from "../Hooks/chunkData";

function Content() {
  const [contentData, setContentData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setContentData(data.products));
  }, []);

  const chunkData = useChunkData(contentData, 10);

  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col gap-4">
      {chunkData.length ? (
        <Pagination
          size={chunkData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <></>
      )}

      {chunkData.length ? (
        chunkData[currentPage].map((el) => {
          const { brand, category, description, id, title } = el;
          return (
            <div className="bg-gray-300 text-center" key={id}>
              <h1 className="text-4xl font-medium">{title}</h1>
              <h1 className="text-3xl">{brand}</h1>
              <h1 className="text-2xl">{description}</h1>
              <h1 className="text-2xl capitalize">{category}</h1>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
export default Content;
