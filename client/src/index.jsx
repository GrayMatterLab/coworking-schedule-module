import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import * as s from '../public/styled-components.js';
import axios from 'axios';
import Search from './Search.js';
import TimeIn from './TimeIn.js';
import TimeOut from './TimeOut.js';
import ToggleAction from './ToggleAction.js';

class App extends React.Component{

  state = {
    locations: []
  };

  componentDidMount(){
    ToggleAction();
    this.fetchSpace();
  }

  fetchSpace = () => {
    axios.get('/api/reservation')
      .then(() => {
        const data = data.response;
        this.setState({locations: data})
        console.log('Data received');
      })
      .catch(() => {
        console.log('Error with data received');
      })
  }

  render(){
    return (
        <s.Grid>
          <s.PricePerNight>$̶2̶2̶9̶ $129 / night</s.PricePerNight>
          <s.Rating>Ratings</s.Rating>
          <s.CheckInContainer>
            <s.CheckInDate><Search/></s.CheckInDate>
            <s.TimeIn><TimeIn/></s.TimeIn>
            <s.TimeOut><TimeOut/></s.TimeOut>
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
}

ReactDOM.render(<App />, document.getElementById('app'));
