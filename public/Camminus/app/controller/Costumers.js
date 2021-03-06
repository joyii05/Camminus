/*
 * File: app/controller/Costumers.js
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

Ext.define('Camminus.controller.Costumers', {
    extend: 'Ext.app.Controller',

    models: [
        'Costumer'
    ],
    stores: [
        'Costumers'
    ],
    views: [
        'costumers.Grid',
        'costumers.Form'
    ],

    refs: [
        {
            ref: 'costumersForm',
            selector: 'costumersform'
        },
        {
            ref: 'costumersGrid',
            selector: '#costumersGrid'
        }
    ],

    onCostumersGridpanelRender: function(component, eOpts) {
        this.getCostumersStore().load();

    },

    onAddNewCostumerClick: function(button, e, eOpts) {
        var win    = this.getCostumersForm();


        if(!win){
            win = Ext.widget('costumersform');
        }

        win.adding = true;

        win.show();
    },

    onCustumerButtonClick: function(button, e, eOpts) {
        var win    = button.up('window'),
            formPanel   = win.down('form'),
            values = formPanel.getValues(),
            store  = this.getCostumersStore(),
            grid   = this.getCostumersGrid();




        if(formPanel.getForm().isValid()) {



            //Save
            if(button.text === 'Salvar'){
                store.add(values);

                if (grid){
                     grid.getSelectionModel().select(store.getNewRecords());
                }

            }
            //Update
            else{
                formPanel.updateRecord();
            }

            store.sync();

            win.close();


        }



    },

    onRefreshButtonClick: function(button, e, eOpts) {
        this.getCostumersStore().load();
    },

    onDeleteButtonClick: function(button, e, eOpts) {
        var grid = this.getCostumersGrid(),
            record = grid.getSelectionModel().getSelection(),
            store = grid.getStore();


        Ext.Msg.show({

            title: translations.msg_title_delete,
            msg: translations.msg_delete,
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonId){
                console.log(buttonId);
                if (buttonId == 'yes'){
                    store.remove(record);
                    store.sync();
                }
            }

        });



    },

    onEditButtonClick: function(button, e, eOpts) {
        var win = this.getCostumersForm(),
            grid = button.up('costumersgrid'),
            record = grid.getSelectionModel().getSelection();


        if(!win){
            win = Ext.widget('costumersform');
        }


        win.setTitle(record[0].get('name'));
        win.down('form').loadRecord(record[0]);
        win.show();
    },

    onCostumersGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        var win = this.getCostumersForm();

        if(!win){
            win = Ext.widget('costumersform');
        }

        win.setTitle(record.get('name'));
        win.down('form').loadRecord(record);
        win.show();
    },

    init: function(application) {
        this.control({
            "costumersgrid": {
                render: this.onCostumersGridpanelRender,
                itemdblclick: this.onCostumersGridpanelItemDblClick
            },
            "costumersgrid button#new": {
                click: this.onAddNewCostumerClick
            },
            "#costumerButton": {
                click: this.onCustumerButtonClick
            },
            "#refreshCostumer": {
                click: this.onRefreshButtonClick
            },
            "#deleteCostumer": {
                click: this.onDeleteButtonClick
            },
            "#editCostumer": {
                click: this.onEditButtonClick
            }
        });
    }

});
