parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"DkIy":[function(require,module,exports) {
!function(){var t=d3.select("#chart3").select("svg").attr("height",100).attr("width",450).select("g").attr("transform","translate(25, 25)"),a=d3.scalePoint().domain(["Panda","Cat","Horse","Pig"]).range([0,400]),e=d3.scaleSqrt().domain([0,1e3]).range([0,50]);t.selectAll("circle").data([{name:"Panda",weight:150},{name:"Cat",weight:8},{name:"Horse",weight:840},{name:"Pig",weight:100}]).attr("cx",function(t){return a(t.name)}).attr("cy",25).attr("r",function(t){return e(t.weight)})}();
},{}]},{},["DkIy"], null)
//# sourceMappingURL=/03-chart.a17a2173.map