// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Centrifuge
    // -----------------

    const CENTRIFUGE_PREFIX = 'perpendicular:centrifuge/';
    event.recipes.thermal.centrifuge(['minecraft:glass_bottle', Fluid.of('pneumaticcraft:memory_essence', 250)], 'minecraft:experience_bottle').id(`${CENTRIFUGE_PREFIX}experience_bottle`);

    // -----------------
    // Alchemical imbuer
    // -----------------

    const BREWER_PREFIX = 'perpendicular:brewer/';
})