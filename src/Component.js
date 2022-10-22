import propTypes from "prop-types";
/* it's doesn't matter of it class or func component*/
function Component({}) {
  return null;
}
Component.propTypes = {
  person: propTypes.exact({
    name: propTypes.string,
    age: propTypes.oneOfType([propTypes.string, propTypes.number]),
  }).isRequired,
};
/* all propTypes we defined is optional,we add  (is required) that's make the property required */
/*Warning: Failed prop type: Invalid prop `age` of type `string` supplied to `Component`, expected `number
Warning: Failed prop type: The prop `age` is marked as required in `Component`, but its value is `undefined`*/

/* we can check if component renderAble by .node mean renderAble can be string,array,component something renderAble in react
if we pass object {a:1} will get error, Failed prop type: Invalid prop `renderAble` supplied to `Component`, expected a ReactNode,Objects are not valid as a React child
object is not renderAble by react */

/* .element: to make sure is actual react component,it's only work for react component ex :renderAble={<Component />}
to make sure component only accept one child component>>children: propTypes.element.isRequired that's mean the component must have jst one child 
 componentName: propTypes.elementType will return the name of component>>componentName={Link}*/

/* instead of use any stringOrNumber: propTypes.any.isRequired, we can use (oneOfType)>>stringOrNumber: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
this mean is can string or number,if we pass array stringOrNumber=[12],prop `stringOrNumber` supplied to `Component`, expected one of type [string, number].
 */
/* state: propTypes.oneOf(["loading", "ready"]).isRequired,just two value available for this state,
state="loadingz">>prop `state` of value `loadingz` supplied to `Component`, expected one of ["loading","ready"]. */

/* array: propTypes.arrayOf(propTypes.number).isRequired,>>array={[1, 2, 3]} true>>array={['1', '2', '3']},array[0]` of type `string` supplied to `Component`, expected `number`
array: propTypes.arrayOf(
    propTypes.oneOfType([propTypes.number, propTypes.string])).isRequired,array={["1", 2, 3]}>>no error can accept number and string
    array={["1", 2, 3, [12]]}>>`array[3]` supplied to `Component`, expected one of type [number, string] */

/* person: propTypes.shape({
    name: propTypes.string,
    age: propTypes.number,
  }),
  person={{ name: "abood", age: 12 }}>>no error
  person={{ name: "abood", age: "12" }}>>`person.age` of type `string` supplied to `Component`, expected `number
  person={{ name: "abood", age: 12, gender: "female" }} if we add new property to object will not get error because shape it's define the overall shape,
  doesn't have the exactly matches
  to fix this we use exact method if you need object just have name and age
  person: propTypes.exact({
    name: propTypes.string,
    age: propTypes.number,
  }), will get error >>Invalid prop `person` key `gender` supplied to `Component`.
Bad object: {
  "name": "abood",
  "age": 12,
  "gender": "female"
}
Valid keys: [
  "name",
  "age"
]
___
 person: propTypes.exact({
    name: propTypes.string,
    age: propTypes.oneOfType([propTypes.string, propTypes.number]),
  }).isRequired,
  age can accept string & number >>person={{ name: "abood", age: "12" }} no error
*/

export default Component;
