import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { UserContext } from './context/UserContext';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [user, setUser] = useState('');
  const [cookies, setCookies] = useState('');

  const updateUser = (data) => {
    setUser(data);
  };

  const signOut = () => {
    Cookies.remove('access-token');
    setCookies('');
  };

  useEffect(() => {
    const cookie = Cookies.get('access-token');
    cookie ? setCookies(cookie) : setCookies('');

    async function getCurrentUser(token) {
      const user = await axios.get(`${import.meta.env.VITE_SERVER_URL}/currentuser/${token}`);
      setUser(user.data.user);
    }

    if (cookies) {
      getCurrentUser(cookies);
    } else {
      setUser('');
    }
  }, [cookies]);

  const data = { user, updateUser, signOut }

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={data}>
          {user ? <Header /> : ''}
          <Main />
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
