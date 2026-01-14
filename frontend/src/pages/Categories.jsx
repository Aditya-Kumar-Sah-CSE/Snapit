import { useState, useMemo } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { LayoutGrid, Leaf, Apple, Utensils, Wheat, Flame, ShoppingBag, ChevronRight } from "lucide-react";

const Categories = ({ searchTerm }) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        { name: "All", icon: <LayoutGrid size={20} />, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&h=100&fit=crop" },
        { name: "Vegetables", icon: <Leaf size={20} />, image: "https://images.unsplash.com/photo-1597362868429-3bb28b3f1f83?w=100&h=100&fit=crop" },
        { name: "Fruits", icon: <Apple size={20} />, image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=100&h=100&fit=crop" },
        { name: "Snacks", icon: <Utensils size={20} />, image: "https://images.unsplash.com/photo-1599490659223-e1539e76926a?w=100&h=100&fit=crop" },
        { name: "Grains", icon: <Wheat size={20} />, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop" },
        { name: "Spices", icon: <Flame size={20} />, image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=100&h=100&fit=crop" },
        { name: "Essentials", icon: <ShoppingBag size={20} />, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=100&h=100&fit=crop" },
    ];

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.name
                .toLowerCase()
                .includes((searchTerm || "").toLowerCase());
            const matchesCategory = activeCategory === "All"
                ? true
                : product.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* LEFT SIDE: Category Sidebar */}
            <aside className="w-full md:w-80 bg-white border-r border-gray-100 p-6 md:sticky md:top-20 md:h-[calc(100vh-80px)] overflow-y-auto">
                <h2 className="text-2xl font-black text-[#0E2931] mb-8">Categories</h2>
                <div className="space-y-3">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group ${activeCategory === cat.name
                                ? "bg-[#0E2931] text-white shadow-lg shadow-[#0E2931]/20 scale-[1.02]"
                                : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#0E2931]"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl overflow-hidden border-2 ${activeCategory === cat.name ? "border-white/20" : "border-white shadow-sm"}`}>
                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-bold text-sm tracking-tight">{cat.name}</span>
                                    <span className={`text-[10px] uppercase font-bold tracking-widest ${activeCategory === cat.name ? "text-white/60" : "text-gray-400"}`}>
                                        {cat.name === "All" ? `${products.length} Products` : `${products.filter(p => p.category === cat.name).length} Items`}
                                    </span>
                                </div>
                            </div>
                            <ChevronRight className={`transition-transform duration-300 ${activeCategory === cat.name ? "translate-x-1" : "text-gray-300 group-hover:translate-x-1"}`} size={16} />
                        </button>
                    ))}
                </div>
            </aside>

            {/* RIGHT SIDE: Product Content */}
            <main className="flex-1 p-6 md:p-10">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-[#0E2931] flex items-center gap-3 capitalize">
                            {categories.find(c => c.name === activeCategory)?.icon}
                            {activeCategory} Products
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">
                            Browsing {filteredProducts.length} items in {activeCategory}
                        </p>
                    </div>
                    {searchTerm && (
                        <div className="bg-[#0E2931]/5 px-4 py-2 rounded-xl">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Search result for</span>
                            <p className="text-[#0E2931] font-bold">"{searchTerm}"</p>
                        </div>
                    )}
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredProducts.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-100">
                        <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag size={32} className="text-gray-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No items here</h3>
                        <p className="text-gray-500 max-w-xs mx-auto">
                            We couldn't find any products in this category at the moment.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Categories;
