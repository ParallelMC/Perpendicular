// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Fluid extractor
    // -----------------

    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.01,
        "defaultRecipe": false,
        "input": {
            "item": "thermal:rubberwood_log"
        },
        "output": "{Amount:5,FluidName:\"industrialforegoing:latex\"}",
        "result": "thermal:stripped_rubberwood_log"
    }).id(`perpendicular:fluid_extractor/rubberwood`);

})