// priority: 10

ServerEvents.recipes(event => {

    const CUTTING_PREFIX = 'perpendicular:cutting/';

    // -----------------
    // Cutting
    // -----------------

    // Replace Crayfish cutting board
    event.recipes.farmersdelight.cutting('refurbished_furniture:cooked_vegetable_pizza', '#forge:tools/knives', ['6x refurbished_furniture:vegetable_pizza_slice']).id(`${CUTTING_PREFIX}vegetable_pizza_slice`);
    event.recipes.farmersdelight.cutting('refurbished_furniture:cooked_meatlovers_pizza', '#forge:tools/knives', ['6x refurbished_furniture:meatlovers_pizza_slice']).id(`${CUTTING_PREFIX}meatlovers_pizza_slice`);

})