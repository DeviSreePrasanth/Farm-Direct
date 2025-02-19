import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import hero from '../images/hero3.png'
import Middle from '../components/Middle'
import Features from './Features'
import Footer from './Footer';

const Products = () => {
  const [products] = useState([
    { name: 'Apple', image: require('../images/apple.jpg'), price: "40", quantity: "500gms", desc: "Indulge in the sweet, refreshing taste of our Crisp & Juicy Apples! Handpicked from the finest orchards, these apples are perfect for a healthy snack or a delightful addition to your favorite recipes. With their vibrant red skin, firm texture, and juicy flesh, our apples provide the perfect balance of sweetness and tartness." },
    { name: 'Banana', image: require('../images/banana.jpg'), price: "30", quantity: "500gms", desc: "Experience the natural sweetness and rich flavor of our Ripe & Sweet Bananas! Sourced from premium banana farms, these bananas are known for their creamy texture and delightful taste. Perfect for a quick snack, adding to smoothies, or incorporating into baked goods, our bananas are a versatile and nutritious choice for any diet." },
    { name: 'Beans', image: require('../images/beans.jpg'), price: "40", quantity: "500gms", desc: "Elevate your meals with our Fresh Green Beans! Hand-harvested at the peak of their freshness, these green beans are known for their crisp texture and vibrant flavor. Perfect for side dishes, stir-fries, or salads, they add a healthy crunch and a burst of green to your plate." },
    { name: 'Bottle gaurd', image: require('../images/bottle gaurd.jpg'), price: "40", quantity: "500gms", desc: "Discover the versatile and nutritious Fresh Bottle Gourd! Known for its light flavor and high water content, bottle gourd is a staple in many cuisines. Perfect for making soups, curries, or refreshing drinks, this gourd is both healthy and delicious. Grown organically, it offers a crisp texture and mild taste, enhancing any dish with its natural goodness." },
    { name: 'Brinjal', image: require('../images/brinjal.jpg'), price: "50", quantity: "500gms", desc: "Enhance your culinary creations with our Fresh Brinjal (Eggplant)! Known for its rich, savory flavor and versatile use, brinjal adds a unique touch to various dishes. Whether you're preparing a hearty curry, grilling for a smoky flavor, or baking for a delicious side, our brinjal is fresh, high-quality, and ready to elevate your meals." },
    { name: 'Cauliflower', image: require('../images/cauliflower.jpg'), price: "20", quantity: "500gms", desc: "Discover the delightful versatility of our Fresh Cauliflower! With its mild, nutty flavor and tender texture, cauliflower is a nutritious and adaptable vegetable perfect for a wide range of dishes. Whether you're making a comforting soup, a crisp salad, or a savory curry, our cauliflower is fresh and ready to enhance your meals with its wholesome goodness." },
    { name: 'Capsicum', image: require('../images/capsicum.jpg'), price: "80", quantity: "500gms", desc: "Add vibrant color and crunch to your dishes with our Fresh Capsicum (Bell Pepper)! Known for its sweet, slightly tangy flavor and crisp texture, capsicum is a versatile vegetable that enhances a variety of meals. Perfect for salads, stir-fries, or as a flavorful topping, our capsicum is fresh and ready to elevate your cooking." },
    { name: 'Corn', image: require('../images/corn.jpg'), price: "40", quantity: "500gms", desc: "Enjoy the sweet, juicy flavor of our Fresh Corn on the Cob! Perfectly harvested for optimal sweetness and tenderness, this corn is a versatile ingredient for many dishes. Whether you're grilling, boiling, or adding to salads and soups, our corn adds a delicious crunch and natural sweetness to your meals." },
    { name: 'Cucumber', image: require('../images/cucumber.jpg'), price: "60", quantity: "500gms", desc: "Stay refreshed with our Fresh Cucumber! Known for its crisp texture and mild flavor, cucumber is a versatile vegetable that adds a delightful crunch to your dishes. Ideal for salads, sandwiches, or simply enjoyed on its own, this cucumber is harvested for maximum freshness and flavor." },
    { name: 'Grapes', image: require('../images/grapes.jpg'), price: "60", quantity: "500gms", desc: "Experience the juicy sweetness of our Fresh Grapes! Handpicked for peak ripeness, these grapes are perfect for snacking, adding to salads, or enjoying in desserts. With their vibrant color and delightful flavor, our grapes are a refreshing and healthy treat for any occasion." },
    { name: 'Mangos', image: require('../images/mangos.jpg'), price: "100", quantity: "500gms", desc: "Indulge in the tropical sweetness of our Fresh Mangoes! Carefully selected for their rich, juicy flavor and vibrant color, these mangoes are a perfect treat for any fruit lover. Whether enjoyed fresh, blended into smoothies, or used in desserts, our mangoes bring a touch of sunshine to your table." },
    { name: 'Onions', image: require('../images/onions.jpg'), price: "20", quantity: "500gms", desc: "Enhance your culinary creations with our Fresh Onions! Known for their aromatic flavor and versatility, onions are a staple in kitchens worldwide. Whether you're sautéing, caramelizing, or using them raw, our onions add depth and richness to any dish." },
    // { name: 'Orange', image: require('../images/orange.jpg'), price: "70", quantity: "500gms", desc: "Brighten up your day with our Fresh Oranges! Bursting with juicy sweetness and a zesty flavor, these oranges are perfect for a refreshing snack or a splash of citrus in your recipes. Handpicked for optimal ripeness, our oranges offer a delightful taste of sunshine in every bite." },
    // { name: 'Pineapple', image: require('../images/pineapple.jpg'), price: "120", quantity: "500gms", desc: "Delight in the tropical sweetness of our Fresh Pineapples! Each pineapple is meticulously selected for its vibrant color and juicy, succulent flesh. Perfect for snacking, adding to smoothies, or incorporating into your favorite dishes, our pineapples bring a taste of the tropics right to your table." },
    // { name: 'Pomegranate', image: require('../images/pomegranate.jpg'), price: "70", quantity: "500gms", desc: "Enjoy the burst of flavor with our Fresh Pomegranates! Each pomegranate is packed with juicy, ruby-red seeds that are both sweet and tangy. Ideal for snacking, adding to salads, or using in cooking, our pomegranates offer a delightful and nutritious treat." },
    // { name: 'Radish', image: require('../images/radish.jpg'), price: "30", quantity: "500gms", desc: "Add a crisp, peppery kick to your meals with our Fresh Radishes! Known for their vibrant color and refreshing crunch, radishes are perfect for salads, sandwiches, and garnishes. Each radish is fresh, crisp, and packed with flavor." },
    // { name: 'Tomato', image: require('../images/tomato.jpg'), price: "30", quantity: "500gms", desc: "Enhance your dishes with the vibrant flavor of our Fresh Tomatoes! Each tomato is juicy and flavorful, making it a versatile ingredient for cooking or fresh eating. Perfect for salads, sauces, and more, our tomatoes add a touch of freshness to every meal." },
    // { name: 'Carrot', image: require('../images/carrot.jpg'), price: "30", quantity: "500gms", desc: "Add a vibrant touch to your meals with our Fresh Organic Carrots! Grown naturally without the use of synthetic pesticides or fertilizers, these carrots are rich in flavor, crunchy in texture, and packed with essential nutrients. Each batch is handpicked to ensure the highest quality, delivering a wholesome and nutritious addition to your diet." }
  ]);
  const navigate = useNavigate();


  const handleImageClick = (imagePath, productname, productprice, productdesc) => {

    navigate('/buy', { state: { imagePath, productname, productprice, productdesc } });
  };

  return (
    <>
      <Link to='/shop'><img src={hero} alt="" className='h-max w-screen' /><br /></Link>
      <h1 className=' text-center text-4xl font-semibold'>Discover or premium range and enojoy our</h1>
      <h1 className=' text-center text-4xl font-semibold'>true taste</h1>
      <div className="flex flex-wrap justify-center lg:gap-5 sm:gap-5 md:gap-5 gap-2 pt-4 md:mr-5 sm:ml-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="bg-white h-[350px] p-5 shadow-2xl rounded-lg w-[180px] mb-4 sm:w-[180px] sm:h-[380px] md:w-[200px] md:h-[380px] lg:w-[220px] lg:h-[380px]]"

            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 bg-white object-cover cursor-pointer"
                onClick={() => handleImageClick(product.image, product.name, product.price, product.desc)}
              />
              <div className="text-black mt-2 font-serif">{product.name}</div>
              <div className="flex gap-1 mt-2 items-center">
                <div className="text-black font-semibold">Rs.{product.price}</div>
                <div className="text-gray-600">/{product.quantity}</div>
                <button className="bg-teal-700 text-white text-center p-2 h-11 w-20 px-6 relative top-14 right-24 rounded-md " onClick={() => handleImageClick(product.image, product.name, product.price, product.desc)} >Buy</button>
              </div>
            </div>
          </div>
        ))}

        <p
          style={{
            backgroundImage: 'url("https://vaaradhifarms.com/cdn/shop/files/midjourneyexpert_white_indian_desi_cow_standing_next_to_a_small_26e9dd34-2704-41bc-8611-96d3fc2fd338.png?v=1690866620&width=1400")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '400px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '20px'
          }}
          className='text-white text-4xl'
        >
          We Are The One-stop Destination For A Wide Range Of Organic And Naturally Grown Foods
        </p><br />


      </div>
     
      <Features/>
      <div className='bg-amber-500 lg:p-20 md:p-16 sm:p-12 p-8 pt-16 pb-16'>
        <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white'>
          Advantages Of Organic Farming
        </p>
        <br />
        <p className='text-base md:text-lg lg:text-2xl font-semibold text-center text-white'>
          Key Benefits of Organic Farming
        </p>
        <br />
        <p className='text-sm md:text-base lg:text-lg text-teal-800 font-serif text-center'>
          Organic farming offers significant advantages by reducing chemical use,
          enhancing soil health, and promoting biodiversity. It supports environmental
          sustainability through practices that minimize pollution and lower carbon
          footprints while fostering humane animal welfare. Additionally, organic
          produce often has fewer pesticide residues and may provide superior nutritional benefits.
          This approach not only benefits the ecosystem but also supports local economies and meets
          the growing consumer demand for healthier, more natural food options.
        </p>
      </div>
      <br />
      <Middle/><br/>

      <p className='text-center font-bold text-teal-800 relative lg:text-9xl md:text-8xl sd:text-7xl text-6xl'>
        100% Pure
        <span className='absolute inset-x-0 bottom-0 h-1/2 opacity-50 bg-white'></span>
      </p>
      <br />
      <p className='text-center font-bold text-teal-800 
  text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl'>
        Our Products Are Free From Chemicals And Additives
      </p>
       <Footer/>
    </>
  );
};

export default Products; 