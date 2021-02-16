import React from 'react';

function Error({errorMsg}) {
	return(
		errorMsg ? 	 <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{errorMsg}</div> : null
	)
	
}

export default Error;
