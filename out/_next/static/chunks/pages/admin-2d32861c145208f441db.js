_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{Egov:function(a,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return l("hp3m")}])},"FCj/":function(a,e,l){"use strict";var s=l("q1tI"),n=l.n(s),t=l("nOHt"),c=l.n(t),i=n.a.createElement;e.a=function(){return i(n.a.Fragment,null,i("header",null,i("div",{className:"search-wrapper"},i("span",{className:"ti-search"}),i("input",{type:"search",name:"search",id:"search",placeholder:"Search..."})),i("div",{className:"social-icons"},i("span",{className:"ti-home",onClick:function(){return c.a.push("/")}}),i("span",{className:"ti-bell"}),i("span",{className:"ti-comment"}),i("span",{className:"ti-shopping-cart",onClick:function(){return c.a.push("/Cart")}},i("span",null,"3")),i("div",null))))}},TRN5:function(a,e,l){"use strict";var s=l("q1tI"),n=l.n(s),t=l("YFqc"),c=l.n(t),i=n.a.createElement;e.a=function(){return i(n.a.Fragment,null,i("input",{type:"checkbox",id:"sidebar-toggle"}),i("div",{className:"sidebar"},i("div",{className:"sidebar-header"},i("h3",{className:"brand"},i("span",{className:"ti-unlink"}),i("span",null,"Ozonr Shope")),i("label",{htmlFor:"sidebar-toggle",className:"ti-menu-alt"})),i("div",{className:"sidebar-menu"},i("ul",null,i("li",null,i(c.a,{href:"/admin  "},i("a",null,i("span",{className:"ti-home"}),i("span",null,"\u0eab\u0e99\u0ec9\u0eb2\u0eab\u0ea5\u0eb1\u0e81")))),i("li",null,i(c.a,{href:"/Custorder"},i("a",null,i("span",{className:"ti-view-list"}),i("span",null,"\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0eaa\u0eb1\u0ec8\u0e87\u0e8a\u0eb7\u0ec9\u0ea5\u0eb9\u0e81\u0e84\u0ec9\u0eb2")))),i("li",null,i(c.a,{href:"/Myproducts"},i("a",null,i("span",{className:"ti-server"}),i("span",null,"\u0eaa\u0eb4\u0e99\u0e84\u0ec9\u0eb2\u0ec3\u0e99\u0eaa\u0ec8\u0eb2\u0e87")))),i("li",null,i(c.a,{href:"/Categories"},i("a",null,i("span",{className:"ti-clipboard"}),i("span",null,"\u0e9b\u0eb0\u0ec0\u0e9e\u0e94\u0eaa\u0eb4\u0e99\u0e84\u0ec9\u0eb2")))),i("li",null,i(c.a,{href:"/Brands"},i("a",null,i("span",{className:"ti-folder"}),i("span",null,"\u0ec1\u0e9a\u0ea3\u0e99\u0eaa\u0eb4\u0e99\u0e84\u0ec9\u0eb2")))),i("li",null,i(c.a,{href:""},i("a",{href:""},i("span",{className:"ti-layout-grid2"}),i("span",null,"\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0eab\u0ea1\u0ea7\u0e94\u0eaa\u0eb4\u0e99\u0e84\u0ec9\u0eb2")))),i("li",null,i(c.a,{href:"/Bank"},i("a",null,i("span",{className:"ti-wallet"}),i("span",null,"\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0e81\u0eb2\u0e99\u0e8a\u0eb3\u0ea5\u0eb0")))),i("li",null,i(c.a,{href:"/Sale"},i("a",null,i("span",{className:"ti-stats-up"}),i("span",null,"\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0e81\u0eb2\u0e99\u0e82\u0ec8\u0eb2\u0e8d\u0ead\u0ead\u0e81\u0eaa\u0eb4\u0e99\u0e84\u0ec9\u0eb2")))),i("li",null,i(c.a,{href:"/Profile"},i("a",null,i("span",{className:"ti-settings"}),i("span",null,"\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0e9c\u0eb9\u0ec9\u0ec3\u0e8a\u0ec9"))))))))}},YFqc:function(a,e,l){a.exports=l("cTJO")},cTJO:function(a,e,l){"use strict";var s=l("J4zp"),n=l("284h");e.__esModule=!0,e.default=void 0;var t,c=n(l("q1tI")),i=l("elyg"),r=l("nOHt"),u=new Map,d=window.IntersectionObserver,o={};var m=function(a,e){var l=t||(d?t=new d((function(a){a.forEach((function(a){if(u.has(a.target)){var e=u.get(a.target);(a.isIntersecting||a.intersectionRatio>0)&&(t.unobserve(a.target),u.delete(a.target),e())}}))}),{rootMargin:"200px"}):void 0);return l?(l.observe(a),u.set(a,e),function(){try{l.unobserve(a)}catch(e){console.error(e)}u.delete(a)}):function(){}};function p(a,e,l,s){(0,i.isLocalURL)(e)&&(a.prefetch(e,l,s).catch((function(a){0})),o[e+"%"+l]=!0)}var f=function(a){var e=!1!==a.prefetch,l=(0,r.useRouter)(),n=l&&l.pathname||"/",t=c.default.useMemo((function(){var e=(0,i.resolveHref)(n,a.href,!0),l=s(e,2),t=l[0],c=l[1];return{href:t,as:a.as?(0,i.resolveHref)(n,a.as):c||t}}),[n,a.href,a.as]),u=t.href,f=t.as,N=a.children,v=a.replace,h=a.shallow,g=a.scroll,b=a.locale;"string"===typeof N&&(N=c.default.createElement("a",null,N));var y=c.Children.only(N),w=y&&"object"===typeof y&&y.ref,E=c.default.useRef(),k={ref:c.default.useCallback((function(a){(E.current&&(E.current(),E.current=void 0),e&&d&&a&&a.tagName&&(0,i.isLocalURL)(u))&&(o[u+"%"+f]||(E.current=m(a,(function(){p(l,u,f,{locale:"undefined"!==typeof b?b:l&&l.locale})}))));w&&("function"===typeof w?w(a):"object"===typeof w&&(w.current=a))}),[e,w,u,f,l,b]),onClick:function(a){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(a),a.defaultPrevented||function(a,e,l,s,n,t,c,r){("A"!==a.currentTarget.nodeName||!function(a){var e=a.currentTarget.target;return e&&"_self"!==e||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which}(a)&&(0,i.isLocalURL)(l))&&(a.preventDefault(),null==c&&(c=s.indexOf("#")<0),e[n?"replace":"push"](l,s,{shallow:t,locale:r}).then((function(a){a&&c&&(window.scrollTo(0,0),document.body.focus())})))}(a,l,u,f,v,h,g,b)}};return e&&(k.onMouseEnter=function(a){(0,i.isLocalURL)(u)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(a),p(l,u,f,{priority:!0}))}),(a.passHref||"a"===y.type&&!("href"in y.props))&&(k.href=(0,i.addBasePath)((0,i.addLocale)(f,"undefined"!==typeof b?b:l&&l.locale,l&&l.defaultLocale))),c.default.cloneElement(y,k)};e.default=f},hp3m:function(a,e,l){"use strict";l.r(e);var s=l("q1tI"),n=l.n(s),t=l("FCj/"),c=l("TRN5"),i=n.a.createElement;e.default=function(){return i(n.a.Fragment,null,i(c.a,null),i("div",{className:"main-content"},i(t.a,null),i("main",null,i("h2",{className:"dash-title"},"Over Views"),i("div",{className:"dash-cards"},i("div",{className:"card-single"},i("div",{className:"card-body"},i("span",{className:"ti-briefcase"}),i("div",null,i("h5",null,"Account Balance"),i("h4",null,"$30,405.00"))),i("div",{className:"card-footer"},i("a",{href:"#"},"View all"))),i("div",{className:"card-single"},i("div",{className:"card-body"},i("span",{className:"ti-reload"}),i("div",null,i("h5",null,"Pending"),i("h4",null,"$21,249.00"))),i("div",{className:"card-footer"},i("a",{href:"#"},"View all"))),i("div",{className:"card-single"},i("div",{className:"card-body"},i("span",{className:"ti-check-box"}),i("div",null,i("h5",null,"Proccessed"),i("h4",null,"$74,905.00"))),i("div",{className:"card-footer"},i("a",{href:"#"},"View all"))),i("div",{className:"card-single"},i("div",{className:"card-body"},i("span",{className:"ti-book"}),i("div",null,i("h5",null,"Total Report"),i("h4",null,"$174,905.00"))),i("div",{className:"card-footer"},i("a",{href:"#"},"View all")))),i("section",{className:"recent"},i("div",{className:"activity-grid"},i("div",{className:"activity-card"},i("h3",null,"Recently Activity"),i("div",{className:"table-responsive"},i("table",null,i("thead",null,i("tr",null,i("th",null,"Project"),i("th",null,"Start Data"),i("th",null,"End Date"),i("th",null,"Team"),i("th",null,"Status"))),i("tbody",null,i("tr",null,i("td",null,"App Development"),i("td",null,"23 Aug, 2020"),i("td",null,"23 Dec, 2020"),i("td",{className:"td-team"},i("div",{className:"img-1"}),i("div",{className:"img-2"}),i("div",{className:"img-3"})),i("td",null,i("span",{className:"badge success"},"Success"))),i("tr",null,i("td",null,"Frontend Development"),i("td",null,"23 Aug, 2020"),i("td",null,"23 Dec, 2020"),i("td",{className:"td-team"},i("div",{className:"img-1"}),i("div",{className:"img-2"}),i("div",{className:"img-3"})),i("td",null,i("span",{className:"badge warning"},"Processing"))),i("tr",null,i("td",null,"Marketting Reasearch"),i("td",null,"23 Aug, 2020"),i("td",null,"23 Dec, 2020"),i("td",{className:"td-team"},i("div",{className:"img-1"}),i("div",{className:"img-2"}),i("div",{className:"img-3"})),i("td",null,i("span",{className:"badge success"},"Success"))),i("tr",null,i("td",null,"Backend Development"),i("td",null,"23 Aug, 2020"),i("td",null,"23 Dec, 2020"),i("td",{className:"td-team"},i("div",{className:"img-1"}),i("div",{className:"img-2"}),i("div",{className:"img-3"})),i("td",null,i("span",{className:"badge warning"},"Processing"))),i("tr",null,i("td",null,"Official building Construct"),i("td",null,"23 Aug, 2020"),i("td",null,"23 Dec, 2020"),i("td",{className:"td-team"},i("div",{className:"img-1"}),i("div",{className:"img-2"}),i("div",{className:"img-3"})),i("td",null,i("span",{className:"badge success"},"Success"))),i("tr",null,i("td",null,"MS Advanced Specialist Training"),i("td",null,"23 Aug, 2020"),i("td",null,"23 Dec, 2020"),i("td",{className:"td-team"},i("div",{className:"img-1"}),i("div",{className:"img-2"}),i("div",{className:"img-3"})),i("td",null,i("span",{className:"badge warning"},"Processing"))))))),i("div",{className:"summary"},i("div",{className:"summary-card"},i("div",{className:"summary-single"},i("span",{className:"ti-id-badge"}),i("h3",null,"196"),i("small",null,"Number Of Staff")),i("div",{className:"summary-single"},i("span",{className:"ti-calendar"}),i("h3",null,"16"),i("small",null,"Number Of Leaves")),i("div",{className:"summary-single"},i("span",{className:"ti-face-smile"}),i("h3",null,"59"),i("small",null,"Profile update requested"))),i("div",{className:"bday-card"},i("div",{className:"bday-flex"},i("div",{className:"bday-image"}),i("div",{className:"bday-info"},i("h5",null,"Loki J. Rixnickz"),i("small",null,"Birthday Today"))),i("div",{className:"text-center"},i("button",null,i("span",{className:"ti-gift"}),"Wish him")))))))))}}},[["Egov",0,1,2,3]]]);