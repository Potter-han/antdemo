import { defineStore } from 'pinia'
import miniCore from '@/IM/index'

export const userStore = defineStore('user', {
  state: () => ({
    //
    userInfo: {},
    loginInfo: {},
    IMTokenInfo: {},
    token: ''
  }),
  getters: {
    userToken: state => state.token,
    username: state => state.loginInfo.username,
    avatar: state => state.loginInfo.avatar,
    avatarurl: state => state.userInfo.avatarurl
  },
  actions: {
    //
    setToken(token) {
      this.token = token
    },
    setloginInfo(loginInfo) {
      this.loginInfo = loginInfo
    },
    setIMTokenInfo(IMTokenInfo) {
      this.IMTokenInfo = IMTokenInfo
    },
    getUserInfo(users) {
      miniCore.contact.fetchUserInfoById(users).then(({ data }) => {
        console.log(data, data[users]);
        this.userInfo = data[users]
      })
    },
    updateUserInfo(userInfo) {
      miniCore.contact.updateUserInfo(userInfo).then(({ data }) => {
        this.userInfo = data
      })
    }
  },
  persist: true
})