import { useState, useMemo } from "react";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const Shop = ({ searchTerm }) => {
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
        <div className="bg-gray-50 min-h-screen pb-16">
            {/* Header Section for Shop Page */}
            <div className="bg-[#0E2931] text-white py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Our Products</h1>
                    <p className="text-white/70 max-w-2xl mx-auto font-medium">
                        Explore our wide range of fresh, organic, and premium products delivered straight to your home.
                    </p>
                </div>
            </div>

            {/* Filter Section (Sticky) */}
            <div className="sticky top-[70px] z-40 bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <Category
                        activeCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
                {/* Sort and Info Bar */}
                <div className="flex flex-col items-center justify-center mb-10 gap-6 text-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#0E2931] mb-2">
                            {selectedCategory ? `${selectedCategory}` : "All Items"}
                            {searchTerm && <span className="text-gray-400 font-normal"> matching "{searchTerm}"</span>}
                        </h2>
                        <p className="text-gray-500 font-medium">
                            Showing <span className="text-[#0E2931] font-bold">{filteredProducts.length}</span> results
                        </p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:flex-none">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-5 py-3 pr-12 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0E2931]/10 cursor-pointer shadow-sm"
                            >
                                <option value="recommended">Best Match</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                        <button className="p-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                            <SlidersHorizontal size={20} />
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
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
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Nothing found</h3>
                        <p className="text-gray-500 max-w-xs mx-auto">
                            We couldn't find any products matching your current filters.
                        </p>
                        <button
                            onClick={() => { setSelectedCategory(null); }}
                            className="mt-6 text-[#0E2931] font-bold hover:underline"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Shop;
