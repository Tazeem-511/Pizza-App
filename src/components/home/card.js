import { CartContext } from "@/utils/ContextReducer";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const Card = (props) => {
  const data = props.foodData;
  const { state, dispatch } = useContext(CartContext);
  const priceOptions = Object.keys(data.price);
  const [size, setSize] = useState(priceOptions[0]);
  const [qty, setQty] = useState(1);

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = async () => {
    const updateItem = await state.find(
      (item) => item.tempId === data["_id"] + size
    );
    if (!updateItem) {
      dispatch({
        type: "ADD",
        id: data["_id"],
        tempId: data["_id"] + size,
        name: data.name,
        price: finalPrice,
        qty: qty,
        priceOption: size,
        img: data.img,
      });
    } else {
      dispatch({
        type: "UPDATE",
        tempId: data["_id"] + size,
        price: finalPrice,
        qty: qty,
      });
    }
  };

  let finalPrice = qty * parseInt(data.price[size]);

  return (
    <div className="card">
      <Link href={{ pathname: "/Item/[item]", query: { item: data["_id"] } }}>
        <div className="image-container">
          <Image
            src={data.img}
            alt="pizza"
            width={300} // Set the appropriate width
            height={200} // Set the appropriate height
            className="card-img"
            style={{ objectFit: "cover" }} // Ensure the image maintains its aspect ratio
          />
        </div>
      </Link>
      <div className="content">
        <div className="title">{data.name}</div>
        <p className="description">{data.description}</p>
      </div>
      <div className="controls">
        <select className="qty-select" onChange={handleQty}>
          {Array.from(Array(6), (e, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <select className="size-select" onChange={handleSize}>
          {priceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="footer">
        <button onClick={handleAddToCart} className="button">
          Add to cart
        </button>
        <p className="price">₹{finalPrice}/-</p>
      </div>
    </div>
  );
};

export default Card;
