import styled from 'styled-components';

export const Grid = styled.section`
  grid-template-columns: 20px 187.5px 187.5px 20px;
  width: 415px;
  grid-template-rows: 25px 58px 60px 60px 20px 55px 55px 230px;
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
`;
//560

export const PricePerNight = styled.section`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  border: 1px solid black;
`;

export const Rating = styled.section`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  border: 1px solid black;
`;

export const CheckInContainer = styled.section`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 5;
  border: 1px solid black;
  border-radius: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  display: grid;

`;

export const CheckInDate = styled.section`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
  border: 1px solid black;
`;

export const Attendee = styled.section`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  border: 1px solid black;
`;

export const TimeIn = styled.section`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
  border: 1px solid black;
`;

export const TimeOut = styled.section`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  border: 1px solid black;
`;

export const ReserveButton = styled.section`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 7;
  border: 1px solid black;
`;

export const ChargeCaption = styled.section`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 7;
  grid-row-end: 8;
  border: 1px solid black;
`;

export const CostBreakdown = styled.section`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 8;
  grid-row-end: 9;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  display: grid;
  border: 1px solid black;
`;

export const PerNightCaption = styled.section`
  grid-column-start: 1;
  grid-column-end: two;
  grid-row-start: 1;
  grid-row-end: 1;
  border: 1px solid black;
`;

export const PerNightQuote = styled.section`
  grid-column-start: 3;
  grid-column-end: three;
  grid-row-start: 1;
  grid-row-end: 1;
  border: 1px solid black;
`;

export const CleaningFeeCaption = styled.section`
  grid-column-start: 1;
  grid-column-end: two;
  grid-row-start: 2;
  grid-row-end: 2;
  border: 1px solid black;
`;

export const CleaningFeeQuote = styled.section`
  grid-column-start: 3;
  grid-column-end: three;
  grid-row-start: 2;
  grid-row-end: 2;
  border: 1px solid black;
`;

export const OccupancyTaxCaption = styled.section`
  grid-column-start: 1;
  grid-column-end: two;
  grid-row-start: 3;
  grid-row-end: 3;
  border: 1px solid black;
`;

export const OccupancyTaxQuote = styled.section`
  grid-column-start: 3;
  grid-column-end: three;
  grid-row-start: 3;
  grid-row-end: 3;
  border: 1px solid black;
`;

export const Line = styled.section`
  grid-column-start: 1;
  grid-column-end: three;
  grid-row-start: 4;
  grid-row-end: 4;
  border: 1px solid black;
`;

export const Total = styled.section`
  grid-column-start: 1;
  grid-column-end: two;
  grid-row-start: 5;
  grid-row-end: six;
  border: 1px solid black;

`;

export const TotalQuote = styled.section`
  grid-column-start: 3;
  grid-column-end: three;
  grid-row-start: 5;
  grid-row-end: six;
  border: 1px solid black;
`;