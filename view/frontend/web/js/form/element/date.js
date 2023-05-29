define([
    'Magento_Ui/js/form/element/date',
    'ko',
    'jquery',
    'mage/calendar'
], function (Component, ko, $){
    'use strict';

    return Component.extend({
        defaults: {
            listens: {
                'dependentValue': 'onDependentUpdate'
            }
        },

        dependentValue: ko.observable(''),

        onDependentUpdate: function (value) {
            if (value && value !== ""){
                $('#' + this.uid).datepicker("option", "minDate", new Date(value));
            }
            return this;
        }
    });
});
