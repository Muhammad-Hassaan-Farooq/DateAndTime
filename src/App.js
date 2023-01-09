import DateAndTime from "./DateAndTime";
function App() {
  const date = new Date();
  return (
    <div>
      <DateAndTime date={date} />
    </div>
  );
}
export default App;
