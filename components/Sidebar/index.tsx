import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MusicIcon from "../../public/icon.png";

interface Props {}

export default function Sidebar({}: Props) {
    const router = useRouter();
    return (
        <section className="fixed bg-black w-64 h-screen text-white">
            <div className="w-full h-full grid grid-cols-1 grid-rows-6">
                <div className="row-span-1 grid grid-rows-4 grid-cols-1">
                    <div className="row-span-2 grid grid-cols-1 grid-rows-6 ">
                        <div className="row-span-5 flex justify-center items-center">
                            <Image alt="" src={MusicIcon} width={50} height={50} />
                            <span className="ml-6">Music Player</span>
                        </div>
                    </div>
                </div>
                <div className="row-span-2 grid grid-rows-6 grid-cols-1">
                    <Link href="/">
                        <div
                            className={`flex justify-start items-center ${
                                router.pathname === "/" ? "bg-gray-800" : "hover:bg-gray-800"
                            } cursor-pointer h-full`}
                        >
                            <span className="ml-6">Home</span>
                        </div>
                    </Link>
                    <Link href="/search">
                        <div
                            className={`flex justify-start items-center ${
                                router.pathname === "/search" ? "bg-gray-800" : "hover:bg-gray-800"
                            } cursor-pointer h-full`}
                        >
                            <span className="ml-6">Search</span>
                        </div>
                    </Link>

                    <Link href="/playlist">
                        <div
                            className={`flex justify-start items-center ${
                                router.pathname === "/playlist" ? "bg-gray-800" : "hover:bg-gray-800"
                            } cursor-pointer h-full`}
                        >
                            <span className="ml-6">Playlist</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
