const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {
    let packWeight = 0;
    let reindeersCarry = 0;

    packOfGifts.map((pack) => {
        packWeight += pack.length;
    });
    reindeers.map((reindeer) => {
        reindeersCarry += reindeer.length * 2;
    });
    return parseInt(reindeersCarry / packWeight);
}

let res = distributeGifts(packOfGifts, reindeers);
console.log(res); // 2
