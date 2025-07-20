let services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  // Метод для получения числового значения цены
  parsePrice: function(str) {
    return parseInt(str); // Из "60 грн" получаем 60
  },

  // Метод для подсчета общей стоимости
  price: function() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        total += this.parsePrice(this[key]);
      }
    }
    return total + " грн";
  },

  // Метод для нахождения минимальной цены
  minPrice: function() {
    let min = null;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let current = this.parsePrice(this[key]);
        if (min === null || current < min) {
          min = current;
        }
      }
    }
    return min + " грн";
  },

  // Метод для нахождения максимальной цены
  maxPrice: function() {
    let max = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let current = this.parsePrice(this[key]);
        if (current > max) {
          max = current;
        }
      }
    }
    return max + " грн";
  }
};

// Пример использования:
console.log("Общая стоимость:", services.price());
console.log("Минимальная цена:", services.minPrice());
console.log("Максимальная цена:", services.maxPrice());