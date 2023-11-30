import { removeFromCart } from "@/store/features/cartSlice/cartSlice";
import { Button, ButtonGroup } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  // const p = data.attributes;

  const dispatch = useDispatch();

  // const updateCartItem = (e, key) => {
  //     let payload = {
  //         key,
  //         val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
  //         id: data.id,
  //     };
  //     dispatch(updateCart(payload));
  // };
  const handleButtonClick = (type, name) => {
    if (type === "removeformCart") {
      toast.error("Remove form cart"); // Displays a success message
    }
  };

  const priceByQuantity = () => {
    const discountPrice = orginalPrice - orginalPrice / discountRate;
    return parseInt(discountPrice);
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        {product?.imageURLs?.slice(1, 2).map((img, index) => (
          <Image
            key={index}
            src={img}
            width={340}
            height={300}
            alt="card-image"
          />
        ))}
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="lg:text-2xl text-xs font-semibold text-black/[0.8]">
            {product.name}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Sub Title
          </div>

          {/* PRODUCT PRICE */}
          <div className="lg:text-md text-[9px] font-bold text-black/[0.5] mt-2">
            MRP : &#2547; {product.orginalPrice}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {/* {p.subtitle} */} sub Title 2
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center  text-black/[0.5] text-sm md:text-md">
            {/* <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {p.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div> */}

            <div className="flex items-center gap-1 font-normal text-[10px]">
              <div className="lg:font-semibold  ">Quantity:</div>
              {/* <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select> */}
              {/* <ButtonGroup>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup> */}
              <div className="flex items-center">
                <button className="btn btn-xs text-gray-400">-</button>

                <span className="px-2">{product?.cQuantity}</span>

                <button className="btn btn-xs text-gray-400">+</button>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(removeFromCart(product));

              handleButtonClick("removeformCart", product.name);
            }}
            className="hover:bg-red-500/5  rounded-full p-2 hover:shadow"
          >
            <RiDeleteBin6Line className="cursor-pointer text-red-400   md:text-[20px] duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;