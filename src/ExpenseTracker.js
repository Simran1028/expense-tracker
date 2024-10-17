import React, { useState } from 'react'
import './ExpenseTracker.css'

export const ExpenseTracker = () => {

    const [expense, setExpense] = useState('');
    const [amount, setAmount] = useState('');
 
    const [input, setInput] = useState([]); //to create array
    

    const output = () => {
        if (!expense || !amount) return;  //if single value will be put , it will not be added in expense list

        // created key value pairs for array
        const newExpense = {
            id: input.length + 1,
            title: expense,
            amount: amount
            
        };
        setInput([...input, newExpense])  //spread operator used to add previos value and new value
        setExpense('')// expense text field gets empty
        setAmount('')
    }
    const deleteExpense = (id) => {
        setInput(input.filter((input) => input.id !== id))
    }
   

    //    The filter function is applied to the input list, and 
    //     it creates a new array that excludes the item whose id matches the id passed to deleteExpense.
    return (
        <div className='container'>
            <div className='heading'>Expense Tracker</div>
            <div className='box'>
                {/* onchange-setexpense will store the final value */}
                <input type='text' placeholder='Add expense' value={expense} onChange={(e) => setExpense(e.target.value)} />
                <input type='number' placeholder='Add amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button onClick={output}>Add Expense</button>
                {/* created on click function */}
            </div>
            <ul className='list'>
                {
                    input.map((expense) => (
                        <li key={expense.id} >
                            <span> {expense.title} </span>
                            <span> ${expense.amount} </span>
                            <button onClick={() => deleteExpense(expense.id)}> Delete</button>
                        </li>
                    ))
                }

            </ul>
           
        </div>
        
    )
}
