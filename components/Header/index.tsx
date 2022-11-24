import React from "react";
import { useSelector } from "react-redux";
import userSelector from "../../store/selectors/userSelector";

type Props = {};

export default function Header({}: Props) {
    const user = useSelector(userSelector);

    return <section className="bg-black fixed right-0 h-16 left-64"></section>;
}
