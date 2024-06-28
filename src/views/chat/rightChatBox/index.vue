<script setup>
import { ref, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance()

proxy.$mitt.on("changeUser", (data) => {
  console.log('监听到切换了用户', data);
})

const contentHeight = ref(document.body.clientHeight - 140 + "px");
</script>
<template>
  <div>
    <arco-scrollbar :style="`height: ${contentHeight};overflow: auto;`">
      <div>
        <p v-for="item in 100" :key="item">{{ item }}</p>
      </div>
    </arco-scrollbar>
  </div>
</template>
<style lang="scss" scoped></style>
