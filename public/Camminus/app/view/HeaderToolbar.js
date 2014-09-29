/*
 * File: app/view/HeaderToolbar.js
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

Ext.define('Camminus.view.HeaderToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.headertoolbar',

    requires: [
        'Camminus.view.Translation',
        'Ext.Img',
        'Ext.toolbar.Fill',
        'Ext.button.Split'
    ],

    height: 60,
    width: 582,

    layout: {
        type: 'hbox',
        padding: ''
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'image',
                    height: 50,
                    padding: '',
                    width: 244,
                    src: 'resources/images/camminus.png'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'translation',
                    disabled: true
                },
                {
                    xtype: 'button',
                    itemId: 'logoutButton',
                    text: 'Sair'
                },
                {
                    xtype: 'button',
                    text: 'FingerCompare',
                    listeners: {
                        click: {
                            fn: me.onButtonClick1,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick1: function(button, e, eOpts) {



    }

});