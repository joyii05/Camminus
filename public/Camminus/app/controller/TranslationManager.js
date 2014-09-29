/*
 * File: app/controller/TranslationManager.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Camminus.controller.TranslationManager', {
    extend: 'Ext.app.Controller',

    views: [
        'Translation'
    ],

    refs: [
        {
            ref: 'translation',
            selector: 'translation'
        }
    ],

    onMenuitemClick: function(item, e, eOpts) {
        var menu = this.getTranslation();

        menu.setIconCls(item.iconCls);
        menu.setText(item.text);

        localStorage.setItem("user-lang", item.iconCls);

        window.location.reload();
    },

    onSplitbuttonBeforeRender: function(component, eOpts) {
        var lang = localStorage ? (localStorage.getItem('user-lang') || 'pt_BR') : 'pt_BR';

        component.iconCls = lang;

        if (lang == 'en'){
            component.text = 'English';
        } else if (lang == 'es'){
            component.text = 'Español';
        } else {
            component.text = 'Português';
        }
    },

    init: function(application) {
        this.control({
            "translation menuitem": {
                click: this.onMenuitemClick
            },
            "translation": {
                beforerender: this.onSplitbuttonBeforeRender
            }
        });
    }

});
