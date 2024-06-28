import MiniCore from "easemob-websdk/miniCore/miniCore";
import * as contactPlugin from "easemob-websdk/contact/contact";

const miniCore = new MiniCore({
  appKey: import.meta.env.VITE_IM_APPKEY
});

// "contact" 为固定值
miniCore.usePlugin(contactPlugin, "contact");

export default miniCore;
