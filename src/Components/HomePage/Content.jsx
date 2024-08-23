import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import cat from "../Assets/catimage.jpg"
import dog from "../Assets/dogimage.jpg"
import Products from "./Pages/Products";
import { Items } from "../MainPage/Main";
import Navbar from "./Navbar";
import Footer from "./Footer";
import luxelife from "../Assets/luxelife.webp";
import catmain from "../Assets/catmain.webp";
import dogmain from "../Assets/dogmain.webp";

const Content = () => {
  const navigate = useNavigate();
  const { data } = useContext(Items);

  return (
    <div>
      <Navbar />

      <div className="">
        <img
          onClick={() => navigate("/allproducts")}
          className="w-full"
          src={
            "https://supertails.com/cdn/shop/files/Dry_Food_Main_banner-1-min.png?v=1724043477"
          }
          alt="Background"
        />
      </div>

      <div className="font-serif text-xl md:text-4xl bg-green-950 h-20 text-white flex items-center justify-center gap-5 text-center">
        <h1>
          Get
          <span className="text-green-800 text-2xl md:text-4xl">
            {" "}
            10% off
          </span>{" "}
          your first order
        </h1>
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl font-sans font-bold ml-10 mt-10 ">
          Shop for
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-5 mx-2">
          <div className="">
            <Link to="/cat">
              <img className="  rounded-lg" src={cat} alt="Cat" />
            </Link>
          </div>
          <div className="">
            <Link to="/dog">
              <img className="" src={dog} alt="Dog" />
            </Link>
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-sans font-bold ml-10 text-gray-900 mt-16">
            Popular Products
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-10">
          {data.slice(0, 10).map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <img src={luxelife} alt="" />
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-sans font-bold ml-10 text-gray-900 mt-16">
          Trending Now
        </div>
        <div className="grid gap-3 pt-10 md:ml-5 grid-cols-2 md:grid-cols-5">
          {data
            .filter((ele) => ele.bestseller === true)
            .map((best) => (
              <div className="">
                <div
                  className="flex flex-col shadow-lg bg-white p-2 rounded-lg justify-around md:ml-3 items-center gap-3 mb-5 w-[200px] md:w-[250px] h-[300px]"
                  onClick={() => navigate(`/productdetails/${best.id}`)}
                >
                  <img
                    className="w-[200px] gap-2 rounded-lg m-auto mt-3 h-[200px] shadow-lg"
                    src={best.image}
                    alt=""
                  />

                  <h1 className="font-bold text-gray-900 ">
                    {best.name}
                  </h1>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
