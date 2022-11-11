import "./App.css";
import {useState} from 'react';

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
  


  return (
    <>
      <header>this is a counter</header>
      <section className="counter">
        <button className="counterBtnUp button" onClick={counterUp}>+</button>
        <div className="numberDisplay">0</div>

        <button className="counterBtnDown button">-</button>
      </section>
      <footer>made by JX and CW</footer>
    </>
  );
}

export default App;
