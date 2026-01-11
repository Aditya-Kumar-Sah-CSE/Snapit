import Hero from "../components/Hero";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Organic Dal",
    price: 180,
    image: "https://images.unsplash.com/photo-1615485737651-580f0a8b6b4c?auto=format&fit=crop&w=500&q=80",

  },
  {
    id: 2,
    name: "Fresh Apples",
    price: 220,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Whole Wheat",
    price: 160,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Spices Pack",
    price: 90,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Fresh Vegetables",
    price: 140,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Snacks Combo",
    price: 250,
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=400&q=80",
  },
  {
  id: 7,
  name: "Dry Fruits",
  price: 320,
  image:
    "https://images.unsplash.com/photo-1590080877777-7bdf8c82d8f2?auto=format&fit=crop&w=500&q=80",

},
{
  id: 8,
  name: "Rice Premium",
  price: 280,
  image:
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
},
{
  id: 9,
  name: "Cooking Oil",
  price: 190,
  image:
    "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=500&q=80",
},

{
  id: 10,
  name: "Breakfast Cereals",
  price: 210,
  image:
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80",
},

];



const Home = () => {
  return (
    <>
      <Hero />
      <Category />

      <section className="products-section">
        <h2 className="section-title">Popular Products</h2>

        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
