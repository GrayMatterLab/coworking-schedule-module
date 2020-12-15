import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as s from './styled-components.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  //test this commit


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
            Time In
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
