import findContext from '../_util/findContext';

export default ( event, handler, context ) => findContext( context ).removeEventListener( event, handler );
