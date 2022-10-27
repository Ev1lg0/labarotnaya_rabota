import React, {useEffect, useState} from 'react';
import './auth.css';
const Auth = ({loginned, login, setLogin}) => {
    const [pass, setPass] = useState('');
    
    const [error, setError] = useState('');
    
    
    const authHandler = () => {
        if (login === '') {
            setError('Не введён логин')
        }
        else if (login.toLowerCase().includes('sql') ||
            login.toLowerCase().includes('select') ||
            login.toLowerCase().includes('drop') ||
            pass.toLowerCase().includes('sql') ||
            pass.toLowerCase().includes('select') ||
            pass.toLowerCase().includes('drop')
        ) {
            setError('Тут нет базы данных!')
        }
        else if (pass.toLowerCase().includes('1234')) {
            setError('Слишком просто!')
        }
        else if (!login.toLowerCase().includes('@')) {
            setError('Неправильный логин!')
        }
        else {
            loginned(true);
        }
    }
    
    return (
        <div id={'auth'}>
            <form>
                <label className={'auth__label'}>Логин
                      <input
                          className={'auth__input auth__login'}
                          type={"text"}
                          placeholder={'Введите вашу почту'}
                          value={login}
                          onChange={e => {setLogin(e.target.value)}}
                      />
                </label>
                <label className={'auth__label'}>Пароль
                      <input
                          className={'auth__input auth__password'}
                          type={"text"}
                          placeholder={'Введите ваш логин'}
                          value={pass}
                          onChange={e => {setPass(e.target.value)}}
                      />
                </label>
                <button
                    onClick={authHandler}
                    type={'button'}
                    className={'auth__button'}
                >
                    Войти
                </button>
                {error !== '' &&
                    <div style={{background: 'red', marginTop: 10, width: "20%"}}>
                        <p style={{color: "white"}}>{error}</p>
                    </div>
                }
            </form>
        </div>
    );
};

export default Auth;