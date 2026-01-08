import { useEffect, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Pagination = () => {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Posts[]>([]);
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const data = await response.json();
      // console.log(data);
      if (data && data.length) {
        setPosts(data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchPosts();
  }, [page]);
  return (
    <div className="w-screen min-h-screen p-10 bg-gray-100">
      {/* Posts List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {posts.map((p, index) => (
          <div
            key={index}
            className="p-5 transition bg-white rounded-lg shadow hover:shadow-md"
          >
            <h1 className="text-lg font-semibold text-gray-800">{p.title}</h1>

            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button className="px-4 py-2 text-gray-600 bg-gray-300 rounded hover:bg-gray-400">
          Prev
        </button>

        <button onClick={()=>setPage(1)} className={`px-4 py-2  ${page === 1 ?  `bg-black text-white ` : `bg-white text-black `} border rounded `}>1</button>
        <button onClick={()=>{
            setPage(2)
        }} className={`px-4 py-2  ${page === 2 ?  `bg-black text-white ` : `bg-white text-black `} border rounded hover:bg-gray-100`}>
          2
        </button>
        <button onClick={()=>setPage(3)} className={`px-4 py-2  ${page === 3 ?  `bg-black text-white ` : `bg-white text-black `} border rounded hover:bg-gray-100`}>
          3
        </button>

        <button className="px-4 py-2 text-white bg-black rounded">Next</button>
      </div>
    </div>
  );
};

export default Pagination;
