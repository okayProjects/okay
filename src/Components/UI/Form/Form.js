import React from 'react';

const input = (props) => {

    // let inputClass = ['orderinputs-wrapper-input'];
    // if (!props.invalidStyle && props.inputTouchedByUser > 0) {
    //     inputClass = ['orderinputs-wrapper-input', 'invalid-input']
    // }
    let inputElement = null;

    switch (props.elementType) {

        case ('input'):
            inputElement = <input
                {...props.elementConfiguration}
                value={props.value}
                onChange={props.change}
                className={!props.invalidStyle && props.inputTouchedByUser > 0 ? 'input-invalid' : null}
            />;
            break;
        case ('checkbox'):
            inputElement = <div className={props.elementConfiguration.name}>
                <input
                    {...props.elementConfiguration}
                    onChange={props.change}
                    checked={props.checked}
                />
                <label htmlFor={props.labelId}>{props.label}</label>
            </div>
            break;

        case ('textarea'):
            inputElement = <textarea
                {...props.elementConfiguration}
                value={props.value}
                onChange={props.change}
                className={!props.invalidStyle && props.inputTouchedByUser > 0 ? 'textarea-invalid' : null} />;
            break;
        case ('workdays'):
            inputElement = <div className='day-time-wrapper'>
                <div className='workdays-checkbox-wrapper'>
                    <input
                        {...props.elementConfiguration}
                        onChange={props.change}
                        checked={props.checked}
                    />
                    <label htmlFor={props.elementConfiguration.id}>{props.label}</label>
                </div>
                <div className='workdays-time-wrapper'>
                    <span>od</span>
                    <input
                        value={props.valueFrom}
                        {...props.elementTimeFromConfiguration}
                        disabled={props.disabled}
                        onChange={props.change} />
                    <span>do</span>
                    <input
                        value={props.valueTo}
                        {...props.elementTimeToConfiguration}
                        disabled={props.disabled}
                        onChange={props.change} />
                </div>
            </div>
            break;

        case ('select'):
            inputElement = (
                <select
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfiguration.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;

        default: inputElement = <input
            {...props.elementConfiguration}
            value={props.value} />
    }

    return (
        <>
            {inputElement}
        </>
    )
}

export default input;