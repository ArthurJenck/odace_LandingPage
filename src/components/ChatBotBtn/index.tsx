import chatBotIcon from "../../assets/chatBotBtnIcon.svg"
import "./ChatBotBtn.scss"

const ChatBotBtn = () => {
  return (
    <button>
      <img src={chatBotIcon} alt="Icone du chatbot" />
    </button>
  )
}

export default ChatBotBtn
