"use strict";angular.module("portfolioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ng-facebook-api","ui.bootstrap","angularMoment"]).config(["$routeProvider","facebookProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"}),b.setInitParams("406449829550213",!0,!0,!0,"v2.4"),b.setPermissions(["email"])}]).run(["$anchorScroll",function(a){a.yOffset=50}]),angular.module("portfolioApp").controller("NavbarCtrl",["$anchorScroll","$location","$scope",function(a,b,c){c.gotoAnchor=function(c,d){var e=d;return b.hash()!==e?(console.log("$location.hash(): "+b.hash()+" !== newHash: "+e),b.hash(d)):(console.log("$anchorScroll()"),a()),!1},c.navItems=[{anchor:"#anchor-about",name:"About"},{anchor:"#anchor-projects",name:"Projects"},{anchor:"#anchor-skills",name:"Skills"},{anchor:"#anchor-contact",name:"Contact"}],c.navfn=function(a){switch(a){case"home":c.item="Item one selected.";break;case"home":c.item="Item two selected.";break;case"home":c.item="Item three selected.";break;case"singular":c.item="Singular link item selected.";break;default:c.item="Default selection."}},c.toggleStyling=function(){c.inverse=!c.inverse,angular.equals(c.inverse,!0)?c.styling="Inverse":c.styling="Default"},c.toggleSearchForm=function(){c.search.show=!c.search.show,angular.equals(c.search.show,!0)?c.searchDisplay="Visible":c.searchDisplay="Hidden"},c.addMenu=function(){c.menus.push({title:"Added On The Fly!",action:"default"})},c.toggleAffixed=function(){switch(c.affixed){case"top":c.affixed="bottom";break;case"bottom":c.affixed="none";break;case"none":c.affixed="top"}}}]),angular.module("portfolioApp").controller("MainCtrl",["$rootScope","$scope","$http","facebook","$window","$interval","moment",function(a,b,c,d,e,f,g){b.scrollPos=0,b.age=new g("1993-01-26","YYYYMMDD").fromNow(!0),b.instaPhotosMe=[],b.instaPhotosMila=[],b.instaPhotosSchool=[],b.FBUser="1404466291",b.facebookProfilePic={},b.instaURLSchool="https://api.instagram.com/v1/users/252730678/media/recent?client_id=a1a54f9d7f6e4726a5454c4c7fb118ac&callback=JSON_CALLBACK",b.instaURLMe="https://api.instagram.com/v1/users/205469079/media/recent?client_id=a1a54f9d7f6e4726a5454c4c7fb118ac&callback=JSON_CALLBACK",b.instaURLMila="https://api.instagram.com/v1/users/1946701563/media/recent?client_id=a1a54f9d7f6e4726a5454c4c7fb118ac&callback=JSON_CALLBACK",b.randomSort=function(){angular.forEach(b.instaPhotosMe,function(a){a.rank=10*Math.random()})},a.$on("fb.init",function(){}),f(b.randomSort,4e3),b.addFacebookFriend=function(){d.getUser().then(function(a){console.log(a)},function(a){console.log(a)})},c.jsonp(b.instaURLMe).success(function(a){angular.forEach(a.data,function(a){a.hasOwnProperty("images")&&b.instaPhotosMe.push({image:a.images.standard_resolution.url,rank:1})})}).error(function(a){console.log(a)}),c.jsonp(b.instaURLMila).success(function(a){angular.forEach(a.data,function(a){a.hasOwnProperty("images")&&b.instaPhotosMila.push({image:a.images.standard_resolution.url,rank:1})})}).error(function(a){console.log(a)}),c.jsonp(b.instaURLSchool).success(function(a){angular.forEach(a.data,function(a){a.hasOwnProperty("images")&&b.instaPhotosSchool.push({image:a.images.standard_resolution.url,rank:1})})}).error(function(a){console.log(a)})}]),angular.module("portfolioApp").controller("ContactCtrl",["$scope","$http",function(a,b){a.sendMail=function(){var a="https://api.mailgun.net/v3/sandboxbe307156895b4117923702d95ffc891d.mailgun.org";b.get(a).then()},a.rate=7,a.max=10,a.isReadonly=!1,a.hoveringOver=function(b){a.overStar=b,a.percent=100*(b/a.max)},a.ratingStates=[{stateOn:"glyphicon-ok-sign",stateOff:"glyphicon-ok-circle"},{stateOn:"glyphicon-star",stateOff:"glyphicon-star-empty"},{stateOn:"glyphicon-heart",stateOff:"glyphicon-ban-circle"},{stateOn:"glyphicon-heart"},{stateOff:"glyphicon-off"}]}]),angular.module("portfolioApp").controller("CarouselCtrl",["$scope",function(a){a.myInterval=5e3,a.noWrapSlides=!1}]),angular.module("portfolioApp").controller("SkillsCtrl",["$scope",function(a){a.mySkills=[{name:"Javascript",penjoyment:8,exp:3,desc:"Working with functional programming is great for whipping up quick projects without wasting time on setting up an environment. It is the language that I have worked with most for web development purposes."},{name:"Terminal",penjoyment:8,exp:4,desc:"What kind of computer scientist would I be if I didnt know my way around a shell. I prefer bash or zsh"},{name:"Angular.js",penjoyment:8,exp:1,desc:"The greatest MVC frontend framework I have been exposed to. Its implementation of directives and controllers is brilliantly smooth and concise. Paired with npm and bower components, building web apps with Angular is a breeze!"},{name:"Node.js",penjoyment:8,exp:1,desc:"Carrying Javascript all the way to the backend feels clear, concise, and concrete from front to back."},{name:"HTML5 & CSS3",penjoyment:7,exp:3,desc:"CSS3 animations are awesome! With an extremely easy and intuitive approach to basic stylesheets, they pair greatly with the enhanced security and simplicity of HTML5."},{name:"PHP",penjoyment:7,exp:2,desc:"For a scripting language with poor documentation and backwards compatability, it is fun because of it's object orientation and modularization. With years of development, it holds several classes and functions which make development fun and easy."},{name:"Backbone.js",penjoyment:8,exp:1,desc:"Backbone.js is a blazing fast MV frontend framework for developing webapps. It's largest con is for me is a redundancy with several render() calls for *Views."},{name:"Java",penjoyment:9,exp:3,desc:"With humble roots of the first language I learned, Java had taught me several things about programming conventions. Interfaces implementing polymorphism and classes extending inheritance, Java is a powerful tool with strict type declarations that are extensive."},{name:"MySQL",penjoyment:5,exp:1,desc:"The most important part about SQL DBs are proper schemas which reduce join calls and eliminate redundant queries. "},{name:"Amazon EC2 (AWS)",penjoyment:8,exp:1,desc:"Using Hadoop's Map Reduce on AWS was a fun project which I would parse user data from log files. Working with EC2 web services was enjoyable because it taught me the basis of cloud computing."},{name:"Photoshop",penjoyment:8,exp:3,desc:"Using Hadoop's Map Reduce on AWS was a fun project which I would parse user data from log files. Working with EC2 web services was enjoyable because it taught me the basis of cloud computing."},{name:"After Effects",penjoyment:8,exp:1,desc:"Using Hadoop's Map Reduce on AWS was a fun project which I would parse user data from log files. Working with EC2 web services was enjoyable because it taught me the basis of cloud computing."}],a.predicate="-exp",a.order=function(b){a.predicate="-"+b}}]),angular.module("portfolioApp").directive("angledNavbar",function(){return{restrict:"AE",scope:{brand:"=",menus:"=",affixed:"=",search:"=",searchfn:"&",navfn:"&",inverse:"="},templateUrl:"views/navbar.html",controller:["$scope","$element","$attrs",function(a,b,c){a.defaults={brand:'<span class="glyphicon glyphicon-certificate"></span>',menus:[],search:{show:!1}},angular.isUndefined(c.navfn)&&(a.navfn=function(b){angular.isObject(b)?a.$emit("nav.menu",b):a.$emit("nav.menu",{action:b})}),angular.isUndefined(c.searchfn)&&(a.searchfn=function(){a.$emit("nav.search.execute")}),a.$watch("affixed",function(a){var b=angular.element(document).find("body");angular.equals(a,"top")&&!b.hasClass("navbar-affixed-top")?(b.hasClass("navbar-affixed-bottom")&&b.removeClass("navbar-affixed-bottom"),b.addClass("navbar-affixed-top")):angular.equals(a,"bottom")&&!b.hasClass("navbar-affixed-bottom")?(b.hasClass("navbar-affixed-top")&&b.removeClass("navbar-affixed-top"),b.addClass("navbar-affixed-bottom")):(b.hasClass("navbar-affixed-top")&&b.removeClass("navbar-affixed-top"),b.hasClass("navbar-affixed-bottom")&&b.removeClass("navbar-affixed-bottom"))}),a.noop=function(){angular.noop()},a.navAction=function(b){a.navfn({action:b})},a.haveBranding=function(){return angular.isDefined(c.brand)?a.brand:a.defaults.brand},a.hasMenus=function(){return angular.isDefined(c.menus)},a.hasDropdownMenu=function(a){return angular.isDefined(a.menu)&&angular.isArray(a.menu)},a.isDivider=function(a){return angular.isDefined(a.divider)&&angular.equals(a.divider,!0)}}]}}),angular.module("portfolioApp").directive("angledFooter",[function(){return{restrict:"AE",templateUrl:"views/footer.html",controller:["$scope",function(a){a["var"]=[]}]}}]),angular.module("portfolioApp").run(["$templateCache",function(a){a.put("views/contact.html",'<p>This is the contact view.</p> <ul ng-repeat="thing in contact.awesomeThings"> <li>{{thing}}</li> </ul>'),a.put("views/footer.html",'<div class="footer bg-blue"> <div class="container"> <div class="col-xs-12 col-sm-6"> <a href="https://www.facebook.com/aaron.llanos.7" class="btn"><i class="fa fa-facebook fa-2x"></i></a> <a href="https://twitter.com/HookEM_A" class="btn"><i class="fa fa-twitter fa-2x"></i></a> <a href="https://github.com/AaronLlanos" class="btn"><i class="fa fa-github fa-2x"></i></a> <a href="https://instagram.com/aaronyolungz/" class="btn"><i class="fa fa-instagram fa-2x"></i></a> <a href="https://www.linkedin.com/pub/aaron-llanos/85/960/253" class="btn"><i class="fa fa-linkedin fa-2x"></i></a> </div> <div class="col-xs-6 col-sm-3"> <p>Aaron Llanos</p> </div> <div class="col-xs-6 col-sm-3"> <p class="text-right"><span class="glyphicon glyphicon-heart"> Yeomonn team</span></p> </div> </div> </div>'),a.put("views/main.html",'<div class="background-div"> <img ng-repeat="instaPhoto in instaPhotosMe | orderBy:\'rank\'" style="width: 20%; height: 20%" class="img-responsive pull-left insta-photo" ng-src="{{instaPhoto.image}}"> </div> <div class="row clear-bg-div"></div> <div id="anchor-about"> <div class="row content-strip content-strip-top"> <div class="container"> <div class="row"> <div class="col-md-4 col-xs-12 col-sm-4"> <img class="img-circle img-responsive center-block" ng-src="https://graph.facebook.com/1404466291/picture?type=large"> <p class="text-center" style="color: grey; font-size: 0.9em">"Being a front-end web developer without an online portfolio is like being Picasso with no canvas"</p> </div> <div class="col-md-8 col-xs-12 col-sm-8"> <h3 class="text-center">Aaron Llanos<br><small>Web Development | User Interfacing</small></h3> <hr> <div class="col-xs-3 text-center">{{age}}</div> <div class="col-xs-4 text-center">Austin, TX</div> <div class="col-xs-5 text-center">B.S.A Computer Science</div> </div> </div> </div> </div> <div class="row content-strip bg-orange"> <div class="col-xs-12"> <h3 class="fancy-font text-center">About Me</h3> <hr> <div class="col-xs-12 col-sm-4"> <div class="col-xs-12"> <div ng-controller="CarouselCtrl"> <carousel interval="myInterval" no-wrap="noWrapSlides"> <slide ng-repeat="slide in instaPhotosSchool | limitTo:10" active="slide.active"> <img ng-src="{{slide.image}}" style="margin:auto"> </slide> </carousel> </div> </div> <h3 class="fancy-font text-center">UT Austin (Hook \'Em)</h3> <hr> <p class="comic-font"> I am a proud graduate of The University of Texas at Austin. Four and a half years of Texas Football, three hundred gallons of ☕️, and friends for a lifetime. This experience truly could not have been better. I link to think that the only way it could have been better is if I had more time to spend on The 40 acres. </p> </div> <div class="col-xs-12 col-sm-4"> <div class="col-xs-12"> <div ng-controller="CarouselCtrl"> <carousel interval="myInterval" no-wrap="noWrapSlides"> <slide ng-repeat="slide in instaPhotosMila | limitTo:10" active="slide.active"> <img ng-src="{{slide.image}}" style="margin:auto"> </slide> </carousel> </div> </div> <h3 class="fancy-font text-center">Mila</h3> <hr> <p class="comic-font"> My beutiful little girl, Mila. She was born on April 23rd, 2015. She goes everywhere with me and she is the sweetest Husky known to mankind. There\'s not a single mean bone in her body. </p> </div> <div class="col-xs-12 col-sm-4"> <div class="col-xs-12"> <div ng-controller="CarouselCtrl"> <carousel interval="myInterval" no-wrap="noWrapSlides"> <slide ng-repeat="slide in instaPhotosMe | limitTo:10" active="slide.active"> <img ng-src="{{slide.image}}" style="margin:auto"> </slide> </carousel> </div> </div> <h3 class="fancy-font text-center">Myself</h3> <hr> <p class="comic-font"> Hello, I am Aaron Llanos. I love to code and I also enjoy helping others with anything that I can. I have a HUGE family which I love with all of my heart. I love to skateboard, freestyle rap, jam out (to Pearl Jam, Red Hot Chili Peppers, Foo Fighters...), drive fast cars, watch movies, and eat popcorn. If I had to choose a favorite author it would most defintely be Kurt Vonnegut. I love <a href="http://campkesem.org/">Camp Kesem</a> and would do anything if it means helping out children from hardships. After all, they are the future of world and I must lead by example. If you would like to no more lets get in contact! </p> </div> </div> </div> </div> <div id="anchor-projects" class="row content-strip bg-green"> <div class="col-xs-12"> <h3 class="fancy-font text-center">Projects</h3> <hr> </div> </div> <div id="anchor-skills" class="row content-strip bg-red" ng-controller="SkillsCtrl"> <div class="col-xs-12"> <h3 class="fancy-font text-center">Skills</h3> <hr> <button class="btn btn-sm btn-info" ng-click="order(\'exp\')">Experience</button> <button class="btn btn-sm btn-info" ng-click="order(\'penjoyment\')">Personal Enjoyment</button> <br> <br> <div class="col-xs-6 col-sm-3" ng-repeat="skill in mySkills | orderBy:predicate"> <div class="card card-slide" tooltip-placement="bottom" tooltip="{{skill.desc}}"> <h4 class="comic-font text-center">{{skill.name}}</h4> </div> </div> </div> </div> <div id="anchor-contact" class="row content-strip bg-purple" ng-controller="ContactCtrl"> <div class="container"> <div class="row"> <h3 class="fancy-font text-center">Contact (under construction)</h3> <hr> <form class="form"> <div class="row"> <div class="col-xs-12 col-sm-6 form-group"> <input id="firstname" type="text" class="form-control" placeholder="First Name" required> <input id="lastname" type="text" class="form-control" placeholder="Last Name" required> <input id="email" type="email" class="form-control" placeholder="your_address@wherever.ending" required> <hr> <input ng-click="postComment()" class="btn btn-success" class="form-control" type="submit"> </div> <div class="col-xs-12 col-sm-6 form-group"> <textarea id="comment" type="text" rows="9" class="form-control" placeholder="Enter your comment here!!" required></textarea> </div> </div> </form> <!-- <div class="col-xs-12 col-sm-2"><h4 class="comic-font">or</h4></div>\n			<div class="col-sm-5">\n				<rating ng-model="rate" max="max" readonly="isReadonly" on-hover="hoveringOver(value)" on-leave="overStar = null" titles="[\'one\',\'two\',\'three\']" ></rating>\n				<span class="label" ng-class="{\'label-warning\': percent<30, \'label-info\': percent>=30 && percent<70, \'label-success\': percent>=70}" ng-show="overStar && !isReadonly">{{percent}}%</span>\n			</div> --> </div> </div> </div>'),a.put("views/navbar.html",'<nav id="scrollspy" class="navbar navbar-inverse navbar-fixed-top" role="navigation" ng-controller="NavbarCtrl"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#about"><span class="glyphicon glyphicon-th"></span>&nbsp;Aaron</a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav"> <li ng-repeat="item in navItems"><a href="{{item.anchor}}" ng-click="gotoAnchor($event, item.anchor)">{{item.name}}</a></li> </ul> </div> </div> </nav>'),a.put("views/project.html","")}]);