import Card from "@/components/home/card"; // Adjust the path as necessary
import { useEffect, useState } from "react";
import menuData from "../../store/data.json"


function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Load data from JSON
    setMenuItems(menuData);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Menu
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} foodData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
