'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // const user = await this.app.mysql.query('select * from link_user');
    // console.log('user', user);
    // this.ctx.body = 'hi, egg';
    await ctx.render('home');
  }
}

module.exports = HomeController;
