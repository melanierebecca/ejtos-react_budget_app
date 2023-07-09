import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const setBudget = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: <input
                        type='number'
                        id='budget'
                        value={budget}
                        max={200000}
                        step="10"
                        style={{ marginLeft: '0.5rem', size: 10 }}
                        onChange={(event) => setBudget(event.target.value)}>
            </input></span>
        </div>
    );
};
export default Budget;