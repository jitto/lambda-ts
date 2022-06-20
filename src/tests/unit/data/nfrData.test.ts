import { NFRData } from "../../../data/nfrData";

describe('Test nfrList', function () {
    it('verifies successful response', async () => {
        const response = await new NFRData().nfrList;

        expect(response.length).toBe(1);
    });
});