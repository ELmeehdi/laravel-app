(()=>{function r(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,a,o,i,l=[],u=!0,c=!1;try{if(o=(n=n.call(r)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(e=o.call(n)).done)&&(l.push(e.value),l.length!==t);u=!0);}catch(r){c=!0,a=r}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}$((function(){$("#profile-avatar").on("change",(function(){var t=r(this.files,1)[0];t&&$("#user-avatar").attr("src",URL.createObjectURL(t))}))}))})();