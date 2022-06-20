import { readFileSync } from 'fs'
import NFR from './types'

export default class NFRData {
    private nfrList: NFR[];
    constructor() {
        var data=readFileSync('./src/data/nfrs.json', 'utf8');
        this.nfrList = JSON.parse(data) as NFR[];
    }
    async FindByID(nfrID: String) {
        return this.nfrList[0];
  }
}
