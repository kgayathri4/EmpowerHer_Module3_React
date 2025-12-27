import { useReducer } from "react";
import { formReducer, initialState } from "../reducer/formReducer";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { step, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div>
        <h2>🎉 Registration Successful!</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Register Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Step {step} of 3</h2>

      {step === 1 && <StepOne state={state} dispatch={dispatch} />}
      {step === 2 && <StepTwo state={state} dispatch={dispatch} />}
      {step === 3 && <StepThree state={state} dispatch={dispatch} />}
    </div>
  );
}

export default MultiStepForm;
