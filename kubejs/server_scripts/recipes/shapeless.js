// priority: 10

ServerEvents.recipes(event => {

  const RECIPE_PREFIX = 'perpendicular:crafting/';

  // Storage blocks
  event.shapeless('4x farmersdelight:wheat_dough', 'alexscaves:dough_block').id(`${RECIPE_PREFIX}dough_from_block`);
  event.shapeless('9x minecraft:charcoal', 'thermal:charcoal_block').id(`${RECIPE_PREFIX}charcoal_from_block`);

  // Swap between cheese types
  event.shapeless('rats:cheese', 'meadow:piece_of_cheese').id(`${RECIPE_PREFIX}rats_cheese_from_meadow_cheese`);
  event.shapeless('meadow:piece_of_cheese', 'rats:cheese').id(`${RECIPE_PREFIX}meadow_cheese_from_rats_cheese`);
  
});
