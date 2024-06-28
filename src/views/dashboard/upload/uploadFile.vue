<script setup>
import { ref } from 'vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import { uploadFile, deleteFile } from '@/utils/fileOperation'
import { message } from 'ant-design-vue'

const fileName = ref('')

const beforeUpload = (file) => {
  uploadFile(file, (e) => {
    fileName.value = decodeURI(e.Location).split('/')[1]
    console.log(decodeURI(e.Location));
    message.success('上传成功!')
  })
  return false
};

const onClickDelete = () => {
  deleteFile(fileName.value, (e) => {
    message.success('删除成功!')
  })
}
</script>

<template>
  <a-upload :showUploadList="false" :before-upload="beforeUpload">
  <a-button><UploadOutlined /></a-button>
</a-upload>
  <a-button @click="onClickDelete">删除</a-button>
</template>

<style lang="scss" scoped>
</style>