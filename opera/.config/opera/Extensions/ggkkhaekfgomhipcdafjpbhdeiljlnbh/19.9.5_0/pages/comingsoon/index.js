cjModules.define(function(){"use strict";return function(e,n,a){function i(){var e=cjgShortcuts.getUrl(o,n.account);n.openTab(e)}var c=a.productId,s=n.servicesDatabase[c]||{},o=s.shortcutId,t=s.label,r=t||cjBasics.lang.i18n("cj_i18n_01730","Coming soon"),l=t||cjBasics.lang.i18n("cj_i18n_01729","This service"),d=s.iconName||"googleg",u="";"adwordsexpress"===c?u=cjBasics.lang.i18n("cj_i18n_01726","AdWords Express is currently being transitioned to Google Ads. We can't offer additional AdWords Express features inside the extension right now."):(u=cjBasics.lang.i18n("cj_i18n_01728","__product_name__ in Black Menu for Google is coming in a few weeks. Stay tuned!"),u=u.replace("__product_name__",l));var _=bmElements.createElement("fulldialog",{darkMode:n.darkMode,bmApis:n,onNewTab:i,lockup:{label:r},iconName:d,message:u,actionLabel:o?cjBasics.lang.i18n("cj_i18n_01541","Launch in new tab"):null,action:o?i:null});e.appendChild(_)}});