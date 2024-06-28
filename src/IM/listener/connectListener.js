import miniCore from "@/IM/index.js";
import { errorHandler } from '@/IM/handle/IMErrorMessage'

const connectListener = () => {
  miniCore.addEventHandler('connection', {
    // 当连接成功
    onConnected: () => {
      console.log('>>>>>>环信建立连接成功')
    },
    // 当断开连接
    onDisconnected: () => {
      console.log('>>>>>环信连接断开')
    },
    // 当网络连接成功
    onOnline: () => {
      console.log('>>>>>环信在线')
    },
    // 当网络断开
    onOffline: () => {
      console.log('>>>>>环信离线')
    },
    // 当发生错误
    onError: (error) => {
      console.log('>>>>>>>>>>>>>>>on error', error)
      errorHandler(error.type,error.message)
    },
    // 当在多个设备上操作时
    onMultiDeviceEvent: (msg) => {
      console.log('多设备事件', msg)
    },
    // 当 token 将要过期时
    onTokenWillExpire: () => {
      console.log('环信token即将过期')
    },
    // 当 token 已经过期时
    onTokenExpired: () => {
      console.log('环信token过期')
    }
  })
}

export default connectListener
