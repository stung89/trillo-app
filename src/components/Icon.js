import React from 'react';
import '../../public/images/sprite.svg';

const Icon = (props) => (
    <svg className={`icon icon-${props.name}`}>
        <use xlinkHref={`images/sprite.svg#${props.name}`}></use>
    </svg>
    );

export default Icon;