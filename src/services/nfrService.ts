import { NFRData } from "../data/nfrData";

export class NFRService {
      public nfrData: NFRData;
      constructor() { 
            this.nfrData = new NFRData();
      }

      async GetNFR(nfrID: String) {
            return this.nfrData.nfrList[0];
      }
}