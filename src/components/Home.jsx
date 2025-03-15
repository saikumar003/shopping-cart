import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Fetching products using RTK Query
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  // ✅ Handle "Add to Cart" and redirect to the cart page
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart"); // ✅ Corrected navigation method
  };

  // ✅ Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An unexpected error occurred...</p>;

  return (
    <div className="home-container">
      <h2>New Arrivals</h2>
      <div className="products">
        {products?.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3> {/* ✅ Ensure you use correct field names */}
            <img src={product.image} alt={product.title} />
            <div className="details">
              <span>{product.description}</span>
              <span className="price">${product.price}</span>
            </div>
            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
