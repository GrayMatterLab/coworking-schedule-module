
const app = require("../server/app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
import { send } from 'process';
import 'regenerator-runtime/runtime';

describe('Jest', () => {
    it("Checking to see if Jest works.", () => {
        expect(1).toBe(1);
    });
});

describe("Testing Express Server Status Codes are 200", () => {
    it("GET request from '/' endpoint", async done => {
        const response = await request.get("/");
        expect(response.statusCode).toBe(200);
        done();
    });

    it("POST request to '/' endpoint", async done => {
        const response = await request.post("/");
        expect(response.status).toBe(200);
        done();
    });

    it("GET request from '/api/locations' endpoint", async done => {
        const response = await request.get("/api/locations");
        expect(response.status).toBe(200);
        done();
    });

    it("POST request to '/api/reservation' endpoint", async done => {
        const response = await request.post("/api/reservation");
        expect(response.status).toBe(200);
        done();
    });
});

describe("Testing expected data types from '/api/locations' API GET request", () => {
    it("All the id value is a string in the database", async done => {
        const response = await request.get("/api/locations");
        expect(response.body.map(x => typeof(x.pricePerNight))).toStrictEqual(['number'])
        done();
    }); 
    it("All the location value is a string in the database", async done => {
        const response = await request.get("/api/locations");
        expect(response.body.map(x => typeof(x.location))).toStrictEqual(['string'])
        done();
    }); 
    it("All the pricePerNight value is a number in the database", async done => {
        const response = await request.get("/api/locations");
        expect(response.body.map(x => typeof(x.pricePerNight))).toStrictEqual(['number'])
        done();
    }); 
    it("All the cleaningFee value is a number in the database", async done => {
        const response = await request.get("/api/locations");
        expect(response.body.map(x => typeof(x.cleaningFee))).toStrictEqual(['number'])
        done();
    }); 
    it("All the covidSurcharge value is a number in the database", async done => {
        const response = await request.get("/api/locations");
        expect(response.body.map(x => typeof(x.covidSurcharge))).toStrictEqual(['number']);
        done();
    }); 
});

describe("Testing POST request to 'api/reservation'", () => {
    it("Inserting only 1 set of data into MongoDB", async done => {
        const mockReservationData = {
            locations: 'testJestSpot',
            pricePerNight: 42,
            cleaningFee: 29,
            covidSurcharge: 9,
            occupTaxNFee: 4,
            timeInSel: '12:22',
            timeOutSel: '21:33',
            reserveStartDate: 'testDate',
            reserveEndDate: 'testDateOut'
          };

        const response = await request.post("/api/reservation").send(mockReservationData);
        expect(response.body.insertedCount).toBe(1)
        expect(response.body.result).toStrictEqual({'n':1, 'ok':1})
        done();
    })
    it("All the fields in the data sent to the API matches with the received data", async done => {
        const mockReservationData = {
            locations: 'testJestSpot',
            pricePerNight: 42,
            cleaningFee: 29,
            covidSurcharge: 9,
            occupTaxNFee: 4,
            timeInSel: '12:22',
            timeOutSel: '21:33',
            reserveStartDate: 'testDate',
            reserveEndDate: 'testDateOut'
          };

        const response = await request.post("/api/reservation").send(mockReservationData);
        expect(response.body.ops[0].locations).toBe(mockReservationData.locations)
        expect(response.body.ops[0].pricePerNight).toBe(mockReservationData.pricePerNight)
        expect(response.body.ops[0].cleaningFee).toBe(mockReservationData.cleaningFee)
        expect(response.body.ops[0].occupTaxNFee).toBe(mockReservationData.occupTaxNFee)
        expect(response.body.ops[0].timeInSel).toBe(mockReservationData.timeInSel)
        expect(response.body.ops[0].timeOutSel).toBe(mockReservationData.timeOutSel)
        expect(response.body.ops[0].reserveStartDate).toBe(mockReservationData.reserveStartDate)
        expect(response.body.ops[0].reserveEndDate).toBe(mockReservationData.reserveEndDate)
        done();
    })
});