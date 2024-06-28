import * as Icons from '@ant-design/icons-vue'
import { createApp } from 'vue'

const icons = Icons
for (const key in icons) {
  createApp().component(key, icons[key])
}