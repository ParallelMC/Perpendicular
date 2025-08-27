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

})
