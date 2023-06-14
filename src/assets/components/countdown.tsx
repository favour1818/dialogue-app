function Countdown() {
  return (
    <form action="">
      <label htmlFor="months">Months</label>
      <select name="months" id="months">
        <option value="january">January</option>
        <option value="Febuary">Febuary</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
      <label htmlFor="years">Years</label>
      <input type="number" id="years" min={2023} placeholder="2023"/>
      <label htmlFor="day">Day</label>
      <input type="number" id="day" min={1} max={30} placeholder="1"/>
    </form>
  );
}

export default Countdown;
