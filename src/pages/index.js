import Card from "@/components/home/card";
import CarouselComponent from "@/components/home/carousel";
import { Inter } from "next/font/google";
// import data from "./../store/data.json"; 
import { useEffect, useState } from "react";
import { baseUrl } from "@/utils/baseUrl";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({data}) {
  console.log(data.data?.data);
  
  let categories = new Set();
  let categoryArray;
  const [typeFilter, setTypeFilter] = useState(false);
  const foodData = [];

  const handleData = () => {
    data?.map((item) => {
      foodData.push(item), categories.add(item.category);
    });
  };

  handleData();

  categoryArray = [...categories];
  console.log(process.env.NODE_ENV);

  return (
    <>
      <Head>
        <title>PizzaWala</title>
      </Head>
      <CarouselComponent />
      <div className="container mx-auto">
        <div className="my-6 space-x-5">
          <button
            className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${
              !typeFilter ? "glow glow-active" : "glow"
            } `}
            onClick={() => setTypeFilter(false)}
          >
            All
          </button>
          <button
            className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${
              typeFilter === "Veg" ? "glow glow-active" : "glow"
            }`}
            onClick={() => {
              setTypeFilter("Veg");
            }}
          >
            <span
              className={
                "lowercase font-thin bg-white border-green-500 border mr-2 px-0.1 text-green-500"
              }
            >
              ●
            </span>
            Veg
          </button>

          <button
            className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${
              typeFilter === "Non-Veg" ? "glow glow-active" : "glow"
            }`}
            onClick={() => {
              setTypeFilter("Non-Veg");
            }}
          >
            <span
              className={
                "lowercase font-thin bg-white border-red-500 border mr-2 px-0.1 text-red-500"
              }
            >
              ●
            </span>
            Non Veg
          </button>
        </div>
        {categoryArray.map((category) => {
          return (
            <>
              <div
                key={category}
                className=" text-4xl mt-10 mb-3 uppercase font-bold CATEGORY"
              >
                {category}
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center">
                <div className=" grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                  {foodData
                    ?.filter((foodData) => category === foodData.category)
                    ?.filter((foodData) =>
                      typeFilter ? typeFilter === foodData.foodType : foodData
                    )
                    ?.map((data) => {
                      return <Card key={data.name} foodData={data} />;
                    })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}


export async function getStaticProps() { 
    let data;
    try {
      const pizzaData = await fetch(baseUrl + "api/foodData", { method: "GET" })
        .then((response) => response.json())
        .catch((error) => error.message);

      data = await JSON.parse(JSON.stringify(pizzaData)); // step required during deployment in staticProps
    } catch (error) {
      console.log(error.message);
    }

    return {
      props: {
        data:data.data || null
      },
      // revalidate: 5,
    };
}