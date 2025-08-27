// priority: 10

ServerEvents.recipes(event => {

  // Filled eccentric tome
  const ECCENTRIC_TOME_DATA = '{"eccentrictome:mods":{ad_astra:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"ad_astra:astrodux"}}},advancedperipherals:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}}},ae2:{0:{Count:1b,id:"ae2:guide"}},alexscaves:{0:{Count:1b,id:"alexscaves:cave_book"}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},botania:{0:{Count:1b,id:"botania:lexicon"}},eidolon:{0:{Count:1b,id:"eidolon:codex"}},essentials:{0:{Count:1b,id:"essentials:guide_book",tag:{"patchouli:book":"essentials:manual"}}},industrialforegoing:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}}},irons_spellbooks:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},iwannaskate:{0:{Count:1b,id:"iwannaskate:skating_manual"}},pneumaticcraft:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}}},productivebees:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"productivebees:guide"}}},solonion:{0:{Count:1b,id:"solonion:food_book"}},tconstruct:{0:{Count:1b,id:"tconstruct:fantastic_foundry"},1:{Count:1b,id:"tconstruct:materials_and_you"},2:{Count:1b,id:"tconstruct:puny_smelting"},3:{Count:1b,id:"tconstruct:mighty_smelting"},4:{Count:1b,id:"tconstruct:encyclopedia",tag:{mantle:{book:{current_page:"fluid_effects.tcintegrations.molten_neptunium"}}}},5:{Count:1b,id:"tconstruct:tinkers_gadgetry"}},thermal:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}},unusualprehistory:{0:{Count:1b,id:"unusualprehistory:encyclopedia"}}},"eccentrictome:version":1}';

  event.shaped(Item.of('eccentrictome:tome', ECCENTRIC_TOME_DATA), [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'minecraft:lapis_lazuli',
    B: 'minecraft:amethyst_shard',
    C: 'thermal:cinnabar',
    D: 'minecraft:diamond',
    E: '#forge:bookshelves',
    F: 'thermal:niter',
    G: 'minecraft:emerald',
    H: 'thermal:sulfur',
    I: 'minecraft:quartz'
  }).id(`perpendicular:filled_eccentric_tome`);
  
});
