import NFRData from "../../../data/nfrData";

describe('Test nfrList', function () {
    it('verifies successful response', async () => {
        const response = await new NFRData().FindByID("123");

        expect(response.id).toBe("AN_RP_1");
    });
});