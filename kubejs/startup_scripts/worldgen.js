// priority: 100

WorldgenEvents.remove(event => {

  event.removeOres(props => {
    props.blocks = 
    [
      'caverns_and_chasms:silver_ore',
      'caverns_and_chasms:deepslate_silver_ore',
      'caverns_and_chasms:soul_silver_ore',
      'crossroads:ore_ruby',
      'crossroads:ore_tin',
      'crossroads:ore_tin_deep',
      'eidolon:lead_ore',
      'eidolon:deep_lead_ore',
      'eidolon:silver_ore',
      'eidolon:deep_silver_ore',
      'meadow:alpine_salt_ore',
      'galosphere:silver_ore',
      'galosphere:deepslate_silver_ore',
      'thermal:lead_ore',
      'thermal:deepslate_lead_ore',
      'thermal:ruby_ore',
      'thermal:deepslate_ruby_ore',
      'thermal:silver_ore',
      'thermal:deepslate_silver_ore'
    //   'tfmg:lead_ore',
    //   'tfmg:deepslate_lead_ore',
    //   'tfmg:nickel_ore',
    //   'tfmg:deepslate_nickel_ore'
    ]
  });
});

