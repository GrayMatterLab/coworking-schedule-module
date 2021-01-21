import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as s from './styled-components.js';
import Search from './Search.js';


function App(){
    window.onload=function(){
      const selected = document.querySelector(".selected");
      const optionsContainer = document.querySelector(".options-container");
    
      const optionsList = document.querySelectorAll(".option");
    
      selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
        console.log('Time In Box Selected')
      });
    
      optionsList.forEach(o => {
        o.addEventListener("click", () => {
          console.log('Time In dropdown was triggered')
          selected.innerHTML = o.querySelector("label").innerHTML;
          optionsContainer.classList.remove("active");
        });
      });
    
      const selectedq = document.querySelector(".selectedq");
      const optionsContainerq = document.querySelector(".options-containerq");
    
      const optionsListq = document.querySelectorAll(".optionq");
    
      selectedq.addEventListener("click", () => {
        optionsContainerq.classList.toggle("active");
        console.log('Time Out Box Selected')
      });
    
      optionsListq.forEach(e => {
        e.addEventListener("click", () => {
          console.log('Time Out dropdown was triggered')
          selectedq.innerHTML = e.querySelector("label").innerHTML;
          optionsContainerq.classList.remove("active");
        });
      });    
    }
  
  const [showSearch, setShowSearch] = useState(false);

    
    return (
      <s.Grid>
        <s.PricePerNight>
          $̶2̶2̶9̶ $129 / night
        </s.PricePerNight>
        <s.Rating>
          Ratings
        </s.Rating>
        <s.CheckInContainer>
          <s.CheckInDate>
            {/* <div classname="banner_search">
              {showSearch && <Search />}
              <button onClick={()=> setShowSearch(!showSearch)} 
              class='banner_searchButton' variant='outlined'>Search Dates</button>
            </div> */}
            <Search />
          </s.CheckInDate>
          <s.TimeIn>
          <div class="select-box">
            <div class="options-container">
              <div class="option">
                <input type="radio" class="radio" />
                <label for="film">Film & Animation</label>
              </div>
            </div>
            <div class="selected">
              Check In
            </div>
          </div>
          </s.TimeIn>
          <s.TimeOut>
          <div class="select-boxq">
            <div class="options-containerq">
              <div class="optionq">
                <input type="radio" class="radioq" />
                <label for="film">9:00 AM</label>
              </div>
            </div>
            <div class="selectedq">
              Check Out
            </div>
        </div>
          </s.TimeOut>
        </s.CheckInContainer>
        <s.ReserveButton>
          Reserve
        </s.ReserveButton>
        <s.ChargeCaption>
          You won't be charged yet
        </s.ChargeCaption>
        <s.CostBreakdown>
          <s.PerNightCaption>
            $107 x 1 night
          </s.PerNightCaption>
          <s.PerNightQuote>
            $107
          </s.PerNightQuote>
          <s.CleaningFeeCaption>
            Cleaning fee
          </s.CleaningFeeCaption>
          <s.CleaningFeeQuote>
            $35
          </s.CleaningFeeQuote>
          <s.OccupancyTaxCaption>
            Occupancy taxes and fees
          </s.OccupancyTaxCaption>
          <s.OccupancyTaxQuote>
            $14
          </s.OccupancyTaxQuote>
          <s.AdditionalFees>
            NYC COVID Surcharge
          </s.AdditionalFees>
          <s.Total>
            Total
        </s.Total>
          <s.TotalQuote>
            $14121231231
        </s.TotalQuote>
        </s.CostBreakdown>
      </s.Grid >
    )
}
ReactDOM.render(<App />, document.getElementById('app'));
