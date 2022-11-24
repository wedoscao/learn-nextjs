import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/normalize.scss";
import "../styles/tailwind.scss";
import "../styles/globals.scss";
import store from "../store";
import Auth from "../components/Auth";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Auth>
                <Component {...pageProps} />
            </Auth>
        </Provider>
    );
}
