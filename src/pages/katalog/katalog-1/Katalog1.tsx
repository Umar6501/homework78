import { useEffect, useState } from "react";
import HomeCopies from "../HomeCopies";
import { Link } from "react-router-dom";
import axios from "axios";

const Katalog1 = () => {
  // const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  // const fetchPosts = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3000/cosmetics?_limit=12");
  //     setPosts(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  // ///////////////////////////
  // Paginition
  let limit = 6;
  let numOfpages = Math.ceil(allPosts.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }

  const fetchPosts = async (page: string) => {
    try {
      let url = `http://localhost:3000/cosmetics?_page=${page}&_limit=${limit}`;
      const res = await axios.get(url);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  ////////////////////////////////////////////////////////////////
  return (
    <div>
      <section>
        <div className="container grid grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Link to={`/category/${post.id}`}>
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
          <div className="d-flex justify-center buttons">
            {arrBtns?.map((item) => (
              <button key={item} onClick={() => setPage(item)}>
                {item}
              </button>
            ))}
          </div>
          {/* <Link to="/oneCatalog">
            <div className="boxes grid grid-cols-4 p-[5rem] gap-2">
              <div className="box">
                <div className="box-title-left">
                  <h5>High</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>990 $</h5>
                  <p>50ml</p>
                </div>
              </div>
              <div className="box">
                <div className="box-title-left">
                  <h5>Rest</h5>
                  <p>минеральная пудра</p>
                </div>
                <div className="box-title-right">
                  <h5>690 $</h5>
                  <p>20g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Rose</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>890 $</h5>
                  <p>50ml</p>
                </div>
              </div>
              <div className="box">
                <div className="box-title-left">
                  <h5>Milk</h5>
                  <p>масло для тела</p>
                </div>
                <div className="box-title-right">
                  <h5>790 $</h5>
                  <p>150ml</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Paradise</h5>
                  <p>минеральная пудра</p>
                </div>
                <div className="box-title-right">
                  <h5>590 $</h5>
                  <p>15g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Sun</h5>
                  <p>бомбочка для ванны</p>
                </div>
                <div className="box-title-right">
                  <h5>90 $</h5>
                  <p>20g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Violet</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>890 $</h5>
                  <p>50ml</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Clean</h5>
                  <p>маска для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>490 $</h5>
                  <p>100g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Coconut</h5>
                  <p>масло для тела</p>
                </div>
                <div className="box-title-right">
                  <h5>990 $</h5>
                  <p>300ml</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Lavender</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>290 $</h5>
                  <p>50g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Lotos</h5>
                  <p>маска для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>890 $</h5>
                  <p>50ml</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Earth</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>90 $</h5>
                  <p>20g</p>
                </div>
              </div>
            </div>
          </Link> */}

          <div className="pag flex text-[2rem] ms-[53rem] items-center gap-4">
            <p className="cursor-pointer">1</p>
            <div className="line w-[5rem] h-[1px] bg-black opacity-1"></div>
            <p className="cursor-pointer">8</p>
          </div>
        </div>
      </section>
      <HomeCopies />
    </div>
  );
};

export default Katalog1;
