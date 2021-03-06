/*
 * File: app/view/services/Form.js
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

Ext.define('Camminus.view.services.Form', {
    extend: 'Ext.window.Window',
    alias: 'widget.servicesform',

    requires: [
        'Ext.form.Panel',
        'Ext.XTemplate',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],

    height: 239,
    width: 433,
    layout: 'fit',
    title: 'Editar Serviço',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 250,
                    width: 386,
                    layout: 'auto',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 10,
                                    afterLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                                    ],
                                    fieldLabel: 'Nome',
                                    labelAlign: 'top',
                                    name: 'name',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                me.processPreco({
                                    xtype: 'textfield',
                                    mask: 'R$ #9.999.990,00',
                                    money: true,
                                    flex: 3,
                                    margin: '0 0 0 10',
                                    afterLabelTextTpl: [
                                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                                    ],
                                    fieldLabel: 'Preço',
                                    labelAlign: 'top',
                                    name: 'preco',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                })
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            margin: '5 0 0 0 ',
                            width: 403,
                            fieldLabel: 'Descrição',
                            labelAlign: 'top',
                            name: 'description'
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
                                    itemId: 'servicesCancel',
                                    text: 'Cancelar'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'servicesButton',
                                    text: 'Atualizar'
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

    processPreco: function(config) {
        config.plugins = ["textmask"];

        return config;
    },

    onWindowShow: function(component, eOpts) {

        if (component.adding) {
            component.adding = undefined;

            component.setTitle('Criar novo serviço');

            component.down('#servicesButton').setText('Salvar');

        }
    }

});