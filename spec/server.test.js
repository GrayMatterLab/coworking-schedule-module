
const app = require("../server/app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

import 'regenerator-runtime/runtime'

it("Checking to see if Jest works.", () => {
    expect(1).toBe(1);
});

it("GET request to Express Server '/' Endpoint", async done => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    done();
});

it("POST request to Express Server '/' Endpoint", async done => {
    const response = await request.post("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Received successful POST test request!')
    done();
});
