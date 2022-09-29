import {useState} from 'react';

function Initiater() {
const [description, setDescription] = useState('');
const [amount, setAmount] = useState('');

const handleAmountChange = (event) => {
    //update the amount

    setAmount(event.target.value);

}

const handleDescriptionChange = (event) => {
    //update the description

    setDescription(event.target.value);

}


let gassfee;
gassfee = 0; //this is to show the current gassfee

let desc;
desc = "This is a description of the deal"; //this is to show the current description



    return (
        <div>
            <div>
                <p>Initiater</p>
                <textarea id="Escrow description" rows="4" cols="50" placeholder={desc} onChange={handleDescriptionChange}></textarea>  
            <div>  <textarea id="Escrow Amount" rows="1" cols="50" placeholder="Amount of ETH to fund the contract with" onChange={handleAmountChange}></textarea></div>
            <button> Initiate escrow deploy</button>
            
            <div> 
                <p>GassTracker: {gassfee}</p> 
            </div>
            </div>

        </div>




    )
}

export default Initiater;