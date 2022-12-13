import { useState } from 'react'
import CardCheck from './components/CardCheck'

export default function App(){
    const [card, setCard] = useState(null)
    const luhn = (num) => {
    let ans = 0
    let j=1
    let sum=0
        for(let i=num.length-1;i>=0;i--){
            if(j%2===0){
                ans+=(num[i]*2).toString()
            } else{
                ans+=num[i]
            }
            j++
        }
        for(let i = 0;i<ans.length;i++){
            sum+=ans[i]*1
        }
        if(sum%10 === 0){
            console.log(true)
            setCard("Valid credit card number")
        } else {
            console.log(false)
            setCard("This is not a valid credit card number")
        }
    }
    return (
        <div className="App">
            <h1>Enter a number to verify if it's a valid credit card format</h1>
            <CardCheck luhn={luhn}/>
            <h2>{card}</h2>
        </div>
    )
}