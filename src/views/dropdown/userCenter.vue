<script setup>
import { ref, reactive } from 'vue';
import { userStore } from '../../store/module/user';
import { uploadFile, deleteFile } from '@/utils/fileOperation'
import { message } from 'ant-design-vue';

const useUserStore = userStore();
const formState = ref(useUserStore.userInfo)
const formStateRules = ref(
  {
    nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
    gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
    mail: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    sign: [{ required: true, message: '请输入签名', trigger: 'blur' }]
  }
)
const menuList = ref([
  {
    name: '基础设置'
  },
  {
    name: '创作中心'
  }
])
const currentMenu = ref('基础设置')


const beforeUpload = (file) => {
  if (useUserStore.avatarurl) {
    deleteFile(useUserStore.avatarurl.split('/')[3], () => {
      uploadFile(file, (e) => {
        formState.value.avatarurl = 'http://' + decodeURI(e.Location)
      })
    })
  } else {
    uploadFile(file, (e) => {
      formState.value.avatarurl = 'http://' + decodeURI(e.Location)
    })
  }
  setTimeout(() => {
    submitForm(false)
  }, 1000)
  return false
};

const submitForm = (type) => {
  formState.value.gender = Number(formState.value.gender)
  useUserStore.updateUserInfo(formState.value)
  type && message.success('保存成功')
};

const resetForm = () => {
  formState.value = useUserStore.userInfo
};
  
</script>
<template>
  <div class="page">
    <a-row>
      <a-col :xs="0" :sm="4">
        <div class="leftBox">
          <div class="menu" :class="currentMenu === item.name ? 'active' : ''" @click="() => { currentMenu = item.name }" v-for="item in menuList" :key="item.name">
            {{ item.name }}
          </div>
        </div>
      </a-col>
      <a-col :xs="24" :sm="20">
        <div class="rightBox">
          <div class="avatar">
            <a-upload
              name="file"
              :maxCount="1"
              :showUploadList="false"
              :before-upload="beforeUpload"
            >
              <a-avatar :size="80" :src="formState.avatarurl" />
            </a-upload>
          </div>
          <div class="form">
            <a-form layout="vertical" :model="formState">
              <a-form-item label="用户账号">
                <a-input v-model:value="useUserStore.loginInfo.username" disabled />
              </a-form-item>
              <a-form-item label="用户昵称" name="nickname">
                <a-input v-model:value="formState.nickname" />
              </a-form-item>
              <a-form-item label="用户性别" name="gender">
                <a-radio-group v-model:value="formState.gender" name="radioGroup">
                  <a-radio value="0">保密</a-radio>
                  <a-radio value="1">男</a-radio>
                  <a-radio value="2">女</a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item label="联系邮箱" name="mail">
                <a-input v-model:value="formState.mail" />
              </a-form-item>
              <a-form-item label="个性签名" name="sign">
                <a-input v-model:value="formState.sign" />
              </a-form-item>
              <a-form-item >
                <a-button type="primary" style="margin-right: .625rem;" @click="submitForm(true)">提交</a-button>
                <a-button @click="resetForm">重置</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<style lang="scss" scoped>
  .leftBox {
    cursor: pointer;
    .menu {
      font-size: .9375rem;
      font-weight: 550;
      padding: .9375rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: .25rem solid #fff;
    }
    .active {
      border-right: .25rem solid #1890ff;
    }
  }
  .rightBox {
    padding: .9375rem;
    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

</style>