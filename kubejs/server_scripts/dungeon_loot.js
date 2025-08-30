LootJS.modifiers((event) => {
    const DUNGEON_LOOT_TABLES = [
        'minecraft:chests/simple_dungeon',
        'minecraft:chests/jungle_temple',
        'minecraft:chests/abandoned_mineshaft',
        'minecraft:chests/bastion_treasure',
        'minecraft:chests/desert_pyramid',
        'minecraft:chests/end_city_treasure',
        'minecraft:chests/ruined_portal',
        'minecraft:chests/pillager_outpost',
        'minecraft:chests/nether_bridge',
        'minecraft:chests/stronghold_corridor',
        'minecraft:chests/stronghold_crossing',
        'minecraft:chests/stronghold_library',
        'minecraft:chests/woodland_mansion',
        'minecraft:chests/underwater_ruin_big',
        'minecraft:chests/underwater_ruin_small'
    ];

    DUNGEON_LOOT_TABLES.forEach((lootTable) => event.addLootTableModifier(lootTable).removeLoot([
        // Ars Nouveau
        'ars_nouveau:source_gem',
        'ars_nouveau:wilden_horn',
        'ars_nouveau:wilden_spike',
        'ars_nouveau:wilden_wing',
        'ars_nouveau:starbuncle_shards',
        'ars_nouveau:whirlisprig_shards',
        'ars_nouveau:drygmy_shard',
        'ars_nouveau:wixie_shards',
        'ars_nouveau:amplify_arrow',
        'ars_nouveau:split_arrow',
        'ars_nouveau:pierce_arrow',
        /ars_nouveau:ritual/,
        // Botania
        'botania:manasteel_ingot',
        'botania:lexicon',
        // Ender IO
        'enderio:dark_steel_ingot',
        'enderio:wood_gear',
        'enderio:dark_steel_sword',
        // Sophisticated Backpacks
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:copper_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:gold_backpack'
    ]));

    event.addLootTableModifier('minecraft:chests/simple_dungeon').pool((p) => {
        p.addLoot("supplementaries:rope");
        p.limitCount([2, 12]);
    })

    event.addLootTableModifier('minecraft:chests/abandoned_mineshaft').pool((p) => {
        p.addLoot("supplementaries:rope");
        p.limitCount([2, 12]);
    })
});