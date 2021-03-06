/*
 * File: app/model/Costumer.js
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

Ext.define('Camminus.model.Costumer', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'name'
        },
        {
            name: 'email'
        },
        {
            name: 'document'
        },
        {
            name: 'obs'
        },
        {
            name: 'phone'
        },
        {
            name: 'phone_home'
        },
        {
            name: 'address_street'
        },
        {
            name: 'address_number'
        },
        {
            name: 'address_complement'
        },
        {
            name: 'address_neighborhood'
        },
        {
            name: 'address_city'
        },
        {
            name: 'address_state'
        },
        {
            name: 'address_zip'
        },
        {
            name: 'is_company',
            type: 'string'
        },
        {
            name: 'fingerImage'
        },
        {
            name: 'fingerTemplate'
        }
    ],

    proxy: {
        type: 'rest',
        simpleSortMode: true,
        url: '/costumers',
        reader: {
            type: 'json',
            idProperty: 'id',
            root: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});