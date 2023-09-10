import React, {useState} from "react";
import "./Dropdown.css"
const Dropdown = React.forwardRef((props, ref) => {
    const { open, setOpen } = props;
    console.log(props.hoveredLink)
    return (
        <>
        
        <div ref={ref} className={`dropdownMenu ${open ? 'active': 'inactive'}`}>
            <ul>
                
    {props.hoveredLink === "Trade" && (
        <>
            <li>Exchange</li>
            <li>Liquidity</li>
            <li>Limit Order</li>
            <li>Stable Swap</li>
        </>
    )}
    {props.hoveredLink === "Earn" && (
        <>
            <li>Farms V2</li>
            <li>Farms</li>
            <li>Pools V2</li>
            <li>Pools</li>
            <li>veMMF</li>
            <li>Liquidity Governance</li>
            <li></li>
        </>
    )}
    {props.hoveredLink === "Defi" && (
        <>
            <li>MadMex</li>
            <li>MEFT</li>
            <li>Savanna</li>
            <li>MMF Money (MUSD)</li>
            <li>Hakuna Matata</li>
        </>
    )}
    {props.hoveredLink === "Launch" && (
        <>
            <li>Launchpad</li>
            <li>Madbox</li>    
        </>
    )}
   
    
            </ul>
        </div>
        </>
    )
});

export default Dropdown