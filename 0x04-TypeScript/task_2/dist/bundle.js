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
/* unused harmony exports Director, Teacher, createEmployee, isDirector, executeWork */
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());

var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());

function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7QUNZQTtJQUFBO0lBWUEsQ0FBQztJQVhHLCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQixDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0ksT0FBUSx3QkFBd0IsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtJQVlBLENBQUM7SUFYRyw4QkFBWSxHQUFaO1FBQ0ksT0FBTyx1QkFBdUIsQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLE9BQVEscUJBQXFCLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNJLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDOztBQUVNLFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQ2xELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDNUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3hCO1NBQU07UUFDSCxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7S0FDekI7QUFDTCxDQUFDO0FBRU0sU0FBUyxVQUFVLENBQUMsUUFBNEI7SUFDbkQsT0FBTyxRQUFRLFlBQVksUUFBUSxDQUFDO0FBQ3hDLENBQUM7QUFFTSxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUNwRCxJQUFJLFFBQVEsWUFBWSxRQUFRLEVBQUU7UUFDOUIsT0FBTyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7S0FDdEM7U0FBTTtRQUNILE9BQU8sUUFBUSxDQUFDLGdCQUFnQixFQUFFO0tBQ3JDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyxcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyxcclxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyxcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyxcclxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICAgIHdvcmtGcm9tSG9tZSgpIHtcclxuICAgICAgICByZXR1cm4gJ1dvcmtpbmcgZnJvbSBob21lJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2ZmZWVCcmVhaygpIHtcclxuICAgICAgICByZXR1cm4gICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcclxuICAgIH1cclxuXHJcbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCkge1xyXG4gICAgICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2ZmZWVCcmVhaygpIHtcclxuICAgICAgICByZXR1cm4gICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcclxuICAgIH1cclxuXHJcbiAgICB3b3JrVGVhY2hlclRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogVGVhY2hlciB8IERpcmVjdG9yIHtcclxuICAgIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogVGVhY2hlciB8IERpcmVjdG9yKSB7XHJcbiAgICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3RvcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBUZWFjaGVyIHwgRGlyZWN0b3IpOiBzdHJpbmcge1xyXG4gICAgaWYgKGVtcGxveWVlIGluc3RhbmNlb2YgRGlyZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=