import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProductById = async (id: string) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate function

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });

  if (isLoading) return <h3>Loading Product Details...</h3>;
  if (isError) return <h3>Error loading product details.</h3>;

 return (
    <div className="product-details">
      <center>
        <div className="card" style={{ height: 550 }}>
          <img className="img" src={product.image} alt={product.title} />
          <div className="card-desc">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <h4 style={{ fontFamily: "Times New Roman", color: "black" }}>
              {product.description}
            </h4>
            <button className="back-btn" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default ProductDetails;
