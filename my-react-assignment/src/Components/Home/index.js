import {Component} from 'react'
import { LuUpload } from "react-icons/lu";
import Navbar from "../Navbar";
import Header from '../Header';
import './index.css'
import Products from '../Products';

const headerIconsList = [
    {
        id: 1,
        imgUrl:'https://res.cloudinary.com/dztitasim/image/upload/v1708068252/Group_475_fccc4e.png',
    },
    {
        id: 2,
        imgUrl:'https://res.cloudinary.com/dztitasim/image/upload/v1708068233/Group_307_u7zgas.png',
    },
    {
        id: 3,
        imgUrl:'https://res.cloudinary.com/dztitasim/image/upload/v1708068210/Group_300_yhkoxu.png',
    },
    {
        id: 4,
        imgUrl:'https://res.cloudinary.com/dztitasim/image/upload/v1708068196/Group_301_v4mtvu.png',
    },
    {
        id: 5,
        imgUrl:'https://res.cloudinary.com/dztitasim/image/upload/v1708068178/Group_302_ldcrik.png',
    },
    {
        id: 6,
        imgUrl:'https://res.cloudinary.com/dztitasim/image/upload/v1708068160/Group_303_baocuq.png',
    },
    {
        id: 7,
        imgUrl:'https://res.cloudinary.com/dztitasim/image/upload/v1708068129/Group_304_gm4udo.png',
    },
    {
        id: 8,
        imgUrl: 'https://res.cloudinary.com/dztitasim/image/upload/v1708068054/Group_305_av6cnk.png',
    },
]

class Home extends Component{

    render(){
        return(
            <>
            <Navbar/>
            <Header headerIconsList={headerIconsList}/>
            <div className='bag-details-container'>
                <ul className='bag-list-container'>
                    <li className='bag'>Bags</li>
                    <li className='backpack'>Backpacks</li>
                </ul>
                <div className='product-count-container'>
                    <p className='product'> 13 Products</p>
                    <LuUpload color="white"/>
                </div>
            </div>
            <Products/>
            </>
        )
    }
}

export default Home