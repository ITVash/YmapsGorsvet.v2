import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import classNames from 'classnames';

import './style.scss';

const AdminMenu = props => {
  const { editType } = props;
  const [ activeCoup, setActiveCoup ] = useState(false);
  const [ activeOpora, setActiveOpora ] = useState(false);
  return (
    <div className="menu">
      <div className="menu__items">
        <div className={ classNames("menu__items_coup", {'active': activeCoup }) } 
          onClick={ () => { editType('coup'); setActiveCoup(!activeCoup); setActiveOpora(false);}}>
          <img src="./img/coup_item.png" alt="ШУ"/>
        </div>
        <div className={ classNames("menu__items_opora", {'active': activeOpora }) } 
          onClick={ () => { editType('opora');  setActiveOpora(!activeOpora); setActiveCoup(false); }}>
          <img src="./img/opora_item.png" alt="Опора"/>
        </div>
        <div className="menu__items_exit" onClick={ () => {} }>
          <Link to={`/`} ><Icon type="double-left" style={{ fontSize: "30px", marginTop: "5px", marginLeft: "4px", color: "#FFF" }} /></Link>
        </div>
      </div>
    </div>
  )
}

export default AdminMenu
