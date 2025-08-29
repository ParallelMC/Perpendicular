// priority: 90

ServerEvents.recipes(event => {
  const replaceEverywhere = (from, to) => {
    event.replaceInput({}, from, to)
    event.replaceOutput({}, from, to)
  };

  // -----------------
  // UNIFICATION
  // -----------------

  // Wrenches
  event.replaceInput({id: 'ae2:tools/network_tool'}, '#ae2:quartz_wrench', 'thermal:wrench')
  
  // Cheeses
  event.replaceOutput({},  'rats:cheese', 'meadow:piece_of_cheese')
  
  // Flour
  replaceEverywhere('create:wheat_flour', 'pneumaticcraft:wheat_flour')

  // Dough
  replaceEverywhere('create:dough', 'farmersdelight:wheat_dough')

  // Sliced bread
  event.replaceOutput({id: 'mynethersdelight:cutting/slices_of_bread'}, 'mynethersdelight:slices_of_bread', 'some_assembly_required:bread_slice')

  // Toast
  event.replaceInput({}, 'refurbished_furniture:toast', 'some_assembly_required:toasted_bread_slice')

  // Storage blocks
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_apple_packing'}, 'thermal:apple_block', 'quark:apple_crate')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_apple_unpacking'}, 'thermal:apple_block', 'quark:apple_crate')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_potato_packing'}, 'thermal:potato_block', 'farmersdelight:potato_crate')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_potato_unpacking'}, 'thermal:potato_block', 'farmersdelight:potato_crate')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_carrot_packing'}, 'thermal:carrot_block', 'farmersdelight:carrot_crate')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_carrot_unpacking'}, 'thermal:carrot_block', 'farmersdelight:carrot_crate')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_beetroot_packing'}, 'thermal:beetroot_block', 'farmersdelight:beetroot_crate')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_beetroot_unpacking'}, 'thermal:beetroot_block', 'farmersdelight:beetroot_crate')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_sugar_cane_packing'}, 'thermal:sugar_cane_block', 'quark:sugar_cane_block')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_sugar_cane_unpacking'}, 'thermal:sugar_cane_block', 'quark:sugar_cane_block')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_gunpowder_packing'}, 'thermal:gunpowder_block', 'quark:gunpowder_sack')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_gunpowder_unpacking'}, 'thermal:gunpowder_block', 'quark:gunpowder_sack')

  // Amber
  event.replaceOutput({id: 'unusualprehistory:amber_block'}, 'unusualprehistory:amber_block', 'sullysmod:amber')
  replaceEverywhere('alexscaves:amber', 'sullysmod:amber')

  // Dragon loot
  event.replaceInput({id: 'irons_spellbooks:dragonskin_spell_book'}, 'irons_spellbooks:dragonskin', 'tconstruct:dragon_scale')

  // Misc natural blocks
  event.replaceOutput({id: 'bloomingnature:quicksand'}, 'bloomingnature:quicksand', 'biomeswevegone:quicksand')
  event.replaceInput({id: 'upgrade_aquatic:beachgrass_thatch'}, 'upgrade_aquatic:beachgrass', 'somemoreblocks:dune_grass')

  // Plastic bricks
  event.replaceInput({id: /pneumaticcraft:plastic_brick/}, 'pneumaticcraft:plastic', '#perpendicular:plastic')

  // Rope
  event.replaceInput({id: 'beautify:hanging_pot'}, 'beautify:rope', 'supplementaries:rope')
  replaceEverywhere('farmersdelight:rope', 'supplementaries:rope')

  // Items for removed mobs
  event.replaceInput({id: 'naturalist:shellstone'}, 'naturalist:snail_shell', 'autumnity:snail_shell_piece')
});