<<<<<<< HEAD
"use strict";var render=function(t){t.empty();var e=$('<section class="components"></section>');null==state.pag?(e.append(Header()),e.append(welcome())):(e.append(Header()),e.append(Outfit())),t.append(e)},state={cloth:null,clothSelected:null,pag:null},update=function(){render(root)};$(function(t){var e={apiKey:"AIzaSyBdX8FyCVHBS3WkdCi7KeW-5BFw7KlC3g4",authDomain:"base-7937c.firebaseapp.com",databaseURL:"https://base-7937c.firebaseio.com",projectId:"base-7937c",storageBucket:"",messagingSenderId:"305091668120"};firebase.initializeApp(e),firebase.database().ref().on("value",function(t){state.cloth=t.val(),console.log(state.cloth)});var i=$("#root");render(i),$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}})}),function(t,e,i,s){function n(e,i){this.settings=null,this.options=t.extend({},n.Defaults,i),this.$element=t(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},t.each(["onResize","onThrottledResize"],t.proxy(function(e,i){this._handlers[i]=t.proxy(this[i],this)},this)),t.each(n.Plugins,t.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),t.each(n.Workers,t.proxy(function(e,i){this._pipe.push({filter:i.filter,run:t.proxy(i.run,this)})},this)),this.setup(),this.initialize()}n.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},n.Width={Default:"default",Inner:"inner",Outer:"outer"},n.Type={Event:"event",State:"state"},n.Plugins={},n.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,s=this.settings.rtl,n={width:"auto","margin-left":s?e:"","margin-right":s?"":e};!i&&this.$stage.children().css(n),t.css=n}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,s=this._items.length,n=!this.settings.autoWidth,o=[];for(t.items={merge:!1,width:e};s--;)i=this._mergers[s],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=i>1||t.items.merge,o[s]=n?e*i:this._items[s].width();this._widths=o}},{filter:["items","settings"],run:function(){var e=[],i=this._items,s=this.settings,n=Math.max(2*s.items,4),o=2*Math.ceil(i.length/2),r=s.loop&&i.length?s.rewind?n:Math.max(n,o):0,a="",h="";for(r/=2;r--;)e.push(this.normalize(e.length/2,!0)),a+=i[e[e.length-1]][0].outerHTML,e.push(this.normalize(i.length-1-(e.length-1)/2,!0)),h=i[e[e.length-1]][0].outerHTML+h;this._clones=e,t(a).addClass("cloned").appendTo(this.$stage),t(h).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,s=0,n=0,o=[];++i<e;)s=o[i-1]||0,n=this._widths[this.relative(i)]+this.settings.margin,o.push(s+n*t);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,i={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(i)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,s=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],s.eq(e).css(t.css);else i&&(t.css.width=t.items.width,s.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,s,n=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,r=this.coordinates(this.current())+o,a=r+this.width()*n,h=[];for(i=0,s=this._coordinates.length;i<s;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+o*n,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&h.push(i);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+h.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],n.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var e,i,s;e=this.$element.find("img"),i=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:void 0,s=this.$element.children(i).width(),e.length&&s<=0&&this.preloadAutoWidthImages(e)}this.$element.addClass(this.options.loadingClass),this.$stage=t("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},n.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,s=-1,n=null;i?(t.each(i,function(t){t<=e&&t>s&&(s=Number(t))}),"function"==typeof(n=t.extend({},this.options,i[s])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+s))):n=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=s,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},n.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},n.prototype.prepare=function(e){var i=this.trigger("prepare",{content:e});return i.data||(i.data=t("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:i.data}),i.data},n.prototype.update=function(){for(var e=0,i=this._pipe.length,s=t.proxy(function(t){return this[t]},this._invalidated),n={};e<i;)(this._invalidated.all||t.grep(this._pipe[e].filter,s).length>0)&&this._pipe[e].run(n),e++;this._invalidated={},!this.is("valid")&&this.enter("valid")},n.prototype.width=function(t){switch(t=t||n.Width.Default){case n.Width.Inner:case n.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},n.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},n.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer),this.resizeTimer=e.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},n.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},n.prototype.registerEventHandlers=function(){t.support.transition&&this.$stage.on(t.support.transition.end+".owl.core",t.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(e,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",t.proxy(this.onDragEnd,this)))},n.prototype.onDragStart=function(e){var s=null;3!==e.which&&(t.support.transform?s={x:(s=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===s.length?12:4],y:s[16===s.length?13:5]}:(s=this.$stage.position(),s={x:this.settings.rtl?s.left+this.$stage.width()-this.width()+this.settings.margin:s.left,y:s.top}),this.is("animating")&&(t.support.transform?this.animate(s.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=t(e.target),this._drag.stage.start=s,this._drag.stage.current=s,this._drag.pointer=this.pointer(e),t(i).on("mouseup.owl.core touchend.owl.core",t.proxy(this.onDragEnd,this)),t(i).one("mousemove.owl.core touchmove.owl.core",t.proxy(function(e){var s=this.difference(this._drag.pointer,this.pointer(e));t(i).on("mousemove.owl.core touchmove.owl.core",t.proxy(this.onDragMove,this)),Math.abs(s.x)<Math.abs(s.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},n.prototype.onDragMove=function(t){var e=null,i=null,s=null,n=this.difference(this._drag.pointer,this.pointer(t)),o=this.difference(this._drag.stage.start,n);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,o.x=((o.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),s=this.settings.pullDrag?-1*n.x/5:0,o.x=Math.max(Math.min(o.x,e+s),i+s)),this._drag.stage.current=o,this.animate(o.x))},n.prototype.onDragEnd=function(e){var s=this.difference(this._drag.pointer,this.pointer(e)),n=this._drag.stage.current,o=s.x>0^this.settings.rtl?"left":"right";t(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==s.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(n.x,0!==s.x?o:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=o,(Math.abs(s.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},n.prototype.closest=function(e,i){var s=-1,n=this.width(),o=this.coordinates();return this.settings.freeDrag||t.each(o,t.proxy(function(t,r){return"left"===i&&e>r-30&&e<r+30?s=t:"right"===i&&e>r-n-30&&e<r-n+30?s=t+1:this.op(e,"<",r)&&this.op(e,">",o[t+1]||r-n)&&(s="left"===i?t+1:t),-1===s},this)),this.settings.loop||(this.op(e,">",o[this.minimum()])?s=e=this.minimum():this.op(e,"<",o[this.maximum()])&&(s=e=this.maximum())),s},n.prototype.animate=function(e){var i=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),i&&(this.enter("animating"),this.trigger("translate")),t.support.transform3d&&t.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"}):i?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,t.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},n.prototype.is=function(t){return this._states.current[t]&&this._states.current[t]>0},n.prototype.current=function(t){if(void 0===t)return this._current;if(0!==this._items.length){if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});void 0!==e.data&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current}},n.prototype.invalidate=function(e){return"string"===t.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),t.map(this._invalidated,function(t,e){return e})},n.prototype.reset=function(t){void 0!==(t=this.normalize(t))&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},n.prototype.normalize=function(t,e){var i=this._items.length,s=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=void 0:(t<0||t>=i+s)&&(t=((t-s/2)%i+i)%i+s/2),t},n.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},n.prototype.maximum=function(t){var e,i,s,n=this.settings,o=this._coordinates.length;if(n.loop)o=this._clones.length/2+this._items.length-1;else if(n.autoWidth||n.merge){for(e=this._items.length,i=this._items[--e].width(),s=this.$element.width();e--&&!((i+=this._items[e].width()+this.settings.margin)>s););o=e+1}else o=n.center?this._items.length-1:this._items.length-n.items;return t&&(o-=this._clones.length/2),Math.max(o,0)},n.prototype.minimum=function(t){return t?0:this._clones.length/2},n.prototype.items=function(t){return void 0===t?this._items.slice():(t=this.normalize(t,!0),this._items[t])},n.prototype.mergers=function(t){return void 0===t?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},n.prototype.clones=function(e){var i=this._clones.length/2,s=i+this._items.length,n=function(t){return t%2==0?s+t/2:i-(t+1)/2};return void 0===e?t.map(this._clones,function(t,e){return n(e)}):t.map(this._clones,function(t,i){return t===e?n(i):null})},n.prototype.speed=function(t){return void 0!==t&&(this._speed=t),this._speed},n.prototype.coordinates=function(e){var i,s=1,n=e-1;return void 0===e?t.map(this._coordinates,t.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(s=-1,n=e+1),i=this._coordinates[e],i+=(this.width()-i+(this._coordinates[n]||0))/2*s):i=this._coordinates[n]||0,i=Math.ceil(i))},n.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},n.prototype.to=function(t,e){var i=this.current(),s=null,n=t-this.relative(i),o=(n>0)-(n<0),r=this._items.length,a=this.minimum(),h=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(n)>r/2&&(n+=-1*o*r),(s=(((t=i+n)-a)%r+r)%r+a)!==t&&s-n<=h&&s-n>0&&(i=s-n,t=s,this.reset(i))):t=this.settings.rewind?(t%(h+=1)+h)%h:Math.max(a,Math.min(h,t)),this.speed(this.duration(i,t,e)),this.current(t),this.$element.is(":visible")&&this.update()},n.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},n.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},n.prototype.onTransitionEnd=function(t){if(void 0!==t&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},n.prototype.viewport=function(){var s;return this.options.responsiveBaseElement!==e?s=t(this.options.responsiveBaseElement).width():e.innerWidth?s=e.innerWidth:i.documentElement&&i.documentElement.clientWidth?s=i.documentElement.clientWidth:console.warn("Can not detect viewport width."),s},n.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(t.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},n.prototype.add=function(e,i){var s=this.relative(this._current);i=void 0===i?this._items.length:this.normalize(i,!0),e=e instanceof jQuery?e:t(e),this.trigger("add",{content:e,position:i}),e=this.prepare(e),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[i-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(e),this._items.splice(i,0,e),this._mergers.splice(i,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[s]&&this.reset(this._items[s].index()),this.invalidate("items"),this.trigger("added",{content:e,position:i})},n.prototype.remove=function(t){void 0!==(t=this.normalize(t,!0))&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},n.prototype.preloadAutoWidthImages=function(e){e.each(t.proxy(function(e,i){this.enter("pre-loading"),i=t(i),t(new Image).one("load",t.proxy(function(t){i.attr("src",t.target.src),i.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",i.attr("src")||i.attr("data-src")||i.attr("data-src-retina"))},this))},n.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(i).off(".owl.core"),!1!==this.settings.responsive&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize));for(var s in this._plugins)this._plugins[s].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},n.prototype.op=function(t,e,i){var s=this.settings.rtl;switch(e){case"<":return s?t>i:t<i;case">":return s?t<i:t>i;case">=":return s?t<=i:t>=i;case"<=":return s?t>=i:t<=i}},n.prototype.on=function(t,e,i,s){t.addEventListener?t.addEventListener(e,i,s):t.attachEvent&&t.attachEvent("on"+e,i)},n.prototype.off=function(t,e,i,s){t.removeEventListener?t.removeEventListener(e,i,s):t.detachEvent&&t.detachEvent("on"+e,i)},n.prototype.trigger=function(e,i,s,o,r){var a={item:{count:this._items.length,index:this.current()}},h=t.camelCase(t.grep(["on",e,s],function(t){return t}).join("-").toLowerCase()),l=t.Event([e,"owl",s||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},a,i));return this._supress[e]||(t.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(l)}),this.register({type:n.Type.Event,name:e}),this.$element.trigger(l),this.settings&&"function"==typeof this.settings[h]&&this.settings[h].call(this,l)),l},n.prototype.enter=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){void 0===this._states.current[e]&&(this._states.current[e]=0),this._states.current[e]++},this))},n.prototype.leave=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]--},this))},n.prototype.register=function(e){if(e.type===n.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var i=t.event.special[e.name]._default;t.event.special[e.name]._default=function(t){return!i||!i.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&t.namespace.indexOf("owl")>-1:i.apply(this,arguments)},t.event.special[e.name].owl=!0}}else e.type===n.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy(function(i,s){return t.inArray(i,this._states.tags[e.name])===s},this)))},n.prototype.suppress=function(e){t.each(e,t.proxy(function(t,e){this._supress[e]=!0},this))},n.prototype.release=function(e){t.each(e,t.proxy(function(t,e){delete this._supress[e]},this))},n.prototype.pointer=function(t){var i={x:null,y:null};return t=t.originalEvent||t||e.event,(t=t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t).pageX?(i.x=t.pageX,i.y=t.pageY):(i.x=t.clientX,i.y=t.clientY),i},n.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},n.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},t.fn.owlCarousel=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var s=t(this),o=s.data("owl.carousel");o||(o=new n(this,"object"==typeof e&&e),s.data("owl.carousel",o),t.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,i){o.register({type:n.Type.Event,name:i}),o.$element.on(i+".owl.carousel.core",t.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([i]),o[i].apply(this,[].slice.call(arguments,1)),this.release([i]))},o))})),"string"==typeof e&&"_"!==e.charAt(0)&&o[e].apply(o,i)})},t.fn.owlCarousel.Constructor=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoRefresh:!0,autoRefreshInterval:500},n.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=e.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},n.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},n.prototype.destroy=function(){var t,i;e.clearInterval(this._interval);for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":t.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type))for(var i=this._core.settings,s=i.center&&Math.ceil(i.items/2)||i.items,n=i.center&&-1*s||0,o=(e.property&&void 0!==e.property.value?e.property.value:this._core.current())+n,r=this._core.clones().length,a=t.proxy(function(t,e){this.load(e)},this);n++<s;)this.load(r/2+this._core.relative(o)),r&&t.each(this._core.clones(this._core.relative(o)),a),o++},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={lazyLoad:!1},n.prototype.load=function(i){var s=this._core.$stage.children().eq(i),n=s&&s.find(".owl-lazy");!n||t.inArray(s.get(0),this._loaded)>-1||(n.each(t.proxy(function(i,s){var n,o=t(s),r=e.devicePixelRatio>1&&o.attr("data-src-retina")||o.attr("data-src");this._core.trigger("load",{element:o,url:r},"lazy"),o.is("img")?o.one("load.owl.lazy",t.proxy(function(){o.css("opacity",1),this._core.trigger("loaded",{element:o,url:r},"lazy")},this)).attr("src",r):((n=new Image).onload=t.proxy(function(){o.css({"background-image":'url("'+r+'")',opacity:"1"}),this._core.trigger("loaded",{element:o,url:r},"lazy")},this),n.src=r)},this)),this._loaded.push(s.get(0)))},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"==t.property.name&&this.update()},this),"loaded.owl.lazy":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},n.prototype.update=function(){var e=this._core._current,i=e+this._core.settings.items,s=this._core.$stage.children().toArray().slice(e,i),n=[],o=0;t.each(s,function(e,i){n.push(t(i).height())}),o=Math.max.apply(null,n),this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)},n.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find(".owl-video");i.length&&(i.css("display","none"),this.fetch(i,t(e.content)))}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy(function(t){this.play(t)},this))};n.Defaults={video:!1,videoHeight:!1,videoWidth:!1},n.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",s=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),n=t.attr("data-width")||this._core.settings.videoWidth,o=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if((s=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")>-1)i="youtube";else if(s[3].indexOf("vimeo")>-1)i="vimeo";else{if(!(s[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");i="vzaar"}s=s[6],this._videos[r]={type:i,id:s,width:n,height:o},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},n.prototype.thumbnail=function(e,i){var s,n,o,r=i.width&&i.height?'style="width:'+i.width+"px;height:"+i.height+'px;"':"",a=e.find("img"),h="src",l="",c=this._core.settings,p=function(t){n='<div class="owl-video-play-icon"></div>',s=c.lazyLoad?'<div class="owl-video-tn '+l+'" '+h+'="'+t+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+t+')"></div>',e.after(s),e.after(n)};if(e.wrap('<div class="owl-video-wrapper"'+r+"></div>"),this._core.settings.lazyLoad&&(h="data-src",l="owl-lazy"),a.length)return p(a.attr(h)),a.remove(),!1;"youtube"===i.type?(o="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg",p(o)):"vimeo"===i.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){o=t[0].thumbnail_large,p(o)}}):"vzaar"===i.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){o=t.framegrab_url,p(o)}})},n.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},n.prototype.play=function(e){var i,s=t(e.target).closest("."+this._core.settings.itemClass),n=this._videos[s.attr("data-video")],o=n.width||"100%",r=n.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),s=this._core.items(this._core.relative(s.index())),this._core.reset(s.index()),"youtube"===n.type?i='<iframe width="'+o+'" height="'+r+'" src="//www.youtube.com/embed/'+n.id+"?autoplay=1&rel=0&v="+n.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===n.type?i='<iframe src="//player.vimeo.com/video/'+n.id+'?autoplay=1" width="'+o+'" height="'+r+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===n.type&&(i='<iframe frameborder="0"height="'+r+'"width="'+o+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+n.id+'/player?autoplay=true"></iframe>'),t('<div class="owl-video-frame">'+i+"</div>").insertAfter(s.find(".owl-video")),this._playing=s.addClass("owl-video-playing"))},n.prototype.isInFullScreen=function(){var e=i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement;return e&&t(e).parent().hasClass("owl-video-frame")},n.prototype.destroy=function(){var t,e;this._core.$element.off("click.owl.video");for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this.core=e,this.core.options=t.extend({},n.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":t.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};n.Defaults={animateOut:!1,animateIn:!1},n.prototype.swap=function(){if(1===this.core.settings.items&&t.support.animation&&t.support.transition){this.core.speed(0);var e,i=t.proxy(this.clear,this),s=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,r=this.core.settings.animateOut;this.core.current()!==this.previous&&(r&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),s.one(t.support.animation.end,i).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(r)),o&&n.one(t.support.animation.end,i).addClass("animated owl-animated-in").addClass(o))}},n.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":t.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":t.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":t.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=t.extend({},n.Defaults,this._core.options)};n.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},n.prototype.play=function(t,e){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},n.prototype._getNextTimeout=function(s,n){return this._timeout&&e.clearTimeout(this._timeout),e.setTimeout(t.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||i.hidden||this._core.next(n||this._core.settings.autoplaySpeed)},this),s||this._core.settings.autoplayTimeout)},n.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},n.prototype.stop=function(){this._core.is("rotating")&&(e.clearTimeout(this._timeout),this._core.leave("rotating"))},n.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},n.prototype.destroy=function(){var t,e;this.stop();for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers)};n.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},n.prototype.initialize=function(){var e,i=this._core.settings;this._controls.$relative=(i.navContainer?t(i.navContainer):t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=t("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy(function(t){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?t(i.dotsContainer):t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",t.proxy(function(e){var s=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(s,i.dotsSpeed)},this));for(e in this._overrides)this._core[e]=t.proxy(this[e],this)},n.prototype.destroy=function(){var t,e,i,s;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)this._controls[e].remove();for(s in this.overides)this._core[s]=this._overrides[s];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},n.prototype.update=function(){var t,e,i=this._core.clones().length/2,s=i+this._core.items().length,n=this._core.maximum(!0),o=this._core.settings,r=o.center||o.autoWidth||o.dotsData?1:o.dotsEach||o.items;if("page"!==o.slideBy&&(o.slideBy=Math.min(o.slideBy,o.items)),o.dots||"page"==o.slideBy)for(this._pages=[],t=i,e=0,0;t<s;t++){if(e>=r||0===e){if(this._pages.push({start:Math.min(n,t-i),end:t-i+r-1}),Math.min(n,t-i)===n)break;e=0,0}e+=this._core.mergers(this._core.relative(t))}},n.prototype.draw=function(){var e,i=this._core.settings,s=this._core.items().length<=i.items,n=this._core.relative(this._core.current()),o=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||s),i.nav&&(this._controls.$previous.toggleClass("disabled",!o&&n<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&n>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||s),i.dots&&(e=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},n.prototype.onTrigger=function(e){var i=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotsData?1:i.dotsEach||i.items)}},n.prototype.current=function(){var e=this._core.relative(this._core.current());return t.grep(this._pages,t.proxy(function(t,i){return t.start<=e&&t.end>=e},this)).pop()},n.prototype.getPosition=function(e){var i,s,n=this._core.settings;return"page"==n.slideBy?(i=t.inArray(this.current(),this._pages),s=this._pages.length,e?++i:--i,i=this._pages[(i%s+s)%s].start):(i=this._core.relative(this._core.current()),s=this._core.items().length,e?i+=n.slideBy:i-=n.slideBy),i},n.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},n.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},n.prototype.to=function(e,i,s){var n;!s&&this._pages.length?(n=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%n+n)%n].start,i)):t.proxy(this._overrides.to,this._core)(e,i)},t.fn.owlCarousel.Constructor.Plugins.Navigation=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(i){this._core=i,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(function(i){i.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!i)return;this._hashes[i]=e.content}},this),"changed.owl.carousel":t.proxy(function(i){if(i.namespace&&"position"===i.property.name){var s=this._core.items(this._core.relative(this._core.current())),n=t.map(this._hashes,function(t,e){return t===s?e:null}).join();if(!n||e.location.hash.slice(1)===n)return;e.location.hash=n}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(function(t){var i=e.location.hash.substring(1),s=this._core.$stage.children(),n=this._hashes[i]&&s.index(this._hashes[i]);void 0!==n&&n!==this._core.current()&&this._core.to(this._core.relative(n),!1,!0)},this))};n.Defaults={URLhashListener:!1},n.prototype.destroy=function(){var i,s;t(e).off("hashchange.owl.navigation");for(i in this._handlers)this._core.$element.off(i,this._handlers[i]);for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){function n(e,i){var n=!1,o=e.charAt(0).toUpperCase()+e.slice(1);return t.each((e+" "+a.join(o+" ")+o).split(" "),function(t,e){if(r[e]!==s)return n=!i||e,!1}),n}function o(t){return n(t,!0)}var r=t("<support>").get(0).style,a="Webkit Moz O ms".split(" "),h={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},l={csstransforms:function(){return!!n("transform")},csstransforms3d:function(){return!!n("perspective")},csstransitions:function(){return!!n("transition")},cssanimations:function(){return!!n("animation")}};l.csstransitions()&&(t.support.transition=new String(o("transition")),t.support.transition.end=h.transition.end[t.support.transition]),l.cssanimations()&&(t.support.animation=new String(o("animation")),t.support.animation.end=h.animation.end[t.support.animation]),l.csstransforms()&&(t.support.transform=new String(o("transform")),t.support.transform3d=l.csstransforms3d())}(window.Zepto||window.jQuery,window,document);var Mixed=function(){var t=$("<section class='cloth-container'></section>"),e=$("<div class='cloth-container__princNews'>Aquí va la ropa</div>");return t.append(e),t},filterBycloths=function(t,e){return t.filter(function(t){return-1!=t.color.indexOf(e)})},Footer=function(){var t=$("<footer class='footer-container'></footer>"),e=$("<div class='footer-container__icon'>Aquí va el footer</div>");return t.append(e),t},Header=function(){var t=$("<header class='header-container'></header>"),e=$('<nav class="navbar navbar-default"><div class="container-fluid"></div></nav>'),i=$('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand center" href="#"><div class="img-size"><img src="assets/img/logo.png" class="img-responsive" alt="logo"></div></a><a class="navbar-brand right" href="#"><i class="glyphicon glyphicon-shopping-cart"></i></a></div>'),s=$('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li class="active"><a href="#">Inicio <span class="sr-only">(current)</span></a></li><li><a href="#">Mis compras </a></li><li><a href="#">Mis citas </a></li></ul></div>');return t.append(e),e.append(i),e.append(s),t},Outfit=function(){var t=$('<section class="cont_outfit"></section>'),e=$('<div class="row"></div>'),i=$('<div id="img_fixed" class="col-xs-8 col-xs-offset-2"></div>'),s=$('<img src="assets/img/blouse-c2.jpg"  class="img-responsive" alt="foto_selecionada">'),n=($('<div id="img_variable_1" class="col-xs-8 col-xs-offset-2"></div>'),$("<div class='owl-carousel owl-theme'></div>"),$('<div id="img_variable_2" class="col-xs-7 col-xs-offset-3"></div>')),o=$("<div class='owl-carousel owl-theme'><div class='item'><img src='assets/img/shoe-b1.jpg' class='img-responsive'></div><div class='item'><img src='assets/img/shoe-b2.jpg' class='img-responsive'></div><div class='item'><img src='assets/img/shoe-be1.jpg' class='img-responsive'></div><div class='tem'><img src='assets/img/shoe-be2.jpg' class='img-responsive'></div><div class='item'><img src='assets/img/shoe-n1.jpg' class='img-responsive'></div><div class='item'><img src='assets/img/shoe-n2.jpg' class='img-responsive'></div><div class='item'><img src='assets/img/shoe-n3.jpg' class='img-responsive'></div><div class='item'><img src='assets/img/shoe-n4.jpg' class='img-responsive'></div></div>"),r=$('<div class="outfit-container__footer"><div class="img-circle"><i class="glyphicon glyphicon-camera"></i></div></div>');return t.append(i),i.append(s),n.append(o),e.append(i),e.append(n),t.append(e),t.append(r),console.log(state.cloth),t},slider1=function(t,e){var i=$("<div class='item'></div>"),s=$('<div class="cont_img"></div>'),n=$('<img src="assets/img/'+t.image+'" class="img-responsive">'),o=$('<div class="cont_text"></div>'),r=$("<h6>"+t.name+"</h6>"),a=$("<p>Precio : "+t.address+"</p>");return i.append(s),i.append(o),s.append(n),o.append(r),o.append(a),i},welcome=function(){console.log(state.cloth);var t=$('<section class="photo-container"></section>'),e=$('<div class="photo-container__cont"></div>'),i=$('<div class="cont_text"><h4>Bienvenida al App de Oechsle.<br>Oechsle es la Tienda por Departamento del Grupo Intercorp. Somos parte de un grupo empresarial comprometido con el desarrollo y bienestar de las familias Peruanas. </h4></div>'),s=($('<img src="http://cdn.modalia.es/images/stories/2015/febrero/hm-chaquetas-ss15/hm-chaquetas-ss15_6.jpg" class="img-responsive" alt="chaqueta">'),$('<div class="photo-container__footer"><div class="img-circle"><i class="glyphicon glyphicon-camera"></i></div></div>'));return e.append(i),t.append(e),t.append(s),t};
=======
"use strict";
var render = function (root) {
    root.empty();
    var section = $("<section class=\"components\"></section>");

    if (state.page == 0) {
        section.append(Header());
        section.append(welcome());
    } else if (state.page == 1) {
        section.append(Header());
        section.append(Outfit());
    } else if (state.page == 2) {}
    root.append(section);
};
var state = {
    page: 0,
    cloth: null,
    clothSelected: null
};

$(function (_) {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBdX8FyCVHBS3WkdCi7KeW-5BFw7KlC3g4",
        authDomain: "base-7937c.firebaseapp.com",
        databaseURL: "https://base-7937c.firebaseio.com",
        projectId: "base-7937c",
        storageBucket: "",
        messagingSenderId: "305091668120"
    };
    firebase.initializeApp(config);
    //
    var database = firebase.database();
    database.ref().on("value", function (snap) {
        //   // $('#display').html(snap.val());
        console.log(snap.val());
        state.cloth = snap.val();
    });
    var root = $("#root");
    render(root);
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});
"use strict";

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function ($, window, document, undefined) {
	/**
  * Creates a carousel.
  * @class The Owl Carousel.
  * @public
  * @param {HTMLElement|jQuery} element - The element to create the carousel for.
  * @param {Object} [options] - The options
  */
	function Owl(element, options) {
		/**
   * Current settings for the carousel.
   * @public
   */
		this.settings = null;

		/**
   * Current options set by the caller including defaults.
   * @public
   */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
   * Plugin element.
   * @public
   */
		this.$element = $(element);

		/**
   * Proxied event handlers.
   * @protected
   */
		this._handlers = {};

		/**
   * References to the running plugins of this carousel.
   * @protected
   */
		this._plugins = {};

		/**
   * Currently suppressed events to prevent them from beeing retriggered.
   * @protected
   */
		this._supress = {};

		/**
   * Absolute current position.
   * @protected
   */
		this._current = null;

		/**
   * Animation speed in milliseconds.
   * @protected
   */
		this._speed = null;

		/**
   * Coordinates of all items in pixel.
   * @todo The name of this member is missleading.
   * @protected
   */
		this._coordinates = [];

		/**
   * Current breakpoint.
   * @todo Real media queries would be nice.
   * @protected
   */
		this._breakpoint = null;

		/**
   * Current width of the plugin element.
   */
		this._width = null;

		/**
   * All real items.
   * @protected
   */
		this._items = [];

		/**
   * All cloned items.
   * @protected
   */
		this._clones = [];

		/**
   * Merge values of all items.
   * @todo Maybe this could be part of a plugin.
   * @protected
   */
		this._mergers = [];

		/**
   * Widths of all items.
   */
		this._widths = [];

		/**
   * Invalidated parts within the update process.
   * @protected
   */
		this._invalidated = {};

		/**
   * Ordered list of workers for the update process.
   * @protected
   */
		this._pipe = [];

		/**
   * Current state information for the drag operation.
   * @todo #261
   * @protected
   */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
   * Current state information and their tags.
   * @type {Object}
   * @protected
   */
		this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		};

		$.each(["onResize", "onThrottledResize"], $.proxy(function (i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function (key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function (priority, worker) {
			this._pipe.push({
				filter: worker.filter,
				run: $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
  * Default options for the carousel.
  * @public
  */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: "swing",

		info: false,

		nestedItemSelector: false,
		itemElement: "div",
		stageElement: "div",

		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	};

	/**
  * Enumeration for width.
  * @public
  * @readonly
  * @enum {String}
  */
	Owl.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	};

	/**
  * Enumeration for types.
  * @public
  * @readonly
  * @enum {String}
  */
	Owl.Type = {
		Event: "event",
		State: "state"
	};

	/**
  * Contains all registered plugins.
  * @public
  */
	Owl.Plugins = {};

	/**
  * List of workers involved in the update process.
  */
	Owl.Workers = [{
		filter: ["width", "settings"],
		run: function () {
			this._width = this.$element.width();
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			this.$stage.children(".cloned").remove();
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (cache) {
			var margin = this.settings.margin || "",
			    grid = !this.settings.autoWidth,
			    rtl = this.settings.rtl,
			    css = {
				width: "auto",
				"margin-left": rtl ? margin : "",
				"margin-right": rtl ? "" : margin
			};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
			    merge = null,
			    iterator = this._items.length,
			    grid = !this.settings.autoWidth,
			    widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var clones = [],
			    items = this._items,
			    settings = this.settings,
			   
			// TODO: Should be computed from number of min width items in stage
			view = Math.max(settings.items * 2, 4),
			    size = Math.ceil(items.length / 2) * 2,
			    repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
			    append = "",
			    prepend = "";

			repeat /= 2;

			while (repeat--) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass("cloned").appendTo(this.$stage);
			$(prepend).addClass("cloned").prependTo(this.$stage);
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var rtl = this.settings.rtl ? 1 : -1,
			    size = this._clones.length + this._items.length,
			    iterator = -1,
			    previous = 0,
			    current = 0,
			    coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var padding = this.settings.stagePadding,
			    coordinates = this._coordinates,
			    css = {
				width: Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
				"padding-left": padding || "",
				"padding-right": padding || ""
			};

			this.$stage.css(css);
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (cache) {
			var iterator = this._coordinates.length,
			    grid = !this.settings.autoWidth,
			    items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: ["items"],
		run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style");
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var rtl = this.settings.rtl ? 1 : -1,
			    padding = this.settings.stagePadding * 2,
			    begin = this.coordinates(this.current()) + padding,
			    end = begin + this.width() * rtl,
			    inner,
			    outer,
			    matches = [],
			    i,
			    n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if (this.op(inner, "<=", begin) && this.op(inner, ">", end) || this.op(outer, "<", begin) && this.op(outer, ">", end)) {
					matches.push(i);
				}
			}

			this.$stage.children(".active").removeClass("active");
			this.$stage.children(":eq(" + matches.join("), :eq(") + ")").addClass("active");

			if (this.settings.center) {
				this.$stage.children(".center").removeClass("center");
				this.$stage.children().eq(this.current()).addClass("center");
			}
		}
	}];

	/**
  * Initializes the carousel.
  * @protected
  */
	Owl.prototype.initialize = function () {
		this.enter("initializing");
		this.trigger("initialize");

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is("pre-loading")) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find("img");
			nestedSelector = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $("<" + this.settings.stageElement + " class=\"" + this.settings.stageClass + "\"/>").wrap("<div class=\"" + this.settings.stageOuterClass + "\"/>");

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(":visible")) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate("width");
		}

		this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave("initializing");
		this.trigger("initialized");
	};

	/**
  * Setups the current settings.
  * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
  * @todo Support for media queries by using `matchMedia` would be nice.
  * @public
  */
	Owl.prototype.setup = function () {
		var viewport = this.viewport(),
		    overwrites = this.options.responsive,
		    match = -1,
		    settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function (breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === "function") {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + match));
			}
		}

		this.trigger("change", { property: { name: "settings", value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate("settings");
		this.trigger("changed", { property: { name: "settings", value: this.settings } });
	};

	/**
  * Updates option logic if necessery.
  * @protected
  */
	Owl.prototype.optionsLogic = function () {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
  * Prepares an item before add.
  * @todo Rename event parameter `content` to `item`.
  * @protected
  * @returns {jQuery|HTMLElement} - The item container.
  */
	Owl.prototype.prepare = function (item) {
		var event = this.trigger("prepare", { content: item });

		if (!event.data) {
			event.data = $("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(item);
		}

		this.trigger("prepared", { content: event.data });

		return event.data;
	};

	/**
  * Updates the view.
  * @public
  */
	Owl.prototype.update = function () {
		var i = 0,
		    n = this._pipe.length,
		    filter = $.proxy(function (p) {
			return this[p];
		}, this._invalidated),
		    cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is("valid") && this.enter("valid");
	};

	/**
  * Gets the width of the view.
  * @public
  * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
  * @returns {Number} - The width of the view in pixel.
  */
	Owl.prototype.width = function (dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
  * Refreshes the carousel primarily for adaptive purposes.
  * @public
  */
	Owl.prototype.refresh = function () {
		this.enter("refreshing");
		this.trigger("refresh");

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave("refreshing");
		this.trigger("refreshed");
	};

	/**
  * Checks window `resize` event.
  * @protected
  */
	Owl.prototype.onThrottledResize = function () {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
  * Checks window `resize` event.
  * @protected
  */
	Owl.prototype.onResize = function () {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(":visible")) {
			return false;
		}

		this.enter("resizing");

		if (this.trigger("resize").isDefaultPrevented()) {
			this.leave("resizing");
			return false;
		}

		this.invalidate("width");

		this.refresh();

		this.leave("resizing");
		this.trigger("resized");
	};

	/**
  * Registers event handlers.
  * @todo Check `msPointerEnabled`
  * @todo #261
  * @protected
  */
	Owl.prototype.registerEventHandlers = function () {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + ".owl.core", $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, "resize", this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on("mousedown.owl.core", $.proxy(this.onDragStart, this));
			this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
				return false;
			});
		}

		if (this.settings.touchDrag) {
			this.$stage.on("touchstart.owl.core", $.proxy(this.onDragStart, this));
			this.$stage.on("touchcancel.owl.core", $.proxy(this.onDragEnd, this));
		}
	};

	/**
  * Handles `touchstart` and `mousedown` events.
  * @todo Horizontal swipe threshold as option
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragStart = function (event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(",");
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
				y: stage.top
			};
		}

		if (this.is("animating")) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop();
			this.invalidate("position");
		}

		this.$element.toggleClass(this.options.grabClass, event.type === "mousedown");

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on("mouseup.owl.core touchend.owl.core", $.proxy(this.onDragEnd, this));

		$(document).one("mousemove.owl.core touchmove.owl.core", $.proxy(function (event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on("mousemove.owl.core touchmove.owl.core", $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is("valid")) {
				return;
			}

			event.preventDefault();

			this.enter("dragging");
			this.trigger("drag");
		}, this));
	};

	/**
  * Handles the `touchmove` and `mousemove` events.
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragMove = function (event) {
		var minimum = null,
		    maximum = null,
		    pull = null,
		    delta = this.difference(this._drag.pointer, this.pointer(event)),
		    stage = this.difference(this._drag.stage.start, delta);

		if (!this.is("dragging")) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
  * Handles the `touchend` and `mouseup` events.
  * @todo #261
  * @todo Threshold for click event
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragEnd = function (event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
		    stage = this._drag.stage.current,
		    direction = delta.x > 0 ^ this.settings.rtl ? "left" : "right";

		$(document).off(".owl.core");

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate("position");
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one("click.owl.core", function () {
					return false;
				});
			}
		}

		if (!this.is("dragging")) {
			return;
		}

		this.leave("dragging");
		this.trigger("dragged");
	};

	/**
  * Gets absolute position of the closest item for a coordinate.
  * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
  * @protected
  * @param {Number} coordinate - The coordinate in pixel.
  * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
  * @return {Number} - The absolute position of the closest item.
  */
	Owl.prototype.closest = function (coordinate, direction) {
		var position = -1,
		    pull = 30,
		    width = this.width(),
		    coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function (index, value) {
				// on a left pull, check on current index
				if (direction === "left" && coordinate > value - pull && coordinate < value + pull) {
					position = index;
					// on a right pull, check on previous index
					// to do so, subtract width from value and set position = index + 1
				} else if (direction === "right" && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, "<", value) && this.op(coordinate, ">", coordinates[index + 1] || value - width)) {
					position = direction === "left" ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, ">", coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, "<", coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
  * Animates the stage.
  * @todo #270
  * @public
  * @param {Number} coordinate - The coordinate in pixels.
  */
	Owl.prototype.animate = function (coordinate) {
		var animate = this.speed() > 0;

		this.is("animating") && this.onTransitionEnd();

		if (animate) {
			this.enter("animating");
			this.trigger("translate");
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: "translate3d(" + coordinate + "px,0px,0px)",
				transition: this.speed() / 1000 + "s"
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + "px"
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + "px"
			});
		}
	};

	/**
  * Checks whether the carousel is in a specific state or not.
  * @param {String} state - The state to check.
  * @returns {Boolean} - The flag which indicates if the carousel is busy.
  */
	Owl.prototype.is = function (state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
  * Sets the absolute position of the current item.
  * @public
  * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
  * @returns {Number} - The absolute position of the current item.
  */
	Owl.prototype.current = function (position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger("change", { property: { name: "position", value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate("position");

			this.trigger("changed", { property: { name: "position", value: this._current } });
		}

		return this._current;
	};

	/**
  * Invalidates the given part of the update routine.
  * @param {String} [part] - The part to invalidate.
  * @returns {Array.<String>} - The invalidated parts.
  */
	Owl.prototype.invalidate = function (part) {
		if ($.type(part) === "string") {
			this._invalidated[part] = true;
			this.is("valid") && this.leave("valid");
		}
		return $.map(this._invalidated, function (v, i) {
			return i;
		});
	};

	/**
  * Resets the absolute position of the current item.
  * @public
  * @param {Number} position - The absolute position of the new item.
  */
	Owl.prototype.reset = function (position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress(["translate", "translated"]);

		this.animate(this.coordinates(position));

		this.release(["translate", "translated"]);
	};

	/**
  * Normalizes an absolute or a relative position of an item.
  * @public
  * @param {Number} position - The absolute or relative position to normalize.
  * @param {Boolean} [relative=false] - Whether the given position is relative or not.
  * @returns {Number} - The normalized position.
  */
	Owl.prototype.normalize = function (position, relative) {
		var n = this._items.length,
		    m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
  * Converts an absolute position of an item into a relative one.
  * @public
  * @param {Number} position - The absolute position to convert.
  * @returns {Number} - The converted position.
  */
	Owl.prototype.relative = function (position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
  * Gets the maximum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
	Owl.prototype.maximum = function (relative) {
		var settings = this.settings,
		    maximum = this._coordinates.length,
		    iterator,
		    reciprocalItemsWidth,
		    elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
  * Gets the minimum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
	Owl.prototype.minimum = function (relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
	Owl.prototype.items = function (position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
	Owl.prototype.mergers = function (position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
  * Gets the absolute positions of clones for an item.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
  */
	Owl.prototype.clones = function (position) {
		var odd = this._clones.length / 2,
		    even = odd + this._items.length,
		    map = function (index) {
			return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
		};

		if (position === undefined) {
			return $.map(this._clones, function (v, i) {
				return map(i);
			});
		}

		return $.map(this._clones, function (v, i) {
			return v === position ? map(i) : null;
		});
	};

	/**
  * Sets the current animation speed.
  * @public
  * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
  * @returns {Number} - The current animation speed in milliseconds.
  */
	Owl.prototype.speed = function (speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
  * Gets the coordinate of an item.
  * @todo The name of this method is missleanding.
  * @public
  * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
  * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
  */
	Owl.prototype.coordinates = function (position) {
		var multiplier = 1,
		    newPosition = position - 1,
		    coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function (coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
  * Calculates the speed for a translation.
  * @protected
  * @param {Number} from - The absolute position of the start item.
  * @param {Number} to - The absolute position of the target item.
  * @param {Number} [factor=undefined] - The time factor in milliseconds.
  * @returns {Number} - The time in milliseconds for the translation.
  */
	Owl.prototype.duration = function (from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
	};

	/**
  * Slides to the specified item.
  * @public
  * @param {Number} position - The position of the item.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.to = function (position, speed) {
		var current = this.current(),
		    revert = null,
		    distance = position - this.relative(current),
		    direction = (distance > 0) - (distance < 0),
		    items = this._items.length,
		    minimum = this.minimum(),
		    maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(":visible")) {
			this.update();
		}
	};

	/**
  * Slides to the next item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.next = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
  * Slides to the previous item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.prev = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
  * Handles the end of an animation.
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onTransitionEnd = function (event) {
		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave("animating");
		this.trigger("translated");
	};

	/**
  * Gets viewport width.
  * @protected
  * @return {Number} - The width in pixel.
  */
	Owl.prototype.viewport = function () {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn("Can not detect viewport width.");
		}
		return width;
	};

	/**
  * Replaces the current content.
  * @public
  * @param {HTMLElement|jQuery|String} content - The new content.
  */
	Owl.prototype.replace = function (content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = content instanceof jQuery ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find("." + this.settings.nestedItemSelector);
		}

		content.filter(function () {
			return this.nodeType === 1;
		}).each($.proxy(function (index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate("items");
	};

	/**
  * Adds an item.
  * @todo Use `item` instead of `content` for the event arguments.
  * @public
  * @param {HTMLElement|jQuery|String} content - The item content to add.
  * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
  */
	Owl.prototype.add = function (content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger("add", { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate("items");

		this.trigger("added", { content: content, position: position });
	};

	/**
  * Removes an item by its position.
  * @todo Use `item` instead of `content` for the event arguments.
  * @public
  * @param {Number} position - The relative position of the item to remove.
  */
	Owl.prototype.remove = function (position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger("remove", { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate("items");

		this.trigger("removed", { content: null, position: position });
	};

	/**
  * Preloads images with auto width.
  * @todo Replace by a more generic approach
  * @protected
  */
	Owl.prototype.preloadAutoWidthImages = function (images) {
		images.each($.proxy(function (i, element) {
			this.enter("pre-loading");
			element = $(element);
			$(new Image()).one("load", $.proxy(function (e) {
				element.attr("src", e.target.src);
				element.css("opacity", 1);
				this.leave("pre-loading");
				!this.is("pre-loading") && !this.is("initializing") && this.refresh();
			}, this)).attr("src", element.attr("src") || element.attr("data-src") || element.attr("data-src-retina"));
		}, this));
	};

	/**
  * Destroys the carousel.
  * @public
  */
	Owl.prototype.destroy = function () {
		this.$element.off(".owl.core");
		this.$stage.off(".owl.core");
		$(document).off(".owl.core");

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, "resize", this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children(".cloned").remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
	};

	/**
  * Operators to calculate right-to-left and left-to-right.
  * @protected
  * @param {Number} [a] - The left side operand.
  * @param {String} [o] - The operator.
  * @param {Number} [b] - The right side operand.
  */
	Owl.prototype.op = function (a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case "<":
				return rtl ? a > b : a < b;
			case ">":
				return rtl ? a < b : a > b;
			case ">=":
				return rtl ? a <= b : a >= b;
			case "<=":
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
  * Attaches to an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The event handler to attach.
  * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
  */
	Owl.prototype.on = function (element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent("on" + event, listener);
		}
	};

	/**
  * Detaches from an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The attached event handler to detach.
  * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
  */
	Owl.prototype.off = function (element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent("on" + event, listener);
		}
	};

	/**
  * Triggers a public event.
  * @todo Remove `status`, `relatedTarget` should be used instead.
  * @protected
  * @param {String} name - The event name.
  * @param {*} [data=null] - The event data.
  * @param {String} [namespace=carousel] - The event namespace.
  * @param {String} [state] - The state which is associated with the event.
  * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
  * @returns {Event} - The event arguments.
  */
	Owl.prototype.trigger = function (name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		},
		    handler = $.camelCase($.grep(["on", name, namespace], function (v) {
			return v;
		}).join("-").toLowerCase()),
		    event = $.Event([name, "owl", namespace || "carousel"].join(".").toLowerCase(), $.extend({ relatedTarget: this }, status, data));

		if (!this._supress[name]) {
			$.each(this._plugins, function (name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === "function") {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
  * Enters a state.
  * @param name - The state name.
  */
	Owl.prototype.enter = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
  * Leaves a state.
  * @param name - The state name.
  */
	Owl.prototype.leave = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
  * Registers an event or state.
  * @public
  * @param {Object} object - The event or state to register.
  */
	Owl.prototype.register = function (object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function (e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf("owl") === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf("owl") > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
  * Suppresses events.
  * @protected
  * @param {Array.<String>} events - The events to suppress.
  */
	Owl.prototype.suppress = function (events) {
		$.each(events, $.proxy(function (index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
  * Releases suppressed events.
  * @protected
  * @param {Array.<String>} events - The events to release.
  */
	Owl.prototype.release = function (events) {
		$.each(events, $.proxy(function (index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
  * Gets unified pointer coordinates from event.
  * @todo #261
  * @protected
  * @param {Event} - The `mousedown` or `touchstart` event.
  * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
  */
	Owl.prototype.pointer = function (event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
  * Determines if the input is a Number or something that can be coerced to a Number
  * @protected
  * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
  * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
  */
	Owl.prototype.isNumeric = function (number) {
		return !isNaN(parseFloat(number));
	};

	/**
  * Gets the difference of two vectors.
  * @todo #261
  * @protected
  * @param {Object} - The first vector.
  * @param {Object} - The second vector.
  * @returns {Object} - The difference.
  */
	Owl.prototype.difference = function (first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
  * The jQuery Plugin for the Owl Carousel
  * @todo Navigation plugin `next` and `prev`
  * @public
  */
	$.fn.owlCarousel = function (option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function () {
			var $this = $(this),
			    data = $this.data("owl.carousel");

			if (!data) {
				data = new Owl(this, typeof option == "object" && option);
				$this.data("owl.carousel", data);

				$.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + ".owl.carousel.core", $.proxy(function (e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([event]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([event]);
						}
					}, data));
				});
			}

			if (typeof option == "string" && option.charAt(0) !== "_") {
				data[option].apply(data, args);
			}
		});
	};

	/**
  * The constructor for the jQuery Plugin
  * @public
  */
	$.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	/**
  * Creates the auto refresh plugin.
  * @class The Auto Refresh Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var AutoRefresh = function (carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Refresh interval.
   * @protected
   * @type {number}
   */
		this._interval = null;

		/**
   * Whether the element is currently visible or not.
   * @protected
   * @type {Boolean}
   */
		this._visible = null;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			"initialized.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
  * Watches the element.
  */
	AutoRefresh.prototype.watch = function () {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(":visible");
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
  * Refreshes the element.
  */
	AutoRefresh.prototype.refresh = function () {
		if (this._core.$element.is(":visible") === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass("owl-hidden", !this._visible);

		this._visible && (this._core.invalidate("width") && this._core.refresh());
	};

	/**
  * Destroys the plugin.
  */
	AutoRefresh.prototype.destroy = function () {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != "function" && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	/**
  * Creates the lazy plugin.
  * @class The Lazy Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var Lazy = function (carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Already loaded items.
   * @protected
   * @type {Array.<jQuery>}
   */
		this._loaded = [];

		/**
   * Event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if (e.property && e.property.name == "position" || e.type == "initialized") {
					var settings = this._core.settings,
					    n = settings.center && Math.ceil(settings.items / 2) || settings.items,
					    i = settings.center && n * -1 || 0,
					    position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
					    clones = this._core.clones().length,
					    load = $.proxy(function (i, v) {
						this.load(v);
					}, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
  * Loads all resources of an item at the specified position.
  * @param {Number} position - The absolute position of the item.
  * @protected
  */
	Lazy.prototype.load = function (position) {
		var $item = this._core.$stage.children().eq(position),
		    $elements = $item && $item.find(".owl-lazy");

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function (index, element) {
			var $element = $(element),
			    image,
			    url = window.devicePixelRatio > 1 && $element.attr("data-src-retina") || $element.attr("data-src");

			this._core.trigger("load", { element: $element, url: url }, "lazy");

			if ($element.is("img")) {
				$element.one("load.owl.lazy", $.proxy(function () {
					$element.css("opacity", 1);
					this._core.trigger("loaded", { element: $element, url: url }, "lazy");
				}, this)).attr("src", url);
			} else {
				image = new Image();
				image.onload = $.proxy(function () {
					$element.css({
						"background-image": "url(\"" + url + "\")",
						opacity: "1"
					});
					this._core.trigger("loaded", { element: $element, url: url }, "lazy");
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Lazy.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != "function" && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	/**
  * Creates the auto height plugin.
  * @class The Auto Height Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var AutoHeight = function (carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			"changed.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == "position") {
					this.update();
				}
			}, this),
			"loaded.owl.lazy": $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: "owl-height"
	};

	/**
  * Updates the view.
  */
	AutoHeight.prototype.update = function () {
		var start = this._core._current,
		    end = start + this._core.settings.items,
		    visible = this._core.$stage.children().toArray().slice(start, end),
		    heights = [],
		    maxheight = 0;

		$.each(visible, function (index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function () {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != "function" && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	/**
  * Creates the video plugin.
  * @class The Video Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var Video = function (carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Cache all video URLs.
   * @protected
   * @type {Object}
   */
		this._videos = {};

		/**
   * Current playing item.
   * @protected
   * @type {jQuery}
   */
		this._playing = null;

		/**
   * All event handlers.
   * @todo The cloned content removale is too late
   * @protected
   * @type {Object}
   */
		this._handlers = {
			"initialized.owl.carousel": $.proxy(function (e) {
				if (e.namespace) {
					this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
				}
			}, this),
			"resize.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			"refreshed.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.is("resizing")) {
					this._core.$stage.find(".cloned .owl-video-frame").remove();
				}
			}, this),
			"changed.owl.carousel": $.proxy(function (e) {
				if (e.namespace && e.property.name === "position" && this._playing) {
					this.stop();
				}
			}, this),
			"prepared.owl.carousel": $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find(".owl-video");

				if ($element.length) {
					$element.css("display", "none");
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on("click.owl.video", ".owl-video-play-icon", $.proxy(function (e) {
			this.play(e);
		}, this));
	};

	/**
  * Default options.
  * @public
  */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
  * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {jQuery} item - The item containing the video.
  */
	Video.prototype.fetch = function (target, item) {
		var type = (function () {
			if (target.attr("data-vimeo-id")) {
				return "vimeo";
			} else if (target.attr("data-vzaar-id")) {
				return "vzaar";
			} else {
				return "youtube";
			}
		})(),
		    id = target.attr("data-vimeo-id") || target.attr("data-youtube-id") || target.attr("data-vzaar-id"),
		    width = target.attr("data-width") || this._core.settings.videoWidth,
		    height = target.attr("data-height") || this._core.settings.videoHeight,
		    url = target.attr("href");

		if (url) {
			/*
   		Parses the id's out of the following urls (and probably more):
   		https://www.youtube.com/watch?v=:id
   		https://youtu.be/:id
   		https://vimeo.com/:id
   		https://vimeo.com/channels/:channel/:id
   		https://vimeo.com/groups/:group/videos/:id
   		https://app.vzaar.com/videos/:id
   				Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
   */

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf("youtu") > -1) {
				type = "youtube";
			} else if (id[3].indexOf("vimeo") > -1) {
				type = "vimeo";
			} else if (id[3].indexOf("vzaar") > -1) {
				type = "vzaar";
			} else {
				throw new Error("Video URL not supported.");
			}
			id = id[6];
		} else {
			throw new Error("Missing video URL.");
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr("data-video", url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
  * Creates video thumbnail.
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {Object} info - The video info object.
  * @see `fetch`
  */
	Video.prototype.thumbnail = function (target, video) {
		var tnLink,
		    icon,
		    path,
		    dimensions = video.width && video.height ? "style=\"width:" + video.width + "px;height:" + video.height + "px;\"" : "",
		    customTn = target.find("img"),
		    srcType = "src",
		    lazyClass = "",
		    settings = this._core.settings,
		    create = function (path) {
			icon = "<div class=\"owl-video-play-icon\"></div>";

			if (settings.lazyLoad) {
				tnLink = "<div class=\"owl-video-tn " + lazyClass + "\" " + srcType + "=\"" + path + "\"></div>";
			} else {
				tnLink = "<div class=\"owl-video-tn\" style=\"opacity:1;background-image:url(" + path + ")\"></div>";
			}
			target.after(tnLink);
			target.after(icon);
		};

		// wrap video content into owl-video-wrapper div
		target.wrap("<div class=\"owl-video-wrapper\"" + dimensions + "></div>");

		if (this._core.settings.lazyLoad) {
			srcType = "data-src";
			lazyClass = "owl-lazy";
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === "youtube") {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === "vimeo") {
			$.ajax({
				type: "GET",
				url: "//vimeo.com/api/v2/video/" + video.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function (data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === "vzaar") {
			$.ajax({
				type: "GET",
				url: "//vzaar.com/api/videos/" + video.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function (data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
  * Stops the current video.
  * @public
  */
	Video.prototype.stop = function () {
		this._core.trigger("stop", null, "video");
		this._playing.find(".owl-video-frame").remove();
		this._playing.removeClass("owl-video-playing");
		this._playing = null;
		this._core.leave("playing");
		this._core.trigger("stopped", null, "video");
	};

	/**
  * Starts the current video.
  * @public
  * @param {Event} event - The event arguments.
  */
	Video.prototype.play = function (event) {
		var target = $(event.target),
		    item = target.closest("." + this._core.settings.itemClass),
		    video = this._videos[item.attr("data-video")],
		    width = video.width || "100%",
		    height = video.height || this._core.$stage.height(),
		    html;

		if (this._playing) {
			return;
		}

		this._core.enter("playing");
		this._core.trigger("play", null, "video");

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === "youtube") {
			html = "<iframe width=\"" + width + "\" height=\"" + height + "\" src=\"//www.youtube.com/embed/" + video.id + "?autoplay=1&rel=0&v=" + video.id + "\" frameborder=\"0\" allowfullscreen></iframe>";
		} else if (video.type === "vimeo") {
			html = "<iframe src=\"//player.vimeo.com/video/" + video.id + "?autoplay=1\" width=\"" + width + "\" height=\"" + height + "\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
		} else if (video.type === "vzaar") {
			html = "<iframe frameborder=\"0\"" + "height=\"" + height + "\"" + "width=\"" + width + "\" allowfullscreen mozallowfullscreen webkitAllowFullScreen " + "src=\"//view.vzaar.com/" + video.id + "/player?autoplay=true\"></iframe>";
		}

		$("<div class=\"owl-video-frame\">" + html + "</div>").insertAfter(item.find(".owl-video"));

		this._playing = item.addClass("owl-video-playing");
	};

	/**
  * Checks whether an video is currently in full screen mode or not.
  * @todo Bad style because looks like a readonly method but changes members.
  * @protected
  * @returns {Boolean}
  */
	Video.prototype.isInFullScreen = function () {
		var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

		return element && $(element).parent().hasClass("owl-video-frame");
	};

	/**
  * Destroys the plugin.
  */
	Video.prototype.destroy = function () {
		var handler, property;

		this._core.$element.off("click.owl.video");

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != "function" && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	/**
  * Creates the animate plugin.
  * @class The Navigation Plugin
  * @param {Owl} scope - The Owl Carousel
  */
	var Animate = function (scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			"change.owl.carousel": $.proxy(function (e) {
				if (e.namespace && e.property.name == "position") {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $.proxy(function (e) {
				if (e.namespace) {
					this.swapping = e.type == "translated";
				}
			}, this),
			"translate.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
  * Default options.
  * @public
  */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
  * Toggles the animation classes whenever an translations starts.
  * @protected
  * @returns {Boolean|undefined}
  */
	Animate.prototype.swap = function () {
		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
		    clear = $.proxy(this.clear, this),
		    previous = this.core.$stage.children().eq(this.previous),
		    next = this.core.$stage.children().eq(this.next),
		    incoming = this.core.settings.animateIn,
		    outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear).css({ left: left + "px" }).addClass("animated owl-animated-out").addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear).addClass("animated owl-animated-in").addClass(incoming);
		}
	};

	Animate.prototype.clear = function (e) {
		$(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Animate.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != "function" && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	/**
  * Creates the autoplay plugin.
  * @class The Autoplay Plugin
  * @param {Owl} scope - The Owl Carousel
  */
	var Autoplay = function (carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * The autoplay timeout.
   * @type {Timeout}
   */
		this._timeout = null;

		/**
   * Indicates whenever the autoplay is paused.
   * @type {Boolean}
   */
		this._paused = false;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			"changed.owl.carousel": $.proxy(function (e) {
				if (e.namespace && e.property.name === "settings") {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === "position") {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			"initialized.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			"play.owl.autoplay": $.proxy(function (e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			"stop.owl.autoplay": $.proxy(function (e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			"mouseover.owl.autoplay": $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
					this.pause();
				}
			}, this),
			"mouseleave.owl.autoplay": $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
					this.play();
				}
			}, this),
			"touchstart.owl.core": $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
					this.pause();
				}
			}, this),
			"touchend.owl.core": $.proxy(function () {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
  * Default options.
  * @public
  */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
  * Starts the autoplay.
  * @public
  * @param {Number} [timeout] - The interval before the next animation starts.
  * @param {Number} [speed] - The animation speed for the animations.
  */
	Autoplay.prototype.play = function (timeout, speed) {
		this._paused = false;

		if (this._core.is("rotating")) {
			return;
		}

		this._core.enter("rotating");

		this._setAutoPlayInterval();
	};

	/**
  * Gets a new timeout
  * @private
  * @param {Number} [timeout] - The interval before the next animation starts.
  * @param {Number} [speed] - The animation speed for the animations.
  * @return {Timeout}
  */
	Autoplay.prototype._getNextTimeout = function (timeout, speed) {
		if (this._timeout) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function () {
			if (this._paused || this._core.is("busy") || this._core.is("interacting") || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
  * Sets autoplay in motion.
  * @private
  */
	Autoplay.prototype._setAutoPlayInterval = function () {
		this._timeout = this._getNextTimeout();
	};

	/**
  * Stops the autoplay.
  * @public
  */
	Autoplay.prototype.stop = function () {
		if (!this._core.is("rotating")) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave("rotating");
	};

	/**
  * Stops the autoplay.
  * @public
  */
	Autoplay.prototype.pause = function () {
		if (!this._core.is("rotating")) {
			return;
		}

		this._paused = true;
	};

	/**
  * Destroys the plugin.
  */
	Autoplay.prototype.destroy = function () {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != "function" && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	"use strict";

	/**
  * Creates the navigation plugin.
  * @class The Navigation Plugin
  * @param {Owl} carousel - The Owl Carousel.
  */
	var Navigation = function (carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Indicates whether the plugin is initialized or not.
   * @protected
   * @type {Boolean}
   */
		this._initialized = false;

		/**
   * The current paging indexes.
   * @protected
   * @type {Array}
   */
		this._pages = [];

		/**
   * All DOM elements of the user interface.
   * @protected
   * @type {Object}
   */
		this._controls = {};

		/**
   * Markup for an indicator.
   * @protected
   * @type {Array.<String>}
   */
		this._templates = [];

		/**
   * The carousel element.
   * @type {jQuery}
   */
		this.$element = this._core.$element;

		/**
   * Overridden methods of the carousel.
   * @protected
   * @type {Object}
   */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			"prepared.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push("<div class=\"" + this._core.settings.dotClass + "\">" + $(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
				}
			}, this),
			"added.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			"remove.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			"changed.owl.carousel": $.proxy(function (e) {
				if (e.namespace && e.property.name == "position") {
					this.draw();
				}
			}, this),
			"initialized.owl.carousel": $.proxy(function (e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger("initialize", null, "navigation");
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger("initialized", null, "navigation");
				}
			}, this),
			"refreshed.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._initialized) {
					this._core.trigger("refresh", null, "navigation");
					this.update();
					this.draw();
					this._core.trigger("refreshed", null, "navigation");
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  * @todo Rename `slideBy` to `navBy`
  */
	Navigation.Defaults = {
		nav: false,
		navText: ["prev", "next"],
		navSpeed: false,
		navElement: "div",
		navContainer: false,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
  * Initializes the layout of the plugin and extends the carousel.
  * @protected
  */
	Navigation.prototype.initialize = function () {
		var override,
		    settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $("<div>").addClass(settings.navContainerClass).appendTo(this.$element)).addClass("disabled");

		this._controls.$previous = $("<" + settings.navElement + ">").addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on("click", $.proxy(function (e) {
			this.prev(settings.navSpeed);
		}, this));
		this._controls.$next = $("<" + settings.navElement + ">").addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on("click", $.proxy(function (e) {
			this.next(settings.navSpeed);
		}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [$("<div>").addClass(settings.dotClass).append($("<span>")).prop("outerHTML")];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $("<div>").addClass(settings.dotsClass).appendTo(this.$element)).addClass("disabled");

		this._controls.$absolute.on("click", "div", $.proxy(function (e) {
			var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
  * Destroys the plugin.
  * @protected
  */
	Navigation.prototype.destroy = function () {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != "function" && (this[property] = null);
		}
	};

	/**
  * Updates the internal state.
  * @protected
  */
	Navigation.prototype.update = function () {
		var i,
		    j,
		    k,
		    lower = this._core.clones().length / 2,
		    upper = lower + this._core.items().length,
		    maximum = this._core.maximum(true),
		    settings = this._core.settings,
		    size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== "page") {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == "page") {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
  * Draws the user interface.
  * @todo The option `dotsData` wont work.
  * @protected
  */
	Navigation.prototype.draw = function () {
		var difference,
		    settings = this._core.settings,
		    disabled = this._core.items().length <= settings.items,
		    index = this._core.relative(this._core.current()),
		    loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass("disabled", !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass("disabled", !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass("disabled", !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass("disabled", !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(""));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find(".active").removeClass("active");
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass("active");
		}
	};

	/**
  * Extends event data.
  * @protected
  * @param {Event} event - The event object which gets thrown.
  */
	Navigation.prototype.onTrigger = function (event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
  * Gets the current page position of the carousel.
  * @protected
  * @returns {Number}
  */
	Navigation.prototype.current = function () {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function (page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
  * Gets the current succesor/predecessor position.
  * @protected
  * @returns {Number}
  */
	Navigation.prototype.getPosition = function (successor) {
		var position,
		    length,
		    settings = this._core.settings;

		if (settings.slideBy == "page") {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[(position % length + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
  * Slides to the next item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
	Navigation.prototype.next = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
  * Slides to the previous item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
	Navigation.prototype.prev = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
  * Slides to the specified item or page.
  * @public
  * @param {Number} position - The position of the item or page.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
  */
	Navigation.prototype.to = function (position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	"use strict";

	/**
  * Creates the hash plugin.
  * @class The Hash Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var Hash = function (carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Hash index for the items.
   * @protected
   * @type {Object}
   */
		this._hashes = {};

		/**
   * The carousel element.
   * @type {jQuery}
   */
		this.$element = this._core.$element;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			"initialized.owl.carousel": $.proxy(function (e) {
				if (e.namespace && this._core.settings.startPosition === "URLHash") {
					$(window).trigger("hashchange.owl.navigation");
				}
			}, this),
			"prepared.owl.carousel": $.proxy(function (e) {
				if (e.namespace) {
					var hash = $(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			"changed.owl.carousel": $.proxy(function (e) {
				if (e.namespace && e.property.name === "position") {
					var current = this._core.items(this._core.relative(this._core.current())),
					    hash = $.map(this._hashes, function (item, hash) {
						return item === current ? hash : null;
					}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on("hashchange.owl.navigation", $.proxy(function (e) {
			var hash = window.location.hash.substring(1),
			    items = this._core.$stage.children(),
			    position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
  * Default options.
  * @public
  */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Hash.prototype.destroy = function () {
		var handler, property;

		$(window).off("hashchange.owl.navigation");

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != "function" && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	var style = $("<support>").get(0).style,
	    prefixes = "Webkit Moz O ms".split(" "),
	    events = {
		transition: {
			end: {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd",
				transition: "transitionend"
			}
		},
		animation: {
			end: {
				WebkitAnimation: "webkitAnimationEnd",
				MozAnimation: "animationend",
				OAnimation: "oAnimationEnd",
				animation: "animationend"
			}
		}
	},
	    tests = {
		csstransforms: function () {
			return !!test("transform");
		},
		csstransforms3d: function () {
			return !!test("perspective");
		},
		csstransitions: function () {
			return !!test("transition");
		},
		cssanimations: function () {
			return !!test("animation");
		}
	};

	function test(property, prefixed) {
		var result = false,
		    upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + " " + prefixes.join(upper + " ") + upper).split(" "), function (i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed("transition"));
		$.support.transition.end = events.transition.end[$.support.transition];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed("animation"));
		$.support.animation.end = events.animation.end[$.support.animation];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed("transform"));
		$.support.transform3d = tests.csstransforms3d();
	}
})(window.Zepto || window.jQuery, window, document);
"use strict";

var Mixed = function () {
	var clothContainer = $("<section class='cloth-container'></section>");

	var principalCloth = $("<div class='cloth-container__princNews'>Aquí va la ropa</div>");


	clothContainer.append(principalCloth);


	return clothContainer;
};
"use strict";

var Footer = function () {
	var footerContainer = $("<footer class='footer-container'></footer>");


	var icon = $("<div class='footer-container__icon'>Aquí va el footer</div>");



	footerContainer.append(icon);

	return footerContainer;
};
"use strict";

var Header = function () {
	var headerContainer = $("<header class='header-container'></header>");
	var divnavbar = $("<nav class=\"navbar navbar-default\"><div class=\"container-fluid\"></div></nav>");
	var div_header = $("<div class=\"navbar-header\">" + "<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">" + "<span class=\"sr-only\">Toggle navigation</span>" + "<span class=\"icon-bar\"></span>" + "<span class=\"icon-bar\"></span>" + "<span class=\"icon-bar\"></span>" + "</button>" + "<a class=\"navbar-brand center\" href=\"#\"><div class=\"img-size\"><img src=\"assets/img/logo.png\" class=\"img-responsive\" alt=\"logo\"></div></a>" + "<a class=\"navbar-brand right\" href=\"#\"><i class=\"glyphicon glyphicon-shopping-cart\"></i></a>" + "</div>");
	var div_collapse = $("<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">" + "<ul class=\"nav navbar-nav\">" + "<li class=\"active\"><a href=\"#\">Inicio <span class=\"sr-only\">(current)</span></a></li>" + "<li><a href=\"#\">Mis compras </a></li>" + "<li><a href=\"#\">Mis citas </a></li>" + "</ul>" + "</div>");

	headerContainer.append(divnavbar);
	divnavbar.append(div_header);
	divnavbar.append(div_collapse);

	return headerContainer;
};
"use strict";

var Outfit = function () {
                    var contOutfit = $("<section class=\"contOutfit\"></section>");
                    var divSelect = $("<div id=\"img_fixed size_img\"></div>");
                    var imgSelect = $("<img src=\"assets/img/blouse-c2.jpg\" alt=\"foto_selecionada\">");
                    var divOptions_1 = $("<div id=\"img_variable_1 size_img_carousel\" class=\"img-responsive\"></div>");
                    var secCarousel_1 = $("<div class='owl-carousel owl-theme'>" + "<div class='item'><img src='assets/img/jean-1.jpg' class='img-responsive'></div>" + "<div class='item'><img src='assets/img/jean-2.jpg' class='img-responsive'></div>" + "<div class='item'><img src='assets/img/pants-b1.jpg'></div>" + "<div class='tem'><img src='assets/img/pants-b2.jpg'></div>" + "<div class='item'><img src='assets/img/pants-be1.jpg'></div>" + "<div class='item'><img src='assets/img/pants-be2.jpg'></div>" + "<div class='item'><img src='assets/img/pants-n1.jpg'></div>" + "<div class='item'><img src='assets/img/pants-n2.jpg'></div>" + "</div>");
                    var divOptions_2 = $("<div id=\"img_variable_2 size_img_carousel\"></div>");
                    var secCarousel_2 = $("<div class='owl-carousel owl-theme'>" + "<div class='item'><img src='assets/img/shoe-b1.jpg'></div>" + "<div class='item'><img src='assets/img/shoe-b2.jpg'></div>" + "<div class='item'><img src='assets/img/shoe-be1.jpg'></div>" + "<div class='tem'><img src='assets/img/shoe-be2.jpg'></div>" + "<div class='item'><img src='assets/img/shoe-n1.jpg'></div>" + "<div class='item'><img src='assets/img/shoe-n2.jpg'></div>" + "<div class='item'><img src='assets/img/shoe-n3.jpg'></div>" + "<div class='item'><img src='assets/img/shoe-n4.jpg'></div>" + "</div>");
                    var footerOutfit = $("<div class=\"photo-container__footer\">" + "<div class=\"img-circle\"><i class=\"glyphicon glyphicon-camera\"></i></div>" + "</div>");

                    contOutfit.append(divSelect);
                    divSelect.append(imgSelect);
                    divOptions_1.append(secCarousel_1);
                    divOptions_2.append(secCarousel_2);
                    contOutfit.append(divSelect);
                    contOutfit.append(divOptions_1);
                    contOutfit.append(divOptions_2);
                    contOutfit.append(footerOutfit);
                    return contOutfit;
};
"use strict";

var welcome = function () {
	var photoContainer = $("<section class=\"photo-container\"></section>");
	var photoCont = $("<div class=\"photo-container__cont\"></div>");
	var divMsj = $("<div class=\"cont_text\"><h4>Bienvenida al App de Oechsle.<br>Oechsle es la Tienda por Departamento del Grupo Intercorp. Somos parte de un grupo empresarial comprometido con el desarrollo y bienestar de las familias Peruanas. </h4></div>");
	var inputImagen = $("<input id=\"archivo\" type=\"text\" placeholder=\"tipo de prenda\" name=\"\" value=\"\">");

	var imgPhoto = $("<img src=\"http://cdn.modalia.es/images/stories/2015/febrero/hm-chaquetas-ss15/hm-chaquetas-ss15_6.jpg\" class=\"img-responsive\" alt=\"chaqueta\">");
	var photoFooter = $("<div class=\"photo-container__footer\">" + "<div  class=\"img-circle\"><i id=\"seleccionar\" class=\"glyphicon glyphicon-camera\"></i></div>" + "</div>");
	photoCont.append(divMsj);
	photoContainer.append(inputImagen);
	photoContainer.append(photoCont);
	photoContainer.append(photoFooter);
	photoFooter.on("click", function () {
		var prenda = $("#archivo").val();
		console.log(prenda);

		$.each(state.cloth.clothes, function (i, value) {
			// alert("hola");
			// console.log(state.cloth.clothes[1].image);
			console.log(value.image);
			if (value.image == prenda) {
				console.log(value);
				alert("color:" + value.color + " compatibles" + value.combinations);
				// update();s
			}
		});
	});

	return photoContainer;
};
>>>>>>> origin/api
