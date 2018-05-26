/* attributes manipulation */
import attr from './attributes/attr'
import attrOf from './attributes/attrOf'
import removeAttr from './attributes/removeAttr'
import removeAttrOf from './attributes/removeAttrOf'
import setAttr from './attributes/setAttr'
import setAttrOf from './attributes/setAttrOf'
import setAttrValue from './attributes/setAttrValue'
import setAttrValueOf from './attributes/setAttrValueOf'

/* classList manipulation */
import addClass from './classList/addClass'
import addClassOf from './classList/addClassOf'
import hasClass from './classList/hasClass'
import hasClassOf from './classList/hasClassOf'
import removeClass from './classList/removeClass'
import removeClassOf from './classList/removeClassOf'

/* element manipulation */
import bindTo from './events/bindTo'
import capture from './events/capture'
import off from './events/off'
import on from './events/on'
import unbindFrom from './events/unbindFrom'
import uncapture from './events/uncapture'

/* search elements */
import classes from './search/classes'
import classesOf from './search/classesOf'
import closest from './search/closest'
import closestOf from './search/closestOf'
import id from './search/id'
import idOf from './search/idOf'
import query from './search/query'
import queryOf from './search/queryOf'
import queryAll from './search/queryAll'
import queryAllOf from './search/queryAllOf'
import tags from './search/tags'
import tagsOf from './search/tagsOf'

export {
  attr,
  attrOf,
  removeAttr,
  removeAttrOf,
  setAttr,
  setAttrOf,
  setAttrValue,
  setAttrValueOf,

  addClass,
  addClassOf,
  hasClass,
  hasClassOf,
  removeClass,
  removeClassOf,

  bindTo,
  capture,
  off,
  on,
  unbindFrom,
  uncapture,

  classes,
  classesOf,
  closest,
  id,
  idOf,
  query,
  queryOf,
  queryAll,
  queryAllOf,
  tags,
  tagsOf
}