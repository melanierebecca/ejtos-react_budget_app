import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency, expenses } = useContext(AppContext);
    const setBudget = (value) => {
        if (value > 200000) alert("Budget cannot be greater than 200000");
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (totalExpenses < value) {
            dispatch({
                type: 'SET_BUDGET',
                payload: value
            });
        } else {
            alert("You cannot reduce the budget lower than spending");
        }

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                type='number'
                id='budget'
                value={budget}
                max="200000"
                step="10"
                style={{ marginLeft: '0.5rem', size: 10 }}
                onChange={(event) => setBudget(event.target.value)}>
            </input></span>
        </div>
    );
};
export default Budget;