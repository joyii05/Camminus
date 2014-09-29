// custom Vtype for vtype:'uniqueUserName'
Ext.apply(Ext.form.field.VTypes, {
    uniqueUserName:  function(v) {
        Ext.Ajax.request({
            url: '/unique/user_name/' + v,
            method: 'POST',
            success: function(o) {
                if (o.responseText == 0) {
                    setusernamevalidfalse(v);
                } 
            }
        });
        return true;
    },

    uniqueUserNameText: 'Usuário já em uso.'
});

function setusernamevalidfalse() {
    Ext.apply(Ext.form.field.VTypes, {
        uniqueUserName : function(val, field) {
            var username = val;//Ext.getCmp('regUsername').getValue();
            Ext.Ajax.request({
                url: '/unique/user_name/' + username,
                method: 'POST',
                success: function(o) {
                    if (o.responseText == 0) {
                        setusernamevalidfalse(val);
                    } else {
                        setusernamevalidtrue(val);
                    }
                }
            });
            return false;
        }
    });
}

function setusernamevalidtrue() {
    Ext.apply(Ext.form.field.VTypes, {
        uniqueUserName : function(val, field) {
            var username = val;//Ext.getCmp('regUsername').getValue();
            Ext.Ajax.request({
                url: '/unique/user_name/' + username,
                method: 'POST',
                success: function(o) {
                    if (o.responseText == 0) {
                        setusernamevalidfalse(val);
                    } else {
                        setusernamevalidtrue(val);
                    }
                }
            });
            return true;
        }
    });
}