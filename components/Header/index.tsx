import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSelector from "../../store/selectors/userSelector";
import Image from "next/image";
import { auth } from "../../firebase";
import { userAction } from "../../store/reducers/userReducer";

interface Props {}

export default function Header({}: Props) {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const [isPopup, setIsPopup] = useState(false);
    const handlePopup = () => {
        setIsPopup(!isPopup);
    };
    const logOut = async () => {
        try {
            await auth.signOut();
            dispatch(userAction.setUser({}));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className="bg-black fixed right-0 h-16 left-64 grid xl:grid-cols-12 text-white">
            {!user.uid ? (
                <>
                    <div className="col-start-11 col-span-2 flex justify-center items-center">
                        <Link href="/login">
                            <div className="bg-white text-black py-2 px-6 hover:opacity-80 rounded-lg cursor-pointer font-bold">
                                Sign In
                            </div>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="col-start-11 col-span-2 flex items-center justify-center relative">
                        <Image alt="" src={user.photoURL} width={20} height={20} />
                        <div
                            className="bg-gray-600 w-6/12 h-5 rounded-full rounded-l-none flex justify-center items-center hover:opacity-80 cursor-pointer"
                            onClick={handlePopup}
                        >
                            <span className="text-sm">{user.displayName}</span>
                        </div>
                        {!isPopup ? null : (
                            <div className="bg-gray-600 absolute w-7/12 grid grid-cols-1 z-50 top-12 rounded">
                                <Link href={"/account"}>
                                    <div className="p-2 hover:opacity-80 cursor-pointer">Account</div>
                                </Link>
                                <Link href={"/profile"}>
                                    <div className="p-2 hover:opacity-80 cursor-pointer">Profile</div>
                                </Link>

                                <Link href={"/setting"}>
                                    <div className="p-2 hover:opacity-80 cursor-pointer">Setting</div>
                                </Link>
                                <div className="p-2 hover:opacity-80 cursor-pointer" onClick={logOut}>
                                    Logout
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </section>
    );
}
