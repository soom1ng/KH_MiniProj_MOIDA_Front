import { createContext, useContext, useState} from 'react'

const Context = createContext();

export const Provider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Context.Provider value={{ isLogin, setIsLogin}}>
            {children}
        </Context.Provider>
    );
};

export function LoginContext() {
    return useContext(Context)
}