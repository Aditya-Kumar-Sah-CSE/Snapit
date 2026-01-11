const Category = ({ activeCategory, onSelectCategory }) => {
  const categories = ["All", "Vegetables", "Fruits", "Snacks", "Grains", "Spices", "Essentials"];

  return (
    <div className="py-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => onSelectCategory(cat === "All" ? null : cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium cursor-pointer ${(activeCategory === cat || (cat === "All" && !activeCategory))
                ? "bg-[#0E2931] text-white border-[#0E2931]"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#0E2931] hover:text-[#0E2931]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
