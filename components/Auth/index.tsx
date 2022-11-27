import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { userAction } from "../../store/reducers/userReducer";

interface Props {
    children: React.ReactNode;
}

export default function Auth({ children }: Props) {
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email, phoneNumber, photoURL, uid } = user;
                dispatch(userAction.setUser({ displayName, email, phoneNumber, photoURL, uid }));
                if (router.pathname === "/login" || router.pathname === "/register") {
                    router.push("/");
                }
            }
        });
        return () => {
            unsubscribe();
        };
    }, [dispatch, router]);
    return <>{children}</>;
}
