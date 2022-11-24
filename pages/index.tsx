import Head from "next/head";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import userSelector from "../store/selectors/userSelector";

export default function Home() {
    const user = useSelector(userSelector);
    console.log(user);
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" type="image/png" href="./icon.png" />
            </Head>

            <div className="w-screen h-screen">
                <Header />
                <Sidebar />
            </div>
        </>
    );
}
