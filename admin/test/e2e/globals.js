'use strict'
var HtmlReporter = require('nightwatch-html-reporter')
// https://github.com/jls/nightwatch-html-reporter
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: 'test/e2e/reports',
  reportFilename: 'report.html'
})
module.exports = {
  reporter: reporter.fn
}
