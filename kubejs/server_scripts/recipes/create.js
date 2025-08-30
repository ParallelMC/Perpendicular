// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Mixing
    // -----------------
    const MIXING_PREFIX = 'perpendicular:mixing/';

    // Memory essence from items
    event.recipes.create.mixing(Fluid.of('pneumaticcraft:memory_essence', 540), 'create:experience_block').heated().id(`${MIXING_PREFIX}memory_essence_from_experience_block`);
    event.recipes.create.mixing(Fluid.of('pneumaticcraft:memory_essence', 60), 'ars_nouveau:experience_gem').heated().id(`${MIXING_PREFIX}memory_essence_from_experience_gem`);
    event.recipes.create.mixing(Fluid.of('pneumaticcraft:memory_essence', 240), 'ars_nouveau:greater_experience_gem').heated().id(`${MIXING_PREFIX}memory_essence_from_greater_experience_gem`);

    // Memory essence from other XP fluids
    event.recipes.create.mixing(Fluid.of('pneumaticcraft:memory_essence', 1000), Fluid.of('enderio:xp_juice', 1000)).id(`${MIXING_PREFIX}memory_essence_from_xp_juice`);
    event.recipes.create.mixing(Fluid.of('pneumaticcraft:memory_essence', 1000), Fluid.of('sophisticatedcore:xp_still', 1000)).id(`${MIXING_PREFIX}memory_essence_from_experience`);
    event.recipes.create.mixing(Fluid.of('pneumaticcraft:memory_essence', 1000), Fluid.of('cofh_core:experience', 1000)).id(`${MIXING_PREFIX}memory_essence_from_essence_of_knowledge`);
    event.recipes.create.mixing(Fluid.of('pneumaticcraft:memory_essence', 1000), Fluid.of('industrialforegoing:essence', 1000)).id(`${MIXING_PREFIX}memory_essence_from_essence`);

    // Steel
    event.recipes.create.mixing('thermal:steel_ingot', ['minecraft:iron_ingot', '#crossroads:blast_furnace_carbon']).heated().id(`${MIXING_PREFIX}steel`);
})