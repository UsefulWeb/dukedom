import findContext from '../_util/findContext';

export default ( className, context ) => findContext( context ).classList.remove( className );
