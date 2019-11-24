import React from 'react';
import classNames from 'classnames';
import { Input } from 'antd';

import './style.scss';

const InputItem = ({ className, label, base, editBase, column, value, full }) => {
  return (
    <div className={classNames(`${className}__content_box-item`, {'textarea' : full})}>
      <label htmlFor="">{ label }</label>
      <Input name="sugo" 
        value={ value } onChange={e => editBase({...base, [column] : e.target.value})} />
    </div>
  )
}

export default InputItem;
