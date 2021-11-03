const compile = require("./compiler")

const GraphQLResolveInfo = {
  variables: {
    documents: ["XXX-X", "YYY-Y"],
    published_debtor_dicom: true
  },
}
const args = {

}

const result = compile(args, GraphQLResolveInfo)
console.log(result)

const r = JSON.parse(result)
console.log(r.params.body.query)
