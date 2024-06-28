import miniCore from "@/IM/index.js";

const messageListener = () => {
  miniCore.addEventHandler('messageListen', {
    // 收到文本消息
    onTextMessage: (message) => {
      console.log('>>>>>>收到文本消息', message)
    },
    // 收到图片消息
    onImageMessage: (message) => {
      console.log('>>>>>>收到图片消息', message)
    },
    // 收到音频消息
    onAudioMessage: (message)=> {
      console.log('>>>>>>收到音频消息', message)
    },
    // 收到文件消息
    onFileMessage: (message) => {
      console.log('>>>>>>收到文件消息', message)
    },
    // 收到自定义消息
    onCustomMessage: (message) => {
      console.log('>>>>>>收到自定义消息', message)
    },
    // 撤回消息监听
    onRecallMessage: (message) => {
      console.log('撤回消息监听', message)
    },
    // cmd消息监听
    onCmdMessage: (message) => {
      console.log('>>>>>>cmd消息监听', message)
    }
  })
}

export default messageListener
