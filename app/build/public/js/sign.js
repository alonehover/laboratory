"use strict";

function getVarifyImgUrl() {
    var varify_img_url = "https://account.toursforfun.com/captcha";
    return varify_img_url + "?_t=" + new Date().getTime();
}

var pre_code = [{
    country: "中國",
    code: "+86"
},{
    country: "美國",
    code: "+0"
}]

// 注册页面
new Vue({
    el: "#signUp",
    data: {
        title: "注册",
        country: "中国",
        varify_status: false, // 0 不可用，1 可点击
        varify_msg: "获取验证码",
        form: {
            phone: "",
            pre_code: "+86",
            msg_code: "",
            pwd: "",
            varify_code: ""
        },
        input_active: "",
        show_pwd: true,
        varify_img: getVarifyImgUrl(),
        varify_panel_show: false,
        pre_panel_show: false,
        pre_list: pre_code
    },
    methods: {
        // 发送验证码
        sendVarify: function() {
            this.varify_status = false;
            this.varify_panel_show = true;
            this.varify_msg = "正在发送...";
        },
        // 输入框输入
        inputVal: function(type) {
            this.form[type] = this.form[type].trim();

            switch(type) {
                case "phone":
                    if(this.form.phone.length > 6){
                        this.varify_status = true;
                    }else {
                        this.varify_status = false;
                    }
                break;
            }
            
            if(this.form[type]) {
                this.input_active = type; 
            }
        },
        // 输入框获取焦点
        activeInput: function(type) {
            if(!this.form[type].trim()) {
                this.input_active = ""; 
            }else{
                this.input_active = type
            }
        },
        // 清除输入值
        clearInput: function(name) {
            this.form[name] = "";
            this.input_active = "";
        },
        // 密码框类型转换
        showPwd: function() {
            this.show_pwd = !this.show_pwd;
        },
        changeVarifyImg: function() {
            this.varify_img = getVarifyImgUrl()
        },
        // 校验验证码
        varifyCode: function() {
            this.varify_panel_show = false;
            var _this = this;
            var times = 60;

            _this.varify_msg = times + "秒后重新发送";

            var timeSet = setInterval(function() {
                if(times > 1){
                    console.log(times)
                    _this.varify_msg = (--times) + "秒后重新发送";
                }else{
                    clearInterval(timeSet);
                    _this.varify_msg = "重新发送";
                    _this.varify_status = true;
                }
            }, 1000);
        },
        cancelVarifyCode: function() {
            this.varify_status = true;
            this.varify_panel_show = false;
            this.varify_msg = "获取验证码";
        },
        selectPreCode: function(data) {
            this.form.pre_code = data.code;
            this.country = data.country;
            this.pre_panel_show = false;
        }
    },
    computed: {
        validation: function() {
            return {
                phone: !!this.form.phone.trim(),
                msg_code: !!this.form.msg_code.trim(),
                pwd: !!this.form.pwd.trim(),
                reg: !!this.form.phone.trim() && !!this.form.msg_code.trim() && !!this.form.pwd.trim()
            }
        }
    }
});