parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"B4gj":[function(require,module,exports) {
module.exports="/storytelling-first-homework/eating-data.3ffdfc1e.csv";
},{}],"TA0C":[function(require,module,exports) {
!function(){var a=20,t=20,n=40,r=70,e=600-r-t,i=400-a-n,c=d3.select("#chart14").append("svg").attr("width",e+r+t).attr("height",i+a+n).append("g").attr("transform","translate("+r+","+a+")"),s=d3.scaleOrdinal().range(["#FF6F91","#FF9671","#FFC75F"]),d=d3.scaleLinear().domain([0,10]).range([0,i]),l=d3.scaleBand().range([0,e]);d3.csv(require("./eating-data.csv")).then(function(a){var t=a.map(function(a){return a.name});l.domain(t),c.selectAll("rect").data(a).enter().append("rect").attr("height",function(a){return d(a.hamburgers)}).attr("fill",function(a){return s(a.animal)}).attr("width",l.bandwidth()).attr("y",function(a){return i-d(a.hamburgers)}).attr("x",function(a){return l(a.name)});var n=d3.axisLeft(d);c.append("g").attr("class","axis y-axis").call(n);var r=d3.axisBottom(l);c.append("g").attr("class","axis x-axis").attr("transform","translate(0,"+i+")").call(r)}).catch(function(a){console.log("Failed with",a)})}();
},{"./eating-data.csv":"B4gj"}]},{},["TA0C"], null)
//# sourceMappingURL=/storytelling-first-homework/14-chart.44d897a3.map