import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as s from './styled-components.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log('test')
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(o => {
      o.addEventListener("click", () => {
        console.log('clicked')
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
      });
    });
  }
  
  render() {
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
            Date
          </s.CheckInDate>
          <s.Attendee>
            1 Guest
          </s.Attendee>
          <s.TimeIn>
          <div class="select-box">
            <div class="options-container">
              <div class="option">
                <input
                  type="radio"
                  class="radio"
                  id="automobiles"
                  name="category"
                />
                <label for="automobiles">Automobiles</label>
              </div>

              <div class="option">
                <input type="radio" class="radio" id="film" name="category" />
                <label for="film">Film & Animation</label>
              </div>

              <div class="option">
                <input type="radio" class="radio" id="science" name="category" />
                <label for="science">Science & Technology</label>
              </div>

              <div class="option">
                <input type="radio" class="radio" id="art" name="category" />
                <label for="art">Art</label>
              </div>

              <div class="option">
                <input type="radio" class="radio" id="music" name="category" />
                <label for="music">Music</label>
              </div>

              <div class="option">
                <input type="radio" class="radio" id="travel" name="category" />
                <label for="travel">Travel & Events</label>
              </div>

              <div class="option">
                <input type="radio" class="radio" id="sports" name="category" />
                <label for="sports">Sports</label>
              </div>

              <div class="option">
                <input type="radio" class="radio" id="news" name="category" />
                <label for="news">News & Politics</label>
              </div>

              <div class="option">
                <input type="radio" class="radio" id="tutorials" name="category" />
                <label for="tutorials">Tutorials</label>
              </div>
            </div>

            <div class="selected">
              Select Video Category
            </div>
        </div>
      {/* <script src="dropdown.js"></script> */}
          </s.TimeIn>
          <s.TimeOut>
            Time Out
          </s.TimeOut>
        </s.CheckInContainer>
        <s.ReserveButton>
          Book It Now
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
}
ReactDOM.render(<App />, document.getElementById('app'));
