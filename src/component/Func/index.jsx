import React from 'react';
import classNames from 'classnames';
import { Button } from 'antd';

//import './style.scss';

const Func = ({ className, base, editBase, column, value, uppData, svet, uppSvet, access }) => {
  return (
    <><div className={classNames(`${className}__content_box-item`, 'but')}>
      <span className={value ? "but-item err" : "but-item"} 
        onClick={ () => {
          if (access && access >= 2)
            editBase({...base, [column] : !value})
        }}
      >{value ? "Не исправность" : "В работе"}</span>
    </div>
    <div className={classNames(`${className}__content_box-item`, 'full')}>
      <Button type="primary" block onClick={ () => {
        uppData(base);
        uppSvet && svet && uppSvet(svet);
        const wind = document.querySelector(`.${className}`);
        wind.classList.remove("open");
      }} >Сохранить</Button>
  </div></>
  )
}

export default Func;