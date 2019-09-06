<template>
  <div class="x-lockview-container animated" :class="{bounceIn: passwordError}">
    <transition name="el-fade-in-linear">
      <el-form v-show="!isLock" class="lock-form" :model="lockForm"  ref="lockForm" label-position="left">
        <el-form-item prop="password">
          <el-input name="password" type="password"  v-model="lockForm.password"  :placeholder="$t('form.Home.password')"
                    @keyup.enter.native="lock"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:47%;" @click="cancelLock">{{$t('button.Cancel')}}</el-button>
          <el-button type="primary" style="width:46%;" @click="lock">{{$t('button.Lock')}}</el-button>
        </el-form-item>
      </el-form>
    </transition>
    <transition name="el-fade-in-linear">
      <el-form v-show="isLock" class="lock-form" :model="unLockForm"  ref="unLockForm" label-position="left">
        <el-form-item prop="password">
          <el-input name="password" type="password"  v-model="unLockForm.password"  :placeholder="$t('form.Home.password')"
                    @keyup.enter.native="unLock"/>
        </el-form-item>
        <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="unLock">{{$t('button.unLock')}}</el-button>
      </el-form>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Lock',
  components: {},
  directives: {},
  props: {},
  data () {
    return {
      unLockForm: {},
      lockForm: {},
      isLock: false,
      passwordError: false
    }
  },
  computed: {},
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    lock () {
      if (this.lockForm.password) {
        this.unLockForm.password = undefined
        this.isLock = true
        return
      }
      this.$message({type: 'warning', message: 'password error'})
    },
    cancelLock () {
      this.$router.push({ name: this.$route.params.returnRouteName })
    },
    unLock () {
      if (this.unLockForm.password === this.lockForm.password) {
        this.lockForm.password = undefined
        this.isLock = false
        this.$router.push({ name: this.$route.params.returnRouteName })
        return
      }
      this.passwordError = true
      const that = this
      setTimeout(function () {
        that.passwordError = false
      }, 1000 * 2)
      this.$message({type: 'error', message: 'password error'})
    }
  },
  watch: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.x-lockview-container{
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1500;
  background-color: #667aa6;
  .lock-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 300px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
}
</style>
