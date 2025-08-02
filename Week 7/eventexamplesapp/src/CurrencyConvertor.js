import React, { useState } from 'react'

const CurrencyConvertor = () => {
    const [amount, setAmount] = useState(80);
    const [curr, setCurr] = useState('Euro');
    return (
        <div>
            <h1>Currency Convertor</h1>
            <table>
                <tr>
                    <td>Amount:</td>
                    <td>
                        <input type='number' value={amount} onInput={(e)=>{
                            setAmount(e.target.value);
                        }} />
                    </td>
                </tr>
                <tr>
                    <td>Currency:</td>
                    <td>
                        <textarea value={curr} onInput={(e)=>{setCurr(e.target.value)}}></textarea>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} style={{textAlign: 'center'}}>
                        <button onClick={()=>{
                            alert(`Converting to ${curr}. Amount is ${amount*80}`);
                        }}>Submit</button>
                    </td>
                </tr>
            </table>

        </div>
    )
}

export default CurrencyConvertor
