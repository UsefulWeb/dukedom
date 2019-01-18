/* attributes manipulation */
import attr from './attributes/attr'
import removeAttr from './attributes/removeAttr'
import setAttr from './attributes/setAttr'

/* classList manipulation */
import addClass from './classList/addClass'
import hasClass from './classList/hasClass'
import removeClass from './classList/removeClass'

/* event manipulation */
import off from './events/off'
import on from './events/on'

import rect from './element/rect'

/* search elements */
import classes from './search/classes'
import closest from './search/closest'
import id from './search/id'
import query from './search/query'
import queryAll from './search/queryAll'
import tags from './search/tags'

export {
  rect,

  attr,
  removeAttr,
  setAttr,

  addClass,
  hasClass,
  removeClass,

  off,
  on,

  classes,
  closest,
  id,
  query,
  queryAll,
  tags
}
