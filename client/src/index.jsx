import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import * as s from '../public/styled-components.js';
import axios from 'axios';
import Search from './Search.js';
import TimeIn from './TimeIn.js';
import TimeOut from './TimeOut.js';
import {ToggleAction, timeIn, timeOut} from './ToggleAction.js';

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      pricePerNight: [],
      cleaningFee: [],
      covidSurcharge: [],
      occupTaxNFee: [],
      timeInSel: timeIn,
      timeOutSel: timeOut
    };
  }

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
        // console.log(this.state);
      })
      .catch((err) => {
        console.log('Error with data in fetchSpace()' + err);
      })
  }

  reserveSpace = () => {
    axios.post('/api/reservation', {
      locations: this.state.locations,
      pricePerNight: this.state.pricePerNight,
      cleaningFee: this.state.cleaningFee,
      covidSurcharge: this.state.covidSurcharge,
      occupTaxNFee: this.state.occupTaxNFee,
      timeInSel: this.state.timeInSel,
      timeOutSel: this.state.timeOutSel 
    })
      .then((response) => {
        console.log(response)
      })
      .catch(() => {
        console.log('Error with data posting to db')
      })
  }

  reserveFunc = () => {
    this.setState({timeInSel: timeIn, timeOutSel: timeOut});
    console.log(timeIn, timeOut);
    console.log(this.state);
    this.reserveSpace();
  }

  render(){
    return (
        <s.Grid>
          <s.PricePerNight>${this.state.pricePerNight} / night</s.PricePerNight>
          <s.CheckInContainer>
            <s.CheckInDate><Search/></s.CheckInDate>
            <s.TimeIn><TimeIn/></s.TimeIn>
            <s.TimeOut><TimeOut/></s.TimeOut>
          </s.CheckInContainer>
          <s.ReserveButton onClick={this.reserveFunc}>Reserve</s.ReserveButton>
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
