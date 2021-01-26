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
    locations: [],
    pricePerNight: [],
    cleaningFee: [],
    covidSurcharge: [],
    occupTaxNFee: []
  };

  componentDidMount(){
    ToggleAction();
    this.fetchSpace();
  }

  fetchSpace = () => {
    axios.get('/api/reservation')
      .then((response) => {
        const res = response.data[0]
        this.setState({
          locations: res.location, 
          pricePerNight: res.pricePerNight, 
          cleaningFee: res.cleaningFee, 
          covidSurcharge: res.covidSurcharge,
          occupTaxNFee: 19+Number(Math.round(res.pricePerNight+'e2')+'e-2')
        })
        console.log('Data received');
        console.log(this.state);
      })
      .catch(() => {
        console.log('Error with data in fetchSpace()');
      })
  }

  render(){
    return (
        <s.Grid>
          <s.PricePerNight>${this.state.pricePerNight} / night</s.PricePerNight>
          <s.Rating>Ratings</s.Rating>
          <s.CheckInContainer>
            <s.CheckInDate><Search/></s.CheckInDate>
            <s.TimeIn><TimeIn/></s.TimeIn>
            <s.TimeOut><TimeOut/></s.TimeOut>
          </s.CheckInContainer>
          <s.ReserveButton>Reserve</s.ReserveButton>
          <s.ChargeCaption>You won't be charged yet</s.ChargeCaption>
          <s.CostBreakdown>
            <s.PerNightCaption>{this.state.pricePerNight} x 1 night</s.PerNightCaption>
            <s.PerNightQuote>${this.state.pricePerNight}</s.PerNightQuote>
            <s.CleaningFeeCaption>Cleaning fee</s.CleaningFeeCaption>
            <s.CleaningFeeQuote>${this.state.covidSurcharge}</s.CleaningFeeQuote>
            <s.OccupancyTaxCaption>Occupancy fee and taxes</s.OccupancyTaxCaption>
            <s.OccupancyTaxQuote>${this.state.occupTaxNFee}</s.OccupancyTaxQuote>
            <s.AdditionalFees>NYC COVID Surcharge</s.AdditionalFees>
            <s.AdditionalFeesQuote>${this.state.covidSurcharge}</s.AdditionalFeesQuote>
            <s.Total>Total</s.Total>
            <s.TotalQuote>${this.state.pricePerNight + this.state.cleaningFee + this.state.occupTaxNFee + this.state.covidSurcharge}</s.TotalQuote>
          </s.CostBreakdown>
        </s.Grid >
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
