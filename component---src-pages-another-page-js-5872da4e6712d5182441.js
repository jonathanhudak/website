(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(140),u=n(147);t.default=function(){return r.a.createElement(u.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(139),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(141),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},141:function(e,t,n){var a;e.exports=(a=n(143))&&a.default||a},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Jonathan Hudak"}}}}},143:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(51),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},144:function(e,t,n){},147:function(e,t,n){"use strict";var a=n(142),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(148),l=n.n(c),s=n(140),d=function(e){var t=e.siteTitle;return i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(s.Link,{to:"/"},t)))},p=(n(144),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t))},data:a})});p.propTypes={children:o.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-another-page-js-5872da4e6712d5182441.js.map