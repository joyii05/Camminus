/*
 * File: app/view/costumers/Form.js
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

Ext.define('Camminus.view.costumers.Form', {
    extend: 'Ext.window.Window',
    alias: 'widget.costumersform',

    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.XTemplate',
        'Ext.toolbar.Spacer',
        'Ext.form.field.TextArea',
        'Ext.form.field.Hidden',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],

    height: 431,
    minHeight: 431,
    width: 656,
    autoScroll: true,
    layout: 'fit',
    title: 'Editar Cliente',
    defaultFocus: 'fullName',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                show: {
                    fn: me.onWindowShow,
                    scope: me
                }
            },
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
                            title: 'Informações do Cliente',
                            items: [
                                {
                                    xtype: 'radiogroup',
                                    disabled: true,
                                    itemId: 'costumerRadioGroup',
                                    width: 274,
                                    layout: 'hbox',
                                    fieldLabel: '',
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            itemId: 'pessoaFisica',
                                            fieldLabel: '',
                                            name: 'is_company',
                                            boxLabel: 'Pessa Física',
                                            inputValue: 'false'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            margin: '0 0 0 20',
                                            fieldLabel: '',
                                            name: 'is_company',
                                            boxLabel: 'Pessoa Jurídica',
                                            inputValue: 'true'
                                        }
                                    ],
                                    listeners: {
                                        change: {
                                            fn: me.onRadiogroupChange,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    id: '',
                                    itemId: 'costumerName',
                                    width: 285,
                                    afterLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                                    ],
                                    fieldLabel: 'Razão Social',
                                    labelAlign: 'top',
                                    msgTarget: 'side',
                                    name: 'name',
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
                                    fieldLabel: 'Email',
                                    labelAlign: 'top',
                                    msgTarget: 'side',
                                    name: 'email',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    vtype: 'email'
                                },
                                me.processCostumerDoc({
                                    xtype: 'textfield',
                                    mask: '99.999.999/9999-99',
                                    money: false,
                                    disabled: true,
                                    itemId: 'costumerDoc',
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
                                    vtype: 'uniqueCostumerDoc'
                                }),
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        me.processPhone({
                                            xtype: 'textfield',
                                            mask: '(99) 9999-9999',
                                            money: false,
                                            flex: 1,
                                            width: 285,
                                            afterLabelTextTpl: [
                                                '<span style="color:red;font-weight:bold" data-qtip="Obrigatório">*</span>'
                                            ],
                                            fieldLabel: 'Celular',
                                            labelAlign: 'top',
                                            msgTarget: 'side',
                                            name: 'phone',
                                            allowBlank: false,
                                            allowOnlyWhitespace: false,
                                            minLength: 10
                                        }),
                                        {
                                            xtype: 'tbspacer',
                                            width: 5
                                        },
                                        me.processPhone_home({
                                            xtype: 'textfield',
                                            money: false,
                                            mask: '(99) 9999-9999',
                                            flex: 1,
                                            width: 285,
                                            fieldLabel: 'Residencial:',
                                            labelAlign: 'top',
                                            msgTarget: 'side',
                                            name: 'phone_home',
                                            minLength: 10
                                        })
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    height: 62,
                                    width: 285,
                                    fieldLabel: 'Observações',
                                    labelAlign: 'top',
                                    name: 'obs'
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
                            title: 'Endereço',
                            items: [
                                me.processAddress_zip({
                                    xtype: 'textfield',
                                    mask: '99999-999',
                                    money: false,
                                    id: '',
                                    width: 285,
                                    fieldLabel: 'CEP:',
                                    labelAlign: 'top',
                                    name: 'address_zip',
                                    minLength: 8
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
                        }
                    ],
                    listeners: {
                        afterrender: {
                            fn: me.onFormAfterRender,
                            scope: me
                        }
                    }
                }
            ],
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
                            itemId: 'costumerButton',
                            text: 'Atualizar'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    processCostumerDoc: function(config) {
        config.plugins = 'textmask';
        return config;
    },

    processPhone: function(config) {
        config.plugins = 'textmask';
        return config;
    },

    processPhone_home: function(config) {
        config.plugins = 'textmask';
        return config;
    },

    processAddress_zip: function(config) {
        config.plugins = 'textmask';
        return config;
    },

    onWindowShow: function(component, eOpts) {

        if (component.adding) {

            component.setTitle('Criar novo cliente');

            component.down('#costumerButton').setText('Salvar');

            component.down('radiogroup').setValue({is_company: "false"});

            component.down('#costumerRadioGroup').setDisabled(false);

            component.down('#costumerDoc').setDisabled(false);


        }
    },

    onRadiogroupChange: function(field, newValue, oldValue, eOpts) {
        var name = field.up('form').down('#costumerName'),
            doc  = field.up('form').down('#costumerDoc'),
            win  = field.up('window');

        if (win.adding){

            if (newValue.is_company == 'true'){
                name.labelEl.update('Razão Social:<span style="color:red;font-weight:bold" data-qtip="Required">*</span>');
                doc.labelEl.update('CNPJ:<span style="color:red;font-weight:bold" data-qtip="Required">*</span>');
                doc.setMask('99.999.999/9999-99');
                doc.minLength = 14;
            }
            else{
                name.labelEl.update('Nome:<span style="color:red;font-weight:bold" data-qtip="Required">*</span>');
                doc.labelEl.update('CPF:<span style="color:red;font-weight:bold" data-qtip="Required">*</span>');
                doc.setMask('999.999.999-99');
                doc.minLength = 11;
            }
        }

    },

    onFormAfterRender: function(component, eOpts) {
        var name = component.down('#costumerName'),
            doc  = component.down('#costumerDoc'),
            values = component.down('#costumerRadioGroup').getValue();

        if (values.is_company == "false"){
            name.labelEl.update('Nome:<span style="color:red;font-weight:bold" data-qtip="Required">*</span>');
            doc.labelEl.update('CPF:<span style="color:red;font-weight:bold" data-qtip="Required">*</span>');
            doc.setMask('99.999.999-99');
            doc.minLength = 11;
        }
    }

});