import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li class={css.item}>
 <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
</li>
    )
}



FriendListItem.propType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
}