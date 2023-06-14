import Ice1 from '../img/i1.png'
import Fruit1 from '../img/f1.png'
import Sea2 from '../img/fi2.png'
import Meat1 from '../img/s6.png'

export const heroData = [
  {id:1, name: 'Icecreame', description:"Chocolate & Vanilla", price:'$ 5.25', imageSrc: Ice1},
  {id:2, name: 'Berries', description:"Fresh Strawberries", price:'$ 4.50', imageSrc: Fruit1},
  {id:3, name: 'Seafood & Fish', description:"Fresh shells", price:'$ 9.40', imageSrc: Sea2},
  {id:4, name: 'Meat', description:"Beef salad", price:'$ 8.20', imageSrc: Meat1},
  // {id:5, name: 'Salads', description:"Chicken salad", price:'$ 18.75', imageSrc: Meat1},
]

export const categories = [
  {
    id: 1,
    name: "Beef & chiken",
    urlParamName: "meat",
  },
  {
    id: 2,
    name: "Salads",
    urlParamName: "salad",
  },
  {
    id: 3,
    name: "Rice and soups",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Seafood",
    urlParamName: "seafood",
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
];
