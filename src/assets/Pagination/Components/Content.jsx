import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Content() {
  const [contentData, setContentData] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setContentData(data.products));
  }, []);

  return (
    <div className="max-w-7xl mx-auto border border-black h-screen flex flex-col gap-4">
      {contentData.map((el) => {
        const { brand, category, description, id, title } = el;
        return (
          <div className="bg-gray-300 text-center" key={id}>
            <h1 className="text-4xl font-medium">{title}</h1>
            <h1 className="text-3xl">{brand}</h1>
            <h1 className="text-2xl">{description}</h1>
            <h1 className="text-2xl capitalize">{category}</h1>
          </div>
        );
      })}
      <Pagination size={contentData?.length / 10} />
    </div>
  );
}
export default Content;
