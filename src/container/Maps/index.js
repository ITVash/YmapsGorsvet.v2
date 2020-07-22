import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { coupActions, oporaActions, svetActions } from '../../redux/actions';
import { Ymaps, SearchBox, Menu } from '../../component';

const Maps = props => {
  const {
    coup,
    fetchCoup,
    getCurrentID,
    fetchUppCoup,
    opora,
    fetchOpora,
    getOporaID,
    fetchUppOpora,
    svet,
    fetchSvet,
    fetchUppSvet,
    fetchAddSvet,
    deleteSvet,
    info,
    infoCoup,
    access
  } = props;
  const [ filterCoup, setFilterCoup ] = useState(Array.from(coup));
  const [ filterOpora, setFilterOpora ] = useState(Array.from(opora));
  const [ searchValue, setSearchValue ] = useState('');
  const [ setCoup, setSelectCoup ] = useState(null);
  const [ setOpora, setSelectOpora ] = useState(null);
  const onSearch = (value = '') => {
    setFilterCoup(coup.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ));
    setFilterOpora(opora.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
    item.coupTitle.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      //opora.filter(item => item.coupTitle.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    ),);
    setSearchValue(value);
  };
  useEffect(() => {
    if ( coup.length || opora.length ) {
      onSearch();
    }
  }, [ coup, opora ]);
  /* useEffect(() => {
    fetchCoup();
    fetchOpora();
  }, [ fetchCoup, fetchOpora ]); */
  //<InfoBox className="info-box" />
  return (
    <>
      <SearchBox 
        onSearch={ onSearch } 
        SearchValue={ searchValue }
      />
      <Menu />
      <Ymaps
        coup={ filterCoup }
        onSelectCoup={ getCurrentID }
        uppCoup={ fetchUppCoup }
        setCoup= { setCoup }
        setSelectCoup={ setSelectCoup }
        opora={ filterOpora }
        onSelectOpora={ getOporaID }
        uppOpora={ fetchUppOpora }
        setOpora= { setOpora }
        setSelectOpora={ setSelectOpora }
        svet={ svet }
        fetchSvet={ fetchSvet }
        fetchUppSvet={ fetchUppSvet }
        fetchAddSvet={ fetchAddSvet }
        deleteSvet={ deleteSvet }
        info={ info }
        infoCoup={ infoCoup }
        access={ access }
      />
    </>
  )
}

export default connect(
  ({ coup, opora, svet, auth }) => ({
    coup: coup.items,
    opora: opora.items,
    svet: svet.items,
    info: opora.info,
    access: auth.items.access,
  }),
  { ...coupActions, ...oporaActions, ...svetActions },
)(Maps);
