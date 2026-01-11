const Category = () => {
  const categories = ["Vegetables", "Fruits", "Snacks", "Grains", "Spices"];

  return (
    <div className="categories">
      {categories.map((cat, i) => (
        <button key={i}>{cat}</button>
      ))}
    </div>
  );
};

export default Category;
