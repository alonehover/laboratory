'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('link/index', { name: 'user list' });
  }

  async show() {
    this.ctx.body = {
      name: '单条数据输出',
    };
  }

  async add() {
    this.ctx.body = {
      name: '添加链接',
    };
  }

  async update() {
    this.ctx.body = {
      name: '修改链接',
    };
  }

  async delete() {
    this.ctx.body = {
      name: '删除链接',
    };
  }
}

module.exports = UserController;
