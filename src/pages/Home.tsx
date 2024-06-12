import { Button } from "@/components/ui/button";
import mainImg from "../assets/images/main-img.jpg";
import subImg from "../assets/images/sub-1-img.jpg";
import ProductCard from "@/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import CommentCard from "@/components/CommentCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex flex-col gap-y-14">
      {/* Section 1 */}
      <section className="h-60 relative montserrat-regular w-full md:h-72 lg:h-96">
        <img
          src={mainImg}
          alt="main-img"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 bg-black opacity-40 w-full h-full"></div>
        <div className="absolute montserrat-regular top-0 w-full h-full text-white z-30 text-center flex flex-col justify-center items-center gap-y-1">
          <span className="tracking-wide text-3xl lg:text-5xl">
            Discover Your <br></br> Dream Perfume
          </span>

          <p className="text-sm w-10/12 lg:text-lg">
            Discover your signature scent with our collection of luxurious
            perfumes.
          </p>

          <Button className=" rounded-xl h-7 px-5 mt-3 bg-white text-black lg:h-10 lg:px-8">
            <Link to="/perfumes">
              <span className="text-xs lg:text-base montserrat-regular">
                Shop now
              </span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <div className="flex justify-center items-center mb-3">
          <Badge variant="outline" className="montserrat-regular lg:text-base">
            Our Product
          </Badge>
        </div>
        <div className="text-xl montserrat-regular px-4 md:text-center lg:text-2xl lg:mb-10">
          The Best Product We Provide
        </div>
        {/* Best Seller Product */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full px-4 mt-5"
        >
          <CarouselContent className="-mr-1 pl-2 md:hidden">
            <CarouselItem className="basis-1/2">
              <ProductCard />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <ProductCard />
            </CarouselItem>
            <CarouselItem className="basis-1/2 ">
              <ProductCard />
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="hidden md:px-8 md:grid md:grid-cols-3 md:justify-evenly md:justify-items-center md:content-center md:gap-y-5 md:w-full md:items-center md:mx-auto lg:max-w-[980px]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center mt-3 lg:mt-8">
          <Button className="border-2 rounded-xl h-7 px-5 mt-3 bg-white text-black flex items-center gap-x-2">
            <span className="text-xs montserrat-regular">See collection</span>
            <span>
              <MoveRight size={16} />
            </span>
          </Button>
        </div>
      </section>

      {/* section 3 */}
      <section className="h-60 relative montserrat-regular w-full md:h-72 lg:h-96">
        <img
          src={subImg}
          alt="main-img"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 bg-black opacity-40 w-full h-full"></div>
        <div className="absolute montserrat-regular bottom-3 w-full h-full text-white z-30 px-3 flex justify-between items-end gap-y-1 md:justify-center md:flex-col md:items-center">
          <span className="tracking-wide text-xl lg:text-4xl ">
            Shop our perfume collection now
          </span>

          <Button className="border-2 border-white rounded-xl h-7 px-5 mt-3 bg-transparent text-white flex items-center gap-x-2">
            <span className="text-xs montserrat-regular">Click here</span>
            <span>
              <MoveRight size={16} />
            </span>
          </Button>
        </div>
      </section>

      {/* section 4 */}
      <section>
        <div className="flex flex-col justify-center items-center mb-3 gap-y-2">
          <Badge variant="outline" className="montserrat-regular lg:text-base">
            Testimonial
          </Badge>

          <div className="text-2xl lg:text-2xl ">What They Say About Me</div>
        </div>

        <div className="my-20 px-10 md:max-w-[700px] mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full "
          >
            <CarouselContent className="-mt-1 h-[150px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <CommentCard />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default Home;
