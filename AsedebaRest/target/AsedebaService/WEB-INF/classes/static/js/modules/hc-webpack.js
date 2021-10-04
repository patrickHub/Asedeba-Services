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
/******/ Lib.prototype.showFossAccordionCollapse = function (id) {
/******/        var _this = this;
/******/        $(id + 'Body').on('show.bs.collapse', function () {
/******/            _this.removeClass(id + 'Header i', 'arrow-right').addClass(id + 'Header i', 'arrow-down');
/******/            _this.removeClass(id + 'Header span', 'hm-primary-leite-color');
/******/            _this.removeClass(id + 'Header', 'hm-primary-color').addClass(id + 'Header', 'as-white-color').addClass(id + 'Header', 'hm-primary-bg-color');
/******/            _this.addClass(id + 'Body', 'border-bottom');
/******/        });
/******/ }
/******/
/******/ Lib.prototype.hideFossAccordionCollapse = function (id) {
/******/        var _this = this;
/******/        $(id + 'Body').on('hide.bs.collapse', function () {
/******/            _this.removeClass(id + 'Header i', 'arrow-down').addClass(id + 'Header i', 'arrow-right');
/******/            _this.addClass(id + 'Header span', 'hm-primary-leite-color');
/******/            _this.addClass(id + 'Header', 'hm-primary-color').removeClass(id + 'Header', 'as-white-color').removeClass(id + 'Header', 'hm-primary-bg-color');
/******/            _this.addClass(id + 'Body', 'border-bottom');
/******/        });
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
/******/ Lib.prototype.range = function(start, stop, step) {
/******/    var result = [];
/******/    if (typeof stop == 'undefined') {
/******/	    stop = start; start = 0;
/******/    }
/******/    if (typeof step == 'undefined') {
/******/        step = 1;
/******/    }
/******/    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
/******/        return result;
/******/    }
/******/    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
/******/        result.push(i);
/******/    }
/******/    return result;
/******/ };
/******/
/******/ Lib.prototype.totalFoss = 5;
/******/ export default Lib;
/************************************************************************/