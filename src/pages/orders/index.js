import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Orders() {
  const [ordersData, setOrdersData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("api/myOrdersData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch orders");
      }

      const response = await res.json();
      setOrdersData(response?.order_data?.order_data || []);
    } catch (error) {
      console.error(error);
      // Handle error (show notification, etc.)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-4 mx-auto">
      {ordersData.length > 0 ? (
        ordersData.map((orders, orderIndex) => (
          <div key={orderIndex}>
            {orders.map((data, dataIndex) => (
              <div key={dataIndex}>
                {data.order_date ? (
                  <div className="font-bold text-xl text-white px-2 mb-2">
                    {data.order_date} <hr />
                  </div>
                ) : (
                  <div className="my-4 w-96 border-black border-gradient p-4 dark:border-white rounded-lg">
                    <div className="relative w-full h-72">
                      <Image
                        src={data.img}
                        alt="pizza"
                        fill
                        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="bg-red-300 flex justify-between my-1 p-2 border-r-2 border-l-2 text-white">
                      <div className="font-bold text-xl">{data.name}</div>
                      <div>{data.qty}</div>
                      <div>{data.size}</div>
                      <div className="font-semibold">{data.price}/-</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="flex w-screen flex-col items-center justify-center h-screen">
          <h1 className="text-4xl text-white font-bold">
            No previous Orders 😅
          </h1>
          <Link href="/" className="text-white text-xl hover:font-bold mt-8">
            Go back to the home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Orders;
