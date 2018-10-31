'use strict';
const path = require('path');
const fs = require('fs');

const Controller = require('egg').Controller;

class UrlController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('link/index', { name: 'url list' });
  }

  async show() {
    this.ctx.body = {
      name: '单条数据输出',
    };
  }

  async add() {
    const { ctx, app } = this;
    const { name, description, url } = ctx.request.body;
    if(!name || !description || !url) {
      this.ctx.body = {
        data: '',
        msg: '缺少必要参数'
      };
     
      return;
    }
    const host = url.split('//')[1].split('/')[0];
    const icoUrl = 'http://' + host + '/favicon.ico';
    let icoPath = host + '.ico';

    try {
      await ctx.curl(icoUrl, {
        writeStream: fs.createWriteStream(path.resolve(process.cwd(), 'app/public/favicons/' + icoPath)),
      });
    } catch (error) {
      icoPath = '';
    }

    const user = await app.mysql.insert('link_url', { name, description, url, icon: icoPath });

    this.ctx.body = {
      name: '添加链接',
      data: user,
      icoUrl,
      icoPath
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

module.exports = UrlController;
