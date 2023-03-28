import firebaseConfig from "@/config/firebaseConfig";
import useFirebase from "@/hooks/useFirebase";
import Router from "@/pages/Router";

function App() {
  const firebaseApp = useFirebase(firebaseConfig);

  if (firebaseApp == null) return <div>Loading...</div>;

  return <Router />;
}

export default App;
