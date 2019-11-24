import React from 'react';
import classNames from 'classnames';

import './style.scss';

const TitleBox = ({ className, title, area }) => {
  return (
    <div className={classNames(`${className}__title`)}>
      <h3>{ title }</h3>
      <span>{ area }</span>
    </div>
  )
}

export default TitleBox;
