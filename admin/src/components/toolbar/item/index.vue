<script>
import renders from './renders'
export default {
  name: 'ToolbarItem',
  functional: true,
  render: (createElement, ctx) => {
    const widget = ctx.props.item.widget
    const render = renders[widget]
    return render(createElement, ctx.props.emitFunc, ctx.props.item)
  }
}
</script>

<style scoped>

</style>
