
import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';



export const Statistics = ({title, stats}) => {
return (<section class={css.statistics}>
<h2 className={css.title}>{title}</h2>

<ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className={css.label}>{label}</span>
      <span className={css.percentage}> {percentage}%</span>
          </li>
        ))}
      </ul>
</section>)
}

Statistics.propType ={
    id:PropTypes.string.isRequired,
    labale:PropTypes.string.isRequired,
    percentage:PropTypes.string.isRequired,
}