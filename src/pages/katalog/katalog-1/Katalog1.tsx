import { useEffect, useState } from "react";
import HomeCopies from "../HomeCopies";
import { Link } from "react-router-dom";
import axios from "axios";

const Katalog1 = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  let limit = 4;
  let numOfpages = Math.ceil(allPosts.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }

  const fetchPosts = async (page) => {
    try {
      let url = `http://localhost:3000/cosmetics?_page=${page}&_limit=${limit}`;
      const res = await axios.get(url);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/cosmetics");
      setAllPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  //////////////////////////////////////////////////////////////
  return (
    <div>
      <section>
        <div className="container grid grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Link to={`/oneCatalog/${post.id}`}>
              <div className="box" key={index}>
                <img
                  src={post.image}
                  alt=""
                  className="h-[30rem] absolute z-[-1]"
                />
                <div className="box-title-left">
                  <h5>{post.name}</h5>
                  <p>{post.title}</p>
                </div>
                <div className="box-title-right">
                  <h5>{post.price}</h5>
                  <p>{post.weight}</p>
                </div>
              </div>
            </Link>
          ))}

          <div className="flex justify-center buttons items-center w-full text-center gap-4">
            {arrBtns?.map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className="text-6xl p-5 bg-slate-100 rounded-full hover:bg-slate-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
      <HomeCopies />
    </div>
  );
};

export default Katalog1;
