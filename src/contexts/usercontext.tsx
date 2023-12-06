import { createContext, useContext, useState } from "react";
import IUser from "../types/IUser";
import { IProviderProps } from "../utils/IProviderProps";

export interface IUserContext {
    loading: boolean;
    user: IUser;
    jwt: string;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const userContext = createContext<IUserContext | null >(null);

export const UserContextProvider = ({ children }: IProviderProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<IUser | undefined>();
    const  [jwt, setJwt] = useState<string>();

    const login = async (email: string, password: string) => {
        const response = await fetch("https://lobster-app-osqfh.ondigitalocean.app/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        setUser(data.user);
        setJwt(data.jwt);
        setLoading(false);

    };

    const logout = async () => {
        setUser(undefined);
        setJwt(undefined);
    };

    return (
        <userContext.Provider value={{ loading, login, logout, user: user!, jwt: jwt! }}>
            {children}
        </userContext.Provider>
    );
}

export const useUserContext = (): IUserContext => {
    const context = useContext<IUserContext | null>(userContext);
    if (!context) {
        throw new Error("UserContext must be used within a UserContextProvider");
    }
    return context;
}

