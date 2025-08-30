// priority: 10

ServerEvents.recipes(event => {

  const RECIPE_PREFIX = 'perpendicular:crafting/';

  // Storage blocks
  event.shapeless('4x farmersdelight:wheat_dough', 'alexscaves:dough_block').id(`${RECIPE_PREFIX}dough_from_block`);
  event.shapeless('9x minecraft:charcoal', 'thermal:charcoal_block').id(`${RECIPE_PREFIX}charcoal_from_block`);

  // Swap between cheese types
  event.shapeless('rats:cheese', 'meadow:piece_of_cheese').id(`${RECIPE_PREFIX}rats_cheese_from_meadow_cheese`);
  event.shapeless('meadow:piece_of_cheese', 'rats:cheese').id(`${RECIPE_PREFIX}meadow_cheese_from_rats_cheese`);

  // Swap between XP gem types (both worth 3 XP = 60 mB)
  event.shapeless('ars_nouveau:experience_gem', 'create:experience_nugget').id(`${RECIPE_PREFIX}xp_gem_from_nugget`);
  event.shapeless('create:experience_nugget', 'ars_nouveau:experience_gem',).id(`${RECIPE_PREFIX}xp_nugget_from_gem`);

  // Use dragon egg for elytra duplication
  event.shapeless(Item.of('minecraft:elytra', '{Damage:0}'), ['minecraft:dragon_egg', 'minecraft:elytra']).keepIngredient('minecraft:elytra').id(`${RECIPE_PREFIX}elytra_duplication`);
  
  // Milk
  event.shapeless('4x neapolitan:milk_bottle', ['minecraft:milk_bucket', '4x minecraft:glass_bottle']).replaceIngredient('neapolitan:milk_bucket', 'minecraft:bucket').id(`${RECIPE_PREFIX}milk_bottles_from_bucket`);
  event.shapeless('minecraft:milk_bucket', ['minecraft:bucket', '4x neapolitan:milk_bottle']).replaceIngredient('neapolitan:milk_bottle', 'minecraft:glass_bottle').id(`${RECIPE_PREFIX}milk_bucket_from_bottles`);

});
