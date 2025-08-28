// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Casting
    // -----------------

    function castingWithoutTemplate(fluidTag, fluidAmount, output, coolTime, id) {
        event.custom({
            "type": "tconstruct:casting_table",
            "cooling_time": coolTime,
            "fluid": {
                "amount": fluidAmount,
                "tag": fluidTag
            },
            "result": output
        }).id(`perpendicular:smeltery/casting/${id}`);
    }

    // Gold bars
    castingWithoutTemplate('forge:molten_gold', 30, 'caverns_and_chasms:golden_bars', 33, 'golden_bars')

    // -----------------
    // Melting
    // -----------------

    function melting(input, fluidTag, fluidAmount, temperature, time, id) {
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": input
            },
            "result": {
                "amount": fluidAmount,
                "tag": fluidTag
            },
            "temperature": temperature,
            "time": time
        }).id(`perpendicular:smeltery/melting/${id}`);
    }

    // Gold bars
    melting('caverns_and_chasms:golden_bars', 'forge:molten_gold', 30, 700, 33, 'molten_gold_from_golden_bars')

})