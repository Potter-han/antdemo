<script setup>
import { onMounted, reactive, ref, getCurrentInstance } from "vue";
import { serviceStore } from "@/store/module/service";
import { userStore } from "@/store/module/user";

const useServiceStore = serviceStore()
const useUserStore = userStore()
const contentHeight = ref(document.body.clientHeight - 140 + "px");
const allUserList = reactive(useServiceStore.allUserList)
const allUsersInfo = reactive(useServiceStore.allUsersInfo)
const allUsers = ref([])
const { proxy } = getCurrentInstance()


const filterArr = () => {
  for (const key in allUsersInfo) {
    allUserList.map(item => {
      if (item.username === key) {
        allUsers.value.push(Object.assign({}, item, allUsersInfo[key]))
      }
    })
  }
  allUsers.value = allUsers.value.filter(item => item.username !== useUserStore.loginInfo.username)
}

onMounted(() => {
  filterArr()
})

const changeUser = (item) => {
  proxy.$mitt.emit('changeUser', item)
}

</script>
<template>
  <div>
    <arco-scrollbar :style="`height: ${contentHeight};overflow: auto;`">
      <div class="userBox" v-for="item in allUsers" :key="item.username" @click="changeUser(item)">
        <a-badge :count="0">
          <a-avatar size="large" shape="square" :src="item.avatarurl ? item.avatarurl : 'https://tse4-mm.cn.bing.net/th/id/OIP-C.uMf5AX3a6yYpIhpEkyDxiQAAAA?rs=1&pid=ImgDetMain'" />
        </a-badge>
        <span class="userBox_nickname">{{ item.nickname ? item.nickname : '未知用户昵称' }}</span>
      </div>
    </arco-scrollbar>
  </div>
</template>
<style lang="scss" scoped>
.userBox {
  display: flex;
  align-items: center;
  padding: .3125rem;
  .userBox_nickname {
    font-size: .9375rem;
    margin-left: .9375rem;
  }
}

</style>
