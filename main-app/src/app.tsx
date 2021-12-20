import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    // 可选，自定义添加 Provider
    // addProvider: ({ children }) => {
    //   return <ConfigProvider>{children}</ConfigProvider>;
    // },
    // 可选，常用于 SSR 场景或者初始化异步获取数据的场景
    // 如果返回字段中包含 initialStates 字段将会作为状态管理 store 的初始值
    // 如果返回字段中包含 auth 字段将会作为权限管理 auth 的初始值
    // getInitialData: async() => {
    //   const result = await request();
    //   return result;
    // },

    ErrorBoundaryFallback: () => {
      return <div>渲染错误</div>;
    },
  },
  router: {
    type: 'browser',
  },
};

runApp(appConfig);
