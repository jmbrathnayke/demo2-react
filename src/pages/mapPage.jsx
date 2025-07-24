import React from 'react'
import HeaderContext from '../components/HeaderContext/HeaderContext'

 function mapPage() {
 //items is an array of strings
// It contains a list of items that will be displayed on the page
 let items = ["item1", "item2", "item3", "item4", "item5"];


//products is an array of product objects
// Each product object contains details like id, title, price, description, category, image,
 let products =[
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  }
 ]

  return (
    <>
    <HeaderContext/>
    <h3>Map Page Content</h3>
    <ul>
      {items.map((item) => (
           <li key={item}>from map method {item}</li>
      ))}
      <br/>
      

        {/* Example of using forEach method (but not show result,because it doesn't return new array (anything) */}
      {/*}
      {items.forEach((item) => (
           <li>{item}</li>
      ))}
    */}
    </ul>

    <p>Map method is used to iterate over an array and return a <b style={{ color: 'blue' }}>new array</b> with the results of calling a provided function on every element in the array.</p>
    <p>ForEach method is used to execute a provided function once for each array element, but it <b style={{ color: 'red' }}>does not return a new array</b>.</p>
    <br/>

    {/* Example of using map method to iterate over products array and display product details */}
    <h3>Products</h3>
    <ul>
        {products.map((product) => (
        <li style={{marginBottom: "2em"}} key={product.id}>{product.title} 
        <img style={{ width: '50px', height: '50px',display:"block" }} 
        src={product.image} alt={product.description} /> <span>Price: {product.price}</span>
        <span style={{marginLeft: "1em"}}>Rating: {product.rating.rate}</span>
        </li>
      ))}
    </ul>
    </>
  )
}
export default mapPage;