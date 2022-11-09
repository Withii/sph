//vee-validate插件  表单验证区域
import Vue from "vue";
import  VeeValidate from 'vee-validate'
//引入中文
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

//表单验证
VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        //修改内置规则的message,让确认密码和密码相同
        is: (field) => `${field}必须与密码相同`,
    },
    attributes: {//给校验的field属性映射中文名称
        phone: '手机号码',
        code: '验证码',
        password: '密码',
        password1: '确认密码',
        agree: '协议'
    }
});
//自定义校验规则
//定义协议必须打勾同意
VeeValidate.Validator.extend('agree', {
    validate: value => {
        return value
    },
    getMessage: field => field + '必须同意'
})