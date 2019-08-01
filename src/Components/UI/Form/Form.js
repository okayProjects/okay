import React from 'react';

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                {...props.elementConfiguration}
                value={props.value}
                onChange={props.change}
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
                onChange={props.change} />;
            break;
        case ('workdays'):
            inputElement = <div>
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