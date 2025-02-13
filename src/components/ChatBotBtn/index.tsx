import chatBotIcon from "../../assets/chatBotBtnIcon.svg"
import "./ChatBotBtn.scss"

const ChatBotBtn = () => {
  return (
    <button className="chatbot-btn">
      <img src={chatBotIcon} alt="Icone du chatbot" />
    </button>
  )
}

export default ChatBotBtn
