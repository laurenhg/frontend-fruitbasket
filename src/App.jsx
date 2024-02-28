import React, {useState} from 'react';
import './App.css';


function App () {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples]= useState(0);
    const [kiwis, setKiwis] = useState(0);


        const [firstName, setFirstName]= useState ('');
        const [lastName, setLastName] = useState ('');
        const [age, setAge] = useState ('');
        const [postalCode, setPostalCode] = useState('');
        const [deliveryFrequency, setDeliveryFrequency]= useState('');
        const [timeSlot, setTimeSlot]=useState('');
        const [comments, setComments] = useState ('');
        const [agreeToTerms, setAgreeToTerms]=useState(false);


    const incrementCount =(fruitSetter, count) => {
        fruitSetter(count +1);
    };

    const decrementCount =(fruitSetter, count) => {
        if (count >0) {
    fruitSetter(count -1);
        }
    };

    const resetCounts= () => {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            firstName,
            lastName,
            age,
            postalCode,
            deliveryFrequency,
            timeSlot,
            comments,
            agreeToTerms,
            fruitCounts: {strawberries, bananas, apples, kiwis}
        });
    };
    return (
        <>
            <h1> Fruit Counters</h1>
            <div className="fruit-counter">
                <div>
                    Strawberries 🍓:{strawberries}
                    <button onClick={() => incrementCount(setStrawberries, strawberries)}> +</button>
                    <button onClick={() => decrementCount(setStrawberries, strawberries)}> -</button>
                </div>
                <div>
                    Bananas 🍌:{bananas}
                    <button onClick={() => incrementCount(setBananas, bananas)}> +</button>
                    <button onClick={() => decrementCount(setBananas, banans)}> -</button>
                </div>

                <div>
                    Apples 🍏 : {apples}
                <button onClick={() => incrementCount(setApples, apples)}> +</button>
                <button onClick={() => decrementCount(setApples, apples)}> -</button>
                </div>

            <div>
                Kiwis 🥝: {kiwis}
                <button onClick={() => incrementCount(setKiwis, kiwis)}> +</button>
                <button onClick={() => decrementCount(setKiwis, kiwis)}> -</button>
            </div>
            </div>
            <button onClick={resetCounts}>Reset</button>

            <div>
                <form onSubmit={[handleSubmit]}>
                    <input type="text" placeholder="First Name" value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}/>
                    <input type="text" placeholder="Last Name" value={lastName}
                           onChange={(e) => setLastName(e.target.value)}/>
                    <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
                    <input type="text" placeholder="Postal Code" value={postalCode}
                           onChange={(e) => setPostalCode(e.target.value)}/>
                    <select value={deliveryFrequency} onChange={(e) => setDeliveryFrequency(e.target.value)}>
                        <option value="">Select Delivery Frequency</option>
                        <option value="every week">Every week</option>
                        <option value="every other week">Every other week</option>
                        <option value="every month">Every month</option>
                    </select>
                    <div>
                        <input type="radio" name="timeSlot" value="daytime" checked={timeSlot === 'daytime'}
                               onChange={(e) => setTimeSlot(e.target.value)}/> Daytime
                        <input type="radio" name="timeSlot" value="evening" checked={timeSlot === 'evening'}
                               onChange={(e) => setTimeSlot(e.target.value)}/> Evening
                    </div>
                    <textarea placeholder="Comments" value={comments}
                              onChange={(e) => setComments(e.target.value)}></textarea>
                    <div>
                        <input type="checkbox" checked={agreeToTerms}
                               onChange={(e) => setAgreeToTerms(e.target.checked)}/> Agree to Terms
                    </div>
                    <button type="submit">Submit</button>
            </form>
        </div>

</>
)
    ;
}

export default App;