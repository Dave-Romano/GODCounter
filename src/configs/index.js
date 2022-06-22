import { createArray } from "../helpers/index";

const stateProto = {
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

export const allmonths = [
  "Зори (январь)",
  "Солнца (февраль)",
  "Вод (март)",
  "Земли (апрель)",
  "Зерна (май)",
  "Равновесия (июнь)",
  "Огня (июль)",
  "Плодородия (август)",
  "Благодати (сентябрь)",
  "Ветров (октябрь)",
  "Холодов (ноябрь)",
  "Тьмы (декабрь)",
];

export const allWeekDays = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

export const minutes = createArray(60);
export const hours = createArray(24);
