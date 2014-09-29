/*
 * File: app/model/Case.js
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

Ext.define('Camminus.model.Case', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.data.Field'
    ],

    proxy: {
        type: 'rest',
        simpleSortMode: true,
        url: '/incidents',
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json'
        }
    },

    fields: [
        {
            name: 'id'
        },
        {
            name: 'case_number',
            persist: false,
            type: 'int'
        },
        {
            name: 'costumer_id'
        },
        {
            name: 'user_id',
            persist: false
        },
        {
            name: 'descricao'
        },
        {
            name: 'tipo'
        },
        {
            name: 'prioridade'
        },
        {
            name: 'previsao'
        },
        {
            name: 'situacao'
        },
        {
            name: 'equip_tipo'
        },
        {
            name: 'equip_serial'
        },
        {
            name: 'equip_marca'
        },
        {
            name: 'equip_modelo'
        },
        {
            name: 'equip_hd'
        },
        {
            name: 'equip_cpu'
        },
        {
            name: 'equip_mem'
        },
        {
            name: 'equip_acess'
        },
        {
            name: 'equip_obs'
        },
        {
            name: 'created_at',
            persist: false,
            type: 'date'
        },
        {
            name: 'services',
            type: 'auto'
        }
    ]
});