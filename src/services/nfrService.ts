import NFRData from "../data/nfrData";

export default class NFRService {
      private nfrData: NFRData;
      constructor() { 
            this.nfrData = new NFRData();
      }

      async GetNFR(nfrID: String) {
            return this.nfrData.FindByID("123");
      }
}