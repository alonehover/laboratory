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

  // 添加链接
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
    let icoFileName = host + '.ico';

    try {
      // 抓取网站icon
      await ctx.curl(icoUrl, {
        writeStream: fs.createWriteStream(path.resolve(process.cwd(), 'app/public/favicons/' + icoFileName)),
      });
    } catch (error) {
      icoFileName = '';
    }

    const user = await app.mysql.insert('link_url', { name, description, url, icon: icoFileName });

    this.ctx.body = {
      name: '添加链接',
      data: user,
      icoUrl,
      icoFileName
    };
  }

  async update() {
    this.ctx.body = {
      name: '修改链接',
    };
  }

  async delete() {
    const { ctx, app } = this;
    const { id } = ctx.params;
    
    if(!id) {
      this.ctx.body = {
        code: 500,
        data: '',
        msg: '缺少必要参数'
      };

      return false;
    }

    try {
      const res = await app.mysql.delete('link_url', { id });
      
      if(res.affectedRows) {
        this.ctx.body = {
          code: 200,
          data: '',
          msg: '删除成功'
        };

        return true;
      }

      throw('无效操作');
    } catch (error) {
      this.ctx.body = {
        code: 500,
        data: error,
        msg: '删除失败'
      };
    }
  }
}

module.exports = UrlController;
