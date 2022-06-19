import { readFileSync } from 'fs'

interface NFR {
    id: String,
    text: String
}

export class NFRData {
    public nfrList: NFR[];
    constructor() {
        var data=readFileSync('./src/data/nfrs.json', 'utf8');
        this.nfrList = JSON.parse(data) as NFR[];
        console.log(this.nfrList);
    }
}
