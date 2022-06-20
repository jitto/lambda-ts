import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { NFRService } from '../services/nfrService';

const nfrService = new NFRService();

export const lambdaHandler = async function(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify(await nfrService.GetNFR("123"))
  };
};
