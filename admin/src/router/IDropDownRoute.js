import IRoute from './IRoute'
class IDropDownRoute extends IRoute {
  constructor (r) {
    r.meta.resources = r.meta.resources || {}
    Object.assign(r.meta.resources, {
      MAIN_VIEW_HEIGHT: '50%',
      TABS_VIEW_HEIGHT: '50%'
    })
    super(r)
  }
}

export default IDropDownRoute
