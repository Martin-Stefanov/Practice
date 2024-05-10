const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];


const canCompleteCircuit: (gas: number[], cost: number[]) => number = (gas, cost) => {
    let tankGas = 0;

    for (let startStation = 0; startStation < gas.length; startStation++) {
        tankGas = gas[startStation];
        // if(tankGas === 0) {
        //     continue;
        // }
        let steps = 0;
        for (let currentStation = startStation; steps <= gas.length; steps++) { 

            if (cost[currentStation] > tankGas) {
                tankGas = 0;
                break;
            } else {
                tankGas -= cost[currentStation];
            }
            if (currentStation + 1 === gas.length) {
                currentStation = -1;
            }
            if (steps === gas.length) {
                return startStation;
            }
            currentStation++;
            tankGas += gas[currentStation]
        }
    }
    return -1;
}

console.log(canCompleteCircuit(gas, cost));
