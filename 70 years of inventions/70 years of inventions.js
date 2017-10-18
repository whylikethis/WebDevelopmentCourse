(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 960,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/70 years of inventions_atlas_.png", id:"70 years of inventions_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"70 years of inventions_atlas_", frames: [[3278,400,50,49],[3278,0,333,285],[0,5874,53,55],[3670,0,53,52],[0,5795,181,77],[3725,0,48,48],[3613,0,55,54],[1753,4636,49,51],[3278,287,56,56],[110,5874,46,47],[0,5931,52,53],[293,5795,47,46],[1698,4636,53,53],[3391,287,50,49],[3278,345,53,53],[1639,4695,54,53],[0,5986,47,47],[55,5874,53,52],[3278,451,46,46],[238,5795,53,52],[0,0,1637,1157],[0,1159,1637,1157],[1639,0,1637,1157],[0,2318,1637,1157],[1639,1159,1637,1157],[0,3477,1637,1157],[1639,2318,1637,1157],[0,4636,1637,1157],[1639,3477,1637,1157],[1639,4805,46,47],[3336,287,53,53],[1639,4750,51,53],[1639,4636,57,57],[3613,111,49,50],[183,5795,53,55],[1804,4636,46,47],[3613,56,53,53]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Nobel2 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Asset6100x = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Exit = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.eyeMusicG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.grayPattern3 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Insulinpump = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.InsulinpumpG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Laserkeyboard = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.LaserkeyboardG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.machtEroy = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.machtEroyG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.namer = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.namerG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Nobel1 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Nobel1G = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Nobel2G = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.panIdemifyTATP = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.panIdemifyTATPG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.SmallestCam = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.SmallestCamG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.starBlue00 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.starBlue10 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.starBlue40 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.starBlue50 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.starBlue60 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.starBlue70 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.starBlue80 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.starBlue90 = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.starBlue = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.syringe = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.syringeG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.watermelon = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.watermelonG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Waze = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.WazeG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.wirelesscharging = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.wirelesschargingG = function() {
	this.spriteSheet = ss["70 years of inventions_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib._90s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA3QgKgDgHgEIAAgcIACAAIAGAEIAJAEIAKAEQAGACAHAAQAGAAAFgCQAGgDAAgFQAAgDgDgCQgCgCgHgCIgJgCIgKgDQgNgEgGgGQgHgHAAgNQAAgIADgGQAEgHAGgFQAHgFAJgDQAKgCAKAAQAMAAAJACQAKACAHADIAAAcIgDAAIgGgEIgHgEIgKgDQgFgBgGAAQgFAAgFADQgFACAAAEQAAAEACACQADACAGACIAKACIALADQAMAEAGAFQAGAIAAAMQAAAIgDAHQgEAHgGAEQgHAGgKACQgJADgMAAQgMAAgLgCg");
	this.shape.setTransform(15.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAcIgFg3IAdAAIgGA3g");
	this.shape_1.setTransform(7.5,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBGQgLgEgGgKQgIgKgCgOQgDgOgBgSQABgSADgNQACgOAIgKQAHgKAKgEQALgFANAAQAPAAALAFQALAFAGAKQAHAJADAOQACAOABARQAAASgDAPQgEAOgGAJQgHAKgKAEQgLAFgPAAQgNAAgLgFgAgOgkQgEALAAAZQAAAaAEALQAFALAJAAQAKAAAEgLQAFgLAAgaQAAgZgFgLQgEgLgKAAQgJAAgFALg");
	this.shape_2.setTransform(-1.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggBKIgKgBIAAgdIADAAIAHADQAFACAJAAQAHAAAHgCQAFgCAFgEQAEgFAEgGQADgHABgJQgIAFgGACQgFADgKAAQgHAAgHgCQgHgCgGgEQgHgGgFgJQgEgIAAgOQAAgMAEgJQAEgKAHgHQAHgHAKgEQAKgEAMAAQAMAAAJAEQAKADAHAHQAJAJAEANQAEANAAASQAAARgEAPQgFAQgJALQgJALgOAGQgOAGgSAAIgOgBgAgGgwIgGAEQgCADgCAGQgCAFAAAHQAAAHACAEQACAFADADQADACAEABIAHABIAJgBIAHgCIAAgDIAAgGQAAgMgCgIQgCgHgEgFIgFgEIgGgBIgGABg");
	this.shape_3.setTransform(-14.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-14,45.5,28.2);


(lib._80s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA3QgKgDgHgEIAAgcIACAAIAGAEIAJAEIAKAEQAGACAHAAQAGAAAFgCQAGgDAAgFQAAgDgDgCQgCgCgHgCIgJgCIgKgDQgNgEgGgGQgHgHAAgNQAAgIADgGQAEgHAGgFQAHgFAJgDQAKgCAKAAQAMAAAJACQAKACAHADIAAAcIgDAAIgGgEIgHgEIgKgDQgFgBgGAAQgFAAgFADQgFACAAAEQAAAEACACQADACAGACIAKACIALADQAMAEAGAFQAGAIAAAMQAAAIgDAHQgEAHgGAEQgHAGgKACQgJADgMAAQgMAAgLgCg");
	this.shape.setTransform(15.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAcIgFg3IAdAAIgGA3g");
	this.shape_1.setTransform(7.5,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBGQgLgEgGgKQgIgKgCgOQgDgOgBgSQABgSADgNQACgOAIgKQAHgKAKgEQALgFANAAQAPAAALAFQALAFAGAKQAHAJADAOQACAOABARQAAASgDAPQgEAOgGAJQgHAKgKAEQgLAFgPAAQgNAAgLgFgAgOgkQgEALAAAZQAAAaAEALQAFALAJAAQAKAAAEgLQAFgLAAgaQAAgZgFgLQgEgLgKAAQgJAAgFALg");
	this.shape_2.setTransform(-1.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYBIQgLgDgIgGQgGgGgEgIQgDgIAAgJQAAgMAHgIQAHgIANgEIAAAAQgNgHgFgIQgFgKAAgKQAAgIADgIQAEgGAHgGQAHgFAKgDQAKgEALAAQAOAAAKADQAJADAHAEQAGAFAEAIQADAGAAAIQABALgHAHQgFAJgNAFIAAABQAOAFAIAJQAGAJAAANQAAAKgEAIQgDAIgIAGQgHAGgLADQgLAEgNgBQgNABgLgEgAgRAQQgDAGAAAGQAAAKAGAHQAGAFAJAAIAHgBIAGgCQADgDACgDQACgDAAgFQAAgHgDgEQgDgDgKgGIgGgDIgJgDQgEADgDAGgAgLguQgFAEAAAGQAAAGADAEQADADAGADIAFADIAKADIAGgJQABgFAAgFQAAgIgFgEQgFgFgIAAQgGAAgFAEg");
	this.shape_3.setTransform(-14.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-14,45.5,28.2);


(lib._70s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA3QgKgDgHgEIAAgcIACAAIAGAEIAJAEIAKAEQAGACAHAAQAGAAAFgCQAGgDAAgFQAAgDgDgCQgCgCgHgCIgJgCIgKgDQgNgEgGgGQgHgHAAgNQAAgIADgGQAEgHAGgFQAHgFAJgDQAKgCAKAAQAMAAAJACQAKACAHADIAAAcIgDAAIgGgEIgHgEIgKgDQgFgBgGAAQgFAAgFADQgFACAAAEQAAAEACACQADACAGACIAKACIALADQAMAEAGAFQAGAIAAAMQAAAIgDAHQgEAHgGAEQgHAGgKACQgJADgMAAQgMAAgLgCg");
	this.shape.setTransform(15.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAcIgFg3IAdAAIgGA3g");
	this.shape_1.setTransform(7.5,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBGQgLgEgGgKQgIgKgCgOQgDgOgBgSQABgSADgNQACgOAIgKQAHgKAKgEQALgFANAAQAPAAALAFQALAFAGAKQAHAJADAOQACAOABARQAAASgDAPQgEAOgGAJQgHAKgKAEQgLAFgPAAQgNAAgLgFgAgOgkQgEALAAAZQAAAaAEALQAFALAJAAQAKAAAEgLQAFgLAAgaQAAgZgFgLQgEgLgKAAQgJAAgFALg");
	this.shape_2.setTransform(-1.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwBIIA/h0IhDAAIAAgbIBpAAIAAAdIg8Byg");
	this.shape_3.setTransform(-14.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-14,45.5,28.2);


(lib._60s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA3QgKgDgHgEIAAgcIACAAIAGAEIAJAEIAKAEQAGACAHAAQAGAAAFgCQAGgDAAgFQAAgDgDgCQgCgCgHgCIgJgCIgKgDQgNgEgGgGQgHgHAAgNQAAgIADgGQAEgHAGgFQAHgFAJgDQAKgCAKAAQAMAAAJACQAKACAHADIAAAcIgDAAIgGgEIgHgEIgKgDQgFgBgGAAQgFAAgFADQgFACAAAEQAAAEACACQADACAGACIAKACIALADQAMAEAGAFQAGAIAAAMQAAAIgDAHQgEAHgGAEQgHAGgKACQgJADgMAAQgMAAgLgCg");
	this.shape.setTransform(15.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAcIgFg3IAdAAIgGA3g");
	this.shape_1.setTransform(7.5,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBGQgLgEgGgKQgIgKgCgOQgDgOgBgSQABgSADgNQACgOAIgKQAHgKAKgEQALgFANAAQAPAAALAFQALAFAGAKQAHAJADAOQACAOABARQAAASgDAPQgEAOgGAJQgHAKgKAEQgLAFgPAAQgNAAgLgFgAgOgkQgEALAAAZQAAAaAEALQAFALAJAAQAKAAAEgLQAFgLAAgaQAAgZgFgLQgEgLgKAAQgJAAgFALg");
	this.shape_2.setTransform(-1.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUBIQgKgFgHgGQgIgJgFgNQgEgOAAgSQAAgRAEgPQAFgPAIgLQAJgLAPgGQANgGATAAIAOABIAKACIAAAcIgDAAIgIgDQgGgCgHAAQgRABgIAIQgJAJgCARQAHgFAHgCQAFgDAKAAQAHAAAIACQAGACAGAEQAIAGAEAJQAEAIAAAOQAAAXgPAQQgOAOgZAAQgLAAgKgDgAgKABIgHADIAAADIAAAGQAAAMACAIQACAHADAFQACADAEABQADABACAAIAGgBQADgBADgDIAEgIQABgEABgJQgBgHgBgFQgCgEgDgDQgDgDgFgBIgGAAIgIAAg");
	this.shape_3.setTransform(-14.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-14,45.5,28.2);


(lib._50s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA3QgKgDgHgEIAAgcIACAAIAGAEIAJAEIAKAEQAGACAHAAQAGAAAFgCQAGgDAAgFQAAgDgDgCQgCgCgHgCIgJgCIgKgDQgNgEgGgGQgHgHAAgNQAAgIADgGQAEgHAGgFQAHgFAJgDQAKgCAKAAQAMAAAJACQAKACAHADIAAAcIgDAAIgGgEIgHgEIgKgDQgFgBgGAAQgFAAgFADQgFACAAAEQAAAEACACQADACAGACIAKACIALADQAMAEAGAFQAGAIAAAMQAAAIgDAHQgEAHgGAEQgHAGgKACQgJADgMAAQgMAAgLgCg");
	this.shape.setTransform(15.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAcIgFg3IAdAAIgGA3g");
	this.shape_1.setTransform(7.5,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBGQgLgEgGgKQgIgKgCgOQgDgOgBgSQABgSADgNQACgOAIgKQAHgKAKgEQALgFANAAQAPAAALAFQALAFAGAKQAHAJADAOQACAOABARQAAASgDAPQgEAOgGAJQgHAKgKAEQgLAFgPAAQgNAAgLgFgAgOgkQgEALAAAZQAAAaAEALQAFALAJAAQAKAAAEgLQAFgLAAgaQAAgZgFgLQgEgLgKAAQgJAAgFALg");
	this.shape_2.setTransform(-1.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggBHQgMgDgIgDIAAggIADAAIAHAEIAJAEIAKADQAFACAHAAIALgCQAGgBAEgEIAEgHQACgDAAgGQAAgFgCgEQgCgEgDgCQgGgDgFgBIgMgBQgIAAgHABIgNADIgEAAIAAhQIBfAAIAAAcIg8AAIAAAYIAHAAIAEAAQAKAAAKACQAJACAHAEQAHAFAFAIQAFAJAAANQAAALgEAKQgEAJgHAHQgJAHgJAEQgMAEgNAAQgQAAgLgDg");
	this.shape_3.setTransform(-14.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-14,45.5,28.2);


(lib._40s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA3QgKgDgHgEIAAgcIACAAIAGAEIAJAEIAKAEQAGACAHAAQAGAAAFgCQAGgDAAgFQAAgDgDgCQgCgCgHgCIgJgCIgKgDQgNgEgGgGQgHgHAAgNQAAgIADgGQAEgHAGgFQAHgFAJgDQAKgCAKAAQAMAAAJACQAKACAHADIAAAcIgDAAIgGgEIgHgEIgKgDQgFgBgGAAQgFAAgFADQgFACAAAEQAAAEACACQADACAGACIAKACIALADQAMAEAGAFQAGAIAAAMQAAAIgDAHQgEAHgGAEQgHAGgKACQgJADgMAAQgMAAgLgCg");
	this.shape.setTransform(15.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAcIgFg3IAdAAIgGA3g");
	this.shape_1.setTransform(7.5,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBGQgLgEgGgKQgIgKgCgOQgDgOgBgSQABgSADgNQACgOAIgKQAHgKAKgEQALgFANAAQAPAAALAFQALAFAGAKQAHAJADAOQACAOABARQAAASgDAPQgEAOgGAJQgHAKgKAEQgLAFgPAAQgNAAgLgFgAgOgkQgEALAAAZQAAAaAEALQAFALAJAAQAKAAAEgLQAFgLAAgaQAAgZgFgLQgEgLgKAAQgJAAgFALg");
	this.shape_2.setTransform(-1.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAEBJIAAgjIg+AAIAAgbIA9hSIAkAAIAABTIAUAAIAAAaIgUAAIAAAjgAgfAMIAjAAIAAgvg");
	this.shape_3.setTransform(-14.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-14,45.5,28.2);


(lib._10s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA3QgKgDgHgEIAAgcIACAAIAGAEIAJAEIAKAEQAGACAHAAQAGAAAFgCQAGgDAAgFQAAgDgDgCQgCgCgHgCIgJgCIgKgDQgNgEgGgGQgHgHAAgNQAAgIADgGQAEgHAGgFQAHgFAJgDQAKgCAKAAQAMAAAJACQAKACAHADIAAAcIgDAAIgGgEIgHgEIgKgDQgFgBgGAAQgFAAgFADQgFACAAAEQAAAEACACQADACAGACIAKACIALADQAMAEAGAFQAGAIAAAMQAAAIgDAHQgEAHgGAEQgHAGgKACQgJADgMAAQgMAAgLgCg");
	this.shape.setTransform(15.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAcIgFg3IAdAAIgGA3g");
	this.shape_1.setTransform(7.5,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBGQgLgEgGgKQgIgKgCgOQgDgOgBgSQABgSADgNQACgOAIgKQAHgKAKgEQALgFANAAQAPAAALAFQALAFAGAKQAHAJADAOQACAOABARQAAASgDAPQgEAOgGAJQgHAKgKAEQgLAFgPAAQgNAAgLgFgAgOgkQgEALAAAZQAAAaAEALQAFALAJAAQAKAAAEgLQAFgLAAgaQAAgZgFgLQgEgLgKAAQgJAAgFALg");
	this.shape_2.setTransform(-1.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBIIAAgZIAeAAIAAhLIgeAAIAAgYIANgBQAGAAAEgCQAFgCADgFQADgDAAgHIAeAAIAAB3IAdAAIAAAZg");
	this.shape_3.setTransform(-14,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-14,45.5,28.2);


(lib._00s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA3QgKgDgHgEIAAgcIACAAIAGAEIAJAEIAKAEQAGACAHAAQAGAAAFgCQAGgDAAgFQAAgDgDgCQgCgCgHgCIgJgCIgKgDQgNgEgGgGQgHgHAAgNQAAgIADgGQAEgHAGgFQAHgFAJgDQAKgCAKAAQAMAAAJACQAKACAHADIAAAcIgDAAIgGgEIgHgEIgKgDQgFgBgGAAQgFAAgFADQgFACAAAEQAAAEACACQADACAGACIAKACIALADQAMAEAGAFQAGAIAAAMQAAAIgDAHQgEAHgGAEQgHAGgKACQgJADgMAAQgMAAgLgCg");
	this.shape.setTransform(15.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAcIgFg3IAdAAIgGA3g");
	this.shape_1.setTransform(7.5,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBGQgLgEgGgKQgIgKgCgOQgDgOgBgSQABgSADgNQACgOAIgKQAHgKAKgEQALgFANAAQAPAAALAFQALAFAGAKQAHAJADAOQACAOABARQAAASgDAPQgEAOgGAJQgHAKgKAEQgLAFgPAAQgNAAgLgFgAgOgkQgEALAAAZQAAAaAEALQAFALAJAAQAKAAAEgLQAFgLAAgaQAAgZgFgLQgEgLgKAAQgJAAgFALg");
	this.shape_2.setTransform(-1.6,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZBGQgKgEgHgKQgGgKgEgOQgCgOAAgSQAAgSACgNQAEgOAGgKQAIgKAKgEQALgFANAAQAQAAAKAFQALAFAGAKQAHAJADAOQADAOgBARQAAASgCAPQgDAOgHAJQgGAKgLAEQgLAFgPAAQgNAAgMgFgAgOgkQgEALAAAZQAAAaAEALQAFALAJAAQAKAAAFgLQAEgLAAgaQAAgZgEgLQgFgLgKAAQgJAAgFALg");
	this.shape_3.setTransform(-14.4,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-14,45.5,28.2);


(lib.White = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgtIAThMAAAgnBMBaQAAAMAAAAnBg");
	this.shape.setTransform(288.9,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,577.8,250);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtBeIAAhYQAAghgUgMQgTgNgnAAQgeAAgkAEIgEgoQAmgFAqAAQAxAAAbANQAbAMAMASQAMASAAAgIAABegAhkBeIAAhfIA6AAIAABfg");
	this.shape.setTransform(105.7,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBUIAMghQAeAKAeAAQAiAAAWgQQAWgQAAgdQAAgcgSgRQgRgQgfAAIgXABIAAAWQAAAaAYAAIAIgBIAJAdQgPAFgRAAQgRAAgNgFQgOgEgKgMQgKgMAAgeIAAgsQAogJAoAAQA4AAAiAaQAjAaAAApQAAAugmAaQglAag7AAQglAAgogMg");
	this.shape_1.setTransform(80.3,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhmBCQAjgEAXgFIgnijIA7AAIAdCUQAXgHAHgOQAHgNABgZIAChZIA6AAIgDBDQgBAjgDAKQgCAQgKAPQgJAQgTAMQgVANgkAKQgmALg4AIg");
	this.shape_2.setTransform(55.1,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHCAIAAghQAAgQAEgIQADgJANgRIAGgGQAKgNAAgSIAAgVIhzAAIAAhyIA6AAIAABHIB0AAIAAAwQgBAYgDANQgCALgJALIgJAMQgJALgDAHQgDAHAAAKIAAAeg");
	this.shape_3.setTransform(33.6,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAuBeIAAhYQAAghgVgMQgTgNgnAAQgeAAgkAEIgEgoQAmgFArAAQAwAAAbANQAbAMAMASQALATAAAfIAABegAhkBeIAAhfIA6AAIAABfg");
	this.shape_4.setTransform(10.4,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.2,28.6);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtBeIAAhYQAAghgTgMQgUgNgnAAQgeAAgjAEIgFgoQAmgFAqAAQAxAAAbANQAbAMAMASQAMATAAAfIAABegAhkBeIAAhfIA6AAIAABfg");
	this.shape.setTransform(105.8,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhoBUIALghQAeAKAeAAQAiAAAWgQQAWgQAAgdQAAgdgSgQQgQgQggAAIgXABIAAAWQAAAaAYAAIAHgBIAKAdQgPAFgRAAQgQAAgOgFQgOgEgKgMQgKgMAAgeIAAgsQAngJApAAQA4AAAjAaQAhAaABApQAAAtgmAbQgkAag7AAQglAAgogMg");
	this.shape_1.setTransform(80.4,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhmBCQAlgFAUgEIgmijIA7AAIAcCUQAYgHAHgOQAHgNABgZIAChZIA6AAIgDBDQgBAbgDASQgDAQgJAPQgJAQgTAMQgUANgmAKQgmALg3AIg");
	this.shape_2.setTransform(55.1,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHCAIAAghQAAgOAEgKQADgIANgSIAFgGQALgNAAgSIAAgVIhzAAIAAhyIA6AAIAABHIBzAAIAAAwQAAAagCALQgDANgJAJIgJAMQgJAMgDAGQgDAIAAAJIAAAeg");
	this.shape_3.setTransform(33.6,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAuBeIAAhYQAAgggUgNQgUgNgnAAQgeAAgjAEIgFgoQAmgFAqAAQAxAAAbANQAbAMAMASQAMATAAAfIAABegAhkBeIAAhfIA6AAIAABfg");
	this.shape_4.setTransform(10.4,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.2,28.6);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABRDQIiOjOQgcAbgGBgIgHBTIhpAAIAHhZQAJhaAWglQAWgnAjgWIhgiKICAAAIB1CrQAfgXAGhQIAFhEIBmAAIgFAzQgIBYgWAmQgXAkgmAZIB8Cxg");
	this.shape.setTransform(160.3,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3B0IAAjnIBvAAIAADng");
	this.shape_1.setTransform(125,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjFC8IAVhKQA6AXA2AAQBCAAApgkQApgkAAhDQAAhAghglQghgkg6AAQgVAAgXAEIAAAwQAAA6AuAAIANgBIASBCQgaAMghAAQggAAgagLQgagLgTgaQgSgbAAhFIAAhhQBJgUBNAAQBrAAA/A5QBBA5AABcQAABphGA6QhGA6hvAAQhIAAhIgag");
	this.shape_2.setTransform(91.2,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag3DQIAAmfIBvAAIAAGfg");
	this.shape_3.setTransform(56.6,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiYCeQg7g7gBhgQABhhA6g9QA7g9BeAAQBAAAAuAbQAvAcAcAwQAbAxAABAQAABag6BAQg8A/heAAQhdAAg7g7gAhKhZQgZAlAAA0QAAA5AcAjQAbAjAsAAQAuAAAbgjQAbgjAAg5QAAg6gbgiQgbgiguAAQgxAAgZAlg");
	this.shape_4.setTransform(21.3,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.3,43.6);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABRDQIiOjOQgbAbgIBgIgGBTIhqAAIAIhZQAIhZAXgmQAWgnAjgWIhgiKICAAAIB1CrQAegWAHhRIAFhEIBlAAIgEAzQgJBZgWAlQgVAjgnAaIB8Cxg");
	this.shape.setTransform(160.3,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3B0IAAjnIBvAAIAADng");
	this.shape_1.setTransform(125,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjFC8IAVhKQA7AXA2AAQBBAAApgkQApgkAAhDQAAhAghglQghgkg6AAQgVAAgXAEIAAAwQAAA6AtAAIAOgBIATBCQgbAMgiAAQgfAAgZgLQgbgLgSgaQgTgbAAhFIAAhhQBJgUBNAAQBrAABAA5QBAA5AABcQAABohGA7QhFA6hwAAQhHAAhJgag");
	this.shape_2.setTransform(91.2,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag3DQIAAmfIBvAAIAAGfg");
	this.shape_3.setTransform(56.6,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiYCeQg8g7AAhgQABhhA6g9QA7g9BeAAQBAAAAuAbQAwAcAbAwQAbAxAABAQABBag8BAQg6A/hfAAQhdAAg7g7gAhKhZQgaAlAAA0QAAA4AcAkQAbAjAtAAQAtAAAcgjQAbgjAAg5QAAg6gbgiQgcgigtAAQgwAAgaAlg");
	this.shape_4.setTransform(21.3,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.3,43.6);


(lib.headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("70", "bold 38px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 44;
	this.text.lineWidth = 46;
	this.text.parent = this;
	this.text.setTransform(944.4,3.5);

	this.text_1 = new cjs.Text("שרון וקנין", "bold 16px 'Arial'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 64;
	this.text_1.parent = this;
	this.text_1.setTransform(66,17);

	this.text_2 = new cjs.Text(" איתי עינתי", "bold 16px 'Arial'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 75;
	this.text_2.parent = this;
	this.text_2.setTransform(259.9,17);

	this.text_3 = new cjs.Text(" סתיו בר שי", "bold 16px 'Arial'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 79;
	this.text_3.parent = this;
	this.text_3.setTransform(166.1,17);

	this.text_4 = new cjs.Text("שנים של המצאות ישראליות ", "bold 38px 'Arial'");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 44;
	this.text_4.lineWidth = 449;
	this.text_4.parent = this;
	this.text_4.setTransform(905.1,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AH3iVIAAErAn2iVIAAEr");
	this.shape.setTransform(127.7,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,946.4,47.9);


(lib.graybtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grayPattern3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.603,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.2,25);


(lib.eyeMusicGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyeMusicG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,52);


(lib.Exit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Exit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,55);


(lib.wirelessChargingGbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wirelesschargingG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,53);


(lib.wirelessChargingBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wirelesscharging();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.652,0.638);

	this.instance_1 = new lib.wirelesschargingG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,0,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.WazeGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WazeG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,55);


(lib.watermelonGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.watermelonG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,57);


(lib.syringeGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.syringeG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,53);


(lib.syringeBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.syringe();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.652,0.638);

	this.instance_1 = new lib.syringeG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-2,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.SmallestCamGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SmallestCamG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,52);


(lib.panIdemifyTATPGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.panIdemifyTATPG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,52);


(lib.panIdemifyTATPBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.panIdemifyTATP();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.638,0.638);

	this.instance_1 = new lib.panIdemifyTATPG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1,0.604,0.615);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.nobel2Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Nobel2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.62,0.612);

	this.instance_1 = new lib.Nobel2G();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,1,0.593,0.604);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,30);


(lib.nobel1GBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Nobel1G();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,53);


(lib.nobel1Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Nobel1();
	this.instance.parent = this;
	this.instance.setTransform(0,-60,0.6,0.612);

	this.instance_1 = new lib.Nobel1G();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-62,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60,30,30);


(lib.namerGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.namerG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,53);


(lib.machtEroyGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.machtEroyG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,53);


(lib.LaserkeyboardGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LaserkeyboardG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.LaserkeyboardBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Laserkeyboard();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.612,0.588);

	this.instance_1 = new lib.LaserkeyboardG();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-1,0.571,0.571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.InsulinpumpGBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.InsulinpumpG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,54);


(lib.eyeMusicBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.s90Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starBlue90();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1637,1157);


(lib.s80Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starBlue80();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1637,1157);


(lib.s70Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starBlue70();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1637,1157);


(lib.s60Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starBlue60();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.472,0.432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,773,500);


(lib.s50Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starBlue40();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.449,0.432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,735,500);


(lib.s40Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starBlue50();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.449,0.432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,735,500);


(lib.s10Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starBlue10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1637,1157);


(lib.s00Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.starBlue00();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.449,0.432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,735,500);


(lib.s90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.s90 = new lib._90s();
	this.s90.parent = this;
	this.s90.setTransform(22.8,14.1);
	new cjs.ButtonHelper(this.s90, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AjjCFIAAkJIHHAAIAAEJg");
	this.shape.setTransform(22.8,16.8);

	this.text = new cjs.Text("עמוד בפיתוח", "bold 28px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 34;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(-74.9,-238.2);

	this.instance = new lib.Asset6100x();
	this.instance.parent = this;
	this.instance.setTransform(-229,-378,0.481,0.481);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AjiCFIAAkJIHFAAIAAEJg");
	this.shape_1.setTransform(23.5,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.s90}]}).to({state:[{t:this.shape_1},{t:this.s90},{t:this.instance},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.s90}]},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.s90Pic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-149.5,-271,0.449,0.432,0,0,0,818.4,578.4);

	this.instance_2 = new lib.graybtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24,-3,1,1.48);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,30.2);


(lib.s80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.s80 = new lib._80s();
	this.s80.parent = this;
	this.s80.setTransform(22.8,14.1);
	new cjs.ButtonHelper(this.s80, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AjiCFIAAkJIHFAAIAAEJg");
	this.shape.setTransform(22.5,17.6);

	this.text = new cjs.Text("עמוד בפיתוח", "bold 28px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 34;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(39.6,-238.7);

	this.instance = new lib.Asset6100x();
	this.instance.parent = this;
	this.instance.setTransform(-114,-378,0.481,0.481);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AjjCFIAAkJIHHAAIAAEJg");
	this.shape_1.setTransform(22.8,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.s80}]}).to({state:[{t:this.shape_1,p:{y:17.8}},{t:this.s80},{t:this.instance},{t:this.text}]},1).to({state:[{t:this.shape_1,p:{y:16.8}},{t:this.s80}]},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.s80Pic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.5,-271,0.449,0.432,0,0,0,818.4,578.5);

	this.instance_2 = new lib.graybtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23,-3,1,1.6);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,45.8,31);


(lib.s70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.s70 = new lib._70s();
	this.s70.parent = this;
	this.s70.setTransform(22.8,14.1);
	new cjs.ButtonHelper(this.s70, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AjiCFIAAkJIHFAAIAAEJg");
	this.shape.setTransform(21.5,17.6);

	this.text = new cjs.Text("עמוד בפיתוח", "bold 28px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 34;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(156.7,-238.7);

	this.instance = new lib.Asset6100x();
	this.instance.parent = this;
	this.instance.setTransform(3,-378,0.481,0.481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:21.5,y:17.6}},{t:this.s70}]}).to({state:[{t:this.shape,p:{x:22.5,y:18.6}},{t:this.s70},{t:this.instance},{t:this.text}]},1).to({state:[{t:this.shape,p:{x:23.5,y:17.6}},{t:this.s70}]},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.s70Pic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81,-271,0.449,0.432,0,0,0,818.4,578.5);

	this.instance_2 = new lib.graybtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(26,-3,1,1.48);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,46.8,31);


(lib.s60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.s60 = new lib._60s();
	this.s60.parent = this;
	this.s60.setTransform(22.8,14.1);
	new cjs.ButtonHelper(this.s60, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AjiCFIAAkJIHFAAIAAEJg");
	this.shape.setTransform(23.5,17.6);

	this.text = new cjs.Text("עמוד בפיתוח", "bold 28px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 34;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(271.9,-238.7);

	this.instance = new lib.Asset6100x();
	this.instance.parent = this;
	this.instance.setTransform(119,-378,0.481,0.481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:17.6}},{t:this.s60}]}).to({state:[{t:this.shape,p:{y:18.6}},{t:this.s60},{t:this.instance},{t:this.text}]},1).to({state:[{t:this.shape,p:{y:17.6}},{t:this.s60}]},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.s60Pic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(197.4,-271,0.951,1,0,0,0,386.5,250);

	this.instance_2 = new lib.graybtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25,-2,1,1.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.3,31);


(lib.s50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.s50 = new lib._50s();
	this.s50.parent = this;
	this.s50.setTransform(22.8,14.1);
	new cjs.ButtonHelper(this.s50, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AjjCFIAAkJIHHAAIAAEJg");
	this.shape.setTransform(22.8,16.8);

	this.text = new cjs.Text("עמוד בפיתוח", "bold 28px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 34;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(388.8,-237.2);

	this.instance = new lib.Asset6100x();
	this.instance.parent = this;
	this.instance.setTransform(235,-376,0.481,0.481);

	this.instance_1 = new lib.s40Pic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(313.5,-271,1,1,0,0,0,367.5,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:16.8}},{t:this.s50}]}).to({state:[{t:this.shape,p:{y:17.3}},{t:this.s50},{t:this.instance_1},{t:this.instance},{t:this.text}]},1).to({state:[{t:this.shape,p:{y:17.8}},{t:this.s50}]},1).to({state:[{t:this.shape,p:{y:16.8}},{t:this.s50}]},1).wait(1));

	// Layer 2
	this.instance_2 = new lib.graybtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24,-2,1,1.44);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,30.2);


(lib.s10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.s10 = new lib._10s();
	this.s10.parent = this;
	this.s10.setTransform(22.8,14.1);
	new cjs.ButtonHelper(this.s10, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AjjCFIAAkJIHHAAIAAEJg");
	this.shape.setTransform(22.8,18.4);

	this.text = new cjs.Text("עמוד בפיתוח", "bold 28px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 34;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(-306.9,-238.7);

	this.instance = new lib.Asset6100x();
	this.instance.parent = this;
	this.instance.setTransform(-460,-378,0.481,0.481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.s10}]}).to({state:[{t:this.shape},{t:this.s10},{t:this.instance},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.s10}]},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.s10Pic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-381.5,-271,0.449,0.432,0,0,0,818.4,578.4);

	this.instance_2 = new lib.graybtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25,-3.1,1,1.52,0,0,0,0,-0.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,31.8);


(lib.s00 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.s00 = new lib._00s();
	this.s00.parent = this;
	this.s00.setTransform(22.8,14.1);
	new cjs.ButtonHelper(this.s00, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AjjCFIAAkJIHHAAIAAEJg");
	this.shape.setTransform(22.8,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:18.4}},{t:this.s00}]}).to({state:[{t:this.shape,p:{y:19.4}},{t:this.s00}]},1).to({state:[{t:this.shape,p:{y:18.4}},{t:this.s00}]},1).wait(1));

	// Layer 2
	this.instance = new lib.s00Pic();
	this.instance.parent = this;
	this.instance.setTransform(-265.5,-271.5,1,1,0,0,0,367.5,250);

	this.instance_1 = new lib.graybtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,-3,1,1.6);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,31.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.s40 = new lib._40s();
	this.s40.parent = this;
	this.s40.setTransform(22.8,14.1);
	new cjs.ButtonHelper(this.s40, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.s40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.5,28.2);


(lib.ResetFadeBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(154.4,156.9,1,1,0,0,0,90.7,21.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7).p("APyuLQDKCvBuDtQBwDygCEKQgCEJh0DzQhvDqjIC0QjJC0kCBiQkLBlkggDQkigDkJhqQkAhmjFi4QjFi3hrjsQhuj1ACkHQAFnBE4lgQCSimDFhzQDHh2Djg0IgDFYQk8BgjID3QjOD+gDE7QgBDFBTC3QBQCxCUCKQCTCKDBBNQDGBPDaACQDYACDIhMQDChJCWiHQCWiHBTiwQBXi1ACjIQACjIhWi0QhPiniZiOIljE/IjUuzIRZBQg");
	this.shape.setTransform(155.7,146.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLUdQkigCkJhqQkAhnjFi3QjFi4hrjsQhuj0ACkIQAFnAE4lgQCSimDFh0QDHh1Djg1IgDFYQk8BhjID3QjOD9gDE7QgBDFBTC4QBQCxCUCKQCTCJDBBNQDGBQDaACQDYACDIhMQDChJCWiHQCWiIBTivQBXi2ACjHQACjJhWi0QhPiniZiOIljFAIjUuzIRZBQIknE/QDKCwBuDtQBwDxgCEKQgCEKh0DzQhvDqjIC0QjJC0kCBhQkDBikZAAIgPAAg");
	this.shape_1.setTransform(155.7,147);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83B5D0").s().p("ApeVBQkYhvjYjKQjYjKh2kHQh7kPAAkoQAAkoB7kPQB2kGDYjKQDYjKEYhvQEihyE8gBQE9ABEhByQEYBvDYDKQDYDKB3EGQB6EPABEoQgBEoh6EPQh3EHjYDKQjYDKkYBvQkhByk9ABQk8gBkihyg");
	this.shape_2.setTransform(156,146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312,292);


(lib.ResetBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(154.5,157,1,1,0,0,0,90.7,21.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7).p("APzuLQDKCwBuDsQBvDygCEKQgCEJhzDzQhwDqjIC0QjIC0kCBiQkLBlkggDQkigDkJhqQkAhmjFi4QjGi3hqjsQhvj1ACkHQAFnBE4lgQCTimDEhzQDHh2Dkg0IgEFYQk7BgjJD3QjOD+gCE7QgCDFBTC3QBQCxCUCKQCUCKDABNQDHBPDZACQDYACDIhMQDChJCWiHQCWiHBUiwQBWi1ACjIQACjIhWi0QhPiniZiOIliE/IjUuzIRZBQg");
	this.shape.setTransform(155.7,146.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKUdQkigCkJhqQkAhnjFi3QjGi4hqjsQhvj0ACkIQAFnAE4lgQCTimDEh0QDHh1Dkg1IgEFYQk7BhjJD3QjOD9gCE7QgCDFBTC4QBQCxCUCKQCUCJDABNQDHBQDZACQDYACDIhMQDChJCWiHQCWiHBUiwQBWi2ACjHQACjJhWi0QhPimiZiPIliFAIjUuzIRZBQIknE/QDKCwBuDtQBvDxgCEKQgCEKhzDzQhwDqjIC0QjIC0kCBhQkEBikZAAIgOAAg");
	this.shape_1.setTransform(155.7,147);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0067FF").s().p("ApdVBQkZhvjXjKQjYjKh3kGQh7kQAAkoQAAkoB7kPQB3kFDYjKQDXjLEZhuQEhh0E8AAQE9AAEiB0QEXBuDZDLQDYDKB2EFQB7EPAAEoQAAEoh7EQQh2EGjYDKQjZDKkXBvQkiBzk9AAQk8AAkhhzg");
	this.shape_2.setTransform(156,146);

	this.instance_1 = new lib.ResetFadeBtn();
	this.instance_1.parent = this;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312,292);


(lib.InstructionsFadeBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(69.2,196.4,1,1,0,0,0,58.1,14.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAuBpIAAhjQAAgkgUgOQgUgOgnAAQghAAghAEIgFgsQAjgFAuAAQAyAAAaANQAcAOAMAVQAMAUAAAjIAABpgAhlBpIAAhqIA7AAIAABqg");
	this.shape.setTransform(160.7,158.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBnIAAjNIA7AAIAADNg");
	this.shape_1.setTransform(141.6,158.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAkBpIAAhmQAAgggSgOQgSgOgkAAQgSAAgiADIgFgrQAhgHAkABQA6AAAeAXQAeAXAAAzIAABvg");
	this.shape_2.setTransform(123.7,158.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AArBnIhLhmQgPANgDAwIgEApIg5AAIAEgsQAEgsAMgSQAMgUAUgKIg0hFIBEAAIA/BVQAQgMAEgnIACgiIA3AAIgCAZQgFAsgMATQgLAQgWANIBEBYg");
	this.shape_3.setTransform(101.6,158.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdBnIAAjNIA7AAIAADNg");
	this.shape_4.setTransform(82.6,158.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah8BiIAJgkQAOAEAIAAQANAAAEgGQAEgEAAgRIAAhiIgtAEIgEgrQA6gGA2AAQAtAAAfAIQAdAIAOAVQAPAWAAAnIAABuIg7AAIAAhmQAAgmgOgMQgOgMgzAAIAABlQAAAagEAMQgEALgOAIQgNAHgZAAQgbAAgYgHg");
	this.shape_5.setTransform(61.4,158.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("ArAAzQhCgPACghQABggA9gPQAlgIAzAAITWgHQAuAAAoAJQBBAPgBAhQgCAgg8AOQgmAJgyAAIzWAHIgLAAQglAAgmgJg");
	this.shape_6.setTransform(96.8,101.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("ArAAzQhCgPACghQABggA9gPQAlgIAzAAITWgHQAuAAAoAJQBBAPgBAhQgCAgg8AOQgmAJgyAAIzWAHIgLAAQglAAgmgJg");
	this.shape_7.setTransform(96.8,67.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("ArAAzQhCgPACghQABggA9gPQAlgIAzAAITWgHQAuAAAoAJQBBAPgBAhQgCAgg8AOQgmAJgyAAIzWAHQguAAgogJg");
	this.shape_8.setTransform(96.8,37.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#83B5D0").s().p("AtARfQgyAAgjgiQgkgkAAgyIAA/NQAAgyAkgjQAjgkAyABIaBAAQAygBAkAkQAiAjAAAyIAAfNQAAAygiAkQgkAigyAAg");
	this.shape_9.setTransform(95.4,112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190.8,224);


(lib.InstructionsBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(69.2,196.4,1,1,0,0,0,58.1,14.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAuBpIAAhjQAAgkgVgOQgUgOgmAAQggAAgiAEIgFgsQAigFAvAAQAwAAAcANQAcAOALAVQAMAUABAjIAABpgAhlBpIAAhqIA7AAIAABqg");
	this.shape.setTransform(160.7,158.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBnIAAjNIA7AAIAADNg");
	this.shape_1.setTransform(141.6,158.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAjBpIAAhmQAAgggRgOQgSgOgkAAQgSAAgjADIgEgrQAggHAlABQA5AAAfAXQAeAXAAAzIAABvg");
	this.shape_2.setTransform(123.7,158.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AArBnIhLhmQgPANgEAwIgDApIg5AAIAEgsQAEgtAMgRQAMgTATgLIgzhFIBEAAIA/BVQAQgLAEgoIACgiIA3AAIgDAZQgEAsgMATQgMAQgVANIBEBYg");
	this.shape_3.setTransform(101.6,158.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdBnIAAjNIA7AAIAADNg");
	this.shape_4.setTransform(82.6,158.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah8BiIAJgkQAOAEAJAAQANAAAEgGQADgFAAgQIAAhiIgsAEIgEgrQA6gGA1AAQAtAAAgAIQAcAIAOAVQAPAVAAAoIAABuIg6AAIAAhmQAAglgPgNQgOgMgyAAIAABlQAAAagFAMQgFALgNAIQgNAHgZAAQgaAAgZgHg");
	this.shape_5.setTransform(61.4,158.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("ArAAzQhCgPACghQABggA9gPQAlgIAzAAITWgHQAuAAAoAJQBBAPgBAhQgCAgg8AOQgmAJgyAAIzWAHIgLAAQglAAgmgJg");
	this.shape_6.setTransform(96.8,101.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("ArAAzQhCgPACghQABggA9gPQAlgIAzAAITWgHQAuAAAoAJQBBAPgBAhQgCAgg8AOQgmAJgyAAIzWAHIgLAAQglAAgmgJg");
	this.shape_7.setTransform(96.8,67.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("ArAAzQhCgPACghQABggA9gPQAlgIAzAAITWgHQAuAAAoAJQBBAPgBAhQgCAgg8AOQgmAJgyAAIzWAHQguAAgogJg");
	this.shape_8.setTransform(96.8,37.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0067FF").s().p("AtARfQgyAAgjgiQgkgkABgyIAA/NQgBgyAkgjQAjgkAyABIaBAAQAygBAkAkQAiAjABAyIAAfNQgBAygiAkQgkAigyAAg");
	this.shape_9.setTransform(95.4,112);

	this.instance_1 = new lib.InstructionsFadeBtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.001,1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190.8,224);


(lib.ForNotAllowed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.White();
	this.instance.parent = this;
	this.instance.setTransform(288.9,125,1,1,0,0,0,288.9,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,577.8,250);


(lib.WazeBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Waze();
	this.instance.parent = this;
	this.instance.setTransform(-21,-16);

	this.WazeGBtn = new lib.WazeGBtn();
	this.WazeGBtn.parent = this;
	this.WazeGBtn.setTransform(-23.1,-17.4,1.038,1);
	new cjs.ButtonHelper(this.WazeGBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1}}]}).to({state:[{t:this.instance,p:{scaleX:1.02}},{t:this.WazeGBtn}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-16,49,50);


(lib.watermelonBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.watermelon();
	this.instance.parent = this;

	this.instance_1 = new lib.watermelonGBtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,0,0.965,0.965);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:0}}]}).to({state:[{t:this.instance,p:{x:-2}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,53);


(lib.SmallestCam_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SmallestCam();
	this.instance.parent = this;

	this.instance_1 = new lib.SmallestCamGBtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.5,24,1,1,0,0,0,26.5,26);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib.namerBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.namer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.638,0.652);

	this.namerGBtn = new lib.namerGBtn();
	this.namerGBtn.parent = this;
	this.namerGBtn.setTransform(14,15.2,0.604,0.604,0,0,0,26.4,26.4);
	new cjs.ButtonHelper(this.namerGBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.namerGBtn}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.machtEroyBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.machtEroy();
	this.instance.parent = this;

	this.machtEroyGBtn = new lib.machtEroyGBtn();
	this.machtEroyGBtn.parent = this;
	this.machtEroyGBtn.setTransform(22.3,24,1,1,0,0,0,26,26.5);
	new cjs.ButtonHelper(this.machtEroyGBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.machtEroyGBtn}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,47);


(lib.InsulinpumpBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Insulinpump();
	this.instance.parent = this;

	this.InsulinpumpGBtn = new lib.InsulinpumpGBtn();
	this.InsulinpumpGBtn.parent = this;
	this.InsulinpumpGBtn.setTransform(24.1,24.1,1,1.019,0,0,0,27.6,27.1);
	new cjs.ButtonHelper(this.InsulinpumpGBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.InsulinpumpGBtn}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,48);


(lib.s40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(22.9,12.1,1,1,0,0,0,22.8,14.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AjjB9IAAj5IHHAAIAAD5g");
	this.shape.setTransform(22.8,14.5);

	this.text = new cjs.Text("עמוד בפיתוח", "bold 28px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 34;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(504.8,-242.7);

	this.instance_1 = new lib.Asset6100x();
	this.instance_1.parent = this;
	this.instance_1.setTransform(351,-382,0.481,0.481);

	this.instance_2 = new lib.s50Pic();
	this.instance_2.parent = this;
	this.instance_2.setTransform(429.5,-275,1,1,0,0,0,367.5,250);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(22.8,12.1,1,1,0,0,0,22.8,14.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AjjCFIAAkJIHHAAIAAEJg");
	this.shape_1.setTransform(22.8,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AjjCFIAAkKIHHAAIAAEKg");
	this.shape_2.setTransform(22.8,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{x:22.9,y:12.1}}]}).to({state:[{t:this.shape_1},{t:this.instance_3,p:{y:12.1}},{t:this.instance,p:{x:22.8,y:12.2}},{t:this.instance_2},{t:this.instance_1},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.instance_3,p:{y:14.1}},{t:this.instance,p:{x:22.9,y:14.3}}]},2).wait(1));

	// Layer 2
	this.instance_4 = new lib.graybtn();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25.2,-7.3,0.982,1.399,0,0,0,0.2,-0.3);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,45.6,29.1);


(lib.PopUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.eyeMusicXY = new lib.eyeMusicGBtn();
	this.eyeMusicXY.parent = this;
	this.eyeMusicXY.setTransform(121.5,176,1,1,0,0,0,26.5,26);
	this.eyeMusicXY.visible = false;

	this.syringeXY = new lib.syringeGBtn();
	this.syringeXY.parent = this;
	this.syringeXY.setTransform(111.6,115.6,1,1,0,0,0,26.5,26.5);
	this.syringeXY.visible = false;

	this.InstructionsXY = new lib.InstructionsBtn();
	this.InstructionsXY.parent = this;
	this.InstructionsXY.setTransform(123.6,270.1,0.21,0.223,0,0,0,0.5,0.2);
	this.InstructionsXY.visible = false;
	new cjs.ButtonHelper(this.InstructionsXY, 0, 1, 1);

	this.MainTxt = new cjs.Text("WAZE\nועוד משהו \n על וויז", "bold 13px 'Arial'");
	this.MainTxt.name = "MainTxt";
	this.MainTxt.textAlign = "right";
	this.MainTxt.lineHeight = 18;
	this.MainTxt.lineWidth = 609;
	this.MainTxt.parent = this;
	this.MainTxt.setTransform(625.1,76.9);

	this.nobel1XY = new lib.nobel1GBtn();
	this.nobel1XY.parent = this;
	this.nobel1XY.setTransform(176.5,176.5,1,1,0,0,0,26.5,26.5);
	this.nobel1XY.visible = false;
	new cjs.ButtonHelper(this.nobel1XY, 0, 1, 1);

	this.LaserkeyboardXY = new lib.LaserkeyboardGBtn();
	this.LaserkeyboardXY.parent = this;
	this.LaserkeyboardXY.setTransform(204,195,1,1,0,0,0,28,28);
	this.LaserkeyboardXY.visible = false;
	new cjs.ButtonHelper(this.LaserkeyboardXY, 0, 1, 1);

	this.panIdemifyTATPXY = new lib.panIdemifyTATPGBtn();
	this.panIdemifyTATPXY.parent = this;
	this.panIdemifyTATPXY.setTransform(211.5,115,1,1,0,0,0,26.5,26);
	this.panIdemifyTATPXY.visible = false;
	new cjs.ButtonHelper(this.panIdemifyTATPXY, 0, 1, 1);

	this.wirelessChargingXY = new lib.wirelessChargingGbtn();
	this.wirelessChargingXY.parent = this;
	this.wirelessChargingXY.setTransform(123,243.5,1,1,0,0,0,26.5,26.5);
	this.wirelessChargingXY.visible = false;
	new cjs.ButtonHelper(this.wirelessChargingXY, 0, 1, 1);

	this.SmallestCamXY = new lib.SmallestCamGBtn();
	this.SmallestCamXY.parent = this;
	this.SmallestCamXY.setTransform(110.5,142.1);
	this.SmallestCamXY.visible = false;
	new cjs.ButtonHelper(this.SmallestCamXY, 0, 1, 1);

	this.SmallestCamGBtn = new lib.SmallestCamGBtn();
	this.SmallestCamGBtn.parent = this;
	this.SmallestCamGBtn.setTransform(381.5,182.1);
	this.SmallestCamGBtn.visible = false;
	new cjs.ButtonHelper(this.SmallestCamGBtn, 0, 1, 1);

	this.namerXY = new lib.namerGBtn();
	this.namerXY.parent = this;
	this.namerXY.setTransform(110.5,89.1);
	this.namerXY.visible = false;
	new cjs.ButtonHelper(this.namerXY, 0, 1, 1);

	this.machtEroyXY = new lib.machtEroyGBtn();
	this.machtEroyXY.parent = this;
	this.machtEroyXY.setTransform(33.1,254.5);
	this.machtEroyXY.visible = false;
	new cjs.ButtonHelper(this.machtEroyXY, 0, 1, 1);

	this.InsulinpumpXY = new lib.InsulinpumpGBtn();
	this.InsulinpumpXY.parent = this;
	this.InsulinpumpXY.setTransform(39.5,142.1);
	this.InsulinpumpXY.visible = false;
	new cjs.ButtonHelper(this.InsulinpumpXY, 0, 1, 1);

	this.Exit = new lib.Exit_1();
	this.Exit.parent = this;
	this.Exit.setTransform(33.2,28.7,0.566,0.545,0,0,0,26.6,27.7);
	new cjs.ButtonHelper(this.Exit, 0, 1, 1);

	this.watermelonXY = new lib.watermelonGBtn();
	this.watermelonXY.parent = this;
	this.watermelonXY.setTransform(39.5,167.6);
	this.watermelonXY.visible = false;
	new cjs.ButtonHelper(this.watermelonXY, 0, 1, 1);

	this.WazeXY = new lib.WazeGBtn();
	this.WazeXY.parent = this;
	this.WazeXY.setTransform(55.5,108,1.038,1);
	this.WazeXY.visible = false;
	new cjs.ButtonHelper(this.WazeXY, 0, 1, 1);

	this.H1Txt = new cjs.Text("", "bold 22px 'Tahoma'");
	this.H1Txt.name = "H1Txt";
	this.H1Txt.textAlign = "center";
	this.H1Txt.lineHeight = 29;
	this.H1Txt.lineWidth = 445;
	this.H1Txt.parent = this;
	this.H1Txt.setTransform(326.5,25.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(10,1,1).p("EgyIgaEMBkRAAAMAAAA0JMhkRAAAg");
	this.shape.setTransform(320.9,167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgyIAaFMAAAg0JMBkQAAAMAAAA0Jg");
	this.shape_1.setTransform(320.9,167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.H1Txt},{t:this.WazeXY},{t:this.watermelonXY},{t:this.Exit},{t:this.InsulinpumpXY},{t:this.machtEroyXY},{t:this.namerXY},{t:this.SmallestCamGBtn},{t:this.SmallestCamXY},{t:this.wirelessChargingXY},{t:this.panIdemifyTATPXY},{t:this.LaserkeyboardXY},{t:this.nobel1XY},{t:this.MainTxt},{t:this.InstructionsXY},{t:this.syringeXY},{t:this.eyeMusicXY}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,651.8,343.9);


// stage content:



(lib._70yearsofinventions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//עבור הפופ אפ בכניסה לייצוג
			this.PopUp.H1Txt.text = "הוראות הפעלה"
			this.PopUp.MainTxt.text  =  " ,משתמש יקר  \n"
		+ " :הייצוג שלפניך עדיין בשלבי פיתוח. להלן מספר הוראות להפעלה נוחה של הייצוג  \n\n"
		+ ",ביכולתך לעבור עם העכבר על ההמצאות שמופיעות בעמוד הראשי *  \n"
		+ ".במידה וההמצאה הפכה מצבע כחול לצבעוני, ניתן ללחוץ עליה לקבלת מידע נוסף בנוגע לאותה המצאה     \n\n"
		+ ".(במידה ואתה מעוניין לצפות בכלל ההמצאות הפעילות, אנא לחץ על שנת 2000 בציר הזמן (משמש ככפתור פעילים * \n\n"
		+ ".שאר העשורים בייצוג נמצאים בשלבי פיתוח, לחיצה על השנה תציג סינון בלבד * \n\n"
		+ ".ניתן בכל שלב לחזור למסך הראשי ע''י לחיצה על כפתור האיפוס * \n\n"
		+ ".באפשרותך לעיין בהוראות ההפעלה בכל עת ע''י לחיצה על כפתור ההוראות * "
			this.PopUp.x = 480;
			this.PopUp.y = 280;
		var logoName = "";
		this.stop();
		
		this.ForNotAllowed.cursor = "not-allowed"; //שינוי סמל העכבר
		
		//כפתור איפוס
		this.ResetBtn.addEventListener("click", ResetFunc.bind(this));
		function ResetFunc() {
			this.gotoAndPlay(1);
			this.stop();
		}
		
		//הוראות הפעלה
		this.InstructionsBtn.addEventListener("click", InstructionsFunc.bind(this));
		function InstructionsFunc() {
			this.PopUp.H1Txt.text = "הוראות הפעלה"
			this.PopUp.MainTxt.text  =  " ,משתמש יקר  \n"
		+ " :הייצוג שלפניך עדיין בשלבי פיתוח. להלן מספר הוראות להפעלה נוחה של הייצוג  \n\n"
		+ ",ביכולתך לעבור עם העכבר על ההמצאות שמופיעות בעמוד הראשי *  \n"
		+ ".במידה וההמצאה הפכה מצבע כחול לצבעוני, ניתן ללחוץ עליה לקבלת מידע נוסף בנוגע לאותה המצאה     \n\n"
		+ ".(במידה ואתה מעוניין לצפות בכלל ההמצאות הפעילות, אנא לחץ על שנת 2000 בציר הזמן (משמש ככפתור פעילים * \n\n"
		+ ".שאר העשורים בייצוג נמצאים בשלבי פיתוח, לחיצה על השנה תציג סינון בלבד * \n\n"
		+ ".ניתן בכל שלב לחזור למסך הראשי ע''י לחיצה על כפתור האיפוס * \n\n"
		+ ".באפשרותך לעיין בהוראות ההפעלה בכל עת ע''י לחיצה על כפתור ההוראות * "
			this.PopUp.x = 480;
			this.PopUp.y = 280;
			logoName = "InstructionsXY";
			this.PopUp.InstructionsXY.visible = true;
			this.PopUp.InstructionsXY.x = 580;
			this.PopUp.InstructionsXY.y = 10;
		}
		
		//תחילת כפתורי ציר זמן
		this.s40.addEventListener("click", replayFunc40.bind(this));
		function replayFunc40() {
			this.gotoAndPlay(5);
			this.stop();
		}
		this.s50.addEventListener("click", replayFunc50.bind(this));
		function replayFunc50() {
			this.gotoAndPlay(10);
			this.stop();
		}
		this.s60.addEventListener("click", replayFunc60.bind(this));
		function replayFunc60() {
			this.gotoAndPlay(15);
			this.stop();
		}
		this.s70.addEventListener("click", replayFunc70.bind(this));
		function replayFunc70() {
			this.gotoAndPlay(20);
			this.stop();
		}
		this.s80.addEventListener("click", replayFunc80.bind(this));
		function replayFunc80() {
			this.gotoAndPlay(25);
			this.stop();
		}
		this.s90.addEventListener("click", replayFunc90.bind(this));
		function replayFunc90() {
			this.gotoAndPlay(30);
			this.stop();
		}
		this.s00.addEventListener("click", replayFunc00.bind(this));
		function replayFunc00() {
			this.gotoAndPlay(35);
			this.stop();
		}
		this.s10.addEventListener("click", replayFunc10.bind(this));
		function replayFunc10() {
			this.gotoAndPlay(40);
			this.stop();
		}
		
		
		//______________________________________________________
		
		// ארוע לסגירת תיבת הטקסט
		this.PopUp.Exit.addEventListener("click", PopUp_close.bind(this));
		function PopUp_close() {
			this.PopUp.x = 1480;
			this.PopUp[logoName].visible = false;
		}
		
		//תחילת קוד עבור כפתורים
		//WAZE
		this.WazeBtn.addEventListener("click", WazeText.bind(this));
		function WazeText(event) {
			this.PopUp.H1Txt.text = "Waze"
			this.PopUp.MainTxt.text  =  ".FreeMap Israel בשנת 2006 אהוד שבתאי הקים מיזם בשם\n"
		+ ".WAZE-בשנת 2008 השתנה שם המיזם ל\n\n"
		+".ושיתופית לטלפונים חכמים GPS התרומה המרכזית של ההמצאה היא עצם היותה אפליקציית ניווט חינמית מבוססת\n\n"
		+ ",המידע המתקבל מכל משתמש מועבר לשאר המשתתפים באפליקציה כדי לעדכן כבישים\n"
		+".דרכים, רחובות ומספרי בתים, כמו גם להתריע על עומסי תנועה, ניידות משטרה, חסימות ומכשולים בכביש\n"
		+".מעבר לכך נשלח מכל משתמש מידע הכולל את מהירותו ומיקומו\n"
		+ ".ב- 11.06.2013 חברת גוגל רכשה את ההמצאה ב- 966 מיליון דולר\n\n"
		+ ".היום המפות הקיימות בתוכנה מכסות מעל ל-100 מדינות\n\n"
		+ ".Mobile world congress פברואר 2013 – ההמצאה זכתה בתואר 'היישום הטוב ביותר' בתחרות"
			this.PopUp.x = 480;
			logoName = "WazeXY";
			this.PopUp.WazeXY.visible = true;
			this.PopUp.WazeXY.x = 580;
			this.PopUp.WazeXY.y = 10;
		}
		
		this.WazeBtn.addEventListener("mouseover", WazeBtn_MouseOverHandler.bind(this));
		function WazeBtn_MouseOverHandler()
		{this.WazeBtn.alpha = 1;}
		
		this.WazeBtn.addEventListener("mouseout", WazeBtn_MouseOutHandler.bind(this));
		function WazeBtn_MouseOutHandler()
		{this.WazeBtn.alpha = 0.01;}
		
		
		//משאבת אינסולין
		this.InsulinpumpBtn.addEventListener("click", InsulinpumpText.bind(this));
		function InsulinpumpText(event) {
			this.PopUp.H1Txt.text = "משאבת ומדבקת אינסולין"
			this.PopUp.MainTxt.text = ".בשנת 2005 נפתחה חברת מדינגו שפיתחה מדבקה עבור חולי סכרת הכוללת משאבת אינסולין מזערית\n\n"
		+ ".המדבקה קטנה ודיסקרטית, חסינת מים המונחת על הזרוע ובמקומות אחרים בגוף\n"
		+ ".הערכה כוללת מדבקה ומשאבת אינסולין זעירה הניתנות לשימוש במשך שלושה חודשים\n" 
		+ ".השימוש בערכה מונע את הצורך בהזרקה יומיומית\n\n"
		+ "המשאבה דומה בצורתה לביפר וכוללת מתקן להזרמת אינסולין, מוח המכשיר מאפשר הזרמה של האינסולין על\n" 
		+".פי פקודות המטופל מראש והמכשיר שואב את האינסולין ומזרים אותו לגוף\n\n"
		+ "מחקרים רפואיים מציגים את יעילות השימוש במשאבות אינסולין לשמירה על איזון סוכר לאורך זמן בקרב אנשים\n"
		+".עם סוכרת סוג 1, הן בקרב מבוגרים והן אצל ילדים ומתבגרים\n\n"
		+ ".'בשנת 2010 החברה נמכרה ב- 160 מיליון דולר לענקית התרופות השווצרית 'רוש"
			this.PopUp.x = 480;
			logoName = "InsulinpumpXY";
			this.PopUp.InsulinpumpXY.visible = true;
			this.PopUp.InsulinpumpXY.x = 580;
			this.PopUp.InsulinpumpXY.y = 10;
			
		}
		this.InsulinpumpBtn.addEventListener("mouseover", InsulinpumpBtn_MouseOverHandler.bind(this));
		function InsulinpumpBtn_MouseOverHandler()
		{this.InsulinpumpBtn.alpha = 1;}
		
		this.InsulinpumpBtn.addEventListener("mouseout", InsulinpumpBtn_MouseOutHandler.bind(this));
		function InsulinpumpBtn_MouseOutHandler()
		{this.InsulinpumpBtn.alpha = 0.01;}
		
		
		//מחט עירוי
		this.machtEroyBtn.addEventListener("click", machtEroyText.bind(this));
		function machtEroyText(event) {
			this.PopUp.H1Txt.text = "מחט עירוי חכמה"
			this.PopUp.MainTxt.text = 
		".veid :בשנת 2005 חברת 'ווסקלר' הישראלית פיתחה חיישן המונח בקצה הצנתר בשם\n"
		+ ".החיישן מצפצף כאשר מחט העירוי הצליחה לחדור לווריד\n\n"
		+ "התרומה המרכזית של ההמצאה היא מניעת חדירה עמוקה יותר של המחט וסכנת ''פיצוץ'' של הווריד והפחתת\n"
		+ ".ה''חפירות'' בוורידי הידיים, הגורמים לשטפי דם וסבל לחולה\n\n"
		+ "ד''ר יעקב כץ (מנהל מחלקת ההרדמה במרכז שניידר לרפואת ילדים) ערך מחקר ומצא כי בעזרת החיישן אחוז "
		+ ".ההצלחה בהחדרת העירוי גבוה פי 4 מאשר בלעדיו, אצל ילדים עם ורידים בלתי נראים\n\n"
		+ ".החיישן החדש נכנס לשימוש בכמה מרכזים רפואיים בעולם"
			this.PopUp.x = 480;
			logoName = "machtEroyXY";
			this.PopUp.machtEroyXY.visible = true;
			this.PopUp.machtEroyXY.x = 580;
			this.PopUp.machtEroyXY.y = 10;
		}
		
		this.machtEroyBtn.addEventListener("mouseover", machtEroyBtn_MouseOverHandler.bind(this));
		function machtEroyBtn_MouseOverHandler()
		{this.machtEroyBtn.alpha = 1;}
		
		this.machtEroyBtn.addEventListener("mouseout", machtEroyBtn_MouseOutHandler.bind(this));
		function machtEroyBtn_MouseOutHandler()
		{this.machtEroyBtn.alpha = 0.01;}
		
		//אבטיח אישי
		this.watermelonBtn.addEventListener("click", watermelonText.bind(this));
		function watermelonText(event) {
			this.PopUp.H1Txt.text = "אבטיח אישי"
			this.PopUp.MainTxt.text = ".''בשנת 2006, ערן יוסוב מטפח מחברת ''הזרע ג'נטיקס'' פיתח את האבטיח האישי הקרוי גם ''פומה \n"
		+ ".האבטיח האישי מהווה פתרון אידיאלי לאחסון במקרר ונשיאה לטיולים \n\n"
		+ ".פומה מאופיין בצורתו העגולה, צבע אדום, בריקס (סוכר) גבוה, קליפת טייגר, ומגיע במשקל של עד 2.5 ק''ג בלבד \n"
		+ ".אורך חיי המדף של אבטיח זה הוא כשישה שבועות בקירור או בטמפרטורת החדר \n\n"
		+ "הזן ''פומה'' משווק כבר בהצלחה מרובה בארה''ב, כאשר קטגוריית האבטיחים האישיים מהווה כשליש מצריכת" 
		+ " .האבטיחים במדינה, ומדינות נוספות בשוק האירופאי כבר החלו להביע עניין"
			this.PopUp.x = 480;
			logoName = "watermelonXY";
			this.PopUp.watermelonXY.visible = true;
			this.PopUp.watermelonXY.x = 580;
			this.PopUp.watermelonXY.y = 10;
		}
		
		this.watermelonBtn.addEventListener("mouseover", watermelonBtn_MouseOverHandler.bind(this));
		function watermelonBtn_MouseOverHandler()
		{this.watermelonBtn.alpha = 1;}
		
		this.watermelonBtn.addEventListener("mouseout", watermelonBtn_MouseOutHandler.bind(this));
		function watermelonBtn_MouseOutHandler()
		{this.watermelonBtn.alpha = 0.01;}
		
		//נמר
		this.namerBtn.addEventListener("click", namerText.bind(this));
		function namerText(event) {
			this.PopUp.H1Txt.text = "נגמ''ש מרכבה, נמ''ר"
			this.PopUp.MainTxt.text = ".הנגמ''ש מבוסס על תובת טנק ה''מרכבה'' הישראלי, עליה מורכבות מערכות ייעודיות לפי הצורך \n" 
		+ "הנגמ''ש תוכנן ככלי רכב קרבי לחי''ר שמצטיין בתכונות של מיגון ועבירות, והוא החלוץ במשפחת כלי הרכב \n"
		+ ".המשוריינים המתוכננים לשמש את חטיבות צה''ל בשדה הקרב המשולב \n\n"
		+ ".הצורך של צה''ל בנגמ''ש עם מיגון כבד התעורר כבר במהלך הלחימה בדרום לבנון בשנות ה-80 של המאה ה-20 \n\n"
		+ ".בנגמ''ש חלל פנימי גדול והוא מיועד לשאת 11 חיילים: שלושה אנשי צוות + שמונה לוחמים ועוד שתי אלונקות \n"
		+ ".על פי משרד הביטחון, זהו הנגמ''ש הממוגן בעולם "
			this.PopUp.x = 480;
			logoName = "namerXY";
			this.PopUp.namerXY.visible = true;
			this.PopUp.namerXY.x = 580;
			this.PopUp.namerXY.y = 10;
		}
		this.namerBtn.addEventListener("mouseover", namerBtn_MouseOverHandler.bind(this));
		function namerBtn_MouseOverHandler()
		{this.namerBtn.alpha = 1;}
		
		this.namerBtn.addEventListener("mouseout", namerBtn_MouseOutHandler.bind(this));
		function namerBtn_MouseOutHandler()
		{this.namerBtn.alpha = 0.01;}
		
		//המצלמה הזעירה בעולם
		this.SmallestCamBtn.addEventListener("click", SmallestCamText.bind(this));
		function SmallestCamText(event) {
			this.PopUp.H1Txt.text = "המצלמה הזעירה בעולם"
			this.PopUp.MainTxt.text = ".חברת מדיגוס מעומר פיתחה מצלמה זעירה הניתנת לשילוב בפרוצדורות רפואיות, באבחונים וטיפולים אנדוסקופיים \n"
		+ ".המצלמה ניתנת לשילוב באנדוסקופ זעיר ויכולה לחדור כמעט לכל מקום בגוף ולמנוע ניתוחים מסובכים \n\n"
		+ ".המצלמה בעלת גודל של 0.99 מילימטר ורזולוציה של 45,000 פיקסלים \n"
		+ ".בנוסף, עלות המצלמה נמוכה בכ-90% מעלותו של סיב בקוטר דומה \n\n"
		+ ".המצלמה מקטינה את מידת הפולשנות של פעולות כירורגיות שונות"
			this.PopUp.x = 480;
			logoName = "SmallestCamXY";
			this.PopUp.SmallestCamXY.visible = true;
			this.PopUp.SmallestCamXY.x = 580;
			this.PopUp.SmallestCamXY.y = 10;
		}
		this.SmallestCamBtn.addEventListener("mouseover", SmallestCamBtn_MouseOverHandler.bind(this));
		function SmallestCamBtn_MouseOverHandler()
		{this.SmallestCamBtn.alpha = 1;}
		
		this.SmallestCamBtn.addEventListener("mouseout", SmallestCamBtn_MouseOutHandler.bind(this));
		function SmallestCamBtn_MouseOutHandler()
		{this.SmallestCamBtn.alpha = 0.01;}
		
		//טעינה אלחוטית
		this.wirelessChargingBtn.addEventListener("click", wirelessChargingText.bind(this));
		function wirelessChargingText(event) {
			this.PopUp.H1Txt.text = "טעינה אלחוטית"
			this.PopUp.MainTxt.text = ".Duracell Powermat "
		+ "בשנת 2009 פותח הדור הראשון של המטענים האלחוטיים ע''י חברת \n\n"
		+ ":המטען מורכב משלושה חלקים נפרדים \n"
		+ ".משטח הטעינה - משמש כספק הכוח האלחוטי המתחבר לשקע חשמלי רגיל ומטעין את המכשיר הנייד המונח עליו \n"
		+ ".נרתיק ההטענה המתלבש על המכשיר הסלולרי - מאפשר את פעולת ההטענה \n"
		+ ".סוללת גיבוי - מספקת למשתמש את היכולת להטעין את המכשיר, גם אם אינו נמצא ליד משטח ההטענה המקורי \n\n"
		+ ",מנכ''ל החברה, רן פוליאקין אמר כי למרות שהסמארטפונים הם אלחוטיים \n"
		+ " .המשתמשים קשורים לקיר כאשר הם צריכים להטעין אותם – אך בזכות היוזמה, המכשיר הנייד יהיה נייד באמת "
			this.PopUp.x = 480;
			logoName = "wirelessChargingXY";
			this.PopUp.wirelessChargingXY.visible = true;
			this.PopUp.wirelessChargingXY.x = 600;
			this.PopUp.wirelessChargingXY.y = 40;
		}
		this.wirelessChargingBtn.addEventListener("mouseover", wirelessChargingBtn_MouseOverHandler.bind(this));
		function wirelessChargingBtn_MouseOverHandler()
		{this.wirelessChargingBtn.alpha = 1;}
		
		this.wirelessChargingBtn.addEventListener("mouseout", wirelessChargingBtn_MouseOutHandler.bind(this));
		function wirelessChargingBtn_MouseOutHandler()
		{this.wirelessChargingBtn.alpha = 0.01;}
		
		//עט המזהה חומר נפץ מאולתר
		this.panIdemifyTATPBtn.addEventListener("click", panIdemifyTATPText.bind(this));
		function panIdemifyTATPText(event) {
			this.PopUp.H1Txt.text = "עט המזהה חומר נפץ מאולתר"
			this.PopUp.MainTxt.text = ".פרופסור אהוד קינן, דיקאן הפקולטה לכימיה בטכניון פיתח מכשיר דמוי עט אשר מזהה את חומרי נפץ מאולתרים \n"
		+ ".המכשיר מורכב משלושה לחצנים אשר משחררים תמיסות כימיות המשנות צבען במגע עם החומר החשוד \n\n"
		+ "(TATP) ארגוני חבלה שונים בעולם משתמשים בחומרי נפץ ממשפחת הפראוקסידים \n " 
		+ ".מכיוון שקל יחסית להכין אותם וקשה לגלות אותם \n\n"
		+ "פרופסור קינן ביצע מחקר יחד עם חוקרים מהטכניון, מהאוניברסיטה העברית ומהקריה למחקר גרעיני בנגב וגילה כי \n"
		+ ",בניגוד לחומרי נפץ קונבנציונאליים, חומרי הנפץ הפראוקסידים אינם משחררים חום בעת פיצוץ \n"
		+ ".לכן מכשירים המזהים חומרי נפץ קונבנציונאליים לא יכולים לזהות חומרי נפץ ממשפחת הפראוקסידים \n\n"
		+ ".בעקבות פיתוח המכשיר, פרופסור קינן קיבל את הפרס הראשון, בתחרות פיתוח טכנולוגיות הגנה מפני טרור "
			this.PopUp.x = 480;
			logoName = "panIdemifyTATPXY";
			this.PopUp.panIdemifyTATPXY.visible = true;
			this.PopUp.panIdemifyTATPXY.x = 600;
			this.PopUp.panIdemifyTATPXY.y = 40;
		}
		
		this.panIdemifyTATPBtn.addEventListener("mouseover", panIdemifyTATPBtn_MouseOverHandler.bind(this));
		function panIdemifyTATPBtn_MouseOverHandler()
		{this.panIdemifyTATPBtn.alpha = 1;}
		
		this.panIdemifyTATPBtn.addEventListener("mouseout", panIdemifyTATPBtn_MouseOutHandler.bind(this));
		function panIdemifyTATPBtn_MouseOutHandler()
		{this.panIdemifyTATPBtn.alpha = 0.01;}
		
		//מקלדת לייזר
		this.LaserkeyboardBtn.addEventListener("click", LaserkeyboardText.bind(this));
		function LaserkeyboardText(event) {
			this.PopUp.H1Txt.text = "מקלדת לייזר"
			this.PopUp.MainTxt.text = ".lumio בשנת 2002 הושקה מקלדת הלייזר הראשונה ע''י עמיחי טורם ובועז ארנון מחברת\n\n"
		+ " ההמצאה כוללת מקלדת לייזר וירטואלית הבנויה מטכנולוגיה שמקרינה מקלדת ומאפשרת להקליד\n"
		+ ".ללא שימוש במקשים, על גבי קיר או שולחן\n"
		+ ".הקרנת ההולוגרמה של המקלדת על גבי כל משטח ישר מאפשרת את הנוחות של הקלדה במקלדת רגילה\n"
		+ ".BlueTooth בנוסף פותח מוצר קומפקטי נישא המתחבר לטלפונים חכמים באמצעות התקן\n\n"
		+ "בשנת 2007 זכתה המקלדת המוקרנת לתואר 'ההמצאה הטובה ביותר' כחלק מתערוכת האלקטרוניקה הנחשבת\n" 
		+ ".CES והגדולה בעולם, תערוכת ה"
			this.PopUp.x = 480;
			logoName = "LaserkeyboardXY";
			this.PopUp.LaserkeyboardXY.visible = true;
			this.PopUp.LaserkeyboardXY.x = 600;
			this.PopUp.LaserkeyboardXY.y = 40;
		}
		
		this.LaserkeyboardBtn.addEventListener("mouseover", LaserkeyboardBtn_MouseOverHandler.bind(this));
		function LaserkeyboardBtn_MouseOverHandler()
		{this.LaserkeyboardBtn.alpha = 1;}
		
		this.LaserkeyboardBtn.addEventListener("mouseout", LaserkeyboardBtn_MouseOutHandler.bind(this));
		function LaserkeyboardBtn_MouseOutHandler()
		{this.LaserkeyboardBtn.alpha = 0.01;}
		
		//פרס נובל עבור גילוי היוביקוויטין
		this.nobel1Btn.addEventListener("click", nobel1Text.bind(this));
		function nobel1Text(event) {
			this.PopUp.H1Txt.text = "פרס נובל עבור גילוי היוביקוויטין"
			this.PopUp.MainTxt.text = ".היוביקוויטין הוא חלבון הפועל בכל התאים האיקריטיום, ומשמש את התא לסימון חלבונים שנועדו לפירוק \n"
		+ "מטרת המערכת היא לפרק חלבונים תקינים בעלי אורך חיים קצר, שסיימו את תפקידם או חלבונים חריגים בעלי קיפול \n"
		+ ".לא נכון, לשם הבטחת תפקודו התקין של התא \n"
		+".זיהוי החלבונים שיש לפרק נעשה בעיקר על-פי שינויים במבנה המרחבי שלהם \n\n"
		+ "פרס נובל בכימיה לשנת 2004 ניתן לפרופסורים אהרון צ'חנובר ואברהם הרשקו מהטכניון בחיפה ופרופ' ואירווין רוז \n" 
		+ " מאוניברסיטת קליפורניה בארה''ב, על תרומתם לפיצוח מנגנון שבאמצעותו התא יכול לווסת את נוכחותם של חלבונים \n"
		+ ".מסוימים וזאת על ידי סימון חלבונים לא רצויים ב''תווית'' המורכבת מפולי פפטיד המכונה יוביקוויטין \n\n"
		+ " בעזרת התגלית האירו החוקרים את התהליך המולקולרי שבאמצעותו התא מבקר מספר תהליכים ביוכימיים חשובים \n"
		+ ".DNA "
		+ "כמו העתקת גנים ובדיקות איכות של חלבונים חדשים בתא, מעגל התא ותיקון \n"
		+".הדבר תרם גם להבנה של תפקידי מערכת החיסון בתא \n"
		+".פגמים במערכת זו יכולים להוביל למחלות שונות, כולל סוגים שונים של סרטן "
			this.PopUp.x = 480;
			logoName = "nobel1XY";
			this.PopUp.nobel1XY.visible = true;
			this.PopUp.nobel1XY.x = 600;
			this.PopUp.nobel1XY.y = 40;
		}
		
		this.nobel1Btn.addEventListener("mouseover", nobel1Btn_MouseOverHandler.bind(this));
		function nobel1Btn_MouseOverHandler()
		{this.nobel1Btn.alpha = 1;}
		
		this.nobel1Btn.addEventListener("mouseout", nobel1Btn_MouseOutHandler.bind(this));
		function nobel1Btn_MouseOutHandler()
		{this.nobel1Btn.alpha = 0.01;}
		
		//פרס נובל עבור פיענוח מבנה הריבוזום
		this.nobel2Btn.addEventListener("click", nobel2Text.bind(this));
		function nobel2Text(event) {
			this.PopUp.H1Txt.text = "פרס נובל עבור פיענוח מבנה הריבוזום"
			this.PopUp.MainTxt.text = ".לאחר יותר מ- 30 שנות מחקר פרופסור עדה יונת פיתחה שיטות מתוחכמות לפענוח מבנה הריבוזום \n\n"
		+ ".הריבוזום הוא מבנה תוך-תאי המצוי בתאי כלל היצורים החיים המוכרים כיום למדע ואחראי ליצירת החלבונים בתא \n"
		+ ".מאחר והחיים המוכרים לנו מבוססים על פעולת חלבונים, לריבוזום יש חשיבות מכרעת על חיי התא והאורגניזם כולו \n"
		+ ".בכל אחד מתאי גוף האדם כמיליון ריבוזומים, ובתאי הכבד - כחמישה מיליון \n\n"
		+ "הפעלת השיטה על הריבוזומים נחשבה כקשה ואף בלתי אפשרית עקב גודלם, מורכבותם הפנימית, גמישותם \n"
		+ ".וחוסר יציבותם, שהקשו על גיבושם לגביש ועל ביצוע המדידות הקריסטלוגרפיות \n\n"
		+ "הצלחתה של פרופסור עדה יונת אפשרה בין השאר פיתוח תרופות אנטיביוטיות \n"
		+ ".וב- 10.12.2009 קיבלה פרס נובל לכימיה "
			this.PopUp.x = 480;
			logoName = "nobel1XY";
			this.PopUp.nobel1XY.visible = true;
			this.PopUp.nobel1XY.x = 600;
			this.PopUp.nobel1XY.y = 40;
		}
		
		this.nobel2Btn.addEventListener("mouseover", nobel2Btn_MouseOverHandler.bind(this));
		function nobel2Btn_MouseOverHandler()
		{this.nobel2Btn.alpha = 1;}
		
		this.nobel2Btn.addEventListener("mouseout", nobel2Btn_MouseOutHandler.bind(this));
		function nobel2Btn_MouseOutHandler()
		{this.nobel2Btn.alpha = 0.01;}
		
		
		//eyeMusic
		this.eyeMusicBtn.addEventListener("click", eyeMusicText.bind(this));
		function eyeMusicText(event) {
			this.PopUp.H1Txt.text = "EyeMusic"
			this.PopUp.MainTxt.text = ".הוא כלי טכנולוגי המספק מידע חזותי באמצעות חוויה שמיעתית מוזיקלית "
		+ "EyeMusic \n"
		+ ".הטכנולוגיה פותחה ע''י מעבדתו של אמיר עמדי מהאוניברסיטה העברית בירושלים \n\n"
		+ "הטכנולוגיה כוללת מצלמה זעירה המוטמעת על משקפיים ומתרגמת את המידע החזותי \n"
		+ ".בסביבה לצלילים באמצעות אלגוריתמים שפיתח אמיר עמדי \n"
		+ ",בעזרת המשקפיים עיוורים יכולים לזהות אותיות אלפביתיות \n"
		+ " .לראות'' תמונות של בעלי חיים ואפילו למצוא חפץ (לדוגמה: נעליים או אדם) בנוף חזותי מורחב'' \n\n"
		+ ".נמכר ב- 9,579,236$"
		+ " EyeMusic " 
			this.PopUp.x = 480;
			logoName = "eyeMusicXY";
			this.PopUp.eyeMusicXY.visible = true;
			this.PopUp.eyeMusicXY.x = 600;
			this.PopUp.eyeMusicXY.y = 40;
		}
		
		this.eyeMusicBtn.addEventListener("mouseover", eyeMusicBtn_MouseOverHandler.bind(this));
		function eyeMusicBtn_MouseOverHandler()
		{this.eyeMusicBtn.alpha = 1;}
		
		this.eyeMusicBtn.addEventListener("mouseout", eyeMusicBtn_MouseOutHandler.bind(this));
		function eyeMusicBtn_MouseOutHandler()
		{this.eyeMusicBtn.alpha = 0.01;}
		
		
		//מזרק ללקיחת דם מפגים
		this.syringeBtn.addEventListener("click", syringeText.bind(this));
		function syringeText(event) {
			this.PopUp.H1Txt.text = "מזרק ללקיחת דם מפגים"
			this.PopUp.MainTxt.text = "(פרופסור עמי באלין (יזם הפרויקט ומנהל מחלקת ילדים בבית החולים וולפסון \n"
		+ " Erythrosave "
		+" ודב סלומון (מהנדס במקצועו) מחברת \n"
		+ ".פיתחו התקן הלוקח מהפג את החומר הדרוש לבדיקת דם ומחזיר מיידית את כדוריות הדם האדומות לתינוק \n\n"
		+ ".פגים רבים סובלים כיום מאנמיה, המתפתחת אצלם כתוצאה מלקיחת דמים מספר פעמים ביום \n"
		+ ".המזרק החדשני מאפשר להקטין באופן משמעותי את ממדי התופעה \n\n"
		+ ".ההתקן החדש חוסך אלפי דולרים לכל פגיה מידי חודש \n"
		+ ",ההתקן כרגע משווק באירופה ובארה''ב בלבד \n"
		+ ".בשל חוסר היענות של בתי חולים מישראל לפיתוח החדשני "
			this.PopUp.x = 480;
			logoName = "syringeXY";
			this.PopUp.syringeXY.visible = true;
			this.PopUp.syringeXY.x = 600;
			this.PopUp.syringeXY.y = 40;
		}
		
		this.syringeBtn.addEventListener("mouseover", syringeBtn_MouseOverHandler.bind(this));
		function syringeBtn_MouseOverHandler()
		{this.syringeBtn.alpha = 1;}
		
		this.syringeBtn.addEventListener("mouseout", syringeBtn_MouseOutHandler.bind(this));
		function syringeBtn_MouseOutHandler()
		{this.syringeBtn.alpha = 0.01;}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(53));

	// Layer 2
	this.PopUp = new lib.PopUp();
	this.PopUp.parent = this;
	this.PopUp.setTransform(1418.4,661.9,1,1,0,0,0,320.9,167);

	this.timeline.addTween(cjs.Tween.get(this.PopUp).wait(53));

	// Layer 1
	this.eyeTest = new lib.eyeMusicBtn();
	this.eyeTest.parent = this;
	this.eyeTest.setTransform(873.5,187);

	this.eyeMusicBtn = new lib.eyeMusicBtn();
	this.eyeMusicBtn.parent = this;
	this.eyeMusicBtn.setTransform(574.7,340.5,0.638,0.652);
	this.eyeMusicBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.eyeMusicBtn, 0, 1, 1);

	this.syringeBtn = new lib.syringeBtn();
	this.syringeBtn.parent = this;
	this.syringeBtn.setTransform(497.9,412);
	this.syringeBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.syringeBtn, 0, 1, 1);

	this.ResetBtn = new lib.ResetBtn();
	this.ResetBtn.parent = this;
	this.ResetBtn.setTransform(900.1,95,0.16,0.171,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.ResetBtn, 0, 1, 1);

	this.InstructionsBtn = new lib.InstructionsBtn();
	this.InstructionsBtn.parent = this;
	this.InstructionsBtn.setTransform(845,95,0.21,0.223);
	new cjs.ButtonHelper(this.InstructionsBtn, 0, 1, 1);

	this.instance = new lib.headline();
	this.instance.parent = this;
	this.instance.setTransform(478.2,22.9,1,1,0,0,0,473.2,23.9);

	this.PopUp_1 = new lib.PopUp();
	this.PopUp_1.parent = this;
	this.PopUp_1.setTransform(1418.4,301,1,1,0,0,0,320.9,167);

	this.SmallestCamGbtn = new lib.SmallestCamGBtn();
	this.SmallestCamGbtn.parent = this;
	this.SmallestCamGbtn.setTransform(1483.2,363.9);
	this.SmallestCamGbtn.visible = false;
	new cjs.ButtonHelper(this.SmallestCamGbtn, 0, 1, 1);

	this.instance_1 = new lib.machtEroyGBtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1365.7,290.4,1.058,1.038);
	this.instance_1.visible = false;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.nobel2Btn = new lib.nobel2Btn();
	this.nobel2Btn.parent = this;
	this.nobel2Btn.setTransform(508,439.5);
	this.nobel2Btn.alpha = 0.012;
	new cjs.ButtonHelper(this.nobel2Btn, 0, 1, 1);

	this.LaserkeyboardBtn = new lib.LaserkeyboardBtn();
	this.LaserkeyboardBtn.parent = this;
	this.LaserkeyboardBtn.setTransform(490,464.9);
	this.LaserkeyboardBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.LaserkeyboardBtn, 0, 1, 1);

	this.nobel1Btn = new lib.nobel1Btn();
	this.nobel1Btn.parent = this;
	this.nobel1Btn.setTransform(331.4,316);
	this.nobel1Btn.alpha = 0.012;
	new cjs.ButtonHelper(this.nobel1Btn, 0, 1, 1);

	this.panIdemifyTATPBtn = new lib.panIdemifyTATPBtn();
	this.panIdemifyTATPBtn.parent = this;
	this.panIdemifyTATPBtn.setTransform(294.5,254.5);
	this.panIdemifyTATPBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.panIdemifyTATPBtn, 0, 1, 1);

	this.namerBtn = new lib.namerBtn();
	this.namerBtn.parent = this;
	this.namerBtn.setTransform(264.5,205.5);
	this.namerBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.namerBtn, 0, 1, 1);

	this.SmallestCamBtn = new lib.SmallestCam_1();
	this.SmallestCamBtn.parent = this;
	this.SmallestCamBtn.setTransform(595.5,258,0.652,0.652,0,0,0,0.1,0);
	this.SmallestCamBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.SmallestCamBtn, 0, 1, 1);

	this.wirelessChargingBtn = new lib.wirelessChargingBtn();
	this.wirelessChargingBtn.parent = this;
	this.wirelessChargingBtn.setTransform(531,413.5);
	this.wirelessChargingBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.wirelessChargingBtn, 0, 1, 1);

	this.machtEroyBtn = new lib.machtEroyBtn();
	this.machtEroyBtn.parent = this;
	this.machtEroyBtn.setTransform(630.5,412.5,0.652,0.638);
	this.machtEroyBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.machtEroyBtn, 0, 1, 1);

	this.InsulinpumpBtn = new lib.InsulinpumpBtn();
	this.InsulinpumpBtn.parent = this;
	this.InsulinpumpBtn.setTransform(691.5,153,0.625,0.625,0,0,0,0.1,0.1);
	this.InsulinpumpBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.InsulinpumpBtn, 0, 1, 1);

	this.watermelonBtn = new lib.watermelonBtn();
	this.watermelonBtn.parent = this;
	this.watermelonBtn.setTransform(327.5,153,0.588,0.566,0,0,0,0.1,0);
	this.watermelonBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.watermelonBtn, 0, 1, 1);

	this.WazeBtn = new lib.WazeBtn();
	this.WazeBtn.parent = this;
	this.WazeBtn.setTransform(454.5,84.3,0.612,0.6,0,0,0,0.3,0.3);
	this.WazeBtn.alpha = 0.012;
	new cjs.ButtonHelper(this.WazeBtn, 0, 1, 1);

	this.s10 = new lib.s10();
	this.s10.parent = this;
	this.s10.setTransform(855.2,566.4);
	new cjs.ButtonHelper(this.s10, 0, 1, 2);

	this.s00 = new lib.s00();
	this.s00.parent = this;
	this.s00.setTransform(739.2,566.4);
	new cjs.ButtonHelper(this.s00, 0, 1, 2);

	this.s90 = new lib.s90();
	this.s90.parent = this;
	this.s90.setTransform(623.2,566.4);
	new cjs.ButtonHelper(this.s90, 0, 1, 2);

	this.s80 = new lib.s80();
	this.s80.parent = this;
	this.s80.setTransform(508.2,566.4);
	new cjs.ButtonHelper(this.s80, 0, 1, 2);

	this.s70 = new lib.s70();
	this.s70.parent = this;
	this.s70.setTransform(391.3,566.4);
	new cjs.ButtonHelper(this.s70, 0, 1, 2);

	this.s60 = new lib.s60();
	this.s60.parent = this;
	this.s60.setTransform(276.3,566.4);
	new cjs.ButtonHelper(this.s60, 0, 1, 2);

	this.s50 = new lib.s50();
	this.s50.parent = this;
	this.s50.setTransform(160.3,566.4);
	new cjs.ButtonHelper(this.s50, 0, 1, 2, false, new lib.s50(), 3);

	this.s40 = new lib.s40();
	this.s40.parent = this;
	this.s40.setTransform(44.3,569.4);
	new cjs.ButtonHelper(this.s40, 0, 1, 2, false, new lib.s40(), 3);

	this.instance_2 = new lib.starBlue();
	this.instance_2.parent = this;
	this.instance_2.setTransform(107,45,0.448,0.432);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("EA98gB0IAAD+EAr1gB0IAAD+EgungBqIAAD+A8hhqIAAD+EBJ4gCYMiH5AAAIrWAAIggAAEhAtgBlIAAD+AHphqIAAD+AZwhqIAAD+AqbhqIAAD+");
	this.shape.setTransform(480.6,574);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("EhLHAvBIAAobMCWOAAAIAAIbgEhAvAtDIAAkAgEAZtAs+IAAkAgEAHnAs+IAAkAgEgKdAs+IAAkAgEgcjAs+IAAkAgEgupAs+IAAkAgEA95As0IAAkAgEArzAs0IAAkAgEhJZAoQILWAAMCH4AAAMiH4AAAIrWAAIggAAgEhLHgoEIAAm8MCWOAAAIAAG8g");
	this.shape_1.setTransform(480.8,301);

	this.ForNotAllowed = new lib.ForNotAllowed();
	this.ForNotAllowed.parent = this;
	this.ForNotAllowed.setTransform(472.3,310.2,1,1.815,0,0,0,288.9,125.2);
	this.ForNotAllowed.alpha = 0.012;
	new cjs.ButtonHelper(this.ForNotAllowed, 0, 1, 1);

	this.text = new cjs.Text("עמוד בפיתוח", "bold 28px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 34;
	this.text.lineWidth = 193;
	this.text.parent = this;
	this.text.setTransform(548.7,327);

	this.instance_3 = new lib.Asset6100x();
	this.instance_3.parent = this;
	this.instance_3.setTransform(395,188,0.481,0.481);

	this.instance_4 = new lib.graybtn();
	this.instance_4.parent = this;
	this.instance_4.setTransform(70.4,-95.7,0.981,1.4,0,0,0,0,-470.6);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance_5 = new lib.starBlue40();
	this.instance_5.parent = this;
	this.instance_5.setTransform(107,45,0.448,0.432);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("EhLHAvBIAAobMCWOAAAIAAIbgEhAvAtDIAAkAgEAZtAs+IAAkAgEAHnAs+IAAkAgEgKdAs+IAAkAgEgcjAs+IAAkAgEgupAs+IAAkAgEA95As0IAAkAgEArzAs0IAAkAgEhJZAoQILWAAMCH4AAAMiH4AAAIrWAAIggAAgEhLHgoFIAAm7MCWOAAAIAAG7g");
	this.shape_2.setTransform(480.8,301);

	this.instance_6 = new lib.starBlue50();
	this.instance_6.parent = this;
	this.instance_6.setTransform(107,45,0.448,0.432);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("EhLHAvBIAAobMCWOAAAIAAIbgEhAvAtDIAAkAgEAZtAs+IAAkAgEAHnAs+IAAkAgEgKdAs+IAAkAgEgcjAs+IAAkAgEgupAs+IAAkAgEA95As0IAAkAgEArzAs0IAAkAgEhJZAoQILWAAMCH4AAAMiH4AAAIrWAAIggAAgEhLHgoFIAAm7MAnAAAAIAAAAMBvOAAAIAAG7g");
	this.shape_3.setTransform(480.8,301);

	this.instance_7 = new lib.starBlue60();
	this.instance_7.parent = this;
	this.instance_7.setTransform(107,45,0.448,0.432);

	this.instance_8 = new lib.starBlue70();
	this.instance_8.parent = this;
	this.instance_8.setTransform(107,45,0.448,0.432);

	this.instance_9 = new lib.starBlue80();
	this.instance_9.parent = this;
	this.instance_9.setTransform(107,45,0.448,0.432);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("EhLHAvBIAAobMCWOAAAIAAIbgEhAvAtDIAAkBgEAZtAs+IAAkAgEAHnAs+IAAkAgEgKdAs+IAAkAgEgcjAs+IAAkAgEgupAs+IAAkAgEA95As0IAAkAgEArzAs0IAAkAgEhJZAoQILWAAMCH4AAAMiH4AAAIrWAAIggAAgEhLHgoFIAAm7MCWOAAAIAAG7g");
	this.shape_4.setTransform(480.8,301);

	this.instance_10 = new lib.starBlue90();
	this.instance_10.parent = this;
	this.instance_10.setTransform(107,45,0.448,0.432);

	this.instance_11 = new lib.starBlue00();
	this.instance_11.parent = this;
	this.instance_11.setTransform(107,45,0.448,0.432);

	this.instance_12 = new lib.starBlue10();
	this.instance_12.parent = this;
	this.instance_12.setTransform(107,45,0.448,0.432);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(7,1,1).p("EgungBqIAAD+A8hhqIAAD+EBJ4gCYMiH5AAAIrWAAIggAAEhAtgBlIAAD+AHphqIAAD+AZwhqIAAD+AqbhqIAAD+EA98gB0IAAD+EAr1gB0IAAD+");
	this.shape_5.setTransform(480.6,574);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("EhLHAw3IAAobMCWOAAAIAAIbgEhAvAu5IAAkAgEAZtAu0IAAkAgEAHnAu0IAAkAgEgKdAu0IAAkAgEgcjAu0IAAkAgEgupAu0IAAkAgEA95AuqIAAkAgEArzAuqIAAkAgEhJZAqGILWAAMCH4AAAMiH4AAAIrWAAIggAAgEhLHgmOIAAqoMCWOAAAIAAKog");
	this.shape_6.setTransform(480.8,289.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.s40},{t:this.s50},{t:this.s60},{t:this.s70},{t:this.s80},{t:this.s90},{t:this.s00},{t:this.s10},{t:this.WazeBtn,p:{regX:0.3,regY:0.3,x:454.5,y:84.3,alpha:0.012}},{t:this.watermelonBtn,p:{regX:0.1,regY:0,scaleX:0.588,scaleY:0.566,x:327.5,y:153,alpha:0.012}},{t:this.InsulinpumpBtn,p:{regX:0.1,regY:0.1,x:691.5,y:153,alpha:0.012}},{t:this.machtEroyBtn,p:{regX:0,regY:0,x:630.5,y:412.5,alpha:0.012}},{t:this.wirelessChargingBtn,p:{regX:0,regY:0,x:531,y:413.5,alpha:0.012}},{t:this.SmallestCamBtn,p:{regX:0.1,regY:0,x:595.5,y:258,alpha:0.012}},{t:this.namerBtn,p:{regX:0,regY:0,x:264.5,y:205.5,alpha:0.012}},{t:this.panIdemifyTATPBtn,p:{regX:0,regY:0,x:294.5,y:254.5,alpha:0.012}},{t:this.nobel1Btn,p:{regX:0,regY:0,x:331.4,y:316,alpha:0.012}},{t:this.LaserkeyboardBtn,p:{regX:0,regY:0,x:490,y:464.9,alpha:0.012}},{t:this.nobel2Btn,p:{regX:0,regY:0,x:508,y:439.5,alpha:0.012}},{t:this.instance_1,p:{x:1365.7,y:290.4}},{t:this.SmallestCamGbtn,p:{x:1483.2,y:363.9}},{t:this.PopUp_1,p:{x:1418.4,y:301}},{t:this.instance},{t:this.InstructionsBtn},{t:this.ResetBtn},{t:this.syringeBtn,p:{regX:0,regY:0,x:497.9,y:412,alpha:0.012}},{t:this.eyeMusicBtn},{t:this.eyeTest,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:873.5,y:187}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance_5},{t:this.instance_4,p:{x:70.4,y:-95.7}},{t:this.s40},{t:this.s50},{t:this.s60},{t:this.s70},{t:this.s80},{t:this.s90},{t:this.s00},{t:this.s10},{t:this.instance},{t:this.InstructionsBtn},{t:this.ResetBtn},{t:this.instance_3,p:{y:188}},{t:this.text,p:{x:548.7,y:327}},{t:this.ForNotAllowed,p:{regX:288.9,regY:125.2,scaleY:1.815,x:472.3,y:310.2}}]},4).to({state:[{t:this.shape_3},{t:this.shape},{t:this.instance_6},{t:this.s40},{t:this.instance_4,p:{x:186.2,y:-95.1}},{t:this.s50},{t:this.s60},{t:this.s70},{t:this.s80},{t:this.s90},{t:this.s00},{t:this.s10},{t:this.instance},{t:this.InstructionsBtn},{t:this.ResetBtn},{t:this.instance_3,p:{y:190}},{t:this.text,p:{x:548.2,y:329.1}},{t:this.ForNotAllowed,p:{regX:289,regY:125.1,scaleY:1.911,x:484.9,y:302.1}}]},5).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance_7},{t:this.s40},{t:this.s50},{t:this.instance_4,p:{x:302,y:-94.6}},{t:this.s60},{t:this.s70},{t:this.s80},{t:this.s90},{t:this.s00},{t:this.s10},{t:this.instance},{t:this.InstructionsBtn},{t:this.ResetBtn},{t:this.instance_3,p:{y:188}},{t:this.text,p:{x:548.7,y:327.3}},{t:this.ForNotAllowed,p:{regX:289,regY:125.1,scaleY:1.911,x:472.4,y:302}}]},5).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance_8},{t:this.s40},{t:this.s50},{t:this.s60},{t:this.instance_4,p:{x:419.5,y:-95.9}},{t:this.s70},{t:this.s80},{t:this.s90},{t:this.s00},{t:this.s10},{t:this.instance},{t:this.InstructionsBtn},{t:this.ResetBtn},{t:this.instance_3,p:{y:188}},{t:this.text,p:{x:548.7,y:327.3}},{t:this.ForNotAllowed,p:{regX:289,regY:125.1,scaleY:1.911,x:472.4,y:300}}]},5).to({state:[{t:this.shape_4},{t:this.shape},{t:this.s40},{t:this.s50},{t:this.s60},{t:this.s70},{t:this.instance_4,p:{x:533.6,y:-95.8}},{t:this.s80},{t:this.s90},{t:this.s00},{t:this.s10},{t:this.instance_9},{t:this.instance},{t:this.InstructionsBtn},{t:this.ResetBtn},{t:this.instance_3,p:{y:188}},{t:this.text,p:{x:548.7,y:326.8}},{t:this.ForNotAllowed,p:{regX:289,regY:125.1,scaleY:1.911,x:471.2,y:302}}]},5).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance_10},{t:this.s40},{t:this.s50},{t:this.s60},{t:this.s70},{t:this.s80},{t:this.instance_4,p:{x:649.9,y:-95.8}},{t:this.s90},{t:this.s00},{t:this.s10},{t:this.instance},{t:this.InstructionsBtn},{t:this.ResetBtn},{t:this.instance_3,p:{y:188}},{t:this.text,p:{x:548.8,y:326.7}},{t:this.ForNotAllowed,p:{regX:289,regY:125.1,scaleY:1.911,x:468.2,y:300}}]},5).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance_11},{t:this.s40},{t:this.s50},{t:this.s60},{t:this.s70},{t:this.s80},{t:this.s90},{t:this.instance_4,p:{x:766.9,y:-95.8}},{t:this.s00},{t:this.s10},{t:this.WazeBtn,p:{regX:4.4,regY:10.1,x:457.7,y:89.6,alpha:1}},{t:this.watermelonBtn,p:{regX:25.5,regY:26.7,scaleX:0.608,scaleY:0.585,x:342.4,y:168.4,alpha:1}},{t:this.InsulinpumpBtn,p:{regX:24,regY:24.1,x:706.5,y:168.5,alpha:1}},{t:this.machtEroyBtn,p:{regX:23.1,regY:23.5,x:645.3,y:428.5,alpha:1}},{t:this.instance_1,p:{x:1327.9,y:286.5}},{t:this.SmallestCamBtn,p:{regX:23.1,regY:23.1,x:608.2,y:271.5,alpha:1}},{t:this.SmallestCamGbtn,p:{x:1445.4,y:360}},{t:this.namerBtn,p:{regX:15,regY:15,x:280,y:221,alpha:1}},{t:this.wirelessChargingBtn,p:{regX:15,regY:15,x:546,y:428,alpha:1}},{t:this.panIdemifyTATPBtn,p:{regX:15,regY:15,x:310,y:270,alpha:1}},{t:this.LaserkeyboardBtn,p:{regX:15,regY:15,x:505,y:480,alpha:1}},{t:this.nobel1Btn,p:{regX:15,regY:-45,x:346.5,y:271.5,alpha:1}},{t:this.nobel2Btn,p:{regX:15.5,regY:15,x:523.5,y:454,alpha:1}},{t:this.PopUp_1,p:{x:1380.6,y:297}},{t:this.instance},{t:this.InstructionsBtn},{t:this.ResetBtn},{t:this.eyeTest,p:{regX:23.6,regY:23.1,scaleX:0.638,scaleY:0.652,x:589.3,y:355.5}},{t:this.syringeBtn,p:{regX:15,regY:15,x:513,y:428,alpha:1}}]},5).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance_12},{t:this.s40},{t:this.s50},{t:this.s60},{t:this.s70},{t:this.s80},{t:this.s90},{t:this.s00},{t:this.instance_4,p:{x:882,y:-95.9}},{t:this.s10},{t:this.instance},{t:this.InstructionsBtn},{t:this.ResetBtn},{t:this.instance_3,p:{y:188}},{t:this.text,p:{x:548.3,y:326.2}},{t:this.ForNotAllowed,p:{regX:289,regY:125.1,scaleY:1.911,x:470.4,y:298}}]},5).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.s40},{t:this.s50},{t:this.s60},{t:this.s70},{t:this.s80},{t:this.s90},{t:this.s00},{t:this.s10}]},5).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,299,1744.3,834.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;