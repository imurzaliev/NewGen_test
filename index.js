// Список курсов
let courses = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Germany', prices: [500, null] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const showAllPrices = (arr, range) => {
  for (const item of arr) {
    // check if required range is UP TO certain number
    if (range[0] === null) {
      if (item.prices[0] <= range[1]) {
        console.log(item.name);
      }
      // check if rr is FROM certain number
    } else if (range[1] === null) {
      if (
        item.prices[0] >= range[0] ||
        item.prices[1] === null ||
        item.prices[1] >= range[0]
      ) {
        console.log(item.name);
      }
      // run if both end are present
    } else {
      if (range[0] >= item.prices[0]) {
        console.log(item.name);
      }
    }
  }
};

showAllPrices(courses, requiredRange3);
