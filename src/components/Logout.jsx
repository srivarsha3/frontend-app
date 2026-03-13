<<<<<<< HEAD
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import App, { AppContext } from "../App";
function Logout() {
  const { user, setUser } = useContext(AppContext);
  const Navigate = useNavigate();
  useEffect(() => {
    setUser({});
    Navigate("/");
  }, []);
  return <h2>Logout Page</h2>;
}
export default Logout;
=======
function Logout(){
    return <h2>Logout Page</h2>
}
export default Logout
>>>>>>> f01d12072a1eaf8e1f8f6e2cc3f88c668d4f91e7
