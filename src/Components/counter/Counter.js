// import React from "react";
// import { useState, useEffect } from "react";
import { CounterStyled } from "./CounterStyled";
import Weather from "../common/Weather";
import SetDate from "./setDate/SetDate";
import TimeOperator from "./timeOperator/TimeOperator";
import store from "../../redux/store";
import { myAction } from "../../redux/actions";

// console.log(store);

console.log("myStore.getState:", store.getState());
console.log("myStore.dispatch(myAction):", store.dispatch(myAction));

// // ++1. Сохранение данных в local Storage
// // 2. Прописать карточку игрока
// // 3. Добавить эффекты
// // 4. Добавить погоду
// // 5. Разбить всё на компоненты
// // 6. Сделать код адекватным

const Counter = () => {
  return (
    <CounterStyled>
      <div>
        <p className="year"></p>
        <p className="yearName"></p>
        <Weather />
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
        <SetDate />
      </div>
      <TimeOperator />
      <div></div>
    </CounterStyled>
  );
};

export default Counter;

// const Counter = () => {
//   const [year, setYear] = useState(1);
//   const [month, setMonth] = useState(1);
//   const [monthName, setMonthName] = useState("Зори (январь)");
//   const [day, setDay] = useState(1);
//   const [weekDay, setWeekDay] = useState("monday");
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [dateInput, setDateInput] = useState("");
//   const [currentWeather, setcurrentWeather] = useState("");

//   useEffect(() => {
//     const parsedYear = JSON.parse(localStorage.getItem("year"));
//     const parsedMonth = JSON.parse(localStorage.getItem("month"));
//     const parsedDay = JSON.parse(localStorage.getItem("day"));
//     const parsedHour = JSON.parse(localStorage.getItem("hour"));
//     const parsedMinute = JSON.parse(localStorage.getItem("minute"));
//     setYear(parsedYear);
//     setMonth(parsedMonth);
//     setDay(parsedDay);
//     setHours(parsedHour);
//     setMinutes(parsedMinute);
//   }, []);

//   useEffect(() => {
//     if (day >= 29) {
//       setDay(1);
//       setMonth(month + 1);
//     }
//     if (month >= 13) {
//       setYear(year + 1);
//       setMonth(1);
//     }

//     localStorage.setItem("day", JSON.stringify(day));
//     localStorage.setItem("month", JSON.stringify(month));
//     localStorage.setItem("year", JSON.stringify(year));
//     localStorage.setItem("hour", JSON.stringify(hours));
//     localStorage.setItem("minute", JSON.stringify(minutes));
//   }, [day, month, year, hours, minutes]);

//   useEffect(() => {
//     switch (month) {
//       case 1:
//         setMonthName("Зори (январь)");
//         break;
//       case 2:
//         setMonthName("Солнца (февраль)");
//         break;
//       case 3:
//         setMonthName("Вод (март)");
//         break;
//       case 4:
//         setMonthName("Земли (апрель)");
//         break;
//       case 5:
//         setMonthName("Зерна (май)");
//         break;
//       case 6:
//         setMonthName("Равновесия (июнь)");
//         break;
//       case 7:
//         setMonthName("Огня (июль)");
//         break;
//       case 8:
//         setMonthName("Плодородия (август)");
//         break;
//       case 9:
//         setMonthName("Благодати (сентябрь)");
//         break;
//       case 10:
//         setMonthName("Ветров (октябрь)");
//         break;
//       case 11:
//         setMonthName("Холодов (ноябрь)");
//         break;
//       case 12:
//         setMonthName("Тьмы (декабрь)");
//         break;
//       default:
//         break;
//     }
//   }, [month]);

//   useEffect(() => {
//     switch (day) {
//       case 1:
//       case 8:
//       case 15:
//       case 22:
//         setWeekDay("понедельник");
//         alert("Наступил понедельник");
//         break;
//       case 2:
//       case 9:
//       case 16:
//       case 23:
//         setWeekDay("вторник");
//         alert("Наступил вторник");
//         break;
//       case 3:
//       case 10:
//       case 17:
//       case 24:
//         setWeekDay("среда");
//         alert("Наступила среда");
//         break;
//       case 4:
//       case 11:
//       case 18:
//       case 25:
//         setWeekDay("четверг");
//         alert("Наступил четверг");
//         break;
//       case 5:
//       case 12:
//       case 19:
//       case 26:
//         setWeekDay("пятница");
//         alert("Наступила пятница");
//         break;
//       case 6:
//       case 13:
//       case 20:
//       case 27:
//         setWeekDay("суббота");
//         alert("Наступила суббота");
//         break;
//       case 7:
//       case 14:
//       case 21:
//       case 28:
//         setWeekDay("воскресенье");
//         alert("Наступило воскресенье");
//         break;

//       default:
//         break;
//     }
//   }, [day]);

//   const reset = () => {
//     setHours(0);
//     setMinutes(0);
//   };

//   const incrementHours = (value) => {
//     if (value + hours <= 23) {
//       setHours(hours + value);
//     }
//     if (value + hours >= 24) {
//       setHours(value + hours - 24);
//       setDay(day + 1);
//     }
//   };

//   const incrementMinutes = (value) => {
//     if (value + minutes <= 59) {
//       setMinutes(minutes + value);
//     }
//     if (value + minutes >= 60) {
//       setMinutes(minutes + value - 60);
//       incrementHours(1);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const arr = dateInput.split(".");
//     const newArr = [];
//     for (let el of arr) {
//       newArr.push(Number(el));
//     }
//     setDay(newArr[0]);
//     setMonth(newArr[1]);
//     setYear(newArr[2]);
//     setHours(newArr[3]);
//     setMinutes(newArr[4]);

//     // 10.10.2020.12.30
//   };

//   return (
//     <>
//       <p>{year} Год</p>
//       <p>
//         {month} Месяц {monthName}
//       </p>
//       <p>
//         {day} день, {weekDay}
//       </p>
//       <br />
//       <p>
//         Дата:{day}.{month}.{year}
//       </p>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">Change date</label>
//         <br />
//         <input
//           title="Пожалуйста, впишите данные в формате: ДЕНЬ.МЕСЯЦ.ГОД.ЧАС.МИНУТА"
//           placeholder="26.5.2010.12.3"
//           value={dateInput}
//           onChange={(e) => setDateInput(e.target.value)}
//           required
//         ></input>
//         <button type="submit">APPLY</button>
//       </form>
//       <br />
//       <p>
//         {hours}:{minutes}
//       </p>
//       <button onClick={() => incrementMinutes(1)}>+1 min</button>
//       <button onClick={() => incrementMinutes(2)}>+2 min </button>
//       <button onClick={() => incrementMinutes(5)}>+5 min</button>
//       <button onClick={() => incrementMinutes(10)}>+10 min</button>
//       <button onClick={() => incrementMinutes(15)}>+15 min</button>
//       <button onClick={() => incrementMinutes(30)}>+30 min</button>
//       <br />
//       <button onClick={() => incrementHours(1)}>+1 hour</button>
//       <button onClick={() => incrementHours(2)}>+2 hours</button>
//       <button onClick={() => incrementHours(3)}>+3 hours</button>
//       <button onClick={() => incrementHours(6)}>+6 hours</button>
//       <button onClick={() => incrementHours(12)}>+12 hours</button>
//       <button onClick={() => incrementHours(24)}>+24 hours</button>
//       <br />
//       <button onClick={() => reset()}>RESET</button>
//       <br />
//       <br />
//       <button>add player</button>
//       <ul>
//         <li>
//           <label className="Name">Leo</label>
//           <ul className="Effects"></ul>
//           <button className="Sleep"></button>
//           <button className="Unactive"></button>
//           <p className="HP"></p>
//           <p className="OM"></p>
//           <p className="SN"></p>
//           <p className="ST"></p>
//           <p className="PArm"></p>
//           <p className="MArm"></p>
//           <p className="Fatigue"></p>
//           <button className="FreezeFatigue"></button>
//           <p className="Thirst"></p>
//           <button className="FreezeThirst"></button>
//           <p className="Hunger"></p>
//           <button className="FreezeHunger"></button>
//         </li>
//         <li>
//           <label className="Name">Jake</label>
//           <ul className="Effects"></ul>
//           <button className="Sleep"></button>
//           <button className="Unactive"></button>
//           <p className="HP"></p>
//           <p className="OM"></p>
//           <p className="SN"></p>
//           <p className="ST"></p>
//           <p className="PArm"></p>
//           <p className="MArm"></p>
//           <p className="Fatigue"></p>
//           <button className="FreezeFatigue"></button>
//           <p className="Thirst"></p>
//           <button className="FreezeThirst"></button>
//           <p className="Hunger"></p>
//           <button className="FreezeHunger"></button>
//         </li>
//         <li>
//           <label className="Name">Iuda</label>
//           <ul className="Effects"></ul>
//           <button className="Sleep"></button>
//           <button className="Unactive"></button>
//           <p className="HP"></p>
//           <p className="OM"></p>
//           <p className="SN"></p>
//           <p className="ST"></p>
//           <p className="PArm"></p>
//           <p className="MArm"></p>
//           <p className="Fatigue"></p>
//           <button className="FreezeFatigue"></button>
//           <p className="Thirst"></p>
//           <button className="FreezeThirst"></button>
//           <p className="Hunger"></p>
//           <button className="FreezeHunger"></button>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default Counter;
