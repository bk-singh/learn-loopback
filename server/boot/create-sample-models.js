'use strict';
var fs = require('fs');
module.exports = function(app) {
  app.dataSources.db.automigrate('Category', function(err) {
    if (err) throw err;
    let category_data = [
      {
        "name": "Electronics",
        "description": "Electronics Items",
        "type": "global"
      },
      {
        "name": "Fashion",
        "description": "Fashion Items",
        "type": "global"
      },
      {
        "name": "Furniture",
        "description": "Furniture Items",
        "type": "global"
      },
      {
        "name": "Home Decors",
        "description": "Home Decors Items",
        "type": "global"
      },
      {
        "name": "Automobiles",
        "description": "Automobiles Items",
        "type": "global"
      }
    ];
    let sub_category_data = [
      {
      "name": "TV",
      "description": "TV Items",
      "parent-type": "Electronics",
      "type": "global",
      "categoryId": 1
    },
    {
      "name": "AC",
      "description": "AC Items",
      "parent-type": "Electronics",
      "type": "global",
      "categoryId": 1
    },
    {
      "name": "Mobiles",
      "description": "Mobiles Items",
      "parent-type": "Electronics",
      "type": "global",
      "categoryId": 1
    },
    {
      "name": "Laptops",
      "description": "Laptops Items",
      "parent-type": "Electronics",
      "type": "global",
      "categoryId": 1
    },
    {
      "name": "Shirts",
      "description": "Shirts Items",
      "parent-type": "Fashion",
      "type": "global",
      "categoryId": 2
    },
    {
      "name": "Trousers",
      "description": "Trousers Items",
      "parent-type": "Fashion",
      "type": "global",
      "categoryId": 2
    },
    {
      "name": "Jackets",
      "description": "Jackets Items",
      "parent-type": "Fashion",
      "type": "global",
      "categoryId": 2
    },
    {
      "name": "Kurta",
      "description": "Kurta Items",
      "parent-type": "Fashion",
      "type": "global",
      "categoryId": 2
    },
    {
      "name": "Bed",
      "description": "Bed Items",
      "parent-type": "Furniture",
      "type": "global",
      "categoryId": 3
    },
    {
      "name": "Sofa",
      "description": "Sofa Items",
      "parent-type": "Furniture",
      "type": "global",
      "categoryId": 3
    },
    {
      "name": "Chair",
      "description": "Chair Items",
      "parent-type": "Furniture",
      "type": "global",
      "categoryId": 3
    },
    {
      "name": "Wardrobes",
      "description": "Wardrobes Items",
      "parent-type": "Furniture",
      "type": "global",
      "categoryId": 3
    },
    {
      "name": "Wall clock",
      "description": "Wall clock Items",
      "parent-type": "Home Decors",
      "type": "global",
      "categoryId": 4
    },
    {
      "name": "Wallpapers",
      "description": "Wallpapers Items",
      "parent-type": "Home Decors",
      "type": "global",
      "categoryId": 4
    },
    {
      "name": "Curtains",
      "description": "Curtains Items",
      "parent-type": "Home Decors",
      "type": "global",
      "categoryId": 4
    },
    {
      "name": "Engine Oil",
      "description": "Engine Oil Items",
      "parent-type": "Automobiles",
      "type": "global",
      "categoryId": 5
    },
    {
      "name": "Car Wax",
      "description": "Car Wax Items",
      "parent-type": "Automobiles",
      "type": "global",
      "categoryId": 5
    },
    {
      "name": "Bike Lock",
      "description": "Bike Lock Items",
      "parent-type": "Automobiles",
      "type": "global",
      "categoryId": 5
    },
    {
      "name": "Headgear",
      "description": "Headgear Items",
      "parent-type": "Automobiles",
      "type": "global",
      "categoryId": 5
    }
  ];
    app.models.Category.create(category_data, function(err, category) {
      if (err) throw err;
      app.models.Subcategory.create(sub_category_data, function(err, sub_category) {
        if (err) throw err;
      });
    });
  });
};
