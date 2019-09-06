// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'e2e tests: panels': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer + '/#/panels')
      .waitForElementVisible('#app', 1000)
      .assert.elementPresent('.x-panel')
    // .assert.containsText('h1', 'Welcome to Your Vue.js App')
    // .assert.elementCount('img', 1)
      .end()
  },
  'e2e tests: tabs': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer + '/#/tabs')
      .waitForElementVisible('#app', 1000)
      .assert.elementPresent('.x-tabs')
      .end()
  },
  'e2e tests: collapses': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer + '/#/collapses')
      .waitForElementVisible('#app', 1000)
      .assert.elementPresent('.x-collapse')
      .end()
  },
  'e2e tests: cards': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer + '/#/cards')
      .waitForElementVisible('#app', 1000)
      .assert.elementPresent('.x-card')
      .end()
  }
}
