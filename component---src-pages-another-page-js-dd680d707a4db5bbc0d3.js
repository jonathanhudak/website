(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(132),u=n(133);t.default=function(){return r.a.createElement(u.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},131:function(e,t,n){var a;e.exports=(a=n(135))&&a.default||a},132:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(130),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(131),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},133:function(e,t,n){"use strict";var a=n(134),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(137),s=n.n(c),l=n(132),d=(n(136),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{class:"container"},t))},data:a})});d.propTypes={children:o.a.node.isRequired},t.a=d},134:function(e){e.exports={data:{site:{siteMetadata:{title:"Jonathan Hudak"}}}}},135:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(46),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=s},136:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-another-page-js-dd680d707a4db5bbc0d3.js.map