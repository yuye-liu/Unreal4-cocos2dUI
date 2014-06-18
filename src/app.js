var HelloWorldLayer = cc.Layer.extend({
    size:null,
    ctor:function ()
    {
        this._super();
        size = cc.director.getWinSize();

        this.systemMassages = ["SystemMassages","-Player david connected","-Disconnections..."];

       var firstPlace = size.height;

        for(var i = 0; i<this.systemMassages.length;i++)
        {
            var label = cc.LabelTTF.create(this.systemMassages[i], "Arial", 20);
            label.setAnchorPoint(cc.p(0,1));
            label.x = 0;
            label.y = firstPlace-label.getContentSize().height*i;
            label.setColor(cc.color(219, 112, 147));
            this.addChild(label, 5);
        }

        this.redar = cc.Sprite.create("res/radar.png");
        this.redar.setAnchorPoint(cc.p(1,1));
        this.redar.setPosition(cc.p(size.width,size.height));
        this.addChild(this.redar, 0);

        var redarHeight = this.redar.getContentSize().height;
       redarHeight = 200;
       firstPlace = this.redar.getPositionY()- redarHeight;

        this.menu = cc.Menu.create();
        this.menu.x = 0;
        this.menu.y = 0;
        this.addChild(this.menu);

        this.gunImage1 = ["gun1","gun2","gun3","fireball1"];
        this.gunImage2 = ["gun12","gun22","gun32","fireball12"];

        for(var j = 0;j<this.gunImage1.length;j++)
        {
            var picName ;
            if(0==j)
            {
                picName = "res/"+this.gunImage1[j]+".png";
            }
            else
            {
                picName = "res/"+this.gunImage2[j]+".png";
            }
            var weapon = cc.MenuItemImage.create
            (
                picName,
                picName,
                this.switchWeapon,
                this
            );

            weapon.setScale(0.3);
            if(0==j)
            {
                weapon.setScale(0.5);
            }
            weapon.setAnchorPoint(cc.p(1,1));

            var weaponHeight = weapon.getContentSize().height;
            weaponHeight = 100;
            weapon.setPosition(cc.p(size.width,firstPlace-weaponHeight*j));
            weapon.setTag(j);
            this.menu.addChild(weapon);
        }

        {
            var ammoLabel = cc.LabelTTF.create("50", "Arial", 30);
            ammoLabel.setAnchorPoint(cc.p(0, 0.5));
            ammoLabel.x = 900;
            ammoLabel.y = 100;
            ammoLabel.setColor(cc.color(0, 112, 147));
            this.addChild(ammoLabel, 5);

            var slideLabel = cc.LabelTTF.create("/", "Arial", 30);
            slideLabel.setAnchorPoint(cc.p(0, 0.5));
            slideLabel.x = ammoLabel.getPositionX() + ammoLabel.getContentSize().width;
            slideLabel.y = ammoLabel.getPositionY();
            slideLabel.setColor(cc.color(219, 112, 147));
            this.addChild(slideLabel, 5);

            var capacityLabel = cc.LabelTTF.create("100", "Arial", 30);
            capacityLabel.setAnchorPoint(cc.p(0, 0.5));
            capacityLabel.x = slideLabel.getPositionX() + slideLabel.getContentSize().width;
            capacityLabel.y = slideLabel.getPositionY();
            capacityLabel.setColor(cc.color(219, 112, 147));
            this.addChild(capacityLabel, 5);
        }

        for(var i = 0; i<this.systemMassages.length;i++)
        {
            var label = cc.LabelTTF.create(this.systemMassages[i], "Arial", 20);
            label.setAnchorPoint(cc.p(0,1));
            label.x = 400;
            label.y = 200-label.getContentSize().height*i;
            label.setColor(cc.color(0, 112, 0));
            this.addChild(label, 5);
        }

        this.chatLabel = cc.LabelTTF.create(this.systemMassages[i], "Arial", 20);
        this.chatLabel.setAnchorPoint(cc.p(0,0));
        this.chatLabel.x = 0;
        this.chatLabel.y = 200;
        this.chatLabel.setColor(cc.color(0, 112, 0));
        this.addChild(this.chatLabel, 5);


        this._box4 = cc.EditBox.create(cc.size(200, 200), cc.Scale9Sprite.create("res/editBox.png"));
        this._box4.setPlaceholderFontColor(cc.color(255, 0, 0));
        this._box4.setPlaceHolder("Input:");
        this._box4.x = 0;
        this._box4.y = 50;
        this._box4.setDelegate(this);
        this._box4.setFontColor(cc.color(255, 0, 0));
        this._box4.setMaxLength(100);
        this._box4.setAnchorPoint(cc.p(0,0));
        //this._box4.setFontSize(30);
        this.addChild(this._box4);

        return true;
    },
    switchWeapon:function(sender)
    {
        for(var i = 0;i<this.gunImage1.length;i++)
        {
            var aWeapon = this.menu.getChildByTag(i);
            if(aWeapon == sender)
            {
                var aPicName = "res/"+this.gunImage1[i]+".png";
                var aSprite1 = cc.Sprite.create(aPicName);
                var aSprite2 = cc.Sprite.create(aPicName);
                aWeapon.setNormalImage(aSprite1);
                aWeapon.setSelectedImage(aSprite2);
            }
            else
            {
                var aPicName = "res/"+this.gunImage2[i]+".png";
                var aSprite1 = cc.Sprite.create(aPicName);
                var aSprite2 = cc.Sprite.create(aPicName);
                aWeapon.setNormalImage(aSprite1);
                aWeapon.setSelectedImage(aSprite2);
                aWeapon.setScale(0.3);
            }
        }
        var ScaleToB = cc.ScaleTo.create(0.2,0.4);
        sender.runAction(ScaleToB);
    },
    editBoxEditingDidBegin: function (editBox) {
        cc.log("editBox " + this._getEditBoxName(editBox) + " DidBegin !");
    },

    editBoxEditingDidEnd: function (editBox) {
        cc.log("editBox " + this._getEditBoxName(editBox) + " DidEnd !");
    },

    editBoxTextChanged: function (editBox, text) {
        cc.log("editBox " + this._getEditBoxName(editBox) + ", TextChanged, text: " + text);
    },

    editBoxReturn: function (editBox) {
        cc.log("editBox " + this._getEditBoxName(editBox) + " was returned !");
        //this.chatLabel.setString(this._getEditBoxName(editBox));
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

