<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons-vue';
import { userStore } from "../store/module/user.js";
import { serviceStore } from "@/store/module/service.js"
import miniCore from '@/IM'

const router = useRouter()
const menuList = ref([])
const selectedKeys = ref(['/index']);
const contentHeight = ref(document.body.clientHeight - 120 + 'px')
const currentRoute = ref({
  path: router.currentRoute.value.path,
  breadcrumbName: router.currentRoute.value.meta.title
})
const breadcrumbList = ref([{ path: '/index', breadcrumbName: '控制台' }])
const pathList = ref(['/', '/index'])
const count = ref(5)

onMounted(() => {
  router.push('/index')
})
watch(() => router.currentRoute.value, (to, from) => {
  currentRoute.value = {
    path: to.path,
    breadcrumbName: to.meta.title
  }
  selectedKeys.value = [ to.path ]
  if (pathList.value.includes(to.path)) return
  pathList.value.push(to.path)
  breadcrumbList.value.push({
    breadcrumbName: to.meta.title,
    path: to.path
  })
})

window.addEventListener('resize', () => {
  contentHeight.value = document.body.clientHeight - 120 + 'px'
})
const getMenuList = () => {
  menuList.value = router.options.routes[0].children.map(item => item.meta).slice(0,3)
}
getMenuList()

const pullDownSelect = (item) => {
  if (item.key == 0) return router.push('/userCenter')
  if (item.key == 1) return router.push('/index')
  if (item.key == 3) {
    miniCore.close()
    userStore().$reset()
    serviceStore().$reset()
    router.push('/login')
    return
  }
}


</script>

<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <div class="user">
        <a-dropdown :trigger="['hover']">
          <a class="ant-dropdown-link" @click.prevent>
              <a-badge :count="count">
                  <a-avatar size="large" shape="square" :src="userStore().avatarurl ? userStore().avatarurl : 'https://tse4-mm.cn.bing.net/th/id/OIP-C.uMf5AX3a6yYpIhpEkyDxiQAAAA?rs=1&pid=ImgDetMain'">
                      <template #icon><UserOutlined /></template>
                  </a-avatar>
              </a-badge>
              <span style="color: white;">{{ userStore().username }}</span>
              <CaretDownOutlined style="color: white;font-size: large" />
          </a>
          <template #overlay>
              <a-menu @click="pullDownSelect">
                  <a-menu-item key="0">个人中心</a-menu-item>
                  <a-menu-item key="1">控制台</a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="3">退出登录</a-menu-item>
              </a-menu>
          </template>
        </a-dropdown>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        :items="menuList"
        @click="router.push({ path: $event.key })"
      ></a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }" :routes="breadcrumbList">
        <template #itemRender="{ route, paths }">
          <span v-if="breadcrumbList.indexOf(route) === breadcrumbList.length - 1">
            {{ route.breadcrumbName }}
          </span>
            <router-link v-else :to="`${paths[paths.length - 1]}`">
                {{ route.breadcrumbName }}
            </router-link>
        </template>
      </a-breadcrumb>

      <div :style="{ background: '#fff', padding: '5px', height: contentHeight }">
          <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss" scoped>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.user {
  float: right;
  width: 120px;
  height: 100%;
  .ant-dropdown-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

</style>