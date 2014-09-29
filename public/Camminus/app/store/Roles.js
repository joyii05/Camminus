/*
 * File: app/store/Roles.js
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

Ext.define('Camminus.store.Roles', {
    extend: 'Ext.data.Store',
    alias: 'store.role',

    requires: [
        'Camminus.model.Role',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'Camminus.model.Role',
            remoteSort: true,
            storeId: 'Roles',
            leadingBufferZone: 300,
            pageSize: 30,
            sorters: {
                property: 'name'
            }
        }, cfg)]);
    }
});