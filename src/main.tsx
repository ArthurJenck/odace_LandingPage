import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/main.scss"
import Header from "./pages/Header"
import ChatBotBtn from "./components/ChatBotBtn"
import NavBar from "./components/NavBar"
import BannerCarousel from "./components/BannerCarousel"
import GallerySection from "./pages/GallerySection"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <Header />
    <ChatBotBtn />
    <BannerCarousel />
    <GallerySection />
  </StrictMode>
)
