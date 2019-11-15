import React, { useState, useEffect } from 'react'
import { Icon, Input, DatePicker, Button } from 'antd';
import moment from 'moment';
import { InfoBox } from '../../component';

import './style.scss';
const InfoOpora = props => {
  const area = {
    1: "Ворошиловский район",
    2: "Киевский район",
    3: "Калининский район",
    4: "Куйбышевский район",
    5: "Ленинский район",
    6: "Кировский район",
    7: "Петровский район",
    8: "Буденовский район",
    9:  "Пролетарский райое"
  };
  const dateFormat = 'DD.MM.YYYY';

  window.valuesOpora = props.items;
  window.editValuesOpora = props.editItems;
  const { items, editItems, uppOpora, onSelectCoup, svet } = props;
  const [ svets, setSvets ] = useState(svet);
  
  useEffect(() => {
    if ( svet.length )
      setSvets(svet);
  }, [ svet ]);
  const editSvet = (id, data) => {
    svets.find(item => {
      if (item.id === id) {
        return  Object.assign(item, data);
      }
      return item;
    });
  };
  console.log('svet', svets);
  //console.log('infoCoup', coup);
  return (
    <><div className="info-opora" tabIndex='0'>
      <span className="info-opora__close" onClick={
        () => {
          const wind = document.querySelector(".info-opora");
          wind.classList.remove("open");
        }
      }><Icon type="close" /></span>      
      <div className="info-opora__title">
        <h3>{ items.title }</h3>
        <span> <span className="link-coup" onClick={ () => {
            //setCoup(infoCoup);
            onSelectCoup(items.coupID);
            //const InfoOpora = document.querySelector('.info-opora');
            //const InfoO = document.querySelector('.info-box');
            //coup && InfoO.classList.add("open");
            //coup && InfoOpora.classList.remove("open");
          }}>{ items.coupTitle }</span> { area[items.areaID] }</span>
      </div>
      <div className="info-opora__content">
        {svets.map((item, id ) => (<div key={ id }>
          <center key={ id + 'title' }><h3>Светильник №{ id + 1 }</h3></center>
          <div className="info-opora__content_opora" >
            <div className="info-opora__content_opora-item">
              <label htmlFor="">Поставщик</label>
              <Input name="sugo" 
                value={item.postavchik_Svet} onChange={e => setSvets({...svets,postavchik_Svet : e.target.value})} />
            </div>
            <div className="info-opora__content_opora-item">
              <label htmlFor="">Светильник</label>
              <Input name="shetchik_name" 
                value={item.svetilnik } onChange={e => setSvets({...item, svetilnik : e.target.value})} />
            </div>
            <div className="info-opora__content_opora-item">
              <label htmlFor="">Дата установки</label>
              <DatePicker className='date' defaultValue={moment(item.date_Svet, dateFormat)} format={dateFormat}
                onChange={(date, newDate)=> {setSvets({...item, date_Svet : newDate})}} />
            </div>
            <div className="info-opora__content_opora-item">
              <label htmlFor="">Срок службы</label>
              <Input value={item.life_Time_Svet}
                onChange={ e => {setSvets({...item, life_Time_Svet : e.target.value})}} />
            </div>
          </div>
          <center><h3>Лампа №{ id + 1 }</h3></center>
          <div className="info-opora__content_opora">
            <div className="info-opora__content_opora-item">
              <label htmlFor="">Поставщик</label>
              <Input value={item.postavchik_Lamp}
                onChange={ e => {editItems({...items, postavchik_Lamp : e.target.value})}} />
            </div>
            <div className="info-opora__content_opora-item">
              <label htmlFor="">Лампа</label>
              <Input value={item.Lampa} 
                onChange={ e => {editItems({...items, Lampa : e.target.value})}} />
            </div>
            <div className="info-opora__content_opora-item">
              <label htmlFor="">Дата установки</label>
              <DatePicker className='date' defaultValue={moment(item.date_Lamp, dateFormat)} format={dateFormat}
                onChange={(date, newDate)=> {editItems({...items, date_Lamp : newDate})}} />
            </div>
            <div className="info-opora__content_opora-item">
              <label htmlFor="">Срок службы</label>
              <Input value={item.life_Time_Lamp}
                onChange={ e => {editItems({...items, life_Time_Lamp : e.target.value})}} />
            </div>
          </div>
        </div>))}
        <center><h3>Кронштейн</h3></center>
        <div className="info-opora__content_opora">
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Поставщик</label>
            <Input value={items.postavchik_breacket}
              onChange={ e => {editItems({...items, postavchik_breacket : e.target.value})}} />
          </div>
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Тип</label>
            <Input value={items.bracket} 
              onChange={ e => {editItems({...items, bracket : e.target.value})}} />
          </div>
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Дата установки</label>
            <DatePicker className='date' defaultValue={moment(items.date_breacket, dateFormat)} format={dateFormat}
              onChange={(date, newDate)=> {editItems({...items, date_breacket : newDate})}} />
          </div>
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Срок службы</label>
            <Input value={items.life_Time_breacket}
              onChange={ e => {editItems({...items, life_Time_breacket : e.target.value})}} />
          </div>
        </div>
        <center><h3>Кабельные линии</h3></center>
        <div className="info-opora__content_opora">
          <div className="info-opora__content_opora-item textarea">
            <Input value={items.line}
              onChange={ e => {editItems({...items, line : e.target.value})}} />
          </div>
          <div className="info-opora__content_opora-item textarea">
            <label htmlFor="">Примечание</label>
            <Input.TextArea value={items.note}
              rows={ 5 }
              //autosize={{ minRows: 3, maxRows: 5 }}
              onChange={ e => {editItems({...items, note : e.target.value})}} />
          </div>
        </div>
        <center><h3>Состояние</h3></center>
        <div className="info-opora__content_opora">
          <div className="info-opora__content_opora-item but">
            <span className={items.func === 1 ? "but-item err" : "but-item"} 
              onClick={ () => {editItems({...items, func : items.func === 1 ? 0 : 1})}}
            >{items.func === 1 ? "Не исправность" : "В работе"}</span>
          </div>
          <div className="info-opora__content_opora-item full">
            <Button type="primary" block onClick={ () => {
              uppOpora(items);
              //editItems({});
              const wind = document.querySelector(".info-opora");
              wind.classList.remove("open");
            }}>Сохранить</Button>
          </div>
        </div>
      </div>
    </div>
    {/*coup && (<InfoBox items={ coup } editItems={ setCoup } uppCoup={ uppCoup } />) */}</>
  )
}

export default InfoOpora
