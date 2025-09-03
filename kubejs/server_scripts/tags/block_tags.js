// priority: 100

ServerEvents.tags('block', event => {
  // Allow Sully's Mod amber to prevent Alex's Caves dinosaurs from hatching
  event.add('alexscaves:stops_dinosaur_eggs', 'sullysmod:amber');

  // Ores with missing tag
  event.add('forge:ores', [
    'spelunkery:andesite_zinc_ore',
    'spelunkery:diorite_zinc_ore',
    'spelunkery:granite_zinc_ore',
    'aether_redux:veridium_ore',
    'unusualprehistory:stone_amber_ore',
    'unusualprehistory:deepslate_amber_ore',
    'unusualprehistory:stone_opal_ore',
    'unusualprehistory:deepslate_opal_ore',
    'unusualprehistory:stone_tar_fossil',
    'unusualprehistory:deepslate_tar_fossil',
    'unusualprehistory:permafrost_fossil'
  ]);

  // AE2 growth accelerator compat
  event.add('ae2:growth_acceleratable', 'opalescence:budding_opal');

});