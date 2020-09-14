// // Type definitions for src/libs/util.js
// // Project: [LIBRARY_URL_HERE]
// // Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]>
// // Definitions: https://github.com/borisyankov/DefinitelyTyped
// // createOrUpdate.!ret

// /**
//  *
//  */
// declare interface Ret {

// 	/**
// 	 *
// 	 */
// 	created : boolean;
// }

// /**
//  *
//  * @param array
//  * @param callback
//  */
// declare function asyncForEach(array : any, callback : any): void;

// /**
//  *
//  * @param Model
//  * @param whereCondition
//  * @param restData
//  * @param transaction
//  * @return
//  */
// declare function createOrUpdate(Model : any, whereCondition : any, restData : any, transaction : any): Ret;

// /**
//  *
//  * @param email
//  * @return
//  */
// declare function validateEmail(email : any): boolean;

// /**
//  *
//  * @param date
//  * @param format
//  * @return
//  */
//declare function formatDate(date: Date, format: string): string;
//declare namespace util {}

// declare namespace util {
//   function formatDate(date: Date, format?: string): string;
// }
// export = util;

export function formatDate(date: Date, format?: string): string;
