// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Custom compacting
    // -----------------

    function compacting(higher, higherCount, lower, lowerCount, id) {
        event.custom({
            "type": "functionalstorage:custom_compacting",
            "higher_input": {
                "item": higher,
                "count": higherCount
            },
            "lower_input": {
                "item": lower,
                "count": lowerCount
            }
        }).id(`perpendicular:custom_compacting/${id}`);
    }

    // Storage blocks
    compacting('rats:block_of_cheese', 1, 'rats:cheese', 4, 'cheese')
    compacting('thermal:charcoal_block', 1, 'minecraft:charcoal', 9, 'charcoal')
    compacting('minecraft:charcoal', 1, 'spelunkery:charcoal_lump', 8, 'charcoal_lump')

})