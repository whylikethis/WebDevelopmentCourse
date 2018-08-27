(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Aliens_itai.einati_atlas_P_", frames: [[1154,3902,284,140],[1892,2778,142,485],[837,3491,315,508],[0,0,1245,1694],[0,2778,1207,711],[0,3491,835,522],[0,1696,1920,1080],[1583,2778,307,1122],[1209,2778,372,1122],[1247,0,1007,1376]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



(lib.space3 = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,852,480);


(lib.replayy01pngcopy = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.replayy02pngcopy = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.space1 = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.space2 = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.talldude = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.סקוטשש = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.אישהזקנהשמאל0202 = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.אישהזקנהימין0303 = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.אישהזקנה05 = function() {
	this.spriteSheet = ss["Aliens_itai.einati_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#786364").ss(1.5).p("ACNAAQAAA8gpAqQgqArg6AAQg5AAgqgrQgpgqAAg8QAAg7ApgqQAqgrA5AAQA6AAAqArQApAqAAA7g");
	this.shape.setTransform(14.8,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E2D9").s().p("AhiBmQgqgqAAg8QAAg7AqgqQApgrA5AAQA6AAAqArQApAqAAA7QAAA8gpAqQgqArg6AAQg5AAgpgrg");
	this.shape_1.setTransform(14.8,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(-0.2,-0.6,30.1,31.8), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#786364").ss(1.5).p("ACOAAQAAA8gqArQgpAqg7AAQg6AAgpgqQgqgrAAg8QAAg7AqgqQApgrA6AAQA7AAApArQAqAqAAA7g");
	this.shape.setTransform(14.9,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E2D9").s().p("AhjBnQgqgrAAg8QAAg7AqgqQApgrA6AAQA7AAApArQAqAqAAA7QAAA8gqArQgpAqg7AAQg6AAgpgqg");
	this.shape_1.setTransform(14.9,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(-0.2,-0.2,30.4,31), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#786364").ss(1.5).p("ACOAAQAAA8gqAqQgpArg7AAQg6AAgpgrQgqgqAAg8QAAg7AqgqQApgrA6AAQA7AAApArQAqAqAAA7g");
	this.shape.setTransform(14.9,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E2D9").s().p("AhjBmQgqgqAAg8QAAg7AqgqQApgrA6AAQA7AAApArQAqAqAAA7QAAA8gqAqQgpArg7AAQg6AAgpgrg");
	this.shape_1.setTransform(14.9,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(-0.2,-0.2,30.4,31), null);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.talldude();
	this.instance.parent = this;
	this.instance.setTransform(366.4,-229,0.877,0.877,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.3,-229,732.7,458);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.talldude();
	this.instance.parent = this;
	this.instance.setTransform(366.4,-229,0.877,0.877,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.3,-229,732.7,458);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.space1();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,-216,0.051,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-216,63.1,432);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.space1();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,-216,0.051,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-216,63.1,432);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.space3();
	this.instance.parent = this;
	this.instance.setTransform(-106.9,-54,0.753,0.771);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.9,-54,214,108);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.space3();
	this.instance.parent = this;
	this.instance.setTransform(-106.9,-54,0.753,0.771);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.9,-54,214,108);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.space1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.156,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,193.9,448.5), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.space1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.051,0.255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,63.1,432), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.אישהזקנהימין0303();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.274,0.258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,101.9,289.2), null);


(lib.REplayR2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.replayy02pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.392,0.445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.REplayR2, new cjs.Rectangle(0,0,123.5,226.2), null);


(lib.REplayL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.replayy01pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.392,0.445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.REplayL, new cjs.Rectangle(0,0,55.7,216), null);


(lib.old_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.אישהזקנהשמאל0202();
	this.instance.parent = this;
	this.instance.setTransform(-44.2,-141.7,0.288,0.253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.old_L, new cjs.Rectangle(-44.2,-141.7,88.5,283.6), null);


(lib.אלפסיסטיתת = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.141,1,0,0,180);

	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.99},0).wait(1).to({scaleX:0.84},0).wait(1).to({scaleX:0.69},0).wait(1).to({scaleX:0.54},0).wait(1).to({scaleX:0.84},0).wait(1).to({scaleX:1.14},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.62},0).wait(1).to({scaleX:0.36},0).wait(1).to({scaleX:0.75},0).wait(1).to({scaleX:1.14},0).wait(1).to({scaleX:0.78},0).wait(1).to({scaleX:0.42},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-54,244.1,108);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.space2();
	this.instance.parent = this;
	this.instance.setTransform(-138.3,-64.3,0.231,0.181);

	this.instance_1 = new lib.space2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-140.3,-62.3,0.232,0.178);

	this.instance_2 = new lib.אלפסיסטיתת();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,0.7,1.016,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.3,-64.3,280.7,128.7);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9B4C81").ss(0.5).p("ABKjCQgmgJggBlQgUBCg+DhIBDAGQA+jbAMgvQAdh1gSgGg");
	this.shape.setTransform(-9.4,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3538E").s().p("AhPC9QA+jhAUhCQAghlAmAJQASAGgdB1QgMAvg+Dbg");
	this.shape_1.setTransform(-9.3,32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEC5A6").s().p("AhkEqQgKgYADgfQAEgjATgQQBflhATg5QAnh0AfATQAZAPgwChQhLD9gSBmQAFgCAEANQAFANgBAOQAAAlggghQgTA0gTAHIgGACQgNAAgIgVg");
	this.shape_2.setTransform(-12.2,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3538E").s().p("AAAiTQA0hQAygeIgBIAIjKADQAAj2Blifg");
	this.shape_3.setTransform(-34.1,38.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3538E").s().p("ABkCqQg6hshshpQgzgwgSgTQgegegGgQQgGgUAmAKQAoALA3AkQCTBiBFCeIgjASQggAPgEAAIgBAAg");
	this.shape_4.setTransform(35.4,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEC5A6").s().p("ACvEhQgWgHgWg0QgkAhgBglQAAgOAFgMQAFgOAGADQgkiiiNiYQgagdhGhCQgtgrgEgOQgHgVAtAOQAyAPA8AwQCtCIBPD6QAVAQAEAiQAEAfgLAYQgKAVgOAAIgHgCg");
	this.shape_5.setTransform(39.6,38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3538E").s().p("AlGjtIArAHQA0AHA0AAQClADBag6QAEgCACACQB+CAA+CWQAwB3AKCTIqPANg");
	this.shape_6.setTransform(8.8,36.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C5092").s().p("Al7FuQhikjBXj5QAahNArhBQAVggAPgRIIqAAIAoA1QAvBGAeBRQBgEAhrEPg");
	this.shape_7.setTransform(-1.3,54.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#773170").s().p("AgUAaQgbADgQgHQgVgKAAgTQAAgNAJgOQAAgBAAAAQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAIARASQAFAFAEAAIA0AKQAEABAEgEQALgSANgCQA7AhgWASQgOAMgeABg");
	this.shape_8.setTransform(17.1,111.9,0.999,0.999,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDC2A9").s().p("AgTB1QgiABgHgCQgJgDgKgOQgIgKATgrQAag7AFgWQAHgggBgiIgDgcIBJAAIACBGQgDBLgYAgQgEAKAlASQAmATgDAKQgGAWgeACIgIABQgaAAgfgNg");
	this.shape_9.setTransform(19.4,102.6,0.999,0.999,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#773170").s().p("AgRAaQgXADgNgHQgSgKAAgTQAAgNAHgOIADgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIAPASQAEAFAEAAIAsAKQAEABACgEQAKgSALgCQAyAhgTASQgMAMgZABg");
	this.shape_10.setTransform(-9.3,111.7,0.999,0.999,-15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDC2A9").s().p("AgQB1QgdABgGgCQgIgDgIgOQgHgKAQgrQAWg7AEgWQAHgggBgiIgDgcIA+AAIACBGQgDBLgVAgQgDAKAfASQAhATgCAKQgFAWgaACIgHABQgWAAgagNg");
	this.shape_11.setTransform(-12,102.5,0.999,0.999,-15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFF7ED").s().p("AgTAMQgJgFAAgHQAAgGAJgFQAIgFALAAQAMAAAJAFQAHAFABAGQgBAHgHAFQgJAFgMAAQgLAAgIgFg");
	this.shape_12.setTransform(15.3,9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFF7ED").s().p("AgTAMQgIgFgBgHQABgGAIgFQAIgFALAAQAMAAAIAFQAJAFgBAGQABAHgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_13.setTransform(13.8,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFF7ED").s().p("AgTAMQgJgFAAgHQAAgGAJgFQAIgFALAAQAMAAAJAFQAHAFABAGQgBAHgHAFQgJAFgMAAQgLAAgIgFg");
	this.shape_14.setTransform(10.1,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFF7ED").s().p("AgTAMQgJgFAAgHQAAgGAJgFQAIgFALAAQALAAAJAFQAJAFAAAGQAAAHgJAFQgJAFgLAAQgLAAgIgFg");
	this.shape_15.setTransform(5.4,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFF7ED").s().p("AgTAMQgIgFAAgHQAAgGAIgFQAIgFALAAQALAAAJAFQAIAFAAAGQAAAHgIAFQgJAFgLAAQgLAAgIgFg");
	this.shape_16.setTransform(-0.3,17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFF7ED").s().p("AgTAMQgJgFAAgHQAAgGAJgFQAIgFALAAQAMAAAIAFQAJAFAAAGQAAAHgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_17.setTransform(-6.2,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B7B5B3").s().p("AAvEqQgFgFgCggQgBADgDhdIAEhpIACiEQAAhYgFgrQgBgMgEgTQgFgRgFgKQgDgFgEgCQgCgCgEgBQgJAAgLAJQgRALgWAWIgCABQgJACgGgDQgJgFABgPIABgDQAagaATgMQAJgHAJgDQALgEAMAAQAOABAKAJQAJAGAGAMQAHAMAGAYQADALADAYQAGA3gBBTIgCCHIgHCEQgEAigEAWQgFAlgFAAIgBgBg");
	this.shape_18.setTransform(55.1,89.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCB58F").s().p("AAAASQgVgBgQgKIgPgKIgNgPIAgASIARAFIAIACIAIABQAeABAkgXQgLAOgSAKQgQAJgSAAIgDgBg");
	this.shape_19.setTransform(27.7,-2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7AF8B").s().p("AgIAfQgNgLgBgSQgBgQAMgNQAMgMASgBIAEBRIgDAAQgQAAgMgKg");
	this.shape_20.setTransform(-14.3,-25.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E8D9EA").s().p("AgIAKQgFgFAAgFQAAgFAFgEQAEgEAEAAQAGAAAEAEQADAEAAAFQAAAFgDAFQgEAEgGAAQgEAAgEgEg");
	this.shape_21.setTransform(-14.9,-18.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F69A95").s().p("AgOAnIgCgBIAAgDIANhJIAFAAIAPBIQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_22.setTransform(39.3,-21.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4889D").s().p("AggAGQgNgHAAgMIBbAAQAAAMgNAHQgOAIgTAAQgSAAgOgIg");
	this.shape_23.setTransform(33.8,-7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#786364").ss(1.5).p("AgsAGIBZgM");
	this.shape_24.setTransform(34.4,-28.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#786364").ss(1.5).p("ACNAAQAAA8gpAqQgqArg6AAQg5AAgpgrQgqgqAAg8QAAg7AqgqQApgrA5AAQA6AAAqArQApAqAAA7g");
	this.shape_25.setTransform(15.6,-27.4);

	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(15.8,-27.4,1,1,0,0,0,14.8,15.2);
	this.instance.alpha = 0.441;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#96817F").s().p("AgPARQgIgHABgKQgBgJAIgHQAGgHAJAAQAKAAAGAHQAIAHgBAJQABAKgIAHQgGAHgKAAQgJAAgGgHg");
	this.shape_26.setTransform(19.8,-25.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFE5DA").s().p("Ag4ARIAZgSQAOgIAQgEIAPgFQAKgBAIADQAUAHAFAQIgCACQgRgGgKAAIgbgCQgLACgQAEQgOAFgOAHg");
	this.shape_27.setTransform(14.6,-30.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F69382").s().p("AgqAtQgSgTAAgaQAAgaASgTQASgSAYAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgYAAgSgTg");
	this.shape_28.setTransform(10.6,-11.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#3D3D3D","#787572","#B0ABA4","#D4CDC4","#E1DAD0","#DDD7CF","#D0CECA","#C7C7C7"],[0,0.176,0.365,0.506,0.58,0.706,0.839,0.91],0,56.5,0,-56.4).s().p("Al1HgQgNAAgEgLQjRpJDZjmQCKiREaANQDSAJBxBiQCTB/gQEPIABAKQAAAEgFgBIhGABQgMAAgFgMQgahOhDgxQhphNijA3QgMADAAAOIAECIQAAAHgFAFQgFAFgHABQhRAFALA/QAFAYATAUQATAVAWACQAKABAEAKQARAwgIDbQAAAHgFAEQgGAFgHAAg");
	this.shape_29.setTransform(-13.2,-37.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCB58F").s().p("ABPADQgxgEgeABQgiAAgsADQg0AIgZAHQAcgQAvgKQAjgIAtgBIApABIAeAFIAJADQAiAGArAUQhBgNgNgCg");
	this.shape_30.setTransform(13.8,-44.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCB58F").s().p("AB2AKIgogHQgwgEgeAAQgiABgsADQg0AJgaAHQAegSAugJQAkgJAsAAIApACIAeAEIAKADQAiAGAqAVIgngJg");
	this.shape_31.setTransform(13.5,-47.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#3D3D3D","#E1DAD0","#DDD7CF","#D0CECA","#C7C7C7"],[0.086,0.498,0.659,0.824,0.91],0,22,0,-22).s().p("AiGCcQg3hBAAhbQAAhaA3hBQA4hABOAAQBPAAA3BAQA4BBAABaQAABbg4BBQg3BAhPAAQhOAAg4hAg");
	this.shape_32.setTransform(-10,-97.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDC8B0").s().p("AjyknQEEhFCNCjQA3BBAUBWQATBRgUBFQg1CGjSA3QhBARhKAIIg9ADg");
	this.shape_33.setTransform(-17.9,-21.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDC8B0").s().p("AkFknQEYhFCXCjQA8BBAWBWQAUBRgWBFQg5CGjiA3QhGARhQAHIhBAEg");
	this.shape_34.setTransform(14.2,-20.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4BFAB").s().p("Ai3B7QhMgzAAhIQAAhIBMgzQBMgzBrAAQBsAABMAzQBMAzAABIQAABIhMAzQhMA0hsAAQhrAAhMg0g");
	this.shape_35.setTransform(-1.9,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.6,-119.1,125.2,238.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9B4C81").ss(0.5).p("ABKjCQgmgJggBlQgUBCg+DhIBDAGQA+jbAMgvQAdh1gSgGg");
	this.shape.setTransform(-9.4,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3538E").s().p("AhPC9QA+jhAUhCQAghlAmAJQASAGgdB1QgMAvg+Dbg");
	this.shape_1.setTransform(-9.3,32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEC5A6").s().p("AhkEqQgKgYADgfQAEgjATgQQBflhATg5QAnh0AfATQAZAPgwChQhLD9gSBmQAFgCAEANQAFANgBAOQAAAlggghQgTA0gTAHIgGACQgNAAgIgVg");
	this.shape_2.setTransform(-12.2,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3538E").s().p("AAAiTQA0hQAygeIgBIAIjKADQAAj2Blifg");
	this.shape_3.setTransform(-34.1,38.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3538E").s().p("ABkCqQg6hshshpQgzgwgSgTQgegegGgQQgGgUAmAKQAoALA3AkQCTBiBFCeIgjASQggAPgEAAIgBAAg");
	this.shape_4.setTransform(35.4,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEC5A6").s().p("ACvEhQgWgHgWg0QgkAhgBglQAAgOAFgMQAFgOAGADQgkiiiNiYQgagdhGhCQgtgrgEgOQgHgVAtAOQAyAPA8AwQCtCIBPD6QAVAQAEAiQAEAfgLAYQgKAVgOAAIgHgCg");
	this.shape_5.setTransform(39.6,38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3538E").s().p("AlGjtIArAHQA0AHA0AAQClADBag6QAEgCACACQB+CAA+CWQAwB3AKCTIqPANg");
	this.shape_6.setTransform(8.8,36.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C5092").s().p("Al7FuQhikjBXj5QAahNArhBQAVggAPgRIIqAAIAoA1QAvBGAeBRQBgEAhrEPg");
	this.shape_7.setTransform(-1.3,54.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#773170").s().p("AgUAaQgbADgQgHQgVgKAAgTQAAgNAJgOQAAgBAAAAQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAIARASQAFAFAEAAIA0AKQAEABAEgEQALgSANgCQA7AhgWASQgOAMgeABg");
	this.shape_8.setTransform(18.2,112);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDC2A9").s().p("AgTB1QgiABgHgCQgJgDgKgOQgIgKATgrQAag7AFgWQAHgggBgiIgDgcIBJAAIACBGQgDBLgYAgQgEAKAlASQAmATgDAKQgGAWgeACIgIABQgaAAgfgNg");
	this.shape_9.setTransform(18,102.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#773170").s().p("AgRAaQgXADgNgHQgSgKAAgTQAAgNAHgOIADgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIAPASQAEAFAEAAIAsAKQAEABACgEQAKgSALgCQAyAhgTASQgMAMgZABg");
	this.shape_10.setTransform(-12,112);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDC2A9").s().p("AgQB1QgdABgGgCQgIgDgIgOQgHgKAQgrQAWg7AEgWQAHgggBgiIgDgcIA+AAIACBGQgDBLgVAgQgDAKAfASQAhATgCAKQgFAWgaACIgHABQgWAAgagNg");
	this.shape_11.setTransform(-12.1,102.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFF7ED").s().p("AgTAMQgJgFAAgHQAAgGAJgFQAIgFALAAQAMAAAJAFQAHAFABAGQgBAHgHAFQgJAFgMAAQgLAAgIgFg");
	this.shape_12.setTransform(15.3,9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFF7ED").s().p("AgTAMQgIgFgBgHQABgGAIgFQAIgFALAAQAMAAAIAFQAJAFgBAGQABAHgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_13.setTransform(13.8,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFF7ED").s().p("AgTAMQgJgFAAgHQAAgGAJgFQAIgFALAAQAMAAAJAFQAHAFABAGQgBAHgHAFQgJAFgMAAQgLAAgIgFg");
	this.shape_14.setTransform(10.1,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFF7ED").s().p("AgTAMQgJgFAAgHQAAgGAJgFQAIgFALAAQALAAAJAFQAJAFAAAGQAAAHgJAFQgJAFgLAAQgLAAgIgFg");
	this.shape_15.setTransform(5.4,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFF7ED").s().p("AgTAMQgIgFAAgHQAAgGAIgFQAIgFALAAQALAAAJAFQAIAFAAAGQAAAHgIAFQgJAFgLAAQgLAAgIgFg");
	this.shape_16.setTransform(-0.3,17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFF7ED").s().p("AgTAMQgJgFAAgHQAAgGAJgFQAIgFALAAQAMAAAIAFQAJAFAAAGQAAAHgJAFQgIAFgMAAQgLAAgIgFg");
	this.shape_17.setTransform(-6.2,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B7B5B3").s().p("AAvEqQgFgFgCggQgBADgDhdIAEhpIACiEQAAhYgFgrQgBgMgEgTQgFgRgFgKQgDgFgEgCQgCgCgEgBQgJAAgLAJQgRALgWAWIgCABQgJACgGgDQgJgFABgPIABgDQAagaATgMQAJgHAJgDQALgEAMAAQAOABAKAJQAJAGAGAMQAHAMAGAYQADALADAYQAGA3gBBTIgCCHIgHCEQgEAigEAWQgFAlgFAAIgBgBg");
	this.shape_18.setTransform(55.1,89.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCB58F").s().p("AAAASQgVgBgQgKIgPgKIgNgPIAgASIARAFIAIACIAIABQAeABAkgXQgLAOgSAKQgQAJgSAAIgDgBg");
	this.shape_19.setTransform(27.7,-2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7AF8B").s().p("AgIAfQgNgLgBgSQgBgQAMgNQAMgMASgBIAEBRIgDAAQgQAAgMgKg");
	this.shape_20.setTransform(-14.3,-25.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E8D9EA").s().p("AgIAKQgFgFAAgFQAAgFAFgEQAEgEAEAAQAGAAAEAEQADAEAAAFQAAAFgDAFQgEAEgGAAQgEAAgEgEg");
	this.shape_21.setTransform(-14.9,-18.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F69A95").s().p("AgOAnIgCgBIAAgDIANhJIAFAAIAPBIQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_22.setTransform(39.3,-21.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4889D").s().p("AggAGQgNgHAAgMIBbAAQAAAMgNAHQgOAIgTAAQgSAAgOgIg");
	this.shape_23.setTransform(33.8,-7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#786364").ss(1.5).p("AgsAGIBZgM");
	this.shape_24.setTransform(34.4,-28.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#786364").ss(1.5).p("ACNAAQAAA8gpAqQgqArg6AAQg5AAgpgrQgqgqAAg8QAAg7AqgqQApgrA5AAQA6AAAqArQApAqAAA7g");
	this.shape_25.setTransform(15.6,-27.4);

	this.instance = new lib.Path_1_1();
	this.instance.parent = this;
	this.instance.setTransform(15.8,-27.4,1,1,0,0,0,14.8,15.2);
	this.instance.alpha = 0.441;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#96817F").s().p("AgPARQgIgHABgKQgBgJAIgHQAGgHAJAAQAKAAAGAHQAIAHgBAJQABAKgIAHQgGAHgKAAQgJAAgGgHg");
	this.shape_26.setTransform(19.8,-25.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFE5DA").s().p("Ag4ARIAZgSQAOgIAQgEIAPgFQAKgBAIADQAUAHAFAQIgCACQgRgGgKAAIgbgCQgLACgQAEQgOAFgOAHg");
	this.shape_27.setTransform(14.6,-30.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F69382").s().p("AgqAtQgSgTAAgaQAAgaASgTQASgSAYAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgYAAgSgTg");
	this.shape_28.setTransform(10.6,-11.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#3D3D3D","#787572","#B0ABA4","#D4CDC4","#E1DAD0","#DDD7CF","#D0CECA","#C7C7C7"],[0,0.176,0.365,0.506,0.58,0.706,0.839,0.91],0,56.5,0,-56.4).s().p("Al1HgQgNAAgEgLQjRpJDZjmQCKiREaANQDSAJBxBiQCTB/gQEPIABAKQAAAEgFgBIhGABQgMAAgFgMQgahOhDgxQhphNijA3QgMADAAAOIAECIQAAAHgFAFQgFAFgHABQhRAFALA/QAFAYATAUQATAVAWACQAKABAEAKQARAwgIDbQAAAHgFAEQgGAFgHAAg");
	this.shape_29.setTransform(-13.2,-37.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCB58F").s().p("ABPADQgxgEgeABQgiAAgsADQg0AIgZAHQAcgQAvgKQAjgIAtgBIApABIAeAFIAJADQAiAGArAUQhBgNgNgCg");
	this.shape_30.setTransform(13.8,-44.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCB58F").s().p("AB2AKIgogHQgwgEgeAAQgiABgsADQg0AJgaAHQAegSAugJQAkgJAsAAIApACIAeAEIAKADQAiAGAqAVIgngJg");
	this.shape_31.setTransform(13.5,-47.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#3D3D3D","#E1DAD0","#DDD7CF","#D0CECA","#C7C7C7"],[0.086,0.498,0.659,0.824,0.91],0,22,0,-22).s().p("AiGCcQg3hBAAhbQAAhaA3hBQA4hABOAAQBPAAA3BAQA4BBAABaQAABbg4BBQg3BAhPAAQhOAAg4hAg");
	this.shape_32.setTransform(-10,-97.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDC8B0").s().p("AjyknQEEhFCNCjQA3BBAUBWQATBRgUBFQg1CGjSA3QhBARhKAIIg9ADg");
	this.shape_33.setTransform(-17.9,-21.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDC8B0").s().p("AkFknQEYhFCXCjQA8BBAWBWQAUBRgWBFQg5CGjiA3QhGARhQAHIhBAEg");
	this.shape_34.setTransform(14.2,-20.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4BFAB").s().p("Ai3B7QhMgzAAhIQAAhIBMgzQBMgzBrAAQBsAABMAzQBMAzAABIQAABIhMAzQhMA0hsAAQhrAAhMg0g");
	this.shape_35.setTransform(-1.9,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.6,-119.1,125.2,238.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.178,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.49},2).to({startPosition:0},2).to({scaleX:0.11},2).to({scaleX:0.66},2).to({scaleX:1.08},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.3,-64.3,330.7,128.7);


(lib.old1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).to({_off:false,x:0.5,y:0.5},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true,x:0.5,y:0.5},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.6,-119.1,125.2,238.4);


(lib.old_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0,144.7,1,1,0,0,0,50.9,289.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-144.5,101.9,289.2);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.old1();
	this.instance.parent = this;
	this.instance.setTransform(-445.7,50.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3538E").s().p("Ai2CJQBKieCchiQA6gkAqgLQApgKgHAUQgFAQggAeIhJBDQhzBpg+BsIgBAAQgHAAhFghg");
	this.shape.setTransform(410.3,-35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC5A6").s().p("AjZEOQgMgYAEgfQAFgiAWgQQBTj6C4iIQBAgwA0gPQAwgOgHAVQgFAOgvArQhKBCgcAdQiVCYgmCiQAGgDAFAOQAGAMgBAOQgBAlgmghQgXA0gXAHIgIACQgPAAgKgVg");
	this.shape_1.setTransform(405.9,-23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3538E").s().p("ABnCqQg8hrhwhqIhHhCQgegegGgRQgGgUAnALQAqAKA3AkQCYBjBHCeQhCAggHAAIgBAAg");
	this.shape_2.setTransform(482,-35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC5A6").s().p("AC0EiQgXgIgXgzQgkAhgBgmQgBgOAGgMQAFgOAGADQgliiiRiXQgbgchIhEQgugqgFgPQgHgVAvAOQAzAQA+AvQCyCIBRD6QAWAQAEAiQAEAfgMAZQgJAUgPAAIgHgBg");
	this.shape_3.setTransform(486.3,-23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3538E").s().p("Ah3DuIACnwIAhAWQAoAgAjAvQBvCbASEFg");
	this.shape_4.setTransform(476.3,-26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3538E").s().p("AAMicQAngxAugfIAlgWIAAHxIkLAUQAVkGB8iZg");
	this.shape_5.setTransform(415.2,-26.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#734B88").ss(3).p("AkugmIAXAYQAeAbAhAOQBnAsBWhtQB0B3B1gwQA6gYAjgv");
	this.shape_6.setTransform(447.6,-19.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C5092").s().p("Al/FuQhikjBXj5QAbhOAqhAIAlgxIIvAAIApA2QAvBFAfBRQBhEBhsEOg");
	this.shape_7.setTransform(445.2,-6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#773170").s().p("AAVAiIgpgIQgcADgPgHQgVgKAAgTQAAgNAIgPQAAAAABgBQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAIASASQAEAEAFABIA0AKQAFABADgEQAMgSANgCQA7AhgXASQgNAKgeADg");
	this.shape_8.setTransform(462.8,50.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDC2A9").s().p("AgUB0QgiABgHgBQgJgDgKgOQgHgKASgrQAag7AFgWQAIgggCgiIgDgcIBKAAIACBGQgDBLgZAgQgEAKAmASQAmATgCAKQgGAWgfACIgHABQgaAAghgOg");
	this.shape_9.setTransform(462.7,41.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#773170").s().p("AhTAaQgYgSA/ghQANABANASQADAEAFAAIA3gKQAGgBAEgFIASgRQAEgEAEAFQAYAogmAQQgQAIgdgDIgrAHIgQAEQgggCgOgKg");
	this.shape_10.setTransform(428,50.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDC2A9").s().p("AgwCBQgggCgHgWQgCgKApgTQAngSgEgKQgagggDhLIAChGIBNAAIgDAcQgBAiAIAgQAFAWAcA7QATArgIAKQgLAOgJADQgIABgjgBQgiAOgcAAIgIgBg");
	this.shape_11.setTransform(428.1,41.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFF7ED").s().p("AgQAMQgIgFAAgHQAAgGAIgFQAHgFAJAAQAKAAAIAFQAHAFAAAGQAAAHgHAFQgIAFgKAAQgJAAgHgFg");
	this.shape_12.setTransform(433,-52.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFF7ED").s().p("AgQAMQgIgFAAgHQAAgGAIgFQAHgFAJAAQALAAAHAFQAHAFAAAGQAAAHgHAFQgHAFgLAAQgJAAgHgFg");
	this.shape_13.setTransform(434.4,-49.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFF7ED").s().p("AgRAMQgHgFAAgHQAAgGAHgFQAIgFAJAAQAKAAAIAFQAHAFAAAGQAAAHgHAFQgIAFgKAAQgJAAgIgFg");
	this.shape_14.setTransform(437.6,-47.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFF7ED").s().p("AgQAMQgIgFAAgHQAAgGAIgFQAGgFAKAAQAKAAAIAFQAHAFAAAGQAAAHgHAFQgIAFgKAAQgKAAgGgFg");
	this.shape_15.setTransform(441.7,-45.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFF7ED").s().p("AgRAMQgHgFAAgHQAAgGAHgFQAIgFAJAAQAKAAAIAFQAHAFAAAGQAAAHgHAFQgIAFgKAAQgJAAgIgFg");
	this.shape_16.setTransform(446.7,-44.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFF7ED").s().p("AgRAMQgHgFAAgHQAAgGAHgFQAIgFAJAAQALAAAHAFQAHAFAAAGQAAAHgHAFQgHAFgLAAQgJAAgIgFg");
	this.shape_17.setTransform(451.9,-45.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFF7ED").s().p("AgQAMQgIgFAAgHQAAgGAIgFQAHgFAJAAQALAAAHAFQAHAFAAAGQAAAHgHAFQgHAFgLAAQgJAAgHgFg");
	this.shape_18.setTransform(456.4,-47.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFF7ED").s().p("AgRAMQgHgFAAgHQAAgGAHgFQAIgFAJAAQAKAAAIAFQAHAFAAAGQAAAHgHAFQgIAFgKAAQgJAAgIgFg");
	this.shape_19.setTransform(459.4,-49.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EFF7ED").s().p("AgRAMQgHgFAAgHQAAgGAHgFQAIgFAJAAQAKAAAIAFQAHAFAAAGQAAAHgHAFQgIAFgKAAQgJAAgIgFg");
	this.shape_20.setTransform(460.6,-52.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B7B5B3").s().p("AApEqQgEgFgCgeQgBADgDhXIADhnIACiFQABhQgFg1QgDgpgJgUQgCgHgDgEQgEgEgBAAQgCgBgGACQgEACgGAFQgOAKgUAXIgCABQgWAGAAgYIAAgDQAYgbAQgMQAMgHAGgDQANgGAMAEQANADAKAMQAGAJAEAKQAJAZAFAuQAEA0gBBWIgFDtIgDAcQgEAggDAUQgFAigFAAIgBAAg");
	this.shape_21.setTransform(388.2,24.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCB58F").s().p("AAAATQgbgCgUgJIgUgLIgSgPIAVAKIAVAIIAgAGIALAAQAUACAXgHQAVgEAWgLQgQAPgXAKQgUAIgXAAIgEAAg");
	this.shape_22.setTransform(446.8,-58.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCB58F").s().p("ABPADQgkgEgrAAQgkgBgqAFQgoAFgnALQAfgSAtgKQAogJApAAQAuABAkAIQAjAIApAUQg9gNgSgDg");
	this.shape_23.setTransform(448,-102);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FCB58F").s().p("ABPADQglgEgqAAQgjgBgrAFQgoAFgnALQAegSAugKQAogJApAAQAuABAkAIQAkAIAoAUQg7gNgUgDg");
	this.shape_24.setTransform(447.8,-105);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7AF8B").s().p("AgIAfQgNgLgBgSQgBgQANgMQAMgNASgBIAEBRIgDAAQgRAAgMgKg");
	this.shape_25.setTransform(413.2,-80.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7AF8B").s().p("AgWApIADhSQATABALANQANANgBAQQAAARgOALQgMAMgQAAIgDgBg");
	this.shape_26.setTransform(482.1,-80.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E8D9EA").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgEAAgFgEg");
	this.shape_27.setTransform(412.6,-74.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E8D9EA").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgEAAgFgEg");
	this.shape_28.setTransform(481.6,-74.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F69A95").s().p("AgSAnQgEAAABgFIAQhIIAIAAIATBIQAAABAAAAQABAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(447.4,-77);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4889D").s().p("AggAGQgOgIAAgLIBdAAQAAALgOAIQgNAIgUAAQgSAAgOgIg");
	this.shape_30.setTransform(446.9,-66);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#786364").ss(1.5).p("AgQAAIAhAA");
	this.shape_31.setTransform(447.5,-84.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#786364").ss(1.5).p("ACOAAQAAA8gqArQgpAqg7AAQg6AAgpgqQgqgrAAg8QAAg7AqgqQApgrA6AAQA7AAApArQAqAqAAA7g");
	this.shape_32.setTransform(463.1,-83.8);

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(463.3,-83.8,1,1,0,0,0,14.9,15.2);
	this.instance_1.alpha = 0.441;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#786364").ss(1.5).p("ACOAAQAAA8gqAqQgpArg7AAQg6AAgpgrQgqgqAAg8QAAg7AqgqQApgrA6AAQA7AAApArQAqAqAAA7g");
	this.shape_33.setTransform(431.4,-84.4);

	this.instance_2 = new lib.Path_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(431.6,-84.4,1,1,0,0,0,14.9,15.2);
	this.instance_2.alpha = 0.441;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#96817F").s().p("AgQARQgHgHAAgKQAAgIAHgIQAIgHAIAAQAKAAAHAHQAHAIAAAIQAAAKgHAHQgHAHgKAAQgIAAgIgHg");
	this.shape_34.setTransform(458.3,-81.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#96817F").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_35.setTransform(434.6,-81.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFE5DA").s().p("AAdAIQgOgFgPgBQgIgBgUACQgMABgRAFIgCgBQAGgRAUgHQAMgEAXAGQAPAEAQAKQAQAIALAKIgBABQgSgHgMgEg");
	this.shape_36.setTransform(460.7,-93.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EFE5DA").s().p("Ag3ARQAJgIAQgKQAOgJAPgEQAWgHALAFQAUAHAEAQIgBACQgQgFgLgCIgNgBIgOAAQgLABgQAFQgLAEgRAIg");
	this.shape_37.setTransform(431.4,-93);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F69382").s().p("AgqAtQgSgTAAgaQAAgaASgTQASgSAYAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgYAAgSgTg");
	this.shape_38.setTransform(466.7,-68.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F69382").s().p("AgqAtQgSgTAAgaQAAgaASgTQASgSAYAAQAZAAASASQASATAAAaQAAAagSATQgSATgZAAQgYAAgSgTg");
	this.shape_39.setTransform(426.6,-68.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#3D3D3D","#787572","#B0ABA4","#D4CDC4","#E1DAD0","#DDD7CF","#D0CECA","#C7C7C7"],[0,0.176,0.365,0.506,0.58,0.706,0.839,0.91],0.1,-32.3,0.1,32.4).s().p("AlcieQBEhKBngtQBagoBUgFQBNgEBhAqQBoAtBJBPQBUBaARBuQAUCBhLCOQgLgvgfAAIgcAKQgLhTgthIQhbiNisA9QidhDhmCLQgzBGgUBTQgLgGgQAEQgeAIgQA1QiAkhCyjAg");
	this.shape_40.setTransform(446.8,-114);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#3D3D3D","#E1DAD0","#DDD7CF","#D0CECA","#C7C7C7"],[0.086,0.498,0.659,0.824,0.91],0,22,0,-22).s().p("AiGCcQg5hBAAhbQAAhaA5hBQA4hABOAAQBPAAA5BAQA4BBAABaQAABbg4BBQg5BAhPAAQhOAAg4hAg");
	this.shape_41.setTransform(446.7,-147.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDC8B0").s().p("AiDEeQiHg3gqiHQgxgLgXgeQgTgaAEgeQAEgeAUgRQAWgSAaAJIASg1QAXg/AegrQBiiQCgBIQCng/BdCSQAuBJAOBWQAbgSAVAQQATAPADAhQADAhgTAaQgWAfgsAGQgkCGiSA3QgtARgzAHIgpAEQg7AAhDgbg");
	this.shape_42.setTransform(446.7,-83.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4BFAB").s().p("Ai5B8QhNgzABhJQgBhHBNgzQBOg0BrAAQBtAABMA0QBOAzAABHQAABJhOAzQhMAzhtAAQhsAAhNgzg");
	this.shape_43.setTransform(446.9,-40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_2},{t:this.shape_33},{t:this.instance_1},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508.3,-169.5,1016.7,339.1);


// stage content:
(lib.Aliens_itaieinati = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("xfilessort");
	}
	this.frame_183 = function() {
		playSound("asishort");
	}
	this.frame_979 = function() {
		this.stop();
		
		this.btn3.addEventListener("click", replayFunc.bind(this));
		
		
		function replayFunc() {
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(183).call(this.frame_183).wait(796).call(this.frame_979).wait(2));

	// Layer 1
	this.btn3 = new lib.REplayR2();
	this.btn3.parent = this;
	this.btn3.setTransform(433.4,300.2,1,1,0,0,0,61.7,113.2);
	this.btn3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(979).to({_off:false},0).to({_off:true},1).wait(1));

	// replayII
	this.instance = new lib.REplayR2();
	this.instance.parent = this;
	this.instance.setTransform(434.4,414.2,1,1,90,0,0,61.7,226.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(951).to({_off:false},0).to({rotation:0,x:433.4},26).wait(1).to({regY:113.2,y:300.2},0).to({_off:true},1).wait(2));

	// replayI
	this.instance_1 = new lib.REplayL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(344.8,416.2,1,1,-90,0,0,27.8,216);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(951).to({_off:false},0).to({rotation:0,y:415.2},26).wait(2).to({_off:true},1).wait(1));

	// מנהיג
	this.instance_2 = new lib.Tween27("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(127.3,-201);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(127.3,209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},843).to({state:[{t:this.instance_3}]},43).to({state:[]},58).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(843).to({_off:false},0).to({_off:true,y:209},43).wait(95));

	// לייזר2
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(56.5,-225.1,1,1,0,0,0,31.5,216);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(804).to({_off:false},0).wait(1).to({x:56.7,y:-206.7},0).wait(1).to({x:56.9,y:-188.3},0).wait(1).to({x:57,y:-170},0).wait(1).to({x:57.2,y:-151.6},0).wait(1).to({x:57.4,y:-133.2},0).wait(1).to({x:57.6,y:-114.9},0).wait(1).to({x:57.8,y:-96.5},0).wait(1).to({x:58,y:-78.1},0).wait(1).to({x:58.1,y:-59.7},0).wait(1).to({x:58.3,y:-41.4},0).wait(1).to({x:58.5,y:-23},0).wait(1).to({x:58.7,y:-4.7},0).wait(1).to({x:58.9,y:13.7},0).wait(1).to({x:59,y:32.1},0).wait(1).to({x:59.2,y:50.5},0).wait(1).to({x:59.4,y:68.8},0).wait(1).to({x:59.6,y:87.2},0).wait(1).to({x:59.8,y:105.6},0).wait(1).to({x:60,y:123.9},0).wait(1).to({x:60.1,y:142.3},0).wait(1).to({x:60.3,y:160.7},0).wait(1).to({x:60.5,y:179},0).wait(117).to({_off:true},1).wait(37));

	// Layer 10
	this.instance_5 = new lib.Tween20("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(113.1,-221.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(782).to({_off:false},0).to({y:178.1},22).to({_off:true},140).wait(37));

	// כל הלייזר
	this.instance_6 = new lib.Tween19("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(161.5,-217);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween20("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(161.5,179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},752).to({state:[{t:this.instance_7}]},30).to({state:[]},162).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(752).to({_off:false},0).to({_off:true,y:179},30).wait(199));

	// חללית דוממת
	this.instance_8 = new lib.space2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(213,279,0.162,0.162);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(702).to({_off:false},0).to({_off:true},51).wait(228));

	// הופ הופ
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(450.8,353.7,0.6,0.72,0,0,0,0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(687).to({_off:false},0).wait(1).to({regX:0,regY:0,x:445.5,y:340},0).wait(1).to({x:439.7,y:325.9},0).wait(1).to({x:433.8,y:312},0).wait(1).to({x:427.6,y:298.1},0).wait(1).to({x:420.6,y:284.1},0).wait(1).to({x:411.6,y:282.4},0).wait(1).to({x:396,y:290.5},0).wait(1).to({x:382.7,y:298.1},0).wait(1).to({x:369.8,y:305.9},0).wait(1).to({x:357,y:313.9},0).wait(1).to({x:344.3,y:322.1},0).wait(1).to({x:331.7,y:330.4},0).wait(1).to({x:319.1,y:339.4},0).wait(1).to({x:308.3,y:348.6},0).to({_off:true},1).wait(279));

	// חללית מסתובבת
	this.instance_10 = new lib.Symbol2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(287.4,40.5,0.6,0.72,0,0,0,0.1,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(635).to({_off:false},0).wait(22).to({x:450.8,y:353.7},29).to({_off:true},1).wait(294));

	// סקוטש
	this.instance_11 = new lib.סקוטשש();
	this.instance_11.parent = this;
	this.instance_11.setTransform(199.7,58.2,0.09,0.102,-30);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(527).to({_off:false},0).to({_off:true},108).wait(346));

	// חללית
	this.instance_12 = new lib.space2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(194,-10,0.158,0.131);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(472).to({_off:false},0).to({_off:true},163).wait(346));

	// זקנה שמאל
	this.instance_13 = new lib.old_L();
	this.instance_13.parent = this;
	this.instance_13.setTransform(252.3,384.2,1,1,0,0,0,0,141.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(256).to({_off:false},0).to({rotation:-89,x:304.8,y:425.4},19).wait(360).to({_off:true},1).wait(345));

	// זקנה ימין
	this.instance_14 = new lib.old_r();
	this.instance_14.parent = this;
	this.instance_14.setTransform(344.9,388.2,1,1,0,0,0,0,144.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(256).to({_off:false},0).to({rotation:90,x:270.9,y:427.1},19).wait(360).to({_off:true},1).wait(345));

	// אור
	this.instance_15 = new lib.Symbol5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(291,410.5,1,0.033,0,0,0,97,448.4);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(339).to({_off:false},0).to({regY:446.8,scaleY:1.01,y:408.9},62).to({_off:true},225).wait(355));

	// ישר
	this.instance_16 = new lib.אישהזקנה05();
	this.instance_16.parent = this;
	this.instance_16.setTransform(155,76,0.258,0.258);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(166).to({_off:false},0).to({_off:true},90).wait(725));

	// הולכת
	this.instance_17 = new lib.Tween3("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(410.3,200.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:736.3},165).to({_off:true},1).wait(815));

	// רקע
	this.instance_18 = new lib._1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-70,-9,0.906,0.942);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(981));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(177,191,1016.7,452);
// library properties:
lib.properties = {
	id: 'AC1A90461F45BD48B887354F30894A2F',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_1.jpg", id:"_1"},
		{src:"images/Aliens_itai.einati_atlas_P_.png", id:"Aliens_itai.einati_atlas_P_"},
		{src:"sounds/asishort.mp3", id:"asishort"},
		{src:"sounds/xfilessort.mp3", id:"xfilessort"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AC1A90461F45BD48B887354F30894A2F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;