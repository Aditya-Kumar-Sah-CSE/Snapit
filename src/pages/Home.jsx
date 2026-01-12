import { useState, useMemo } from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { SlidersHorizontal } from "lucide-react";

const Home = ({ searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("recommended");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes((searchTerm || "").toLowerCase());
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });

    // Apply Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <>
      <Hero />

      <Category 
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <section className="products-section">
        <div className="flex justify-between items-center mb-6 px-4 md:px-8">
          <h2 className="section-title text-2xl font-bold text-gray-800">
            {selectedCategory ? `${selectedCategory} Products` : "Popular Products"}
          </h2>
          <span className="text-gray-500">
            {filteredProducts.length} items found
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <SlidersHorizontal size={32} className="text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-500 max-w-xs mx-auto">
              We couldn't find any products matching your current search or filters.
            </p>
            <button
              onClick={() => { setSelectedCategory(null); }}
              className="mt-6 text-[#0E2931] font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
