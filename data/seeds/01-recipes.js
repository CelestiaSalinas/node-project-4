exports.seed = function(knex) {
  return knex("recipes")
  .del()
  .then(function() {
      return knex("recipes").insert([
          { name: "Spaghetti", author: "Deborah Butler" },
          { name: "Macaroni", author: "Moria Johnson" },
          { name: "Turkey and Peppers", author: "Moria Johnson" }
      ])
  })
}