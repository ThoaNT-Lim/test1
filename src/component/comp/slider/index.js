import React, {useState, useEffect} from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../../../asset/styles/slider.scss";
import { Slider } from 'antd';

import Up from "../../../asset/images/up.png";
import Down from '../../../asset/images/down.png';
import Product1 from '../../../asset/images/slide.png';
import Product2 from '../../../asset/images/slide.png';
import Product3 from '../../../asset/images/slide.png';
import Product4 from '../../../asset/images/slide.png';
import Product5 from '../../../asset/images/slide.png';
import Product from '../../../asset/images/product1.png';


const Slideshow = () => {
    const fadeImages = [Product1,Product2, Product3, Product4, Product5 ];
    const fadeImageRight = [Product,Product, Product, Product, Product ];
    
    return (
        <div className="product">
        <div className="left">
            <img className="up" src={Up} alt="up"/>
            <div className="slide-left" >
                <img src={fadeImages[0] } alt="0"/>
                </div>
            <div className="slide-left">
                <img src={fadeImages[1] } alt="1"/>
            </div>
            <div className="slide-left">
                <img src={fadeImages[2] } alt="2"/>
            </div>
            <div className="slide-left">
                <img src={fadeImages[3] } alt="3"/>
            </div>
            <div className="slide-left">
                <img src={fadeImages[4] } alt="4" />
            </div>
            <img src={Down} className="down" alt="down" />
        </div>
        <div className="right">
            <div className="slide-right ">
                <img src={fadeImageRight[0] } alt="0"/>
            </div>
            <div className="slide-right">
                <img src={fadeImageRight[1] } alt="1"/>
            </div>
            <div className="slide-right">
                <img src={fadeImageRight[2] } alt="2"/>
            </div>
            <div className="slide-right">
                <img src={fadeImageRight[3] } alt="3"/>
            </div>
            <div className="slide-right">
                <img src={fadeImageRight[4] } alt="4"/>
            </div>
        </div>
        <script src="./slick.js"></script>
        </div>

        
    )
}

export default Slideshow;