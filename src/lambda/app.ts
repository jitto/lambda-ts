import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { NFRService } from '../services/nfrService';

export const lambdaHandler = async function(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
  // Inject NFRService
  // let NFRService = new (await _NFRService).default();
  // console.log(NFRService);
  return {
    statusCode: 200,
    body: JSON.stringify(await new NFRService().GetNFR("123"))
  };
};
