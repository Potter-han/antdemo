<script setup>
import { reactive, computed, onMounted, ref } from 'vue'
import { userStore } from '@/store/module/user'
import { serviceStore } from '@/store/module/service.js'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { register, getIMToken, getAdminToken, getUserList } from '@/api/IM'
import miniCore from '@/IM'

const useUserStore = userStore()
const useServiceStore = serviceStore()
const router = useRouter()
const formState = reactive({
  username: '',
  nickname: '',
  password: '',
  remember: true,
});
const isRegister = ref(false)

const getAppToken = () => {
  if (useServiceStore.adminToken) {
    getUsers()
  } else {
    getAdminToken().then((result) => {
      useServiceStore.setAdminTokenInfo(result)
      setTimeout(() => {
        getUsers()
      },1500)
    }).catch((err) => message.error('获取管理员token失败'))
  }

}
onMounted(() => {
  getAppToken()
})
const onFinish = async (values) => {
  if (isRegister.value) {
    miniCore.registerUser({ nickname: values.nickname, username: values.username, password: values.password }).then(({ data }) => {
      useUserStore.setloginInfo(Object.assign({}, values, { IMInfo: data }, isRegister.value))
      getIMToken(values.username, values.password).then((res) => {
        useUserStore.setToken(res.access_token)
        useUserStore.setIMTokenInfo(res)
        useServiceStore.getAllUsers()
        message.success('注册成功')
        router.push('/')
      }).catch(() => { message.error('换取token失败') })
    }).catch(() => { message.error('注册失败') })
  } else {
    if (!useServiceStore.allUserList.some(item => item.username == values.username)) return message.error('该账号尚未注册')
    miniCore.open({ username: values.username, password: values.password }).then((result) => {
      useUserStore.setloginInfo(Object.assign({}, values, { IMInfo: result }, isRegister.value))
      useUserStore.getUserInfo(values.username)
      useUserStore.setToken(result.accessToken)
      useServiceStore.getAllUsers()
      message.success('登录成功')
      router.push('/')
    }).catch((err) => {
      message.error('登录失败')
    });
  }
};
const getUsers = () => {
  setTimeout(() => {
    getUserList().then((result) => { useServiceStore.setAllUsers(result) }).catch((err) => message.error('获取平台所有用户失败'))
  },1500)
}
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>

<template>
  <div class="login_container">
      <div class="login_form">
        <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          >
          <a-form-item
            label="用户"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!', trigger: 'blur' }]"
          >
            <a-input v-model:value="formState.username" maxlength="11">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>
            
            <a-form-item
                    v-if="isRegister"
                    label="昵称"
                    name="nickname"
                    :rules="[{ required: true, message: 'Please input your nickname!', trigger: 'blur' }]"
            >
                <a-input v-model:value="formState.nickname" maxlength="11">
                    <template #prefix>
                        <UserOutlined class="site-form-item-icon" />
                    </template>
                </a-input>
            </a-form-item>

          <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!', trigger: 'blur' }]"
          >
            <a-input-password v-model:value="formState.password" maxlength="10">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-form-item name="remember" no-style>
              <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
            </a-form-item>
            <a-form-item  no-style>
              <a class="login-form-forgot" href="">Forgot password</a>
            </a-form-item>
          </a-form-item>

          <a-form-item>
            <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
              {{ isRegister ? 'register' : 'login' }}
            </a-button>
          </a-form-item>

          <a-form-item>
            <a-button type="link" @click="isRegister = !isRegister">{{ isRegister ? 'login in' : 'register now!' }}</a-button>
          </a-form-item>
        </a-form>
      </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./login.scss";
</style>