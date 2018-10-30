'use strict';
const Controller = require('egg').Controller;
const crypto = require('crypto');

class SignController extends Controller {
  async signin() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const user = await app.mysql.get('link_user', { name: username });
    if (user) {
      const pwd1 = this.encryptMd5(password);
      const pwd2 = this.encryptMd5(pwd1);

      if (pwd2 === user.password) {
        ctx.body = {
          data: user.name,
          msg: '',
        };

        return true;
      }

      ctx.body = {
        data: '',
        msg: '登录失败, 密码错误',
      };

      return false;
    }

    ctx.body = {
      data: '',
      msg: '登录失败, 用户不存在',
    };

    return false;
  }

  async signup() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const user = await app.mysql.get('link_user', { name: username });
    if (!user) {
      const pwd1 = this.encryptMd5(password);
      const pwd2 = this.encryptMd5(pwd1);
      const result = await app.mysql.insert('link_user', { name: username, password: pwd2 });

      if (result.affectedRows === 1) {
        ctx.body = {
          data: '',
          msg: '',
        };
        return true;
      }

      ctx.body = {
        data: '',
        msg: '注册失败，请稍后重试',
      };

      return false;
    }

    ctx.body = {
      data: '',
      msg: '注册失败, 用户已存在',
    };
  }

  async signout() {
    const { ctx } = this;
    ctx.body = {
      name: '退出',
    };
  }

  encryptMd5(str) {
    const md5 = crypto.createHash('md5');
    return md5.update(str).digest('hex').toLowerCase();
  }
}

module.exports = SignController;
