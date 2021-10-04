/*! Copyright (c) 2021 ASEDEBA. All Rights Reserved. */
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
/******/ Lib.prototype.showMenuAccordionCollapse = function (id) {
/******/        var _this = this;
/******/        $(id + 'Body').on('show.bs.collapse', function () {
/******/            _this.removeClass(id + 'Header img', 'arrow-right').addClass(id + 'Header img', 'arrow-down');
/******/            _this.removeClass(id + 'Header h2', 'text-white').addClass(id + 'Header h2', 'text-dark');
/******/            _this.removeClass(id + 'Header', 'hm-primary-color').addClass(id + 'Header', 'as-white-color').addClass(id + 'Header', 'hm-primary-bg-color');
/******/            _this.addClass(id + 'Body', 'border-bottom');
/******/        });
/******/ }
/******/
/******/ Lib.prototype.hideMenuAccordionCollapse = function (id) {
/******/        var _this = this;
/******/        $(id + 'Body').on('hide.bs.collapse', function () {
/******/            _this.removeClass(id + 'Header img', 'arrow-down').addClass(id + 'Header img', 'arrow-right');
/******/            _this.removeClass(id + 'Header h2', 'text-dark').addClass(id + 'Header h2', 'text-white');
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
/******/ Lib.prototype.totalAsMenu = 6;
/******/ export default Lib;
/************************************************************************/