import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-4">
      <div className="h-40 bg-[#12484C]/20 rounded mb-3"></div>
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-[#861211] font-bold">${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="block mt-3 bg-[#0E2931] text-white text-center py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
