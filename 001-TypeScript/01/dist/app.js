"use strict";
var book = {
    name: "Harry Potter",
    isbn: "123456"
};
var container = document.getElementById('content');
if (container) {
    container.textContent = "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043D\u0438\u0433\u0438: ".concat(book.name, ", ISBN: ").concat(book.isbn);
}
//# sourceMappingURL=app.js.map