import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { userAction } from "../../store/reducers/userReducer";
import userSelector from "../../store/selectors/userSelector";

type Props = {
    children: React.ReactNode;
};

const AuthContext = createContext(null);
export default function AuthProvider({ children }: Props) {
    const router = useRouter();
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email, phoneNumber, photoURL, uid } = user;
                dispatch(userAction.setUser({ displayName, email, phoneNumber, photoURL, uid }));
                router.push("/");
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export { AuthContext };
