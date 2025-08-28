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

});