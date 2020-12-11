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


  render() {
    return (
      <s.Grid>
        <s.PricePerNight>
          $̶2̶2̶9̶ $129 / night
        </s.PricePerNight>
        <s.Rating>
          Rating
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
          <s.Line>
            Line
          </s.Line>
          <s.Total>
            Total
        </s.Total>
          <s.TotalQuote>
            $1412
        </s.TotalQuote>
        </s.CostBreakdown>
      </s.Grid >
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

