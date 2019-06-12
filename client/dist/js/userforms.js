!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s="./client/src/bundles/bundle.js")}({"./client/src/bundles/UserForms.js":function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=r(1),s=n(i),o=r(0),a=n(o);(0,s.default)(document).ready(function(t){function e(e){return this.$el=e instanceof t?e:t(e),this.$el.find("h4").text(a.default._t("UserForms.ERROR_CONTAINER_HEADER","Please correct the following errors and try again:")),this}function r(r){var n=this;this.$el=r instanceof t?r:t(r);var i=this.$el.closest(".userform").data("inst");return this.$elButton=t(".step-button-wrapper[data-for='"+this.$el.prop("id")+"']"),this.viewed=!1,this.valid=!1,this.id=null,this.hide(),u.DISPLAY_ERROR_MESSAGES_AT_TOP&&(this.errorContainer=new e(this.$el.find(".error-container")),i.$el.on("userform.form.error",function(e,r){n.$el.is(":visible")&&t.each(r.errorList,function(e,r){n.errorContainer.updateErrorMessage(t(r.element),r.message)})}),i.$el.on("userform.form.valid",function(t,e){n.errorContainer.removeErrorMessage(e)})),this.$elButton.on("userform.field.hide userform.field.show",function(){i.$el.trigger("userform.form.conditionalstep")}),this}function n(e){var r=this;this.$el=e instanceof t?e:t(e),this.$buttons=this.$el.find(".step-button-jump"),this.$jsAlign=this.$el.find(".js-align");var n=this.$el.closest(".userform").data("inst");return this.$buttons.each(function(e,n){t(n).on("click",function(e){e.preventDefault();var n=parseInt(t(e.target).data("step"),10);r.$el.trigger("userform.progress.changestep",n)})}),n.$el.on("userform.form.changestep",function(t,e){r.update(e)}),n.$el.on("userform.form.conditionalstep",function(){var e=r.$buttons.filter(":visible");e.each(function(e,r){t(r).text(e+1)}),r.$el.find(".progress-bar").attr("aria-valuemax",e.length),r.$el.find(".total-step-number").text(e.length)}),this.$jsAlign.each(function(e,n){var i=t(n),s=100/(r.$jsAlign.length-1)*e,o=s+"%",a=i.innerWidth()/2*-1;i.css({left:o,marginLeft:a}),e===r.$jsAlign.length-1?i.css({marginLeft:2*a}):0===e&&i.css({marginLeft:0})}),this}function i(e){var r=this;return this.$el=e instanceof t?e:t(e),this.userformInstance=this.$el.closest(".userform").data("inst"),this.$prevButton=this.$el.find(".step-button-prev"),this.$nextButton=this.$el.find(".step-button-next"),this.$prevButton.parent().attr("aria-hidden",!1).show(),this.$nextButton.parent().attr("aria-hidden",!1).show(),this.$prevButton.on("click",function(t){t.preventDefault(),r.$el.trigger("userform.action.prev")}),this.$nextButton.on("click",function(t){t.preventDefault(),r.$el.trigger("userform.action.next")}),this.userformInstance.$el.on("userform.form.changestep userform.form.conditionalstep",function(){r.update()}),this}function s(r){var n=this;return this.$el=r instanceof t?r:t(r),this.steps=[],this.errorContainer=new e(this.$el.children(".error-container")),this.$el.on("userform.action.prev",function(){n.prevStep()}),this.$el.on("userform.action.next",function(){n.nextStep()}),this.$el.find(".userform-progress").on("userform.progress.changestep",function(t,e){n.jumpToStep(e-1)}),this.$el.on("userform.form.valid",function(t,e){n.errorContainer.removeStepLink(e)}),this.$el.validate(this.validationOptions),this.$el.find(".optionset.requiredField input").each(function(e,r){t(r).rules("add",{required:!0})}),this}function o(o,d){var f=this,c=t(d);if(0!==c.length){u.ENABLE_LIVE_VALIDATION=void 0!==c.data("livevalidation"),u.DISPLAY_ERROR_MESSAGES_AT_TOP=void 0!==c.data("toperrors"),!1===u.ENABLE_LIVE_VALIDATION&&t.extend(s.prototype.validationOptions,{onfocusout:!1}),u.DISPLAY_ERROR_MESSAGES_AT_TOP&&t.extend(s.prototype.validationOptions,{invalidHandler:function(t,e){c.trigger("userform.form.error",[e])},onfocusout:!1}),c.find(".userform-progress, .step-navigation").attr("aria-hidden",!1).show(),t.extend(r.prototype,l),t.extend(e.prototype,l);var h=new s(c);c.data("inst",h),u.HIDE_FIELD_LABELS&&c.find("label.left").each(function(){var e=t(f);t('[name="'+e.attr("for")+'"]').attr("placeholder",e.text()),e.remove()}),h.$el.find(".form-step").each(function(t,e){var n=new r(e);h.addStep(n)}),h.setCurrentStep(h.steps[0]);var p=c.find(".userform-progress");p.length&&new n(p).update(0);var m=c.find(".step-navigation");m.length&&new i(m).update(),t(document).on("click","input.text[data-showcalendar]",function(){var e=t(f);e.ssDatepicker(),e.data("datepicker")&&e.datepicker("show")}),setInterval(function(){t.ajax({url:"UserDefinedFormController/ping"})},18e4),void 0!==c.areYouSure&&c.areYouSure({message:a.default._t("UserForms.LEAVE_CONFIRMATION","You have unsaved changes!")})}}var u={},l={show:function(){this.$el.attr("aria-hidden",!1).show()},hide:function(){this.$el.attr("aria-hidden",!0).hide()}};e.prototype.hasErrors=function(){return this.$el.find(".error-list").children().length>0},e.prototype.removeErrorMessage=function(t){this.$el.find("#"+t+"-top-error").remove(),this.hasErrors()||this.hide()},e.prototype.addStepLink=function(e){var r=this.$el.closest(".userform").data("inst"),n=e.$el.attr("id")+"-error-link",i=this.$el.find("#"+n),s=e.$el.attr("id"),o=e.$el.data("title");i.length||(i=t('<li id="'+n+'"><a href="#'+s+'">'+o+"</a></li>"),i.on("click",function(t){t.preventDefault(),r.jumpToStep(e.id)}),this.$el.find(".error-list").append(i))},e.prototype.removeStepLink=function(e){var r=t("#"+e).closest(".form-step").attr("id");this.$el.find("#"+r+"-error-link").remove(),this.$el.find(".error-list").is(":empty")&&this.hide()},e.prototype.updateErrorMessage=function(e,r){var n=this,i=e.attr("id"),s="#"+i,o=i+"-top-error",a=t("#"+o),u=e.attr("aria-describedby");if(!r)return void a.addClass("fixed");a.removeClass("fixed"),this.show(),1===a.length?a.show().find("a").html(r):(e.closest(".field[id]").each(function(){s="#"+t(n).attr("id")}),a=t("<li><a></a></li>"),a.attr("id",o).find("a").attr("href",location.pathname+location.search+s).html(r),this.$el.find("ul").append(a),u?u.match(new RegExp("\\b"+o+"\\b"))||(u+=" "+o):u=o,e.attr("aria-describedby",u))},r.prototype.conditionallyHidden=function(){return!this.$elButton.find("button").is(":visible")},n.prototype.update=function(e){var r=t(this.$el.find(".form-step")[e]),n=0,i=e/(this.$buttons.length-1)*100;this.$buttons.each(function(r,i){return!(r>e||(t(i).is(":visible")&&(n+=1),0))}),this.$el.find(".current-step-number").each(function(e,r){t(r).text(n)}),this.$el.find("[aria-valuenow]").each(function(e,r){t(r).attr("aria-valuenow",n)}),this.$buttons.each(function(e,r){var i=t(r),s=i.parent();if(parseInt(i.data("step"),10)===n&&i.is(":visible"))return s.addClass("current viewed"),void i.removeAttr("disabled");s.removeClass("current")}),this.$el.siblings(".progress-title").text(r.data("title")),i=i?i+"%":"",this.$el.find(".progress-bar").width(i)},i.prototype.update=function(){var t=this.userformInstance.steps.length,e=this.userformInstance.currentStep?this.userformInstance.currentStep.id:0,r=null,n=null;for(this.$el.find(".step-button-prev")[0===e?"hide":"show"](),r=t-1;r>=0;r--)if(n=this.userformInstance.steps[r],!n.conditionallyHidden()){this.$el.find(".step-button-next")[e>=r?"hide":"show"](),this.$el.find(".btn-toolbar")[e>=r?"show":"hide"]();break}},s.prototype.validationOptions={ignore:":hidden,ul",errorClass:"error",errorElement:"span",errorPlacement:function(t,e){t.addClass("message"),e.is(":radio")||e.parents(".checkboxset").length>0?t.appendTo(e.closest(".middleColumn")):e.parents(".checkbox").length>0?t.appendTo(e.closest(".field")):t.insertAfter(e)},invalidHandler:function(t,e){setTimeout(function(){e.currentElements.filter(".error").first().focus()},0)},submitHandler:function(e){var r=!0,n=t(e).closest(".userform").data("inst");n.currentStep&&(n.currentStep.valid=t(e).valid()),t.each(n.steps,function(t,e){e.valid||e.conditionallyHidden()||(r=!1,n.errorContainer.addStepLink(e))}),r?(t(e).removeClass("dirty"),e.submit(),n.$el.trigger("userform.form.submit")):n.errorContainer.show()},success:function(e){var r=t(e).closest(".userform").data("inst"),n=t(e).attr("id"),i=n.substr(0,n.indexOf("-error")).replace(/[\\[\\]]/,"");e.remove(),r.$el.trigger("userform.form.valid",[i])}},s.prototype.addStep=function(t){t instanceof r&&(t.id=this.steps.length,this.steps.push(t))},s.prototype.setCurrentStep=function(t){t instanceof r&&(this.currentStep=t,this.currentStep.show(),this.currentStep.viewed=!0,this.currentStep.$el.addClass("viewed"))},s.prototype.jumpToStep=function(t,e){var r=this.steps[t],n=!1,i=void 0===e||e;if(void 0!==r){if(r.conditionallyHidden())return void(i?this.jumpToStep(t+1):this.jumpToStep(t-1));n=this.$el.valid(),this.currentStep.valid=n,!1===n&&!1===r.viewed||(this.currentStep.hide(),this.setCurrentStep(r),this.$el.trigger("userform.form.changestep",[r.id]))}},s.prototype.nextStep=function(){this.jumpToStep(this.steps.indexOf(this.currentStep)+1,!0)},s.prototype.prevStep=function(){this.jumpToStep(this.steps.indexOf(this.currentStep)-1,!1)},t(".userform").each(o)})},"./client/src/bundles/bundle.js":function(t,e,r){"use strict";r("./client/src/bundles/UserForms.js")},0:function(t,e){t.exports=i18n},1:function(t,e){t.exports=jQuery}});