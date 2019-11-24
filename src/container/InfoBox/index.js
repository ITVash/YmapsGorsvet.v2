import React from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';

import { TitleBox, ItemInput, Butt, ButtPr, ItemData, ItemText, Func } from '../../component';

const InfoBox = props => {
  const { className, items, editItems, uppData } = props;
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
  return (
    <div className={classNames(className)}>
      <span className={classNames(`${className}__close`)} onClick={
        () => {
          const wind = document.querySelector(`.${className}`);
          wind.classList.remove("open");
        }
      }><Icon type="close" /></span>
      {className === 'info-box' ? ( 
        <><TitleBox className={ className } title={items.title} area={area[items.areaID]} />
        <div className={classNames(`${className}__content`)}>
          <center><h3>Комплектация</h3></center>
          <div className={classNames(`${className}__content_box kont`)}>
            <ItemInput className={ className } label="Вкл. Устройство" base={ items } value={ items.sugo } editBase={ editItems } column='sugo' />
            <ItemInput className={ className } label="Счетчик" base={ items } value={ items.shetchik_name } editBase={ editItems } column='shetchik_name' />
            <Butt className={ className } label="К1" base={ items } editBase={ editItems } column='kontaktor1' value={ items.kontaktor1 } />
            <Butt className={ className } label="К2" base={ items } editBase={ editItems } column='kontaktor2' value={ items.kontaktor2 } />
          </div>
          <center><h3>Предохранители</h3></center>
          <div className={classNames(`${className}__content_box pr`)}>
            <ButtPr className={ className } label="1" base={ items } editBase={ editItems } column='breac1' value={ items.breac1 } />
            <ButtPr className={ className } label="2" base={ items } editBase={ editItems } column='breac2' value={ items.breac2 } />
            <ButtPr className={ className } label="3" base={ items } editBase={ editItems } column='breac3' value={ items.breac3 } />
            <ButtPr className={ className } label="4" base={ items } editBase={ editItems } column='breac4' value={ items.breac4 } />
            <ButtPr className={ className } label="5" base={ items } editBase={ editItems } column='breac5' value={ items.breac5 } />
            <ButtPr className={ className } label="6" base={ items } editBase={ editItems } column='breac6' value={ items.breac6 } />
            <ButtPr className={ className } label="7" base={ items } editBase={ editItems } column='breac7' value={ items.breac7 } />
            <ButtPr className={ className } label="8" base={ items } editBase={ editItems } column='breac8' value={ items.breac8 } />
            <ButtPr className={ className } label="9" base={ items } editBase={ editItems } column='breac9' value={ items.breac9 } />
          </div>
          <center><h3>К1</h3></center>
          <div className={classNames(`${className}__content_box kont`)}>
            <ItemInput className={ className } label="Поставщик" base={ items } editBase={ editItems } column='postavchik_K1' value={ items.postavchik_K1 } />
            <ItemInput className={ className } label="Тип" base={ items } editBase={ editItems } column='kontaktor1_name' value={ items.kontaktor1_name } />
            <ItemData className={ className } label="Дата установки" base={ items } editBase={ editItems } column='date_K1' value={ items.date_K1 ? (items.date_K1) : '01.01.2019' } />
            <ItemInput className={ className } label="Срок службы" base={ items } editBase={ editItems } column='life_Time_k1' value={ items.life_Time_k1 } />
          </div>
          <center><h3>К2</h3></center>
          <div className={classNames(`${className}__content_box kont`)}>
            <ItemInput className={ className } label="Поставщик" base={ items } editBase={ editItems } column='postavchik_K2' value={ items.postavchik_K2 } />
            <ItemInput className={ className } label="Тип" base={ items } editBase={ editItems } column='kontaktor2_name' value={ items.kontaktor2_name } />
            <ItemData className={ className } label="Дата установки" base={ items } editBase={ editItems } column='date_K2' value={ items.date_K2 ? (items.date_K2) : '01.01.2019' } />
            <ItemInput className={ className } label="Срок службы" base={ items } editBase={ editItems } column='life_Time_k2' value={ items.life_Time_k2 } />
          </div>
          <center><h3>Счетчик</h3></center>
          <div className={classNames(`${className}__content_box kont`)}>
            <ItemInput className={ className } label="Поставщик" base={ items } editBase={ editItems } column='postavchik_Shethika' value={ items.postavchik_Shethika } />
            <ItemInput className={ className } label="Тип" base={ items } editBase={ editItems } column='shetchik_name' value={ items.shetchik_name } />
            <ItemData className={ className } label="Дата установки" base={ items } editBase={ editItems } column='date_Shetchika' value={ items.date_Shetchika ?(items.date_Shetchika) : '01.01.2019' } />
            <ItemInput className={ className } label="Срок службы" base={ items } editBase={ editItems } column='life_Time_Shethcika' value={ items.life_Time_Shethcika } />
          </div>
          <center><h3>Включающие устройство</h3></center>
          <div className={classNames(`${className}__content_box`)}>
            <ItemInput className={ className } label="Поставщик" base={ items } editBase={ editItems } column='postavchik_Sugo' value={ items.postavchik_Sugo } />
            <ItemInput className={ className } label="Тип" base={ items } editBase={ editItems } column='sugo_name' value={ items.sugo_name } />
            <ItemData className={ className } label="Дата установки" base={ items } editBase={ editItems } column='date_Sugo' value={ items.date_Sugo ? (items.date_Sugo) : '01.01.2019' } />
            <ItemInput className={ className } label="Срок службы" base={ items } editBase={ editItems } column='life_Time_Sugo' value={ items.life_Time_Sugo } />
            <ItemText className={ className } label="Примечание" base={ items } editBase={ editItems } column='note' value={ items.note } />
          </div>
          <center><h3>Состояние</h3></center>
          <div className={classNames(`${className}__content_box`)}>
            <Func className={ className } base={ items } editBase={ editItems } column='func' value={ items.func } uppData={ uppData } />
          </div>
        </div></>
      ) : (
        <><TitleBox className={ className } title={items.title} area={area[items.areaID]} />
        <div className={classNames(`${className}__content`)}>
          <center><h3>Кронштейн</h3></center>
          <div className={classNames(`${className}__content_box kont`)}>
            <ItemInput className={ className } label="Поставщик" base={ items } value={ items.postavchik_breacket } editBase={ editItems } column='postavchik_breacket' />
            <ItemInput className={ className } label="Тип" base={ items } value={ items.bracket } editBase={ editItems } column='bracket' />
            <ItemData className={ className } label="Дата установки" base={ items } editBase={ editItems } column='date_breacket' value={ items.date_breacket ? (items.date_breacket) : '01.01.2019' } />
            <ItemInput className={ className } label="Срок службы" base={ items } value={ items.life_Time_breacket } editBase={ editItems } column='life_Time_breacket' />
          </div>
          <center><h3>Кабельные линии</h3></center>
          <div className={classNames(`${className}__content_box`)}>
            <ItemInput className={ className } full={true} label="" base={ items } editBase={ editItems } column='line' value={ items.line } />
            <ItemText className={ className } label="Примечание" base={ items } editBase={ editItems } column='note' value={ items.note } />
          </div>
          <center><h3>Состояние</h3></center>
          <div className={classNames(`${className}__content_box`)}>
            <Func className={ className } base={ items } editBase={ editItems } column='func' value={ items.func } uppData={ uppData } />
          </div>
        </div></> 
      )}
    </div>
  )
}

export default InfoBox;