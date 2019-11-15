import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { coupActions, oporaActions, svetActions } from '../../redux/actions';
import { Ymaps, SearchBox } from '../../component';
const Maps = props => {
  const { coup, fetchCoup, getCurrentID, fetchUppCoup, opora, fetchOpora, getOporaID, fetchUppOpora, svet, fetchSvet } = props;
  const [ filterCoup, setFilterCoup ] = useState(Array.from(coup));
  const [ filterOpora, setFilterOpora ] = useState(Array.from(opora));
  const [ searchValue, setSearchValue ] = useState('');
  const [ setCoup, setSelectCoup ] = useState(null);
  const [ setOpora, setSelectOpora ] = useState(null);
  const onSearch = (value = '') =>{
    setFilterCoup(coup.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ));
    setFilterOpora(opora.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
      opora.filter(item => item.coupTitle.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    ));
    setSearchValue(value);
  };
  useEffect(() => {
    if ( coup.length || opora.length ) {
      onSearch();
    }
  }, [ coup, opora ]);
  useEffect(() => {
    fetchCoup();
    fetchOpora();
  }, [ fetchCoup, fetchOpora ]);

  return (
    <>
      <SearchBox 
        onSearch={ onSearch } 
        SearchValue={ searchValue }
      />
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
      />
    </>
  )
}

export default connect(({ coup, opora, svet }) => ({ coup: coup.items, opora: opora.items, svet: svet.items }), { ...coupActions, ...oporaActions, ...svetActions })(Maps);
