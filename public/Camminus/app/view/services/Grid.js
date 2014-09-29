/*
 * File: app/view/services/Grid.js
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

Ext.define('Camminus.view.services.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.servicesgrid',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'Ext.Img',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.grid.View',
        'Ext.grid.column.Column'
    ],

    height: 315,
    width: 1233,
    bodyBorder: true,
    header: false,
    store: 'Services',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    itemId: 'toptoolBar',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'combobox',
                            onTriggerClick: function() {
                                this.clearValue();
                                this.getStore().load();
                                this.hideTrigger = true;



                            },
                            listConfig: {
                                loadingText: 'Buscando...',
                                emptyText: 'Nenhum resultado...'
                            },
                            itemId: 'searchrolesgrid',
                            width: 270,
                            fieldLabel: 'Label',
                            hideLabel: true,
                            enableKeyEvents: true,
                            hideTrigger: true,
                            triggerCls: 'x-form-clear-trigger',
                            displayField: 'name',
                            minChars: 1,
                            store: 'Services',
                            typeAhead: true,
                            listeners: {
                                keyup: {
                                    fn: me.onSearchgridKeyup,
                                    scope: me
                                },
                                select: {
                                    fn: me.onSearchgridSelect,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'image',
                            height: 16,
                            width: 16,
                            imgCls: 'search'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        me.processAddService({
                            xtype: 'button',
                            itemId: 'addService',
                            iconAlign: 'right',
                            iconCls: 'add-button',
                            text: ''
                        }),
                        me.processEditService({
                            xtype: 'button',
                            disabled: true,
                            itemId: 'editService',
                            iconAlign: 'right',
                            iconCls: 'edit-button',
                            text: ''
                        }),
                        me.processDeleteService({
                            xtype: 'button',
                            disabled: true,
                            itemId: 'deleteService',
                            iconAlign: 'right',
                            iconCls: 'delete-button',
                            text: ''
                        }),
                        me.processRefreshService({
                            xtype: 'button',
                            itemId: 'refreshService',
                            iconAlign: 'right',
                            iconCls: 'refresh-button',
                            text: ''
                        })
                    ]
                }
            ],
            listeners: {
                select: {
                    fn: me.onGridpanelSelect,
                    scope: me
                }
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Nome',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'description',
                    text: 'Descrição',
                    flex: 3
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return 'R$ ' + value.toFixed(2).replace('.', ',');
                    },
                    width: 115,
                    dataIndex: 'preco',
                    text: 'Preço'
                }
            ]
        });

        me.callParent(arguments);
    },

    processAddService: function(config) {
        config.tooltip = translations.button_new;
        return config;
    },

    processEditService: function(config) {
        config.tooltip = translations.button_edit;
        return config;
    },

    processDeleteService: function(config) {
        config.tooltip = translations.button_delete;
        return config;
    },

    processRefreshService: function(config) {
        config.tooltip = translations.button_refresh;
        return config;
    },

    onSearchgridKeyup: function(textfield, e, eOpts) {
        if (textfield.rawValue === ''){
            textfield.hideTrigger = true;
        }
        else{
            textfield.hideTrigger = false;
        }
    },

    onSearchgridSelect: function(combo, records, eOpts) {
        var store = this.getStore();

        store.load({
          params: {query: records[0].data.name}
        });


    },

    onGridpanelSelect: function(rowmodel, record, index, eOpts) {
        this.down('button#editService').setDisabled(false);
        this.down('button#deleteService').setDisabled(false);


    }

});