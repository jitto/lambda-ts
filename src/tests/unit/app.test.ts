import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { lambdaHandler } from '../../lambda/app';

var event: APIGatewayEvent, context: Context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await lambdaHandler(event, context)
        console.log(result);

        expect(typeof result).toBe('object');
        expect(result.statusCode).toBe(200);
        expect(typeof result.body).toBe('string');

        let response = JSON.parse(result.body);
        expect(typeof response).toBe('object');
        expect(response.id).toBe("AN_RP_1");
        // expect(response.location).to.be.an("string");
    });
});