<script>
import renders from './renders'
export default {
  name: 'Widget',
  functional: true,
  render: (createElement, ctx) => {
    const config = ctx.props.config
    const widget = config.widget ? config.widget : 'input'
    const render = renders[widget]
    if (!render) { throw new Error(`This Widget [${widget}] is not supported, you can extend it. `) }
    Object.assign(ctx.data.props, config)
    return render(createElement, ctx)
  }
}
</script>

<style scoped>

</style>
