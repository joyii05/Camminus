/*
 * File: app/view/companies/Form.js
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

Ext.define('Camminus.view.companies.Form', {
    extend: 'Ext.window.Window',
    alias: 'widget.companiesform',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.XTemplate',
        'Ext.toolbar.Spacer',
        'Ext.form.field.File',
        'Ext.form.Label',
        'Ext.form.field.Hidden',
        'Ext.form.field.TextArea',
        'Ext.Img',
        'Ext.form.field.Checkbox'
    ],

    height: 443,
    minHeight: 431,
    width: 886,
    autoScroll: true,
    layout: 'fit',
    title: 'Editar Empresa',
    defaultFocus: 'fullName',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                this.up('window').close();

                            },
                            action: 'reset',
                            itemId: 'costumerCancel',
                            text: 'Cancelar'
                        },
                        {
                            xtype: 'button',
                            itemId: 'companiesButton',
                            text: 'Atualizar'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    height: 392,
                    bodyPadding: 10,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            height: 330,
                            width: 308,
                            autoScroll: true,
                            title: 'Informações da Empresa',
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: '',
                                    itemId: '',
                                    width: 285,
                                    afterLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                                    ],
                                    fieldLabel: 'Razão Social',
                                    labelAlign: 'top',
                                    msgTarget: 'side',
                                    name: 'corporate_name',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    minLength: 4
                                },
                                {
                                    xtype: 'textfield',
                                    width: 285,
                                    afterLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="Obrigatório">*</span>'
                                    ],
                                    fieldLabel: 'Nome de fantasia',
                                    labelAlign: 'top',
                                    msgTarget: 'side',
                                    name: 'company_name',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'textfield',
                                    width: 285,
                                    afterLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="Obrigatório">*</span>'
                                    ],
                                    fieldLabel: 'Email',
                                    labelAlign: 'top',
                                    msgTarget: 'side',
                                    name: 'email',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    vtype: 'email'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 285,
                                    fieldLabel: 'Site',
                                    labelAlign: 'top',
                                    msgTarget: 'side',
                                    name: 'site',
                                    allowOnlyWhitespace: false,
                                    vtype: 'url'
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        me.processDocument({
                                            xtype: 'textfield',
                                            mask: '99.999.999/9999-99',
                                            money: false,
                                            flex: 2,
                                            width: 285,
                                            afterLabelTextTpl: [
                                                '<span style="color:red;font-weight:bold" data-qtip="Obrigatório">*</span>'
                                            ],
                                            fieldLabel: 'CNPJ',
                                            labelAlign: 'top',
                                            msgTarget: 'side',
                                            name: 'document',
                                            allowBlank: false,
                                            allowOnlyWhitespace: false,
                                            minLength: 14,
                                            vtype: 'uniqueCompanyDoc'
                                        }),
                                        {
                                            xtype: 'tbspacer',
                                            width: 5
                                        },
                                        me.processPhone({
                                            xtype: 'textfield',
                                            mask: '(99) 9999-9999',
                                            money: false,
                                            width: 115,
                                            afterLabelTextTpl: [
                                                '<span style="color:red;font-weight:bold" data-qtip="Obrigatório">*</span>'
                                            ],
                                            fieldLabel: 'Telefone',
                                            labelAlign: 'top',
                                            msgTarget: 'side',
                                            name: 'phone',
                                            allowBlank: false,
                                            allowOnlyWhitespace: false,
                                            minLength: 10
                                        })
                                    ]
                                },
                                {
                                    xtype: 'filefield',
                                    anchor: '100%',
                                    itemId: 'logo',
                                    maxWidth: 285,
                                    width: 285,
                                    fieldLabel: 'Logo',
                                    labelAlign: 'top',
                                    name: 'logo',
                                    buttonText: 'Procurar...'
                                },
                                {
                                    xtype: 'label',
                                    html: '<font color="gray">(200 x 100px - Máximo: 2MB)</font>'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    anchor: '100%',
                                    fieldLabel: 'Label',
                                    name: 'id'
                                }
                            ]
                        },
                        {
                            xtype: 'tbspacer',
                            width: 10
                        },
                        {
                            xtype: 'fieldset',
                            height: 362,
                            width: 308,
                            autoScroll: true,
                            layout: 'auto',
                            title: 'Endereço',
                            items: [
                                me.processMytriggerfield({
                                    xtype: 'triggerfield',
                                    onTriggerClick: function() {

                                    },
                                    mask: '99999-999',
                                    money: false,
                                    id: '',
                                    itemId: 'mytriggerfield',
                                    width: 285,
                                    fieldLabel: 'CEP:',
                                    labelAlign: 'top',
                                    name: 'address_zip',
                                    minLength: 8,
                                    triggerCls: 'x-form-search-trigger'
                                }),
                                {
                                    xtype: 'textareafield',
                                    width: 285,
                                    fieldLabel: 'Endereço',
                                    labelAlign: 'top',
                                    name: 'address_street'
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            width: 285,
                                            fieldLabel: 'Número',
                                            labelAlign: 'top',
                                            name: 'address_number'
                                        },
                                        {
                                            xtype: 'tbspacer',
                                            width: 5
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            width: 285,
                                            fieldLabel: 'Complemento',
                                            labelAlign: 'top',
                                            name: 'address_complement'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    width: 285,
                                    fieldLabel: 'Bairro',
                                    labelAlign: 'top',
                                    name: 'address_neighborhood'
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            width: 143,
                                            fieldLabel: 'Cidade',
                                            labelAlign: 'top',
                                            name: 'address_city'
                                        },
                                        {
                                            xtype: 'tbspacer',
                                            width: 5
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            width: 285,
                                            fieldLabel: 'Estado',
                                            labelAlign: 'top',
                                            name: 'address_state'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'tbspacer',
                            width: 10
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    height: 129,
                                    width: 220,
                                    title: 'Logo',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'image',
                                            height: 100,
                                            itemId: 'logoImg',
                                            width: 200,
                                            src: 'resources/images/logo_placeholder.jpg'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    height: 87,
                                    width: 170,
                                    title: 'Status',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            disabled: true,
                                            fieldLabel: '',
                                            labelAlign: 'top',
                                            name: 'is_parent',
                                            boxLabel: 'Matriz',
                                            inputValue: 'true',
                                            uncheckedValue: 'false'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            anchor: '100%',
                                            fieldLabel: '',
                                            labelAlign: 'top',
                                            name: 'is_active',
                                            boxLabel: 'Empresa ativa',
                                            inputValue: 'true',
                                            uncheckedValue: 'false'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            listeners: {
                show: {
                    fn: me.onWindowShow,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processDocument: function(config) {
        config.plugins = 'textmask'
        return config;
    },

    processPhone: function(config) {
        config.plugins = 'textmask';
        return config;
    },

    processMytriggerfield: function(config) {
        config.plugins = 'textmask';
        return config;
    },

    onWindowShow: function(component, eOpts) {

        if (component.adding) {
            component.adding = undefined;

            component.setTitle('Criar nova Empresa');

            component.down('#companiesButton').setText('Salvar');

        }
    }

});