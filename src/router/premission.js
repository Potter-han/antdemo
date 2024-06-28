import router from "./index";
import { userStore } from '@/store/module/user'

router.beforeEach((to, from, next) => {  
  if (to.path.includes('/login')) {
    next()
  } else {
    if (userStore().userToken) {
      next()
    } else {
      next('/login')
    }
  }
})