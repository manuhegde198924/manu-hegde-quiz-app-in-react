import { useGlobalContext } from "../Context/Context";
const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h1 className="welcomemessage">HEY,WELCOME,USERS</h1>
          <h1 className="letbuild">LET'S BUILD A QUIZ,USING-REACT</h1>
          <div className="form-control">
            <label htmlFor="amount">NUMBER OF QUESTIONS</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">CATEGORY</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">SPORTS</option>
              <option value="history">HISTORY</option>
              <option value="politics">POLITICS</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">DIFFICULTY</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              onChange={handleChange}
              value={quiz.difficulty}
            >
              <option value="ease">EASY</option>
              <option value="medium">MEDIUM</option>
              <option value="hard">DIFFICULT</option>
            </select>
          </div>
          {error && (
            <p className="error">can't generates questions , pls try again</p>
          )}
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            start
          </button>
        </form>
        <h6 className="from">small stuff in react from manoj hegde</h6>
      </section>
    </main>
  );
};
export default SetupForm;
