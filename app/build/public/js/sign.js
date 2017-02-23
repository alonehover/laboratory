"use strict";

// 注册页面
new Vue({
    el: "#signUp",
    data: {
        title: "注册",
        country: "中国",
        country_code: "+86",
        varify_status: true, // 0 不可用，1 可点击
        varify_msg: "获取验证码",
        form: {
            phone: "",
            msg_code: "",
            pwd: "",
        },
        input_active: "",
        show_pwd: true
    },
    methods: {
        sendVarify: function() {
            this.varify_status = false;      
            this.varify_msg = "正在发送...";
        },
        inputVal: function(type) {
            switch(type) {
                case "phone":
                    if(this.form.phone.length > 6){
                        this.varify_status = true;
                    }else {
                        this.varify_status = false;
                    }
                break;
            }
            if(this.form[type].length > 0) {
                this.input_active = type; 
            }
        },
        activeInput: function(type) {
            if(this.form[type].length === 0) {
                this.input_active = ""; 
            }else{
                this.input_active = type
            }
        },
        clearInput: function(name) {
            this.form[name] = "";
            this.input_active = "";
        },
        showPwd: function() {
            this.show_pwd = !this.show_pwd;
        }
    }
});