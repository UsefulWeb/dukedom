import findContext from '../_util/findContext';

export default ( attribute, value, context ) => findContext( context ).setAttribute( attribute, value );
