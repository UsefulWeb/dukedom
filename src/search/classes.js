import findContext from '../_util/findContext';

export default ( className, context ) => findContext( context ).getElementsByClassName( className );
