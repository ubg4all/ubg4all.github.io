function Y8logo(iXPos,iYPos,oSprite,str){var _oButton;this._init=function(iXPos,iYPos,oSprite){var oButtonBg=createBitmap(oSprite);_oButton=new createjs.Container();_oButton.x=iXPos;_oButton.y=iYPos;_oButton.regX=oSprite.width/2;_oButton.regY=oSprite.height/2;_oButton.cursor="pointer";_oButton.addChild(oButtonBg);s_oStage.addChild(_oButton);if(s_sponsor===true){this.removeListeners()}else{this._initListener();}};this.showAnim=function()
{this.setVisible(true)
_oButton.alpha=0
createjs.Tween.get(_oButton).wait(500).to({alpha:1},1000,createjs.Ease.cubicOut);}
this.removeAnim=function()
{this.setVisible(false)}
this.unload=function(){console.log('unload ')
_oButton.off("mousedown");_oButton.off("pressup");s_oStage.removeChild(_oButton);};this.setVisible=function(bVisible){_oButton.visible=bVisible;};this._initListener=function(){oParent=this;_oButton.on("mousedown",this.buttonDown);_oButton.on("pressup",this.buttonRelease);};this.removeListeners=function()
{_oButton.cursor="initial";_oButton.off("mousedown");_oButton.off("pressup");}
this.buttonRelease=function(){if(s_sponsor==false)
{_oButton.scaleX=1;_oButton.scaleY=1;}};this.buttonDown=function(){if(s_sponsor==false)
{_oButton.scaleX=0.9;_oButton.scaleY=0.9;}};this.setPosition=function(iXPos,iYPos){_oButton.x=iXPos;_oButton.y=iYPos;};this.setX=function(iXPos){_oButton.x=iXPos;};this.setY=function(iYPos){_oButton.y=iYPos;};this.getButtonImage=function(){return _oButton;};this.getX=function(){return _oButton.x;};this.getY=function(){return _oButton.y;};this._init(iXPos,iYPos,oSprite);return this;}