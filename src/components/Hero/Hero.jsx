import React, {useState} from "react";
import heroBackImg from "../../assets/images/hero_back.png"
import Toggle from "../Toggle/Toggle";
import Input from "../Input/Input";
import Collapsible from "../Collapsible/Collapsible";
import "./Hero.css"

const Hero = () => {
    // State to track which label is currently selected
    const [selectedLabel, setSelectedLabel] = useState('live');
    return (
        <>
        <div className="hero"
        style={{backgroundImage: `url(${heroBackImg})`,
         
        }}>
            <div className="heroBody">
                <div className="heroHeading flex mb2">
                    <h1 className="textHeading1">
                        Farms v2
                    </h1>    
                </div>
                <div className="heroHeading2 flex">
                    <h2 className="textHeading2">
                    Stake LP tokens to earn.
                    </h2>
                </div>
                <div className="heroItemsMany flex">
                    <div className="heroItemsLeft flex">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd nVICa"><path d="M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z"></path></svg>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd ezJoGw"><path d="M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z"></path></svg>
                        <Toggle id="toggle1"/>
                        <span>Staked only</span>
                        <div className="liveFinished">
                    <span 
                        className={`live round ${selectedLabel === 'live' ? 'selected' : ''}`}
                        onClick={() => setSelectedLabel('live')}>
                        Live
                    </span>
                    <span 
                        className={`finished round ${selectedLabel === 'finished' ? 'selected' : ''}`}
                        onClick={() => setSelectedLabel('finished')}>
                        Finished
                    </span>
                </div>
                    </div>
                    <div className="heroItemsRight flex">  
                        <div id="sort">
                            <Collapsible 
                            headerContent={
                                <div className="flex rightH1">
                                    <div className="flex rightH2">
                                        <span className="spanSort ">Sort by: </span>
                                        <span className="spanSortBy">Multiplier</span>
                                    </div>                                    
                                    <span>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="sc-iCoGMd iZDSCZ"><path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path></svg>
                                    </span>
                                </div>
                            } 
                            
                            absolutePosition={true}
                            bordered={true}
                            >
                                <ul className="sortUl">
                                    <li>Hot</li>
                                    <li>APR</li>
                                    <li>Earned</li>
                                    <li>Liquidity</li>
                                </ul>
                            </Collapsible>
                        </div>  
                        <div id="inputHero">
                            <Input placeholder="Search Farms"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero