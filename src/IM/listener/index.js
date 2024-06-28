import connectListener from "./connectListener";
import contactEventListener from './contactEventListener'
import messageListener from "./messageListener";

const listenerIM = () => {
  connectListener();
  contactEventListener()
  messageListener()
}

export default listenerIM