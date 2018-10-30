'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540635668244_6630';

  // add your config here
  config.middleware = [];

  config.mysql = {
    // 单数据库信息配置
    client: {
      host: 'localhost',
      port: '3306',
      user: '',
      password: '',
      database: 'link',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 模板引擎
  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    defaultExtension: '.html',
    defaultViewEngine: 'nunjucks', // 可以使用多个模板引擎，设置默认引擎
  };

  config.security = {
    csrf: {
      enable: false,
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  return config;
};
