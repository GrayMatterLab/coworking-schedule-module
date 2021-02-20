
const app = require("../server/app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
import 'regenerator-runtime/runtime'

describe('Jest', () => {
    it("Checking to see if Jest works.", () => {
        expect(1).toBe(1);
    });
});

describe("Testing Express Server Status Codes are 200", () => {
    it("GET request from '/' endpoint", async done => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
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

describe("Testing all expected data types from '/api/locations' API GET request", () => {
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
