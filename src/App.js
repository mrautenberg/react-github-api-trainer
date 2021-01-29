import { useEffect, useState } from 'react'

const App = () => {

  // vi kan ha hårdkodade världen eller
  // olika datatyper som vi vill initiera
  const [login, setLogin] = useState(null);

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
      our state is: {login}
    </div>
  );
}

export default App;
