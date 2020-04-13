import React, { useContext } from 'react';

const WhereList = ({ handleWhere }) => {
    const where = ['cupboard', 'fridge', 'freezer', 'spices']
    return (
        <select className="where-select" onChange={(e) => handleWhere(e.target.value)}>
            {where.map(w => {
                return (<option key={w} value={w}>{w}</option>)
            })}
        </select>
    )
}

export default WhereList;