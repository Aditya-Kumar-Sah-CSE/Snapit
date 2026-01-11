const Category = () => {
  const categories = ["Vegetables", "Fruits", "Snacks", "Grains", "Spices"];

  return ( 
    <><br /><br /><br />
         
    <div className="categories mt-50">
      
      {categories.map((cat, i) => (
        <button key={i}>{cat}</button>
      ))}
    </div>
    </> 
  );
};

export default Category;
