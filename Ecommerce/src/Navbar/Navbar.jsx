import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import SliderItem from "../Componets/SliderItem";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  //quantity
  const { cart, quantity ,TotalAmount} = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <>
      <div className=" flex items-center justify-between mt-2 shadow rounded-md px-4 bg-gray-50 py-3">
        <div className="">
          <h1 className=" font-bold text-2xl text-slate-700">Super Mall</h1>
        </div>
        <div className="">
          <div className=" relative">
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              <FaShoppingCart />
            </Button>
            <span className=" w-5 h-5 leading-[22px] -top-1 -right-2 rounded-full absolute text-center bg-red-500 text-white">
              {quantity}
            </span>
          </div>
        </div>
      </div>

      {/* // slider bar */}
      <Drawer
        size={"md"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <div className=" shadow pl-4 mt-3 font-sans">
            <h1 className=" text-2xl py-2  font-bold text-slate-800">
              Your Products
            </h1>
          </div>
          <DrawerBody mb={20}>
            {
              cart.map(ct => (
                <div key={ct.id} className="">
                 <SliderItem ct={ct}/>
                </div>
              ))
            }
          </DrawerBody>
          <div className=" border-t px-4 font-sans bg-gray-50 w-full py-5 shadow-md flex justify-between items-center absolute bottom-0">
              <h1 className=" text-2xl font-bold text-slate-700">Total</h1>
              <p className="">$ {TotalAmount.toFixed(2)}</p>
            </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
