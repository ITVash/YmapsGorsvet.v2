import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
//import { auth } from '../../api';
import './style.scss';

const Menu = () => {
  return (
    <>
      <div className="top-menu">
        <div className="top-menu__icon"
          onClick={ () => {
            const click = document.querySelector(".menu-box");
            click.classList.toggle("open")
          }}
        >
          <img src="./img/menu.png" alt="Menu"/>
        </div>
      </div>
      <div className="menu-box">
        <span className="menu-box__close" onClick={
          () => {
            const wind = document.querySelector(".menu-box");
            wind.classList.remove("open");
          }
        }><Icon type="close" /></span>
        <div className="menu-box__title">
          <h3>Администрирование</h3>
        </div>
        <div className="menu-box__item">
        <Link to="/admin" ><Button>Редактор объектов</Button></Link>
        </div>
        <div className="menu-box__item">
          <Button onClick={ () => {
            
            //auth.register(data);
          }}>Добавить пользователя</Button>
        </div>
        <div className="menu-box__item">
          <Button>Пользователи</Button>
        </div>
        <div className="menu-box__item">
          <Button>Отчеты</Button>
        </div>
      </div>
    </>
  )
}

export default Menu
