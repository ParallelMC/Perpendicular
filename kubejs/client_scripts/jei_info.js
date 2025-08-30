// priority: 0

JEIEvents.information(event => {
  event.addItem('morphtool:tool', [
      'A multitool that can hold wrench-like items from various mods.',
      'Craft the Morphing Tool with a supported item to combine them.',
      'The Tool will swap attachments automatically to match the block you are looking at.',
      'To keep an attachment from morphing back, hold the Tool in your offhand.',
      'You can also sneak + scroll to manually swap between attachments,',
      'To remove an attachment, transform the Tool into the item you want to remove, then press sneak + drop.',
      'Note that the Tool can only hold one item from each mod.',
    ])

  event.addItem('#perpendicular:morph_tools', [
    'Works with the Morphing Tool. Combine with the Tool in a crafting grid to add as an attachment.'
  ])

  event.addItem('eccentrictome:tome', [
    'A curious item that can hold guidebooks from various mods.',
    'Right-click to open the book selection screen.',
    'Left-click on air to revert a book back to the Tome.',
    'To remove a book, transform the Tome into the book you want to remove, then press sneak + drop.',
    'Best to separate out any books you intend to throw into strange portals.'
  ])

  event.addItem('minecraft:elytra', [
    'Can be duplicated by combining with a dragon egg.'
  ])

  event.addItem('spelunkery:parachute', [
    'When held in the inventory, automatically deploys when falling from a great height.',
    'Must be folded up after each use by holding Sneak + Right Click.'
  ])

  event.addItem('spelunkery:tuning_fork', [
    'Detects nearby geodes.'
  ])
  
  event.addItem('spelunkery:echo_fork', [
    'Highlights nearby mobs.'
  ])

  event.addItem('spelunkery:saltpeter', [
    'Obtained from a sluice by washing clay through water, or passively from spring water.'
  ])

  event.addItem('spelunkery:portal_fluid_bottle', [
    'Can be obtained by using an empty bottle on crying obsidian or a charged respawn anchor.',
    'Can be used in place of a flint and steel to ignite a nether portal.',
    'Drinking a bottle will teleport you to your spawnpoint, even across dimensions.'
  ])

  event.addItem('spelunkery:flint_hammer_and_chisel', [
    'Hold down right click to chisel a block out of the ground, as if with a Silk Touch pickaxe.'
  ])

  event.addItem('spelunkery:obsidian_hammer_and_chisel', [
    'Hold down right click to chisel a block out of the ground, as if with a Silk Touch pickaxe.'
  ])

  event.addItem('spelunkery:salt', [
    'Rock salt can be placed on the ground in the form of piles and lines.',
    'Salt lines are impassable to undead creatures, enabling you to trap them by encircling them with salt.',
    'Salt on the ground can be washed away by flowing water or rain.'
  ])

})
