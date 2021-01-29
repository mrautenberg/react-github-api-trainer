import { useEffect, useState } from 'react'
import UserItem from './components/UserItem'

const App = () => {

  // vi kan ha hårdkodade världen eller
  // olika datatyper som vi vill initiera
  const [login, setLogin] = useState(null);
  const [showData, setShowData] = useState(false);

  const API_URL = "https://api.github.com/users/patrik-fredlund"

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then(res => res.json())
  //     .then(data => setLogin(data.login))
  // }, [])

  useEffect(() => {
    async function fetchApi(url) {
      const res = await fetch(url);
      const data = await res.json();
      setLogin(data.login);
    }
    fetchApi(API_URL)
  }, [])


  return (
    <div>
      <button onClick={() => setShowData(true)}>
        Show data from Users.js file
      </button>
      {showData ? <UserItem login={login} /> : null}
    </div>
  );
}

export default App;
