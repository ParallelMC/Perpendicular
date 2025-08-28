// priority: 0

// Hide items
JEIEvents.hideItems(event => {
  event.hide([

    // Wrenches
    '#ae2:quartz_wrench',
    'enderio:yeta_wrench',
    'etcetera:wrench',

    // Cheeses
    'tconstruct:cheese_ingot',
    'tconstruct:cheese_block',
    'refurbished_furniture:cheese',

    // Flour
    'create:wheat_flour',
    'enderio:flour',

    // Dough
    'create:dough',
    'refurbished_furniture:dough',

    // Sliced bread
    'refurbished_furniture:bread_slice',
    'mynethersdelight:slices_of_bread',

    // Toast
    'refurbished_furniture:toast',
    'mynethersdelight:toasts',

    // Salt
    'refurbished_furniture:sea_salt',

    // Knives
    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'refurbished_furniture:knife',

  ]);
});

// Add items
JEIEvents.addItems(event => {
  event.add([
  ]);
});

// Hide recipe categories
JEIEvents.removeCategories(event => {
  event.remove('refurbished_furniture:cutting_board_slicing')
  event.remove('meadow:woodcutting')
})