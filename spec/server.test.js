
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
    it("GET request to '/' endpoint", async done => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
        done();
    });

    it("POST request to '/' endpoint", async done => {
        const response = await request.post("/");
        expect(response.status).toBe(200);
        done();
    });

    it("GET request to '/api/locations' endpoint", async done => {
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
