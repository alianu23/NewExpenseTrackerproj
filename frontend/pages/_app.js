import UserProvider from "@/context/UserProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { StepProvider } from "@/context/StepProvider";
import TransactionProvider from "@/context/TransactionProvider";
import CategoryProvider from "@/context/CategoryProvider";

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
