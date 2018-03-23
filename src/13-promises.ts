function getAuctions(){

    console.log('\n--------------------------------------');
    console.log('Promise');
    console.log('--------------------------------------');


    let promise = new Promise(
        function (resolve, reject){

            console.log("Getting auctions");
            // Emulate an async server call here
            setTimeout(function(){
                let success = true;
                if (success){
                    resolve( "Motor Bike"); // got the auction
                }else{
                    reject("Can't get auctions");
                }
            },1000);

        }
    );
    return promise;
}

function getBids(customer){

    let promise =  new Promise(
        function (resolve, reject){

            // Emulate an async server call here
            setTimeout(function(){
                let success = true;
                if (success){
                    resolve( `\n-> Result from Promise: Found the bid 123 for ${customer}`); // got the bid
                }else{
                    reject("Can't get bids");
                }
            },1000);

        }
    );
    return promise;
}

export function testPromise() {
    getAuctions()

        .then((auction) => {console.log("\n-> Result from Promise: Got Auctions " + auction);return auction;})
        .then((auction) => getBids(auction))
        .then((bid) => console.log(bid))
        .catch((err) => console.error(err));
    console.log("This is the last line in the code. Chained getAuctions() and getBids().");
}
