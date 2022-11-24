import { signInWithEmailAndPassword, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import Head from "next/head";
import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { auth } from "../firebase";

type Props = {};
type FormInput = {
    email: string;
    password: string;
};

const fbProvider = new FacebookAuthProvider();

export default function Login({}: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInput>();
    const emailId = useId();
    const passwordId = useId();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleLogin: SubmitHandler<FormInput> = async (data, event) => {
        event?.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
        } catch (error) {
            console.log(error);
        }
    };

    const loginWithFacebook = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        try {
            await signInWithPopup(auth, fbProvider);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePasswordInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const passwordElement = event.target as HTMLInputElement;
        setPassword(passwordElement.value.trim());
    };

    const handleEmailInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const emailElement = event.target as HTMLInputElement;
        setEmail(emailElement.value.trim());
    };

    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" type="image/png" href="./icon.png" />
            </Head>
            <div className="grid grid-cols-12 grid-rows-6 w-screen h-screen">
                <form className="xl:col-start-5 xl:row-start-2 xl:col-span-4 xl:row-span-4 border-2 rounded grid grid-cols-12 grid-rows-6 p-8 gap-y-1">
                    <div className="col-span-full flex justify-center items-center">
                        <span className="text-xl font-extrabold">Sign In</span>
                    </div>
                    <div className="form-group col-span-full flex items-center flex-wrap">
                        <label htmlFor={emailId} className="font-bold block text-sm w-full">
                            Email
                        </label>
                        <input
                            value={email}
                            {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Must be email",
                                },
                                onChange: handleEmailInput,
                            })}
                            id={emailId}
                            className="border rounded-sm w-full p-2"
                            placeholder="Email"
                        />
                        {errors ? <div className="text-red-400 text-sm">{errors.email?.message}</div> : null}
                    </div>
                    <div className="form-group col-span-full flex items-center flex-wrap">
                        <label htmlFor={passwordId} className="font-bold block text-sm w-full">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            {...register("password", {
                                required: "Required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:
                                        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                                },
                                onChange: handlePasswordInput,
                            })}
                            id={passwordId}
                            className="border rounded-sm w-full p-2"
                            placeholder="Password"
                        />
                        {errors ? <div className="text-red-400 text-sm">{errors.password?.message}</div> : null}
                    </div>
                    <div className="col-span-full row-start-5 row-span-2 flex flex-wrap">
                        <div className="flex justify-center items-center w-full">
                            <button
                                className="pt-2 pb-2 pl-4 pr-4 rounded bg-red-700 text-white cursor-pointer hover:opacity-80 w-80"
                                onClick={loginWithFacebook}
                            >
                                Login with <span className="font-extrabold">Google</span>{" "}
                            </button>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <button
                                className="pt-2 pb-2 pl-4 pr-4 rounded bg-blue-700 text-white cursor-pointer hover:opacity-80 w-80"
                                onClick={loginWithFacebook}
                            >
                                Login with <span className="font-extrabold">Facebook</span>{" "}
                            </button>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <input
                                type="submit"
                                className="pt-2 pb-2 pl-4 pr-4 rounded bg-cyan-500 text-white cursor-pointer hover:opacity-80"
                                onClick={handleSubmit(handleLogin)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
