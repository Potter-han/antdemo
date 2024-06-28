<script setup>
import { ref } from "vue";
import { userStore } from "@/store/module/user.js";
import { serviceStore } from "@/store/module/service.js";
import leftChatBox from "./leftChatBox/index.vue";
import rightChatBox from "./rightChatBox/index.vue";
const useUserStore = userStore();
const useServiceStore = serviceStore();
const users = ref([]);
const getAllUser = () => {
  let list = useServiceStore.allUserList;
  let username = useUserStore.username;
  list.map((item) => {
    if (item.username !== username) {
      users.value.push(item);
    }
  });
};
getAllUser();
</script>
<template>
  <div class="chat_container">
    <a-row style="height: 100%">
      <a-col :xs="24" :md="8"
        ><div class="left">
          <leftChatBox /></div
      ></a-col>
      <a-col :xs="0" :md="16"
        ><div class="right">
          <rightChatBox /></div
      ></a-col>
    </a-row>
  </div>
</template>
<style lang="scss" scoped>
.chat_container {
  height: 100%;
  .left {
    height: 100%;
    padding: .3125rem;
  }
  .right {
    height: 100%;
    padding: .3125rem;
  }
}
</style>
