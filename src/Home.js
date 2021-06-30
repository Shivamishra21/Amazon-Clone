import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  const background_images = [
    "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/June/1500PC._CB665246083_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/0-GV/Handpicked-store_1500x600._CB666418156_.jpg",
  ];

  const delay = 2500;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === background_images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="home">
      <div className="home__container">
        <div
          className="slideshowslider"
          style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
        >
          {background_images.map((item,i) => {
            return (
              <img
                className="home__image"
                key={i}
                src={item}
                alt="notfound"
              ></img>
            );
          })}
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538084"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
          id="54343422332"
          title="Small 20 L Laptop Backpack CLASSIC ANTI THEFT FAUX LEATHER  (Tan, Blue)"
          price={777.4}
          rating={4}
          image="https://rukminim1.flixcart.com/image/332/398/klv7ekw0/backpack/c/h/1/classic-anti-theft-faux-leather-lbpclslth0519-laptop-backpack-original-imagyw7cxcezvaa8.jpeg?q=50"/>
          <Product 
          id="34334423"
          title="Nike Men's Air Vapormax 2019 Running Shoes"
          price={8255.5}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61n77B9A7HL._UX695_.jpg"/>
          <Product 
          id="355454346"
          title="boAt Rockerz 550 Over-Ear Wireless Headphone with Ergonomic Aesthetics, Plush Padded Earcups, Immersive Audio, Bluetooth v5.0 & Upto 20H Playback (Black)"
          price={4545.20}
          rating={5}
          image="https://m.media-amazon.com/images/I/710XhG8bO3L._AC_UY327_FMwebp_QL65_.jpg"/>
          </div>
          <div className="home__row">
          <Product
          id="7959548945"
          title="Amazon Brand - Solimo Newport Fabric 2 Seater Settee Sofa (Brown)"
          price={8675.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51fmq7Rf42L.jpg"/>
          <Product
          id="79595489235"
          title="DeckUp Versa Engineered Wood Matte Finish Office Table and Study Desk ( Beige, Walnut )"
          price={865.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71ECtyY-qrL._SL1500_.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
