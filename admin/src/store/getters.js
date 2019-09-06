const getters = {
  device: state => state.device.device,
  language: state => state.app.language,
  rootMenus: state => state.menus.rootMenus,
  activeRootMenu: state => state.menus.activeRootMenu,
  sideBarMenus: state => state.menus.sideBarMenus,
  i18n: state => state.app.i18n,
  // sessionToken: state => state.app.sessionToken,
  isLogin: state => state.app.isLogin,
  routers: state => state.router.routers,
  visitedViews: state => state.views.visitedViews,
  cachedViews: state => state.views.cachedViews,
  userAccessLevel: state => state.user.userAccessLevel,
  menus: state => state.menus,
  system: state => state.system.system,
  ApiProject: state => state.system.system.api_project,
  message_logs: state => state.home.message_logs
}
export default getters
