let deadLine = new Date("2024-12-27T23:59:59+0800");

function update() {
    // diff: https://stackoverflow.com/questions/14764029/javascript-time-until
    // slice: https://stackoverflow.com/questions/8513032/less-than-10-add-0-to-number
    let diff = (deadLine - new Date())/1000;
    let day = diff / (60*60*24) | 0;
    let hour = ("0"+(diff%(60*60*24) / (60*60) | 0)).slice(-2);
    let min = ("0"+(diff % (60*60) / 60 | 0)).slice(-2);
    let sec = ("0"+(diff % 60 | 0)).slice(-2);
    console.log(day,hour,min,sec);
}

setInterval(() => {
    update();
}, 1000);