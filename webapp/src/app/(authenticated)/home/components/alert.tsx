import React from 'react';
import './alert.css';
import {variants} from './alert_variants';
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";

// to be deleted - fake data
import productAnalytics1 from './product_analytics_1.json'
import productAnalytics2 from './product_analytics_2.json'
import productAnalytics3 from './product_analytics_3.json'

const alertVariantsBySymbol: Record<string, variants> = {};
variants.forEach(variant => {
    alertVariantsBySymbol[variant.symbol] = variant;
}); // 'red', 'yellow', 'green'

const Alert: React.FC = ({ranking}) => {

  const fetchAlertColour = (ranking) => {
    //red - 0-10, 90-100
    //yellow - 10-25, 75-90
    //green - 25-75
    if (ranking <= 0.1 || ranking >= 0.9){
        return 'red';
    } else if (ranking > 0.25 && ranking < 0.75){
        return 'green';
    } else {
        return 'yellow';
    }
  }
  
  const variant = alertVariantsBySymbol[fetchAlertColour(ranking)];
  return (

    <div className='alert-container'>
      {/* style={{ background: variant.secondaryColor }}  */}
      <div className='alert-icon'>
      {variant.symbol === 'yellow' && (
        <IoWarningOutline size={50} color={variant.secondaryColor} />
      )}
      {variant.symbol === 'green' && (
        <AiOutlineSafety size={50} color={variant.secondaryColor} />
      )}
      {variant.symbol === 'red' && (
        <MdOutlineDangerous size={50} color={variant.secondaryColor} />
      )}
      </div>
      <div className='alert-text' 
      style={{color: variant.secondaryColor}}>
        {variant.title}
      </div>
    </div>
  );
};

export default Alert;
