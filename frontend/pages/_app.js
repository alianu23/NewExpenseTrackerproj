import UserProvider from "@/context/UserProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { StepProvider } from "@/context/StepContext";
import TransactionProvider from "@/context/TransactionContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <StepProvider>
        <TransactionProvider>
          <Component {...pageProps} />;
          <ToastContainer />
        </TransactionProvider>
      </StepProvider>
    </UserProvider>
  );
}
