<template>
  <el-dropdown trigger="click" class='international' @command="handleSetLanguage">
    <x-icon name="el-icon-cn-yingwenmoshi" :size="iconSize" :color="iconColor"></x-icon>
    <el-dropdown-menu slot="dropdown">
      <template v-for="item in languages">
        <el-dropdown-item :key="item.value" :command="item.value" :disabled="language===item.value">{{item.label}}</el-dropdown-item>
      </template>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'LangSelect',
  props: {
    iconSize: String,
    iconColor: String,
    languages: {
      type: Array,
      default: function () {
        return []
      }
    },
    fill: {
      type: String,
      default: '#FFFFFF'
    }
  },
  computed: {
    language () {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({message: 'switch language success', type: 'success'})
    }
  }
}
</script>

<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px!important;
}
</style>
