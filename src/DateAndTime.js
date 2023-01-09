import { useState } from "react";
export default function DateAndTime(props) {
  const currDate = props.date;
  const [Time, setTime] = useState(currDate.toTimeString());
  const [date, setdate] = useState(currDate.toDateString());

  setInterval(() => {
    setTime(new Date().toTimeString());
  }, 1000);

  const handleClick = () => {
    const currDate = new Date();
    setdate(currDate.toDateString());
  };
  return (
    <>
      <h2>Current date is {date}</h2>
      <h3>Current time is {Time}</h3>
      <button onClick={handleClick}>Update Date</button>
    </>
  );
}
