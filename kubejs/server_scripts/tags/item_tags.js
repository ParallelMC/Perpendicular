// priority: 100

ServerEvents.tags('item', event => {
  // Make armor from Alex's Caves space biomes usable with the space suit
  // Still requires either the space suit chestplate or the space breathing enchantmen
  event.add('ad_astra:space_suit_items', [
    'alexscaves:hood_of_darkness',
    'alexscaves:cloak_of_darkness',
    'alexscaves:hazmat_mask',
    'alexscaves:hazmat_chestplate',
    'alexscaves:hazmat_leggings',
    'alexscaves:hazmat_boots',
    'alexscaves:primordial_helmet',
    'alexscaves:primordial_tunic',
    'alexscaves:primordial_pants',
  ]);

  // Allow protection from the hazmat suit on Venus
  event.add('ad_astra:heat_resistant_armor', [
    'alexscaves:hazmat_mask',
    'alexscaves:hazmat_chestplate',
    'alexscaves:hazmat_leggings',
    'alexscaves:hazmat_boots',
  ]);
});