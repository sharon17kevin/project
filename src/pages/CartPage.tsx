import { Truck, X } from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";
import {
  Frame,
  PaperOrientation,
  PaperSize,
  paperSizes,
} from "../data/print-types";

function onRemoveItem(id: string) {
  console.log(id);
}

interface CartItem {
  id: string;
  size: PaperSize;
  orientation: PaperOrientation;
  frame: Frame;
  comments: string;
  price: number;
}
const orient: PaperOrientation = {
  name: "LandScape",
  aspectRatio: 1,
};

const frame: Frame = {
  name: "LandScape",
  padding: 1,
};

export function Cart() {
  const deliveryOptions = [
    { name: "Standard", price: 5.99, estimatedDays: "5-7 business days" },
    { name: "Express", price: 12.99, estimatedDays: "2-3 business days" },
    { name: "Next Day", price: 19.99, estimatedDays: "Next business day" },
  ];
  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
//   const sample: CartItem = {
//     id: "121",
//     size: paperSizes[0],
//     orientation: orient,
//     frame: frame,
//     comments: "string",
//     price: 100,
//   };

  const items: CartItem[] = [];

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + selectedDelivery.price;

  if (items.length === 0) {
    return (
      <>
        <div className=" bg-white bg-opacity-50 min-h-screen flex items-center justify-center z-50 font-darkerGrotesque">
          <div className=" max-w-2xl w-full mx-4 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-black">Cart</h2>
            </div>
            <div className="text-center py-8">
              <p className="text-lg text-black">Your cart is still empty...</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center py-10 z-50 min-h-screen font-darkerGrotesque">
        <div className="bg-primary rounded-lg max-w-5xl w-full mx-4">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-black">Cart</h2>
            </div>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between border-b pb-4"
                >
                  <div>
                    <h3 className="font-medium text-black">
                      {item.size.name} Print - {item.orientation.name}
                    </h3>
                    <p className="text-sm text-black">
                      Frame: {item.frame.name}
                    </p>
                    {item.comments && (
                      <p className="text-sm text-black mt-1">
                        Comments: {item.comments}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-black">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      {<X className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 mb-6">
              <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                Delivery Options
              </h3>
              <div className="space-y-2">
                {deliveryOptions.map((option) => (
                  <label
                    key={option.name}
                    className="flex items-center justify-between p-3 bg-gray-100 rounded-lg cursor-pointer border transition-colors hover:border-blue-500"
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="delivery"
                        checked={selectedDelivery.name === option.name}
                        onChange={() => setSelectedDelivery(option)}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">{option.name}</div>
                        <div className="text-sm text-black">
                          {option.estimatedDays}
                        </div>
                      </div>
                    </div>
                    <span className="font-medium text-black">
                      ${option.price.toFixed(2)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-black">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-black">
                <span>Delivery</span>
                <span>${selectedDelivery.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg text-black font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              onClick={() => {
                // Handle checkout logic here
                alert("Checkout functionality coming soon!");
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
