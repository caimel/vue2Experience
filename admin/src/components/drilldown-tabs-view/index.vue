<template>
    <x-collapse v-model="activeNames" @change="handleChange">
      <x-collapse-item name="1">
        <slot></slot>
      </x-collapse-item>
      <x-collapse-item name="2">
        <component-link-tabs :instance="activeNames" ref="tabs" v-model="tabs" @enlarge="handleHeaderBottom">
        <template slot="view">
           <slot name="view"></slot>
        </template>
        </component-link-tabs>
      </x-collapse-item>
    </x-collapse>
</template>
<script>
export default {
  name: 'DrilldownTabsView',
  components: {},
  props: {
    helpSrc: String
  },
  data () {
    return {
      activeNames: ['1'],
      tabs: []
    }
  },
  computed: {
    hasView () {
      return this.$slots.view !== undefined
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    Add_Tab (tab) {
      this.activeNames = ['1', '2']
      this.$refs['tabs'].Add_Tab(tab)
    },
    handleChange (actives) {},
    handleHeaderTop () {
      const only_top = ['1']
      const top_bottom = this.tabs.length > 0 ? ['1', '2'] : ['1']
      this.activeNames = this.activeNames.length === 1 ? top_bottom : only_top
      this.emitEventHandler('tab_length_change', this)
    },
    handleHeaderBottom () {
      const only_bottom = ['2']
      const top_bottom = ['1', '2']
      this.activeNames = this.activeNames.length === 1 ? top_bottom : only_bottom
    }
  },
  created () {
    this.emitEventHandler('tab_length_change', this)
  },
  watch: {
    'tabs.length': {
      immediate: false,
      handler: function (val, oldVal) {
        if (val === 0) {
          this.activeNames = ['1']
        }
        this.emitEventHandler('tab_length_change', this)
      }
    }
  }
}
</script>

<style scoped>
  .page-container{
    height: 100%;
    width: 100%;
  }
</style>
