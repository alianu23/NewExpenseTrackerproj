import UserProvider from "@/context/UserProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { StepProvider } from "@/context/StepContext";
import TransactionProvider from "@/context/TransactionContext";
import CategoryProvider from "@/context/CategoryContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <StepProvider>
        <TransactionProvider>
          <CategoryProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </CategoryProvider>
        </TransactionProvider>
      </StepProvider>
    </UserProvider>
  );
}
