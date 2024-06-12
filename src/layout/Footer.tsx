import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="border-t-2 pt-10 pb-5 montserrat-regular">
      <div className="lg:max-w-[80%] xl:max-w-[50%] mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-[50%]">
          <div className="montserrat-bold px-5 text-lg w-64 mb-5 ">
            Let's Get 50% Discount For All Product
          </div>
          <div className="flex items-center gap-x-2 px-5">
            <input
              className="w-48 rounded-2xl pl-5 h-10 border-2"
              placeholder="Email"
            />
            <Button className="rounded-2xl px-5">
              <span className="montserrat-thin text-xs">Send Now</span>
            </Button>
          </div>
        </div>

        <div className="w-full md:w-[50%]">
          <div className="flex items-start gap-x-5 mt-5 px-5">
            <ul className="montserrat-regular text-xs">
              <li className="text-sm montserrat-bold mb-2">Our Company</li>
              <li>About us</li>
              <li className="my-1">Find a Store</li>
              <li>Stories</li>
            </ul>

            <ul className="montserrat-regular text-xs">
              <li className="text-sm montserrat-bold mb-2">Section</li>
              <li>Product</li>
              <li className="my-1">Display</li>
              <li>Contact</li>
            </ul>

            <ul className="montserrat-regular text-xs">
              <li className="text-sm montserrat-bold mb-2">
                Customer Services
              </li>
              <li>Q&A</li>
              <li className="my-1">Order Tracking</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="mt-10 mb-2" />
      <div className="flex justify-between items-center px-5 text-xs md:max-w-[50%] mx-auto">
        <div>Logo</div>
        <div className="text-gray-400">@2024 ALL COPYRIGHT</div>
      </div>
    </footer>
  );
};

export default Footer;
