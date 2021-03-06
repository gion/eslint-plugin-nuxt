/**
 * @fileoverview disallow `setTimeout/setInterval` in `asyncData/fetch`
 * @author Xin Du <clark.duxin@gmail.com>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../require-func-head')

var RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('require-func-head', rule, {

  valid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          head() {
            return {
              title: "My page"
            }
          }
        }
      `,
      parserOptions
    }
  ],

  invalid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          head: {
            title: "My page"
          }
        }
      `,
      errors: [{
        message: '`head` property in component must be a function.',
        type: 'Property'
      }],
      parserOptions
    }
  ]
})
