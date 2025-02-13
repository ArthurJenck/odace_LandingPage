import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/main.scss"
import Header from "./pages/Header"
import ChatBotBtn from "./components/ChatBotBtn"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <ChatBotBtn />
  </StrictMode>
)
