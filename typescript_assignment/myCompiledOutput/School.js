"use strict";
var students_names;
var School = /** @class */ (function () {
    function School() {
        this.school_name = "Hogwarts";
        this.students_names = new Array("Harry Potter", "Ginny Weasley", "Hermione Granger", "Crabbe");
    }
    return School;
}());
function start() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Harry Potter, Ginny Weasley, Hermione Granger, Crabbe';
}
document.getElementById('start').addEventListener('click', start);
//# sourceMappingURL=School.js.map