import "./App.css";
import { useState } from 'react';
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  /*
  1.select the button and store to variable
  2. add 2 eventLister to the button ,on click.
  3. create the functions to increment or decrement the numbers 
  4. capture the function results. 
  5. select the div to display the change.


  a. import useState 
  b.add eventlistene to button 
  c. create functions to update states 
  */
  
  const [count, setCount] = useState(0)

  function countUp (){
    setCount((pre)=> pre + 1)
  }
  
  function countDown() {
    setCount(pre=>pre-1)
  }


  return (
    <>
      <Header />
      <Counter count={count} countUp={countUp} countDown={countDown} />
      <footer>made by JX and CW</footer>
    
    </>
  );
}

export default App;
