import React from "react";
import "./Navbar.css"
import logoImg from "../../assets/images/navImageIcon.png"

// import {AiTwotoneSetting} from 'react-icons'
import {AiTwotoneSetting} from "react-icons/ai"
import {TbWorld} from "react-icons/tb"
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);
    const [hoveredLink, setHoveredLink] = React.useState('');

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef, setDropdownOpen]);

    return (
        <>
        <nav>
            <div className="logoItems">
                <img src={logoImg} alt="" />
                <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Trade")}}>
                    <Link to="">
                        Trade
                    </Link>
                </div>
                <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Earn")}}>
                    <Link to="">
                        Earn
                    </Link>
                </div>
                <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Defi")}}>
                    <Link to="">
                        Defi
                    </Link>
                </div>
                <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Launch")}}>
                    <Link to="">
                        Launch
                    </Link>
                </div>
                <div className="navLink" onMouseEnter={() => {setDropdownOpen(true); setHoveredLink("Games")}}>
                    <Link to="">
                        Games
                    </Link>
                </div>
                
            </div>
            <div>
                <ul id="navbar">
                    
                    <li>
                        <a className="navIcons world" href=""><TbWorld/></a>
                    </li>
                    <li>
                        <a className="navIcons settings" href=""><AiTwotoneSetting/></a>
                    </li>
                    <li>
                        <a className="navText" href="">connect to wallet</a>
                    </li>
                </ul>
            </div>
        <Dropdown ref={dropdownRef} open={dropdownOpen} setOpen={setDropdownOpen} hoveredLink={hoveredLink}/>

    
        </nav>
        </>
    )
}

export default Navbar