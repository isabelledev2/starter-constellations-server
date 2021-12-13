// Header.js
function Header() {
  const loggedIn = ("Log In");
  return (
    <button onClick={loggedIn}>{loggedIn ? "Log Out" : "Log In"}</button>
  );
}

export default Header;