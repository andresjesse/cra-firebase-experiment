export default function LoginPage() {
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <div>
      <h1>LoginPage</h1>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
