import { defineStore } from 'pinia'
import miniCore from '@/IM/index'

export const serviceStore = defineStore('service', {
  state: () => ({
    adminTokenInfo: {},
    allUsers: {},
    allUsersInfo: {}
  }),
  getters: {
    adminToken: (state) => state.adminTokenInfo.access_token,
    allUserList: (state) => state.allUsers.entities
  },
  actions: {
    setAdminTokenInfo(adminTokenInfo) {
      this.adminTokenInfo = adminTokenInfo
    },
    setAllUsers(allUsers) {
      this.allUsers = allUsers
    },
    getAllUsers() {
      const users = this.allUsers.entities.map((item) => item.username)
      setTimeout(() => {
        miniCore.contact.fetchUserInfoById(users).then(({ data }) => {
          // 获取用户信息成功
          this.allUsersInfo = data
        })
      }, 1500);
    }
  },
  persist: true
})