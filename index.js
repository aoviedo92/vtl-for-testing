const compile = require("./compiler")

const GraphQLResolveInfo = {
  variables: {
  },
}
const args = {
  id: "1010191"
}

const result = compile(args, GraphQLResolveInfo)
console.log(result)

// const r = JSON.parse(result)
// console.log(r.params.body.query)
