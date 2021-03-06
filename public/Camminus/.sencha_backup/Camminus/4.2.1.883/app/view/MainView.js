/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
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

Ext.define('Camminus.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',

    requires: [
        'Camminus.view.menu.Accordion',
        'Camminus.view.MainPanel',
        'Camminus.view.HeaderToolbar',
        'Camminus.view.FooterToolbar',
        'Ext.tab.Panel',
        'Ext.toolbar.Toolbar'
    ],

    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'mainmenu',
                    region: 'west',
                    split: true,
                    splitterResize: false
                },
                {
                    xtype: 'mainpanel',
                    region: 'center'
                },
                {
                    xtype: 'headertoolbar',
                    region: 'north',
                    split: true,
                    splitterResize: false
                },
                {
                    xtype: 'footertoolbar',
                    region: 'south',
                    split: true,
                    splitterResize: false
                }
            ]
        });

        me.callParent(arguments);
    }

});