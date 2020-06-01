import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';


const OrderOptionNumber = ({currentValue, setOptionValue, limits, price}) => (
  <div className={styles.number}>
    <input 
      className={styles.inputSmall} 
      type="number"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      min={limits.min}
      max={limits.max}
    /> ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  min: PropTypes.number,
  max: PropTypes.number,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;