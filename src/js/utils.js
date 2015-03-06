var U = {};

/**
 * Collection of useless functions.
 */
U.Utils = {
 
	// Return same param as passed to function.
	// Example: returnParam(1)
	returnParam: function(param) {
		return param;
	}
	
	// Do nothing for some time and after that, totally ignore callback.
	// This allows callback to be pure JavaScript Object.
	//
	// @param timeout {Number} in miliseconds
	// @param callback {Object}
	doNothing: function(timeout, callback) {
		setTimeout(function(){}, timeout);
	}
}