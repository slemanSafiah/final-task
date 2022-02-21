import react, { useContext, useState } from "react";

const UserContext = react.createContext();

export function useAuth() {
  return useContext(UserContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    loggedIn: false,
    name: "",
    job: "",
    first: 0
  });
  const [first, setFirst] = useState(true);

  async function login(name, job, password) {
    if (name !== "" && job !== "" && password !== "") {
      setCurrentUser({
        name: name,
        job: job,
        loggedIn: true
      });
      setFirst(false);
      return "token";
    }
    return "error";
  }

  async function logout() {
    setCurrentUser({
      name: "",
      job: "",
      loggedIn: false
    });
  }

  const value = {
    currentUser,
    first,
    setFirst,
    login,
    logout
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
