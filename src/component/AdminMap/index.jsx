import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { InfoBox } from '../../container';

const AdminMap = props => {
  const {
		coup,
		opora,
		editCoup,
		editOpora,
		addObj,
		coupCurrentID,
		uppCoup,
		type,
		oporaCurrentID,
		uppOpora,
		svets,
		fetchUppSvet,
		fetchAddSvet,
    deleteSvet,
    access
	} = props;
  const mapData = {
    center: [48.015875, 37.801341],
    zoom: 12,
  };
  return (
    <YMaps>
      <Map defaultState={ mapData } width="100%" height="100vh" modules={['geocode']}
        onClick={ e => {
          let coords = e.get('coords');
          let poson = {lat: coords[0], lng: coords[1]}
          addObj(poson);
        } }
      >
        { coup && (
          <Placemark geometry={[coup.lat, coup.lng]}
            onClick={ () => {
              const Info = document.querySelector('.info-box');
              Info.classList.add("open");
              coupCurrentID(coup.id);
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: `./img/coup.png`,
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -30],
            }}
          />)
        }
        { opora && (
          <Placemark geometry={[opora.lat, opora.lng]}
            onClick={ () => {
              const InfoOpora = document.querySelector('.info-opora');
              InfoOpora.classList.add("open");
              oporaCurrentID(opora.id);
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: `./img/opora.png`,
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -30],
            }}
          />)
        }
        {coup && (
          <InfoBox 
            className='info-box'
            items={ coup }
            editItems={ editCoup }
            uppData={ uppCoup }
            type={ type }
            edit
            access={access}
          />
        )}
        {opora && (
          <InfoBox 
            className='info-opora'
            items={ opora }
            editItems={ editOpora }
            uppData={ uppOpora }
            type={ type }
            svets={ svets }
            fetchUppSvet={ fetchUppSvet }
            fetchAddSvet={ fetchAddSvet }
            deleteSvet={ deleteSvet }
            edit
            access={access}
          />
        )}
      </Map>
    </YMaps>
  )
}
export default AdminMap;
