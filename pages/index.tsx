import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface Props {}

export default function Home({}: Props) {
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
