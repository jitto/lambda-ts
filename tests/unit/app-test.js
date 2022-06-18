'use strict';

const app = require('../../src/lambda/app');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app.handler(event, context)
        console.log(result);

        expect(result).to.be.an('object');
        expect(result.code).to.equal(200);
        expect(result.data).to.be.an('string');

        // let response = JSON.parse(result.body);

        // expect(response).to.be.an('object');
        // expect(response.message).to.be.equal("List of all the items");
        // expect(response.location).to.be.an("string");
    });
});