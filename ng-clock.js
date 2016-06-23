"use strict";
! function() {
	angular.module("s-clock", []).directive("clock", ["$parse", function(e) {
		return {
			scope: {
				dateTime: "=",
				smooth: "=",
				showDate: "=",
				handColor: "@",
				brandName: "@",
				brandClass: "@",
				brandLogo: "@",
				radius: "@"
			},
			controller: ["$scope", "$interval", function(e, n) {
				console.log(e), e.handColor = e.handColor ? e.handColor : "black", e.borderRadius = e.radius ? e.radius + "%" : "0", e.deg = {}, e.deg.sec = 6, e.deg.min = .1, e.deg.hr = 360 / 43200, e.numbers = [], e.main_numbers = [12, 3, 6, 9];
				for (var s = 1; 60 >= s; s++) {
					var a = {
						name: s % 5 == 0 ? s / 5 : ".",
						"class": s % 5 == 0 ? "bold" : "nobold",
						id: s,
						transform: s * e.deg.sec
					};
					e.numbers.push(a)
				}
				e.time = {}, e.time.curtime = e.dateTime ? new Date(e.dateTime) : new Date, e.date = e.time.curtime.getDate(), e.time.hour = e.time.curtime.getHours(), e.time.minute = e.time.curtime.getMinutes(), e.time.second = (e.smooth) ? e.time.curtime.getSeconds() + 1 : e.time.curtime.getSeconds(), console.log(e.time), e.degsec = e.time.second * e.deg.sec, e.degmin = (60 * e.time.minute + e.time.second) * e.deg.min, e.deghr = (3600 * e.time.hour + e.time.second + 60 * e.time.minute) * e.deg.hr, e.alarmShown = !1, n(function() {
					e.degsec += e.deg.sec, e.degmin += e.deg.min, e.deghr += e.deg.hr
				}, 1e3);

				e.$watch('smooth', function(n,o) {
					e.smooth = n;
				}, true);
			}],
			restrict: "E",
			templateUrl: "clock.html",
			// link: function(e, n, s, a) {
				
			// }
		}
	}]).run(["$templateCache", function(e) {
		e.put("clock.html", '<div class="clock" style="border-radius:{{borderRadius}}"><div class="numbers"><span class="mini-numbers hand {{num.class}}" data-number=\'{{num.id}}\' style="transform:rotate({{num.transform}}deg);" ng-repeat="num in numbers"><span class="num-container"><span class="number number-rotate{{num.name}}">{{num.name}}</span></span></span></div><div class="clock-hands"><span class="hand-inner hr" ng-class="{\'smooth\' : smooth}" style="transform:rotate({{deghr}}deg);background-color:{{handColor}}"></span><span class="hand-inner min" ng-class="{\'smooth\' : smooth}"  style="transform:rotate({{degmin}}deg);background-color:{{handColor}}"></span><span class="hand-inner sec" ng-class="{\'smooth\' : smooth}"  style="transform:rotate({{degsec}}deg);background-color:{{handColor}}"></span></div><span class="middle-dot"></span><span class="date" ng-if="showDate">{{date}}</span><span class="logo" ng-if="brandLogo"><img class="img-responsive" ng-src="{{brandLogo}}" /></span><h2 class="brand" ng-class="brandClass" ng-if="brandName">{{brandName}}</h2></div>')
	}])
}(this);