import { IoSearchOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import './index.css'

const Navbar = () =>(
        <div className="header-container">
            <div className="title-icons-container">
            <h1 className="title">TANN TRIM</h1>
            <ul className="list-container">
                <IoSearchOutline className="list-icons"/>
                <VscAccount className="list-icons"/>
                <FaRegBookmark className="list-icons"/>
                <IoBagOutline className="list-icons"/>
            </ul>
            </div>
            <div>
                <ul className="accessing-container">
                    <li className="names-list">Bag</li>
                    <li className="names-list"> Travel</li>
                    <li className="names-list">Accesories</li>
                    <li className="names-list">Gifting</li>
                    <li className="names-list">Jewelery</li>
                </ul>
            </div>
        </div>
)

export default Navbar