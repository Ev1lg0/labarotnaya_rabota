import React, {useState} from 'react';
import './App.css';
import Auth from "./components/auth/auth";
import Profile from "./components/profile/profile";

function App() {
    const [isLogined, setIsLoginned] = useState(false);
    const [login, setLogin] = useState('');
    const Login = (state) => {
        setIsLoginned(state);
    }
  return (
    <div className="App">
        {!isLogined ?
            <Auth loginned={Login} login={login} setLogin={setLogin}/>
            : <Profile login={login} exit={Login}/>
        }
    </div>
  );
}

export default App;
