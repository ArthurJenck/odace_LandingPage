import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/main.scss"
import Header from "./pages/Header"
import ChatBotBtn from "./components/ChatBotBtn"
import NavBar from "./components/NavBar"
import BannerCarousel from "./components/BannerCarousel"
import GalleryWrapper from "./pages/GalleryWrapper"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <Header />
    <ChatBotBtn />
    <BannerCarousel />
    <GalleryWrapper />
  </StrictMode>
)
