import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div>
      <h2>Message Cards</h2>

      <MessageCard
        title="Welcome"
        message="Welcome to our React application."
      />

      <MessageCard
        title="Reminder"
        message="Don't forget to complete your assignment."
      />

      <MessageCard
        title="Success"
        message="You have successfully learned props in React!"
      />

      <MessageCard
        title="Next Step"
        message="Practice creating reusable components."
      />
    </div>
  );
}

export default App;
