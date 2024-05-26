import { ShoppingCart } from "lucide-react";
import productImg from "../assets/images/product.jpg";

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-y-3 w-44">
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
