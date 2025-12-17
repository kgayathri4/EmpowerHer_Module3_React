import UserInfo from "./UserInfo";

function UserProfile() {
  const userName = "Gayathri";
  const userAge = 21;

  return (
    <div>
      <h3>User Profile</h3>
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}

export default UserProfile;
