import React from 'react';

const MeasurementList = ({ handleMeasurement }) => {
    const measurement = ['ml', 'cl', 'dl', 'l', 'g', 'kg', 'pce']
    return (
        <select className="amount-select" onChange={(e) => handleMeasurement(e.target.value)}>
            {measurement.map(m => {
                return (<option key={m} value={m}>{m}</option>)
            })}
        </select>
    )
}

export default MeasurementList;