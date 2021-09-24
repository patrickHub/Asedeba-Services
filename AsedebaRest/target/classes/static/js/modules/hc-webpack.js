/*! Copyright (c) 2020 Hamilton Medical AG. All Rights Reserved. */
/******/
/******/ function Lib(){};
/******/
/******/
/******/
/******/ Lib.prototype.submitForm = function(form){$(form).submit(); return this;}
/******/
/******/ Lib.prototype.addClass = function(elm, cls){if(!$(elm).hasClass(cls)){ $(elm).addClass(cls);} return this;}
/******/
/******/ Lib.prototype.removeClass = function(elm, cls){$(elm).removeClass(cls); return this;}
/******/
/******/ Lib.prototype.doClick = function(elm, func){$(elm).on( "click", func); return this;}
/******/ 
/******/ Lib.prototype.doChange = function(elm, func){$(elm).on( "change", func); return this;}
/******/
/******/ Lib.prototype.scroll = function(elm, func){$(elm).scroll(func); return this;}
/******/
/******/ Lib.prototype.value = function(elm, val){$(elm).val(val); return this;}
/******/
/******/ Lib.prototype.doSubmit = function(elm){$(elm).submit(); return this;}
/******/
/******/ Lib.prototype.getAtr = function(elm, attr){return $(elm).attr(attr);}
/******/
/******/ Lib.prototype.setAttr = function(elm, attr, val){$(elm).attr(attr, val); return this;}
/******/
/******/ Lib.prototype.serializeForm = function(form){return $(form).serialize();}
/******/ 
/******/ Lib.prototype.propAttr = function(elm, attr, val){$(elm).prop(attr, val); return this;}
/******/
/******/ Lib.prototype.actionDelay = function(func, timeout){setTimeout(func, timeout); return this;}
/******/
/******/ Lib.prototype.doPrivacyPolicy = function(){
/******/    var _this = this, appid = "#accept-privacyPolicy-force-btn", bppid = "#cancel-privacyPolicy-force-btn", cppid = "#privacyPolicy-checkbox", dppfcl = ".privacyPolicy-force-body" ,dppfclc = dppfcl + " .content",  dppfid = "#accept-privacyPolicy-force-btn", eppfid = "#cancel-privacyPolicy-force-btn",fppfidlc = "#privacyPolicy-force-form .Lina-checkbox";
/******/    if($(appid)){_this.doClick(appid, ()=>{_this.propAttr(cppid, 'checked', true); $(cppid).blur();})}if($(bppid)){_this.doClick(bppid, ()=>{_this.propAttr(cppid, 'checked', false);})}if($(cppid)){_this.doClick(cppid, ()=>{_this.propAttr(cppid, 'checked', false);})}
/******/    _this.scroll(dppfcl, function(){         
/******/        var disabled = Math.round(($(dppfclc).height()*90)/100) > Math.round(($(this).scrollTop() + $(this).height()));
/******/        _this.setAttr(dppfid, "disabled", disabled).setAttr(eppfid, "disabled", disabled).setAttr(fppfidlc, "checked", !disabled); 
/******/    })
/******/ }
/******/
/******/ Lib.prototype.doEula = function(){
/******/    var _this = this, aeid = "#accept-eula-force-btn", beid = "#cancel-force-eula-btn", ceid = "#eula-checkbox", defcl = ".eula-force-body", defclc = defcl + " .content", defid = "#accept-eula-force-btn", eefid = "#cancel-eula-force-btn", fefidlc = "#eula-force-form .Lina-checkbox";;
/******/    if($(aeid)){_this.doClick(aeid, ()=>{_this.propAttr(ceid, "checked", true); $(ceid).blur();})} if($(beid)){_this.doClick(beid, ()=>{_this.setAttr(ceid, "checked", false);})}if($(ceid)){_this.doClick(ceid, ()=>{_this.propAttr(ceid, "checked", false);})}
/******/    _this.scroll(defcl, function(){
/******/        var disabled = Math.round(($(defclc).height()*90)/100) > Math.round(($(this).scrollTop() + $(this).height()));
/******/        _this.setAttr(defid, "disabled", disabled).setAttr(eefid, "disabled", disabled).setAttr(fefidlc, "checked", !disabled);
/******/    })
/******/ }
/******/
/******/ Lib.prototype.doSelect = function(){
/******/    var _this = this, id = "#user-attributes-gender";
/******/    var exec = function(){if($(id).val()==""){_this.removeClass(id, 'select-label');}else{_this.addClass(id, 'select-label');}}
/******/    exec();
/******/    _this.doChange(id, exec);
/******/ }
/******/         
/******/ Lib.prototype.loadTransition = function(){var _this = this; _this.actionDelay(()=>{_this.submitForm("#hc-page-transition");}, 5000);}
/******/
/******/ Lib.prototype.readQrc = function(){
/******/ 	 var _this = this;
/******/	 const codeReader = new ZXing.BrowserQRCodeReader();
/******/	 function reset(){
/******/		 codeReader.reset();
/******/	     _this.removeClass("#scan-camera", "d-flex").addClass("#scan-camera", "d-none").removeClass("#scan-intro", "d-none").removeClass("#scan-reset", "d-block").addClass("#scan-reset", "d-none");
/******/	 }
/******/ 
/******/	 _this.doClick(".hc-btn-reset-qrc", function(event){
/******/		 reset();
/******/	 });
/******/	 _this.doClick(".hc-btn-scan-qrc", function(){
/******/     	_this.removeClass("#scan-camera", "d-none").addClass("#scan-camera", "d-flex").addClass("#scan-intro", "d-none").removeClass("#scan-reset", "d-none").addClass("#scan-reset", "d-block");
/******/	 	_this.addClass(".hc-block-error-message", "d-none");
/******/	 	codeReader.reset();
/******/	 	codeReader.decodeOnceFromVideoDevice(undefined, 'scan-video-input').then((result) => {
/******/	 		codeReader.reset();
/******/     		_this.addClass("#scan-video-input", "elegant-color-dark").addClass(".hm-primary-loading", "d-flex").value("#hc-qrc-scan-form input[name=qrcode]", result.text);
/******/            _this.submitForm("#hc-qrc-scan-form");
/******/     		
/******/    	}).catch((err) => {
/******/			// TODO Handle error
/******/			console.error(err);
/******/		});
/******/	});
/******/ }
/******/
/******/ Lib.prototype.postForm = function(form, xhrFields, beforeSend, success, error){
/******/	$.ajax({
/******/		type: "POST",
/******/    	url: this.getAttr(form, "action"),
/******/        crossDomain: true,
/******/        xhrFields: xhrFields,
/******/    	data: this.serializeForm(form),
/******/    	beforeSend : beforeSend,
/******/    	error : error,
/******/    	success: success
/******/	});
/******/ }
/******/
/******/ Lib.prototype.getCookie = function(name){
/******/	var nameEqual = name + "=";
/******/    var ca = document.cookie.split(';');
/******/    for(var i=0;i < ca.length;i++) {
/******/        var c = ca[i];
/******/       while (c.charAt(0)==' ') {
/******/        	c = c.substring(1, c.length);
/******/        }
/******/        if (c.indexOf(nameEqual) == 0) {
/******/        	return c.substring(nameEqual.length, c.length);
/******/        }
/******/    }
/******/    return null;
/******/ }
/******/
/******/ Lib.prototype.getInnerHtml = function (elm, content){  
/******/	$(elm).html(content);
/******/	return this;
/******/ } 
/******/
/******/
/******/ export default Lib;
/************************************************************************/