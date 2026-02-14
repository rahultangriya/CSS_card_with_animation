import { useState } from 'react';
import './index.css';

function App() {

  function hidePopup(){
    const popup = document.querySelector('.main-container');
    popup.style.display = 'none';
    const showButton = document.querySelector('.show-button');
    showButton.style.display = 'block';
  }

  function showPopup(){
    const popup = document.querySelector('.main-container');
    popup.style.display = "flex";
    const showButton = document.querySelector('.show-button');
    showButton.style.display = 'none';
  }

  function darkModeOn(){
    const body = document.querySelector('body');
    body.classList.add('dark');
    const popup = document.querySelector('.pop-up');
    popup.classList.remove('lightModeShadow');
    popup.classList.add('darkModeShadow');

  }

  function darkModeOff(){
    const body = document.querySelector('body');
    body.classList.remove('dark');
    const popup = document.querySelector('.pop-up');
    popup.classList.remove('darkModeShadow');
    popup.classList.add('lightModeShadow');
  }

  return(
    <div>
      <button class="show-button" onClick={showPopup}>Show</button>
      <div className='main-container'>
        <div className='pop-up'>
            <h1>Expense Tracker</h1>
            <p>Track your expenses and manage your budget effectively with our user-friendly expense tracker. Stay on top of your finances and make informed decisions to achieve your financial goals.</p>
            <div className='buttons'>
              <button onClick={hidePopup}>Get Started</button>
              <button onClick={darkModeOn}>Dark Mode</button>
              <button onClick={darkModeOff}>Light Mode</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
