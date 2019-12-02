import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

//import { InfoOpora } from '../../component';
import { InfoBox } from '../../container';

import './style.scss';
const mapData = {
  center: [48.015875, 37.801341],
  zoom: 12,
};
const Ymaps = props => {
  const { coup, 
    onSelectCoup, 
    uppCoup, 
    setCoup, 
    setSelectCoup, 
    opora, 
    onSelectOpora, 
    uppOpora, 
    setOpora, 
    setSelectOpora, 
    fetchSvet, 
    svet,
    fetchUppSvet,
    fetchAddSvet, 
    deleteSvet,
    info,
    infoCoup } = props;
    const func = val => {
      if (val === true || val === 1) {
        return 1;
      } else if (val === false || val === 0) return 0;
    };
  return (
    <YMaps>
      <Map defaultState={mapData} width="100%" height="100vh">
        {coup.map(item => <Placemark key={item.id} geometry={[item.lat, item.lng]} 
          onClick={ () => {
            setSelectCoup(item); 
            onSelectCoup(item.id); 
            const Info = document.querySelector('.info-box');
            Info.classList.add("open");
          }}
          modules={['geoObject.addon.hint']}
          properties={{
            hintContent: `${item.title}`,
          }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: `./img/${item.areaID}_control_${func(item.func)}.png`,
            iconImageSize: [20, 20],
            iconImageOffset: [0, 0],
          }}
        />)}
        {opora.map(item => <Placemark key={item.id} geometry={[item.lat, item.lng]}
          onClick={ () => {
            setSelectOpora(item);
            //coupInfo(item);
            infoCoup(item.coupID);
            fetchSvet(item.id);
            //setSvets(svet);
            onSelectOpora(item.id);
            const InfoOpora = document.querySelector('.info-opora');
            InfoOpora.classList.add("open");
          }}
          modules={['geoObject.addon.hint']}
          properties={{
            hintContent: `${item.title}`,
          }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: info.funcCoup === 1 ? `./img/${item.areaID}_opora_${func(item.func)}.png` : `./img/${item.areaID}_opora_0.png`,
            iconImageSize: [10, 10],
            iconImageOffset: [0, -15],
          }}
        />
        )}
        {setCoup && (
          <InfoBox
            className="info-box"
            items={ setCoup }
            editItems={ setSelectCoup }
            uppData={ uppCoup } />
        )}
        {setOpora && (
          <InfoBox
          className="info-opora"
            items={ setOpora }
            editItems={ setSelectOpora }
            uppData={ uppOpora }
            svets={ svet }
            //setCoup={ setSelectCoup }
            //coup={ setCoup }
            //uppCoup={ uppCoup }
            info={ info }
            onSelectCoup={ onSelectCoup }
            fetchUppSvet={ fetchUppSvet }
            fetchAddSvet={ fetchAddSvet }
            deleteSvet={ deleteSvet }
          />
        )}
      </Map>
    </YMaps>
  )
}

export default Ymaps;
