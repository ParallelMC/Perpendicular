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
    'alexscaves:primordial_pants'
  ]);

  // Allow protection from the hazmat suit on Venus
  event.add('ad_astra:heat_resistant_armor', [
    'alexscaves:hazmat_mask',
    'alexscaves:hazmat_chestplate',
    'alexscaves:hazmat_leggings',
    'alexscaves:hazmat_boots'
  ]);

  // Morph-O-Tool wrench-like items
  event.add('perpendicular:morph_tools', [
    'ad_astra:wrench',
    'ae2:memory_card',
    'ae2:network_tool',
    'ars_nouveau:dominion_wand',
    'betterp2p:advanced_memory_card',
    'botania:dreamwood_wand',
    'botania:obedience_stick',
    'botania:twig_wand',
    'create:wrench',
    'crossroads:omnimeter',
    'essentials:circuit_wrench',
    'essentials:linking_tool',
    'essentials:wrench',
    'fluxnetworks:flux_configurator',
    'functionalstorage:configuration_tool',
    'functionalstorage:linking_tool',
    'pneumaticcraft:logistics_configurator',
    'pneumaticcraft:pneumatic_wrench',
    'rats:cheese_stick',
    'rats:patrol_staff',
    'rats:radius_stick',
    'refurbished_furniture:wrench',
    'supplementaries:wrench',
    'thermal:wrench'
  ]);

  // Unify cheeses
  event.add('forge:cheese', [
    'ad_astra:cheese',
    'brewinandchewin:flaxen_cheese_wedge',
    'brewinandchewin:scarlet_cheese_wedge',
    'netherexp:glowcheese',
    'rats:blue_cheese',
    'rats:nether_cheese'
  ]);

  event.add('brewinandchewin:cheese_wedges', 'forge:cheese');

  // Unify knives
  event.add('farmersdelight:tools/knives', 'aquaculture:neptunium_fillet_knife');

  // Unify gold bars
  event.add('tconstuct:casts', 'caverns_and_chasms:golden_bars');
  event.add('tconstuct:casts/empty/table', 'caverns_and_chasms:golden_bars');

  // Shared recipes for plastic
  event.add('perpendicular:plastic', [
    'pneumaticcraft:plastic',
    'industrialforegoing:plastic'
  ]);

  // Rock salt blocks
  event.add('perpendicular:rock_salt_blocks', [
    'galosphere:pink_salt',
    'galosphere:rose_pink_salt',
    'galosphere:pastel_pink_salt'
  ]);

  // Salt
  event.add('meadow:salt', 'crossroads:dust_salt');
  event.add('forge:dusts/salt', 'spelunkery:salt');

  // Uranium ore tag
  event.add('forge:ores/uranium', 'alexscaves:radrock_uranium_ore');
});