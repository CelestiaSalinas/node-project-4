exports.seed = function(knex) {
  return knex("ingredients")
  .del()
  .then(function() {
      return knex("ingredients").insert([
          { name: "Pasta" }, //1
          { name: "Crushed Tomato" }, //2
          { name: "Hamburger meat" }, //3
          { name: "Basil" }, //4
          { name: "Italian Seasoning" }, //5
          { name: "Bay Leaves" }, //6
          { name: "Parsley" }, //7
          { name: "Garlic" }, //8
          { name: "Flour" }, //9
          { name: "Chopped Onions" }, //10
          { name: "Velveeta Cheese" }, //11
          { name: "Butter" }, //12
          { name: "Ground Turkey" }, //13
          { name: "Cream of Chicken" }, //14
          { name: "Chicken Broth" }, //15
          { name: "Green Bell Pepper" }, //16
          { name: "Mozzarela Cheese" }, //17
          { name: "Milk" } //18
      ])
  })
}