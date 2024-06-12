import { Plus, RefreshCcw, Tag, Truck } from "lucide-react";
import productImg from "../assets/images/product.jpg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PerfumeDetail = () => {
  return (
    <>
      <section className="flex flex-col montserrat-regular py-5 mb-20">
        <div className="lg:flex lg:flex-row lg:items-start lg:px-5 xl:max-w-[70%] mx-auto">
          <div className="h-96 w-full lg:w-1/2">
            <img
              src={productImg}
              alt=""
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          <div className="flex flex-col px-5 mt-5 lg:w-1/2 lg:mt-0">
            <div className="montserrat-bold tracking-widest text-lg md:text-xl">
              Channel
            </div>
            <div className="montserrat-regular text-2xl md:text-3xl">
              Savage
            </div>
            <div className="montserrat-regular text-orange-600 text-lg md:text-xl">
              $100
            </div>

            <p className="montserrat-regular text-lg md:text-base my-5 lg:w-[70%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolores, minus eos fugiat adipisci incidunt fugit quam, sint
              laborum voluptate voluptas, ipsam ex? Nihil hic enim aliquam.
              Suscipit, incidunt labore?
            </p>

            <div className="hidden mt-5 lg:flex lg:items-center lg:gap-x-3">
              <Select>
                <SelectTrigger className="w-[100px] md:w-[150px] md:h-16 md:text-lg">
                  <SelectValue placeholder="Volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10ml</SelectItem>
                  <SelectItem value="50">50ml</SelectItem>
                  <SelectItem value="100">100ml</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden bg-black px-5 py-4 mt-5 lg:flex lg:mt-0 cursor-pointer border-2 border-black lg:rounded-sm items-center gap-x-4 hover:bg-white text-white ease-in-out duration-300 hover:text-black ">
                <Plus />
                <span className="text-base md:text-lg "> Add to basket</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 mt-5 lg:hidden">
          <Select>
            <SelectTrigger className="w-[100px] md:w-[150px] md:h-16 md:text-lg">
              <SelectValue placeholder="Volume" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10ml</SelectItem>
              <SelectItem value="50">50ml</SelectItem>
              <SelectItem value="100">100ml</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="lg:hidden bg-black px-5 py-4 mt-5 flex items-center gap-x-4 hover:bg-white text-white ease-in-out duration-300 hover:text-black md: h-20">
          <Plus />
          <span className="text-base md:text-lg "> Add to basket</span>
        </div>

        <div className="mt-5 xl:mt-24">
          <div className="p-5 text-xl uppercase md:text-2xl lg:text-center">
            Gallery
          </div>
          <div className="xl:max-w-[70%] mx-auto xl:px-3 flex flex-col gap-y-5 md:grid md:grid-cols-2 md:grid-rows-2">
            <div className="h-52 px-5 md:px-2 xl:h-64">
              <img
                src={productImg}
                alt=""
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            <div className="h-52 px-5 md:px-2 xl:h-64">
              <img
                src={productImg}
                alt=""
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            <div className="h-52 px-5 md:px-2 xl:h-64">
              <img
                src={productImg}
                alt=""
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            <div className="h-52 px-5 md:px-2 xl:h-64">
              <img
                src={productImg}
                alt=""
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>

        <div className="px-5 mt-10 xl:mt-24">
          <div className="py-5 text-xl uppercase md:text-2xl lg:text-center">
            Care
          </div>
          <Accordion
            type="single"
            collapsible
            className="lg:w-[70%] lg:mx-auto w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <Truck />
                Free Flat Rate Shipping
              </AccordionTrigger>
              <AccordionContent>Estimated to be delivered</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="lg:w-[70%] lg:mx-auto w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <Tag />
                COD Policy
              </AccordionTrigger>
              <AccordionContent>Estimated to be delivered</AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="lg:w-[70%] lg:mx-auto w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <RefreshCcw />
                Return Policy
              </AccordionTrigger>
              <AccordionContent>Estimated to be delivered</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default PerfumeDetail;
