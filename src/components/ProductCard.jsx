import { Link, useNavigate } from "react-router-dom";
import { Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleOrderNow = (e) => {
    e.preventDefault();
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col" style={{ padding: '16px' }}>
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden rounded-xl bg-gray-50 mb-4 h-48 p-4" style={{ padding: '16px' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
        />
      </Link>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <Link to={`/products/${product.id}`}>
              <h3 className="font-semibold text-lg text-gray-800 hover:text-[#0E2931] mb-1 line-clamp-1">{product.name}</h3>
            </Link>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <span className="font-bold text-[#0E2931] ml-2">₹{product.price}</span>
        </div>

        <div className="mt-auto space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gray-50 hover:bg-[#0E2931]/10 text-[#0E2931] py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus size={18} />
            Add to Cart
          </button>
          <button
            onClick={handleOrderNow}
            className="w-full bg-[#0E2931] hover:bg-[#1a4a58] text-white py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag size={18} />
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
