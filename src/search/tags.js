import findContext from '../_util/findContext';

export default ( tagName, context ) => findContext( context ).getElementsByTagName( tagName );
