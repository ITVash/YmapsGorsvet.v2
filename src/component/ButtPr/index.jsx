import React from 'react';
import classNames from 'classnames';

//import './style.scss';

const ButtPr = ({ className, label, base, editBase, column, value }) => {
  return (
    <div className={classNames(`${className}__content_box-item`)}>
      <span onClick={() => {
        editBase({...base, [column] : !value});
      }} className={value ? "tr" : null}>{ label }</span>
    </div>
  )
}

export default ButtPr;
