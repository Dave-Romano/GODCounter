import React from "react";
import { useState, useEffect } from "react";
const Counter = () => {
  const [year, setYear] = useState(1);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [weekDay, setWeekDay] = useState("monday");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [dateInput, setDateInput] = useState("");

  const reset = () => {
    setHours(0);
    setMinutes(0);
  };

  const incrementHours = (value) => {
    if (value + hours <= 23) {
      setHours(hours + value);
    }
    if (value + hours >= 24) {
      setHours(value + hours - 24);
    }
  };

  const incrementMinutes = (value) => {
    if (value + minutes <= 59) {
      setMinutes(minutes + value);
    }
    if (value + minutes >= 60) {
      setMinutes(minutes + value - 60);
      incrementHours(1);
    }
  };

  const dateChange = (e) => {
    e.preventDefault();

    // const arr = dateInput.split(".");
    // const newArr = [];
    // for (let el of arr) {
    //   newArr.push(Number(el));
    // }
    // setDay(newArr[0]);
    // setMonth(newArr[1]);
    // setYear(newArr[2]);
    // setHours(newArr[3]);
    // setMinutes(newArr[4]);
  };

  return (
    <>
      <p>Год: {year}</p>
      <p>Месяц {month}</p>
      <p>
        {day} день, {weekDay}
      </p>
      <p>
        Дата:{day}.{month}.{year}
      </p>
      <p>
        {hours}:{minutes}
      </p>
      <form
        onSubmit={() => {
          dateChange();
        }}
      >
        <label htmlFor="">Change date</label>
        <br />
        <input
          title="Пожалуйста, впишите данные в формате: ДЕНЬ.МЕСЯЦ.ГОД.ЧАС.МИНУТА"
          placeholder="26.5.2010.12.3"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          required
        ></input>
        <button type="button">APPLY</button>
      </form>

      <button onClick={() => incrementMinutes(1)}>+1 min</button>
      <button onClick={() => incrementMinutes(2)}>+2 min </button>
      <button onClick={() => incrementMinutes(5)}>+5 min</button>
      <button onClick={() => incrementMinutes(10)}>+10 min</button>
      <button onClick={() => incrementMinutes(15)}>+15 min</button>
      <button onClick={() => incrementMinutes(30)}>+30 min</button>
      <button onClick={() => incrementHours(1)}>+1 hour</button>
      <button onClick={() => incrementHours(2)}>+2 hours</button>
      <button onClick={() => incrementHours(3)}>+3 hours</button>
      <button onClick={() => incrementHours(6)}>+6 hours</button>
      <button onClick={() => incrementHours(12)}>+12 hours</button>
      <button onClick={() => incrementHours(24)}>+24 hours</button>
      <button onClick={() => reset()}>RESET</button>
    </>
  );
};

export default Counter;
