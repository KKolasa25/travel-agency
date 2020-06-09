import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';



const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => (
  <div className={styles.icon}> 
    {!required ? '' : (
      <div 
        className={currentValue == '' ? `${styles.icon} ${styles.iconActive}` : styles.icon} 
        onClick={() => setOptionValue('')} 
        value=""
      >
        <Icon name='times-circle' /> None
      </div>
    )}

    {values.map(value => (
      <div 
        className={value.id == currentValue ? `${styles.icon} ${styles.iconActive}` : styles.icon}
        value={value.id} 
        key={value.id}  
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} /> 
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  formatPrice: PropTypes.func,
};

export default OrderOptionIcons;

