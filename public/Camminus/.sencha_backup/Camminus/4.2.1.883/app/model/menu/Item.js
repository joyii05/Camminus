/*
 * File: app/model/menu/Item.js
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

Ext.define('Camminus.model.menu.Item', {
    extend: 'Ext.data.Model',

    uses: [
        'Camminus.model.menu.Root'
    ],
    requires: [
        'Ext.data.Field',
        'Ext.data.association.BelongsTo'
    ],

    fields: [
        {
            name: 'text'
        },
        {
            name: 'iconCls'
        },
        {
            name: 'className'
        },
        {
            name: 'parent_id'
        },
        {
            name: 'id'
        }
    ],

    belongsTo: {
        model: 'Camminus.model.menu.Root',
        foreignKey: 'parent_id'
    }
});