// priority: 100

ServerEvents.tags("worldgen/biome", (event) => {
  // Ice maze on Glacio
  event.add("aquamirae:ice_maze", "ad_astra:glacio_ice_peaks")

  // Prevent Ad Astra oil well from spawning
  event.removeAll("ad_astra:has_structure/oil_well")

  // Prevent PneumaticCraft oil lakes from spawning
  event.removeAll("pneumaticcraft:has_surface_oil_lakes")
  event.removeAll("pneumaticcraft:has_underground_oil_lakes")
});