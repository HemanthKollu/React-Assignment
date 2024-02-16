import { CiBookmark } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import "./index.css";

// const productsList = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
// ];

const ProductCard = props => {
  const {productDetails} = props
  const {imgUrl, actualPrice, presentPrice} = productDetails

  return(
    <div className="product-card-container">
    <div className="image-container">
      <img
        src={imgUrl}
        className="product-img"
        alt="product"
      />
      <div className="icon-container">
        <CiBookmark className="bookmark-icon" />
      </div>
    </div>
    <div className="details-container">
      <h4 className="product-name">The Brown Metro Movers</h4>
      <div className="price-container">
        <div className="price-discount-container">
          <MdCurrencyRupee color="white" size="25" />
          <p className="present-price">{presentPrice}</p>
          <p className="actual-price">{actualPrice}</p>
          <p className="discount">(50% Off)</p>
        </div>
        <IoBagAddOutline color="white" size="40" />
      </div>
    </div>
  </div>
  )
  
};

export default ProductCard;
