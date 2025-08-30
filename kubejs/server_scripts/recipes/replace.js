// priority: 90

ServerEvents.recipes(event => {
  const replaceEverywhere = (from, to) => {
    event.replaceInput({}, from, to)
    event.replaceOutput({}, from, to)
  };

  // -----------------
  // REPLACE REMOVED ITEMS
  // -----------------

  event.replaceInput({id: 'ae2:tools/network_tool'}, '#ae2:quartz_wrench', 'thermal:wrench')

});