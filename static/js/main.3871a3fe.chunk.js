(this["webpackJsonpinteractive-pricing-component"]=this["webpackJsonpinteractive-pricing-component"]||[]).push([[0],{18:function(t,n,e){},22:function(t,n,e){"use strict";e.r(n);var r,i,a,c,o,l,s,d=e(1),b=e.n(d),p=e(9),h=e.n(p),u=e(2),x=e(3),g=(e(18),e(13)),j=e(4),f=function(t,n){switch(n.type){case"RANGE":return Object(j.a)(Object(j.a)({},t),{},{range:n.payload});case"PRICE":return Object(j.a)(Object(j.a)({},t),{},{price:"yearly"===t.billing?n.payload-.25*n.payload:n.payload});case"BILLING":return Object(j.a)(Object(j.a)({},t),{},{billing:n.payload});default:return t}},m=e(0),w={range:5,price:8,billing:"monthly"},y=Object(d.createContext)(w),v=function(t){var n=t.children,e=Object(d.useReducer)(f,w),r=Object(g.a)(e,2),i=r[0],a=r[1];return Object(m.jsx)(y.Provider,{value:{range:i.range,price:i.price,billing:i.billing,setRange:function(t){a({type:"RANGE",payload:t})},setPrice:function(t){a({type:"PRICE",payload:t})},setBilling:function(t){a({type:"BILLING",payload:t})}},children:n})},O=e.p+"static/media/icon-slider.cbca35e0.svg",k=x.a.div(r||(r=Object(u.a)(["\n\t--w: ","px;\n\t--bgcolor: ",";\n\t--thumb-size: 30px;\n\n\twidth: var(--w);\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 0.8rem;\n\tgap: 40px;\n\n\t> input {\n\t\tdisplay: block;\n\t\tappearance: none;\n\t\tbackground-color: var(--soft-cyan);\n\t\twidth: var(--w);\n\t\theight: 5px;\n\t\tborder-radius: 5px;\n\t\tmargin: 0 auto;\n\t\toutline: 0;\n\t\t::-webkit-slider-thumb {\n\t\t\tappearance: none;\n\t\t\tbackground-color: var(--strong-cyan);\n\t\t\tbackground-image: url(",");\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-position: center;\n\t\t\twidth: var(--thumb-size);\n\t\t\theight: var(--thumb-size);\n\t\t\tborder-radius: 50%;\n\t\t\tbox-shadow: 0 0.5em 1em var(--soft-cyan);\n\t\t\tcursor: pointer;\n\t\t\ttransition: 0.3s ease;\n\n\t\t\t:hover {\n\t\t\t\tbackground-color: var(--soft-cyan);\n\t\t\t}\n\t\t}\n\t}\n\t> label {\n\t\ttext-transform: uppercase;\n\t\tfont-size: 0.7rem;\n\t\tfont-weight: 700;\n\t\tletter-spacing: 1.6px;\n\t}\n\t> div {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tfont-size: 0.7rem;\n\t\tspan {\n\t\t\ttext-align: center;\n\t\t\tfont-size: 2rem;\n\t\t\tfont-weight: 800;\n\t\t\tcolor: var(--bgcolor);\n\t\t}\n\t}\n"])),(function(t){return t.width}),(function(t){return t.bgcolor}),O),z=function(t){var n=t.width,e=t.bgcolor,r=Object(d.useContext)(y),i=r.range,a=r.price,c=r.billing,o=r.setRange,l=r.setPrice;return Object(d.useEffect)((function(){switch(!0){case i<10:l(8);break;case 10<i&&i<50:l(12);break;case 50<i&&i<100:l(16);break;case 100<i&&i<500:l(24);break;case 500<i&&i<1e3:l(36)}}),[i,c]),Object(m.jsxs)(k,{width:n,bgcolor:e,children:[Object(m.jsxs)("label",{htmlFor:"range-slider",children:[i,"k Pageviews"]}),Object(m.jsx)("input",{type:"range",min:"0",max:"1000",defaultValue:i,step:"1",onChange:function(t){return function(t){return o(parseInt(t.target.value))}(t)}}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{children:["$",Number(a).toFixed(2)]})," / month"]})]})},N=x.a.div(i||(i=Object(u.a)(["\n\t--w: ","px;\n\t--bgcolor: ",';\n\t--thumb-size: 15px;\n\theight: 20px;\n\n\t.checkbox {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t}\n\t.checkbox:after,\n\t.checkbox:before {\n\t\tfont-family: FontAwesome;\n\t\tfont-feature-settings: normal;\n\t\t-webkit-font-kerning: auto;\n\t\tfont-kerning: auto;\n\t\tfont-language-override: normal;\n\t\tfont-stretch: normal;\n\t\tfont-style: normal;\n\t\tfont-synthesis: weight style;\n\t\tfont-variant: normal;\n\t\tfont-weight: normal;\n\t\ttext-rendering: auto;\n\t}\n\t.checkbox input {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 5;\n\t\topacity: 0;\n\t\tcursor: pointer;\n\t}\n\t.checkbox input:hover + label {\n\t\tborder-color: var(--soft-cyan);\n\t\tbackground-color: var(--soft-cyan);\n\t}\n\t.checkbox input:checked + label:after {\n\t\tbackground: #fff;\n\t\tleft: 19px;\n\t}\n\n\t.checkbox label {\n\t\tbackground: var(--light-grayish-blue);\n\t\tborder: 5px solid var(--light-grayish-blue);\n\t\twidth: var(--w);\n\t\theight: calc(var(--w) / 2);\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t\tborder-radius: 46px;\n\t\ttransition: 0.4s;\n\t}\n\t.checkbox label:after {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\twidth: calc(var(--w) / 3);\n\t\theight: calc(var(--w) / 3);\n\t\tborder-radius: 100%;\n\t\tleft: -2px;\n\t\ttop: -2px;\n\t\tz-index: 2;\n\t\tbox-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n\t\ttransition: 0.4s;\n\t\tbackground: #fff;\n\t\tbox-shadow: none;\n\t\twidth: calc(var(--w) / 3);\n\t\theight: calc(var(--w) / 3);\n\t}\n'])),(function(t){return t.width}),(function(t){return t.bgcolor})),I=function(t){var n=t.width,e=t.bgcolor,r=Object(d.useContext)(y).setBilling;return Object(m.jsx)(N,{width:n,bgcolor:e,children:Object(m.jsxs)("div",{className:"checkbox",children:[Object(m.jsx)("input",{type:"checkbox",onChange:function(t){return function(t){r(t.target.checked?"yearly":"monthly")}(t)}}),Object(m.jsx)("label",{})]})})},B=e.p+"static/media/icon-check.83c38a48.svg",C=x.a.div(a||(a=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\twidth: 320px;\n\tgap: 30px;\n\tcolor: var(--grayish-blue);\n\t@media (min-width: 600px) {\n\t\twidth: 450px;\n\t}\n"]))),E=x.a.div(c||(c=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: center;\n\talign-items: center;\n\tbackground: transparent;\n\twidth: 100%;\n\tpadding: 20px;\n\n\th3 {\n\t\tcolor: var(--dark-desaturated-blue);\n\t\tpadding: 10px 0;\n\t}\n\tp {\n\t\tfont-size: 0.8rem;\n\t\twidth: 180px;\n\t\tline-height: 20px;\n\t\t@media (min-width: 600px) {\n\t\t\tfont-size: 0.7rem;\n\t\t\twidth: 400px;\n\t\t}\n\t}\n"]))),R=x.a.main(o||(o=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: white;\n\twidth: 100%;\n\tborder-radius: 10px;\n\tgap: 30px;\n\tpadding: 30px 0px;\n\tcolor: var(--grayish-blue);\n\t/* box-shadow: 0 1em 1em 0.1em var(--very-pale-blue); */\n\tbox-shadow: 0 1em 2em var(--lighter-grayish-blue);\n\n\thr {\n\t\twidth: 100%;\n\t\tborder-bottom: 0.1rem solid var(--lighter-grayish-blue);\n\t}\n\tbutton {\n\t\tpadding: 10px 30px;\n\t\tborder-radius: 30px;\n\t\tcursor: pointer;\n\t\tcolor: var(--pale-blue);\n\t\tbackground-color: var(--dark-desaturated-blue);\n\t}\n\n\tul {\n\t\tlist-style: none;\n\t\tfont-size: 0.8rem;\n\t\tli {\n\t\t\tmargin: 5px 0;\n\t\t\tspan {\n\t\t\t\tcontent: url(",");\n\t\t\t\tmargin-right: 15px;\n\t\t\t}\n\t\t}\n\t\t@media (min-width: 600px) {\n\t\t\ttext-align: left;\n\t\t}\n\t}\n\t.chip {\n\t\twidth: 40px;\n\t\tpadding: 2px;\n\t\tborder-radius: 20px;\n\t\tcolor: var(--light-red);\n\t\tbackground-color: var(--light-grayish-red);\n\t\tfont-size: 0.6rem;\n\t}\n"])),B),P=x.a.div(l||(l=Object(u.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 0.7rem;\n\tgap: 10px;\n\tpadding-bottom: 10px;\n"]))),G=x.a.div(s||(s=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 30px;\n\n\t@media (min-width: 600px) {\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\tgap: 60px;\n\t}\n"]))),L=function(){return Object(m.jsx)(v,{children:Object(m.jsxs)(C,{className:"app",children:[Object(m.jsxs)(E,{children:[Object(m.jsx)("h3",{children:"Simple, traffic-based pricing"}),Object(m.jsx)("p",{children:" Sign-up for our 30-day trial. No credit card required."})]}),Object(m.jsxs)(R,{children:[Object(m.jsx)(z,{width:280,bgcolor:"hsl(227, 35%, 25%)"}),Object(m.jsxs)(P,{children:[Object(m.jsx)("span",{children:"Monthly Billing"}),Object(m.jsx)(I,{width:40,bgcolor:"hsl(227, 35%, 25%)"}),Object(m.jsx)("span",{children:"Yearly Billing"}),Object(m.jsx)("span",{className:"chip",children:" -25%"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(G,{children:[Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{}),"Unlimited websites"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{}),"100% data ownership"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{}),"Email reports"]})]}),Object(m.jsx)("button",{children:"Start my trial"})]})]})]})})};h.a.render(Object(m.jsx)(b.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3871a3fe.chunk.js.map