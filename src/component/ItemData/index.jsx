import React from 'react';
import classNames from 'classnames';
import { DatePicker } from 'antd';
import moment from 'moment';

import './style.scss';

const ItemData = ({ className, label, base, editBase, column, value }) => {
  const dateFormat = 'DD.MM.YYYY';
  return (
    <div className={classNames(`${className}__content_box-item`)}>
      <label htmlFor="">{ label }</label>
      <DatePicker className='date' defaultValue={moment(value, dateFormat)} format={dateFormat}
        onChange={(date, newDate)=> {editBase({...base, column : newDate})}} />
    </div>
  )
}

export default ItemData;
