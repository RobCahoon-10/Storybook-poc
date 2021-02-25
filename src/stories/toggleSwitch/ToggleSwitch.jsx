import React from 'react'
import './ToggleSwitch.scss'

const ToggleSwitch = ({id, name, checked, onChange, disabled}) => {

    return(
        <label className={`ToggleSwitch ${ disabled ? 'ToggleSwitch--disabled' : '' }`}>
            <input id={id} type="checkbox" name={name} checked={checked} onChange={e => onChange(e)} disabled={disabled} tabIndex={disabled? -1 : 1}/>
            <span className="ToggleSwitch_Slider ToggleSwitch--round"></span>
        </label>
    )
}

export default ToggleSwitch