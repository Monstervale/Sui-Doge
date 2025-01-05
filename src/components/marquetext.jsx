import React from 'react'
import "./style.css";

const Marquetext = () => {
    return (
        <>
            <div className="main-container">
                {/* Scrolling Wrapper */}
                <div className="scrolling-wrapper">
                    {/* Repeated Content to ensure seamless scrolling */}
                    {[...Array(2)].map((_, index) => (
                        <div key={index} className="content-loop">
                            {[...Array(10)].map((_, innerIndex) => (
                                <div key={innerIndex} className="item-wrapper">
                                    {/* Circle */}
                                    <div className="circle"> </div>

                                    {/* Sui DOGE Text */}
                                    <div className="text-wrapper">
                                        <span>Sui DOGE</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Marquetext;