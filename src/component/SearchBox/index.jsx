import React from 'react'
import './style.scss';
import { Input } from 'antd'

const SearchBox = ({ onSearch }) => {
  return (
    <div className="serch-box">
      <Input.Search 
        placeholder="Название шкафа/опоры"
        style={{ width: 238, height: 30 }}
        onPressEnter={e => onSearch(e.target.value)}
        //value={ SearchValue }
      />
    </div>
  )
}


export default SearchBox