
// Define the error system

var nil = new Error('#NULL!'),
    div0 = new Error('#DIV/0!'),
    value = new Error('#VALUE?'),
    ref = new Error('#REF!'),
    name = new Error('#NAME?'),
    num = new Error('#NUM!'),
    na = new Error('#N/A'),
    error = new Error('#ERROR!'),
    data = new Error('#GETTING_DATA'),
    missing = new Error('#MISSING'),
    unknown = new Error('#UNKNOWN');

export default {
  nil:  nil,
  div0: div0,
  value: value,
  ref: ref,
  name: name,
  num: num,
  na: na,
  error: error,
  data: data,
  missing: missing,
  unknown: unknown
}
