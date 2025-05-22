let memoryLeakArr = [];
let leakInterval, cleanInterval;

function simulateMemoLeak() {
    let count = 0;
    leakInterval = setInterval(() => {
        let obj = { data: new Array(1000).fill('*') }; // Creating large objects
        memoryLeakArr.push(obj);
        count++;
        console.log(`Objects in memory: ${memoryLeakArr.length}`);

        if (memoryLeakArr.length > 50) {
            console.log("Memory Stopping simulation.");
            stopSim();
        }
    }, 1000);
}

function cleanMemory() {
    cleanInterval = setInterval(() => {
        if (memoryLeakArr.length > 50) {
            memoryLeakArr.splice(0, 25); // Remove old objects
            console.log("Memory cleanup successful...");
        }
    }, 2000);
}

function stopSim() {
    clearInterval(leakInterval);
    clearInterval(cleanInterval);
    console.log("Simulation stopped.");
}

simulateMemoLeak();
cleanMemory();
