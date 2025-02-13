import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/main.scss"
import Header from "./pages/Header"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
  </StrictMode>
)
