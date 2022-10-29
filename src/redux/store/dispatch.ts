import store from './index';

const dispatch = (action) => {
  return store.dispatch(action);
};

export default dispatch;
