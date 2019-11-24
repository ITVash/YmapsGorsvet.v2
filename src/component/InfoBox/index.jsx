import React from 'react'
import { Icon, Input, DatePicker, Button } from 'antd';
import moment from 'moment';

import './style.scss';
const InfoBox = (props) => {
  const area = {
    1: "Ворошиловский район",
    2: "Киевский район",
    3: "Калининский район",
    4: "Куйбышевский район",
    5: "Ленинский район",
    6: "Кировский район",
    7: "Петровский район",
    8: "Буденовский район",
    9: "Пролетарский райое"
  };
  const dateFormat = 'DD.MM.YYYY';
  window.valuesCoup = props.items;
  window.editValuesCoup = props.editItems;
  const { items, uppCoup, editItems } = props;
  return (
    <div className="info-box">
      <span className="info-box__close" onClick={
        () => {
          const wind = document.querySelector(".info-box");
          wind.classList.remove("open");
        }
      }><Icon type="close" /></span>
      <div className="info-box__title">
        <h3>{ items.title }</h3>
        <span>{ area[items.areaID] }</span>
      </div>
      <div className="info-box__content">
        <center><h3>Комплектация</h3></center>
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Вкл. Устройство</label>
            <Input name="sugo" 
              value={items.sugo} onChange={e => editItems({...items, sugo : e.target.value})} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Счетчик</label>
            <Input name="shetchik_name" 
              value={items.shetchik_name } onChange={e => editItems({...items, shetchik_name : e.target.value})} />
          </div>
        </div>
        <div className="info-box__content_sugo kont">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">К1</label>
            <span className={items.kontaktor1 ? "tr" : null}
              onClick={ () => {editItems({...items, kontaktor1 : !items.kontaktor1})}}
            >{items.kontaktor1 ? "Есть" : "Нет"}</span>
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">К2</label>
            <span className={items.kontaktor2 ? "tr" : null}
              onClick={ () => {editItems({...items, kontaktor2 : !items.kontaktor2})}}
            >{items.kontaktor2 ? "Есть" : "Нет"}</span>
          </div>
        </div>
        <center><h4>Предохранители</h4></center>
        <div className="info-box__content_sugo pr">
          <div className="info-box__content_sugo-item"><span onClick={() => {
            editItems({...items, breac1 : !items.breac1}); return console.log('Первая кнопка', items.breac1)
          }} className={items.breac1 ? "tr" : null}>1</span></div>
          <div className="info-box__content_sugo-item"><span onClick={() => {
            editItems({...items, breac2 : !items.breac2}); return console.log('Вторая кнопка', items.breac2)
          }} className={items.breac2 ? "tr" : null}>2</span></div>
          <div className="info-box__content_sugo-item"><span onClick={() => {
            editItems({...items, breac3 : !items.breac3})
          }} className={items.breac3 ? "tr" : null}>3</span></div>
          <div className="info-box__content_sugo-item"><span onClick={() => {
            editItems({...items, breac4 : !items.breac4})
          }} className={items.breac4 ? "tr" : null}>4</span></div>
          <div className="info-box__content_sugo-item"><span onClick={() => {
            editItems({...items, breac5 : !items.breac5})
          }} className={items.breac5 ? "tr" : null}>5</span></div>
          <div className="info-box__content_sugo-item"><span onClick={() => {
            editItems({...items, breac6 : !items.breac6})
          }} className={items.breac6 ? "tr" : null}>6</span></div>
          <div className="info-box__content_sugo-item"><span onClick={() => {
            editItems({...items, breac7 : !items.breac7})
          }} className={items.breac7 ? "tr" : null}>7</span></div>
          <div className="info-box__content_sugo-item"><span onClick={() => {
            editItems({...items, breac8 : !items.breac8})
          }} className={items.breac8 ? "tr" : null}>8</span></div>
          <div className="info-box__content_sugo-item"><span onClick={() => {
            editItems({...items, breac9 : !items.breac9})
          }} className={items.breac9 ? "tr" : null}>9</span></div>
        </div>
        <center><h3>K1</h3></center>
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Поставщик</label>
            <Input value={items.postavchik_K1}
              onChange={ e => {editItems({...items, postavchik_K1 : e.target.value})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Тип</label>
            <Input value={items.kontaktor1_name} 
              onChange={ e => {editItems({...items, kontaktor1_name : e.target.value})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Дата установки</label>
            <DatePicker className='date' defaultValue={moment(items.date_K1, dateFormat)} format={dateFormat}
              onChange={(date, newDate)=> {editItems({...items, date_K1 : newDate})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Срок службы</label>
            <Input value={items.life_Time_k1}
              onChange={ e => {editItems({...items, life_Time_k1 : e.target.value})}} />
          </div>
        </div>
        <center><h3>K2</h3></center>
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Поставщик</label>
            <Input value={items.postavchik_K2}
              onChange={ e => {editItems({...items, postavchik_K2 : e.target.value})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Тип</label>
            <Input value={items.kontaktor2_name}
              onChange={ e => {editItems({...items, kontaktor2_name : e.target.value})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Дата установки</label>
            <DatePicker className='date' defaultValue={moment(items.date_K2, dateFormat)} format={dateFormat}
              onChange={(date, newDate)=> {editItems({...items, date_K2 : newDate})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Срок службы</label>
            <Input value={items.life_Time_k2}
              onChange={ e => {editItems({...items, life_Time_k2 : e.target.value})}} />
          </div>
        </div>
        <center><h3>Счетчик</h3></center>
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Поставщик</label>
            <Input value={items.postavchik_Shethika}
              onChange={ e => {editItems({...items, postavchik_Shethika : e.target.value})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Тип</label>
            <Input value={items.shetchik_name}
              onChange={ e => {editItems({...items, shetchik_name : e.target.value})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Дата установки</label>
            <DatePicker className='date' defaultValue={moment(items.date_Shetchika, dateFormat)} format={dateFormat}
              onChange={(date, newDate)=> {editItems({...items, date_Shetchika : newDate})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Срок службы</label>
            <Input value={items.life_Time_Shethcika} 
              onChange={ e => {editItems({...items, life_Time_Shethcika : e.target.value})}} />
          </div>
        </div>
        <center><h3>Включающие устройство</h3></center>
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Поставщик</label>
            <Input value={items.postavchik_Sugo}
              onChange={ e => {editItems({...items, postavchik_Sugo : e.target.value})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Тип</label>
            <Input value={items.sugo_name}
              onChange={ e => {editItems({...items, sugo_name : e.target.value})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Дата установки</label>
            <DatePicker className='date' defaultValue={moment(items.date_Sugo, dateFormat)} format={dateFormat}
              onChange={(date, newDate)=> {editItems({...items, date_Sugo : newDate})}} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Срок службы</label>
            <Input value={items.life_Time_Sugo}
              onChange={ e => {editItems({...items, life_Time_Sugo : e.target.value})}} />
          </div>
          <div className="info-box__content_sugo-item textarea">
            <label htmlFor="">Примечание</label>
            <Input.TextArea value={items.note}
              rows={ 5 }
              //autosize={{ minRows: 3, maxRows: 5 }}
              onChange={ e => {editItems({...items, note : e.target.value})}} />
          </div>
        </div>
        <center><h3>Состояние</h3></center>
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item but">
            <span className={items.func === 1 ? "but-item err" : "but-item"} 
              onClick={ () => {editItems({...items, func : items.func === 1 ? 0 : 1})}}
            >{items.func === 1 ? "Не исправность" : "В работе"}</span>
          </div>
          <div className="info-box__content_sugo-item full">
            <Button type="primary" block onClick={ () => {
              uppCoup(items);
              //editItems({});
              const wind = document.querySelector(".info-box");
              wind.classList.remove("open");
            }}>Сохранить</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBox
