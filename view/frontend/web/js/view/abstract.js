define([
    'uiComponent',
    'ko',
    'jquery',
    'Magento_Ui/js/modal/modal'
], function (Component, ko, $, modal) {
    'use strict';

    return Component.extend({
        defaults: {
            popUp: {
                element: "#todo-form",
                options: {
                    "type": "popup",
                    "responsive": true,
                    "innerScroll": true,
                    "title": "Create Todo",
                    "trigger": "todo-form",
                    "buttons": {
                        "cancel": {
                            "text": "Close",
                            "class": "action secondary action-hide-popup"
                        }
                    }
                },
            }
        },
        popUpObj: null,

        isPopUpVisible: ko.observable(false),

        getPopUp: function (){
            if (!this.popUpObj){
                var buttons = this.popUp.options.buttons;

                this.popUp.options.buttons = this.getPopUpButtons(
                    [{
                        text: buttons.cancel.text,
                        class: buttons.cancel.class,
                        click: this.onClosePopUp.bind(this)
                    }]
                );

                this.popUp.options.closed = this.afterBindClosePopUp.bind(this);
                this.popUp.options.modalCloseBtnHandler = this.onClosePopUp.bind(this);
                this.popUp.options.keyEventHandlers = {
                    escapeKey: this.onClosePopUp.bind(this)
                }
                this.popUp.options.opened = this.onOpenPopUp.bind(this);
                this.popUpObj = modal(this.popUp.options, $(this.popUp.element));
            }
            return this.popUpObj;
        },
        onClosePopUp: function (){
            this.getPopUp().closeModal();
            return this;
        },
        afterBindClosePopUp: function (){
            this.isPopUpVisible(false);
        },
        onOpenPopUp: function (){
            // @todo
        }
    });
});
