function StepThree({ state, dispatch }) {
  const { name, email, username, password } = state.formData;

  return (
    <div>
      <h3>Review Details</h3>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Password:</strong> {password}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>

      <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
        Submit
      </button>
    </div>
  );
}

export default StepThree;
