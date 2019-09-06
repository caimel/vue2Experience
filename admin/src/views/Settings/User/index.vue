<template>
  <x-panel :items="panel_1">
    <x-toolbar slot="toolbar" ref="toolbar"
               :children="toolbar_children1"
               :remote="toolbar_remote1"
               :url="toolbar_url1"
               @submit-success#update="toolbar1" @confirm-success#delete="toolbar2"></x-toolbar>
    <x-table slot="grid" ref="user"
             :loadColumns="grid_loadColumns1"
             :columnsUrl="grid_columnsUrl1"
             :autoLoad="grid_autoLoad1"
             :url="grid_url1"
             @row-click="grid_rowclick1"></x-table>
  </x-panel>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      GLOBAL: {
        route: {
          params: this.$route.params,
          query: this.$route.query
        }
      },
      toolbar_remote1: true,
      toolbar_url1: '/ToolbarMetadata/Settings/User',
      toolbar_children1: [],
      grid_loadColumns1: true,
      grid_columnsUrl1: '/GridMetadata/Settings/User',
      grid_columnsUrlParams1: {},
      grid_url1: 'User',
      grid_params1: {},
      grid_autoLoad1: true,
      panel_1: [{
        'style': {'flex': 1},
        'equally': true,
        'cols': [{'span': 24, 'slot': 'toolbar'}]
      }, {'style': {'flex': 23}, 'equally': true, 'cols': [{'span': 24, 'slot': 'grid'}]}]
    }
  },
  methods: {
    toolbar1 () {
      this.$refs['user'].loadDataHandler()
    },
    toolbar2 () {
      this.$refs['user'].loadDataHandler()
    },
    grid_rowclick1 (row, event, column) {
      this.$refs['toolbar'].trigger('update', 'setLoadModelParams', {id: row.id})
      this.$refs['toolbar'].trigger('read', 'setLoadModelParams', {id: row.id})
      this.$refs['toolbar'].trigger('delete', 'setParams', {id: row.id})
    }
  },
  timers: []
}
</script>
