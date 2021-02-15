import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import * as s from '../public/styled-components.js';
import axios from 'axios';
import TimeIn from './TimeIn.js';
import TimeOut from './TimeOut.js';
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      locations: null,
      pricePerNight: null,
      cleaningFee: null,
      covidSurcharge: null,
      occupTaxNFee: null,
      timeInSel: null,
      timeOutSel: null,
      days: 1,
      selectionRange : {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
      }
    };
  }

  componentDidMount(){
    console.log(this.state.selectionRange)
    this.fetchSpace();
    this.toggleAction();
  }

  handleSelect=(ranges)=> {
    this.setState(({
      selectionRange : {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
        key: "selection"
      }
    }),
    () => {this.daysLeft()})
  }

  daysLeft = () => {
    var d1 = this.state.selectionRange.startDate; //"now"
    var d2 = this.state.selectionRange.endDate; // some date
    var diff = Math.abs(d2-d1);
    var oneDay=1000*60*60*24;
    var totalDays = (diff/oneDay)+1;
    this.setState({days: totalDays});
  }

  toggleAction = () => {
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");
  
    const optionsList = document.querySelectorAll(".option");
  
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
      console.log('Time In Box Selected')
    });
  
    optionsList.forEach(o => {
      o.addEventListener("click", () => {
        console.log('An option in Checkin Time was selected')
        selected.innerHTML = o.querySelector("label").innerHTML;
        this.setState({timeInSel: selected.innerHTML})
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
        console.log('An option in Checkout Time was selected');
        selectedq.innerHTML = e.querySelector("label").innerHTML;
        this.setState({timeOutSel: selectedq.innerHTML});
        optionsContainerq.classList.remove("active");
      });
    });    
  }

  fetchSpace = () => {
    axios.get('/api/locations')
      .then((response) => {
        const res = response.data[0]
        this.setState({
          id: res._id,
          locations: res.location, 
          pricePerNight: res.pricePerNight, 
          cleaningFee: res.cleaningFee, 
          covidSurcharge: res.covidSurcharge,
          occupTaxNFee: 19+Number(Math.round(res.pricePerNight*0.0825))
        })
        console.log('Data received');
        console.log(this.state);
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
      timeOutSel: this.state.timeOutSel,
      reserveStartDate: this.state.selectionRange.startDate,
      reserveEndDate: this.state.selectionRange.endDate
    })
    .catch(() => {
        console.log('Error with data posting to db')
    })
  }

  render(){
    return (
        <s.Grid>
          <s.PricePerNight>${this.state.pricePerNight} / day</s.PricePerNight>
          <s.CheckInContainer>
            <s.CheckInDate>
              <DateRange fixedHeight ranges={[this.state.selectionRange]} onChange={this.handleSelect}/>
            </s.CheckInDate>
            <s.TimeIn><TimeIn/></s.TimeIn>
            <s.TimeOut><TimeOut/></s.TimeOut>
          </s.CheckInContainer>
          <s.ReserveButton onClick={this.reserveSpace}>Reserve</s.ReserveButton>
          <s.ChargeCaption>You won't be charged yet</s.ChargeCaption>
          <s.CostBreakdown>
            <s.PerNightCaption>{this.state.pricePerNight} / {this.state.days} day</s.PerNightCaption>
            <s.PerNightQuote>${this.state.pricePerNight*this.state.days}</s.PerNightQuote>
            <s.CleaningFeeCaption>Cleaning fee</s.CleaningFeeCaption>
            <s.CleaningFeeQuote>${this.state.covidSurcharge}</s.CleaningFeeQuote>
            <s.OccupancyTaxCaption>Occupancy fee and taxes</s.OccupancyTaxCaption>
            <s.OccupancyTaxQuote>${this.state.occupTaxNFee}</s.OccupancyTaxQuote>
            <s.AdditionalFees>NYC COVID Surcharge</s.AdditionalFees>
            <s.AdditionalFeesQuote>${this.state.covidSurcharge}</s.AdditionalFeesQuote>
            <s.Total>Total</s.Total>
            <s.TotalQuote>${(this.state.pricePerNight*this.state.days) + this.state.cleaningFee + this.state.occupTaxNFee + this.state.covidSurcharge}</s.TotalQuote>
          </s.CostBreakdown>
        </s.Grid >
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
