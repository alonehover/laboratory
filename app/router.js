'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 获取全部链接数据
  router.get('/api/link/urls', controller.link.url.index);
  // 获取单条链接
  router.get('/api/link/urls/:id', controller.link.url.show);
  // 添加链接
  router.post('/api/link/urls', controller.link.url.add);
  // 修改链接
  router.post('/api/link/urls/:id/edit', controller.link.url.update);
  // 删除链接
  router.post('/api/link/urls/:id', controller.link.url.delete);

  // 获取全部分类
  router.get('/api/link/type', controller.link.type.index);
  // 获取单条分类
  router.get('/api/link/type/:id', controller.link.type.show);
  // 添加分类
  router.post('/api/link/type', controller.link.type.add);
  // 修改分类
  router.post('/api/link/type/:id/edit', controller.link.type.update);
  // 删除分类
  router.post('/api/link/type/:id', controller.link.type.delete);

  // 获取全部用户
  router.get('/api/admin/user', controller.user.user.index);
  // 获取单个用户信息
  router.get('/api/admin/user/:id', controller.user.user.show);
  // 添加用户
  router.post('/api/admin/user', controller.user.user.add);
  // 修改密码
  router.post('/api/admin/user/:id/edit', controller.user.user.update);
  // 删除用户
  router.post('/api/admin/user/:id', controller.user.user.delete);

  // 注册
  router.post('/api/user/signup', controller.user.sign.signup);
  // 登录
  router.post('/api/user/signin', controller.user.sign.signin);
  // 退出
  router.post('/api/user/signout', controller.user.sign.signout);
};
