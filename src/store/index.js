import { createPinia } from "pinia"
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(
    createPersistedState({
        key: id => `store-${id}`,
        storage: localStorage
    })
)

export default pinia
