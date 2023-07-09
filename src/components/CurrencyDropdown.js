import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropDown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    }
    return (
        <div className='alert alert-success'>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                    <option value="$" name="Dollar">$ Dollar</option>
                    <option defaultValue value="£" name="Pound">£ Pound</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>

        </div>
    );
};
export default CurrencyDropDown;
