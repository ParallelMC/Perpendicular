// priority: 100

ServerEvents.tags('block', event => {
  // Allow Sully's Mod amber to prevent Alex's Caves dinosaurs from hatching
  event.add('alexscaves:stops_dinosaur_eggs', 'sullysmod:amber');
});