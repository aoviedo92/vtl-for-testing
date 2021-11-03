const utils = require('amplify-appsync-simulator/lib/velocity/util')
const {map} = require('amplify-appsync-simulator/lib/velocity/value-mapper/mapper')
const {Compile, parse} = require('amplify-velocity-template')
const fs = require('fs')
const path = require('path')

const example_request_vm = `
#set($a=1)
$util.toJson($a)
$util.toJson($ctx.arguments)
`
const templatePath = path.resolve(__dirname, './templates/example.request.vm')
const createTemplate = fs.readFileSync(templatePath, {encoding: 'utf8'})

const ast = parse(createTemplate)

const compiler = new Compile(ast, {
  valueMapper: map,
  escape: false
})

function createVtlContext(args, info) {
  const util = utils.create([], new Date(Date.now()), {})
  const context = {
    info,
    args,
    arguments: args
  }
  return {
    util,
    utils: util,
    ctx: context,
    context
  }
}

module.exports = function (args, info) {
  const context = createVtlContext(args, info)
  return compiler.render(context)
}
