

export function ex04() {
    const getRandomPromise = () => {
        return new Promise<number>((resolve, reject) => {

                console.log("checking random");
                const random = randomIntFromInterval(1, 10);
                setTimeout(() => {
                    if (random < 5) {
                        resolve(random);
                    } else {
                        reject(random);
                    }
                }, random * 20);
            }
        );

        function randomIntFromInterval(min, max): number { // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    };


    let rand = 0, count = 0;
    const runAsync = async () => {
        for (let i = 0; i < 100; i++) {
            await getRandomPromise()
                .then((random) => {
                    console.log("\n-> Result (resolve) from Promise: " + random);
                    rand += random;
                    count++;
                    return random;
                })
                .then((random) => console.log("2nd ", random))
                .catch((err) => console.error("\n-> Error (reject) from Promise: ", err));
        }
        console.log("Average: ", Math.round(rand / count * 10) / 10, "Count: ", count);
        console.log('end of ex04 result');
    };
    runAsync();

}

