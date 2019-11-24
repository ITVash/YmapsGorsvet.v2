import React from 'react';
import classNames from 'classnames';
import { Input } from 'antd';

import './style.scss';

const ItemText = ({ className, label, base, editBase, column, value }) => {
  return (
    <div className={classNames(`${className}__content_box-item`, 'textarea')}>
      <label htmlFor="">{ label }</label>
      <Input.TextArea rows={ 5 }
        value={ value } onChange={e => editBase({...base, [column] : e.target.value})} />
    </div>
  )
}

export default ItemText;
