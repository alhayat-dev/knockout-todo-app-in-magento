define([
    'uiComponent',
    'ko'
], function (
    Component,
    ko
) {
    "use strict";

    return Component.extend({
        defaults: {
            template: 'MageChamps_TodoList/todo',
            todos: [],
            isVisible: ko.observable(0)
        },
        initialize: function () {
            this._super();
            this.isVisible(this.todos.length)
        },
    });
});
