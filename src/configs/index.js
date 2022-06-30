import { createArray } from "../helpers/index";
import { allWeekDays } from "./allWeekDays";
import { allMonths } from "./allMonths";
import { timeValues } from "./timeValues";

export const appConfig = {
  allWeekDays,
  allMonths,
  timeValues,
  counter: {
    minutes: 0,
    hours: 0,
    day: {
      number: 1,
      name: "monday",
    },
    month: {
      number: 1,
      name: "september",
    },
    year: 0,
  },
  enemies: [],

  players: [],
  trade: {},
  items: {
    weapons: {
      items: [
        {
          name: "sword",
          description: "low level common sword",
          rarity: 1,
          weight: 1,
          phisicalDmg: 1,
          magicDmg: 1,
          price: 1,
          effects: {},
        },
      ],
    },
  },
};

// export const minutes = createArray(60);
// export const hours = createArray(24);

// const weathers = {
//   rain: { effects: ["wet"], icon: "icon" },
//   snow: { rain: { effects: [""], icon: "icon" } },
// };

// const climat = { savanna: ["rain", "sunny"], tundra: ["snow"] };

// const randomWeather = (climat) => {
//   const randomW = "rain"
//   weathers[randomW]
// }

// randomWeather(climat.savanna)
