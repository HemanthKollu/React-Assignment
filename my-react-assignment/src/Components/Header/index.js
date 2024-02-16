import { Component } from 'react'
import './index.css'


class Header extends Component {
    render() {
    const { headerIconsList } = this.props;

    return (
        <ul className='header-icons-container'>
        {headerIconsList.map(icon => (
            <li key={icon.id}>
            <img src={icon.imgUrl} className='header-icons' alt="icons" />
            </li>
        ))}
        </ul>
    );
    }
}


export default Header