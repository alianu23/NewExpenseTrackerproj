import UserProvider from "@/Context/UserProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { StepProvider } from "@/Context/StepProvider";
import TransactionProvider from "@/Context/TransactionProvider";
import CategoryProvider from "../Context/CategoryProvider";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <StepProvider>
        <CategoryProvider>
          <TransactionProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </TransactionProvider>
        </CategoryProvider>
      </StepProvider>
    </UserProvider>
  );
}
