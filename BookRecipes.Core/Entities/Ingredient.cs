using System;
using System.Collections.Generic;
using BookRecipes.SharedKernel;

namespace BookRecipes.Core.Entities
{
    public class Ingredient : BaseEntity
    {
        public string Name { get; set; }
        public IEnumerable<IngredientsInRecipe> IngredientsInRecipe { get; set; }
        public Ingredient() { }
        public Ingredient(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentNullException(nameof(name), "Имя ингредиента не должно быть пустым.");
            }
            Name = name;
        }
    }
}
