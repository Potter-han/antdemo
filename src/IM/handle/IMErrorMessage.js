import miniCore from "@/IM/index.js"
import { message } from "ant-design-vue"
import { userStore } from '@/store/module/user'

/**
 * 环信请求错误处理
 * @param type 错误码
 * @param msg 错误信息
 */
export const errorHandler = (type,msg) => {
  switch (type) {
    case -1:
      message.error("请求服务超时")
      break
    case -2:
      message.error("默认未区分类型的错误")
      break
    case -3:
      message.error("参数错误,请检查")
      break
    case -4:
      message.error("请求取消")
      break
    case 1:
      if (msg === 'invalid password') {
        message.error("密码错误")
      } else if (msg === 'user not found') {
        message.error("用户不存在")
      } else {
        message.error("登录失败，请检查密码或用户名")
      }
      break
    case 12:
      message.error("获取 Chat token 失败")
      break
    case 16:
      message.error("请检查网络")
      break
    case 17:
      if (msg === 'invalid password') {
        message.error('密码错误')
      }
      else if (msg === 'null') {
        message.error('用户名或者密码错误')
      }
      else if (msg.includes('username')) {
        message.error('用户已存在')
      } else {
        message.error('没有操作权限')
      }
      break
    case 27:
      message.error("App Key 错误")
      break
    case 28:
      // message.error("未携带token")
      getToken()
      break
    case 31:
      message.error("消息发送失败")
      break
    case 32:
      message.error("请重新登录")
      break
    case 40:
      message.error("用户鉴权失败")
      break
    case 50:
      message.error("用量超额,请联系管理员")
      break
    case 51:
      message.error("没查到消息")
      break
    case 2:
    case 52:
    case 503:
      break
    case 53:
      message.error("不支持的操作")
      break
    case 55:
      message.error("本地数据库操作失败")
      break
    case 101:
      message.error("上传文件失败")
      break
    case 102:
      message.error("请先登录再上传文件")
      break
    case 200:
      message.error("下载文件失败")
      break
    case 204:
      message.error("用户不存在")
      break
    case 205:
      message.error("消息参数错误")
      break
    case 39:
      message.error("已掉线，请刷新浏览器")
      break
    case 206:
    case 217:
      break
    case 207:
      message.error("用户被注销")
      break
    case 216:
      message.error("用户密码更新,请重新登录")
      break
    case 219:
    case 506:
    case 507:
      message.error("用户被禁言")
      break
    case 221:
      message.error("非好友禁止发消息")
      break
    case 500:
      message.error("服务器忙碌,请稍后再说")
      break
    case 501:
      message.error("消息含有非法内容")
      break
    case 502:
      message.error("消息被拦截")
      break
    case 504:
      message.error("撤回消息超出限定时间")
      break
    case 505:
      message.error("服务未开启")
      break
    case 508:
      message.error("内容审核不通过")
      break
    case 509:
      message.error("发送信息频率过快")
      break
    case 510:
      message.error("网络连接断开,消息发送失败")
      break
    case 511:
      message.error("消息体大小超过限制")
      break
    case 601:
      message.error("当前用户已在该群组中")
      break
    case 602:
      message.error("当前用户不在该群组中")
      break
    case 603:
      if (msg === 'blocked') {
        message.error("对方已将您加入黑名单")
      } else if (msg === 'blacklist') {
        message.error("已在该群黑名单当中！无法加入该群")
      } else if (msg === 'already') {
        message.error("已在该群中")
      } else if (msg === "permission denied") {
        message.error("群主已禁止群成员邀请他人入群")
      } else {
        message.error("错误：" + msg)
      }
      break
    case 604:
      message.error("内部错误,请刷新浏览器重试")
      break
    case 605:
    case 705:
      message.error("群组不存在")
      break
    case 606:
    case 607:
    case 704:
      message.error("群组已满")
      break
    case 609:
      message.error("群成员属性设置失败")
      break
    case 700:
      getToken()
      break
    case 702:
      message.error("该成员不在聊天室")
      break
    case 999:
      message.error("发送消息错误")
      break
    case 1100:
      message.error("参数长度超出限制")
      break
    case 1101:
      message.error("Reaction 重复添加")
      break
    case 1102:
      message.error("其他人正在创建 Reaction")
      break
    case 1103:
      message.error("对该 Reaction 没有操作权限")
      break
    case 1200:
      message.error("code 不合法")
      break
    case 1201:
      message.error("翻译的文本过长")
      break
    case 1204:
      message.error("获取翻译服务失败")
      break
    case 1300:
      message.error("未找到该子区")
      break
    case 1301:
      message.error("不要重复添加子区")
      break
    case 1302:
      message.error("修改的消息不存在")
      break
    case 1304:
      message.error("修改的消息不存在")
      break
    default:
      message.error("请求失败,请刷新浏览器重试")
      break
  }
}

/**
 * 重新登录获取token
 */
let time = null
const getToken = () => {
  const useUserStore = userStore()
  if (new Date().getTime() - time < 3000) return
  let options = { username: useUserStore.loginInfo.username, password: useUserStore.loginInfo.password }
  miniCore.open(options).then((result) => {
    useUserStore.setloginInfo(Object.assign({}, options, { IMInfo: result }, false))
    useUserStore.getUserInfo(options.username)
    useUserStore.setToken(result.accessToken)
    time = new Date().getTime()
  })
}