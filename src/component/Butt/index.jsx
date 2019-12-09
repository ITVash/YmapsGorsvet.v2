import React from 'react';
import classNames from 'classnames';

//import './style.scss';

const Butt = ({ className, label, base, editBase, column, value, butt, full, text, access }) => {
  return (
    <div className={classNames(`${className}__content_box-item`, {'full':full})}>
      <label htmlFor="">{ label }</label>
      <span className={ classNames(!butt && {'tr': value}, butt && {'but-item': butt}, butt && {'err': !value }) }
        onClick={ () => {
          if (access && access >= 4)
            editBase({...base, [column] : !value})
        }}
      >{value ? (text && text[0] || "Есть") : (text && text[1] || "Нет")}</span>
    </div>
  )
}

export default Butt;
