// priority: 10
ServerEvents.recipes(event => {

    // -----------------
    // SAG Mill
    // -----------------

    function sagMill(input, outputs, energy, recipeID) {
        let recipe = {
            "type": "enderio:sag_milling",
            "energy": energy,
            "input": Ingredient.of(input).toJson(),
            "outputs": []
        };

        outputs.forEach(output => {
            let results = {
                "item": {}
            }

            if (output.tag) {
                results.item.tag = output.tag;
            } else {
                results.item.item = output.item;
            }

            results.item.count = output.count || 1;

            if (output.chance && output.chance != 1) {
                results.chance = output.chance;
                results.optional = true;
            } else {
                results.chance = 1;
                results.optional = false;
            }

            recipe.outputs.push(results);
        });

        event.custom(recipe).id(`perpendicular:sag_milling/${recipeID}`)
    }

    // Unify flour
    sagMill('#forge:crops/wheat', [{item: 'pneumaticcraft:wheat_flour'}, {item: 'minecraft:wheat_seeds', chance: 0.2}], 2400, 'wheat')

    // Salt
    sagMill('galosphere:pink_salt_shard', [{item: 'spelunkery:salt', count: 2}, {item: 'spelunkery:salt', chance: 0.75}], 2400, 'salt')

    // -----------------
    // Alloy Smelting
    // -----------------

    function alloySmelting(inputs, output, energy, xp, recipeID) {
        let recipe = {
            "type": "enderio:alloy_smelting",
            "energy": energy,
            "experience": xp,
            "inputs": [],
            "result": output
        };

        inputs.forEach(input => {
            let ingredients = {
                "ingredient": {}
            }
                        
            if (input.tag) {
                ingredients.ingredient.tag = input.tag;
            } else {
                ingredients.ingredient.item = input.item;
            }
            ingredients.count = input.count || 1;

            recipe.inputs.push(ingredients);
        });

        event.custom(recipe).id(`perpendicular:alloy_smelting/${recipeID}`)
    }

    // Unify flour
    alloySmelting([{item: 'pneumaticcraft:wheat_flour', count: 3}, {item: 'minecraft:egg'}], {item: 'enderio:cake_base', count: 2}, 2000, 0.3, 'cake_base')
    alloySmelting([{item: 'pneumaticcraft:wheat_flour'}, {item: 'minecraft:cocoa_beans'}], {item: 'minecraft:cookie', count: 8}, 2000, 0.3, 'cookie')

})