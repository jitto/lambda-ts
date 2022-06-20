import { NFRService } from '../../../services/nfrService';

describe('Test GetNFR', function () {
    it('verifies successful response', async () => {
        const response = await new NFRService().GetNFR("123")

        expect(response.id).toBe("AN_RP_1");
    });
});