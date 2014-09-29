/*
 * File: app/model/User.js
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

Ext.define('Camminus.model.User', {
    extend: 'Ext.data.Model',
    alias: 'model.user',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.data.association.BelongsTo'
    ],
    uses: [
        'Camminus.model.Role'
    ],

    fields: [
        {
            name: 'id',
            persist: false,
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'user_name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'password',
            type: 'string'
        },
        {
            name: 'profile_image',
            type: 'string'
        },
        {
            name: 'reports_to',
            type: 'string'
        },
        {
            name: 'contract_type_id',
            type: 'string'
        },
        {
            name: 'role_id',
            type: 'int'
        },
        {
            name: 'contract_start',
            type: 'date'
        },
        {
            name: 'phone_home',
            type: 'string'
        },
        {
            name: 'phone_mobile',
            type: 'string'
        },
        {
            name: 'phone_other',
            type: 'string'
        },
        {
            name: 'address_street',
            type: 'string'
        },
        {
            name: 'address_number',
            type: 'string'
        },
        {
            name: 'address_complement',
            type: 'string'
        },
        {
            name: 'address_neighborhood',
            type: 'string'
        },
        {
            name: 'address_city',
            type: 'string'
        },
        {
            name: 'address_state',
            type: 'string'
        },
        {
            name: 'address_zip',
            type: 'string'
        },
        {
            name: 'emergency_contact_name',
            type: 'string'
        },
        {
            name: 'emergency_contact_phone_home',
            type: 'string'
        },
        {
            name: 'emergency_contact_phone_mobile',
            type: 'string'
        },
        {
            name: 'emergency_contact_notes',
            type: 'string'
        },
        {
            name: 'is_active',
            type: 'boolean'
        },
        {
            name: 'passwordCheck',
            persist: false,
            type: 'string'
        }
    ],

    proxy: {
        type: 'rest',
        extraParams: {
            genes: true
        },
        simpleSortMode: true,
        url: '/users',
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json',
            root: 'data'
        }
    },

    belongsTo: {
        model: 'Camminus.model.Role',
        foreignKey: 'role_id'
    }
});