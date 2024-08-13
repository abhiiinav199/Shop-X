
import { useState, useContext } from "react";
import { ShoppingCartIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ProductContext);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    // Reset the button state after 1 second
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div
      key={product.id}
      className="flex flex-col justify-between w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-gray-800"
    >
      <Link to={`/product_details/${product.id}`}>
        <div className="relative p-14">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain aspect-square"
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-200">{product.title}</h2>
        <p className="mb-2 text-gray-400">{product.category}</p>
        <div className="flex justify-between">
          <p className="mb-4 text-lg font-bold text-teal-400">₹{product.price}</p>
          <p className="mb-2 text-yellow-400">Rating: {product.rating.rate}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className={`flex items-center justify-center w-full gap-2 py-2 text-white transition-colors duration-300 rounded-lg ${added
              ? "bg-gradient-to-r from-green-400 to-green-600"
              : "bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800"
            }`}
        >
          {added ? (
            <>
              <CheckCircleIcon className="w-5 h-5" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
