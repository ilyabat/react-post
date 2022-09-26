import React from 'react'
import './MySelect.scss'
const MySelect = ({ option, defaultValue, value, onChange }) => {
    return (
        <div className='select'>
            <select value={value}
            onChange={event => onChange(event.target.value)}
            >
                <option disabled value="">{defaultValue}</option>
                {option.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    );
}

export default MySelect