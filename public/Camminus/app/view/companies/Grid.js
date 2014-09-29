/*
 * File: app/view/companies/Grid.js
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

Ext.define('Camminus.view.companies.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.companiesgrid',

    requires: [
        'Ext.form.field.ComboBox',
        'Ext.Img',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.column.CheckColumn'
    ],

    height: 315,
    width: 1233,
    bodyBorder: true,
    header: false,
    title: 'Usuários',
    store: 'Companies',

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
                            itemId: 'searchusergrid',
                            width: 270,
                            fieldLabel: 'Label',
                            hideLabel: true,
                            enableKeyEvents: true,
                            hideTrigger: true,
                            triggerCls: 'x-form-clear-trigger',
                            displayField: 'company_name',
                            minChars: 1,
                            store: 'Companies',
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
                        me.processNew({
                            xtype: 'button',
                            itemId: 'new',
                            iconAlign: 'right',
                            iconCls: 'add-button',
                            text: ''
                        }),
                        me.processEditCompany({
                            xtype: 'button',
                            disabled: true,
                            itemId: 'editCompany',
                            iconAlign: 'right',
                            iconCls: 'edit-button',
                            text: ''
                        }),
                        me.processDeleteCompany({
                            xtype: 'button',
                            disabled: true,
                            itemId: 'deleteCompany',
                            iconAlign: 'right',
                            iconCls: 'delete-button',
                            text: ''
                        }),
                        me.processRefreshcompanies({
                            xtype: 'button',
                            itemId: 'refreshcompanies',
                            iconAlign: 'right',
                            iconCls: 'refresh-button',
                            text: ''
                        })
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    store: 'Companies'
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
                    dataIndex: 'company_name',
                    text: 'Nome de Fantasia',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'corporate_name',
                    text: 'Razão Social',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'email',
                    text: 'Email',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'document',
                    text: 'CNPJ',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'phone',
                    text: 'Phone'
                },
                {
                    xtype: 'checkcolumn',
                    width: 49,
                    dataIndex: 'is_active',
                    text: 'Ativo'
                },
                {
                    xtype: 'checkcolumn',
                    width: 55,
                    dataIndex: 'is_parent',
                    text: 'Matriz'
                }
            ]
        });

        me.callParent(arguments);
    },

    processNew: function(config) {
        config.tooltip = translations.button_new;
        return config;
    },

    processEditCompany: function(config) {
        config.tooltip = translations.button_edit;
        return config;
    },

    processDeleteCompany: function(config) {
        config.tooltip = translations.button_delete;
        return config;
    },

    processRefreshcompanies: function(config) {
        config.tooltip = translations.button_refresh;
        return config;
    },

    onSearchgridKeyup: function(textfield, e, eOpts) {
        var store = this.getStore();

        if (textfield.rawValue === ''){
            store.load();
            textfield.hideTrigger = true;
        }
        else{
            textfield.hideTrigger = false;
        }
    },

    onSearchgridSelect: function(combo, records, eOpts) {
        var store = this.getStore();

        store.load({
          params: {query: records[0].data.company_name}
        });

    },

    onGridpanelSelect: function(rowmodel, record, index, eOpts) {
        this.down('button#editCompany').setDisabled(false);
        this.down('button#deleteCompany').setDisabled(false);


    }

});