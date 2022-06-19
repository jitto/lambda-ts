'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("../../src/lambda/app.js"));
const chai_1 = __importDefault(require("chai"));
const expect = chai_1.default.expect;
var event, context;
describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app_js_1.default.handler(event, context);
        console.log(result);
        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');
        // let response = JSON.parse(result.body);
        // expect(response).to.be.an('object');
        // expect(response.message).to.be.equal("List of all the items");
        // expect(response.location).to.be.an("string");
    });
});
//# sourceMappingURL=app-test.js.map