
export function testEnums() {
    console.log('\n--------------------------------------');
    console.log('Enums');
    console.log('--------------------------------------');
    let auction1:Auction = new Auction(1, 'Motor Bike Yamaha',100,Action.buy);
    let auction2:Auction = new Auction(2, 'Motor Bike Suzuki',100,Action.sell);

    createAuction( auction1);
    createAuction( auction2);
}



//Numeric enums
/*const enum Action{
 buy,  // 0
 sell  // 1
 }*/

// String enums
const enum Action{
    buy = 'BUY',
    sell = 'SELL'
}

class Auction{
    constructor(public auctionId: number,
                public name: string,
                public value: number,
                public action: Action){}
}

function createAuction(auction: Auction){
    console.log(`Sending Motor Bike Auction to  ${auction.action} ${auction.name} value of ${auction.value}`);
}


