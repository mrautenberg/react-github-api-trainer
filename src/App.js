import { useState, useEffect } from "react";
import Users from "./components/Users";
import UserItem from "./components/UserItem";

const App = () => {
  const API_URL = "https://api.github.com";
  const API_USER = "/users/mrautenberg";
  const REPOS_URL = "/repos";
  //API_URL + API_USER + REPOS_URL

  const [repos, setRepos] = useState([]);
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch(API_URL + API_USER + REPOS_URL) //fetch är en funktion som skickar en request & funktionen returnerar ett promise
      //ett promise har en then-funktion som har en callback som vi sätter (dvs vad den ska göra med responset)
      .then((res) => res.json()) //vi kör json-funktionen på responsen (som är json-text), som gör det till ett objekt
      //sen döper vi objektet till "data", och sedan uppdaterat repos till data
      .then((data) => {
        console.log(data);
        setRepos(data);
      });
  }, []);

  // useEffect(() => {
  //   fetchApi(API_URL + API_USER + REPOS_URL);
  //   async function fetchApi(url) {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setName(data[1].name);
  //   }
  // }, []);

  return (
    <div>
      {repos.map((repo) => (
        <p>
          {repo.name} {repo.id}
        </p>
      ))}
    </div>
  );
};

export default App;
