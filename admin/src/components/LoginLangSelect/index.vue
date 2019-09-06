<template>
  <el-select @change="handleSetLanguage" :placeholder="$t('form.Home.Select_Languages')" popper-class="el-select-dropdown__cover">
    <el-option v-for="item in languages" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
    </el-option>
  </el-select>
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
