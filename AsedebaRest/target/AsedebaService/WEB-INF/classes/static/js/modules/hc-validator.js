/*! Copyright (c) 2020 Hamilton Medical AG. All Rights Reserved. */
/******/
/******/ function HcValidator(){};
/******/
/******/
/******/
/******/ HcValidator.Rule = function() {
/******/   this.rules = {}
/******/   var _this = this;
/******/   this.addRule = function(elm, r){
/******/       _this.rules[elm] = r;
/******/       return _this;
/******/   }
/******/   return this;
/******/ }
/******/
/******/ HcValidator.Message = function() {
/******/   this.messages = {}
/******/   var _this = this;
/******/   this.addMessage = function(elm, m){
/******/       _this.messages[elm] = m;
/******/       return _this;
/******/   }
/******/   return this;
/******/ }
/******/
/******/
/******/ HcValidator.prototype.addMethod = function(elm, func){
/******/   $.validator.addMethod(elm, func);
/******/ }
/******/
/******/ HcValidator.prototype.addRuleProperty = function(name){
/******/   return {[name]: true};
/******/ }
/******/
/******/ HcValidator.prototype.addRuleEqualToProperty = function(elm){
/******/   return {equalTo: elm};
/******/ }
/******/
/******/ HcValidator.prototype.addRuleProperties = function(names){
/******/   var result = {}
/******/   for(const name of names){
/******/     result[name] = true;
/******/   }
/******/   return result;
/******/ }
/******/
/******/ HcValidator.prototype.validateForm = function(form, rules, messages, errorElement, onEventHandler, onSubmitHandler){
/******/   $(form).validate({
/******/     rules: rules,
/******/     messages: messages,
/******/     errorElement: errorElement,
/******/     onfocusout: onEventHandler,
/******/     onkeyup: onEventHandler,
/******/     onclick: onEventHandler,
/******/     submitHandler: onSubmitHandler
/******/   });
/******/ }
/******/
/******/ HcValidator.prototype.doValidation = function(){
/******/  this.addMethod("hc-password-checker", (value, element) => value.length >= 8 && value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/\d/) && value.match(/(?=(.*[\W]){1,})/));
/******/  this.addMethod("hc-checkbox-checker", (value, element) => $(element).prop('checked'));
/******/  this.validateForm("#hc-register-basic-form", 
/******/                    new HcValidator.Rule().addRule("user.attributes.gender", this.addRuleProperty("required"))
/******/                                          .addRule("firstName", this.addRuleProperty("required"))
/******/                                          .addRule("lastName", this.addRuleProperty("required"))
/******/                                          .addRule("email", this.addRuleProperties(["required", "email"]))
/******/                                          .addRule("password", this.addRuleProperties(["required", "hc-password-checker"]))
/******/                                          .addRule("user.attributes.privacyPolicy", this.addRuleProperties(["required", "hc-checkbox-checker"]))
/******/                                          .addRule("user.attributes.eula", this.addRuleProperties(["required", "hc-checkbox-checker"])).rules,
/******/                    new HcValidator.Message().addMessage("user.attributes.gender", "")
/******/                                             .addMessage("firstName", "")
/******/                                             .addMessage("lastName", "")
/******/                                             .addMessage("email", "")
/******/                                             .addMessage("password", "")
/******/                                             .addMessage("user.attributes.privacyPolicy", "")
/******/                                             .addMessage("user.attributes.eula", "").messages,
/******/                    "label",
/******/                    (element, event)=>{$("#hc-register-basic-form").validate();var valid = $("#hc-register-basic-form").valid();if (valid) {$('#hc-register-basic-next-btn').prop('disabled', false);} else {$('#hc-register-basic-next-btn').prop('disabled', 'disabled');}},
/******/                    (form)=>{form.submit();}
/******/   );
/******/  this.validateForm("#hc-login-reset-password-form", 
/******/                    new HcValidator.Rule().addRule("email", this.addRuleProperties(["required", "email"])).rules,
/******/                    new HcValidator.Message().addMessage("email", "").messages,
/******/                    "label",
/******/                    (element, event)=>{$("#hc-login-reset-password-form").validate();var valid = $("#hc-login-reset-password-form").valid();if (valid) {$('#hc-login-reset-password-submit-btn').prop('disabled', false);} else {$('#hc-login-reset-password-submit-btn').prop('disabled', 'disabled');}},
/******/                    (form)=>{form.submit();}
/******/   );
/******/  this.validateForm("#hc-login-update-password-form", 
/******/                    new HcValidator.Rule().addRule("password", this.addRuleProperties(["required", "hc-password-checker"]))
/******/                                          .addRule("password-confirm", this.addRuleEqualToProperty("#password")).rules,
/******/                    new HcValidator.Message().addMessage("password", "")
/******/                                             .addMessage("password-confirm", "").messages,
/******/                    "label",
/******/                    (element, event)=>{$("#hc-login-update-password-form").validate();var valid = $("#hc-login-update-password-form").valid();if (valid) {$('#hc-login-update-password-submit-btn').prop('disabled', false);} else {$('#hc-login-update-password-submit-btn').prop('disabled', 'disabled');}},
/******/                    (form)=>{form.submit();}
/******/   );
/******/ }
/******/
/******/
/******/ export default HcValidator;
/************************************************************************/