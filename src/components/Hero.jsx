import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content ">
        <h1>Fresh & Organic Groceries</h1>
        <p>Healthy food for a better life</p>
        <button onClick={() => navigate('/shop')}>Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
