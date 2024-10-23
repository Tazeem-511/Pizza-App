import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const sidesPriceOption = { single: "", double: "" };
const pizzaPriceOption = { regular: "", medium: "", large: "" };

const Admin = () => {
  const [mounted, setMounted] = useState(false);
  const [foodData, setFoodData] = useState({
    name: "",
    foodCategory: "",
    foodType: "",
    price: "",
    description: "",
    img: "",
  });

  const router = useRouter();

  useEffect(() => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    if (isAdmin === true) {
      setMounted(true);
    } else {
      router.push("/error"); // Redirect to error page
    }
  }, [router]);

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });

    if (e.target.name === "foodCategory") {
      if (e.target.value === "Pizza") {
        setFoodData((prevData) => ({
          ...prevData,
          price: pizzaPriceOption,
        }));
      } else if (e.target.value === "SIDES & BEVERAGES") {
        setFoodData((prevData) => ({
          ...prevData,
          price: sidesPriceOption,
        }));
      } else {
        setFoodData((prevData) => ({
          ...prevData,
          price: e.target.value,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/createFoodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    });

    const result = await response.json();
    if (result.success) {
      alert("Food data added successfully");
    } else {
      alert("Food data addition failed");
    }
  };

  return (
    <>
      {mounted ? (
        <div
          style={{
            height: "90vh",
            backgroundImage:
              'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundSize: "cover",
          }}
          className="flex justify-center items-center"
        >
          <div className="container w-full max-w-md">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Food Name
                </label>
                <input
                  placeholder="Enter your Food name"
                  name="name"
                  onChange={handleChange}
                  type="text"
                  required
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={foodData.name}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="foodCategory"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Food Category
                </label>
                <select
                  name="foodCategory"
                  onChange={handleChange}
                  type="foodCategory"
                  required
                  style={{ "-webkit-appearance": "auto" }}
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={foodData.category}
                >
                  <option value="">Select Food Category</option>
                  <option value="Pizza">PIZZA</option>
                  <option value="SIDES & BEVERAGES">SIDES & BEVERAGES</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="foodType"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Food Type
                </label>
                <select
                  onChange={handleChange}
                  name="foodType"
                  required
                  style={{ "-webkit-appearance": "auto" }}
                  type="foodType"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={foodData.foodType}
                >
                  <option value="">Select Food Types</option>
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
              </div>

              {foodData.foodCategory !== "" && (
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                  >
                    Food Price
                  </label>

                  {foodData.price !== "" &&
                    Object.keys(foodData.price).map((key) => {
                      return (
                        <div key={key} className="ml-4 mb-4">
                          <label
                            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                            htmlFor={key}
                          >
                            {key}
                          </label>
                          <input
                            name={key}
                            placeholder={`Price of ${key}`}
                            value={foodData.price[key]}
                            type="number"
                            onChange={(e) => {
                              setFoodData((prevData) => ({
                                ...prevData,
                                price: {
                                  ...prevData.price,
                                  [key]: e.target.value,
                                },
                              }));
                            }}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      );
                    })}
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Food Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter your Food description"
                  name="description"
                  onChange={handleChange}
                  type="text"
                  required
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={foodData.description}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="img"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Food Image
                </label>

                <input
                  placeholder="Enter your Food url"
                  name="img"
                  onChange={handleChange}
                  type="url"
                  required
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={foodData.img}
                />
              </div>

              <button
                type="submit"
                className="border font-bold text-gray-900 dark:text-gray-100 dark:border-gray-400 border-gray-900 rounded p-2 mr-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>Chal Bhag </div>
      )}
    </>
  );
};

export default Admin;
