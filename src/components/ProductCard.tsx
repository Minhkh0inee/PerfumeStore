import { ShoppingCart } from "lucide-react";
import productImg from "../assets/images/product.jpg";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();

  const redirectToDetail = () => {
    navigate("/perfumes/1");
  };

  return (
    <div
      onClick={redirectToDetail}
      className="flex flex-col gap-y-3 w-48 md:w-56 lg:w-72 p-2 cursor-pointer hover:shadow-md rounded-sm ease-in-out duration-300"
    >
      <div className="w-full h-40">
        <img
          src={productImg}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="montserrat-bold text-sm w-full">
        <div>Chanel Coco</div>
        <div className="text-xs montserrat-regular flex justify-between items-center pr-1">
          <span>$180</span>
          <span className="hover:bg-green-400 hover:rounded-full w-5 h-5 flex justify-center items-center p-1">
            <ShoppingCart size={16} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
