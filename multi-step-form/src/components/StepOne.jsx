function StepOne({ state, dispatch }) {
  const { name, email } = state.formData;

  return (
    <div>
      <h3>Personal Details</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value,
          })
        }
      />

      <button
        disabled={!name || !email}
        onClick={() => dispatch({ type: "NEXT_STEP" })}
      >
        Next
      </button>
    </div>
  );
}

export default StepOne;
