// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Features1Img from "./assets/img/features-1.jpg";
import Features2Img from "./assets/img/features-2.jpg";
import ChairImg from "./assets/img/chair.png";
import BedImg from "./assets/img/bed.png";
import CupboardImg from "./assets/img/cupboard.png";
import LightingImg from "./assets/img/lighting.png";
import Product1Img from "./assets/img/products/product-1.png";
import Product2Img from "./assets/img/products/product-2.png";
import Product3Img from "./assets/img/products/product-3.png";
import Product4Img from "./assets/img/products/product-4.png";
import Product5Img from "./assets/img/products/product-5.png";
import Product6Img from "./assets/img/products/product-6.png";
import Product7Img from "./assets/img/products/product-7.png";
import Product8Img from "./assets/img/products/product-8.png";
import Product9Img from "./assets/img/products/product-9.png";
import Product10Img from "./assets/img/products/product-10.png";
import Product11Img from "./assets/img/products/product-11.png";
import Product14Img from "./assets/img/products/product-14.png";
import Product12Img from "./assets/img/products/product-12.png";
import Product13Img from "./assets/img/products/product-13.png";
import Product15Img from "./assets/img/products/product-15.png";
import Product16Img from "./assets/img/products/product-16.png";
import Product17Img from "./assets/img/products/product-17.png";
import Product18Img from "./assets/img/products/product-18.png";
import Product19Img from "./assets/img/products/product-19.png";
import Product20Img from "./assets/img/products/product-20.png";
import Product21Img from "./assets/img/products/product-21.png";
import Product22Img from "./assets/img/products/product-22.png";
import Product23Img from "./assets/img/products/product-23.png";
import Product24Img from "./assets/img/products/product-24.png";
import TestimonialImg from "./assets/img/testimonial.jpg";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";
import Avatar4Img from "./assets/img/avatar-4.png";

export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "products",
    href: "products",
  },
  {
    name: "contact",
    href: "contact",
  },
];

export const hero = {
  title: "Creative Home Simpify your Furniture",
  subtitle:
    "Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto",
  buttonText: "Shop Now",
};

export const stats = [
  {
    value: "7",
    text: "Year Experience",
  },
  {
    value: "2",
    text: "Opened in the country",
  },
  {
    value: "10k+",
    text: "Furniture sold",
  },
  {
    value: "260+",
    text: "Variant Furniture",
  },
];

export const features = {
  image: <Features1Img />,
  title: "We Create your home more aesthetic",
  subtitle:
    "Furniture power is a software as services for multipurpose business management system",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Valuation Services",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Development of Furniture Models",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "The Best Furniture Manufacturer of your choice",
    subtitle:
      "Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.",
  },
};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "chair",
      image: <ChairImg />,
    },
    {
      name: "bed",
      image: <BedImg />,
    },
    {
      name: "cupboard",
      image: <CupboardImg />,
    },
    {
      name: "lighting",
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: "All Products",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      productList: [
        {
          id: 1,
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          id: 2,
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          id: 3,
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          id: 4,
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          id: 5,
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          id: 6,
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          id: 7,
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          id: 8,
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
        {
          id: 9,
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          id: 10,
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          id: 23,
          image: <Product23Img />,
          icon: <IoMdAddCircle />,
          name: "Waterbed",
          price: 155,
          oldPrice: 162,
        },
        {
          id: 24,
          image: <Product24Img />,
          icon: <IoMdAddCircle />,
          name: "Bookcase Bed",
          price: 180,
          oldPrice: 192,
        },
      ],
    },
    {
      productList: [
        {
          id: 11,
          image: <Product11Img />,
          icon: <IoMdAddCircle />,
          name: "Round Chairs",
          price: 85,
          oldPrice: 92,
        },
        {
          id: 12,
          image: <Product12Img />,
          icon: <IoMdAddCircle />,
          name: "Desk Chairs",
          price: 62,
          oldPrice: 70,
        },
        {
          id: 13,
          image: <Product13Img />,
          icon: <IoMdAddCircle />,
          name: "Chesterfield Chair",
          price: 125,
          oldPrice: 115,
        },
        {
          id: 14,
          image: <Product14Img />,
          icon: <IoMdAddCircle />,
          name: "Panton Chair",
          price: 65,
          oldPrice: 86,
        },
        {
          id: 15,
          image: <Product15Img />,
          icon: <IoMdAddCircle />,
          name: "Calypso Door",
          price: 220,
          oldPrice: 224,
        },
        {
          id: 16,
          image: <Product16Img />,
          icon: <IoMdAddCircle />,
          name: "Hanging Bed",
          price: 48,
          oldPrice: 56,
        },
        {
          id: 19,
          image: <Product19Img />,
          icon: <IoMdAddCircle />,
          name: "Egg Chair",
          price: 95,
          oldPrice: 105,
        },
        {
          id: 20,
          image: <Product20Img />,
          icon: <IoMdAddCircle />,
          name: "Womb Chair",
          price: 84,
          oldPrice: 74,
        },
        {
          id: 17,
          image: <Product17Img />,
          icon: <IoMdAddCircle />,
          name: "Olympia 2 Door",
          price: 354,
          oldPrice: 325,
        },
        {
          id: 18,
          image: <Product18Img />,
          icon: <IoMdAddCircle />,
          name: "California King",
          price: 247,
          oldPrice: 253,
        },
        {
          id: 21,
          image: <Product21Img />,
          icon: <IoMdAddCircle />,
          name: "Wassily Chair",
          price: 54,
          oldPrice: 58,
        },
        {
          id: 22,
          image: <Product22Img />,
          icon: <IoMdAddCircle />,
          name: "Ghost Chair",
          price: 69,
          oldPrice: 74,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "What people are saying about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Brandi Johns",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar4Img />,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const newsletter = {
  title: "Get more discount Off your order",
  subtitle: "Join our mailing list",
  placeholder: "Your email address",
  buttonText: "Shop Now",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "FurniShop 2022 - All Rights Reserved.",
};
