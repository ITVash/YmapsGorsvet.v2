import React from 'react';
import classNames from 'classnames';

//import './style.scss';

const Butt = ({ className, label, base, editBase, column, value }) => {
  return (
    <div className={classNames(`${className}__content_box-item`)}>
      <label htmlFor="">{ label }</label>
      <span className={value ? "tr" : null}
        onClick={ () => {editBase({...base, [column] : !value})}}
      >{value ? "Есть" : "Нет"}</span>
    </div>
  )
}

export default Butt;
