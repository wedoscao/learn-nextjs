import { FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Head from "next/head";
import { auth } from "../firebase";

interface Props {}

const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();

export default function Login({}: Props) {
    const handleError = (error: any) => {
        console.error(error);
    };

    const logInWithFacebook = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        try {
            await signInWithPopup(auth, fbProvider);
        } catch (error) {
            handleError(error);
        }
    };

    const logInWithGoogle = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        try {
            await signInWithPopup(auth, ggProvider);
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" type="image/png" href="./icon.png" />
            </Head>
            <div className="grid grid-cols-12 grid-rows-6 w-screen h-screen">
                <form className="xl:col-start-5 xl:row-start-2 xl:col-span-4 xl:row-span-3 border-2 rounded grid grid-cols-12 grid-rows-6 p-8 gap-y-1">
                    <div className="col-span-full flex justify-center items-center">
                        <span className="text-xl font-extrabold">Sign In</span>
                    </div>
                    <div className="col-span-full row-start-3 row-span-2 flex flex-wrap">
                        <div className="flex justify-center items-center w-full">
                            <button
                                className="pt-2 pb-2 pl-4 pr-4 rounded bg-red-700 text-white cursor-pointer hover:opacity-80 w-80"
                                onClick={logInWithGoogle}
                            >
                                Login with <span className="font-extrabold">Google</span>{" "}
                            </button>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <button
                                className="pt-2 pb-2 pl-4 pr-4 rounded bg-blue-700 text-white cursor-pointer hover:opacity-80 w-80"
                                onClick={logInWithFacebook}
                            >
                                Login with <span className="font-extrabold">Facebook</span>{" "}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
