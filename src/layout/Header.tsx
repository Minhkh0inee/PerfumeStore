import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { List, ShoppingCart } from "lucide-react";
import logo from "../assets/logo/store-logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center py-2 px-5 bg-white lg:px-10 montserrat-regular lg:grid lg:grid-cols-3 lg:justify-items-center lg:align-items-center">
      {/* img */}
      <div className="w-16 h-16">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>

      {/* nav link - desktop mode*/}
      <div className="hidden lg:flex lg:items-center lg:gap-x-10">
        <div className="cursor-pointer hover:text-orange-500 hover:font-bold hover:underline ease-in-out duration-300">
        <Link to="/">Home</Link>
        </div>
        <div className="cursor-pointer hover:text-orange-500 hover:font-bold hover:underline ease-in-out duration-300">
          About
        </div>
        <div className="cursor-pointer hover:text-orange-500 hover:font-bold hover:underline ease-in-out duration-300">
          <Link to="/perfumes">Product</Link>
        </div>
        <div className="cursor-pointer hover:text-orange-500 hover:font-bold hover:underline ease-in-out duration-300">
          Collection
        </div>
        <div className="cursor-pointer hover:text-orange-500 hover:font-bold hover:underline ease-in-out duration-300">
          Contact
        </div>
      </div>

      {/* login & cart - destop & tablet mode*/}
      <div className="hidden lg:flex lg:gap-x-5 lg:items-center">
        <div>
          <ShoppingCart />
        </div>
        <div>
          <Link to="/signin">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>

      {/* login & cart - mobile mode*/}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <List />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Header;
