import { createContext, useState } from "react";

export interface PasswordInterface {
    id: string;
    title: string;
    username: string;
    password: string;
    date: Date;
}
const PasswordsArray: PasswordInterface[] = [];

export const PasswordsContext = createContext({
    passwordsArray: PasswordsArray,
    setPasswordsArray: (data: any) => {},
});

export const PasswordsProvider = ({ children }: any) => {
    const [passwordsArray, setPasswordsArray] = useState(PasswordsArray);

    const value = {
        passwordsArray,
        setPasswordsArray,
    };

    return (
        <PasswordsContext.Provider value={value}>
            {children}
        </PasswordsContext.Provider>
    );
};
