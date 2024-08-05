let currentWaterLevel = 5;
const maxWaterLevel = 10;

let plant = {
    name: 'Tomato',
    level: currentWaterLevel,
    needsWater : function() {
        console.log("I need to water my plant");
    },
    waterPlant : function() {
        currentWaterLevel++;
    }
};

export {plant, maxWaterLevel,currentWaterLevel};
