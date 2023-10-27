import './App.css';
import useState from 'react';

function App() {
  const[weight,setweight]=useState([])
  const[height,setheight]=useState([])
  const[bmi,setbmi]=useState([])
  const[message,setmessage]=useState([])

  let calculate=(e)=>{
      //prevent submitting to the server
    e.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setbmi(bmi.toFixed(1))
 
      // Logic for message
      if (bmi < 25) {
        setmessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setmessage('You are a healthy weight')
      } else {
        setmessage('You are overweight')
      }
    }
  }

  return (
    <div className="App">
     <div className='container'>
      <h2>BMI cal</h2>
      <form>
        <div>
          <label>Weight</label>
          <input type='text' placeholder='weight value' value={weight}
          onChange={(e)=>setweight(e.target.value)}/>

        </div>
        <div>
          <label>Height</label>
          <input type='text' placeholder='weight value' value={height}
          onChange={(e)=>setheight(e.target.value)}/>
        </div>
        <div>
          <button className='btn' type='submit' onClick={calculate}>Submit</button>
        </div>
        <div className='center'>
          <h2>your bmi is: </h2>
          <p>{message}</p>
        </div>
      </form>
     </div>
    </div>
  );
}

export default App;
