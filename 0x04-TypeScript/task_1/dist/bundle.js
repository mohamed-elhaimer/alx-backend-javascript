/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony exports printTeacher, StudentClass */
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this._firstName;
    };
    return StudentClass;
}());


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7QUNhTyxTQUFTLFlBQVksQ0FBQyxTQUFpQixFQUFFLFFBQWdCO0lBQzVELE9BQU8sVUFBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQUssUUFBUSxDQUFFO0FBQ3pDLENBQUM7QUFZRDtJQUlJLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJleHBvcnQgaW50ZXJmYWNlIFRlYWNoZXIge1xyXG4gICAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmcsXHJcbiAgICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nLFxyXG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbixcclxuICAgIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyLFxyXG4gICAgbG9jYXRpb246IHN0cmluZyxcclxuICAgIFtpbmRleDpzdHJpbmddOiBhbnksXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XHJcbiAgICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VGVhY2hlcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7Zmlyc3ROYW1lWzBdfS4gJHtsYXN0TmFtZX1gXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xyXG4gICAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzdGQge1xyXG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xyXG4gICAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgc3RkIHtcclxuICAgIHByaXZhdGUgX2ZpcnN0TmFtZSE6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2xhc3ROYW1lITogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuX2xhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ0N1cnJlbnRseSB3b3JraW5nJztcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdE5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=