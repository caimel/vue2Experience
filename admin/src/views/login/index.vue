<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <div class="title-container">
        <div :style="{display: 'flex', justifyContent: 'center', alignItems: 'center'}" class="title">{{$t('login.title')}}</div>
      </div>
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username"  autoComplete="on" :placeholder="$t('login.username')" :readonly="readonly">
          <i slot="prepend" class="el-icon-cn-yonghu"></i>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" :placeholder="$t('login.password')"  :readonly="readonly">
          <i slot="prepend" class="el-icon-cn-jiesuo"></i>
          <i slot="append" class="el-icon-view" @click="showPwd" style="cursor: pointer"></i>
        </el-input>
      </el-form-item>
      <el-button type="primary" size="mini" class="login-button" :loading="loading" @click="handleSignIn"><span style="font-size: 18px">{{$t('login.sign_in')}}</span></el-button>
    </el-form>
  </div>
</template>

<script>
import Qs from 'qs'
import AccessController from '@/access-controller'
import { mapGetters } from 'vuex'
export default {
  components: {},
  name: 'Login',
  data: function () {
    return {
      iconSize: '18px',
      iconColor: '#92A3B5',
      textColor: '#92A3B5',
      loginForm: {
        username: '',
        password: ''
      },
      passwordType: 'password',
      loading: false,
      readonly: false
    }
  },
  computed: {
    ...mapGetters(['system', 'ApiProject', 'isLogin']),
    language () {
      return this.$store.getters.language
    },
    loginRules: function () {
      return {
        username: [{required: true, message: this.$t('tips.loginName_Message'), trigger: 'blur'}],
        password: [{required: true, message: this.$t('tips.loginPwd_Message'), trigger: 'blur'}]
      }
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') { this.passwordType = '' } else { this.passwordType = 'password' }
    },
    handleSignIn: function () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const vm = this
          vm.loading = true
          const options = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
          // let queryString = new FormData()
          // queryString.append('username', this.loginForm.username)
          // queryString.append('password', this.loginForm.password)
          const queryString = Qs.stringify(this.loginForm)
          vm.$axios.post('/' + vm.ApiProject + '/login/authenticate', queryString, options)
            .then((response) => {
              vm.$store.commit('SET_LOGIN', true)
              AccessController.refreshMenus()
              vm.$router.push({path: '/home'})
            })
            .finally(() => {
              vm.loading = false
            })
        } else {
          return false
        }
      })
    },
    handleSetLanguage (lang) {
      this.$store.commit('SET_LANGUAGE', lang)
      this.$i18n.locale = lang
    }
  },
  watch: {
    system: {
      immediate: true,
      handler: function (system) {
        if (!this.language) this.$store.commit('SET_LANGUAGE', system.defaults.lang)
        this.$i18n.locale = this.language
        this.loginForm.username = system.defaults.user
        this.loginForm.password = system.defaults.user_password
        // this.loginForm.lang = this.language
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
$bg:#2d3a4b;
$light_gray:#eee;

/* cover element-ui css */
.login-container {
  .el-form-item {
    border: 1px solid #3E4A58;
    background: #283442;
    border-radius: 5px;
  }
  .el-input {
    /*height: 4rem;*/
    .el-input-group__prepend,.el-input-group__append {
      /*<!--background-color: $bg;-->*/
      background:none;
      font-size: 1.33rem;
      border:none;
      /*border: 1px solid #3E4A58;*/
    }
    input {
      height: 100%;
      background: transparent;
      border:none;
      color: #FFFFFF;
      /*font-size: 1.67rem;*/
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
    /*input:-webkit-autofill {*/
      /*-webkit-box-shadow: 0 0 0 1000px #2d3a4b inset!important;*/
      /*-webkit-text-fill-color: #fff!important;*/
    /*}*/
    .el-input__inner {
      /*border: 1px solid #3E4A58;*/
    }
  }
  .el-select {
    width: 100%;
  }
  .el-button {
    /*height:4rem;*/
    width:100%;
    margin-bottom:20px;
  }
}

@media screen and (max-width: 1280px){
  .login-form {
    width: 350px;
  }
  .title-container{
    margin-bottom: 2rem;
    div {
      margin-bottom: 1.5rem
    }
    .title {
      color: #FFFFFF;
      font-weight: 700;
      font-size: 3rem;
    }
    .subtitle {
      color: #FFFFFF;
      font-weight: 700;
      font-size: 1.6rem;
    }
  }

}
@media screen and (min-width: 1281px){
  .login-form {
    width: 520px;
  }
  .title-container{
    margin-bottom: 4rem;
    div {
      margin-bottom: 1.5rem;
    }
    .title {
      color: #FFFFFF;
      font-weight: 700;
      font-size: 4rem;
    }
    .subtitle {
      color: #FFFFFF;
      font-weight: 700;
      font-size: 2.5rem;
    }
  }
}

@media screen and (max-height: 578px){
  .login-container {
    .el-input {
      height: 2.67rem
    }
    .el-button{
      height: 2.67rem
    }
  }
}
@media screen and (min-height: 579px){
  .login-container {
    .el-input {
      height: 4rem
    }
    .el-button{
      height: 4rem
    }
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    padding: 35px 35px 15px;
    margin: 0 auto;
    -webkit-transform: translateY(-60%);
    transform: translateY(-60%);
  }

  .tips {
    font-size: 12px;
    color: #576777;
    line-height:18px;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
}
</style>
<style>
  .el-select-dropdown__cover {
    border: 1px solid #283442 !important;
    background-color: #283442 !important;
  }
  .el-select-dropdown__cover .el-select-dropdown__item {
    color: #FFFFFF;
  }
  .el-select-dropdown__cover .el-select-dropdown__item.hover {
    background-color: #2d3949;
    color: #009efc;
  }
  .el-select-dropdown__cover .el-select-dropdown__item:hover {
    background-color: #2d3949;
    color: #009efc;
  }

  .el-select-dropdown__cover.el-popper[x-placement^=bottom]  .popper__arrow{
    border-bottom-color: #283442;
  }
  .el-select-dropdown__cover.el-popper[x-placement^=bottom]  .popper__arrow:after {
    border-bottom-color: #283442;
  }
</style>
