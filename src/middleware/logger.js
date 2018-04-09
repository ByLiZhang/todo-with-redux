//ES6
export default store => next => action => {
	//middleware code
	console.log('logger middleware:', action);
	return next(action);
}


//ES5 version
//
// export default function(store) {
// 	return function(next){
// 		return function(action){
// 			//middleware code
// 		}
// 	}
// }