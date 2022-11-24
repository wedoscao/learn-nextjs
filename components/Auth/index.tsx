import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { userAction } from "../../store/reducers/userReducer";

type Props = {
    children: React.ReactNode;
};

export default function Auth({ children }: Props) {
    const router = useRouter();
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
    return <>{children}</>;
}
