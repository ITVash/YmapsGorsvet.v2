import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { AdminMaps, AdminMenu } from '../../component';
import { coupActions, oporaActions, svetActions } from '../../redux/actions';

import './style.scss';

const AdminTools = ({ coup, opora, fetchCoup, fetchUppOpora, fetchAddCoup, fetchUppCoup, fetchAddOpora, getCurrentID, getOporaID, svet, fetchUppSvet, fetchAddSvet, deleteSvet }) => {
  const [ coups, setCoups ] = useState(null);
  const [ oporas, setOporas ] = useState(null);
  const [ type, setType ] = useState();

  const addObj = obj => {
    if (type === 'coup') {
      const newCoup = {
        title : 'ШУ',
        shethik : 'shethik',
        areaID : 0,
        sugo : 'sugo',
        sugo_name : 'sugo_name',
        shetchik_name : 'shetchik_name',
        kontaktor1_name : 'kontaktor1_name',
        kontaktor2_name : 'kontaktor2_name',
        postavchik_K1 : 'Поставщик',
        postavchik_K2 : 'Поставщик',
        postavchik_Sugo : 'Поставщик СУГО',
        postavchik_Shethika : 'Поставщик счетчика',
        date_K1 : '01.01.2019',
        date_K2 : '01.01.2019',
        date_Sugo :'01.01.2019',
        date_Shetchika : '01.01.2019',
        life_Time_k1 : 'Срок службы',
        life_Time_k2 : 'Срок службы',
        life_Time_Sugo : 'Срок службы',
        life_Time_Shethcika : 'Срок службы',
        kontaktor1 : false,
        kontaktor2 : false,
        breac1 : false,
        breac2 : false,
        breac3 : false,
        breac4 : false,
        breac5 : false,
        breac6 : false,
        breac7 : false,
        breac8 : false,
        breac9 : false,
        note : 'Примечание',
        lat : obj.lat,
        lng : obj.lng
      };
      fetchAddCoup(newCoup);
    } else if (type === 'opora') {
      const newOpora = {
        func: false,
        opora: false,
        title: "Название",
        areaID: 0,
        coupID: 0,
        bracket: 'Кронштейн',
        postavchik_breacket: 'Поставщик',
        life_Time_breacket: 'Срок службы',
        date_breacket: '01.01.2019',
        line: 'Линия',
        note: 'Примечание',
        lat : obj.lat,
        lng : obj.lng 
      };
      fetchAddOpora(newOpora);
    }
  };
  useEffect(() => {
    if (type && type === 'coup' && coup.length) {
      coup.map(item => setCoups(item));
    } else if (type && type === 'opora' && opora.length) {
      opora.map(item => setOporas(item));
    }
  }, [ coup, opora, type ]);
  return (
    <>
      <AdminMenu
        editType={ setType }
      />
      <AdminMaps
        coupCurrentID={ getCurrentID }
        type={ setType }
        coup={ coups }
        editCoup={ setCoups }
        uppCoup={ fetchUppCoup }
        opora={ oporas }
        oporaCurrentID={ getOporaID }
        editOpora={ setOporas }
        uppOpora={ fetchUppOpora }
        svets={ svet }
        fetchUppSvet={ fetchUppSvet }
        fetchAddSvet={ fetchAddSvet }
        deleteSvet={ deleteSvet }
        //addCoup={ addCoup }
        //addOpora={ addOpora }
        //infoCoup={ itemsR }
        addObj={ addObj }
      />
    </>
  )
}

export default connect(({coup, opora, svet}) => ({coup: coup.items, opora: opora.items, svet: svet.items}), {...oporaActions, ...coupActions, ...svetActions})(AdminTools);
