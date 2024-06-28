<script setup>
import { userStore } from '@/store/module/user'
import uploadFile from './upload/uploadFile.vue';

const useUserStore = userStore()

</script>
<template>
  <div>
    <uploadFile></uploadFile>
  </div>
</template>
<style lang="" scoped>
  
</style>