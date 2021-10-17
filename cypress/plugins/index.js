/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  require('cypress-grep/src/plugin')(config)
}
