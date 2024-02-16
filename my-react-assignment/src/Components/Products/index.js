import { Component } from "react";
import ProductCard from "../ProductCard";
import "./index.css";

class Products extends Component {
  state = {
    productsData: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await fetch("/db.json");
    console.log(response)
    const data = await response.json();
    console.log(data);
    const updatedData = data.map(eachItem =>({
        id: eachItem.id,
        actualPrice: eachItem.acutal_price,
        imgUrl: eachItem.img_url,
        presentPrice: eachItem.present_price,
    }))
    this.setState({productsData: updatedData})
  };

  render() {
    const {productsData} = this.state

    return (
      <ul className="products-container">
        {productsData.map(eachData =>(
            <ProductCard key={eachData.id} productDetails={eachData}/>
        ))}
      </ul>
    );
  }
}

export default Products;
