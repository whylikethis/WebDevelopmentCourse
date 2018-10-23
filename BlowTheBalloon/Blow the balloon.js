(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Blow the balloon_atlas_", frames: [[2370,1404,1003,725],[3375,1404,509,478],[4023,73,48,45],[3572,0,142,194],[3716,0,131,205],[3874,243,177,71],[3694,316,148,83],[3694,243,178,71],[3849,161,172,80],[0,0,2368,1623],[0,1625,1035,259],[3849,73,172,86],[2370,702,1200,700],[2370,0,1200,700],[3849,0,236,71],[3572,394,102,102],[3844,316,77,68],[4023,163,40,38],[4023,120,41,41],[3572,196,120,196]]}
];


// symbols:



(lib.arrowPic = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background2 = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.clock = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.containerBack = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.continueBtn = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CopyofLogoAllYellow31 = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.End = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Enter = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.frame = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.HitLogo = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.LogoBig = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.pic_startBlack1 = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.pic_startColor = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.playAgain = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.target = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.V = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.X = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ZOOM = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.מיכלמים = function() {
	this.spriteSheet = ss["Blow the balloon_atlas_"];
	this.gotoAndStop(19);
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


(lib.MyZoom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ZOOM();
	this.instance.parent = this;
	this.instance.setTransform(110,0,0.756,0.756);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MyZoom, new cjs.Rectangle(110,0,31,31), null);


(lib.time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.timeTxt = new cjs.Text("", "20px 'Arial'");
	this.timeTxt.name = "timeTxt";
	this.timeTxt.textAlign = "center";
	this.timeTxt.lineHeight = 24;
	this.timeTxt.lineWidth = 33;
	this.timeTxt.parent = this;
	this.timeTxt.setTransform(19.8,8.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2DFE0").s().p("AiKCLQg6g5AAhSQAAhRA6g5QA5g6BRAAQBSAAA5A6QA6A5AABRQAABSg6A5Qg5A6hSAAQhRAAg5g6g");
	this.shape.setTransform(19.7,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.timeTxt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.time, new cjs.Rectangle(0,0,39.4,39.4), null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.targt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.target();
	this.instance.parent = this;
	this.instance.setTransform(-17,-17,0.333,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.targt, new cjs.Rectangle(-17,-17,34,34), null);


(lib.QZoomBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ZOOM();
	this.instance.parent = this;
	this.instance.setTransform(110,0,0.756,0.756);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F6F6F6").ss(0.1,1,1).p("AiaiaIE1AAIAAE1Ik1AAg");
	this.shape.setTransform(125.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F6F6").s().p("AiaCbIAAk1IE1AAIAAE1g");
	this.shape_1.setTransform(125.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.QZoomBtn, new cjs.Rectangle(109,-1,33,33), null);


(lib.playAgain_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.playAgain();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-30,0.708,0.845);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.playAgain_1, new cjs.Rectangle(-83.5,-30,167,60), null);


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Enter();
	this.instance.parent = this;
	this.instance.setTransform(-57.5,-23.5,0.669,0.587);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.play_btn, new cjs.Rectangle(-57.5,-23.5,115,47), null);


(lib.HowTo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("איך משחקים", "bold 14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 80;
	this.text.parent = this;
	this.text.setTransform(39.1,-0.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BBEAF9").ss(1,1,1).p("AmUhFIMpAAIAACLIspAAg");
	this.shape.setTransform(40.5,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBEAF9").s().p("AmUBGIAAiLIMpAAIAACLg");
	this.shape_1.setTransform(40.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HowTo, new cjs.Rectangle(-2.7,-2.9,84.8,19.6), null);


(lib.HitBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HitLogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitBtn, new cjs.Rectangle(0,0,1035,259), null);


(lib.Guide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333131").s().p("AgaAcIADgKQAFAFAKAAQAJAAAHgHQAHgFAAgLQAAgJgFgHQgHgGgIAAIgKABIAAALQAAAIAIAAIAEgBIACAHQgDABgFABQgIgBgEgDQgEgDAAgJIAAgSQAKgDALAAQANAAAJAIQAJAIAAAPQAAAOgJAJQgKAJgPAAQgMAAgHgEg");
	this.shape.setTransform(68.6,0,1.333,1.329);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333131").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_1.setTransform(62.2,0,1.333,1.329);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333131").s().p("AgVAfIAAgJIAeAAIghg0IAMAAIARAbQAEgCACgFQACgDAAgHIAAgKIAMAAIgCAUQAAAEgEADQgCADgIAEIAOAUIAAAHg");
	this.shape_2.setTransform(56,0,1.333,1.329);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333131").s().p("AgFArIAAgvIgTgmIAMAAIAOAfQAGgDABgDQABgCABgHIACgQIAMAAIgCASQgCAQgQAGIAAAtg");
	this.shape_3.setTransform(48.6,1.6,1.333,1.329);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333131").s().p("AAPAfIgWghQgGADgBAIIgCAWIgMAAIACgWQACgNALgGIgPgUIAOAAIATAcIAFgGIAEgWIALAAIgBANQgBAJgDAFQgDADgGAFIASAag");
	this.shape_4.setTransform(36.4,0,1.333,1.329);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333131").s().p("AggAeIACgIIAGABQAEAAACgCQABgCAAgFIAAgjIgMABIgBgJQANgCAOABQAOAAAHABQAHADAEAGQAEAHAAALIAAAhIgLAAIAAgfQAAgJgBgDQgCgEgEgDQgFgCgKAAIgFAAIAAAkIgBAJQgCAEgDACQgDACgHAAQgHAAgEgCg");
	this.shape_5.setTransform(26.1,0,1.333,1.329);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333131").s().p("AARAfIAAgeQgBgJgBgEQgCgEgGgDQgEgCgLAAIgSACIgBgKIAVgBQATAAAHAHQAHAHAAAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_6.setTransform(12.1,0,1.333,1.329);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333131").s().p("AgdAfIAAgJIAmAAIAAgVQAAgIgCgEQgBgEgGgDQgFgDgKAAIgMABIgBgJIARgBQAQAAAHAHQAIAHAAAPIAAAXIAKAAIAAAJg");
	this.shape_7.setTransform(2.9,0,1.333,1.329);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333131").s().p("AgBArIAAgIQAAgHABgEIAEgIIAEgFIADgFIABgGIAAgJIgiAAIAAghIALAAIAAAYIAiAAIgBAZIgFAJIgDADQgFAHAAAHIAAAKg");
	this.shape_8.setTransform(-5.4,-1.6,1.333,1.329);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333131").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_9.setTransform(-10.8,0,1.333,1.329);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333131").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_10.setTransform(-14.8,1.6,1.333,1.329);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333131").s().p("AAQAfIAAgeQABgIgDgFQgCgEgGgDQgEgCgKAAIgSACIgBgKIAVgBQATAAAHAHQAIAHgBAPIAAAggAgaAfIAAgiIAMAAIAAAig");
	this.shape_11.setTransform(-26,0,1.333,1.329);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333131").s().p("AgCAfIAAgJIAVAAIgBggQgCgFgCgDQgCgDgFAAQgHAAgDAHQgFAHgDAPIgEAXIgLAAIAEgYIADgLIgKgaIAMAAIAEAOQADgGAGgEQAEgEAHAAQAIAAAFADQAEAEAEAHQACAGAAAOIAAAbg");
	this.shape_12.setTransform(-36,0,1.333,1.329);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333131").s().p("AggAeIACgIIAGABQAEAAACgCQABgCAAgFIAAgjIgMABIgBgJQANgCAOABQAOAAAHABQAGACAFAHQAEAHAAALIAAAhIgLAAIAAgfQAAgHgCgFQgBgEgFgDQgDgCgLAAIgGAAIAAAkQAAAIgBABQgBAEgDACQgDACgHAAQgHAAgEgCg");
	this.shape_13.setTransform(-46.1,0,1.333,1.329);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333131").s().p("AAPAfIgXghQgGADAAAIIgDAWIgLAAIACgWQACgNAKgGIgOgUIAOAAIATAcQAEgDABgDIACgKIACgMIALAAIgBANQgBAHgDAHQgCADgIAFIATAag");
	this.shape_14.setTransform(-55.1,0,1.333,1.329);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333131").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_15.setTransform(-61.9,-2,1.333,1.329);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333131").s().p("AgaAfIAAg7QALgCAMAAQAKAAAIADQAHAEACAFQADAGAAAKIAAAhgAgPgUIAAAqIAfAAIAAgXQAAgHgBgEQgCgEgFgCQgFgDgHAAg");
	this.shape_16.setTransform(-68.6,0,1.333,1.329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Guide, new cjs.Rectangle(-72.2,-7.3,144.5,14.7), null);


(lib.waterFull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],86.8,50.7,-87.2,-49.7).s().p("ApUPPIAA9fIAAAAIAAg+QAXAAArAPQAuALA8gQQAagHAtALQAsAKA0gRQAQgFATACIADABIAGACQA0ARAsgKQAsgMAaAIQBCARA5gQQA2gRAkAMQBAAWA0gQQA3gSA5ARQAjAKA3gOQA2gOA7ATIAAeRg");
	this.shape.setTransform(59.8,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.waterFull, new cjs.Rectangle(0.1,0,119.5,195), null);


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],234.5,0,-234.4,0).s().p("EgkSAApQgMgTgGgTQgMglAdADQAJABAJAEQBDAXA5gWQAegLAKgCQAXgEAbAMQAjAPAZACQAZgCAjgPQAbgMAXAEQAKACAeALQA5AWBDgXQAagJAtAOQArANA0gWQAZgKAUAKQA0AWArgNQAtgOAaAJQBDAXA4gWQAegLALgCQAXgEAaAMQBAAcA1gWQA2gWA5AWQAiANAmgMQAxgPATAAQAUAAAwAPQAkAMAjgNQA4gWA3AWQA1AWBAgcQAagMAXAEQAKACAeALQA5AWBDgXQAagJAtAOQArANA0gWQALgEAKABQANgBAKAEQA0AWArgNQAtgOAaAJQBDAXA4gWQAegLALgCQAXgEAaAMQBAAcA1gWQA2gWA5AWQAjANAlgNQAxgQAVAAQAVAAAxAQQAlANAjgNQA5gWA3AWQA0AWBAgcQAagMAXAEQALACAeALQA4AWBDgXQAagJAtAOQAsANA0gWQAKgEAMABQAMgBAKAEQA0AWAsgNQAtgOAZAJQBEAXA4gWQAegLAKgCQAXgEAbAMQA/AcA1gWQA3gWA4AWQAkANA2gTQA3gTA7AXIAABDg");
	this.shape.setTransform(234.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.water, new cjs.Rectangle(0,0,469,8.2), null);


(lib.tape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9BAD3").s().p("AiXAQIAIgDIgJgEIAJgEIgJgEIAJgDIgJgEIAJgEIgIgEQgBgBABAAIEvgBQACAAgCAAIgIAEIAJAEIgJAEIAJAEIgJADIAIAEIgJAFIAJADQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIkuABQgBAAgBAAQAAAAAAAAQAAAAAAAAQAAgBABAAg");
	this.shape.setTransform(15.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tape, new cjs.Rectangle(0,0,30.7,3.5), null);


(lib.handRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B9A2").s().p("AgCCPQgZgBgQgUQgRgVABgbIACgOIAAgKIAJjAIAJAGIAJAEIADABIADABIABABIANACIAAAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIAcgGIADgBIgICVQAOAGALANQAQAUgBAbQgBAbgTASQgRARgXAAIgCAAg");
	this.shape.setTransform(8.3,29.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.handRight, new cjs.Rectangle(2.4,15.7,12,28.6), null);


(lib.handLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B9A2").s().p("AgnB+QgTgSgBgbQgBgbARgUQAKgNAOgGIgHiWQAOAIARAAQAZAAATgPIAKDBIgBAJIACAOQACAbgRAVQgRAUgYABIgDAAQgXAAgRgRg");
	this.shape.setTransform(7.3,29.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.handLeft, new cjs.Rectangle(1.3,15.6,12.1,28.6), null);


(lib.eyebrowRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F3B03").s().p("AggAQQgGAAgEgEQgFgFAAgGIAAgBQAAgGAFgEQAEgFAGAAIBBAAQAGAAAFAFQAEAEAAAGIAAABQAAAGgEAFQgFAEgGAAg");
	this.shape.setTransform(4.8,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyebrowRight, new cjs.Rectangle(0,0,9.6,3.2), null);


(lib.eyeBrowLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F3B03").s().p("AggAQQgGAAgFgEQgEgFAAgGIAAgBQAAgGAEgEQAFgFAGAAIBBAAQAGAAAEAFQAEAEABAGIAAABQgBAGgEAFQgEAEgGAAg");
	this.shape.setTransform(4.8,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyeBrowLeft, new cjs.Rectangle(0,0,9.5,3.2), null);


(lib.banch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E6257").s().p("AnpA/ICAh9ILTAAICBB9g");
	this.shape.setTransform(65.9,6,1.333,0.962,0,3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#573A32").s().p("AnpAYIAAgvIPUAAIAAAvg");
	this.shape_1.setTransform(65.5,14.4,1.333,0.962,0,3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#64463C").s().p("AgSCHIAAkMIAlAAIAAEMg");
	this.shape_2.setTransform(127,27.4,1.333,0.962,0,3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#64463C").s().p("AhihTIAcgdICpDEIgdAcg");
	this.shape_3.setTransform(115.1,19.4,1.333,0.962,0,3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.banch, new cjs.Rectangle(0,0,131,40.3), null);


(lib.balloon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AitDNQhHhVAAh4QAAh3BHhVQBJhVBkAAQBmAABHBVQBIBVAAB3QAAB4hIBVQhHBVhmAAQhkAAhJhVg");
	mask.setTransform(24.5,29.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2A3794").ss(0.2).p("AhtAJIASgOQATgPAHAAIB4AAIA3AdQgDAIgIABQgDAAgGgEQgGgEgFAAQgEABgEAEQgDAEgFAAQgGAAgCgEQgDgEgFgBQgFAAgHAFQgHAFgDAAQgDAAgEgFQgDgEgGABQgGAAgDAEQgDADgEAAQgFABgFgEQgGgEgFAAQgFAAgDAEQgDAFgGgBQgGAAgFgEQgEgEgFAAQgFABgFAEQgEAEgFAAQgHAAgKgFQgKgFACgCg");
	this.shape.setTransform(24.4,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#586CB3").s().p("AhlAQQgKgFACgCIASgOQAUgPAGAAIB4AAIA3AdQgCAIgIABQgEAAgGgEQgFgEgFAAQgFABgDAEQgEAEgFAAQgFAAgDgEQgCgEgFgBQgGAAgHAFQgHAFgDAAQgCAAgEgFQgEgEgGABQgGAAgDAEQgDADgEAAQgEABgGgEQgGgEgFAAQgEAAgDAEQgDAFgHgBQgFAAgFgEQgEgEgGAAQgFABgEAEQgFAEgFAAIgBAAQgHAAgJgFg");
	this.shape_1.setTransform(24.4,2.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.balloon2, new cjs.Rectangle(12.4,0.2,24,5.1), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,509,478), null);


(lib.AI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrowPic();
	this.instance.parent = this;
	this.instance.setTransform(-23.3,-31,0.085,0.083,0,38.6,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-31,122,62);


(lib.AI_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrowPic();
	this.instance.parent = this;
	this.instance.setTransform(-40.1,-57.7,0.096,0.139,0,8.5,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-57.7,110.1,115.6);


(lib.openScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pic_startBlack1();
	this.instance.parent = this;
	this.instance.setTransform(-481,-294,0.8,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.openScreen, new cjs.Rectangle(-481,-294,960,600), null);


(lib.colorScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pic_startColor();
	this.instance.parent = this;
	this.instance.setTransform(-1,0,0.8,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.colorScreen, new cjs.Rectangle(-1,0,960,600), null);


(lib.finishGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.End();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-30,0.938,0.845);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finishGame, new cjs.Rectangle(-83.5,-30,167,60), null);


(lib.Editor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("עורך", "bold 14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 52;
	this.text.parent = this;
	this.text.setTransform(28,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBEAF9").s().p("AkhBkIAAjHIJDAAIAADHg");
	this.shape.setTransform(29,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Editor, new cjs.Rectangle(0,0,58,20), null);


(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,102.5,34.9);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,102.5,34.9);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.contiBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.continueBtn();
	this.instance.parent = this;
	this.instance.setTransform(-88,-36,0.831,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.contiBtn, new cjs.Rectangle(-88,-36,147,49), null);


(lib.CloseBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-24,-22.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AjvjgIHfAAIAAHBInfAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjvDhIAAnBIHfAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CloseBtn, new cjs.Rectangle(-25,-23.5,50,47), null);


(lib.ClockSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.clock();
	this.instance.parent = this;
	this.instance.setTransform(-29.3,-40,0.413,0.413);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClockSymbol, new cjs.Rectangle(-29.3,-40,58.7,80.1), null);


(lib.Apic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuzJIIAAyPIdnAAIAASPg");
	this.shape.setTransform(94.8,58.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Apic2, new cjs.Rectangle(0,0,189.6,116.8), null);


(lib.About = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("אודות", "bold 14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 57;
	this.text.parent = this;
	this.text.setTransform(30.5,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBEAF9").s().p("Ak1B4IAAjvIJrAAIAADvg");
	this.shape.setTransform(31,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.About, new cjs.Rectangle(0,0,62,24), null);


(lib.progressBarAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(102));

	// Layer 2
	this.instance = new lib.waterFull();
	this.instance.parent = this;
	this.instance.setTransform(0.1,130.3,1.339,0.037,0,0,0,59.8,195.1);
	this.instance.alpha = 0.648;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:195,scaleY:1.34},99).wait(2));

	// Layer 1
	this.instance_1 = new lib.מיכלמים();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-79.9,-130.2,1.333,1.329);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},101).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-130.2,159.9,260.5);


(lib.PicPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.CloseBtn.addEventListener("click", closeBtnFunction.bind(this));
		function closeBtnFunction() {
			this.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.CloseBtn = new lib.CloseBtn();
	this.CloseBtn.name = "CloseBtn";
	this.CloseBtn.parent = this;
	this.CloseBtn.setTransform(234.2,199.1,0.729,0.778,0,0,0,0.3,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("A+/7bMA9/AAAMAAAA23Mg9/AAAg");
	this.shape.setTransform(411,353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A+/bcMAAAg23MA9/AAAMAAAA23g");
	this.shape_1.setTransform(411,353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.CloseBtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PicPop, new cjs.Rectangle(211.1,175.9,399.8,354.2), null);


(lib.Option = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.anTxt = new cjs.Text("", "16px 'Arial'");
	this.anTxt.name = "anTxt";
	this.anTxt.textAlign = "right";
	this.anTxt.lineHeight = 20;
	this.anTxt.lineWidth = 128;
	this.anTxt.parent = this;
	this.anTxt.setTransform(135.6,19);

	this.Apic2 = new lib.Apic2();
	this.Apic2.name = "Apic2";
	this.Apic2.parent = this;
	this.Apic2.setTransform(73.5,78.5,0.712,1.079,0,0,0,94.6,58.5);
	this.Apic2.alpha = 0.789;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2.5,1,1).p("ArCAAIWFAA");
	this.shape.setTransform(71.5,146.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("ALKK5IAAAFALNq5IAAV0ArMq9IAAV2");
	this.shape_1.setTransform(71.7,76.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2E3B97").ss(0.3).p("AhEgJQAAABAAAAIgCAAQgCAAgBADQgBACABABQADAEADAFQAAABAAAAABJgFQACgCgCgCABEAIQABgCABgCQABgDACgDQACgBgCgCAA/AIIABAAQABgFADgFQACgBgCgCQAAgDgCAAIiGAAABDAIQAAAAAAAAQAAgBAAAAQABgBAAgCQACgEADgF");
	this.shape_2.setTransform(75,177.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2E3B97").ss(0.3).p("ABCmdQBoAWBPBeQBoB6AACtQAACshoB7QggAmglAaQg6AqhFAMIgwADQgCAAgDAAIhEgIQhngWhOhbQhnh7AAisQAAitBnh6QAmguAtgdQAqgaAwgN");
	this.shape_3.setTransform(75.9,224.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#586CB3").s().p("AAAG+IhEgHQhngXhOhbQhnh7AAitQAAisBnh6QAmguAtgcQAqgbAwgMICOgDQBoAXBPBdQBoB6AACsQAACthoB7QggAmglAaQg6AqhFAMIgwADIgFAAgAizkUQhDA9giBnQgrCGAnCRQADAKAJAEIAgAPQAEACAEgDQADgDgBgFQgXhfABhhQADiiBOhlQADgEgEgEQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDABgAhEmsIgIAAIgBgBIgFgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIACAAIAAgBICNAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgDAHIgCADIgBAAIAAAAIAAgBIABgCIAFgLIgFALIgBACIAAABIAAAAIgEAAIABAAIAEgKIABgCIgBgCQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIiGAAICGAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIABACIgBACIgEAKIgBAAIg1ABg");
	this.shape_4.setTransform(75.9,221.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4DAEA").s().p("AgDDtIgggPQgJgEgDgKQgniSAriFQAihoBCg8QADgDAEADQAEAEgDAEQhNBlgDChQgBBiAWBfQABAFgDADQgDACgBAAIgDgBg");
	this.shape_5.setTransform(52.2,217.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A9BAD3").s().p("Ai5OWQgEAAADgBIAFgCQAAgBgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAGgCIgMgGIAGgCIgBgBIAGgDIgMgFIAHgDIgCgBIAHgDIgMgFIAHgDIgCAAIAHgDIgKgFQgCgBACABIAEAAQgBgBACABIAGAAIgGgDQgCgCACABICOgDIABACIAHAAIABACIBEgCIA2AAIADAAIACAAIABgEICegDQABAAAAAAQAAAAABAAQAAABAAAAQgBAAAAABIgFACIAEAAQABAAAAAAQAAAAABAAQAAAAAAAAQgBABAAAAIgJAEIAJAEIgEACIAEABIgJAFIAJADIgDACIADACIgIAEIAIAEIgDACIADABIgJAFIAJADQAEACgFAAIgEAAIAFACQAEABgFAAIgDAAIgCAAIhwACIgPAAIgBAAIgTAAIiPADIgHAAIgBAAIgPAAIh2ACIgFAAgAj/snIAOgMIgPgNIAOgMIgQgNIAGgEIAKgIIgQgNIAPgNIgNgMQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIHygIQABAAABAAQAAAAAAAAQAAABAAAAQAAAAgBABIgNAMIAOANIgOANIAOAMIgEAEIgKAJIAPAMIgPAOIAOALQAFADgFAAInyAIQgEAAADgDg");
	this.shape_6.setTransform(72.2,91.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6F6F6").s().p("ALDK+I2GAAIgIAAIAA11IAAgGIHVAAIgGAEIAQAMIgOANIAPANIgOAMQgDACAFABIHxgIQAFAAgFgDIgOgMIAPgNIgOgNIAJgIIHVAAIAAV7g");
	this.shape_7.setTransform(71.6,75.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.Apic2},{t:this.anTxt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Option, new cjs.Rectangle(-1,0,145.4,266.9), null);


(lib.openingAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_143 = function() {
		this.stop();
		this.parent.gotoAndPlay(4);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(143).call(this.frame_143).wait(2));

	// color
	this.instance = new lib.colorScreen();
	this.instance.parent = this;
	this.instance.setTransform(-37.3,-12.8,1,1,0,0,0,480.5,294.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:479.2,x:-37.8,y:-13.4,alpha:1},72).to({regX:479.1,scaleX:2.25,scaleY:2.25,x:-100.7,y:-321.3},47).to({alpha:0.039},24).to({alpha:0},1).wait(1));

	// black
	this.instance_1 = new lib.openScreen();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-37.8,-13.4);

	this.instance_2 = new lib.pic_startBlack1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-517,-308,0.319,0.319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},72).to({state:[]},31).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-518.8,-307.4,960,600);


(lib.רקע = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkuAeFQg1AAgggcQgigeAAg6MgADg4EQAAg8AkgrQAjgqAzAAMBJdAAAQAyAAAkAqQAkArAAA8MAAAA3nQAAA8gkArQgkAqgyAAg");
	mask.setTransform(251,219.5);

	// Layer 3
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(254.5,239,1,1,0,0,0,254.5,239);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D0D0").s().p("EgkuAeFQg1AAgggcQgigeAAg6MgADg4EQAAg8AkgrQAjgqAzAAMBJdAAAQAyAAAkAqQAkArAAA8MAAAA3nQAAA8gkArQgkAqgyAAg");
	this.shape.setTransform(251,219.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.רקע, new cjs.Rectangle(3.7,27,494.7,385.1), null);


(lib.caractor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shoes,pants,bold
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#283787").ss(0.4).p("AitidIFfAAQBPBgAAAOIhODMIhXgaIAPiSQgWgIgZgIQgxgPgNADQgVAFgYAHQgvANgMAJQABAAAIBKQAEAlAEAmIhXARQgWgtgVgwQgqhdAFgLQANgYAQgZQAfgzAXgRg");
	this.shape.setTransform(39.9,135,1.333,1.329);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6A84C0").s().p("ABcCEIAPiSQgWgJgZgHQgxgQgNAEIgtALQgvAOgMAJQABAAAIBKIAIBKIhXARQgWgtgVgvQgqheAFgKIAdgyQAfgzAXgQIFfAAQBPBfAAAPIhODLg");
	this.shape_1.setTransform(39.9,134.9,1.333,1.329);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D7555").s().p("AiaAqQgggDASgdQANgTArgPQAygSBBAAQBIAAAyAQQAyAPAAAVQAAAtiygeQhkASgnAAIgMgBg");
	this.shape_2.setTransform(39.5,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#593412").s().p("AhUAYIgEgPQAigFAegFIBughIADANQABAPgOAGIiLAjQgTgBgCgKg");
	this.shape_3.setTransform(26.4,188.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AF7336").s().p("AjrAcQgBgUAKgNIAKgKIAwgOQAQAKAsgKQAWgGATgGIAPA9IhvAhQgdAGgjAFgAB7AWQhGgPAAgJIAPg9IApALIAOADQAgAFAOgHIAwAOIAKAJQAKAOgBATIgJAkQhAgKgogJg");
	this.shape_4.setTransform(40.2,182.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_4},{t:this.shape_1},{t:this.shape}]},14).to({state:[]},1).wait(12));

	// nose
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5937D").s().p("AAABFQgJAAgHgGQgHgIAAgJIAAhbQAAgJAHgIQAHgGAJAAIAAAAQAKAAAHAGQAHAIAAAJIAABbQAAAJgHAIQgHAGgKAAg");
	this.shape_5.setTransform(39.4,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(14).to({_off:true},1).wait(12));

	// thong
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AB2A45").s().p("AgmgBQAEgPAVAAQAKAAAEAFQAHgDAGAAQAJAAAIAFQAHAGABAHQgPANgXAAQgVAAgSgSg");
	this.shape_6.setTransform(39.2,55.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(14).to({_off:true},1).wait(12));

	// mostach
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7F3B03").s().p("AhiAhQgIgGgBgLQgBgLAGgHQAGgJAKgBICmgaQAKgBAIAGQAIAHACALQABAKgGAIQgGAIgKACIimAaIgEAAQgIAAgHgGg");
	this.shape_7.setTransform(39.6,46.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7F3B03").s().p("AhiAdQgIgGgBgLQgBgLAHgHQAGgIAKgBICmgUQAKgBAIAHQAHAHACALQABAKgHAIQgGAIgKABIimAUIgDAAQgIAAgHgHg");
	this.shape_8.setTransform(39.6,46.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7F3B03").s().p("AhjAaQgHgHgBgLQAAgKAGgIQAHgIAKgBICmgNQAKAAAHAHQAIAHAAALQABAKgGAHQgHAJgKAAIimANIgCABQgJAAgHgHg");
	this.shape_9.setTransform(39.6,46.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7F3B03").s().p("AhjAWQgHgHgBgLQAAgKAHgIQAHgHAKgBIClgGQAKgBAIAIQAHAHAAALQABAKgHAHQgGAIgLABIimAGQgKAAgHgHg");
	this.shape_10.setTransform(39.6,46.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7F3B03").s().p("AhTAaQgKAAgHgIQgHgHAAgLQAAgKAHgHQAHgHAKgBICmAAQAKABAHAHQAHAHAAAKQABALgHAHQgHAIgKAAg");
	this.shape_11.setTransform(39.6,46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7F3B03").s().p("AhTAXQgLgBgGgIQgHgHABgKQAAgLAHgHQAIgIAKABIClAGQAKABAHAHQAHAIAAAKQgBALgHAHQgHAHgKAAg");
	this.shape_12.setTransform(39.5,46.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7F3B03").s().p("ABSAgIingNQgJAAgHgJQgGgHAAgKQACgLAHgHQAHgHALAAIClANQAKABAHAIQAGAIAAAKQgBALgHAHQgHAHgJAAIgCgBg");
	this.shape_13.setTransform(39.6,46.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7F3B03").s().p("ABSAkIingUQgKgBgGgIQgHgIABgKQABgLAIgHQAIgHAKABICmAUQAKABAGAIQAHAHgBALQgBALgIAGQgHAHgIAAIgCAAg");
	this.shape_14.setTransform(39.6,46.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7F3B03").s().p("ABRAnIingaQgKgCgGgIQgGgIABgKQACgLAIgHQAIgGAKABICmAaQAKABAGAJQAGAHgBALQgCALgHAGQgHAGgIAAIgDAAg");
	this.shape_15.setTransform(39.6,46.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7F3B03").s().p("ABSAiIingQQgJgBgHgIQgGgIAAgKQACgKAHgIQAHgHALABIClAQQAKABAHAIQAGAIAAAKQgBALgHAGQgIAHgJAAIgBAAg");
	this.shape_16.setTransform(39.6,46.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7F3B03").s().p("ABTAcIimgFQgKAAgHgIQgHgIAAgJQABgLAHgIQAHgHAKAAICmAFQAKABAHAIQAHAHAAAKQAAALgIAHQgHAIgJAAIgBgBg");
	this.shape_17.setTransform(39.6,46.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7F3B03").s().p("AhjAVQgIgHAAgLQAAgKAHgHQAHgIAKgBICmgFQAKAAAHAHQAHAIABALQAAAJgHAIQgHAIgKAAIimAFIgBABQgJAAgHgIg");
	this.shape_18.setTransform(39.6,46.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7F3B03").s().p("AhiAbQgIgGgBgLQAAgKAGgIQAHgIAJgBICngQQAKgBAHAHQAIAIABAKQAAAKgGAIQgHAIgKABIimAQIgBAAQgKAAgGgHg");
	this.shape_19.setTransform(39.6,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(12));

	// theeth
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag8AhQAAgcASgSQASgUAYAAQAZAAASAUQASASAAAcQAAABgeAAIhbgBg");
	this.shape_20.setTransform(39.4,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(14).to({_off:true},1).wait(12));

	// mouth
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#272B37").s().p("AgqAvQgSgUAAgbQAAgbASgUQASgTAYAAQAZAAASATQASAUAAAbQAAAbgSAUQgSAUgZAAQgYAAgSgUg");
	this.shape_21.setTransform(39.4,50.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(14).to({_off:true},1).wait(12));

	// eye2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAPQgGgGgBgJQABgHAGgHQAFgGAHAAQAIAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgIAAQgHAAgFgGg");
	this.shape_22.setTransform(32.9,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(14).to({_off:true},1).wait(12));

	// eye1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgNAPQgFgGAAgJQAAgHAFgHQAGgGAHAAQAHAAAHAGQAFAHAAAHQAAAJgFAGQgHAGgHAAQgHAAgGgGg");
	this.shape_23.setTransform(46.2,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(14).to({_off:true},1).wait(12));

	// eyebrow2
	this.instance = new lib.eyeBrowLeft();
	this.instance.parent = this;
	this.instance.setTransform(32.9,27.3,1,1,0,0,0,4.8,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30},14).to({_off:true},1).wait(12));

	// eyebrow1
	this.instance_1 = new lib.eyebrowRight();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.2,27.3,1,1,0,0,0,4.8,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:1.7,rotation:-30,x:46.3,y:27.2},14).to({_off:true},1).wait(12));

	// ear2
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D37A6B").s().p("AgMgbQALAAAGAIQAIAJAAAKQAAAMgIAIQgFAIgMAAg");
	this.shape_24.setTransform(55.7,33.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(14).to({_off:true},1).wait(12));

	// ear1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D37A6B").s().p("AgHAUQgHgIAAgMQAAgLAHgIQAHgIALAAIAEAAIgEAAIAAA3QgLAAgHgIg");
	this.shape_25.setTransform(23.4,33.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(14).to({_off:true},1).wait(12));

	// ears
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDC6AF").s().p("AiTAuQgSAAgNgNQgNgNAAgSIAAgDQAAgSANgMQANgOASAAIEnAAQATAAANAOQAMAMAAASIAAADQAAASgMANQgNANgTAAg");
	this.shape_26.setTransform(39.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(14).to({_off:true},1).wait(12));

	// face
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDC6AF").s().p("AgCDiQg8AAgqgpQgqgrAAg6IAAinQAAg7AqgqQAqgqA8AAIAFAAQA7AAArAqQAqAqAAA7IAACnQAAA7gqAqQgrApg7AAg");
	this.shape_27.setTransform(39.6,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(14).to({_off:true},1).wait(12));

	// hear2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7F3B03").s().p("AgZBVQgHgIgBgLQgFgDgEgEQgJgKAAgOQAAgLAGgIQgGgJAAgKQAAgNAJgKIAHgGQABgJAHgHIAHgFQACgJAFgGQAEgEAEgCQACgGADgEQAJgJANAAQAMAAAJAJQAJAKAAANQAAANgJAKQgEAEgEADQgCAFgEAEIgHAGQgCAJgGAHIgHAEQgBAGgEAGQAFAHABAJQAFACAEAFQAJAJAAAOQAAANgJAKQgJAJgLAAQgNAAgJgJg");
	this.shape_28.setTransform(24,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(14).to({_off:true},1).wait(12));

	// hear4
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7F3B03").s().p("AgPASQgGgIAAgKQAAgJAGgIQAGgHAJAAQAJAAAHAHQAGAIABAJQgBAKgGAIQgHAHgJAAQgJAAgGgHg");
	this.shape_29.setTransform(56.5,30,1.333,1.329);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7F3B03").s().p("AgPASQgHgIAAgKQAAgJAHgHQAHgIAIABQAJgBAHAIQAHAHAAAJQAAAKgHAIQgHAGgJAAQgIAAgHgGg");
	this.shape_30.setTransform(55.1,27.9,1.333,1.329);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7F3B03").s().p("AgPARQgGgHAAgKQAAgJAGgIQAHgHAIAAQAKAAAGAHQAGAIABAJQgBAKgGAHQgGAIgKAAQgIAAgHgIg");
	this.shape_31.setTransform(53.6,26.3,1.333,1.329);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7F3B03").s().p("AgPASQgHgIAAgKQAAgJAHgHQAHgIAIAAQAJAAAHAIQAHAHAAAJQAAAKgHAIQgHAHgJAAQgIAAgHgHg");
	this.shape_32.setTransform(56.3,38.6,1.333,1.329);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7F3B03").s().p("AgPASQgGgIgBgKQABgJAGgIQAHgHAIAAQAJAAAHAHQAGAIABAJQgBAKgGAIQgHAHgJAAQgIAAgHgHg");
	this.shape_33.setTransform(58,36,1.333,1.329);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7F3B03").s().p("AgPASQgHgIABgKQgBgJAHgIQAGgHAJAAQAJAAAHAHQAHAIAAAJQAAAKgHAIQgHAHgJAAQgJAAgGgHg");
	this.shape_34.setTransform(52.2,25.5,1.333,1.329);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7F3B03").s().p("AgPASQgGgIgBgKQABgJAGgHQAHgIAIABQAJgBAHAIQAGAHABAJQgBAKgGAIQgHAGgJAAQgIAAgHgGg");
	this.shape_35.setTransform(58,32.1,1.333,1.329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},14).to({state:[]},1).wait(12));

	// neck3
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F9B9A2").s().p("Ag2giIBsgBIgzBHg");
	this.shape_36.setTransform(39.1,69.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(14).to({_off:true},1).wait(12));

	// neck2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9B9A2").s().p("AgwAJQgFAAAAgEIAAgNIBrAAIAAANQAAAEgEAAg");
	this.shape_37.setTransform(38.9,65.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(14).to({_off:true},1).wait(12));

	// overol1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#283787").ss(0.6).p("AABCDIgBAAQgGAAgGgFQgGgGAAgHIAAjhQAAgHAGgFQAGgGAGAAIABAAQAHAAAGAGQAFAFAAAHIAADhQAAAHgFAGQgGAFgHAAg");
	this.shape_38.setTransform(29.6,77.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(14).to({_off:true},1).wait(12));

	// overol2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#283787").ss(0.6).p("AAABiIAAAAQgFAAgEgEQgFgFAAgGIAAilQAAgGAFgEQAEgFAFAAIAAAAQAGAAAFAFQAEAEAAAGIAAClQAAAGgEAFQgFAEgGAAg");
	this.shape_39.setTransform(50.3,77.3,1.333,1.329);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCFF00").s().p("ABhAHQgDgDAAgEQAAgDADgDQADgDAEAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgEAAgDgDgAhuAHQgDgDAAgEQAAgDADgDQADgDAEAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_40.setTransform(40,88);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6A84C0").s().p("AAACCQgHAAgGgGQgGgGAAgHIAAjdQAAgHAGgGQAGgGAHAAIAAAAQAIAAAGAGQAGAGAAAHIAADdQAAAHgGAGQgGAGgIAAgAgFBjQgDAEAAADQAAAFADADQADACADAAQAEAAADgCQADgDAAgFQAAgDgDgEQgDgDgEAAQgDAAgDADg");
	this.shape_41.setTransform(50.3,77.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_40},{t:this.shape_41},{t:this.shape_39}]},14).to({state:[]},1).wait(12));

	// overol1
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6A84C0").s().p("AAACDQgGAAgHgGQgFgFAAgHIAAjhQAAgHAFgGQAHgFAGAAIABAAQAGAAAGAFQAGAGAAAHIAADhQAAAHgGAFQgGAGgGAAg");
	this.shape_42.setTransform(29.6,77.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(14).to({_off:true},1).wait(12));

	// puccet
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#283787").ss(0.4).p("AhHggIAxgMQA3gGAnAXIgBAWQgBAYgDAIQgIAJgUAFQgmALg1gOQgFgCgFgKQgMgUADgmg");
	this.shape_43.setTransform(40,94.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6A84C0").s().p("Ag0AmQgFgCgFgKQgMgUADgmIAxgMQA3gGAnAXIgBAWQgBAYgDAIQgIAJgUAFQgQAFgUAAQgYAAgfgIg");
	this.shape_44.setTransform(40,94.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44,p:{y:94.8}},{t:this.shape_43,p:{y:94.8}}]}).to({state:[{t:this.shape_44,p:{y:95.1}},{t:this.shape_43,p:{y:95.1}}]},14).to({state:[]},1).wait(12));

	// puccet2
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.1).p("Ag5APIAkgLAg8ADIAkgLAg6AJIAkgLAg+gDIAkgLAAagIIAlAIAAagCIAlAIAgMgBIBIANAgMAFIAkAD");
	this.shape_45.setTransform(40.3,89.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUA1IAAgLIgqAEIgJhcIA9gGIACANIARAAIACgKIA9AKIgPBcIgQgDIAAADgAg4gNIAkgLgAA9gQIhIgOgAg5gTIAkgMgAAZgUIgkgDgABAgWIglgJgAg7gZIAkgMgABAgdIglgIgAg9ggIAkgLg");
	this.shape_46.setTransform(40.2,92.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(0.1).p("Ag5APIAkgLAg8ADIAkgLAg6AJIAkgLAg+gDIAkgLAAagCIAlAIAAagIIAlAIAgMgBIBIANAgMAFIAkAD");
	this.shape_47.setTransform(40.3,89.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45}]}).to({state:[{t:this.shape_46},{t:this.shape_47}]},14).to({state:[]},1).wait(12));

	// Layer_1
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F9B9A2").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_48.setTransform(44.7,65.3,1.333,1.329);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9B9A2").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_49.setTransform(44.6,65.4,1.333,1.329);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F9B9A2").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_50.setTransform(44.4,65.7,1.333,1.329);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9B9A2").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_51.setTransform(44.3,65.8,1.333,1.329);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F9B9A2").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_52.setTransform(44.5,65.4,1.333,1.329);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F9B9A2").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_53.setTransform(44.3,65.6,1.333,1.329);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F9B9A2").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_54.setTransform(33.5,65.6,1.333,1.329);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F9B9A2").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_55.setTransform(33.6,65.7,1.333,1.329);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F9B9A2").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_56.setTransform(33.7,65.7,1.333,1.329);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F9B9A2").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_57.setTransform(33.4,65.5,1.333,1.329);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F9B9A2").s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_58.setTransform(33.7,65.6,1.333,1.329);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.1).p("Ag0ACIAkgKAAbAAIAZAGAgJgGIAkABIAaAFAAPgCIAMACAgKAAIAlAAAgLAGIAlAC");
	this.shape_59.setTransform(40.1,91.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#283787").ss(0.4).p("ADyCwIgLjFQAAgOgDgSIgCAAIgCAAQgfAAgYgRQgHgFgGgHQgMgLgHgOQgJgUAAgXQgFgGAAgCIgSAAQhqgihyAiIABAAQAAABgFADQgFACAAACQAAAogcAcQgdAdgnAAIgSgCQAAACgBACQgDAPAAAPIADBBIAEBNIACA3gAhHhFIAwgLQA3gGAoAWIgBAXQgBAYgDAIQgJAJgTAEQgnAMg1gPQgEgBgGgKQgMgUAEgng");
	this.shape_60.setTransform(40.1,96.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#9B2C2C").ss(0.4).p("AjoApIAAjJQAAgWAQgPQAQgQAWAAIByAAIAEAAIByAAAA7jVIB5AAQAVAAAQAQQANAMACARQABAEAAAEIAAC2IAAADIAAAOAjkDWQgEgJAAgKIAAg6");
	this.shape_61.setTransform(39.4,87.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9B2C2C").s().p("AAAAoIg8hKQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIADAAIABABIA6BHIA3hIIAAgBQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAIABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIg5BKIgBABIgCACIgCgCg");
	this.shape_62.setTransform(39,69.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DA3C3C").s().p("AjoDDIAAg6IAEBNQgEgJAAgKgAjoigQAAgWAQgPQAQgQAWAAIByAAQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABIA+BMQAAAAABAAQAAABABAAQAAAAAAgBQAAAAABAAIAAgBIA6hMQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIB6AAQAVAAAQAQQANAMACARIABAIIAAC2IAAADIAAAOIgCAAQgfAAgYgRIgNgMQgMgLgHgNQgJgUAAgXQgFgGAAgCIgSAAQhrgihxAiIABAAQAAABgFADQgFACAAACQAAAogcAbQgdAdgnAAIgSgCIgBAEgAg8jUIAAgBIBxAAIg1BJg");
	this.shape_63.setTransform(39.4,87.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D7555").s().p("AjXCwQhogggvhBQAgg5AqgVIAPANQASANAMAAIgUgjIAgAIIgHgeQAOgKAUgLIADgBQAdgPAZgIIAPgEQABADADAAQCyggB0ALQAEAAAAgEIBcAMQBiANALAFIAAAzQgHA5gfAuIgygFIAYAeIgMAMIgZAUIgFAEQgrAegoAKIgDAAIkkAMIgDAAQgrgDg0gRgAh0hxQALgbALgOIAIgHQAHgHAPgIQAdgQAlgBQAAABAkgDQAqAAAcARIAWAUIAEAEQATAXAIAaQhwgKivAeQAEgOAGgOg");
	this.shape_64.setTransform(37.1,20.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7B5639").s().p("Ah5DJQhLgHg+gcQhGgfgqg1IgBgEQAgg1AsgaQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQAlAfgCgJQAAgFgGgJIgJgNQAAgBgBAAQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAYAFQABgBgFgXQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQANgJAegLIgHAEQgUALgOAJIAHAeIgggHIAUAiQgMAAgSgNIgPgNQgqAVggA6QAvBABoAhQA0AQArAEIADAAIAAAAQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBAAIgBAAgACuC5IAAgBIADAAQAogKArgeQAWgNAIgKIAMgMIgYgfIAyAFQAfgtAHg6IAAgyQgLgGhigNIhcgLQAAADgEAAQh0gKiyAfQgDAAgBgDIgPAEIAMgHQAMgIALgcQAKgYAIgLIAFgGQAagbAwgKQAogIArAHQAuAIAdAkIADAEIAKATQAGAOAEAEQAGAGAEABIAQAEQAWAFBEAFQA7AFAgAMQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAKBMgxBPQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgYgEQgRgCgEABQADAAAHAIIAMAQQADAEgDACQg4A1hGAXIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBgAhBiwQgPAIgHAHIgIAIQgLANgLAbQgGAPgEANQCvgeBwAKQgIgZgTgXIgEgFIgWgUQgcgRgqAAQgkADAAgBQglABgdAQg");
	this.shape_65.setTransform(37.2,20.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6A84C0").s().p("AjoCwIgDg3IgDhNIgDhBQAAgPADgPIAAgEIATACQAmAAAegdQAcgcAAgoQAAgCAEgCQAGgDAAgBIgCAAQBygiBqAiIASAAQAAACAFAGQAAAXAKAUQAGAOAMALIANAMQAYARAfAAIACAAIACAAQADASAAAOIALDFgAADAJQATAAAQgEIABgBQAUgEAIgJQADgIABgYIABgXIgBAAIgEgCIAAAAQgdgPgmgBIAAAAIAAAAIgUACIgCAAIgxALIgBARQAAAbAJAPQAGAKAFABIABAAIACABQAcAHAXAAIABAAIAAAAgAACAJQgXAAgcgHIgCgBIgBAAQgFgBgGgKQgJgPAAgbIABgRIAxgLIACAAIAUgCIAAAAIAAAAQAmABAdAPIAAAAIAEACIABAAIgBAXQgBAYgDAIQgIAJgUAEIgBABQgQAEgTAAIAAAAIgBAAgAAagpIglgCgAAbgxIAZAGIgZgGIgMgDIAMADIglgBIAlABgAgzgvIAkgLgAAcg3IAZAGIgZgGIglgBgAAbgxgAhHhFg");
	this.shape_66.setTransform(40.1,96.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F9B9A2").s().p("AiUDFQgNgJgFgQIhMk2QgFgQAIgOQAIgPAOgFIAYgGQAPgFAOAJQAOAIADAQIBOE2QAEAQgIAPQgHAOgPAFIgZAHQgFACgFAAQgJAAgJgGgAB4DDIgYgHQgPgEgHgPQgIgPAEgQIBNk2QAEgQAOgIQAOgJAOAFIAZAHQAOAFAHAOQAJAOgEARIhOE1QgFARgNAIQgIAGgKAAQgFAAgFgCg");
	this.shape_67.setTransform(40.2,162);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#593412").s().p("AhKABQgOgHAAgPIAEgNQAbANArALQArAKA8AJIgEAPQgCALgSAAg");
	this.shape_68.setTransform(54,186.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CCFF00").s().p("AAAAAIABAAIgBABIAAAAg");
	this.shape_69.setTransform(62.8,89.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(0.1).p("Ag0ACIAkgKAgJgGIAkABIAaAFAAPgCIAMACIAZAGAgKAAIAlAAAgLAGIAlAC");
	this.shape_70.setTransform(40.1,91.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#283787").ss(0.4).p("ADyCwIgLjFQAAgOgDgSIgCAAIgCAAQgoAAgcgdQgcgcAAgoQgFgGAAgCIgSAAQhqgihyAiIABAAQAAABgFADQgFACAAACQAAAogcAcQgdAdgnAAIgSgCQAAACgBACQgDAPAAAPIADBBIAEBNIACA3gAhHhFIAwgLQA3gGAoAWIgBAXQgBAYgDAIQgJAJgTAEQgnAMg1gPQgEgBgGgKQgMgUAEgng");
	this.shape_71.setTransform(40.1,96.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#9B2C2C").ss(0.4).p("AjoApIAAjJQAAgWAQgPQAQgQAWAAIByAAIAEAAIByAAAA7jVIB5AAQAVAAAQAQQAQAPAAAWIAACpIAAAQIAAAOAjkDWQgEgJAAgKIAAg6");
	this.shape_72.setTransform(39.4,87.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CCFF00").s().p("AgBgHIABABQACADAAADQAAAEgCADIgBABg");
	this.shape_73.setTransform(62.9,88.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6A84C0").s().p("AjoCwIgDg3IgDhNIgDhBQAAgPADgPIAAgEIATACQAmAAAegdQAcgcAAgoQAAgCAEgCQAGgDAAgBIgCAAQBygiBqAiIASAAQAAACAFAGQAAAoAcAcQAcAdAoAAIACAAIACAAQADASAAAOIALDFgAADAJQATAAAQgEIABgBQAUgEAIgJQADgIABgYIABgXIgBAAIgEgCIAAAAQgdgPgmgBIAAAAIAAAAIgUACIgCAAIgxALIgBARQAAAbAJAPQAGAKAFABIABAAIACABQAcAHAXAAIABAAIAAAAgAACAJQgXAAgcgHIgCgBIgBAAQgFgBgGgKQgJgPAAgbIABgRIAxgLIACAAIAUgCIAAAAIAAAAQAmABAdAPIAAAAIAEACIABAAIgBAXQgBAYgDAIQgIAJgUAEIgBABQgQAEgTAAIAAAAIgBAAgAAagpIglgCgAAbgxIAZAGIgZgGIgMgDgAgzgvIAkgLgAAbgxIglgBgAAcg3IAZAGIgZgGIglgBgAhHhFg");
	this.shape_74.setTransform(40.1,96.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DA3C3C").s().p("AjoDDIAAg6IAEBNQgEgJAAgKgAjoigQAAgWAQgPQAQgQAWAAIByAAQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABIA+BMQAAAAABAAQAAABABAAQAAAAAAgBQAAAAABAAIAAgBIA6hMQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIB6AAQAVAAAQAQQAQAPAAAWIAACpIAAAQIAAAOIgCAAQgoAAgcgdQgcgbAAgoQgFgGAAgCIgSAAQhrgihxAiIABAAQAAABgFADQgFACAAACQAAAogcAbQgdAdgnAAIgSgCIgBAEgAg8jUIAAgBIBxAAIg1BJg");
	this.shape_75.setTransform(39.4,87.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_62},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_67},{t:this.shape_68},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},14).to({state:[]},1).wait(12));

	// shirtHand1
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DA3C3C").s().p("AgIBSQgbgCgTgWQgWgYAAgjQgBgUAIgQIAAgBQAGgLAJgJQAWgXAggBQAdAAAVASIACACIADAEQAWAYABAiIgBAPIgDAIQgBACAAAEIgBADQgFAOgMAMQgTAWgbACIgJABIgIgBg");
	this.shape_76.setTransform(65.9,79.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(14).to({_off:true},1).wait(12));

	// shirtHand2.1
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#9B2C2C").ss(0.4).p("AlTgBQAAAjAXAYQAWAZAhAAQAhAAAWgZQAXgYAAgjQAAgjgXgZQgWgZghAAQghAAgWAZQgXAZAAAjgAC4AEQAAAjAXAYQAWAYAhAAQAhAAAWgYQAXgYAAgjQAAgigXgZQgWgZghAAQghAAgWAZQgXAZAAAig");
	this.shape_77.setTransform(39.8,78.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(14).to({_off:true},1).wait(12));

	// shirtHand2.2
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DA3C3C").s().p("AggBOQgMgGgKgMQgXgYAAgkQAAgiAXgZQAWgZAgAAQAhAAAWAZQAXAZAAAiQAAAkgXAYIgLALQgTAOgZAAQgRAAgPgHg");
	this.shape_78.setTransform(13.7,78.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(14).to({_off:true},1).wait(12));

	// hand2
	this.instance_2 = new lib.handLeft();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.6,92.2,1,1,0,0,0,7.8,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:150,x:8.6,y:72.1},14).to({_off:true},1).wait(12));

	// hand2
	this.instance_3 = new lib.handRight();
	this.instance_3.parent = this;
	this.instance_3.setTransform(66,92.6,1,1,0,0,0,7.8,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:7.7,rotation:-155.5,x:69.6,y:72.5},14).to({_off:true},1).wait(12));

	// neck1
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F9B9A2").s().p("Ag7A4IAAhvIB3AAIAABvg");
	this.shape_79.setTransform(39.2,60.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(14).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.2,192);


(lib.balloon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizAeIA8gxIEhgKIAKA7g");
	mask.setTransform(22.6,3);

	// Layer 3
	this.instance = new lib.tape();
	this.instance.parent = this;
	this.instance.setTransform(25.2,4.1,1,1,0,0,0,15.3,1.7);
	this.instance.alpha = 0.969;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4DAEA").s().p("AgCCkIgWgKQgGgDgCgGQgbhmAehcQAXhIAugqQACgCADADQADACgDADQg1BGgCBwQgBBEAPBBQABAEgCACIgDABIgCgBg");
	this.shape.setTransform(9.1,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2E3B97").ss(0.3).p("AD1AAQAAB4hIBVQhIBVhlAAQhkAAhIhVQhIhVAAh4QAAh3BIhVQBIhVBkAAQBlAABIBVQBIBVAAB3g");
	this.shape_1.setTransform(24.7,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#586CB3").s().p("AisDNQhIhVAAh4QAAh3BIhVQBHhVBlAAQBlAABIBVQBIBVAAB3QAAB4hIBVQhIBVhlAAQhlAAhHhVg");
	this.shape_2.setTransform(24.7,36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2E3B97").ss(0.3).p("AAvgPIhdAAQgEAAACAEQAFAJgDAHQgCAGADADQADACAngBQAoAAADABQAFABgBgDQgCgLAAgBQABgCAGgLQACgEgEAAg");
	this.shape_3.setTransform(25.1,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#586CB3").s().p("AAoAQQgDgBgoAAQgnABgDgCQgDgDACgGQADgHgFgJQgCgEAEAAIBdAAQAEAAgCAEIgHANIACAMQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_4.setTransform(25.1,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2E3B97").ss(0.3).p("AgiAAQABAAADACQAGAEgBABQALgHAMAAQAOgBAWAIQABABAFACQAFABgBgEQgCgKAAgHQABgIAGgMQABgBgBgBQAAgCgCAAIhdAAQgCAAAAACQgBABABABQALATAAABQACAFABAFQAAACAAADQAAgBgBgCQgBgDABgBQAAABABABgAgiAFQAAABgBABQgBAFAAgC");
	this.shape_5.setTransform(25.1,4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#586CB3").s().p("AAoAWIgGgCQgWgJgOABQgMABgLAHQABgBgGgEIgEgEQgBgFgCgEIgLgTQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIBdAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgGALgBAIQAAAGACAMQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_6.setTransform(25.1,3);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.balloon1, new cjs.Rectangle(4.6,0,36,6), null);


(lib.finishAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_97 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(97).call(this.frame_97).wait(14));

	// Layer_2
	this.instance = new lib.waterFull();
	this.instance.parent = this;
	this.instance.setTransform(-390.4,145.8,1.339,1.336,0,0,0,59.7,97.7);
	this.instance.alpha = 0.648;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(98));

	// caractor
	this.instance_1 = new lib.caractor("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-377.7,-59.6,1,1,0,0,0,37.3,95.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({mode:"single",startPosition:14},0).to({regX:38.3,regY:95.9,scaleX:0.68,scaleY:0.68,rotation:-144.8,x:-401.6,y:150.2,startPosition:13},33).to({regX:38.1,scaleX:0.68,scaleY:0.68,rotation:-189.8,x:-386.6,y:176.5},6).to({regY:96,rotation:-294.8,x:-392.4,y:221.4},46).to({_off:true},1).wait(12));

	// banch
	this.instance_2 = new lib.banch();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-369.1,-3.7,1,1,0,0,0,65.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({regX:130.9,regY:40.2,scaleX:0.97,scaleY:0.99,rotation:-5.8,x:-303.5,y:21.7},0).to({regX:131,regY:40.4,scaleX:0.62,scaleY:0.82,rotation:-90,x:-306.6,y:14},31).wait(51).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434.6,-154.7,131,192);


(lib.fail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(2));

	// Layer 1
	this.instance = new lib.X();
	this.instance.parent = this;
	this.instance.setTransform(49,-232);

	this.anTxt = new cjs.Text("", "16px 'Arial'");
	this.anTxt.name = "anTxt";
	this.anTxt.textAlign = "right";
	this.anTxt.lineHeight = 20;
	this.anTxt.lineWidth = 128;
	this.anTxt.parent = this;
	this.anTxt.setTransform(61.6,-200);

	this.Apic2 = new lib.Apic2();
	this.Apic2.name = "Apic2";
	this.Apic2.parent = this;
	this.Apic2.setTransform(-0.6,-140.5,0.707,1.079,0,0,0,94.5,58.5);
	this.Apic2.alpha = 0.789;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2.5,1,1).p("ArDAAIWHAA");
	this.shape.setTransform(-2.5,-71.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("ALKKvIAAAPALNq5IAAVlArMq9IAAVsIAAAK");
	this.shape_1.setTransform(-2.3,-141.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9BAD3").s().p("Aj5A2IAOgMIgPgNIAOgNIgQgMIAGgEIAKgHIgQgOIAPgMIgNgMQAAgBgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAIHzgIQAAgBABAAQAAABAAAAQAAAAAAAAQAAABgBABIgNAMIAOAMIgOAOIAOAMIgEADIgJAIIAOANIgPANIAOAMQAFADgFAAInxAIQgFgBADgCg");
	this.shape_2.setTransform(-2.4,-213.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("ArKK+IAA1rIAAgQIHUAAIgGAEIAQAMIgOANIAPANIgOAMQgDACAFABIHxgIQAFAAgFgDIgOgMIAPgNIgOgNIAJgIIHWAAIAAV7g");
	this.shape_3.setTransform(-2.4,-143.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6F6F6").s().p("ArKK+IAA17IHUAAIgGAEIAQAMIgOANIAPANIgOAMQgDACAFABIHxgIQAFAAgFgDIgOgMIAPgNIgOgNIAJgIIHWAAIAAV7g");
	this.shape_4.setTransform(-2.4,-143.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.Apic2},{t:this.anTxt},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.Apic2},{t:this.anTxt},{t:this.instance}]},36).wait(1));

	// arrow
	this.instance_1 = new lib.AI_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-94,209.6,0.647,0.602,0,0,180);
	this.instance_1._off = true;

	this.instance_2 = new lib.AI("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.9,31.2,0.391,0.445,0,0,180,0,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true,regY:0.1,scaleX:0.39,scaleY:0.45,x:41.9,y:31.2},30).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},30).to({startPosition:0},3).to({startPosition:0},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2E3B97").ss(0.3).p("ABBmdIABAAQBmAWBPBdQBoB7AACtQAACshoB7QhMBZhjAZABGmdQBnAWBPBdQBoB7AACtQAACshoB7QhOBbhmAXIhFAHQgDAAgBAAIhFgHQhngXhPhbQhnh7AAisQAAitBnh7QBLhYBhgZIABAA");
	this.shape_5.setTransform(2.3,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2E3B97").ss(0.3).p("ABCAMQADgJAEgHQACgBgCgCQAAgDgCAAIgFAAAA9AMQADgJAEgHQACgBgCgCQAAgCgCgBIiIAAQgCAAgBADQgBACABABQAGAIADAK");
	this.shape_6.setTransform(1.7,-41.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D4DAEA").s().p("AgDDtIgggPQgJgEgDgKQgniSAriFQAihoBCg8QADgDAEADQAEAEgDAEQhNBlgDChQgBBiAWBfQABAFgDADQgDACgBAAIgDgBg");
	this.shape_7.setTransform(-21.7,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#586CB3").s().p("AgBHBIhFgHQhngXhPhcQhnh6AAitQAAisBnh7QBLhYBhgYIABAAICQgDIABAAIAEAAQBnAWBPBdQBoB7AACsQAACthoB6QhOBchmAXQBjgZBMhaQBoh6AAitQAAishoh7QhPhchmgXQBmAXBPBcQBoB7AACsQAACthoB6QhMBahjAZIhFAHIgEAAgAi2kSQhDA9giBoQgrCFAoCSQACAJAJAFIAgAPQAEACAEgDQAEgEgCgEQgXhfAChhQACiiBOhmQAEgDgEgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEABgAhPm6QAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAICIAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIABACIgBACQgEAIgDAIQADgIAEgIIABgCIgBgCQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIAFAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgEAIgDAIIgFAAIh9ADQgDgKgGgJg");
	this.shape_8.setTransform(2.3,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A9BAD3").s().p("AjXAcIgFAAQgEgBADgBIANgFIgOgGIANgGIgOgGIAOgFIgOgFIANgGIgLgFQgCgCACABIAEAAQgBgBACABICXgDIB9gCIAFAAICXgDIABAAIAEAAQABAAAAAAQAAAAABABQAAAAAAAAQgBAAAAABIgNAFIANAGIgNAGIANAFIgMAGIAMAFIgNAGIANAFQAEACgFAAIgDAAIgCAAIiGACIgHAAIgEAAIgBAAIiQACIgBAAIiMADg");
	this.shape_9.setTransform(1.8,-38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-232,164,279.9);


(lib.BottomProBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		//this.stop();
	}
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57).call(this.frame_57).wait(1).call(this.frame_58).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhjvABaIAAizMDHfAAAIAACzg");
	var mask_graphics_32 = new cjs.Graphics().p("Ehj0AGeIAAi1MDHpAAAIAAC1g");
	var mask_graphics_33 = new cjs.Graphics().p("Ehj6ABaIAAizMDH0AAAIAACzg");
	var mask_graphics_34 = new cjs.Graphics().p("Ehj+ABaIAAizMDH+AAAIAACzg");
	var mask_graphics_35 = new cjs.Graphics().p("EhkDABaIAAizMDIHAAAIAACzg");
	var mask_graphics_36 = new cjs.Graphics().p("EhkHABaIAAizMDIQAAAIAACzg");
	var mask_graphics_37 = new cjs.Graphics().p("EhkMABaIAAizMDIYAAAIAACzg");
	var mask_graphics_38 = new cjs.Graphics().p("EhkPABaIAAizMDIgAAAIAACzg");
	var mask_graphics_39 = new cjs.Graphics().p("EhkUABaIAAizMDIoAAAIAACzg");
	var mask_graphics_40 = new cjs.Graphics().p("EhkXABaIAAizMDIvAAAIAACzg");
	var mask_graphics_41 = new cjs.Graphics().p("EhkaABaIAAizMDI1AAAIAACzg");
	var mask_graphics_42 = new cjs.Graphics().p("EhkeABaIAAizMDI8AAAIAACzg");
	var mask_graphics_43 = new cjs.Graphics().p("EhkhABaIAAizMDJDAAAIAACzg");
	var mask_graphics_44 = new cjs.Graphics().p("EhkjABaIAAizMDJHAAAIAACzg");
	var mask_graphics_45 = new cjs.Graphics().p("EhkmABaIAAizMDJNAAAIAACzg");
	var mask_graphics_46 = new cjs.Graphics().p("EhkoABaIAAizMDJRAAAIAACzg");
	var mask_graphics_47 = new cjs.Graphics().p("EhkqABaIAAizMDJWAAAIAACzg");
	var mask_graphics_48 = new cjs.Graphics().p("EhksABaIAAizMDJZAAAIAACzg");
	var mask_graphics_49 = new cjs.Graphics().p("EhkuABaIAAizMDJdAAAIAACzg");
	var mask_graphics_50 = new cjs.Graphics().p("EhkwABaIAAizMDJgAAAIAACzg");
	var mask_graphics_51 = new cjs.Graphics().p("EhkxABaIAAizMDJjAAAIAACzg");
	var mask_graphics_52 = new cjs.Graphics().p("EhkyABaIAAizMDJlAAAIAACzg");
	var mask_graphics_53 = new cjs.Graphics().p("EhkzABaIAAizMDJnAAAIAACzg");
	var mask_graphics_54 = new cjs.Graphics().p("EhkzABaIAAizMDJoAAAIAACzg");
	var mask_graphics_55 = new cjs.Graphics().p("Ehk0ABaIAAizMDJpAAAIAACzg");
	var mask_graphics_56 = new cjs.Graphics().p("Ehk0ABaIAAizMDJqAAAIAACzg");
	var mask_graphics_57 = new cjs.Graphics().p("Ehk0ABaIAAizMDJqAAAIAACzg");
	var mask_graphics_58 = new cjs.Graphics().p("EhjvABaIAAizMDHfAAAIAACzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:243.3,y:73.7}).wait(32).to({graphics:mask_graphics_32,x:245.1,y:41.4}).wait(1).to({graphics:mask_graphics_33,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_34,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_35,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_36,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_37,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_38,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_39,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_40,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_41,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_42,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_43,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_44,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_45,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_46,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_47,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_48,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_49,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_50,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_51,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_52,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_53,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_54,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_55,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_56,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_57,x:245.1,y:73.7}).wait(1).to({graphics:mask_graphics_58,x:243.3,y:73.7}).wait(1));

	// Layer 3
	this.instance = new lib.water();
	this.instance.parent = this;
	this.instance.setTransform(229.9,81.1,1.324,1.235,0,0,0,468.8,4.3);
	this.instance.alpha = 0.801;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({x:227.2,y:83.7},0).to({y:76.6},5,cjs.Ease.get(1)).wait(10).to({x:229.9,y:81.1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.6,75.8,620.7,6.9);


(lib.AboutPop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.HitBtn.addEventListener("click", HitBtnFunction.bind(this));
		function HitBtnFunction() {
		
			window.open("http://www.hit.ac.il/telem/overview/", "_blank");
		}
		
		this.ClosePopUp.addEventListener("click", ClosePopUpFunction.bind(this));
		function ClosePopUpFunction() {
			
			this.visible = false;
			if(document.getElementById("gameCode_txt")!= null){
			document.getElementById("gameCode_txt").style.opacity = "1";}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.TimeTxt = new cjs.Text(":", "bold 23px 'Arial'");
	this.TimeTxt.name = "TimeTxt";
	this.TimeTxt.lineHeight = 28;
	this.TimeTxt.lineWidth = 8;
	this.TimeTxt.parent = this;
	this.TimeTxt.setTransform(332.2,264.4,1.119,0.953);

	this.text = new cjs.Text("פותח במסגרת פרויקט בקורסים", "bold 23px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 435;
	this.text.parent = this;
	this.text.setTransform(486.5,263.5);

	this.text_1 = new cjs.Text("+ סביבות לימוד אינטראקטיביות 2 \n+ תכנות 2 \nתכנות אינטראקטיבי 2 תשע\"ח ", "23px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 435;
	this.text_1.parent = this;
	this.text_1.setTransform(486.5,294.8);

	this.instance = new lib.LogoBig();
	this.instance.parent = this;
	this.instance.setTransform(393,118);

	this.TimeTxt_1 = new cjs.Text(":", "bold 23px 'Arial'");
	this.TimeTxt_1.name = "TimeTxt_1";
	this.TimeTxt_1.lineHeight = 28;
	this.TimeTxt_1.lineWidth = 8;
	this.TimeTxt_1.parent = this;
	this.TimeTxt_1.setTransform(526.7,222,1.119,0.953);

	this.TimeTxt_2 = new cjs.Text("אפיון ופיתוח ", "bold 23px 'Arial'");
	this.TimeTxt_2.name = "TimeTxt_2";
	this.TimeTxt_2.lineHeight = 28;
	this.TimeTxt_2.lineWidth = 116;
	this.TimeTxt_2.parent = this;
	this.TimeTxt_2.setTransform(533.7,222,1.119,0.953);

	this.TimeTxt_3 = new cjs.Text("איתי עינתי וסתיו בר שי", "23px 'Arial'");
	this.TimeTxt_3.name = "TimeTxt_3";
	this.TimeTxt_3.textAlign = "right";
	this.TimeTxt_3.lineHeight = 28;
	this.TimeTxt_3.lineWidth = 242;
	this.TimeTxt_3.parent = this;
	this.TimeTxt_3.setTransform(521.2,222,1.119,0.953);

	this.ClosePopUp = new lib.CloseBtn();
	this.ClosePopUp.name = "ClosePopUp";
	this.ClosePopUp.parent = this;
	this.ClosePopUp.setTransform(172.6,81.7,0.729,0.778);

	this.HitBtn = new lib.HitBtn();
	this.HitBtn.name = "HitBtn";
	this.HitBtn.parent = this;
	this.HitBtn.setTransform(237.2,387.9,0.473,0.436,0,0,0,0.2,0.3);
	new cjs.ButtonHelper(this.HitBtn, 0, 1, 1);

	this.text_2 = new cjs.Text("אודות", "bold 35px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 41;
	this.text_2.lineWidth = 100;
	this.text_2.parent = this;
	this.text_2.setTransform(485.6,60);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Eg0KgbJIAAnyMBoVAAAIAAHyMAAAA97EA0LAi8MhkKAAAIkLAAEg0KAiyMAAAg97EA0LgbJMhoVAAA");
	this.shape.setTransform(481.9,279.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F6F6").s().p("EgyEAAOIAAgRIAAgKMBkJAAAIAAAKMhkJAAAMBkJAAAIAAARgEAyFgADg");
	this.shape_1.setTransform(495.3,503.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Egv+Ai3IkMAAMAAAg96IAAnzMBoVAAAIAAHzMhoVAAAMBoVAAAMAAAA96gEA0LgbDg");
	this.shape_2.setTransform(481.9,279.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgzLAcSMAAAg4jMBmXAAAMAAAA4jg");
	this.shape_3.setTransform(482,303.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.HitBtn},{t:this.ClosePopUp},{t:this.TimeTxt_3},{t:this.TimeTxt_2},{t:this.TimeTxt_1},{t:this.instance},{t:this.text_1},{t:this.text},{t:this.TimeTxt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AboutPop, new cjs.Rectangle(146.5,54.5,670.8,450.5), null);


(lib.suc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_57 = function() {
		this.stop();
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57).call(this.frame_57).wait(1));

	// Layer_2
	this.instance = new lib.V();
	this.instance.parent = this;
	this.instance.setTransform(39,-248,0.675,0.706);

	this.anTxt = new cjs.Text("", "16px 'Arial'");
	this.anTxt.name = "anTxt";
	this.anTxt.textAlign = "right";
	this.anTxt.lineHeight = 20;
	this.anTxt.lineWidth = 128;
	this.anTxt.parent = this;
	this.anTxt.setTransform(60,-202);

	this.Apic2 = new lib.Apic2();
	this.Apic2.name = "Apic2";
	this.Apic2.parent = this;
	this.Apic2.setTransform(-2.2,-142.5,0.707,1.079,0,0,0,94.5,58.5);
	this.Apic2.alpha = 0.789;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2.5,1,1).p("ArDAAIWHAA");
	this.shape.setTransform(-4.3,-73.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("ALNq4IAAVoIAAANArMq8IAAV2");
	this.shape_1.setTransform(-4.1,-143.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9BAD3").s().p("Aj5A2IAOgMIgPgNIAPgNIgRgMIAGgEIAKgHIgQgOIAPgMIgNgMQAAgBgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAIHzgIQAAgBABAAQAAABAAAAQAAAAAAAAQAAABgBABIgNAMIAPAMIgPAOIAPAMIgFADIgKAIIAPANIgPANIAOAMQAFADgFAAInyAIQgEgBADgCg");
	this.shape_2.setTransform(-4,-215.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("ArKK+IAA17IHUAAIgGAEIARAMIgPANIAPANIgOAMQgDACAEABIHygIQAFAAgFgDIgOgMIAPgNIgPgNIAKgIIHWAAIAAAUIAAVng");
	this.shape_3.setTransform(-4,-145.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6F6F6").s().p("ArKK+IAA17IHUAAIgGAEIARAMIgPANIAPANIgOAMQgDACAEABIHygIQAFAAgFgDIgOgMIAPgNIgPgNIAKgIIHWAAIAAV7g");
	this.shape_4.setTransform(-4,-145.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.Apic2},{t:this.anTxt},{t:this.instance,p:{y:-248}}]}).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.Apic2},{t:this.anTxt},{t:this.instance,p:{y:-242}}]},57).wait(1));

	// arrow
	this.instance_1 = new lib.AI_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60.6,107.6,0.647,0.602,0,0,180);
	this.instance_1._off = true;

	this.instance_2 = new lib.AI("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.9,13.9,0.391,0.445,0,0,180,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},20).to({state:[]},3).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true,regY:0.1,scaleX:0.39,scaleY:0.45,x:-10.9,y:13.9},20).wait(36));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2E3B97").ss(0.3).p("ABTmdQAAAAAAAAQBgAZBJBXQA0A+AaBLQAZBJABBWQAAABAAACQgBBVgZBJQgbBIgzA9QgjApgoAbABAmdQBoAWBPBeQBoB6AACtQAACshoB7QghAmglAaQg6AqhFALIgvAEQgDAAgBAAIhGgIQhmgWhPhbQhnh7AAisQAAitBnh6QAnguAsgcQAngaArgNQAAAAAAAAAFKCcQgaBLg0A+QhWBlh0AQAiplzQArgcAvgM");
	this.shape_5.setTransform(0.3,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2E3B97").ss(0.3).p("ABJgJQACgBgCgCABEAHQAAgBAAgBQACgFADgFQACgCgCgCAA+AKQAAgCABgBQAAgBAAgBQACgFADgFQACgCgCgCQAAgCgCAAIiGAAIgCAAQgCAAgBACQgBACABACQAEAFACAFQABACABACQAAACABABABCAHQABgBAAgBQACgHAEgHAhEgMQAAAAAAAB");
	this.shape_6.setTransform(-0.3,-43.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D4DAEA").s().p("AgDDtIgggPQgJgEgDgKQgniSAriFQAihoBCg8QADgDAEADQAEAEgDAEQhNBlgDChQgBBiAWBfQABAFgDADQgDACgBAAIgDgBg");
	this.shape_7.setTransform(-23.7,-3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#586CB3").s().p("AgBHCIhGgIQhmgWhPhcQhnh7AAisQAAitBnh6QAngtAsgdQAngaArgNIAAAAIAIAAICPgDIATAAIAAAAQBgAZBJBXQA0A+AaBMQAZBJABBUIAAAEQgBBVgZBJQgbBJgzA8QgjApgnAcQAkgbAhgmQBoh7AAisQAAithoh6QhPhehogWQBoAWBPBeQBoB6AACtQAACshoB7QghAmgkAbQg7AphFAMIgvAEIgEAAgAi2kRQhDA8giBpQgrCFAoCSQACAJAJAEIAgAPQAEACAEgDQAEgDgCgFQgXheAChhQACijBOhlQAEgDgEgEQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgEABgAiplQQArgbAvgMQgvAMgrAbgACyGJQAngcAjgpQAzg8AbhJQgaBLg0A+QhWBlh0ARQBFgMA7gpgACyGJIAAAAgAhImrIgBgEIgGgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAIACAAICGAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIABACIgBACIgFAKIgBACIgBAEIh9ACIgCgEgAA8mtIABgCIAGgOQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgFAKIAAACgAA8mtIgEAAIABgCIAFgKIABgCIgBgCQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIiGAAIAAgBICNAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgGAOIgBACg");
	this.shape_8.setTransform(0.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A9BAD3").s().p("AjXAdIgFAAQgEAAADgBIAFgCQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAGgDIgMgGIAGgCIgBgBIAGgDIgMgFIAHgDIgCgBIAHgCIgMgFIAHgDIgCAAIAHgDIgKgFQgCgBACABIAEAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAGAAIgGgDQgCgBACABICWgEIABAEIB+gCIABgEIADAAIACAAICagCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAgBAAIAAABIgFACIAEAAQABAAAAAAQAAAAABAAQAAABAAAAQgBAAAAAAIgJAEIAJAEIgEACIAEACIgJAEIAJAEIgDACIADABIgIADIAIAEIgDACIADABIgJAFIAJADQAEACgFAAIgEAAIAFACQAEACgFAAIgDAAIgCAAIhwABIgPAAIgBAAIgTAAIiPADIgHAAIgBAAIgPAAIh2ACIAAAAg");
	this.shape_9.setTransform(-0.2,-40.3);

	this.instance_3 = new lib.balloon1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.7,-2.1,1.424,1.362,0,0,0,24.6,32.5);

	this.instance_4 = new lib.balloon2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.7,-0.2,1.424,1.362,0,0,0,24.4,29);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3794").s().p("ACbAWQhHgohUAAQhSAAhIAnQAAAAgBAAQAAABAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQBKgoBUAAQBVAABHApQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgCABIgBgBg");
	this.shape_10.setTransform(0.6,-37.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIABQAAgIAHAAQAIgBABAHQABAIgIABIgBAAQgHAAgBgHg");
	this.shape_11.setTransform(-10.2,41.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.5,-0.5,0.6).s().p("AgHABQgBgJAIABQAJAAgBAIQABAHgIAAQgJgBABgGg");
	this.shape_12.setTransform(-86.4,-41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.6,0.6).s().p("AgIABQAAgJAJABQAJAAgCAIQAAAHgIAAQgIAAAAgHg");
	this.shape_13.setTransform(45.5,-4.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.6,0.6).s().p("AgIAAQACgIAGAAQAKABgCAHQAAAHgHABQgJgBAAgHg");
	this.shape_14.setTransform(48.9,-4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.5,0.6).s().p("AgGAFQgHgIALgFQACAKAKACQgFAFgFAAQgDAAgDgEg");
	this.shape_15.setTransform(31.3,-19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.5,0.6).s().p("AgGADQgFgJAMgCIAHANQgEAEgEAAQgDAAgDgGg");
	this.shape_16.setTransform(26.9,-2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.6,0.6).s().p("AgEAHQgKgEAIgKQAJAHAHAAQgCAIgHAAIgFgBg");
	this.shape_17.setTransform(31.3,-32.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQABgIAIAAQAIABAAAHQAAAHgIACQgJgBAAgIg");
	this.shape_18.setTransform(-41.8,11.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.5,-0.5,0.6).s().p("AgHAAQAAgHAHAAQAHAAACAHQAAAIgIAAIgBAAQgIAAABgIg");
	this.shape_19.setTransform(-44.8,21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgHABQgCgHAJgCQAJAAAAAIQAAAJgJAAQgGAAgBgIg");
	this.shape_20.setTransform(-21.9,40.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.4,-1.4,-1.4,1.2).s().p("AgQAJQgBgHAGgCQADgCAIAAQgFgNANAAQAKAAgBAJQgCAJgPgDQABAGgBADQAAAHgHAAQgHAAgCgHg");
	this.shape_21.setTransform(-35,21.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-0.6,-0.5,0.7).s().p("AgMAAIAJgEQAIgIAGAIQAHAKgOADg");
	this.shape_22.setTransform(-37,15.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIABQAAgJAIABQAIAAABAHQACAHgKACQgJgBAAgHg");
	this.shape_23.setTransform(-32.7,17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQAAgGAIgCQAIAAABAIQgCAJgHAAQgIAAAAgJg");
	this.shape_24.setTransform(-20.5,-21.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQAAgGAIgCQAKACgCAHQAAAIgHAAQgJAAAAgJg");
	this.shape_25.setTransform(-30.5,-2.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQAAgIAIAAQAIAAABAIQgBAJgIAAQgJgBABgIg");
	this.shape_26.setTransform(-38.1,-35.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIABQgBgIAJgBQAGAAADAIQgBAJgIAAQgGAAgCgIg");
	this.shape_27.setTransform(-34.8,-34.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.6).s().p("AABAHQgJgCAAgGQAAgGAFgCQAEgBADADIAFAFIgBAGIgCAGg");
	this.shape_28.setTransform(-15.3,-24.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.5,-0.5,0.7).s().p("AgHAAQAAgIAHAAQAJACAAAHQAAAHgJABQgJAAACgJg");
	this.shape_29.setTransform(-52.2,-2.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AAAAJQgJgBABgIQACgIAGAAQAJAAAAAIQgBAJgHAAIgBAAg");
	this.shape_30.setTransform(-57.1,-22.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.5,-0.5,0.7).s().p("AgHADQgDgFAFgEQAGgFAIAIIAAAAIgBALIAAAAIgIABQgFgBgCgFg");
	this.shape_31.setTransform(-58.1,-18.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgHAAQAAgIAHAAQAJAAAAAIQAAAJgJAAQgJAAACgJg");
	this.shape_32.setTransform(-60.8,-18.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgHABQgBgIAIAAQAJAAAAAHQAAAIgJAAQgHAAAAgHg");
	this.shape_33.setTransform(-67.5,-23.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AAAAJQgIAAAAgJQACgIAGAAQAIAAABAIQAAAJgIAAIgBAAg");
	this.shape_34.setTransform(-64.4,-25.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AAAAIQgHAAgBgIQACgIAHABQAIABAAAGQgBAIgHAAIgBAAg");
	this.shape_35.setTransform(-69.8,-38.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQACgJAHABQAJACgCAGQAAAJgIAAQgJgBABgIg");
	this.shape_36.setTransform(-46.7,-25.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQACgJAHABQAHAAAAAIQAAAIgIAAIgBABQgHAAAAgJg");
	this.shape_37.setTransform(-55.5,-26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQABgJAIABQAIAAAAAIQAAAIgJABQgIgBAAgIg");
	this.shape_38.setTransform(-50.5,-51.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgHABQgBgIAJAAQAGgBACAIQAAAJgIgBIgBABQgHAAAAgIg");
	this.shape_39.setTransform(32.5,26.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AAAAIQgJgBABgIQAAgHAIAAQAJACAAAHQgBAIgHAAIgBgBg");
	this.shape_40.setTransform(40.1,17);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.6,0.6).s().p("AgIAAQABgHAIAAQAIAAAAAIQgCAHgGAAQgJAAAAgIg");
	this.shape_41.setTransform(36.2,23.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgHAAQABgIAGAAQAKAAgBAJQAAAHgJABQgJgBACgIg");
	this.shape_42.setTransform(53.1,-2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AAAAIQgIAAAAgHQAAgIAIAAQAJAAAAAIQgBAHgHAAIgBAAg");
	this.shape_43.setTransform(41.2,-7.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-0.9,-0.6,0.5).s().p("AgFAFIgFgIIABAAIABAAIAJgBQAGgBAEgCIAAABIAAAIQgCAFgGABIgCAAQgEAAgCgDg");
	this.shape_44.setTransform(43.9,-8.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.6,0.7).s().p("AgIABQAAgIAHAAQAJgBABAIQAAAIgIABQgJgBAAgHg");
	this.shape_45.setTransform(44.8,-44);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.5,-0.6,0.7).s().p("AgIAAQAAgIAJABQAKABgCAHQAAAHgJAAQgJgBABgHg");
	this.shape_46.setTransform(35,-4.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.5,-0.6,0.8).s().p("AAAAJIgJgFIgBAAIAKgMIAAAAQAPACgFAKQgDAFgFAAIgCAAg");
	this.shape_47.setTransform(33.3,-2.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.7,0.6).s().p("AgIAAQABgIAHABQAJAAAAAIQgBAIgIAAQgIAAAAgJg");
	this.shape_48.setTransform(33.2,-11.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AAAAJQgJgBABgIQACgIAHAAQAHAAABAJQgBAIgHAAIgBAAg");
	this.shape_49.setTransform(27.5,-23.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.6,-0.8,0.7).s().p("AgFAIIgCAAIAAgQIACAAQAOgBgBAJQAAAJgIAAIgFgBg");
	this.shape_50.setTransform(16.6,-6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.7,0.6).s().p("AAAAIQgJAAABgIQAAgHAIAAQAJAAAAAHQgBAIgHAAIgBAAg");
	this.shape_51.setTransform(19,-26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.5,-0.6,0.7).s().p("AgIAAQAAgHAIgBQAKACgBAHQgCAIgHAAQgIAAAAgJg");
	this.shape_52.setTransform(37.5,-29.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.7,0.6).s().p("AgIAAQAAgKAIACQAIAAABAIQAAAHgJACQgIgBAAgIg");
	this.shape_53.setTransform(25.3,-37.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.7,-0.6,0.6).s().p("AgIgBQABgJAIACQAJABAAAHQgBAJgJAAQgKgBACgJg");
	this.shape_54.setTransform(-13,45.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.6,-1.3,-1.4,1.5).s().p("AgGATQgKAAAAgLQAAgDAKgLQAIgMADAAQAKAAABALQABAIgJAJQgHAJgGAAIgBAAg");
	this.shape_55.setTransform(-16.4,45.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-0.9,-0.9,0.9).s().p("AgKABQAAgMALAAQAJAAACALQgCAMgKAAQgMABACgMg");
	this.shape_56.setTransform(-20.1,36.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQgBgHAJgBQAJABAAAHQACAJgKAAQgJAAAAgJg");
	this.shape_57.setTransform(-34,27.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.6,-1.5,-1.6,1.5).s().p("AgHAXQgHgNABgRIgBgHQAAgNAIgBQALgDADAMQAEATACASQACAJgKADIgEAAQgFAAgEgHg");
	this.shape_58.setTransform(-27.6,34.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.2,-1.1,-1.2,1.2).s().p("AgPAKQgCgCAAgEQgBgGAHgBQALgCAGgEQAGgDAEAHQAFAFgFAEQgFADgIACIgNACIgBAAIgEgBg");
	this.shape_59.setTransform(-39.8,19.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AAAAJQgKgBACgIQAAgIAIAAQAGAAADAIQgCAJgGAAIgBAAg");
	this.shape_60.setTransform(-30.7,4.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.7,0.7).s().p("AgJAAQAAgIAJAAQAHAAACAIQgCAJgHAAIgBAAQgIAAAAgJg");
	this.shape_61.setTransform(-28,4.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.7,-0.6,0.6).s().p("AgIABQgBgJAKAAQAJAAAAAIQAAAIgJABQgIAAgBgIg");
	this.shape_62.setTransform(37.3,10.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.7,0.7).s().p("AAAAJQgJgBAAgIQACgIAHAAQAKADgBAHQAAAHgHAAIgCAAg");
	this.shape_63.setTransform(37.6,7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.7,0.7).s().p("AgJABQAAgHAJgCQAHAAACAIQABAJgKAAIgBAAQgIAAAAgIg");
	this.shape_64.setTransform(43.7,12);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgIAAQABgIAIAAQAGAAADAIQgBAJgJAAQgJgBABgIg");
	this.shape_65.setTransform(46.7,-0.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.7,0.7).s().p("AgEAJQgHgEAEgIIACgHIALACQAHAKgGAHQgDACgDAAQgCAAgDgCg");
	this.shape_66.setTransform(48.3,-16.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgIAAQADgIAGAAQAIABAAAHQAAAIgJABQgJgCABgHg");
	this.shape_67.setTransform(52.4,-33);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQAAgIAIAAQAKACgBAGQAAAJgJAAQgJgCABgHg");
	this.shape_68.setTransform(47.3,-30.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.7,0.7).s().p("AgIAAQAAgIAIAAQAIAAABAIQgBAJgIAAIgBAAQgHAAAAgJg");
	this.shape_69.setTransform(41.6,-28.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.5,-0.6,0.7).s().p("AgJAAQABgGAIgCQAJACAAAGQAAAIgJAAQgJgBAAgHg");
	this.shape_70.setTransform(42.7,-32.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.8,-0.6,0.5).s().p("AAAAHIgJgGQgDgDAEgFQAFgGAEACQADABAHAGIgJAQQgBgEgBgBg");
	this.shape_71.setTransform(26.9,-5.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AAAAIQgJgBABgIQACgHAHAAQAIABABAHQgCAJgHAAIgBgBg");
	this.shape_72.setTransform(21,-16.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.7,-0.8,0.9).s().p("AgCAIIgOgIQgCAAABgEQAAgDADgDIADgBQADgCANAHQANAGABACIAAADQAAAIgHAAQgHgBgHgEg");
	this.shape_73.setTransform(23.8,-21.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.7,0.6).s().p("AAAAJQgJgBACgMIAAgCIACgCIADAAIACAAQALACgDAKQgBAFgFAAIgCAAg");
	this.shape_74.setTransform(38.9,-20.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgIAAQAAgJAJACQAIAAAAAHQAAAIgJAAQgJgBABgHg");
	this.shape_75.setTransform(30.3,-13.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-0.9,-0.9,1).s().p("AAAASQgEgDAAgCQABgHgIgNQgBgCABgEQABgDAEgBQAIgDACAHQACACAHAYQgDAEgEABIgDABIgDgBg");
	this.shape_76.setTransform(22,-40.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgIAAQABgKAIACQAKABgCAIQAAAHgJABQgJgCABgHg");
	this.shape_77.setTransform(23.3,-44.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.7,0.7).s().p("AgIAAQAAgIAIAAQAJAAABAIQgDAJgHAAQgHAAgBgJg");
	this.shape_78.setTransform(35.1,-51.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgHgBQgCgHAJgBQAHABACAIQgBAJgKAAQgFAAAAgKg");
	this.shape_79.setTransform(-15.2,-16.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgJAAQAAgKAKACQAKABgCAIQAAAIgJAAQgJgBAAgIg");
	this.shape_80.setTransform(-37.6,-16.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgJAAQAAgIAJAAQAHAAACAIQAAAJgJAAQgHAAgCgJg");
	this.shape_81.setTransform(-29.8,-25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgIAAQgBgGAJgCQAJAAABAIQAAAIgJABQgIAAgBgJg");
	this.shape_82.setTransform(-29.1,-27.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgIAAQgCgIAKAAQAJgBAAAJQAAAIgIABQgJgBAAgIg");
	this.shape_83.setTransform(-45.2,-18.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgJAAQACgIAIAAQAJABgBAHQAAAJgJAAQgIgBgBgIg");
	this.shape_84.setTransform(-44.3,-20.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgHAAQAAgJAJABQAHABAAAHQAAAJgJAAQgJgBACgIg");
	this.shape_85.setTransform(-45.8,-35.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.7).s().p("AgJAAQACgJAHABQAIAAABAIQgCAJgHAAQgJgBAAgIg");
	this.shape_86.setTransform(-59,-55.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],18,-19.7,-19.8,16.4).s().p("ABbEvQgQgKgRgXQgVgegHgHQgNgOABgLIgRAWQgJAKgJAGQgRAKgEgQQgEgJgJABQgOACAAgNQAAgLAMgBQAKAAgCgGQgCgQAKgPIAWgaIgiAMQgPADgFgEQgEgDgBgOIgBgJQgCgEgHAEQgHADAAgJIAAgVIgLALQgFAGACAIQABAFgDAAQgDAAgNgFIAAAFIAGAIQADAFgFADQgFADgDgEIgFgJQgFgGgEAFQgFAGgNAEQgWAFgEgUIgGgVQgbAQgYgRQgHgEgEgLIgHgTQgHgQAFgUQgTgDgFALQgEAHAEAUQgYgNADgUIACgIQgBgDgHABQgGACgCgJQAAgIAGgBQAGAAAAgDQAAgCgDgFIgJgTQgHgRAOgMQAMgKgBgIQgEgTAWgUQAIgIAAgMQgBgdAEgaQAIguAggQQAEgBAEgGQAGgOAEgFQAHgJAMAAQALAAAIAJQAFAGAIAPIAHgWQAKgZAXgCQAWgDAQAYQANATAAAcIACAVQABAJAJAAQAIAAAAgJQAAgXAGgSQAEgMAFgBQAEgBALALQgBghAHgTQAGgQAJABQAFAAAHAOQAEAIAEAhIAJgKQAFgFAFABQAKAAAJAOQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIAEgBQAZgIAWAPQgMASAAAPQACARAMAAIABAAQAFAAADgCQAFgDABgJQACgLADgEIABABIAOAOQAKAGALAAQACgBAFAGIAAAAIgGAEQgKAGADAIQAGAPATgGIAWAaQANAOAPAFQACANAEADQADACANgDQAMAIAAALQAAAJAJAJIAeAbQANALABANQABAOgLALQgaAggrgFQgLAAgDAEQgBADACAKQALAqALAQQAPAVgJAPQgJAQgbABQgSACgQgIQgVgKgPAOQgHAGgNAAQgbgBgCAZIgCANQgEAKAMAAQATABAGAHQAGAGgBASQgBAggQAbQgHAMgHACIgBAAQgGAAgMgIg");
	this.shape_87.setTransform(1.1,20.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5A6FB5").s().p("AgGALQgEgDgBgMQAKgKAJAGQAIAGgGALQgJACgDAAIgEAAg");
	this.shape_88.setTransform(26.1,8.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CCD2E7").s().p("AAAAEQgFgCgKgFIAfADQgIAEgGAAIgCAAg");
	this.shape_89.setTransform(-8.2,-8.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#5B6EB4").s().p("AgQACQAAgOAQgBQARgBAAAOQAAALgSADQgPgBAAgLg");
	this.shape_90.setTransform(-93.2,-19.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6174B7").s().p("AkdDKQABgNAQAAQAPAAAAAMQABANgQACQgRgBAAgNgAEBjJQAAgNAOgBQAMgBADANQgCAOgOAAIgBAAQgMAAAAgMg");
	this.shape_91.setTransform(63.2,-0.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6073B6").s().p("AgMABQAAgOAMAAQAOAAAAAOQAAALgNACQgMAAgBgNg");
	this.shape_92.setTransform(76,-12.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6577B8").s().p("AOrARQAAgLANgCQAQAAAAANQABANgOAAQgPAAgBgNgAvHgHQABgMAMABQAMAAgBANQAAAJgNABQgMgCABgKgAodgGQgNAAAAgMQAAgKANgBQANABAAALQgBALgKAAIgCAAg");
	this.shape_93.setTransform(-14.4,-29.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5D71B5").s().p("AttGZQAAgMANAAQAMAAAAAMQAAALgMABQgNgBAAgLgAG8lhQgBgMAMAAQAMgBABALQAAANgMAAQgNAAABgLgANVmSQAAgKAMgCQAMACAAAKQAAAMgMAAQgMAAAAgMgAEtmYQgBgMAMAAQAMAAACAMQgCAMgMAAQgMgBABgLg");
	this.shape_94.setTransform(24.4,3.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#5C70B5").s().p("AgOAHIAAgKQAFgLAMABQAMAAAAALQACAMgPAEQgGAAgKgHg");
	this.shape_95.setTransform(32.4,-34);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6A7CBB").s().p("ApvAYQAAgNAOAAQAMACAAALQAAALgMABQgOgCAAgKgAJhgLQgMgCABgLQACgMAMAAQAMACAAAMQgCALgKAAIgDAAg");
	this.shape_96.setTransform(-21.8,-32.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5B72B6").s().p("AgQAEQgDgHAJgHIAGgDIAAAAIABAAIALACQAHACACAHQAEAKgNAEQgGACgEAAQgKAAgEgKg");
	this.shape_97.setTransform(19.1,2.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5E71B5").s().p("AgRADQgBgFAHgGQAIgHAGAAQAPACAAAMQgDAPgSACIgBAAQgMAAgBgNg");
	this.shape_98.setTransform(-53.1,61.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#5F72B5").s().p("AgLAKQgHgEABgIQAAgNAQABQAUADAAAOQAAAJgPADIgPgFg");
	this.shape_99.setTransform(97.3,-27.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#5D70B5").s().p("AACAPQgLgBgFgCQgIgEAAgJQgBgPATACIASADQAKADAAAKQAAANgTAAIgDAAg");
	this.shape_100.setTransform(-82.7,71.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5C6FB4").s().p("AgVAEQgGgNAJgHQAJgGALAKIAXANQgDARgQABIgDAAQgSAAgGgPg");
	this.shape_101.setTransform(-39.1,16.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5A73B7").s().p("AgQAXQgJgCgDgGQgDgGADgHQACgDgCgJQgDgHAFgEQAFgDAGAFQAHAFAFAAQADgBAPABQAOADABAKQACAJgNAFIgNAGIgCABIAAgBQgEACgGABIgKABg");
	this.shape_102.setTransform(44.6,-11);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#5B6FB4").s().p("AgSDjQgOgBABgNQAAgLANgCIAdAAIAAACIAdAAQAPABAAAMQAAANgOABIgTABQgZAAgPgDgAgRizQgWgIgMgUQgHgMAKgHQAIgGALAIIAYAVQAGAFAAAIQgCAMgJAAIgHgBg");
	this.shape_103.setTransform(-38.8,25.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#5A6DB3").s().p("AG+FtQgQgCgTgLIgfgSQgIgEAEgKQAFgIANAAIAPAGQAcAQAQAFQAPADgEANQgCAKgLAAIgFAAgAmtk1QgFgIgXgUQgLgJAGgMQADgHAKABIAFACQAgAYAIAPQAGAOgKAGQgEADgEAAQgHAAgGgJg");
	this.shape_104.setTransform(15,13.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#596CB3").s().p("ACpFfIgSAAQgNgCAAgMQAAgNAMAAIAkgCQAXgCAOAAQAOACABAMQAAAMgPACIg2AEgAjmkwIgHgOIAKgVQAKgLAMAAQAigCgFAiIAAAAIgCAAIgKAMIACAAQgJAJgMAAQgLAAgMgHg");
	this.shape_105.setTransform(51,28.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5A6EB4").s().p("AgtAQQADgIAHgEIANgFQAXgJALgKQAEgEAHgCQAPgGAFAKQAIALgNAIIgKAHIgCAAIgCACIgBACQgaAQgcAGQgLgDgDgLg");
	this.shape_106.setTransform(35.7,-21.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#586DB3").s().p("AgKAuIgBAAQgMAAgBgRQgBgPANgRQAIgKACgPQAAgPALgCQANgCADAPIgCAAIAAAQIACABQgEAOgMASIAAABIgBgBQgDAEgCALQgBAJgEADQgDACgEAAIgBAAg");
	this.shape_107.setTransform(13.5,-3.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#596DB3").s().p("AoGBxQgRgWgDgGIgZgwIAAAAIABgMQARgMAKARIAoBEQAHALgLAIQgFADgDAAQgGAAgFgHgAHoAoQgNgQAVgKQAKgFAPgEIAagFQAMgCAFAMQADAJgMAHQgHADgLACIgTAFIgSAHgAiJgRIABgGIACgGQARgWACgOQAAgKAKgCQAKgBAFAHQAHAMgDAVQgEAVgLAJQgJAGgIAAQgLAAgIgPgAjEgaQgVgtgWgZQgHgJAFgIQAEgHAIABQAHAAAIAIQAZAcAUAvQAFAPgNAFIgGABQgJAAgEgLg");
	this.shape_108.setTransform(-0.9,-21.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#586CB3").s().p("ADqHUQgFgLgKgQIgSgZQgEgFgHgFIgMgIQgRgMAJgMQAJgPATAFQALADASARQAMAKAQAcQAQAcAAAKQAAAOgRAFIgFABQgKAAgFgMgAkLmAQgGgGAEgNQAFgOALgOIAVgYIANgOQAKgNALADQAIADACAOQgCAegRAQIgSAXQgKANgLABIgGABQgJAAgGgGg");
	this.shape_109.setTransform(31.7,19.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2A3794").s().p("ABtARQgygdg7gBQg5AAgzAdQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAgCQA0gdA7AAQA7ABAyAdIABACIgBABIgBAAg");
	this.shape_110.setTransform(0.5,-37.5,1.424,1.362);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#576FB5").s().p("AAAAOIgBAAQgRgBAAgNQAAgKASgDQASADAAAKQAAAJgHADQgDACgGAAIgCAAg");
	this.shape_111.setTransform(22.4,11.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#576DB3").s().p("AgKALQgRgNgCgHQgBgHAFgFQAHgFAIAEQAMAFAZAXQAGAFgEAHQgFAGgKABQgIAAgQgOg");
	this.shape_112.setTransform(-20.7,4.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6174B7").s().p("AkdDKQABgHAEgDQAFgDAHAAQAPAAAAAMQABANgQACQgRgBAAgNgAEBjJQAAgNAOgBQAMgBADANQgCAOgOAAIgBAAQgMAAAAgMg");
	this.shape_113.setTransform(63.2,-0.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#5B6FB4").s().p("AASDmQgSgBgLgBIgHgBIgFgBQgJgDABgKQAAgLANgCIAdAAIAAACIAdAAQAPABAAAMIgBAFQgBADgCACIgFADIgFABIgUABIgDAAgAgRizQgWgIgMgUQgHgMAKgHQAIgGALAIIAYAVQAGAFAAAIQgCAMgJAAIgHgBg");
	this.shape_114.setTransform(-38.8,25.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#5B72B6").s().p("AgQAEQgEgKARgHIALACQAHACACAHQAEAKgNAEQgGACgEAAQgKAAgEgKg");
	this.shape_115.setTransform(19.1,2.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#5A73B7").s().p("AgcAPQgDgGADgHQACgDgCgJQgDgHAFgEQAFgDAGAFQAHAFAFAAQADgBAPABQAOADABAKQACAJgNAFIgNAGQgFACgFABIgMABQgJgCgDgGg");
	this.shape_116.setTransform(44.6,-11);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#596DB3").s().p("AoGBxQgRgWgDgGIgZgwIABgMQARgNAKASIAoBEQAHALgLAIQgFADgDAAQgGAAgFgHgAHoAoQgNgQAVgKQAKgFAPgEIAagFQAMgCAFAMQADAJgMAHQgHADgLACIgTAFIgSAHgAiJgRIADgMQARgWACgOQAAgKAKgCQAKgBAFAHQAHAMgDAVQgEAVgLAJQgJAGgIAAQgLAAgIgPgAjEgaQgVgtgWgZQgHgJAFgIQAEgHAIABQAHAAAIAIQAZAcAUAvQAFAPgNAFIgGABQgJAAgEgLg");
	this.shape_117.setTransform(-0.9,-21.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#596CB3").s().p("ACpFfIgSAAQgNgCAAgMQAAgNAMAAIAkgCQAXgCAOAAQAOACABAMQAAAMgPACIg2AEgAjmkwIgHgOIAKgVQAKgLAMAAQAigCgFAiIgKAMQgJAJgMAAQgLAAgMgHg");
	this.shape_118.setTransform(51,28.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#5A6EB4").s().p("AgtAQQADgIAHgEIANgFQAXgJALgKQAEgEAHgCQAPgGAFAKQAIALgNAIIgKAHIgCACQgbASgeAGQgLgDgDgLg");
	this.shape_119.setTransform(35.7,-21.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#586DB3").s().p("AgKAuQgNAAgBgRQgBgPANgRQAIgKACgPQAAgPALgCQANgCADAPIAAAQQgDAOgNATQgEADgBALQgDAPgKAAIgBAAg");
	this.shape_120.setTransform(13.5,-3.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.1,-0.2,-0.2,0.1).s().p("AgDgBQAGAAABABIgDACIgBAAQgBAAgCgDg");
	this.shape_121.setTransform(-22.9,64.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.2,-0.2,0.3).s().p("AgCgCQAJgBgEAHQgKAAAFgGg");
	this.shape_122.setTransform(-36.2,65.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.1,0.1).s().p("AACAEQACgFgIAAIgBAAQAFgGAEAGQAEACgFAEg");
	this.shape_123.setTransform(-21.9,57.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.2,-0.2,-0.2,0.2).s().p("AgCgCQAGgBAAAFIgEABQgEAAACgFg");
	this.shape_124.setTransform(-22.9,57.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.2,-0.1,-0.1,0.2).s().p("AgDgCQAJgBgDAGIgCAAQgEAAAAgFg");
	this.shape_125.setTransform(-22.1,57.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgDgEIAKADQABAEgFABIgJABQAAgIADgBg");
	this.shape_126.setTransform(-21,44.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgCAFQgFgDABgEIAHgCQAEgBACAFQABAFgIAAIgCAAg");
	this.shape_127.setTransform(-31.4,47.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.2,-0.2,0.2).s().p("AAAACQgEAAAAgDQAFgBADACQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgDAAIgBAAg");
	this.shape_128.setTransform(-31.5,46.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.3,-0.2,0.2).s().p("AgDgCIAHAAIAAAEIgEABQgDAAAAgFg");
	this.shape_129.setTransform(-32.8,40.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.2,-0.4,0.6).s().p("AgHADQABgBAGgBQAEAAgBgDIAFADQABACgIAAg");
	this.shape_130.setTransform(-34.9,35.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgGACQAAgJAHACQAKACgIAIIgDABQgEAAgCgEg");
	this.shape_131.setTransform(-20.1,15.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.2,-0.2,-0.3,0.3).s().p("AgCgCQAHgCgCAFQAAADgFAAQADgEgDgCg");
	this.shape_132.setTransform(30.7,34.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.3,0.3).s().p("AgFABIALgCQgCADgEAAQgBAAgEgBg");
	this.shape_133.setTransform(31,36.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.2,-0.3,0.5).s().p("AgCAFIAAAAIgBAAIABgBIAEgIQgBACADADQAAAEgEAAIgCAAg");
	this.shape_134.setTransform(35.1,38.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.1,-0.3,0.5).s().p("AAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBgBgBQAEAEgCADIgGACQgBgDAEgCg");
	this.shape_135.setTransform(29.7,44.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.4,-0.5,0.4).s().p("AgFAEIAAgFIAJgCIACADQgHAAAAAEIgCABg");
	this.shape_136.setTransform(28.8,26.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.6,-0.6,0.4).s().p("AgGgDQAFgHAJAHQABAGgLAFQgIgIAEgDg");
	this.shape_137.setTransform(26.3,25.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AAAAGQgDgBgCgEQgCgHALABQADAEAAAFQgDACgDAAIgBAAg");
	this.shape_138.setTransform(33.6,31);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgBgGQAIAAAAAGQAAAHgIAAQgLgHALgGg");
	this.shape_139.setTransform(33.1,28.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.6,0.6).s().p("AgEAIIgFgHQgBgDAEgDQAFgFALAIQAAADgHAHg");
	this.shape_140.setTransform(31.4,27.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.1,-1.1,-1.1,0.9).s().p("AgKACQABgFAJgDIALgFIAAAIQgBAEgJADQgGAEgCAEQAAgGgDgEg");
	this.shape_141.setTransform(35.1,30.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-0.7,-0.7,0.9).s().p("AgDAGQgGgDgEABIAIgEQAEAAABgFQAAgEAHACQAFABACAEQABAFgHABQgHAAAFAFIgBAAQgEAAgEgDg");
	this.shape_142.setTransform(39.4,27.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.2,-0.2,0.4).s().p("AgEACIAGgDIADAAIAAADg");
	this.shape_143.setTransform(7.5,20.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.5,-0.6,0.7).s().p("AgEAIQAAgFgGgCIAFgFQAFgFAHAFQAGADgCAEQgBAFgJAAg");
	this.shape_144.setTransform(30.9,24.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.2,-0.1,-0.2,0.2).s().p("AAAAEQgFgDACgEIADAAQAAAEAEAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_145.setTransform(44.8,36.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.3,-0.2,0.1).s().p("AgDgBIAHAAQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgFAAAAgDg");
	this.shape_146.setTransform(45.1,36.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AAAAGQgGAAAAgGQAAgEAGgBQAHABAAAFQgBAFgFAAIgBAAg");
	this.shape_147.setTransform(41.3,24);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.3,0.4).s().p("AgFACQAAgGAHAAQAGAEgEADQgCACgCAAQgDAAgCgDg");
	this.shape_148.setTransform(-40,49.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.3,0.4).s().p("AgFABIAAgDQAFgEAEADQAEADgEAEIgEABQgCAAgDgEg");
	this.shape_149.setTransform(-21.6,69.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.3,0.3).s().p("AgCAFQgEgDABgCQADgGAGADIACADIgDAEIgDABIgCAAg");
	this.shape_150.setTransform(-36.3,50.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AAAAFQgGAAABgFQAAgFAGABQAFAAAAAFQgBAEgEAAIgBAAg");
	this.shape_151.setTransform(-33.7,52.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGABQgCgFAIAAQADgBAEAFQgCAFgFAAQgEAAgCgEg");
	this.shape_152.setTransform(-23.8,61.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.3,-0.3,0.2).s().p("AAAAEQAAgFgHABIAAgBIAHgEIAAAAQAAAGAHgBIABABIgIAFg");
	this.shape_153.setTransform(-22.5,57.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.3,-0.3,0.4).s().p("AgEAAQgCgEAGAAQAGgBAAAFQAAAFgFAAQgFAAAAgFg");
	this.shape_154.setTransform(-26.6,61.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.3,0.4).s().p("AgEACQgCgIAJACIADAHQgFACgCAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_155.setTransform(-28,59.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.3,0.4).s().p("AgFAAQgBgFAGAAQAGgBAAAGQAAAFgFABQgGAAAAgGg");
	this.shape_156.setTransform(-29.1,54.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AAAAFQgFAAAAgFQAAgFAFABQAIAAgCAFQgCAEgEAAIAAAAg");
	this.shape_157.setTransform(-29.6,51.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AAAAFQgFAAAAgFQAAgEAFAAQAGAAAAAFQgBAEgEAAIgBAAg");
	this.shape_158.setTransform(-13.5,63.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.3,-0.4,0.3).s().p("AgEADQAAgGAFgBIADAGQgCADgCAAIgEgCg");
	this.shape_159.setTransform(-19.8,57.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAEgGACQgFgCAAgEg");
	this.shape_160.setTransform(-42.1,20.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.3,0.4).s().p("AgEgDQAEgDAEADQAEAEgFAEQgJAAACgIg");
	this.shape_161.setTransform(-31.6,45.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.3,0.3).s().p("AgEgCQAEgDAFADQADAGgIAAQgGAAACgGg");
	this.shape_162.setTransform(-32.9,42.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.2,-0.4,0.6).s().p("AgEAGQABgBgBgFQgBgDADgBQAAAHAHgDIAAABIAAAFQgFgDgEADg");
	this.shape_163.setTransform(-32.9,41.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGAAQAAgEAGAAQAFgBACAFQgCAFgEAAIgBAAQgEAAgCgFg");
	this.shape_164.setTransform(-34.8,40);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.4,-0.6,0.8).s().p("AAAABQAGgDgCgFQAGAHgGADIgKAFQAAgDAGgEg");
	this.shape_165.setTransform(-33.3,36.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.3,-0.5,0.4).s().p("AgDAFQgGgHAGgCQADgCAHAGQgFAGgEAAIgBgBg");
	this.shape_166.setTransform(-39.1,33.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.3,0.4).s().p("AgCgCQAEgFADAEIAAAIIgGABQgGgFAFgDg");
	this.shape_167.setTransform(-38.1,31.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgDAGQgFgGAFgDIAEgCIADABIADAEIAAAEQgFACgDAAIgCAAg");
	this.shape_168.setTransform(-34.7,27.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgGADIADgGQAGgEAEAFQABADgDACQgDADgCAAQgDAAgDgDg");
	this.shape_169.setTransform(-34.2,20.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.3,0.4).s().p("AgEACQABgFADAAQAFAAAAAFQgDACgCAAQgDAAgBgCg");
	this.shape_170.setTransform(-35.6,20.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.2,-0.3,0.4).s().p("AgDABQABgEACgBQAEAAAAAEQgBAFgDAAIAAAAQgDAAAAgEg");
	this.shape_171.setTransform(-1.2,15.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgDgEQAJAAAAAEQAAADgEABIgFABQgFgFAFgEg");
	this.shape_172.setTransform(13,67.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgEgCQAFgFAGAGQgBAGgJAAQgGgFAFgCg");
	this.shape_173.setTransform(39.8,38.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGAAQAAgEAGgBQAGABAAAEQABAEgGACQgHAAAAgGg");
	this.shape_174.setTransform(31.3,46.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.2,-0.3,0.3).s().p("AgGAAQABgCAGAAIAFACQABACgGABg");
	this.shape_175.setTransform(29.2,26.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.3,0.4).s().p("AgFABQgCgCAEgCQAEgDAGAGIgDAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgCAAgDgEg");
	this.shape_176.setTransform(33.3,34);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.4,0.4).s().p("AAAAEQgGAAABgEQABgEAFAAQAGACgBACQgBAFgEAAIgBgBg");
	this.shape_177.setTransform(39.3,33.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.5,0.5).s().p("AgGAEQgBgKALACQAFAIgFABg");
	this.shape_178.setTransform(6.2,14.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGAAQABgFAGABQAIABgCAHIgDABIgDAAQgFAAgCgFg");
	this.shape_179.setTransform(8.6,18.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AABAFQgHAAAAgFQACgGAFACQAGABAAAEQgCAFgDAAIgBgBg");
	this.shape_180.setTransform(41.8,48.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.5,-0.4,0.3).s().p("AgGAAQAAgFAGAAQAFAAACAGIgGAFQgHgCAAgEg");
	this.shape_181.setTransform(42.9,38);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.7,0.6).s().p("AgGAFIgFgDQALAAAAgGIAGACQAEAAACACQgLAAgBAFIgGAAg");
	this.shape_182.setTransform(40.6,38.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGAAIAGgFQAIAAgBAGQAAAEgGAAIgBABQgEAAgCgGg");
	this.shape_183.setTransform(43.9,38.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgFAAQACgJAJAGQABADgDAGQgKAAABgGg");
	this.shape_184.setTransform(40.7,34);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgFACIgBAAQAAgIALADQAEAEgHAEg");
	this.shape_185.setTransform(42.2,34.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGAAQAAgDAGgCQAHADgBADQAAAFgGAAQgGAAAAgGg");
	this.shape_186.setTransform(-27.3,66.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFABQgBgEAGgBQADgBADAFQAAAGgGAAQgFAAAAgFg");
	this.shape_187.setTransform(-27.9,62.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGAAQACgFAEABQAIAAgCAEQAAAEgGACQgGgCAAgEg");
	this.shape_188.setTransform(-29.4,64.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AAAAFQgGAAAAgFQABgEAFgBQAFAAACAFQgCAGgFAAIAAgBg");
	this.shape_189.setTransform(-22.9,66.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFABQAAgGAFABQAGABAAAEQAAADgGACQgFgBAAgEg");
	this.shape_190.setTransform(-35.8,58.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGAAQAAgEAGAAQAGAAABAEQgBAEgGABQgGABAAgGg");
	this.shape_191.setTransform(-31.4,57.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFgBQAAgFAGABQAGACgBADIgDAGQgJgBABgGg");
	this.shape_192.setTransform(-21.4,62.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQgCgDAHgCQAFAAACAFQgCAGgFAAQgFAAAAgGg");
	this.shape_193.setTransform(-15.2,67.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGAAQAAgFAHABQAGABgBAFQgBADgFAAQgGAAAAgFg");
	this.shape_194.setTransform(-15.8,65.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AAAAFQgHAAABgFQACgFAEABQAFAAACAEQgCAFgFAAIAAAAg");
	this.shape_195.setTransform(-12.8,57.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFABQgBgEAGgBQAFgBACAFQAAAGgHAAQgFAAAAgFg");
	this.shape_196.setTransform(-42.4,38.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AAAAFQgFAAAAgEQgBgEAGgCQAGAAAAAFQgBAGgEAAIgBgBg");
	this.shape_197.setTransform(-45.6,43.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGABQAAgEAGgCQAGACAAADQACAGgIAAQgGAAAAgFg");
	this.shape_198.setTransform(-42.6,31.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgFAAQgBgDAGgCQAGAAAAAFQAAAFgFAAIgCABQgEAAAAgGg");
	this.shape_199.setTransform(-45.2,35.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.3,0.4).s().p("AAAAFQgFgBAAgEQAAgEAGAAQAHAAgCAEQAAAFgFAAIgBAAg");
	this.shape_200.setTransform(-47.5,32.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQABgFAFAAQAGACgBAEQAAADgGACQgFgCAAgEg");
	this.shape_201.setTransform(-42.4,18.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AAAAFQgGAAABgFQABgEAEAAQAGAAAAAFQAAAEgEAAIgCAAg");
	this.shape_202.setTransform(-29.1,42.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFABQAAgFAFgBQAFAAABAFQAAAFgGAAQgFAAAAgEg");
	this.shape_203.setTransform(-31.7,43.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGABQACgGAEAAQAFABACAEQgCAFgFAAQgGAAAAgEg");
	this.shape_204.setTransform(-40.1,42.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.3,0.4).s().p("AgFAAQAAgDAGgBQAFAAAAAEQAAAGgGgBQgFgBAAgEg");
	this.shape_205.setTransform(-38.8,41.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQgBgEAGAAQAFAAABAEQAAAFgGAAIgCAAQgDAAAAgFg");
	this.shape_206.setTransform(-37.2,39.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGABQAAgFAGgBQAFAAACAFQgCAGgFAAQgGgCAAgDg");
	this.shape_207.setTransform(-35.2,38);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQAAgFAFAAQAGACAAADQAAAGgGAAQgHAAACgGg");
	this.shape_208.setTransform(-40.5,29.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGAAQAAgFAGAAQAGAAABAFQgBAFgGABQgEAAgCgGg");
	this.shape_209.setTransform(-30.1,25.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFABQgCgFAHAAQAFgBABAFQAAAEgGACQgFAAAAgFg");
	this.shape_210.setTransform(-38.4,19);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgFADIgBgEIABgBIAJgDQAFAFgEADQgCADgDAAQgCAAgDgDg");
	this.shape_211.setTransform(-18,17.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AAAAFQgHAAACgFQAAgGAFACQAFAAACAEQgCAFgFAAIAAAAg");
	this.shape_212.setTransform(11.9,63.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQgBgEAGAAQAFgBACAFQAAAEgFABIgBAAQgFAAgBgFg");
	this.shape_213.setTransform(29.5,53.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFABQAAgFAFAAQAGAAAAAEQAAAFgGAAIAAAAQgEAAgBgEg");
	this.shape_214.setTransform(26.4,50.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQAAgEAFAAQAFgBABAFQAAAEgGACQgFAAAAgGg");
	this.shape_215.setTransform(31.2,54.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQAAgFAFAAQAHACgBAEQAAAFgGAAQgFgBAAgFg");
	this.shape_216.setTransform(34.3,54.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFABQAAgGAFABQAGAAAAAEQAAAEgGACQgFgBAAgEg");
	this.shape_217.setTransform(36.2,54.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGAAQACgFAEAAQAFACACADQgDAGgEAAQgGAAAAgGg");
	this.shape_218.setTransform(33.3,42.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.3,-0.4,-0.5,0.4).s().p("AgFAAQAAgEAFAAQAHAAgBAEQAAAEgGABQgGABABgGg");
	this.shape_219.setTransform(31.9,41.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AAAAGQgGAAAAgGQABgEAFgBQAFAAACAFQgCAGgFAAIAAAAg");
	this.shape_220.setTransform(38,42.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.3,0.3).s().p("AgCABQgBgEgGAAQAHgBADgDQABADAHAEQAEAEgLADQgCgBgCgFg");
	this.shape_221.setTransform(19,21.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGABQgBgEAHgCQADAAAEAFQAAAFgHAAIgBABQgDAAgCgFg");
	this.shape_222.setTransform(44,42);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgGAAQABgDAKgCQAFAGgGADIgFACQgEAAgBgGg");
	this.shape_223.setTransform(41.3,39.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.3,-0.4,0.5).s().p("AgHACQgCgDAFgDQAEgCAEAEIAEADIAAAEQgFgBgDABIgBABQgEAAgCgEg");
	this.shape_224.setTransform(-23,68.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQAAgEAFgBQAGABAAAEQAAAFgGABQgGgCABgEg");
	this.shape_225.setTransform(-31.1,62.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgHAAQACgGAFACIAFABQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAQAAAFgIAAQgHAAAAgFg");
	this.shape_226.setTransform(-33.1,61.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AgHABQACgBAAgDQAOgGgBANQgEACgJAAg");
	this.shape_227.setTransform(-35.1,49.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQAAgFAFABQAHABgBADQAAAFgGABQgFgBAAgFg");
	this.shape_228.setTransform(-31.7,51.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAFgGABQgGgCABgEg");
	this.shape_229.setTransform(-30.3,53.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGAAQAAgEAGgBQAEAAADAFQgCAFgEAAIgCABQgFAAAAgGg");
	this.shape_230.setTransform(-16.9,60.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGAAQACgFAEAAQAHAAAAAFQAAAEgHACQgGAAAAgGg");
	this.shape_231.setTransform(-40.7,55.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGAAQACgEAEAAQAHAAAAAEQAAAEgHACQgGgCAAgEg");
	this.shape_232.setTransform(-43.4,48.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGAAQAAgFAGAAQAHACgBADQAAAGgGAAQgGgCAAgEg");
	this.shape_233.setTransform(-53.1,29.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgGAAQAAgFAGAAQAGACABADQAAADgHADQgGgCAAgEg");
	this.shape_234.setTransform(-47.6,36.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AAAAGQgGgCAAgEQABgDAFgCQAHAAAAAFQgCAGgEAAIgBAAg");
	this.shape_235.setTransform(-46.5,27.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgFAAQAAgDAFgCQAHACgBAEQAAAFgGAAQgFgCAAgEg");
	this.shape_236.setTransform(-49.5,26.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgDAGIgDgFQADgCABgDIAGgBQAFAFgFAGg");
	this.shape_237.setTransform(-33,48.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgCAFQgIgDAHgGIAEgBQAIAFgEADQgBADgDAAIgDgBg");
	this.shape_238.setTransform(-30.5,50);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AAAAFQgGAAAAgFQACgFAEAAQAHAAAAAFQgCAGgEAAIgBgBg");
	this.shape_239.setTransform(-36.3,44.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGAAQAAgFAGAAQAHAAAAAFQABAGgHAAQgFAAgCgGg");
	this.shape_240.setTransform(-36.7,43.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGAAQACgEAEgBQAGAAABAFQAAAEgHACQgGgCAAgEg");
	this.shape_241.setTransform(-37.7,37.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.3,0.4).s().p("AgEACQgEgDAFgDQAKgDAAAKIgHACIAAAAQgDAAgBgDg");
	this.shape_242.setTransform(-35.5,34.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.3,0.4).s().p("AgCAFIgFgGQAGAAACgFIAGAEQAEADgFAFIgEABQgCAAgCgCg");
	this.shape_243.setTransform(-32.4,25.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgGAAQAAgDAHgCQAGACAAADQAAAFgGABQgFAAgCgGg");
	this.shape_244.setTransform(-32.4,17.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgFAAQgCgFAHAAQAFAAACAFQAAAEgHACQgFAAAAgGg");
	this.shape_245.setTransform(-35.2,17.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgCAGQgEgGAAgCQALgHACANIgCACg");
	this.shape_246.setTransform(-7.6,18.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgFAFIgBgGQABgDAFgBQAHgBAAAJQgDADgEAAIgFgBg");
	this.shape_247.setTransform(-5.1,17.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.3,0.5).s().p("AgGAEIABgGQAGgFAGAFIAAAHIgGABQgEAAgDgCg");
	this.shape_248.setTransform(-19.9,17.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.5,-0.5,0.4).s().p("AgDAGQgEgEACgHQAHgBAFAEQABAIgKAAIgBAAg");
	this.shape_249.setTransform(11.9,65.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.5,0.4).s().p("AAAAFQgIAAACgFQAAgFAGAAQAFAAACAFQgCAGgFAAIAAgBg");
	this.shape_250.setTransform(32.5,50.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.4,0.4).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAFgGABQgGgCABgEg");
	this.shape_251.setTransform(33,53.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.7,-0.5,0.4).s().p("AgHgCIAKgCIAGAAIAAAFIgKAEIgBAAQgFAAAAgHg");
	this.shape_252.setTransform(32.1,39.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AAAAFQgEAAgCgFQAAgFAHAAQAGACAAAEQgCAFgEAAIgBgBg");
	this.shape_253.setTransform(30.5,48.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.3,-0.4,0.5).s().p("AgGACQAAgFAGgBQAHABAAAEQAAAEgHAAQgEAAgCgDg");
	this.shape_254.setTransform(28.3,48.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgFAAQABgGAGACQAGABgCAEQAAAFgGAAQgGgCABgEg");
	this.shape_255.setTransform(36.9,32.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgGAAQACgFAFABQAGABABAEQgBADgIAAIgDABQgFAAADgFg");
	this.shape_256.setTransform(1.6,20.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgGABQACgFAGgBQAFAAAAAFQAAAGgHAAQgHAAABgFg");
	this.shape_257.setTransform(29.5,15.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.6,0.7).s().p("AgFAGIgCgBIADgFQAEgFADABQAFAAAAAEQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABIgFADg");
	this.shape_258.setTransform(45.3,35.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.4).s().p("AgFAEQgDgDAGgGIAHADQAEAFgGACIgDABQgCAAgDgCg");
	this.shape_259.setTransform(42,36.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgDgHQAGAAAEAFQAAACgDAGIgDACQgMgIAIgHg");
	this.shape_260.setTransform(-20.7,63.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.7,-0.7,0.6).s().p("AgKABIALgHQAFgDADAFQAEAEgGACIgMAGQAFgIgKABg");
	this.shape_261.setTransform(-35.3,64.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.5,0.5).s().p("AAAAEIgGAAIgDgHQAFACADgCQAFgEAEAEQADADgCADQgCADgDAAQgCAAgCgCg");
	this.shape_262.setTransform(-26.7,59.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.4,0.4).s().p("AgBAGIgCgFQgEgDADgEQACgDACAAQAHACAAAHIAAABQgGABAAAIQgBgCgBgCg");
	this.shape_263.setTransform(-20.4,56.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.3,0.4).s().p("AgDADQgDgEABgDQAFgGAFAFQAEAEgFAEQgBAAgBAGg");
	this.shape_264.setTransform(-19.1,63.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgBAGQgIgBACgHIADgCIAHgBIAFAFQgCAGgFAAIgCAAg");
	this.shape_265.setTransform(-19.8,64.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.6).s().p("AgHAEQAAgDAFgGQAMgBgDAGQgCAGgFAAQgCAAgFgCg");
	this.shape_266.setTransform(-33.5,44.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQAAgFAHAAQAFgBADAGQgCAFgGABQgHAAAAgGg");
	this.shape_267.setTransform(-36.2,41.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.6,0.7).s().p("AgHAGIAAgCIAAgEIAGgEQAHgDACAGQACAHgJAAg");
	this.shape_268.setTransform(-31.6,40.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.6,-0.6,0.5).s().p("AgFAGQgFgHAEgDQAEgDAGAFIAFABIgGAFQgDACgCAAIgDAAg");
	this.shape_269.setTransform(-39.9,34.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.1,-0.3,-0.8,0.6).s().p("AgGAJIAAgJIAAgJIAEAGQACADAEAAQAFAAgEAHQgDADgDAAIgFgBg");
	this.shape_270.setTransform(-36.9,32.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgGAAQAAgFAGAAQAGAAABAFQAAAGgGAAIgCAAQgFAAAAgGg");
	this.shape_271.setTransform(-40.2,25);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgGgEQAHgEAEAEQAEAFgEAGIgBAAQgMAAACgLg");
	this.shape_272.setTransform(-30.9,29.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AgGgDQAGgFAHAFQAAAFgBABQgCAEgEAAQgHgBABgJg");
	this.shape_273.setTransform(-29.2,35.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgBAGQgFAAAAgGQAAgFAHAAQAIACgCAEQgBAFgFAAIgCAAg");
	this.shape_274.setTransform(-29.2,31.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgBAGQgGgBABgFQAAgFAHAAQAHAAAAAGQgCAFgFAAIgCAAg");
	this.shape_275.setTransform(-29,28);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgHACQAAgFAHgCQAEAAAEAFQAAAGgHAAQgHAAgBgEg");
	this.shape_276.setTransform(-25.5,20.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgGAAQAAgFAGAAQAHAAAAAFQAAAGgHAAQgGAAAAgGg");
	this.shape_277.setTransform(-37.4,23.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgGAAQAAgFAGAAQAHAAAAAFQAAAGgGAAQgHAAAAgGg");
	this.shape_278.setTransform(-36.3,14.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQAAgFAIAAQAHABAAAEQgBAGgHAAQgIgBABgFg");
	this.shape_279.setTransform(-9.9,12.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.5,0.4).s().p("AgHAAQAAgFAHAAQAGAAACAFQgBAGgHAAQgHAAAAgGg");
	this.shape_280.setTransform(-0.3,18);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.4,0.5).s().p("AgHADIAAgEIAGgEQAKAAgBAIQgEADgFAAg");
	this.shape_281.setTransform(-18.4,16.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgHAAQAAgFAHAAQAIAAAAAFQAAAGgHAAQgIAAAAgGg");
	this.shape_282.setTransform(-15.9,16.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgGABQAAgHAGAAQAFAAACAGQgCAHgFAAQgGAAAAgGg");
	this.shape_283.setTransform(38.5,47.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.5,-0.5,0.4).s().p("AgGACIAAgEQAFgHAGAFQAFAEgGAFQgDACgCAAQgDAAgCgFg");
	this.shape_284.setTransform(36.3,34.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AAAAGQgIAAABgGQABgFAGAAQAHAAABAGQgBAFgFAAIgCAAg");
	this.shape_285.setTransform(39.4,36.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.4,0.6).s().p("AgJACIADgEQAHgFAJAHIAAAEQgFABgEAAQgEAAgGgDg");
	this.shape_286.setTransform(34.7,34.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.3,-0.5,0.6).s().p("AgFAFQgCgCAEgJIAEAAQAJAGgEAHIgEAAQgGAAgBgCg");
	this.shape_287.setTransform(10,21.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.5,0.4).s().p("AgGAAQgBgFAHAAQAIAAAAAFQgCAGgFAAQgHAAAAgGg");
	this.shape_288.setTransform(18,15.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AAAAGQgIAAACgGQABgFAGAAQAGABAAAFQAAAFgFAAIgCAAg");
	this.shape_289.setTransform(39.6,21.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AABAGQgHAAAAgFQAAgGAHAAQAEgBACACQgFAEAAAGIgBAAg");
	this.shape_290.setTransform(34.4,18.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgFACQABgGAFgCQAGABAAAFQgBAHgHAAQgHAAADgFg");
	this.shape_291.setTransform(31.1,14);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.3,-0.5,0.6).s().p("AgFAGQgFgGAGgDQAEgEAFAEQAGAEgGAFg");
	this.shape_292.setTransform(36,15.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.6,0.6).s().p("AgHAGIAAgHQADgFAGACQAGADAAACQAAAFgIAAg");
	this.shape_293.setTransform(29.3,21.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQAAgEAHgBQAIABAAAEQgCAGgFAAQgIAAAAgGg");
	this.shape_294.setTransform(28.8,16.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AgGAAQAAgFAGAAQAHAAAAAFQAAAGgGAAIgCAAQgFAAAAgGg");
	this.shape_295.setTransform(44.8,25.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.5,0.4).s().p("AgHAAQAAgFAHAAQAHgCABAHQgBAGgHAAIgBABQgGAAAAgHg");
	this.shape_296.setTransform(-37.2,57.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQAAgEAHgBQAGgBACAGQAAAGgHAAIgBAAQgFAAgCgGg");
	this.shape_297.setTransform(-13.9,61);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.4,0.5).s().p("AgBAGIgIgFIAHgEQACgDAEAAQAKAGgHAFQgDACgDAAIgCgBg");
	this.shape_298.setTransform(-12.2,55.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQABgGAGAAQAGABACAFQgDAHgFAAQgHAAAAgHg");
	this.shape_299.setTransform(-46.1,22.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.3,-0.6,0.7).s().p("AAAAIQgEgDgDACQgCgKAGgFQAAACgBAEQAAACAEAAQAKgCgCAJQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBg");
	this.shape_300.setTransform(-23.1,48.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.3,0.4).s().p("AAAAFQAAgDgDgBQgGgCADgEQACgDAEAAQADgBADAGIACADQgFAHAAADQgCgBgBgEg");
	this.shape_301.setTransform(-34.6,43.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.7,-0.5,0.3).s().p("AgEAAQgEgEADgDIAEABIAGABIABADIACACQgIABAAAHIgEgIg");
	this.shape_302.setTransform(-40.6,49.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQAAgFAHAAQAHAAABAGQgBAFgHAAQgHAAAAgGg");
	this.shape_303.setTransform(-30.4,33.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.5,0.4).s().p("AgGAAQgBgGAHABQAGgBACAGQgBAGgHAAQgHAAABgGg");
	this.shape_304.setTransform(-29.5,19.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgGAAQABgGAGAAQAGACAAAEQAAAHgHAAQgHgBABgGg");
	this.shape_305.setTransform(-28.7,17);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.5,0.4).s().p("AAAAGQgIAAABgGQAAgGAHABQAGAAACAFQgCAGgGAAIAAAAg");
	this.shape_306.setTransform(-30.8,23.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.5,0.4).s().p("AAAAGQgHAAAAgGQAAgHAIACQAHAAAAAFQgBAGgGAAIgBAAg");
	this.shape_307.setTransform(-30.6,13.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgHgCQAAgEAGAAQAHAAACAIQgCAFgGAAQgIgFABgEg");
	this.shape_308.setTransform(-33.1,24.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AAAAGQgGAAAAgGQABgGAGABQAGAAAAAFQAAAGgFAAIgCAAg");
	this.shape_309.setTransform(-3.2,19.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQACgHAGABQAHACAAAFQgCAGgGAAQgHgCAAgFg");
	this.shape_310.setTransform(-9.1,15.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.4,0.5).s().p("AgHABQAAgFAHgCQAIACAAAEQABAHgJAAQgHAAAAgGg");
	this.shape_311.setTransform(-5,14.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.6,-0.6,0.5).s().p("AgFAFQgFgCACgDQABgGALABQAFACAAADIgCAAQgFAGgEAAIgDgBg");
	this.shape_312.setTransform(-14.7,19.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AgHABQABgGAGgCQAIABAAAGQAAAHgIABQgFgBgCgGg");
	this.shape_313.setTransform(24,54.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.4,-0.6,0.5).s().p("AgGABQAAgHAHAAQAFABABAFQgBAHgGAAQgHAAABgGg");
	this.shape_314.setTransform(25.3,56.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgGABQgBgEAHgDQAHABABAFQAAAHgHAAQgHAAAAgGg");
	this.shape_315.setTransform(34.4,40.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.5,0.5).s().p("AgMgBQALgFAFABIAGACQABAAAAABQABAAAAAAQAAABAAAAQABABgBAAQgBAEgEAAIgHACQgBgGgLgBg");
	this.shape_316.setTransform(26.7,29.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.7,-0.8,0.7).s().p("AgIAHIgBgIIANgFIAFADIAAAEIgGACQgFABgBADg");
	this.shape_317.setTransform(27.3,26.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AAAAGQgHAAAAgGQABgFAHAAQAHABgBAFQAAAFgEAAIgDAAg");
	this.shape_318.setTransform(14.5,21.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.7,-1,0.8).s().p("AABAMQAHgMgNgGQgBAAgBAGQgBAEgFABIAEgGQABgJABgBQACgBAIAGQADAGAIgBQgFABgCAEIgEAIg");
	this.shape_319.setTransform(7.6,19.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgGAAQAAgGAGAAQAFAAACAGQAAAGgHABQgGAAAAgHg");
	this.shape_320.setTransform(1.8,22.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.4,-0.5,-0.6,0.4).s().p("AgGAAQgBgGAHAAQAHgBAAAHQABAEgIADQgGgBAAgGg");
	this.shape_321.setTransform(4.6,17.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AgHABQAAgFAIgBQAGAAABAFQAAAGgIAAQgHgBAAgEg");
	this.shape_322.setTransform(9.9,14.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgGABQAAgFAGgCQAGAAABAGQAAAHgGAAIgCAAQgFAAAAgGg");
	this.shape_323.setTransform(0.7,12.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQAAgGAIABQAGAAAAAFQACAGgJAAQgHAAAAgGg");
	this.shape_324.setTransform(32.3,19.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AAAAFIgEgDQgFgBACgFIACgCIAFAAQAIAAAAAGQABADgEADIgCABQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_325.setTransform(20.6,18.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQAAgGAHAAQAIACAAAEQAAAHgIAAQgHgCAAgFg");
	this.shape_326.setTransform(24.6,16.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AAAAHQgHgCABgFQAAgGAHAAQAHACAAAFQgCAGgGAAIAAAAg");
	this.shape_327.setTransform(21.8,16);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.5,0.4).s().p("AgHAAIABgDIABAAQAHABAEgCQACACgBACQAAAFgHAAQgHAAAAgFg");
	this.shape_328.setTransform(22.9,13.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.7,-0.7,0.8).s().p("AgKAFQgCgBABgEQACgCAJgBIABAAQACAEADgBIACgBQgBgBgGgBQAGgHAEAHQAEAGgKABIgFABIgFACQgDAAgCgCg");
	this.shape_329.setTransform(-23.4,64.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.8,0.8).s().p("AgEAKQgEgBgCgEQgCgFAGAAQAGgBADgIIAAABQgCAIAJgDIABACIgFACQgEABAAAEQgBAEgDAAIgCAAg");
	this.shape_330.setTransform(-23.6,58.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.5,0.5).s().p("AgIAAQABgEAIgBQAIAAAAAFQgBAFgJABQgIAAABgGg");
	this.shape_331.setTransform(-28.7,55.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AgIAAQAAgFAIAAQAJAAAAAFQAAAGgJAAQgIAAAAgGg");
	this.shape_332.setTransform(-25.3,53.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.4,0.4).s().p("AgGAAQAAgHAHACQAGAAAAAFQAAAGgHABQgGgCAAgFg");
	this.shape_333.setTransform(-23.8,51.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.6).s().p("AgIAAQABgGAHABQAJAAAAAFQAAAFgJABQgIgBAAgFg");
	this.shape_334.setTransform(-16.3,57.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHABQgBgHAIAAQAGAAACAGQgBAGgGABQgGAAgCgGg");
	this.shape_335.setTransform(-27.7,32.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.5,-0.5,0.6).s().p("AgEAFIgDgBQgCgNAOADIADAGQACADgDADQgCACgDAAQgCAAgEgDg");
	this.shape_336.setTransform(-31,36.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAEQgGgEAGgFQAGgDAFAEIACAEQABAEAEgBIgLAFg");
	this.shape_337.setTransform(-23.1,23.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AAAAGQgIAAABgGQAAgHAIACQAIAAgCAFQAAAGgFAAIgCAAg");
	this.shape_338.setTransform(-25.2,24.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.4,0.6).s().p("AgHABQAAgFAHgCQAIABAAAGQAAAGgIAAIgBAAQgGAAAAgGg");
	this.shape_339.setTransform(-27.9,20.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.4,0.5).s().p("AAAAHQgIAAABgHQACgHAGACQAHAAAAAFQAAAHgGAAIgCAAg");
	this.shape_340.setTransform(-26.1,22.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.4,0.5).s().p("AAAAHQgHAAAAgHQAAgGAHAAQAIADgBAEQAAAGgGAAIgBAAg");
	this.shape_341.setTransform(-26.4,18.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.6).s().p("AgIAAQACgGAGAAQAJAAAAAHQgBAGgIAAQgIAAAAgHg");
	this.shape_342.setTransform(-26,13.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AgFAGQgHgHAIgDQAEgDAKAHQgBAFgFABIgEAAIgFAAg");
	this.shape_343.setTransform(-21.8,14.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.6,-0.6,0.7).s().p("AgJAFQACgCABgDQABgFACgBQAIAAAEADQACADgEAHQgFgCgLAAg");
	this.shape_344.setTransform(-6.7,20.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHABQgBgHAIAAQAHgBABAHQABAFgIACQgGAAgCgGg");
	this.shape_345.setTransform(-6.6,13.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.5,0.4).s().p("AgHAAQAAgHAHABQAIAAAAAGQgDAHgFAAQgIgCABgFg");
	this.shape_346.setTransform(-19.8,22.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgHAFIABgGIAGgFIAHAAQACAJgDADQAAAAgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQgCAAgHgCg");
	this.shape_347.setTransform(21.6,58.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AAAAIQgGgBAAgHQABgHAGAAQAGACAAAGQgCAHgFAAIAAAAg");
	this.shape_348.setTransform(35.8,43.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.6,0.6).s().p("AgIAEIAAgFQADgGAFACIAJADIAAABIAAAAIgCAGQgFACgDAAQgEAAgDgDg");
	this.shape_349.setTransform(33.8,39);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHABQgBgFAIgCQAIAAAAAGQABAHgJAAQgHAAAAgGg");
	this.shape_350.setTransform(37.5,37.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.6,0.5).s().p("AgBAGIgGgEIgBgDQAIgHAHACQAFAIgGADQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_351.setTransform(35.9,25.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.6).s().p("AgIADQgCgDADgCQAFgFAGADIAGACIAAAFIgHADIgDAAQgFAAgDgDg");
	this.shape_352.setTransform(15.8,20.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHAAQACgGAFAAQAJAAgCAGQAAAFgHACQgHgCAAgFg");
	this.shape_353.setTransform(0.5,15.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.4,-0.5,0.5).s().p("AgHABQgBgEAGgCQAGgDADAGIACAGIgIACIgCABQgEAAgCgGg");
	this.shape_354.setTransform(31.5,22.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.6,0.5).s().p("AgDAHQgFgDACgEQACgGgBgBIALAAIACAHQABAEgEADIgFABIgDgBg");
	this.shape_355.setTransform(35.9,17.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.5,0.5).s().p("AgDAGQgGgCACgEQACgHAHACIAGABIAAAGQgCAFgFAAIgEgBg");
	this.shape_356.setTransform(27.7,22.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AAAAHQgHAAAAgHQAAgFAHgBQAJABgBAGQAAAGgGAAIgCAAg");
	this.shape_357.setTransform(29.3,19.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.6,0.5).s().p("AgHAEQAAgIAEgBQACgCAJAEQABAKgIAAQgCAAgGgDg");
	this.shape_358.setTransform(20.8,22.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.8,0.7).s().p("AgHAJQgIgGAJgEQAGgFgBgEQABAAAEAGQACAEAGgBIgEACQgEACAAACQgCAGgDAAIgGgCg");
	this.shape_359.setTransform(25.9,20.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.5,0.5).s().p("AgDAGQgEgDAAgFIAEgDQALgCAAAHQAAAGgIAAIgDAAg");
	this.shape_360.setTransform(24.6,24.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-0.8,-0.8,0.8).s().p("AgIACQABgFACgCQABgFAGgBQAEAAABADQADACgCADIgCAIQgBAGgGAAIgBABQgGAAAAgKg");
	this.shape_361.setTransform(-37.8,61.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-0.7,-0.6,0.8).s().p("AAAAKQgLAAADgKQADgJAIAAQAJAAgDAHIgBAIQgCAEgFAAIgBAAg");
	this.shape_362.setTransform(-38.7,50.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.5,0.5).s().p("AgFAFQgFgDAAgEQgCgHAJABQAMACACAIQACAGgKABIgIgEg");
	this.shape_363.setTransform(-32.6,54.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.7,-0.7,0.7).s().p("AgIADQACgKAIgBQAIgBgBAHQAAAJgJACQgIAAAAgGg");
	this.shape_364.setTransform(-25.3,57.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.4,0.5).s().p("AgJgCQgCgEAKgCIAHAFQAEACABADQAAAHgIgBQgKgBgCgJg");
	this.shape_365.setTransform(-27.2,51.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-0.8,-0.8,0.8).s().p("AgIAIQgDgCACgDQADgKAKgCQAHgBAAAIQgEAKgKACIgBAAQgDAAgBgCg");
	this.shape_366.setTransform(-22.2,54.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.6,0.5).s().p("AAFAIIgKgDQgFgDgCgEQgCgEALgCQAOACACAIQAAADgCADIgDABIgDgBg");
	this.shape_367.setTransform(-50.4,33.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.5,-0.6,0.6).s().p("AAFAHQgGgBgEgBQgGgCgBgEQAAgDADgCQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIAJADQAHABABAEQgBAFgEAAIgDAAg");
	this.shape_368.setTransform(-40.3,44.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-0.8,-0.8,0.8).s().p("AgHAJQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAgHALgHIAHAAIADACQgEACACADQgBALgLABIgBAAIgDgBg");
	this.shape_369.setTransform(-32.6,37.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.1,-0.5,-0.7,1.1).s().p("AADAQQgDAAAAgDQgBgDgFgCQgGAAgBgDQAOADgCgNIAAgKIADADQAAADgBAJQAAAFALAAQAFAIgIADIgDAAIgDAAg");
	this.shape_370.setTransform(-32.5,30.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.6,-0.5,0.6).s().p("AgCAIQgHgFAEgGQAEgIAIAFQACACgCAJQgDAEgEAAIgCgBg");
	this.shape_371.setTransform(-35.3,30.2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-1,-0.9,0.8).s().p("AgHAIIgCgFIAFgKQAEgHAHADQAGADgEAHQgEAGgEABQgGABADAGQgDgBgCgEg");
	this.shape_372.setTransform(-24,27);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.4,-0.4,0.5).s().p("AgEAFQgIgFAHgHQAFgCAHAGQADADAAAFQgFADgDAAQgDAAgDgDg");
	this.shape_373.setTransform(-23.5,20.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-0.9,-0.9,0.9).s().p("AgKADQAFgMAJgBQAKgBgEALQgDAAgCAFQgDAEgCACQgMAAACgIg");
	this.shape_374.setTransform(-24.1,17.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.8,-0.8,0.7).s().p("AgKABQABgFAGgDIALgBQAAADADAFQgEAAgBACIgGACQgFACAAADQgEgDgBgFg");
	this.shape_375.setTransform(-9.1,18.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.7,0.7).s().p("AgFAJQgCgCAAgDIAAgEQAGgIAEAAQAEABABADQACAKgJADg");
	this.shape_376.setTransform(22.2,56.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.5,0.4).s().p("AADAJQgJgCgDgIQAAgHAHAAQAJABADAIQgBAIgFAAIgBAAg");
	this.shape_377.setTransform(22.1,51.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.6,-0.6,0.7).s().p("AgFACQgGgDAFgFQAEgEAGACQAHACgCAGQgBAGABACIgKACQABgEgFgEg");
	this.shape_378.setTransform(31.4,38);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-0.7,-0.9,0.9).s().p("AgJAJIADgHQAGAAAAgDQgCgFABgCQAFgEAEAGQAEADgEADIgFAJQgCACgCAAQgEAAgEgCg");
	this.shape_379.setTransform(35.5,38.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-0.7,-0.8,0.9).s().p("AgNAFIABgGIAHgBQAFAAAAgDIAIgBQAGACAAAEIgBAFIgMAAIgIACg");
	this.shape_380.setTransform(29,25.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AABAHIgMgGIAAgFIAGgCQARgBAAALQgEADgHAAg");
	this.shape_381.setTransform(17.9,20.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.6,0.5).s().p("AgKAAQgCgHAKAAQAMgBABAJQABAGgJACQgLgCgCgHg");
	this.shape_382.setTransform(9.6,16.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.8,-0.8,0.7).s().p("AgHAIQgEgCgBgIIAPgEQAIgCACAGQAAAEgFADQgIADgEAAIgDAAg");
	this.shape_383.setTransform(33.6,22.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.7,-0.7,0.6).s().p("AgHAGQgFgDABgDQADgGAIAAQAMAAAAAGIgGAFQgDACgDAAIgHgBg");
	this.shape_384.setTransform(40.2,45.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-0.6,-0.7,0.9).s().p("AAEAHQgFgDgDAEQAAgHgMAAIAQgGQAIgGAJALIgDAIIgDAAIgHgBg");
	this.shape_385.setTransform(41.9,44.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.5,-0.7,0.6).s().p("AgHAAIgBgBIADgHIACACQABAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQALgBgCAHQAAAHgJAAQgIAAABgJg");
	this.shape_386.setTransform(44.2,45.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.6,-0.6,0.6).s().p("AgJAAQAAgFAJgCQAKACAAAFQABAIgKAAQgLAAABgIg");
	this.shape_387.setTransform(44.9,30.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-1.2,-0.9,0.4).s().p("AgKACIgDgCIAVAAIAGgCQgCADgJACg");
	this.shape_388.setTransform(-35.6,48.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.1,-0.9,-1.1,1.2).s().p("AgJANQgKgEAHgGIAJAAQAHAAgBgCIgEgDQgDgDABgEQAGgEAFACQADACAEAHQADAEgHAEQgHAEAAADgAgDgJIAAgBIAAABg");
	this.shape_389.setTransform(-34.4,35.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.5,-1.6,-1.5,1.2).s().p("AgMAOQgIgFAAgGQAAgGALABQAFACAEgEIAFgGQAIgHAGAGQAFAEgJAGIgQAMQgEAEgDAAIgEgBg");
	this.shape_390.setTransform(-39.5,35.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-1,-1.1,0.9).s().p("AgEAMQgIAAAAgIQAAgFAGgFQAGgFAFAAQAHAAABAGQgOARgDAAIAAAAg");
	this.shape_391.setTransform(-37.3,28.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-0.8,-0.9,0.8).s().p("AgEAOIgBgFIAAgNQgGgMANADIAGAGIAAAKQACALgKAAIgEAAg");
	this.shape_392.setTransform(-33.4,29.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.7,-0.7,0.8).s().p("AAAAKIgOgIQgEgDACgFQACgFAGgBIAJAAIADAFQABAEADAAQAPADgHAKQgCADgEAAQgEAAgGgDg");
	this.shape_393.setTransform(-25.1,28.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.5,-0.6,-0.7,0.5).s().p("AgDAIIgIgHIAAgBQgDgMAPADQALAJAAADQAAAEgKAEg");
	this.shape_394.setTransform(-22.1,18.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.1,-0.9,-0.9,0.9).s().p("AgJAIQgIgBAFgHIALgFQAJgFAEAEQAGAEgFADQgHAIgJAAIgGgBg");
	this.shape_395.setTransform(-21.8,24.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.3,-1.1,-1.2,1.2).s().p("AgNAHQgKgCAAgFQACgJAJACIAXABQANACgBAGQAAAFgFABIgLABg");
	this.shape_396.setTransform(-16,13.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.8,-0.7,-0.8,0.8).s().p("AgNAAQAAgGANAAQAHAAADABQAFABgBAEQAAAHgOAAQgNAAAAgHg");
	this.shape_397.setTransform(14.5,62.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.8,-1.2,0.9).s().p("AgFAGQAFAAAAgDQACgFgHACQgJgCACgEIAEgIIAEAAQAFAFACABQATAIgQAIIAAAEIgLADQgGgFAGgEg");
	this.shape_398.setTransform(31,34.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.9,-1.1,0.8).s().p("AgFAKQgHgBAAgEIABgHQACgIAFABQAEACAHAAQAFABABAFIgGAHIgIAEg");
	this.shape_399.setTransform(30.7,32.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],2.1,-1.1,-1.1,1.8).s().p("AAMALQgIAAgDgCQgFgBgBAIIgLgEQgFgDADgHQAEgBACgDIAEgGQAEgKALACIAIAAQAFAEgCAEQgBADgHAAQgHgCgBAFQgCAKAJAAIAJABQAEADgEAFQAAgFgGgBg");
	this.shape_400.setTransform(30.2,30.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.1,-1.1,-1.1,0.9).s().p("AgKAKQgGgGAFgFIAHgHQAMgGAGAGIAAAFQAAADgFADIgHAFQgDAEgEAAQgCAAgDgCg");
	this.shape_401.setTransform(33.7,26);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.3,-1.8,-1.5,0.8).s().p("AgIAOIgLgKIAAgHQgDgKADgCQABgBALABIAHgCQADgBAGADQAGADAEAAQAEADgCAEIgGAGIgEABQgFABABAFQAEAHgHADIgDAAQgDAAgGgEg");
	this.shape_402.setTransform(38.1,29.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-0.8,-0.9,0.8).s().p("AgMABQAAgLAMAAQALAAACAKQAAALgNAAQgMAAAAgKg");
	this.shape_403.setTransform(16.2,17.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.9,-0.8,-0.9,0.8).s().p("AgGALQgGgFADgJIAIgFQAEgFAFAFQAGAFgEAEQgGAFgBADIgEACg");
	this.shape_404.setTransform(10.3,19.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1,-1,-1.1,1).s().p("AgHAIQgPgBAIgNIAFgCIARAAQAGAAADAIQACAFgIABQgKADgFAAIgDgBg");
	this.shape_405.setTransform(39.1,25.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.7,-0.7,-0.8,0.7).s().p("AgCAKQgDgGgCAAIgGgDIADgKIAGgDQACAAABAEIABADQAQABgCAFQgCAEgHAIIgCAAQgDAAgCgDg");
	this.shape_406.setTransform(26.6,19.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],1.1,-1,-0.9,0.9).s().p("AgCAPIgFgKQgDgFABgCIACgKQACgGAFABQALABgCAMQgBAIACAFQACAEgGADIgFACQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_407.setTransform(42.3,29.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],22,-24.3,-22.5,17.3).s().p("AAjErQgGgFAAgCQgDgNgXgXQgIgIADgKQADgWgVgaIgKAxQgJAlguAOQgKADgEgCQgCgCgCgJIAAgeQAAgUgEgLQAAgGAEgDIAEAAQABgBAAAAQAAAAABgBQAAAAAAgBQgBgBAAAAQgEgHgFAGIgDAEQgBAAgBAAQAAABAAAAQAAAAgBABQAAAAABABQgOABABgJIADgtQAAgbAEgRQAIgdAJgKQACgCAAgJIgVAGQgLADgCgFQgBgDAMgGQAIAAABgDQgSgKgHAQQgBAGABALQgMACgJAHQgLAIgVABQgDgCAAgFQgBgFgCgBQgCgLgIgQQgJgTgDgIIgBgUQAAgMAEgIQgPgCgBALQgCAFgEADQgFAFACALQgLAKgOAAQgYACgEgTQABgEgHgDIgBgCIgBgGQgCgCADgDQAIgDgFgGIAAgJQABgSASACIAMAAQgHgGgBgDQgBgFAHgEQABAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgGABgJgFQgIgFgGAAQgEAAgCgDQAAgFADgDQAGgGgGgDIgBgHQAAgEAGAAQAJABAKgKQAMgCgJgGQgEgDADgEQACgDAGAAQAOAAAHgGQAHgHgCgKIgBgHQAAgEAFgBQAFgCAHAIQAHAHAFgEQAFgCgCgDIgEgEQgEgGACgKIACgQQAAgDAEgCQAEAAAEABQAMAFAHgMQAGgHAGgNIAIgVQAGgIAGAEQAIAGACgFIAGgFQAFgEgDgEQgCgCABgHQABgFgFgCQAAgEgFgBQgFgMAQgHIAIABIAMAIQAHAFADAGQABAFAEADQADADACAGQACAGADADQACAAADgFQABgDAEgBQAMAAAEADQAPAIADALQAOgFAHAFQAHAEAFAUQALgJAIADQADAJgJAEQgGADAFADQAFAFAFgBQAHgCgDgEQgEgIALgMQAJAAADABQAFACABAIQAAAEAFAEQAFAFAIgEQAEgCADADIAHAEQABgIgBgDQgCgGgKABQgEABAAgHQgBgDAHgDIAFAAQABgBABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIgBgIQAAgEgDgBQgMgEAAgHQAAgDAGgKQAFgBABgFQAAgGACgBQANAHgHAMIgHAFIAKAAQAMAHAHAWIADAEQACAFAEAAIAAgRQAEgBAKABQAJAAADgGQAHADAOACQAPACAHADQAcARAYgNQAGgDACAEQAAAKACACQAEAIgEAIIgLAFIgLgCQgHgBgFABQgIACAFAFQAHAIAIgEQAEgCAHgGIAOgCIAIABIAIADQAEACgCAFQgDAHgHgEQgIgGgGADIgKAKQAOAFAGAIQACgMAHgDQALABABAHQAGAHADAMIAEAVQABAEABAHQABAHAIACQAGAEgEADQgGADABAEIAGAGQAFAIAEAOIAIAUQADAGgOAAIgHgCQgFgBgBAFQgDAMAPgBQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQgEADABACIACAJQABAFgFADQgFADgGgEQgHgFgBgBQgDgJgIAAIgOAEQgEAAAAAGIAAAPQACATgQAEQgSAGgMgOIgEgUQgCASAEAHQAPAXgBAxQgDADAAAKIAAAHQAAASgEAFQgGAIgJgBQgKgCAAgJQABgHgPgDQgFgBgOADQgMACgHgDQgEgBAAAIQAAAJgPAGIgFAAQgEgBAAAEIAAAJQABAFAFACQAJAEgCAIQgJABABAJIAGAcQAIAWgTATIgUAXQgLAMgMAHQgFACgEAAQgFAAgEgEgAhKCvQgFAAADADQABADAEgCQADgBAAgFQgCgGgEgBgABRBpQgBAHAEgBIAGgDQAIgCAAgHQAGgHgDgOQABgGgFgBIgJAAIgIAAQgEABAAAGQAGALgGAFQgHADgFAHIAMgFQAFABAAAFgAhlAdIgGANQgCAHAIAGQAFAFAIgFQAEgCgCgEIgCgGQABgDgEgEQABgHgIAAIgDAAgAjSgpQgFADgBADQgDABAAAJIADAIQABAEgBAEQAMgKAEgMQABgJgCgGIgJAFg");
	this.shape_408.setTransform(0.3,47.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],0.6,-0.6,-0.6,0.5).s().p("AgEAFQgCgDgDgBIAAgIQANgHAGAOQABAIgFACIgDABQgDAAgEgGg");
	this.shape_409.setTransform(-55.4,35.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,-0.1,0.7,-0.1).s().p("AgFABQgCgGAHgBQAGgBAAAHQACAHgIAAQgFABAAgHg");
	this.shape_410.setTransform(-33.9,63.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.4,0,0.5,0).s().p("AgBAHQgDgEAAgHIABgCQAGgBACAEQAAAGgDAEg");
	this.shape_411.setTransform(-19,72.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-1,0,1.1,0).s().p("AACAHIgJAAIgCgCQgBgGADgFQADgCAEADQAEACADgBQAAAHADAEg");
	this.shape_412.setTransform(-20.2,72.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgGAEQgBgGAEgFQAGgBAEAFIgCAKIgDABg");
	this.shape_413.setTransform(-20.2,70.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.8,0,1,0).s().p("AgCAGQgBgDgFAAQADgEAAgHIADAAQANAAgCAKQgCAHgEAAQgDAAgCgDg");
	this.shape_414.setTransform(-17.9,73);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgFAGIgBgIIAGgGQAMAGgJALg");
	this.shape_415.setTransform(-18.5,70.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.7,0,0.8,0).s().p("AgGABIAAgEQAGgHAHAHQgCAIgBACIgDABQgCAAgFgHg");
	this.shape_416.setTransform(-19.6,68.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.6,0).s().p("AgGgCQADgHAGAEQAHAGgHAGQgIgBgBgIg");
	this.shape_417.setTransform(-16.1,66.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.4,0,0.5,0).s().p("AgEACIAGgGIACABIgEAIg");
	this.shape_418.setTransform(-9.9,53.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.6,0).s().p("AgDAIIgCgLQAHgJADALQAEAJgJAAIgDAAg");
	this.shape_419.setTransform(30.9,80.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgGAAQABgHAFAAQAHAAAAAHQAAAHgHABQgFAAgBgIg");
	this.shape_420.setTransform(13.1,62.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgEgEQACgEAEACQAFAAAAAKIgJAEQgHgFAFgHg");
	this.shape_421.setTransform(24.8,53.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.9,0,0.9,0).s().p("AgHgEQACgEAFABQAHACACgBIgBABQgCAFAAAGIgIACQgJgDAEgJg");
	this.shape_422.setTransform(-21.8,72.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.8,0,0.9,0).s().p("AgHABQgCgIAJgBQAIAAABAIQAAAIgIABIgCAAQgGAAAAgIg");
	this.shape_423.setTransform(-25.1,73.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-1.2,0,1.2,0).s().p("AgKAIQgCgDABgEQABgFAGgDIAJgCQAGgBACAKQgCAGgPAEIgBAAQgDAAgCgCg");
	this.shape_424.setTransform(-22.8,69.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.9,0,1,0).s().p("AgJACQACgMAJgBQAGAAACAKQgFALgFACIgBAAQgIAAAAgKg");
	this.shape_425.setTransform(-28.3,72.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.8,0).s().p("AgHABQABgIAGAAQAFAAADAHQAAAIgIAAIgCAAQgFAAAAgHg");
	this.shape_426.setTransform(-26.5,69.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.9,0).s().p("AgGAAQgBgLAJABQAFABABAJQAAALgIAAQgGAAAAgLg");
	this.shape_427.setTransform(-26.8,64.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-1.1,0,1.1,0).s().p("AgKADQgBgKAJgDIANAEQABAGgDADQgIAIgEAAQgHgBAAgHg");
	this.shape_428.setTransform(-23.8,65.9);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgGAHIAAgFQgBgKAHgBQAIgBgBALIAAAKg");
	this.shape_429.setTransform(-23.4,64.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.7,0,0.8,0).s().p("AgGABQAAgHAGgBQAGAAACAHQgCAIgFAAQgIAAABgHg");
	this.shape_430.setTransform(-21.4,64.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgHAAQACgHAGAAQAGAAABAHQAAAIgIAAQgGgBgBgHg");
	this.shape_431.setTransform(-30.6,73.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.9,0,0.9,0).s().p("AgIACQAAgJAIgDQAIABABAIQAAAKgJACQgIAAAAgJg");
	this.shape_432.setTransform(-24.6,51);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.7,0,0.8,0).s().p("AgGgBQABgHAGAAQAHABAAAIQgCAIgGAAQgHgDABgHg");
	this.shape_433.setTransform(-23.5,61.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.9,0,0.9,0).s().p("AgIAIIAAgBQgCgJAKgGIAJAAIgBACQgFACAAAFQAAAIgHAAIgEgBg");
	this.shape_434.setTransform(-20.9,74.2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-1.2,0,1.3,0).s().p("AgJALQgEgDACgLQABgBAGAAQAEgBAAgFIACgBQABAJAJABQgBACgDAAQgFAAgBACIgDAHQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_435.setTransform(-17,67.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.7,0,0.8,0).s().p("AgCAGQgKgLAKgEQAIgEACAOIgJAJg");
	this.shape_436.setTransform(-13.3,59.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.8,0).s().p("AgHABQABgJAGAAQAIAAgBAIQgBAJgGAAQgGAAgBgIg");
	this.shape_437.setTransform(-12.3,57.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgGAAQAAgHAGAAQAHgBAAAIQAAAHgGABQgGAAgBgIg");
	this.shape_438.setTransform(-16.2,52.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.8,-0.1,1,-0.1).s().p("AgIAAIAGgJQALgCAAAKQACAHgJAEIgCAAQgHAAgBgKg");
	this.shape_439.setTransform(-9.2,54.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.7,0,0.8,0).s().p("AgGAAQAAgIAHABQAGAAAAAIQgCAHgFAAQgIAAACgIg");
	this.shape_440.setTransform(-6.6,53.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgGgBQACgGAEgBQAJADgCAHQgCAGgFAAQgIAAACgJg");
	this.shape_441.setTransform(-13,49);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgFAAQgCgHAHAAQAHgBAAAIQAAAHgGAAIgCABQgEAAAAgIg");
	this.shape_442.setTransform(-20.1,48.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgGAAQAAgGAGgBQAHAAAAAHQABAHgHAAIgBABQgFAAgBgIg");
	this.shape_443.setTransform(-18.1,48.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgGABQAAgHAGAAQAGgBABAHQgBAIgGAAQgGAAAAgHg");
	this.shape_444.setTransform(-19.9,39.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AgGAAQAAgHAGAAQAHABAAAGQAAAIgHAAQgGAAAAgIg");
	this.shape_445.setTransform(31.3,78);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AAAAHQgGAAAAgHQAAgHAGAAQAHAAAAAHQAAAIgGAAIgBgBg");
	this.shape_446.setTransform(18,68.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.7,0,0.6,0).s().p("AgHAAQABgJAGACQAGAAACAHQgCAIgGAAQgHAAAAgIg");
	this.shape_447.setTransform(7.2,50.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.6,0,0.7,0).s().p("AAAAIQgGAAAAgIQAAgIAHAAQAGABAAAHQAAAJgHAAIAAgBg");
	this.shape_448.setTransform(10.3,57.4);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.7,0,0.8,0).s().p("AgHAJQADgDgDgIQAFgJAGAEQAFADgCAEQAAADgCAGg");
	this.shape_449.setTransform(26.5,72.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-1,0,1.1,0).s().p("AgKgCQAFAAABgDQAEgJAGAEQAGADgCAHQgBALgIgDQgDgBgCACIgDADQAAgLgDgDg");
	this.shape_450.setTransform(24.5,67.6);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.7,0,0.8,0).s().p("AgEAGQgFgEADgFQAEgJAHAFQADAEAAAJQgDAEgDAAQgDAAgDgEg");
	this.shape_451.setTransform(22.9,68.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.8,0,0.7,0).s().p("AgHABQABgJAGAAQAIAAAAAIQgBAJgHABQgHgBAAgIg");
	this.shape_452.setTransform(25.1,64.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.8,0,0.7,0).s().p("AgGAAQAAgIAGAAQAIACgBAGQAAAFgHAEQgHgBABgIg");
	this.shape_453.setTransform(26.2,61.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.8,0,0.8,0).s().p("AAAALQgIAAABgLQAAgKAIAAQAHACAAAJQAAAKgHAAIgBAAg");
	this.shape_454.setTransform(23.7,58.7);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-1.2,0,1.1,0).s().p("AgDAFQgDgJgFgBIAKgEQAJAAACAFQAFAHgHAGIgFABQgDAAgDgFg");
	this.shape_455.setTransform(25.7,55);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-1.2,0,1.3,0).s().p("AACAKIgJgEQgFgDAAgGQAAgHAIABQAJABADACQAFACgBAHIgGAHg");
	this.shape_456.setTransform(-11,53.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-1,0,1.1,0).s().p("AADAOQgNgDAAgPQAAgJAIgBQANAHAAANQAAAJgFAAIgDgBg");
	this.shape_457.setTransform(-31.4,69.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-1.6,0,1.8,0).s().p("AgPAOQgDgHAFgDQAJgHAIgMQACgEAGACQAFACAAAGQAAAFgLALQgJAMgFAAQgEAAgDgFg");
	this.shape_458.setTransform(-30.5,60.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.8,0,0.9,0).s().p("AgIADIAAgIIAJgCQAFAAADAGQgCAJgFAAQgDAAgHgFg");
	this.shape_459.setTransform(-34.5,76);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-0.9,0,0.9,0).s().p("AgIAEQgCgGAFgEQAFgEAEAEIAGAFIAAAFIgIAFIgCAAQgGAAgCgFg");
	this.shape_460.setTransform(38.1,65.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.lf(["#44C6F3","#42BFF3","#3CADF3","#328FF3","#2E83F3"],[0,0.216,0.522,0.875,1],-32.5,0,32.6,0).s().p("AlFC9QAAgEAEgGQAFgFAAgFQAAgQAMgYQAKgJAFAAQAGABAKAJQAEAFASAIQAJADAFgHIAGgJQAFgOAJAAQAGAAABAGQACACABAHIgBAHQAAADAEACIADgFIAAgHIAIABQAEAAADgDIABgDIAPgJIAUgDQADAAAJAEQAHADACgEQACgFALgMQAKgKABgJQAFgFgBgCQgCgDgFAAIgHABQgGgEAAgIIgDgiQAAgTAFgNQACgCACgHQADgGAEgDIAJgKQAGABALgDQAJgCAHAAQARACgBAQIgBAGQAAAEACACQADACADgCIAGgGQAGgGASgHQgMgKgBgGQgCgFAIgQQAKgWgKgMQgDgEACgFQABgFAEgBQAIgFAHgRQAPggACgIQACgIAIgDQAHgDAIADQAOAEgGASIgBAEQgMAVAHAXQAFANAPAbQAOAUABATQAAANALAJIAaAQQAOAIAPgEQAFgCAJAFIAIAIQAFACAGgFQADgEAFAIQAEAHgHAFQgGAHgBAMIAAAVQgCAEAIAAIAaABQAQgEALAPQAJAKADACQAIADgEAKQgEANABADQACAEAOAEQgCgIACgMQADgOgBgGQgBgKAMADIACAIQAAAFAFABIANAAQAQAJAHAUQABAGAFAdQgDADACAHIACAJIAAAFgAhvCKQgEACAAAEIADAHQAJgEgDgHQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAIgBAAgABxCFQgDAFAEAEIAKAGIAAgLQAAgHgDgDIgDgBQgDAAgCAHgAgjCCQgBABgCALIASgGQgLgGgDAAIgBAAgAAQCCQABAAAAABQAAAAAAAAQAAAAABAAQAAgBAAAAIACAAQAAgFgFgFQgDAIAEACgABGByIAAAEQACABACgEQAFgHgGgHIAAgFQAAgBAAgBQAAAAgBAAQAAgBgBAAQAAgBgBAAIAAAWgAgsBTQAAADAEAAQAEgCACgHQAAgBAAAAQAAgBAAAAQgBAAgBAAQAAAAgBAAQgHAAAAAIgAhTBHQAGAGAHgFIAAgDIgEgBQgEAAgFADgAAUAiQACADADgFQAAgHgIgEQgEAHAHAGgAgPARQAAAGAGABQAEABADgCIAFgHIgVgJIADAKgAhjAKQABAEACACQADgDAAgCQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAIgBgBQAAAAAAABQgBAAAAAAQAAABgBABQAAAAgBABg");
	this.shape_461.setTransform(-2.5,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_4},{t:this.instance_3}]},22).to({state:[{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_109},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_99},{t:this.shape_104},{t:this.shape_115},{t:this.shape_101},{t:this.shape_114},{t:this.shape_98},{t:this.shape_100},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_113},{t:this.shape_90},{t:this.shape_89},{t:this.shape_112},{t:this.shape_111},{t:this.shape_88},{t:this.instance_4},{t:this.shape_110},{t:this.instance_3}]},3).to({state:[{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.instance_4},{t:this.shape_110},{t:this.instance_3}]},3).to({state:[{t:this.instance_4},{t:this.shape_110},{t:this.instance_3}]},4).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.8,-248,167.8,294.5);


(lib.TimePop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.continueBtn.addEventListener("click", fl_MouseClickHandler2.bind(this));
		function fl_MouseClickHandler2() {
		
			this.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.TimeTxt = new cjs.Text("נסה לפוצץ את ", "35px 'Arial'", "#333333");
	this.TimeTxt.name = "TimeTxt";
	this.TimeTxt.textAlign = "center";
	this.TimeTxt.lineHeight = 41;
	this.TimeTxt.lineWidth = 211;
	this.TimeTxt.parent = this;
	this.TimeTxt.setTransform(660.2,302.9);

	this.TimeTxt_1 = new cjs.Text("הבלון הבא...", "bold 35px 'Arial'", "#333333");
	this.TimeTxt_1.name = "TimeTxt_1";
	this.TimeTxt_1.textAlign = "center";
	this.TimeTxt_1.lineHeight = 41;
	this.TimeTxt_1.lineWidth = 188;
	this.TimeTxt_1.parent = this;
	this.TimeTxt_1.setTransform(460.8,302.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACD7BC").s().p("ACACWIkljzQgBgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAMAAIgEgOIANABIgEgPIANABIgEgOIANAAIgDgOQAAgCAAACIEmD0QABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgNAAIAFAOIgOAAIAEAOIgNAAIAEANIgOAAIAEANIABADIgCgCg");
	this.shape.setTransform(826,230.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ACD7BC").s().p("ABgBxIjbi3QgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIAKABIgEgLIAKAAIgDgLIAKABIgDgLIAKABIgDgKIAAgBIABAAIDcC3QAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgJAAIADAKIgKAAIADAKIgKAAIADAKIgKAAIADAKQAAAAAAABQABAAAAAAQAAABAAAAQgBAAAAAAIgBgBg");
	this.shape_1.setTransform(311,395.4,1.333,1.329);

	this.continueBtn = new lib.contiBtn();
	this.continueBtn.name = "continueBtn";
	this.continueBtn.parent = this;
	this.continueBtn.setTransform(571.7,390.7,0.864,0.899);

	this.TimeTxt_2 = new cjs.Text("משך הזמן לפיצוץ הבלון עבר!", "35px 'Arial'", "#333333");
	this.TimeTxt_2.name = "TimeTxt_2";
	this.TimeTxt_2.textAlign = "center";
	this.TimeTxt_2.lineHeight = 41;
	this.TimeTxt_2.lineWidth = 397;
	this.TimeTxt_2.parent = this;
	this.TimeTxt_2.setTransform(566.5,259.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgwUAHDIAAuGMBgoAAAIAAOGg");
	this.shape_2.setTransform(565.2,311.9,0.865,2.004);

	this.instance = new lib.רקע();
	this.instance.parent = this;
	this.instance.setTransform(581.3,372.2,1.333,1.153,0,0,0,254.6,239.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.TimeTxt_2},{t:this.continueBtn},{t:this.shape_1},{t:this.shape},{t:this.TimeTxt_1},{t:this.TimeTxt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TimePop, new cjs.Rectangle(242,95.9,678.3,551.2), null);


(lib.ScorePop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.continueBtn.addEventListener("click", fl_MouseClickHandler2.bind(this));
		function fl_MouseClickHandler2() {
		
			this.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACD7BC").s().p("ABgBxIjci3QAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAJAAIgDgLIAKABIgDgLIAKAAIgDgKIAJAAIgCgKQAAgCAAABIDcC4QABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgJAAIADAKIgKAAIADAKIgKAAIADALIgKgBIADAKIAAACIgBgBg");
	this.shape.setTransform(870.9,240.7,2.032,2.234);

	this.continueBtn = new lib.contiBtn();
	this.continueBtn.name = "continueBtn";
	this.continueBtn.parent = this;
	this.continueBtn.setTransform(1127.4,292);
	new cjs.ButtonHelper(this.continueBtn, 0, 1, 1);

	this.finishGame = new lib.finishGame();
	this.finishGame.name = "finishGame";
	this.finishGame.parent = this;
	this.finishGame.setTransform(416.9,390.9,0.82,0.82,0,0,0,0.2,-0.1);

	this.playAgain = new lib.playAgain_1();
	this.playAgain.name = "playAgain";
	this.playAgain.parent = this;
	this.playAgain.setTransform(733,390.8,0.82,0.819,0,0,0,0.2,-0.3);

	this.NameTxt = new cjs.Text("מלחמות", "bold 35px 'Arial'", "#333333");
	this.NameTxt.name = "NameTxt";
	this.NameTxt.textAlign = "right";
	this.NameTxt.lineHeight = 41;
	this.NameTxt.lineWidth = 314;
	this.NameTxt.parent = this;
	this.NameTxt.setTransform(579,183.7);

	this.text = new cjs.Text(" זמן:", "35px 'Arial'", "#333333");
	this.text.lineHeight = 41;
	this.text.lineWidth = 81;
	this.text.parent = this;
	this.text.setTransform(423.9,280);

	this.text_1 = new cjs.Text(" ציון:", "35px 'Arial'", "#333333");
	this.text_1.lineHeight = 41;
	this.text_1.lineWidth = 80;
	this.text_1.parent = this;
	this.text_1.setTransform(735,280);

	this.TimeTxt = new cjs.Text("00:00", "bold 35px 'Arial'", "#333333");
	this.TimeTxt.name = "TimeTxt";
	this.TimeTxt.textAlign = "right";
	this.TimeTxt.lineHeight = 41;
	this.TimeTxt.lineWidth = 92;
	this.TimeTxt.parent = this;
	this.TimeTxt.setTransform(419.9,280);

	this.ScoreTxt = new cjs.Text("188", "bold 49px 'Arial'", "#006666");
	this.ScoreTxt.name = "ScoreTxt";
	this.ScoreTxt.textAlign = "right";
	this.ScoreTxt.lineHeight = 57;
	this.ScoreTxt.lineWidth = 87;
	this.ScoreTxt.parent = this;
	this.ScoreTxt.setTransform(731,275.3);

	this.text_2 = new cjs.Text("סיימת את המשחק:", "35px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 41;
	this.text_2.lineWidth = 276;
	this.text_2.parent = this;
	this.text_2.setTransform(715.1,183.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ACD7BC").s().p("ABgBxIjci3QAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAJAAIgDgLIAKABIgDgLIAKAAIgDgKIAJAAIgCgKQAAgCAAABIDcC4QABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgJAAIADAKIgKAAIADAKIgKAAIADALIgKgBIADAKIAAACIgBgBg");
	this.shape_1.setTransform(305.5,446.5,2.032,2.234);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgwUAHDIAAuGMBgoAAAIAAOGg");
	this.shape_2.setTransform(586.6,342.6,0.951,2.536);

	this.instance = new lib.רקע();
	this.instance.parent = this;
	this.instance.setTransform(581.3,372.2,1.333,1.153,0,0,0,254.6,239.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.text_2},{t:this.ScoreTxt},{t:this.TimeTxt},{t:this.text_1},{t:this.text},{t:this.NameTxt},{t:this.playAgain},{t:this.finishGame},{t:this.continueBtn},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScorePop, new cjs.Rectangle(242,95.9,944.4,551.2), null);


// stage content:
(lib.Blowtheballoon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var selfHome = this;
		var RemoveArr = [];
		var gameCodeUser;
		var myJSON;
		//var Target = new lib.targt();
		var isPublish;
		
		selfHome.play_btn.addEventListener("click", EnterCodeFunc.bind(this)); //כפתור כניסה למשחק
		
		function EnterCodeFunc() {
		enterCode = new Object();
		enterCode.classes = gameCode_txt.value;
		gameCodeUser = enterCode.classes; //משתנה - קוד המשחק
		$.post("/Handler.ashx", { //שליחת בקשה
			GameCode: gameCodeUser
		})
		.done(function (response) {
			if (response.toString() == "לא נמצא משחק"){
				selfHome.txtError.text = "לא נמצא משחק";
			}
		
			else{
				myJSON = JSON.parse(response);
				isPublish = myJSON.topic['@isPublish'];
		
					if(isPublish == "false"){//המשחק לא פורסם
						selfHome.txtError.text = "משחק זה עדיין לא פורסם";
					}
					else{//המשחק פורסם וקיים. אפשר להתקדם
						selfHome.gotoAndStop(2);
					}
				}
		})
		.fail(function () {
		console.log("error");
		})
		}
		
		
		
		
		
			
		this.About.addEventListener("click", AboutFuntion.bind(this)); //כפתור אודות
		function AboutFuntion() {
		
			var AboutPopUp = new(lib.AboutPop);
			AboutPopUp.name = "AboutPopUp";
			RemoveArr.push("AboutPopUp");
			document.getElementById("gameCode_txt").style.opacity = "0.0";
			stage.addChild(AboutPopUp);
			//stage.addChild(Target);
		}	
			
		
		selfHome.Editor.addEventListener("click", EditorFuntion.bind(this)); //מעבר לעורך
		function EditorFuntion() {
			window.open("Login.aspx");
		}
		
		
		
		
		//stage.on("stagemousemove", function (evt) { //עכבר בתור מטרה
		//	var trg = stage.globalToLocal(stage.mouseX, stage.mouseY);
		//	Target.x = (trg.x);
		//	Target.y = (trg.y);
		//})
		//stage.addChild(Target);
	}
	this.frame_1 = function() {
		/*setTimeout(function () {
			this.gotoAndStop(5);
		}, 6000);*/
	}
	this.frame_4 = function() {
		this.stop();
		var selfHome = this;
		var rnd = 0;
		var GameNumber = 0;
		var GameFinish = 0;
		var RemoveArr = [];
		var RemoveZoom = [];
		var TimeOut;
		var GHour = 0;
		var GMin = 0;
		var GSec = 0;
		var TheCorrectAnswer;
		var ShuffleAnswer;
		var ProgressBarCounter = 0;
		var AnswerNum;
		
		var stageH = parseInt(canvas.style.height);
		var stageW = parseInt(canvas.style.width);
		
		//משתנים חדשים
		var gameCodeUser;
		var myJSON;
		var HadCode = 0;
		var GameQ = [];
		var NewGameA = [];
		var y = [];
		var NewGameB = [];
		var NewGameC = [];
		var NumOfAnswers;
		var numberOfQuestion;
		var timePerQuest;
		var GameName;
		var Target = new lib.targt();
		
		
		GetGameCode();
		
		function GetGameCode() { //פונקציה רצה בפעם הראשונה לקבל את קוד המשחק
		
			if (HadCode == 0) {
				gameCodeUser = enterCode.classes; //משתנה - קוד המשחק
		
				$.post("/Handler.ashx", { //שליחת בקשה
					GameCode: gameCodeUser
				})
					.done(function (response) {
						//console.log("response: " + response);	
						myJSON = JSON.parse(response);
						//console.log("myJSON: " + myJSON);
						createQ();
					})
					.fail(function () {
						console.log("error");
						HadCode = 1;
					})
			}
		}
		
		
		
		function createQ() {
			//alert("createQ");
			timePerQuest = myJSON.topic['@timePerQuest'];
			numberOfQuestion = myJSON.topic['@NumOfQuestions'];
			GameName = myJSON.topic['subject'];
			selfHome.GameName.text = myJSON.topic['subject'];
			
			//console.log(numberOfQuestion);//מספר השאלות
			for (var i = 0; i < 1; i++) {
				NewGameB = [];
				for (var d = 0; d < numberOfQuestion; d++) {
					NumOfAnswers = myJSON.topic.questions.question[d].answers['@NumOfAnswers'];
					NewGameC = [];
					for (var t = 0; t < NumOfAnswers; t++) {
		
						NewGameC[0] = false;
						NewGameC[1] = 1;
						NewGameC[2] = myJSON.topic.questions.question[d].questionText;
						NewGameC[3] = myJSON.topic.questions.question[d].img;
						NewGameC[t + 4] = myJSON.topic.questions.question[d].answers.answer[t];
					}
					NewGameB[d] = NewGameC;
				}
				NewGameA[i] = NewGameB;
		
			}
			GameQ = y.concat(NewGameA);
		
			//console.log(GameQ); //game array
			
			selfHome.QPicZoom.visible = false;
			startGame();
		}
		
		
		function startGame() {
			//GameNumber = 0;
			timePerQuest = myJSON.topic['@timePerQuest'];
			rnd = Math.floor((Math.random() * numberOfQuestion) + 0);
		
			if (GameQ[GameNumber][rnd][0] == true) { //שאלה שכבר נענתה
				//console.log("i was true")
				startGame();
			} else if (GameQ[GameNumber][rnd][0] == false) { // שאלה שעדיין לא נענתה נכון
				Timer();
		
				selfHome.Guide.visible = true;
				var Q_BeString = GameQ[GameNumber][rnd][3].toString();
				var Q_isString = Q_BeString.substring(Q_BeString.length - 4, Q_BeString.length);
		
				if (Q_isString == '.png' || Q_isString == '.jpg' || Q_isString == 'jpeg') { // התנהגות למסיח תמונה
					//console.log("Question Pic Here: " + Q_BeString );
					var img = new Image();
					img.src = "/" + Q_BeString;
					var Qpic = new createjs.Bitmap(img);
					Qpic.name = "QuestionPic";
					//Qpic.scaleX = 0.6;
					Qpic.scaleY = 0.75;
					Qpic.x = 300;
					Qpic.y = 137;
					RemoveArr.push("QuestionPic");
					stage.addChild(Qpic);
					selfHome.QPicZoom.visible = true;
		
				}
				selfHome.MainQustion.text = GameQ[GameNumber][rnd][2]; //שאלה ראשית
				ShuffleAnswer = GameQ[GameNumber][rnd].slice(); //ערבול התשובות
				ShuffleAnswer.splice(0, 4);
				ShuffleAnswer.sort(function (a, b) {
					return 0.5 - Math.random()
				});
		
				AnswerNum = (GameQ[GameNumber][rnd].length - 4)
				for (var i = 1; i <= AnswerNum; i++) { //מיקום המסיחים על הבמה
					var xLociton = [0, 745, 587, 427, 270];
		
					var Option = new(lib.Option);
					Option.x = xLociton[i];
					Option.y = 302;
					Option.name = "Option" + i;
					if (ShuffleAnswer[i - 1] == GameQ[GameNumber][rnd][4]) { //מבדל את התשובה הנכונה מהלא נכונות
						TheCorrectAnswer = "Option" + i;
					}
		
		
					var beString = ShuffleAnswer[i - 1];
					var isString = beString.substring(beString.length - 4, beString.length);
					if (isString == '.png' || isString == '.jpg' || isString == 'jpeg') { // התנהגות למסיח תמונה
						var img = new Image();
						img.src = "/" + ShuffleAnswer[i - 1];
						var Apic = new createjs.Bitmap(img);
						Apic.scaleX = 1.4;
						Apic.scaleY = 0.9;
						Apic.name = "AnswerPic" + i;
						Option.Apic2.addChild(Apic);
		
						var Zoom = new(lib.MyZoom); //התנהגות להגדלה של תמונה
						Zoom.x = xLociton[i];
						Zoom.y = 453;
						Zoom.name = "ZoomName" + i;
						RemoveZoom.push("ZoomName" + i);
		
						stage.addChild(Option);
						stage.addChild(Zoom);
						Zoom.addEventListener('click', ZoomFunc);
					} else { // התנהגות למסיח מסוג טקסט
						Option.anTxt.text = ShuffleAnswer[i - 1];
						stage.addChild(Option);
					}
					RemoveArr.push("Option" + i);
					Option.addEventListener('click', BallonClick);
				}
				//}
		
			} //סוף תנאי לשאלה שלא נענתה
			stage.addChild(Target);
		} //סוף פונקציה
		
		
		
		
		selfHome.QPicZoom.addEventListener("click", ZoomFunc.bind(this));
		
		
		
		function BallonClick(event) { //מזהה בחירת תשובה ומתנהג בהתאם לתשובה
			for (var i = 0; i < RemoveZoom.length; i++) {
				stage.removeChild(stage.getChildByName(RemoveZoom[i]));
			}
			for (i = 1; i <= AnswerNum; i++){
				stage.getChildByName("Option" + i).removeEventListener("click", BallonClick);
			}
			
			selfHome.QPicZoom.visible = false;
		
			clearInterval(TimeOut);
			if (event.currentTarget.name == TheCorrectAnswer) { //מקרה שנלחץ על הצלחה
		
				GameFinish++;
				GameQ[GameNumber][rnd][0] = true;
		
				var success = new(lib.suc); //הצלחה
				success.x = event.currentTarget.x + 75;
				success.y = event.currentTarget.y + 220.5;
				success.name = "success"
				RemoveArr.push("success");
		
				selfHome.Guide.visible = false;
				selfHome.BottomProgressBar.gotoAndPlay(2); //פרוגרס בר תחתון
		
		
				var beString = GameQ[GameNumber][rnd][4].toString();
				var isString = beString.substring(beString.length - 4, beString.length);
				if (isString == '.png' || isString == '.jpg' || isString == 'jpeg') { //התנהגות להצלחה עם תמונה
					var img = new Image();
					img.src = "/" + beString;
					var Apic = new createjs.Bitmap(img);
					Apic.scaleX = 1.4;
					Apic.scaleY = 0.9;
					Apic.name = "Apic";
					success.Apic2.addChild(Apic);
				} else { //התנהות להצלחה עם טקסט
					success.anTxt.text = GameQ[GameNumber][rnd][4];
				}
		
				stage.addChild(success);
		
				setTimeout(function () {
					var ProgressBar2 = parseInt((GameFinish / GameQ[GameNumber].length) * 100)
					selfHome.ProgressBar.gotoAndStop(ProgressBar2)
				}, 3000);
		
		
				setTimeout(function () {
					continueBtn.visible = true;
				}, 2200);
		
			} else { // מקרה של לחיצה על אי הצלחה
				var Unsuccess = new(lib.fail); //אי הצלחה
				Unsuccess.x = event.currentTarget.x + 73.5;
				Unsuccess.y = event.currentTarget.y + 220;
				Unsuccess.name = "Unsuccess"
				RemoveArr.push("Unsuccess");
				selfHome.Guide.visible = false;
		
				if (event.currentTarget.Apic2.children[1] != undefined) { //התנהגות להצלחה עם תמונה
					var PicNum = parseInt(event.currentTarget.name.slice(6));
					var img = new Image();
					img.src = "/" + ShuffleAnswer[PicNum - 1];
					var Apic = new createjs.Bitmap(img);
					Apic.scaleX = 1.4;
					Apic.scaleY = 0.9;
					Apic.name = "Apic";
					Unsuccess.Apic2.addChild(Apic);
		
				} else { // אי הצלחה עם טקסט במסיח
					Unsuccess.anTxt.text = event.currentTarget.anTxt.text;
				}
				stage.addChild(Unsuccess);
				GameQ[GameNumber][rnd][1] = GameQ[GameNumber][rnd][1] / 2;
				//console.log(GameQ[GameNumber][rnd][1])
		
				setTimeout(function () {
					continueBtn.visible = true;
				}, 2200);
			}
		
			stage.removeChild(stage.getChildByName(event.currentTarget.name));
		
			if (GameFinish == GameQ[GameNumber].length) {
				selfHome.ProgressBar.gotoAndStop(100);
				//alert("סיימת את המשחק");
				var TotalScore = 0;
				for (var i = 0; i < GameQ[GameNumber].length; i++) {
					var Score = GameQ[GameNumber][i][1] * (100 / (GameQ[GameNumber].length * 1));
					var TotalScore = TotalScore + Score;
				}
				setTimeout(function () {
					selfHome.finishAnimation.gotoAndPlay(2);
					var ScorePopUp = new(lib.ScorePop);
					ScorePopUp.name = "ScorePopUp"
					stage.addChild(ScorePopUp);
					ScorePopUp.ScoreTxt.text = Math.round(TotalScore);
					ScorePopUp.NameTxt.text = GameName;
					ScorePopUp.TimeTxt.text = selfHome.GameTimeTXT.text;
					ScorePopUp.playAgain.addEventListener("click", playAgainFunction.bind(this));
					stage.addChild(Target);
					for (var i = 0; i < GameQ[GameNumber].length; i++) {
						GameQ[GameNumber][i][0] = false;
						GameQ[GameNumber][i][1] = 1;
					}
					for (var i = 0; i < RemoveArr.length; i++) {
						stage.removeChild(stage.getChildByName(RemoveArr[i]));
					}
					//selfHome.ProgressBar.visible = false;
					//stage.removeChild(stage.getChildByName("continueBtn"));
					continueBtn.x = 1500;
					selfHome.MainQustion.text = "";
					selfHome.TimeOutTxt.text = "";
					selfHome.ClockSymbol.alpha = 0;
					selfHome.TimeOutTxt.alpha = 0;
		
					function playAgainFunction() {
						selfHome.GameName.text = ScorePopUp.NameTxt.text;
						stage.removeChild(stage.getChildByName("ScorePopUp"));
						continueBtn.x = 580;
						continueBtn.y = 281;
						continueBtn.visible = false;
						selfHome.finishAnimation.gotoAndStop(1);
						selfHome.ProgressBar.gotoAndStop(1);
						selfHome.ClockSymbol.alpha = 1;
						selfHome.TimeOutTxt.alpha = 1;
						GameFinish = 0;
						TotalScore = 0;
						GHour = 0;
						GMin = 0;
						GSec = 0;
						startGame();
					}
		
					ScorePopUp.finishGame.addEventListener("click", finishGameFunction.bind(this));
					function finishGameFunction() {
						location.reload();
					}
				}, 2100);
		
			} else {
				//console.log(GameFinish)
		
			}
			stage.addChild(Target);
		}
		
		
		
		
		function ZoomFunc(evt) { // כפתור הגדלה
			//console.log("evt.currentTarget.name: " + evt.currentTarget);
		
			if (evt.currentTarget.name == "QPicZoom") {
				var img = new Image();
				img.src = "/" + GameQ[GameNumber][rnd][3];
				var BigPic = new createjs.Bitmap(img);
			} else {
				var PicNum = parseInt(evt.currentTarget.name.slice(8));
				var img = new Image();
				img.src = "/" + ShuffleAnswer[PicNum - 1];
				var BigPic = new createjs.Bitmap(img);
			}
			BigPic.x = 220;
			BigPic.y = 220;
			BigPic.scaleX = 2.85;
			BigPic.scaleY = 2.4;
		
			var PicPopUp = new(lib.PicPop);
			PicPopUp.x = 170;
			PicPopUp.y = 25;
			PicPopUp.name = "PicPopUp1";
			RemoveArr.push("PicPopUp1");
			stage.addChild(PicPopUp);
			PicPopUp.addChild(BigPic);
			
			stage.addChild(Target);
		}
		
		
		var continueBtn = new(lib.contiBtn); //כפתור המשך
		continueBtn.x = 580;
		continueBtn.y = 281;
		continueBtn.name = "continueBtn";
		stage.addChild(continueBtn);
		continueBtn.addEventListener('click', continueFunc);
		continueBtn.visible = false;
		
		function continueFunc() { // פונקציה לכפתור המשך
			continueBtn.visible = false;
			for (var i = 0; i < RemoveArr.length; i++) {
				stage.removeChild(stage.getChildByName(RemoveArr[i]));
			}
			startGame();
		}
		
		
		
		function Timer() { // טיימר
			
			selfHome.TimeOutTxt.timeTxt.text = timePerQuest;
			TimeOut = setInterval(function () {
			if (timePerQuest == "999"){ // אם אין הגבלת זמן
				selfHome.TimeOutTxt.alpha = 0;
				selfHome.ClockSymbol.alpha = 0;
				}
			else{ //אם יש הגבלת זמן
			selfHome.TimeOutTxt.timeTxt.text = parseInt(selfHome.TimeOutTxt.timeTxt.text) - 1; // זמן אחורה לשאלה
			timePerQuest--;
				}
				
			GSec++; //זמן כולל למשחק
			if (GSec == 60) {
				GSec = 0;
				GMin++;
				if (GMin == 60) {
					GMin = 0;
					GHour++;
				}
			}
			selfHome.GameTimeTXT.text = checkTime(GMin) + ":" + checkTime(GSec);
			function checkTime(x) {
				if (x < 10) {
					x = "0" + x;
				}
				return x;
			} // סוף פונקציות זמן כולל למשחק
		
			if (selfHome.TimeOutTxt.timeTxt.text == 0) {
				GameQ[GameNumber][rnd][1] = GameQ[GameNumber][rnd][1] / 2;
				continueBtn.visible = true;
		
				var TimePopUp = new(lib.TimePop);
				TimePopUp.name = "TimePopUp"
				stage.addChild(TimePopUp);
				//TimePopUp.TimeTxt.text = "!משך הזמן לפיצוץ הבלון עבר\n...נסה לפוצץ את הבלון הבא";
				TimePopUp.continueBtn.addEventListener('click', continueFunc)
				
				stage.addChild(Target);
				
				for (var i = 0; i < RemoveZoom.length; i++) {
					stage.removeChild(stage.getChildByName(RemoveZoom[i]));
				}
				clearInterval(TimeOut);
			}
		}, 1000); //סוף אינטרבל
		}
		
		selfHome.About1.addEventListener("click", AboutFuntion1.bind(this)); //פתיחת פופ אפ אודות
		function AboutFuntion1() {
			var AboutPopUp = new(lib.AboutPop);
			AboutPopUp.name = "AboutPopUp"
			RemoveArr.push("AboutPopUp");
			stage.addChild(AboutPopUp);
			stage.addChild(Target);
		}
		
		selfHome.Editor1.addEventListener("click", EditorFuntion1.bind(this)); //פתיחת עמוד צד עורך
		function EditorFuntion1() {
			window.open("Login.aspx");
		}
		
		
		//stage.canvas.style.cursor = "none";
		stage.on("stagemousemove", function (evt) { //פונקציית עכבר
			var trg = stage.globalToLocal(stage.mouseX, stage.mouseY);
			Target.x = (trg.x);
			Target.y = (trg.y);
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(1));

	// Actions
	this.Editor = new lib.Editor();
	this.Editor.name = "Editor";
	this.Editor.parent = this;
	this.Editor.setTransform(3.7,3.3);
	new cjs.ButtonHelper(this.Editor, 0, 1, 1);

	this.instance = new lib.CopyofLogoAllYellow31();
	this.instance.parent = this;
	this.instance.setTransform(892,-1,0.459,0.337);

	this.HowTo1 = new lib.HowTo();
	this.HowTo1.name = "HowTo1";
	this.HowTo1.parent = this;
	this.HowTo1.setTransform(131.8,6.2);
	new cjs.ButtonHelper(this.HowTo1, 0, 1, 1);

	this.About = new lib.About();
	this.About.name = "About";
	this.About.parent = this;
	this.About.setTransform(63.5,2);
	new cjs.ButtonHelper(this.About, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.About,p:{x:63.5,y:2}},{t:this.HowTo1,p:{x:131.8,y:6.2}},{t:this.instance,p:{y:-1}},{t:this.Editor,p:{x:3.7,y:3.3}}]}).to({state:[{t:this.About,p:{x:102.5,y:-44.9}},{t:this.HowTo1,p:{x:219.8,y:-43.4}},{t:this.instance,p:{y:-46}},{t:this.Editor,p:{x:2.7,y:-43.4}}]},1).to({state:[]},3).wait(1));

	// Layer 2
	this.instance_1 = new lib.an_CSS({'id': 'instance_1', 'href':'assets/BlowtheballoonCss1.css'});

	this.instance_1.setTransform(1115.2,220.7,1,1,0,0,0,48.5,17.7);

	this.txtError = new cjs.Text("", "bold 22px 'Arial'", "#FF0000");
	this.txtError.name = "txtError";
	this.txtError.textAlign = "center";
	this.txtError.lineHeight = 27;
	this.txtError.lineWidth = 289;
	this.txtError.parent = this;
	this.txtError.setTransform(498,269.5);

	this.play_btn = new lib.play_btn();
	this.play_btn.name = "play_btn";
	this.play_btn.parent = this;
	this.play_btn.setTransform(498,248.5);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.text = new cjs.Text("משחקים לדוגמה:  101, 102", "bold 16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 258;
	this.text.parent = this;
	this.text.setTransform(496.9,193.4);

	this.gameCode_txt = new lib.an_TextInput({'id': 'gameCode_txt', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.gameCode_txt.setTransform(500.3,164.2,1.811,1.727,0,0,0,50,11.1);

	this.instance_2 = new lib.pic_startBlack1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,27,0.8,0.857);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBEAF9").s().p("EgrwACKQgMgCgOACI+uAAIAAkTMCVxAAAIAAETg");
	this.shape.setTransform(479.3,13.8);

	this.openingAnimation = new lib.openingAnimation();
	this.openingAnimation.name = "openingAnimation";
	this.openingAnimation.parent = this;
	this.openingAnimation.setTransform(518.8,323.7,1,1.056,0,0,0,0,0.1);

	this.instance_3 = new lib.an_CSS({'id': 'instance_3', 'href':'assets/BlowtheballoonCss.css'});

	this.instance_3.setTransform(1080.2,148.7,1,1,0,0,0,48.5,17.7);

	this.finishAnimation = new lib.finishAnimation();
	this.finishAnimation.name = "finishAnimation";
	this.finishAnimation.parent = this;
	this.finishAnimation.setTransform(125.9,272.7,1,1,0,0,0,-369.2,-58.8);

	this.Guide = new lib.Guide();
	this.Guide.name = "Guide";
	this.Guide.parent = this;
	this.Guide.setTransform(808.5,276.7);

	this.Editor1 = new lib.Editor();
	this.Editor1.name = "Editor1";
	this.Editor1.parent = this;
	this.Editor1.setTransform(2.7,3.8,1.031,1,0,0,0,-0.3,0);

	this.instance_4 = new lib.CopyofLogoAllYellow31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(892,0,0.459,0.337);

	this.HowTo1_1 = new lib.HowTo();
	this.HowTo1_1.name = "HowTo1_1";
	this.HowTo1_1.parent = this;
	this.HowTo1_1.setTransform(136.6,6.9);

	this.About1 = new lib.About();
	this.About1.name = "About1";
	this.About1.parent = this;
	this.About1.setTransform(67.8,2.7);

	this.GameName = new cjs.Text("", "bold 20px 'Arial'", "#000066");
	this.GameName.name = "GameName";
	this.GameName.textAlign = "right";
	this.GameName.lineHeight = 22;
	this.GameName.lineWidth = 241;
	this.GameName.parent = this;
	this.GameName.setTransform(774.9,1);

	this.QPicZoom = new lib.QZoomBtn();
	this.QPicZoom.name = "QPicZoom";
	this.QPicZoom.parent = this;
	this.QPicZoom.setTransform(171.8,138.6,0.903,0.903,0,0,0,0.1,0.1);

	this.BottomProgressBar = new lib.BottomProBar();
	this.BottomProgressBar.name = "BottomProgressBar";
	this.BottomProgressBar.parent = this;
	this.BottomProgressBar.setTransform(910.1,604,1.012,1,0,0,0,243.3,75.3);

	this.GameTimeTXT = new cjs.Text("0", "bold 30px 'Arial'");
	this.GameTimeTXT.name = "GameTimeTXT";
	this.GameTimeTXT.textAlign = "center";
	this.GameTimeTXT.lineHeight = 34;
	this.GameTimeTXT.lineWidth = 77;
	this.GameTimeTXT.parent = this;
	this.GameTimeTXT.setTransform(1132.4,-4.9);

	this.TimeOutTxt = new lib.time();
	this.TimeOutTxt.name = "TimeOutTxt";
	this.TimeOutTxt.parent = this;
	this.TimeOutTxt.setTransform(71.1,90.2,1.141,1.056,0,0,0,19.7,19.7);

	this.ClockSymbol = new lib.ClockSymbol();
	this.ClockSymbol.name = "ClockSymbol";
	this.ClockSymbol.parent = this;
	this.ClockSymbol.setTransform(71.3,78.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3534").s().p("AgqC8Qg4AAgpgrQgogrAAg8IACjlIFlAAIAADlQAAA8goArQgoArg5AAg");
	this.shape_1.setTransform(935.7,99.3,1.333,1.329);

	this.MainQustion = new cjs.Text("", "18px 'Arial'");
	this.MainQustion.name = "MainQustion";
	this.MainQustion.textAlign = "center";
	this.MainQustion.lineHeight = 22;
	this.MainQustion.lineWidth = 441;
	this.MainQustion.parent = this;
	this.MainQustion.setTransform(647.4,145.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBCBCB").s().p("AgmC8Qg6AAgqgqQgpgpAAg7IAAjpIFnAAIAADpQAAA7gpApQgqAqg6AAg");
	this.shape_2.setTransform(887.8,99.3,1.333,1.329);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3534").s().p("AglC8Qg7AAgqgqQgpgpAAg7IAAjpIFnAAIAADpQAAA7gqApQgpAqg7AAg");
	this.shape_3.setTransform(264.5,99.3,1.333,1.329);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBCBCB").s().p("AglC8Qg7AAgqgqQgpgpAAg7IAAjpIFnAAIAADpQAAA7gqApQgpAqg7AAg");
	this.shape_4.setTransform(216.6,99.3,1.333,1.329);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC3534").s().p("AglC8Qg7AAgqgqQgpgpAAg7IAAjpIFnAAIAADpQAAA7gpApQgqAqg6AAg");
	this.shape_5.setTransform(839.8,99.3,1.333,1.329);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBCBCB").s().p("AglC8Qg7AAgpgqQgqgpAAg7IAAjpIFnAAIAADpQAAA7gqApQgpAqg7AAg");
	this.shape_6.setTransform(791.9,99.3,1.333,1.329);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC3534").s().p("AglC8Qg7AAgpgqQgqgpAAg7IAAjpIFnAAIAADpQAAA7gqApQgoAqg8AAg");
	this.shape_7.setTransform(743.9,99.3,1.333,1.329);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CBCBCB").s().p("AgmC8Qg6AAgqgqQgpgpAAg7IAAjpIFnAAIAADpQAAA7gpApQgqAqg7AAg");
	this.shape_8.setTransform(696,99.3,1.333,1.329);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC3534").s().p("AglC8Qg7AAgqgqQgpgpAAg7IAAjpIFnAAIAADpQAAA7gqApQgpAqg6AAg");
	this.shape_9.setTransform(648.1,99.3,1.333,1.329);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBCBCB").s().p("AglC8Qg7AAgpgqQgqgpAAg7IAAjpIFnAAIAADpQAAA7gpApQgqAqg7AAg");
	this.shape_10.setTransform(600.1,99.3,1.333,1.329);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC3534").s().p("AgqC8Qg4AAgpgrQgogrAAg8IACjlIFlAAIAADlQAAA8goArQgoArg5AAg");
	this.shape_11.setTransform(552.2,99.3,1.333,1.329);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBCBCB").s().p("AiHCIQgmgtgDgyIgGjkIFtAAIAADkQAAA9goArQgpArg4AAIhVAAQg1gCgrgyg");
	this.shape_12.setTransform(504.2,99.4,1.333,1.329);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC3534").s().p("AgmC8Qg6AAgqgqQgpgpAAg7IAAjpIFnAAIAADpQAAA7gqApQgpAqg7AAg");
	this.shape_13.setTransform(456.3,99.3,1.333,1.329);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CBCBCB").s().p("AglC8Qg7AAgqgqQgpgpAAg7IAAjpIFnAAIAADpQAAA7gpApQgqAqg7AAg");
	this.shape_14.setTransform(408.4,99.3,1.333,1.329);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC3534").s().p("AgmC8Qg6AAgpgqQgqgpAAg7IAAjpIFnAAIAADpQAAA7gpApQgqAqg6AAg");
	this.shape_15.setTransform(360.4,99.3,1.333,1.329);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CBCBCB").s().p("AglC8Qg7AAgpgqQgqgpAAg7IAAjpIFnAAIAADpQAAA7gpApQgpAqg7AAg");
	this.shape_16.setTransform(312.4,99.3,1.333,1.329);

	this.ProgressBar = new lib.progressBarAnimation();
	this.ProgressBar.name = "ProgressBar";
	this.ProgressBar.parent = this;
	this.ProgressBar.setTransform(104.3,478);

	this.instance_5 = new lib.containerBack();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17,342,1.333,1.329);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ACD7BC").s().p("ABgBxIjci3QAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAJAAIgDgLIAKABIgDgLIAKAAIgDgKIAJAAIgCgKQAAgCAAABIDcC4QABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgJAAIADAKIgKAAIADAKIgKAAIADALIgKgBIADAKIAAACIgBgBg");
	this.shape_17.setTransform(879.6,145.9,1.333,1.329);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ACD7BC").s().p("ABgBxIjbi3QgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIAKABIgEgLIAKAAIgDgLIAKABIgDgLIAKABIgDgKIAAgBIABAAIDcC3QAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgJAAIADAKIgKAAIADAKIgKAAIADAKIgKAAIADAKQAAAAAAABQABAAAAAAQAAABAAAAQgBAAAAAAIgBgBg");
	this.shape_18.setTransform(278.5,227.2,1.333,1.329);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F6F6F6").s().p("EgwUAHDIAAuGMBgoAAAIAAOGg");
	this.shape_19.setTransform(578.1,185.1,1,1.074);

	this.instance_6 = new lib.frame();
	this.instance_6.parent = this;
	this.instance_6.setTransform(183,107,0.323,0.319);

	this.instance_7 = new lib.רקע();
	this.instance_7.parent = this;
	this.instance_7.setTransform(581.2,389.4,1.333,1.329,0,0,0,254.6,239.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#BBEAF9").ss(1,1,1).p("EhK4gCJMCVxAAAIAAERIAAACIlKAAIm/AAImcAAImxAAImmAAImtAAImvAAImlAAImrAAIm2AAInwAAIgBAAInbAAIoGAAIm0AAIm5AAIgCAAImTAAIm6AAIi+AAQgLgCgOACIh5AAIsKAAInvAAIgnAAIhNAAIg8AAImKAAIgCAAg");
	this.shape_20.setTransform(480.1,14.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3CA833").s().p("AgTApIgGgQIAlhEQAGAFABAJIAAARIAHA4QgEgHgMgCQgIAAgDABQgKAIgEAAQgEAAAAgDg");
	this.shape_21.setTransform(645,575.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#519730").s().p("AgNAdQAAgIgCgEIgGg4QANALAIABQAMACAKgOQABAPgMAYQgMAagBAOQgKgEgBgHg");
	this.shape_22.setTransform(649.2,578.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#60B627").s().p("AgWAXIAAgGIAlg4QAIAMAAAUIgCAeIgBABQgMAQgJAAQgLAAgKgRg");
	this.shape_23.setTransform(945.8,587.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#147538").s().p("AgDAzIAAgJQgBgUgGgPQgDgHgFgFQAGgIALgYQAJgVAKgLQACAZgFAsQgGAwABAWg");
	this.shape_24.setTransform(931.9,577.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#156119").s().p("AgKADIAIgfQADAGADAIQAHAOAAAUIAAAJg");
	this.shape_25.setTransform(930.4,579.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1F6A16").s().p("AgFAPQgDgGABgJIABgHQAAgJgBgEQAMAJADATIgIAOIgFgHg");
	this.shape_26.setTransform(848.2,579.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1F8539").s().p("AgMAxQgDgCgCgIIAAg3QAAgNADgGQAEgKAMgEIAKAUQABAFgBAIIgBAJQAAAHADAHIAFAGIgVAfQgEAGgEAAIgCgBg");
	this.shape_27.setTransform(846.2,580.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#17A733").s().p("AAABBQgEgIgDgCIgEhYQALgGADgLQACgHABgOIAAgBIAGABIAACQQgIgBgEgHg");
	this.shape_28.setTransform(484.9,572.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#20A757").s().p("AgNACIgDgKIAPgGQAJgCAJADIgHAPQgEAJgHAFg");
	this.shape_29.setTransform(596.5,585.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9BC412").s().p("AgJgKQgBgGAEAAIAHACIAHANIADAKIgKAIIgKgbg");
	this.shape_30.setTransform(594,584.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3EB948").s().p("AgHgDQANgIAGgFQABATgPAOQgOgMAJgIg");
	this.shape_31.setTransform(497.8,573);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#088C28").s().p("AgDgPQAHAKABAFQABAJgKAHg");
	this.shape_32.setTransform(491.8,579.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#20A245").s().p("AgYAoQgKgGACgGQACgEAKgIIAOgOQAKgGgBgJQgBgGgHgJQAOgPAGABQAEACAOAXQgDAMgMANIgTAYQgHALgIAAQgEAAgEgDg");
	this.shape_33.setTransform(492,580.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#44A824").s().p("AANAaIANgHIgIAZQgHgEACgOgAgaAGQAEgKAKgOQAMgQAFgJIAFAdQAFAQgDALQgHgDAAgJQgBgJgEgEQgLAbABAXQgQgMAAgUg");
	this.shape_34.setTransform(526.3,589.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#479D15").s().p("AgPAFQgDgCACgDQACgDAEgBQASgJAKASIgSADIgBAAQgIAAgGgDg");
	this.shape_35.setTransform(311.8,575.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2A9134").s().p("AAFBJQgFgPAAgXQgCgkgDgKIgFgbQgDgPgHgKQgDgNAMgBQARgDACgCQABAnABALQADAbAIAUQADAIgFAKQgDAHgHAKIAAADIAAAdQgDgDgBgGg");
	this.shape_36.setTransform(181.2,571.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#69C31E").s().p("AgIAEQgEgRADgLIACACQAEAFADAAIABgBIADgCIAGgIIACgDQgDAogLAXIgGgcg");
	this.shape_37.setTransform(840.9,579.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#246E18").s().p("AgNAAIAOgYIAFALIAGANQAEAOgIALg");
	this.shape_38.setTransform(848,572.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8DDB16").s().p("AgJAfIgCgCIgHg5QAUAKAQgQIABAOIgJAqIgCADIgGAIIgCACIgBAAQgDAAgFgEg");
	this.shape_39.setTransform(841.1,574.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#29903A").s().p("AgHAuQAHgLgDgPIgGgNIgFgKQAHgUAFgKQAGgRALgKQgBAUABAoQgBAkgIAZg");
	this.shape_40.setTransform(849.7,570.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#28B639").s().p("AghAJIABgCQAPgaAAgpIAQgUQAKAXAKAgIAPA3QgPAGgTAQQgZAXgIAGg");
	this.shape_41.setTransform(494.8,564.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#23B235").s().p("AgOAWIAAgUIAAAAIAFgWQADgMAHgJIAEAaQAEAPAGAKIgHATIgOANQgIgIAAgMg");
	this.shape_42.setTransform(487.6,559.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#609C50").s().p("AgHABIAHgIQAFgCADAKIgCAHIgMAAg");
	this.shape_43.setTransform(487.8,550.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8EB574").s().p("AgFgHIAMgBIgCARQgOgBAEgPg");
	this.shape_44.setTransform(487.7,551.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1F8438").s().p("AgSAAQAAgeAPgTIAWAlQgEADgCAEQgFAHAHAGIAEAEQgGAHgGARQgHAOgRABIgBgzg");
	this.shape_45.setTransform(5.2,580.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0E5412").s().p("AgCAJQgHgGAFgIQACgDADgEIAGASIgGAGIgDgDg");
	this.shape_46.setTransform(7,580.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#45A64E").s().p("AgCADIgLgPQASgEAFAGQAGAEgCAVQgJgDgHgJg");
	this.shape_47.setTransform(323.2,576.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#87D22C").s().p("AgHARQgNgIAAgJQAAgLANgKIAKAQQAIAIAKADQgHAQgKAAQgEAAgHgFg");
	this.shape_48.setTransform(322.6,577.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#34A13C").s().p("AgKgLQAJgEAEAIQAFAJADAAIgHAMQgMgIgCgRg");
	this.shape_49.setTransform(317.6,573.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5EA934").s().p("AgHAXIgCgEIgEgFIgBgLIAAgBIABgYIAOADQAIABAGgDQAAACgGANQgGAIAFAHIgOAOg");
	this.shape_50.setTransform(695.7,565.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#369236").s().p("AgWARQAJgLAMgbQALgaAMgNIABBSIgdAnQgQgbAAgRg");
	this.shape_51.setTransform(927,569.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6AA22D").s().p("AAHA1IgCgLQgEgQgJgVQgSgkgDgKQAEgFAVABQAMAAAFgHIABgIIAPANQADASgGAeQgFAhABAOIgIANg");
	this.shape_52.setTransform(833.2,574.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1EA041").s().p("AgaA1QgEgaACgPQAMgWADgpIAJgrQARAAAGAOQAIAWACABQgMAEgFAKQgDAGAAANIAAA3IgIAAQgBgBAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQALASgIARQgBAGgUAXQAAgKgGggg");
	this.shape_53.setTransform(843.5,581.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#328E35").s().p("AACAuQgPgOgJgNIABgcQABgSgJgLIAAgdIAAgCIAXAsQADALARAjQAKAWAEAQIACALQgUgPgIgJg");
	this.shape_54.setTransform(830.9,572.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7CAD2C").s().p("AgdAGIAAACIgBgCIgGgeIAWgZIAbAoQAQAXAIARIgBAIQgFAIgNgBQgUgBgEAFg");
	this.shape_55.setTransform(830.9,565);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#337E14").s().p("AgGABIAAgQIABABIALALQADAMgIAHQgHgFAAgKg");
	this.shape_56.setTransform(821.1,553.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#329E4D").s().p("AgRAAIAEgCQACgDABgDIABgFIAbgSIgOAmIgVAYg");
	this.shape_57.setTransform(828.9,559.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#63B832").s().p("AgHgJIAPAGIgBADQgBAEgCADIgEADQgHgFAAgOg");
	this.shape_58.setTransform(827.2,558.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#349638").s().p("AACAwQgug7A3g9IAHBIQAEArgDAeg");
	this.shape_59.setTransform(348.4,563.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9CE610").s().p("AgKAKQgEgMgJgGQgHgEABgPIAlgHIAHABIAPArQgCAHgPADQgNAEgBALIgJgZg");
	this.shape_60.setTransform(186.6,569.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#319D4B").s().p("AgWAAIABAAQAJgCAJgMQAJgNAIgEIAJAlIgCAAQgCACgSADQgLABACANIgGAHg");
	this.shape_61.setTransform(179.9,562.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#95C094").s().p("AgKgjIAGgCIAAAiQACAFADABQADABAHgCIgHAUQgEAKgJAGg");
	this.shape_62.setTransform(206.6,554.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#016501").s().p("AgFAAQAEgcAAgOIACgBIADABIACBKIgEAMQgHgSAAgag");
	this.shape_63.setTransform(205,554.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E7F5E5").s().p("AgVA/IgChCQgBgnAKgbIAJgBQANgBAMAKIAEBXIgCAfIgHANIgNABQgOAAgJgIg");
	this.shape_64.setTransform(481.7,575.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7BAF34").s().p("AgQAbIgJABIgBgTQAmAGgCgdIAAAAIABgVQAEAEAEAGIACAFIAGARIAAABQgCANgCAHQgDALgLAHQgLgKgOABg");
	this.shape_65.setTransform(482.9,565.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2C9D48").s().p("AAQAuIgGgRIgDgFQgDgGgEgEIgdg8IAVALQAGATAXALIAAABIABATQAAAMAIAHIgCAHIgHAGg");
	this.shape_66.setTransform(484,560.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5C8A09").s().p("AgSAqQgEgWgKgKQgGgRAIgYQAKgbACgOIACADIAMAQIAXAgIACAIQgEAPAPABIADANIgIANQgIAJgDAMIgFAWQgXgLgGgTg");
	this.shape_67.setTransform(485,552.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#20AD6B").s().p("AgWAMIAAgCIABgEQAFgDAEgDIAEgFIAIgNIAAgBIAXgLIgdA9g");
	this.shape_68.setTransform(34.9,579);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#27AC3A").s().p("AABguIACgHIAIBSIAAABIgJAMIgDAGQgEAEgFACQgDgsAOg4g");
	this.shape_69.setTransform(33.8,574.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#329638").s().p("AADA2QABgJgEgLIgLgSQgLgUAIgXQAJgYAWgPIABCFg");
	this.shape_70.setTransform(33.8,563.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D4E8CF").s().p("AgEAbQgBgDgCgIIAHgyQAIAHAAAMQgBAPABAFIgCAeQgHgDgDgFg");
	this.shape_71.setTransform(26,550.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3BA14C").s().p("AgJACQgEgJAKgIIAOASIgIANIgMgOg");
	this.shape_72.setTransform(21.1,567.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#70A010").s().p("AgHAAIAPgTIAAAnQgNgGgCgOg");
	this.shape_73.setTransform(19.1,542);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2D8F38").s().p("AgaA2IADgLQAEgSABgeQACgpAHgUQAJAIAIAVQAEAKAEAHQAFAHAGAEIgIATIgkA5g");
	this.shape_74.setTransform(40.4,569.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#28964C").s().p("AgNAdQgKgWACgRIAkg5IAHAHIABAGIAAAAQgGATgDAoQgCApgJAWIgQgng");
	this.shape_75.setTransform(40.8,576.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#278239").s().p("AgKgoQAJAHAFAOIAIAWQAAALgHALQgEAFgMAMg");
	this.shape_76.setTransform(931.1,567.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1E7522").s().p("AgDgjIABgLIAHAFIgBBSIgGAGg");
	this.shape_77.setTransform(929.6,567.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7BAB2B").s().p("AAQAQQgDgDgPgCQgNgCAAgKQAAgQARACIAKAPQAFAJgBAHg");
	this.shape_78.setTransform(413.2,567.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5FA13A").s().p("AgLBDQADgdgEgrIgGhIIAAgOIAHAAIAOAOQgFAMALAQQAMATgCAJQABAigPBPQgQgDAAgWg");
	this.shape_79.setTransform(351.4,563.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3CB034").s().p("AgFAZQgFgKAAgPIABgSIAAgNQAQAXADAIQAGAQgRAQIgEgHg");
	this.shape_80.setTransform(153,587.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#226F17").s().p("AgJAAQgBgSAHgMIABgBIAHASIAGAdIgUAQIAAggg");
	this.shape_81.setTransform(157.5,568.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#31AE51").s().p("AgPAQQgFgHAAgJQAAgWAUAAQAVAAAAAXQAAAKgFAGQgGAGgJAAQgLAAgFgHg");
	this.shape_82.setTransform(253.8,577);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#88D13D").s().p("AgEAcQgEgXAAgFQgCgRAFgMIAGALQgBANAKAeIgHAFg");
	this.shape_83.setTransform(259.8,577.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#36A543").s().p("AgSgGIABAAIASAAQAMAAAGAGQgQAHgFAAQgKAAgGgNg");
	this.shape_84.setTransform(265.8,578.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8BB728").s().p("AgXA1IAQg9QAEgIAEgSQAFgSAHgIIAJAQQAEAIgEAIIgBAMQgMAMgLAaQgMAcgIALg");
	this.shape_85.setTransform(927.1,565.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#29974E").s().p("AgOAvQgJgLgOACIgGgBQgEgIAGgEIANgGIAcglIAHgGQANgLAEgGQAHgKAAgMIAOAUIAAANQgKALgKATQgLAYgGAIIgIAgQgCgBgMgQg");
	this.shape_86.setTransform(929.2,573.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1FA63F").s().p("AglBJQgBgVAGgwQAFgtgCgYIAAgNIAIAAIAAAMQAAAHADgBQAGgCAOACQAMABACgNIAAABQAIAHAAAOIgCAXIACASQADAJALAEIhCBLg");
	this.shape_87.setTransform(936.7,577.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#167F24").s().p("AgLAAQAAgVAHgNIAQAxIgFAIQgCAFAFAEIgTADIgCgjg");
	this.shape_88.setTransform(578.9,567.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#38A538").s().p("AAKAOQgMgPgCgQQgDgEgMgEQgMgDgCgIIBCgCIABBNIgYgZg");
	this.shape_89.setTransform(519.6,585.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#44B76E").s().p("AgPAEQANgBACgBIAEgCQAEgDAAgFIAGgBIACANQgIAGgIAAQgHAAgIgGg");
	this.shape_90.setTransform(519.2,578.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1FA93E").s().p("AABgmQAGADADAEQADADACAEIACASQABAFgCALQABAKAHAFQAAAGgEADIgEACQgCACgOABQgxgoAyglg");
	this.shape_91.setTransform(517.6,575.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#32AD49").s().p("AgdASQABgGAOgNQAIgIABgJIAAgHQAVALAOgSIgHAoQgRgEgMALIgVASg");
	this.shape_92.setTransform(523.6,575.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#42B333").s().p("AgLATQACgLgBgFIgCgRQgCgFgDgDQgDgEgGgCQATgKANAHQAKAFAKAQIABAIQgCAHgHAIQgOAOgBAHIgGABQgHgGgBgKg");
	this.shape_93.setTransform(520.4,574.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4CBC2B").s().p("AAJBEQgHgVgEgLQgIgUgOgLIgDgCQgFgbgBgKQAAgXANgQIAKABIAAAEQABAKAMAGQAHASALAMIAMAIQACAIgHAdQgHAYANAOIgXANIgCgGg");
	this.shape_94.setTransform(512.2,562.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#61A239").s().p("AgCAlQgMgMgGgSIAjgyIAAAAQACACAFgCIgFAZIgFAeQgGAUACANIgKgIg");
	this.shape_95.setTransform(514.6,556.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4B9C3D").s().p("AATApQgKgKgBgSQgDgbgEgKIgBgBIAAABIgkA/IgBgHIALgoQAJgXARgMIACACQAOALAIAUQAFAKAIAVIABAFIgQASIgDgDg");
	this.shape_96.setTransform(509.4,566.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#85C18C").s().p("AgFAAQgDgIAGgHIAJAPQADAIgKAIIgFgQg");
	this.shape_97.setTransform(519.4,545.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#359821").s().p("AgMgSQAGgBAGAEIAHAHIAGAOQAAAJgMAEg");
	this.shape_98.setTransform(513.3,532.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#289C4C").s().p("AgHAPIAAAAIAAg4QANAKABASIAAAcIAAABIABASIgIAIg");
	this.shape_99.setTransform(111.5,572.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1F7A0F").s().p("AgOAcIAPg7IABgCIAAgBIALABIACAjIgVAhg");
	this.shape_100.setTransform(61.2,549.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#8FDB13").s().p("AAFAoQgLgCgLgVQAAgNgKgNIgGgeQAQAXAHACQAHABAOgOQAJAIAFAQQAFAUAEAGQgQARgLAAIgCAAg");
	this.shape_101.setTransform(161.4,570.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6BA42E").s().p("AgZAmQAJgQgBgYQgDghABgIIALAUIAAAAQAIAKARgKIAJAMIgPAYQgGADgHAOQgHAMgKACg");
	this.shape_102.setTransform(168.3,571.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7EAE2B").s().p("AALAkQgSAKgHgKIAAAAIgLgUIgDgNQgBgGADgFIAHACQALAEAIgCQAJgCADgQQASAaACAHQAGAUgTARgAgggbQABgNgBgHQAIAHAAAMIgBAUQgHgIAAgLg");
	this.shape_103.setTransform(168.9,565.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0F7F28").s().p("AgUgOIgBgCIAIgMQAMAEAGASQAHARAKAEQABAJgIAFQgPgMgUgfg");
	this.shape_104.setTransform(173,560.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#309E50").s().p("AgBA3QASgQgGgUQgCgIgRgaQgYgxgDgJQgCgIAGACIAEABIAGABIAEgBQAAAUAQAGIABABQATAhARALQACAngKAkIAAAGQgKgFgNAGQgPAGgFAAg");
	this.shape_105.setTransform(171,564.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A8C727").s().p("AAMAtIgGgCIgFgCQgFgBgEAEIgJgsQgGgaAHgSIAlBXQgCACgDAAIgEAAg");
	this.shape_106.setTransform(165.7,550.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#87B92E").s().p("AgEAxIgHgCIABAAIABgUQAAgMgIgHIgGgbQgEgRACgMQAEgEAGABIAGACIAGACQAEABADgDIAKAUIgGgBIgEgBQgFgBABAIQADAIAYAxQgDAQgKACIgFABQgGAAgHgDg");
	this.shape_107.setTransform(167.4,559.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#90BD85").s().p("AgFgDIAAgBIACgGQACgDAFADQAAAEACAIQABAHgIAEg");
	this.shape_108.setTransform(171.2,551.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1FAC6B").s().p("AgeAbIABgBIAsg1IAPgTQABAFgCAFQgDASgLAUIgbAtg");
	this.shape_109.setTransform(625.9,580.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#50AA2F").s().p("AgRAEQgJgYgHgIIAGAAQAKgHAUADQAVADAKgFQgPAtgQAYQgNgJgHgWg");
	this.shape_110.setTransform(632.3,595.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2C9C50").s().p("AgaBSQAWgeAJgQQANgUgPgQIgBAAIgHgYQgFgNgJgIQgOgZgFgOQgCgHAEAAIAJACIABAAQAOAjAfgcIAJAWQAEAOAIAIQgKA0ACAqQgHAGgBAKIAAAQQgMAEgLAAQgQAAgLgKg");
	this.shape_111.setTransform(592.6,565.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2C9C4D").s().p("AgHAAIABgoQAOANAAAWIAAAiIgIAMQgIgPABgag");
	this.shape_112.setTransform(640.1,572.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#92DE15").s().p("AgdgSQAEgIAKgJQALgKAEgFQALAJAGATQAHAWAFAGIABAGIAAAUIgQgSIgCgDIABAEQADAOgKAIQgGAGgOAIQgLgXgEgug");
	this.shape_113.setTransform(609.4,572.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#179543").s().p("AgeAzIABgdIAIgYIAlhNQAFAKABAZQAAAYAJAMQgDAGgbAkQgRAagFAUQgHgMgCgRg");
	this.shape_114.setTransform(531.2,591.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4AB33A").s().p("AgbAiIAohIQAcAdgZAhQgHALgLADIgHABQgJAAgJgFg");
	this.shape_115.setTransform(537.6,575.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#43A857").s().p("AAKgbIAAAlIgOASQgPgkAdgTg");
	this.shape_116.setTransform(533.2,574.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6ABF26").s().p("AgXAtQADgMgEgRIgFgcIAdgsIAeATIgBAMIglBMIgOAGg");
	this.shape_117.setTransform(529.8,585.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1CA03F").s().p("AghBYIAAhNQAXgPAFgEQALgLgEgSQAJgHgBgSQAAgTAIgGQgEAZACARQAEAWAOASIgeArQgEAJgNAQQgKAOgEALg");
	this.shape_118.setTransform(526.4,580.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#25B438").s().p("AgQAgQAHgegCgHQgCgNAFgUIAGgfQAGANAEAcQACAcAIANIABAzQgIAFgVABQgNgOAHgYg");
	this.shape_119.setTransform(516.6,561.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6E990E").s().p("AgMBCIAAAAIABgNQgGg7gBgeIgBgQQAAgIAHgGIAcA4QgFAHADAJIAGAQIgZAsIgEABIgDgBg");
	this.shape_120.setTransform(517.4,545);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#80D21C").s().p("AgeAUIAPgTQAOgLAFgHQALgLAAgMQALABAEAJIgnBHQgQgDgFgSg");
	this.shape_121.setTransform(535.8,575);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4EB931").s().p("AgOgPQAJgJAUAFQAAAMgKAJQgGAIgNAMg");
	this.shape_122.setTransform(535.8,572.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#308639").s().p("AgUgFQgCgOAMgPIAHgNQADgGAKAFQAIADADAIQADAIgFAIIgnBJg");
	this.shape_123.setTransform(753.4,572.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#286A13").s().p("AgMAAIAEgMQAEgHAFgEQASAagIAVQgQgHgHgRg");
	this.shape_124.setTransform(741.1,572.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A5CCA7").s().p("AgEgCIAEgLQAMAOgMANg");
	this.shape_125.setTransform(799.6,551.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#308638").s().p("AAHAsQgDgHgWgkQgQgZgCgTQAcAKAXgRIAAAvQAAAUAWACQgCAEgLALQgJAJAAAIg");
	this.shape_126.setTransform(771.5,570);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6BA42D").s().p("AgLApQgIgBgOgLIAAgRQgBgJgGgEIAAgIIAGgMQAIAAAGgFIAJgIIAHACQAQAEAHgBQAFgBAGgDQAFgDAGgFQgBARgKAUIgTAhQgJANgKAAIgDgBg");
	this.shape_127.setTransform(650.3,571.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6FA82E").s().p("AgbALQgRgiAEgYIAPgTQASASARAcIAfAwIgHAGQgKAEgKALIgQASQgDgMgWgsg");
	this.shape_128.setTransform(724.6,566.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#2F9C4E").s().p("AgUAPQgEgKAJgGIAPgPQAJgJAOgEIgXApIgPATIgFgQg");
	this.shape_129.setTransform(722.1,558.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#21933B").s().p("AgCAXQgGgIABgMIABgZQALASACAFQADALgGALg");
	this.shape_130.setTransform(436.6,597.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#218A3F").s().p("AgFAaIgGgOIgFgMIAJgaIAYA0g");
	this.shape_131.setTransform(642.6,597.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0B723A").s().p("AgHANIgBgBQgBgMAIgNIAFANIAFANg");
	this.shape_132.setTransform(641,598.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#24A65C").s().p("AgNAKQABgJAIgHIASgPQABANgHALIgMASg");
	this.shape_133.setTransform(645.2,586.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#42B431").s().p("AgOgGIAAgBQAAgOANgWQAQAUAAAXQgGAFgEAPQgEARgEAHg");
	this.shape_134.setTransform(5.6,596.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#509B15").s().p("AgOAQQAGgFAGgHIAQgTQAEAOgMARIAAAAg");
	this.shape_135.setTransform(315.9,598.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1AA36A").s().p("AAFAfQgHgJgJgDIgKgSQgIgKADgJQAAgTAOgHQAfAwAEAJQALAUgQAMIgNgOg");
	this.shape_136.setTransform(702.9,595.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#72C421").s().p("AgYAZIgJg5QAYgQARAMQAPAIACgPQADABADAEQACACABAEQgEAQgRAWQgSAagGAMg");
	this.shape_137.setTransform(693.1,584.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#84D21A").s().p("AgfATIAagfQADgCAKgLQAHgJAJgDIAHAHIAAAAIg0BEg");
	this.shape_138.setTransform(684.3,574.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#509C30").s().p("AgcAPIA0hEIAAAAIAFATQgLADgBAIIAAAPIgBAfQgBANgEAKIgDAIg");
	this.shape_139.setTransform(685.1,576.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#277212").s().p("AgRACIASgWQAJADAEAHIAEANIAAAGIgGAGIgBAAIgOAGg");
	this.shape_140.setTransform(717.9,552.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#298724").s().p("AAAAQIgHgBIAAgYIABAAIAGgGQAHAGABAJIgBAQg");
	this.shape_141.setTransform(719.8,555.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#80D01B").s().p("AgWgZQAIgCAGAFIABABQAHAFAAAAQANATAKAFQAAANgPAGg");
	this.shape_142.setTransform(698.6,573.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#2C9443").s().p("AgJA/QgCgDgDgBQgHgHAAgNIgBgTIAAhLIABAAIAPgOQAEAIAKARQAIAPgBAMQgCAAgHgEIgBgCQgFgEgHACIAeA0QgGATgXAYQgBgEgCgDg");
	this.shape_143.setTransform(697.2,573.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#64BA28").s().p("AgfAFQgJgQAQgUIADAGIABABQACABAGgDQAVgKAUAIIAGADIgQAdQgJATgLAJQgYgRgGgKg");
	this.shape_144.setTransform(390.2,588.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#38963C").s().p("AgHAUQACgLgCgGQgBgaAQgLIAAAjQAAAVgIANQgHgFAAgKg");
	this.shape_145.setTransform(402.8,575.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#61B728").s().p("AghAWIAzhFQAWATACAaIgXAsQgJAFgUgDQgVgEgKAIg");
	this.shape_146.setTransform(633.8,587.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#1DA13F").s().p("AgaAgQAGgggBgJQgCgVABgLQADgSALgNIAVAlQAOAVABARIgzBGQgHgPAEgag");
	this.shape_147.setTransform(632.7,582.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#7FD01C").s().p("AgpAgIAYggIAIgLIAGgHQAKgEANgPQALgQALgEIAAAJIgmBEIgWAmQgVgJgCgRg");
	this.shape_148.setTransform(642,576.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#21AA3D").s().p("AgFAvIgYgcQgZgeAPgvQgBgHAEgEIAAAjQABAPACADQAEAGAQgMIAGgEQAcgCAFgFQAEgFAAgcIAAgDQAHAEABAIIAAANIAAAqQgCAZAKAPIgYAgQgPgIgMgPg");
	this.shape_149.setTransform(635.6,572.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#189252").s().p("AgNAGIARgrQAgAdggAaIgWAUQgDgPAIgRg");
	this.shape_150.setTransform(15.1,602.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#4ABD30").s().p("AgLAEQABgMAWgWIgHA9QgSgPACgMg");
	this.shape_151.setTransform(8.1,587.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#1F9935").s().p("AgKAAIAAgZIABACIAUAdQAAAKgIAGIgFADQgHgKgBgPg");
	this.shape_152.setTransform(12,589.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#69BE25").s().p("AgRAVIgBgCQgGgVgIgJQAAgJAFgMIAJgSIAJAFQAKAHAKAPQAPAYAHAGQgDASgbAag");
	this.shape_153.setTransform(12.8,585.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#1B9E40").s().p("AgpAlIACgKQAFgXAQgbQAVglAKgTQAQANAEAZQACAWAEALIACAHIg4BRQgVgZgFgSg");
	this.shape_154.setTransform(25.4,584.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#549E14").s().p("AAtAcQgGgIgEADIgIAHIgDgGQgEgLgCgVQgDgagPgNQgLAUgWAkQgPAbgFAYIgCAJQgWgWgJgWQANgHAKgNIAQgYQAOgGAOgTQAPgUAJgGQAGAPARATIAbAcIACACIAQASIAOANIgHAMIAAAAIgVAiQAAgWgOgVg");
	this.shape_155.setTransform(26.9,580.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2FA137").s().p("AAKBKIgCgDIgEgIIgEgEQgQg7gGhJQAJAGAFAIQAEAJgBAHQgDAWAFAMQAFAQAVAIIAAANIAAAug");
	this.shape_156.setTransform(261.7,592.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#4DAA33").s().p("AgJAeQgKgDgCgTIAAglQADAHABAGQADAGAJACQAHACAUACIgOARIgGAMQgCAFgGAAIgDAAg");
	this.shape_157.setTransform(272.2,593.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#1C9B46").s().p("AAiA5QgBgEgUgfQgNgUAJgSQgMgBgHgCQgKgEgEgJQgEgHgIgJIgMgPIAHgGQANAPAWABQANABAagDIAIAfIAAADQgBAeAJAXIAAAmg");
	this.shape_158.setTransform(265,587.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#329E37").s().p("AgMBKIgMgSIAMgSQAIgMgCgNIgSAPQgIAIgCAJIgVgbQgNgSgDgMIAXgmIAGAQQACAJAQgOQAEgBAIAAQAMACADAHQACAEAAAIQABAHAKAFQABgOANgbQAMgZgBgPQAOAGAJANQgIAJAIANQAKAPgDAHIAAABIgHArIgmATIgMgOIgLBBQgIgFgHgKg");
	this.shape_159.setTransform(647.3,583.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4D9312").s().p("AAAABIAAgBIABABg");
	this.shape_160.setTransform(529,600);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#1BA469").s().p("AgoBOIgMAAIgBgBIgBgGQAFgVASgZQAbglADgGIA0g7IAEACIgbBAQgZAYgEAmQgKAHgFAUg");
	this.shape_161.setTransform(534.4,592.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#4E952E").s().p("AgIAiQgLgMAAgMIACgDIAPgeQAJgTALgLQAGA7gLApIgCAHQgNgMgGgIg");
	this.shape_162.setTransform(156.2,577.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#1FA13E").s().p("AgCA4IgXghIACgHQAKgogFg8QAHgEACAFQAEAGACAAIAAAQQABAJAFAGIAAAEQABAQAFATIAKAlIAAABIAHA4QgPgMgNgTg");
	this.shape_163.setTransform(159.9,580.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#83D219").s().p("AgeAkIgGgMIAYgYQAMgNAHgMIAUgQQAKAOAAANIgBABQgCAAgDgHQgDgFgHAEQgLAMgKASIgOAeIgCADQgJAAgFgGg");
	this.shape_164.setTransform(155.9,574.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#1FAC6E").s().p("AgSAsQgFgNADgWQABgHgFgIQgEgIgJgGIgHgGIgBAAQADgSgJgLIANgMIAIACIANAQQAHAJAEAGQAEAKAKAEQAGACANAAQgKASAOAVQAUAeABAFIgsAMQgUgIgGgQg");
	this.shape_165.setTransform(263.2,587.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#85D41A").s().p("AgFAcIgEgBIgDgCQgNgIgEgQIgBgDQgGgGgBgJIAAgQIABgBQALAWAMABQAMABAQgSQAGAEADAPIAFAHIAJAlQgeAAgNgHg");
	this.shape_166.setTransform(163.3,576.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#268F46").s().p("AgRA7QgBgPgFgdQgEgeACgUIAAgdIADgBQAIAIAMAZQAJATAOAIIAFACQgCAMgKAQQgOAYgCAEIgCADIgNAKIAAgHg");
	this.shape_167.setTransform(184.6,583.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#89D719").s().p("AgEApQgKgUgHgIQgGgMgEgSIgGggQAIAGAFANIAJAZQABgLANgEQAPgEACgGIAOAZIAIAdIAAACIgOgLQgFAIAEAIIAIAOQgLAFgIAAQgLAAgFgJg");
	this.shape_168.setTransform(188,573.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#5B9C33").s().p("AAVBgQgPgIgIgTQgMgYgJgJIgCgCQAHgKADgGQAFgKgDgIQgIgVgDgbQgBgKgBgnIACgBIAOAnQgBAOAHAFIAFAgQAEASAGAMIAQBGIgBAHIgFgDg");
	this.shape_169.setTransform(184.7,572.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#29964C").s().p("AgNAkQgCgbgNgRIgJgmQAKgCAHgMQAIgOAGgDQAFAAAPgGQAOgFAKAEQgKBMACA1IAAAFQgGAWgXAPQgEglgKgOg");
	this.shape_170.setTransform(170,580.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#1A983C").s().p("AgKAGQAKgZANgMQgCAmgMAZQgPgKAGgQg");
	this.shape_171.setTransform(571.2,589.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#279511").s().p("AALA9QgFgEgGgDIgVgHIAAgdQABgRAHgKQgBgXAMgcQACADACALQAAAIAGAEIABAMQgBAOAHAFIgBAcQACARAHAMIABAGIgCABgAgXA9IACgBIAAABg");
	this.shape_172.setTransform(526.6,593.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#1A9E64").s().p("AgEAFQgHgPgSgfIAAgMQAKADAHARQAHAQAMACIAXAsIgPATIgJAHQAAgXgKgbg");
	this.shape_173.setTransform(159.7,599.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#39A732").s().p("AgCAQQgFgQgHgHIAQgiQAJACACAHIACALIAAANQgBAFAAAUQAAARgIAIQgEgGgEgUg");
	this.shape_174.setTransform(155.2,596.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#1C6A21").s().p("AgKADQgBgTAKgMQAFALADARIAEAdQgSgKgDgQg");
	this.shape_175.setTransform(89.3,579.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4ABB2C").s().p("AgJBTIAAgBQgIgXAAghIAAgnIgBgRIAVg0QAOADABAHQABAGgEALIgEA3QgBAhAJAYIgVAag");
	this.shape_176.setTransform(100.6,584);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#44B32B").s().p("AgDAtQgOg6AAgrQAaAiAKApQgGAHgBALIgCAUg");
	this.shape_177.setTransform(46.6,595.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#169243").s().p("AggBNIAIgXIACgFIAahKIACgCQAEgHAHgRQAEgJAFgHIAHgIIAAgBIAAAAQAAA8gOBDIgBgKQABgHgFgDIgBAEQgJANgOAXIgFAGg");
	this.shape_178.setTransform(255.3,592.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#26A345").s().p("AgWANIABgSIgBAAIABgOQABgIAGgEIASADQALAAAIgCIgDAKQgEAIgJAKQgKAPgDAKIAAACIgIAGQgIgGAAgMg");
	this.shape_179.setTransform(252.6,584.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#6BBF26").s().p("AgTAiQgNgFgBgNIABgBQACgLAMgOQAIgLAFgIIADgJQAFgDAJABIAPADQAJALgDASIAAABIgHAHQgFAHgEAJQgHARgEAHIgCACQgPgFgIgDg");
	this.shape_180.setTransform(255.3,585.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#4CBD2A").s().p("AgVg5IArA/IAAAZQgHAEAAAJIgWAOg");
	this.shape_181.setTransform(206.1,572);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#38B659").s().p("AgCAPIgHgPQgEgHAEgIIANALIAIAAIAAAMIgIAIg");
	this.shape_182.setTransform(191.4,576.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#2D8E37").s().p("AgRBCIgBgCIgIgeQgBgVAQgdIAYgxQAJALgCAbQgCAZAJALQAAACgKAKQgHAGAKAIIgCALIgBAAQgHACgHAIQgGAJgHABg");
	this.shape_183.setTransform(193.6,569.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#31B151").s().p("AgGgIIANAGQABAGgGAEQgCABgGAAg");
	this.shape_184.setTransform(505.7,576.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#4D9D20").s().p("AgdAXIAAgFQAGAAADgBQAGgEAAgHIABgBQAMAAAJgNQAKgQAKgBIACAsQgCgBgEgFQgEgFgFADIgUAPg");
	this.shape_185.setTransform(508,575.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#A1E212").s().p("AgZBGIgIg+IAkg/IAYgbIAGADIgCAKQgNAQABAWQAAALAGAbQgSAMgHAXIgMApg");
	this.shape_186.setTransform(506.9,561.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#5CB41E").s().p("AgDAhQgIgPAAgUQACgYgBgMIANANIABAHQgCAMADAQIAHAcIgBABg");
	this.shape_187.setTransform(505.4,572.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#80D31F").s().p("AgOARQAPgOgBgSIAOgQQACAWgCAKQgCATgMAMQgHgCgHgNg");
	this.shape_188.setTransform(499,572.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#4AA433").s().p("AgHAvQgCgLgOgXQgMgVgBgNQAFgEACgIIABgOIAHAAQgCAMAEAFQAGAGAOgDQAHgCAMAAIAIABIAJAAIgcBFQgDAHgGAAIgHgBg");
	this.shape_189.setTransform(102.5,597.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#82D31B").s().p("AErA2QgMABgBgKIAAgBIAXgkIAIgIIAbgdQAQgTAQgIQgHAUgPAZIgbAqIgIANQgEAHAAAGQgCgDgOAAgAkyAuIgPgIIgBAAQgMgMgOgbQgOgcgLgNIgBgBIgBgGQARADANARQASAUAGAEIAeArQgFAJgGAAIgEgBg");
	this.shape_190.setTransform(80.6,575.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#1EA63E").s().p("AgqBAIAFg4QADgKgBgGQAAgIgOgCIgGAAIAAAAIAOgTQAIgMgBgdQgBgcAJgNIAAA4QAAAPAHAEQAHAGAQgGQAagHARAOIABAAIAIAbIgXAjIAAABQgfAagNAlIgFADQgMAJgGATQgJgYABggg");
	this.shape_191.setTransform(105.9,577.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#1FAB6B").s().p("AgNBHIgJgHIgWgtIA5hSIAIgHQAFgDAFAIQAOAVAAAWQgCAEgMAQQgJALgBAJIAAACIgYAsQgEAIgFAAIgBgBg");
	this.shape_192.setTransform(28.3,590.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C2D104").s().p("AgRAqIgIgTIAAgBQABgKAJgLQAMgPACgFIAUghIAAgBIABAAQALAMgIASQgJATAAAGIAAACIgSAyg");
	this.shape_193.setTransform(32.9,590);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#36A336").s().p("AgGAAIAAgMIANAMQAAAKgHADQgFgFgBgIg");
	this.shape_194.setTransform(494.5,591.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#2AAA4C").s().p("AgKAFIAAAAQgBgTAPAEIAHADQAAAOgHAEg");
	this.shape_195.setTransform(493.3,586.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EFF7EE").s().p("AgLgTIAXACIAMAOQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAIgJASIgbACQgagRAagWg");
	this.shape_196.setTransform(506.2,580.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#1B752A").s().p("AAAASQgSgTgHgEQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAKgOgBgOQAFgCAEAEQAEAGACAAIAHAQQAAAGADAHIAHANIAIANIAEANQgOgFgNgQg");
	this.shape_197.setTransform(511.3,580.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#579E16").s().p("AgOALIgEgNIgIgMIgHgNQgDgIAAgGQATASAZAKQACAIALADQANADADAEIgHAGQgNABgEAMQgGAPgGADQgBgWgOgJg");
	this.shape_198.setTransform(515.5,583.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F8FBF8").s().p("AAsBgQgGgCgKgJIAAgBQgDgKgLgKQgOgWgEgCQgFgCgQAPIAAAfIgPAPQgTABgGgJQgGgHAAgPIAAiTIACgHIAOgNQAbAEADAaIAAACIAABHQAIgFAZgXQATgQAPgGIAWANIAAAHIgOAQQgGAFgOAHQgJAIAOAMQAHANAIACQAAACARAaQALARgOAPIgHABQgHAAgGgDg");
	this.shape_199.setTransform(494,572.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#429F36").s().p("AgRABIgJgYQAJgJARACQAUADAHgDIgCAHIgJAZQgFAMgGAJIgHAIQgHgXgIgHg");
	this.shape_200.setTransform(943.8,599.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#3B8312").s().p("AAEAoQgQgWgQgIIgDgBIgFAAIABgCQAHgMAAgTIAAgbIAAgIIAAgNIAJAEIAMACIAPAAIAIAAQAGAFABALIAAARIAAAAIAOBqQgMgIgVgZg");
	this.shape_201.setTransform(950.3,602.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#148C47").s().p("AgSAbIAHgIQAHgJAEgMIAIgaIADgHIAIgGIAAAIIAAAbQAAASgHAOIgBABQgKALgEADIgDABQgHAAgFgPg");
	this.shape_202.setTransform(945.5,600.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#73C621").s().p("AgMAcQgGgHgCgKIgFgbIAVgSQAGAEAIgCIAQgCIgeBFIgIgHg");
	this.shape_203.setTransform(951.4,583.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#1EA33E").s().p("ATbgmIAAAAIAIgZIAHAAQALAHAbABQATADAHgIQAEgGgBgQQAGAGACAHIAAAJIAAAMIAAAJIgQAbIgWARIgMgRIgCgBIAAABIAAAlIgmA6gA0iAnQgNgYgFgCIADgIQADgJABgOIABgfIAAgPQACgIAKgDIADAGQAAAPAFAUIAKAiIAIA5QgSgCgKgQg");
	this.shape_204.setTransform(819.2,580.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#2C9C4C").s().p("AgDAiIAAgMIAAgJQgCgHgGgFIAAgsQATALADAWQABALgBAZIgOASIAAgKg");
	this.shape_205.setTransform(952.9,572.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#81AF2B").s().p("AgeAoIgHgCIA0hQQAXASAAAZIgOAOQgIAIgBAJQgFAFgFADQgFADgFAAIgEAAQgHAAgOgDg");
	this.shape_206.setTransform(652.9,564.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#3CA832").s().p("AgRBNQgFgcANgsQANg0AAgSIAQgMIAAAsIAAADIgDAaQgDAQAGALIAAABQgLAIADATQAFAbgYAAIgKgBg");
	this.shape_207.setTransform(957.4,557.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#177212").s().p("AAAAWIgBgDIAAgrIADAGIAAArg");
	this.shape_208.setTransform(959.5,552.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#17631D").s().p("AgEAIQgHgKgBgJIAIgNQAKAEAFANQAEANgFATIgOgRg");
	this.shape_209.setTransform(617.4,580.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B7C904").s().p("AgUATIgEgOQACgFAFgDIAIgEIAKgFQAEgDABgDQALAFADAPQACALADAGg");
	this.shape_210.setTransform(600.5,598.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#479431").s().p("AgcAPIAxhOQAUBBghA+g");
	this.shape_211.setTransform(577,578.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#239442").s().p("AgLgEQAAgRAOgNQAUAWADAVQgHADAAAJIgKAMIgDACQgIgMgJgbgAgUAAQgEgEgBgJIAAgQQAGAEABAIIABANIgBAGIgCgCg");
	this.shape_212.setTransform(576.7,595.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#58B427").s().p("AgRg/QAGAIAFALQAFANADATQAHAeAHAPIADAFIgJAOQgFAIgHAEQgRhSACgtg");
	this.shape_213.setTransform(590.1,584.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#27944B").s().p("AABBEQgHgPgGgfQgEgTgGgLQgFgMgGgHIAAggIAQgNQASARAggLQADAegJA6IgCABIgJgCQgEgBABAHIAMAcIAAAEIgBABIgVANIgCgFg");
	this.shape_214.setTransform(591.7,581.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#1A9C41").s().p("AgQAKQAIgEAEgJIAGgPQgIgDgKACIgPAFIgHgMIACgBQAIgQASAAQAKgBATADIACAAQACgGAAgUQgBgPAJgIQgCAXAEA6QADAxgFAeQAAADAIAIQgCALgMgBg");
	this.shape_215.setTransform(598,586.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#569930").s().p("AgCA+QgPgegFgHIAQg+QgRgYACgiQAQAagBAgIAHAGQAEAuALAXQgCAJAGAUQADANAAAJIgBAHQgOgLgKgXg");
	this.shape_216.setTransform(606.3,573.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#1EA53F").s().p("AgagIIAAgRQABgKAHgFQgDAcAbgCQAOgBAAgJQgCgMAAgFQACgHgBgLIgBgUIAIAAIAAAgIAAABQgCAOADARIAHAfQgJAJABAPQAAAUgCAGIgCAAQgUgDgJAAQgSAAgIARQAKg8gDgcg");
	this.shape_217.setTransform(597.7,575.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#2C8E39").s().p("AHTApQgJgSgKgKIgBAAIAAgfIAMgaQAIgRALgIQAFAFACAOQgCAiARAXIgQA/IgRgdgAnwAqQgEgQACgNIAlg/IABAAQAEALADAbQABARAKAKIADAEIgIAUQgLABgKAQQgJAOgNAAIgGgcg");
	this.shape_218.setTransform(555.6,569.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#7FD01D").s().p("ASEAXIgKgUQgCgBgIgUQgGgPgSAAIgBgNIAHgGQAJACAIAJIAOAOIAWAZIAOANIAKASIgJANQgGAIgIADQgDgVgNgJgAyXAWQgJgIgGgDIgEgCIABgGIAAgTQAJAVAKgBQAJABAOgTIAPgUQALgKAOgCIglBFIgHANQgKgCgKgMg");
	this.shape_219.setTransform(731.8,575.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#53AA2E").s().p("AglAZIACgKQADgLAHgLIATgfQAJASALAAQAKAAAMgQIACAAQABATgIAeIAAAMIgIAGQgHAEgUgDQgRgCgJAJg");
	this.shape_220.setTransform(944.2,593.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#1C8E42").s().p("AgNBCQgKgVgNgHIgBgHIACgBQAEgEAEgFIAGgNQAKgRAPgiQAQggARgUIABB5IgBAFIgTAgQgHALgDALIgCAKQgHgHgMgWg");
	this.shape_221.setTransform(939.8,586.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#4F9713").s().p("Ag7BGIAAgHQABgGAFgGQAJgOABgFIBChLQAIgDAKgOQAKgNAKgCIgIAZIAAAAQgRAUgQAeQgRAjgJASIgGANQgDAFgEAEIgCABg");
	this.shape_222.setTransform(938.2,582.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#189643").s().p("AgLBBIgPgdIACgMQAEgSAKgVIAVgrIACgHIAGAGIABANIgBATQgBAPAFAKIAEAGQgCALgSATQgPAUgCANIgBgCg");
	this.shape_223.setTransform(150.1,590.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#1EA040").s().p("AgVBtIAAiSIAPhPQALAEAHAMIAKAVQgPATAAAfIAAAyQgEAQgMAeIgCAIIgDAPIgBAKQgBAJACAIQgFgDgCgFg");
	this.shape_224.setTransform(2.6,583.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#1DAB6E").s().p("EAlFACyIgOAAIAAgCQABgRgJgIQgDgVAXgfQAcglgagiQgGgIgGgMIgKgVIACgfQADACAFAIQAEAHAIABIAAiRIAGgGIABCUQAAAPAFAHQAHAIATgBQgKAHgCAEQgCAHAKAGQANAIAKgQIAUgXQAMgPADgMQALAKADAKIAAABIgXArIgIgCQgQgEACATIAAABIgIA5IgcA0QgIAOgIALgEgmtAB+QgBgIAAgIIABgLIADgOIACgIQANgfAFgQQARAAAIgOQAHgQAFgHIAHgHQAWgPABgPIAegTIABABIABABIgXApIgKATQgFAKAAAJIgBAHQgYAXgBAMQgBANASAPIAAAyIgOAAQgBgWgRgUQgNAWABAOIAAABQgGAEgGAQQgEAOgOADg");
	this.shape_225.setTransform(248.8,582.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#33A428").s().p("AgCALQgEgLAFgMQABgGADgFIABAvQgEgHgCgGg");
	this.shape_226.setTransform(466.2,584.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#23AA5E").s().p("AgDAhQgEgHgDgBQAHgKAAgPQgCgRABgJQABgJACgBQACgDAIAHIgBADQgDAFgBAGQgEAMADALQACAGAFAHIABAGIgCAJQgBAFgCAAIgBAAQgFAAgDgFg");
	this.shape_227.setTransform(465.7,584.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#5FBE46").s().p("AgPALQgHgLAFgbQAMAJAJASIAQAcQgbgGgIgLg");
	this.shape_228.setTransform(467.5,576.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#84D323").s().p("AgKAIQgKgRgMgJQgBgLALgHIAdAfIAKAPQAHAIAJAEQgHANgVACIgPgdg");
	this.shape_229.setTransform(469,575.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#3BAA50").s().p("AgGAXIgKgPIgBgqQAcAKAFAQQAGAOgNAdQgJgEgGgIg");
	this.shape_230.setTransform(471.4,574.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#26A33A").s().p("AgCAUQgEgEgCgGIgDgHIAWgcIABAaQAAAQgJAJIgFgGg");
	this.shape_231.setTransform(476.1,580.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#189A43").s().p("AgUAzIAAglIAAgBIAAhYIAIgOIAKAXQAFAMAGAIQAZAhgbAlQgXAfAEAVIgBANQgIgOABgYg");
	this.shape_232.setTransform(485.3,589.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#3F9C3B").s().p("AgIAHQAIgJAJgEQAAAGgCAHg");
	this.shape_233.setTransform(440.2,599.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4EBA2C").s().p("AgOgIQAKgPASADIABAqg");
	this.shape_234.setTransform(468.2,572.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#18985A").s().p("AgFAnQAHgLAHgPIAcgzQACAQgFAUIgLAhIgEAIgAgkAnIgBgOIABgNQAIAIgBAQIAAADg");
	this.shape_235.setTransform(487.7,596.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#25AB64").s().p("AgSgSIABAAIAHgGIAcAfIgKASg");
	this.shape_236.setTransform(778.7,587.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#238E3F").s().p("AgPAkQgLgOgNgGQgJggACgrIA7AAIAHAAIAbAsIgsBLIgSgYg");
	this.shape_237.setTransform(774.8,591.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#5CB22B").s().p("AglgOQADgHASgFQAQgEABgKIAIAGIAdA5QAAAMgPgFQgUgJgQAUg");
	this.shape_238.setTransform(750.5,591.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#27943C").s().p("AADA9Igcg6QAIgMgBgWIAAgjQAGgFAPACQAQACAHgFQgHAeAAAqIgBBJg");
	this.shape_239.setTransform(754,587.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#65AC31").s().p("AgCAaQgKgNAEgNQABgIAJgMIAIgLIAAAfQABAUgJAMIgEgGg");
	this.shape_240.setTransform(784,566.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#2F9D4E").s().p("AAIBTIgNgVIABgJQgBgkgMg8QgCgQAEgJQADgIAJgFIAFgEIAMAPQAGAIgCAJIgIAKQgKANgBAHQgEAOAKAMIAFAGIAABNIgCgDg");
	this.shape_241.setTransform(783.3,569.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#27964C").s().p("AARBJIgHAAQgIgJgGgWQgHgXgIgJQgIgTAIgTQgBgIAJgIQALgLACgFIAPgMIAAABIAAAsQgBAbgGARQgIAeAWAUIgGAGg");
	this.shape_242.setTransform(775.1,578);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#2D943A").s().p("AggBvIgIgsIAAgGQAgANAGgaQAHAKAHAWQAHAWAIAJgAgCgsIAAgvIAGgTIAkAxIABACIAAAOQgGACgBAJIgPANQgVgCAAgVg");
	this.shape_243.setTransform(773.4,574.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#3CAA33").s().p("AgdAmIAAgOIAAgBIABgSIAEgDQAPgNAGgHQAJgQgFgSQAIgHAAgOIgBgWQAJAIAGANIAHAXIgHAEQgIAFgEAIQgDAKACAQQAMA7AAAkIAAAJQgZgWgagkg");
	this.shape_244.setTransform(780.5,565.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#8DBB17").s().p("AgKAGIANgYQAHACABAKIgMAYIgBABQgCgKgGgDg");
	this.shape_245.setTransform(425,585.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#2B9F3B").s().p("AgPA2QgBgOgGgFQAAgMAMgXQAHAAAFAJQAFAIAIgBIAIAHIgIAMQgQAPgFAXQgHgFgCgOgAAPgVQAQAPgPAQgAAJgvQACgGAMgTIAAAaQAAAPgIAKQgLgNAFgNg");
	this.shape_246.setTransform(427.6,592.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#3CAB33").s().p("AgWAAQACgUgBgLIAsASIgQAYQgKAOgLAHQgKgMACgUg");
	this.shape_247.setTransform(375.8,585.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#1CAA6E").s().p("AghAiIAcgvQARgcAWgOIAAA/IgCAEIgVAoIgEACQgIACgHAAQgUAAgFgWg");
	this.shape_248.setTransform(340.9,590.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#2EAB48").s().p("AgUABQgCgVAUgCQAVgDACAZQAAARgVAGQgSgDgCgTg");
	this.shape_249.setTransform(340.2,577.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#45B22D").s().p("AgGAWQgDgLgHgCIAKgLIAOAGIgGgSQgDgNAKgHIAJASIgDAMQgBAEgGAEIgHAfQgFgDgCgKg");
	this.shape_250.setTransform(345.7,579.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#1BA66B").s().p("AgYBNQgLhTAbhGIAAAFQABAMAHANIAQAbQAPAbgDARQgJAFgFAPIgQAUQgGAHgGAFg");
	this.shape_251.setTransform(315.9,592.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#6FC129").s().p("AgKABQABgPgBgIIAVgEIAAASQgGAEgCALQAAAOgFAGQgIgKAAgQg");
	this.shape_252.setTransform(313.1,584.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#F4F9F1").s().p("AgeArIgQgMIgKgTQgDggAcgXIAXgGQATgBARAOIAdAXIAAAbIgOAAIgCgCQgIgFgMABIgVABQgQgCACAKQACAKAOgCQAMgCAWgFIAIgCQAEAMgHAHQgGAFgOAGIgWAEgAgOgWQgEACgCACQgCAEAEACQAGAEAJAAIARgEQgGgMgKAAQgGAAgGACg");
	this.shape_253.setTransform(312.2,577);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#6BB430").s().p("AgdAAQgCgJAQACIAWAAQAMgBAHAFIACABIACACIgIABQgWAGgLABIgGABQgKAAgCgJg");
	this.shape_254.setTransform(313.6,578.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#179A64").s().p("AgSAeIgGgsQABgBADgLQAAgBAAgBQAAAAABgBQAAAAAAAAQAAAAABAAQACAAAEAFQAVAcAJAPIAHALg");
	this.shape_255.setTransform(746.1,597);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#179443").s().p("AAVBQIgGgLQgJgPgVgdQgEgFgDAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBABAAABQgCALgBABQgGgSgDggQgCgkgEgPIAOgNIAeA6IAYA3QABAKAMAcIAEAIg");
	this.shape_256.setTransform(746.5,592);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#257821").s().p("AgGAUQgFgIABgMIAAgYQAIAFAFAKIAFALIADAGIgNARIgEgFg");
	this.shape_257.setTransform(741.1,579.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#7ED01D").s().p("AAUA3IgGgLQgFgKgIgGIgHgNQgGgUgSgWIgKASQAAADgCADIgBgNQADgdAMgQQgDAOAJAMQAGAIAQAMQAGARARAHIAAABQACAIAGAIIAOAQIgWAUIgDgHg");
	this.shape_258.setTransform(739.9,574.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#288837").s().p("AAAAOQgHgPgOgEIAVggIAWAyIgBATIgHAGQgGgFgIgTg");
	this.shape_259.setTransform(725.1,579);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#86D01A").s().p("AgsAwIABgBQAGgRAQgSIAegfIAQgSQAKgLALgEQgDAMgJAPIgRAZIgVAeIgKATQgKAEgHAAQgIAAgFgFg");
	this.shape_260.setTransform(723.5,575.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#3DAB30").s().p("AgUApQABghgDgOIAlhMQAKAUgEAbIgIAuIgFBIQgagNgCgdg");
	this.shape_261.setTransform(352.4,585.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#34B477").s().p("AgMAVIgBgBIAHgfQAGgDABgGIACgLQAPAOgFARQgCAJgGAPIgEAIg");
	this.shape_262.setTransform(347.2,581.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#F7FBF7").s().p("AgfA6IAEgIQAGgQACgJQAFgSgPgNIgJgSIgBgGQgIgMgBgFQgDgKAMgFQANgEAHAJIAIARIAEALQADAGAFACQAJgJAIgZIADgDQAIgHALACQAEABAGACQACAKgIAPQgJAQAAAIIglBKIgPABQgIAAgGgGg");
	this.shape_263.setTransform(350.5,578.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#319239").s().p("AgVA4QAPhOgBgiQAHAEAGAQQADAJAHAGIAGADIgJBHQgFgDgFAAQgJgCgIAHIgDACg");
	this.shape_264.setTransform(354.1,567.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#93C924").s().p("AgJgEIACgJIABAAIgBAAIARATIgCABIgIAHg");
	this.shape_265.setTransform(623.6,584.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#C0CF04").s().p("AAbBKQgLgFgKAFIgGAAIgsiMIAIgHIAtBGQAHAHAIAZQAHAWAOAJIgCAHQgCADACACIACACIAAAAg");
	this.shape_266.setTransform(628.1,592.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#61B823").s().p("AgPApQAFgKACgiQACgdAOgOIAIgNIgEA7QgEAjgHAZg");
	this.shape_267.setTransform(833.8,585);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#1E8C42").s().p("AgGAlQgHgYgMgPIAAgMQAEgCAEgLQAEgJAHAAQAIABACAIIAEANQADAEACAIQAEADAEACIAFAAIAAAHQgIAGgHAPIgCAGg");
	this.shape_268.setTransform(684.8,596.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#22A93C").s().p("AgSAGIADgBQALgFACgMQgCgPABgIQABgGACgCQAAAAAAAAQAAgBAAAAQABAAABAAQAAAAABABIAIAGIAAAZIAAABQgCALAEAQIAGAdQgZgZgMgOg");
	this.shape_269.setTransform(655.5,575.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#39A834").s().p("AgdAqIATgiQAKgTAAgQQABgJAIgJIANgNIAIgCQgWAfAOAtIgIgGQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgCACgBAGQAAAIABAQQgCALgKAHIgCABQgJgNgOgGg");
	this.shape_270.setTransform(654.4,570.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#1EA43E").s().p("AALBBQgIgIgHgNQgLgUgLgHQABgHALgPQAKgOgHgMQAaAGACgSQAEgXAEgDIABAyQgBAHACAmQAAAbgKARIgGgFg");
	this.shape_271.setTransform(855.3,578.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#4F9C16").s().p("AgXAWQgDgMAGgHIAHgGIAmglIAAAGIgCAEIgqBHQABgEgFgPg");
	this.shape_272.setTransform(865.9,578);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#4A9B1B").s().p("AAAAmQgMgNgGgLIAAhIQAMAHADAOQADAQAEAEIAPBMIgTgVg");
	this.shape_273.setTransform(826.7,585.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#20963A").s().p("AAJANQAAgUgKgJQgDAGgBARQgBAOgHAIQgUgQAKgUQAQgWADgMQAIAKAJAUIAEAIIAHAQIABADQAIAPgQALQgJgIABgVg");
	this.shape_274.setTransform(851,588.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#6ABE25").s().p("AgCAwIgBgCIgHgRIgEgJQgKgTgJgJQAFgXARgQIAAgBQALAHAKAUQAIAOAIAHIAHAFIABASQgHACgKANQgIALgKAAIgBgBg");
	this.shape_275.setTransform(853.8,584.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#287F37").s().p("AgPgEIAEgJQADgDAAgQQAAgMAIAAQAOABABANIgBAXQACASAAAIQgBAPgJALg");
	this.shape_276.setTransform(878.3,569.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#22A73D").s().p("AgWAmQABgMADgTQAFgVAAgNIgBgGIACgIQABgFACAAQAHgCACAEIAAAJQABAHAAAPQACAMAUAAIgtAxIAAgKg");
	this.shape_277.setTransform(875.9,575.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#329B36").s().p("AgBAvQAAgfgDgJQgFgSgCgbIgDgvQAJAGAFARQAGAQAJAGIgHBZIgBAQQABAIAGAGIgHAHQgIgOAAgZg");
	this.shape_278.setTransform(863.2,569.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#B0C304").s().p("AAIA4QgMgBgGgTIgCgIQgCgGgEgCIgJgSIgOgsIAAgNQAEACADAFQAEAGACAKIAAABQAGAHAAAIQADADAEABQAIACAMgFIAGgCIAWAgIAJAdIgBABQgSALgMAAIgDAAg");
	this.shape_279.setTransform(147.9,599.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#4C800B").s().p("AgMALQgGgSgPgFIAHgZQANANAOAAQANAAAUgHIgBATQgVAVgJAdQgJgFgGgWg");
	this.shape_280.setTransform(796,558.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#309E38").s().p("AgzAnIgBggIAAgNQA5gKgFg1QABABAIAkQAEAUAggGIAIAGQgIARAIAVQgGAagggOIAYgpIABgDIgDACQgWAMgTAXQgcAjgFAEQgLgMgDgTg");
	this.shape_281.setTransform(767.8,576.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#81D21C").s().p("AgEAzQARghACgGQACgJgEACIgJADIgBAAIAAABIgVAZIgmgzQAAgGgEgHIgKgMQAAgGABgBQABgDAFgBQALAKASAZQARATAUAGIAAgMQACgHAGgFIAIACQAaAFAOgMQAIgIAEgMQgBAbgOAjQgRAXgEAEQgKAHgNAAQgHAAgJgDg");
	this.shape_282.setTransform(810.2,575.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#126015").s().p("AgMgUIAAAAIADgMIAWAlQgDAKgDAFQgFAIgJAFg");
	this.shape_283.setTransform(822.2,562.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#96E212").s().p("AgeAsIgHgBQgBgKAFgKIAJgSIAQgZIAIADQAPAGAIgLIABgBIAJgNQABgGAEgDIgRA+QgEANgIAHQgJAJgQAAIgOgCg");
	this.shape_284.setTransform(815.2,569.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#097B25").s().p("AgRAAQAEgVAHgMIADgEIAVAhIAAAjIgOAHg");
	this.shape_285.setTransform(823,559.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#5F8A08").s().p("AgCAwQgPAAgNgNIAIgsIAOgmQAIAGAJARQAIAPAJAHIAAAAIAFAQIgBAOIAAANQgSAHgMAAIgCAAg");
	this.shape_286.setTransform(796.4,551.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#1EAD6D").s().p("AATA1QgGgCgCgGIgFgQQgGgGgEgKIgJgQIgXgyIAWAMIAzA+QgEAGgCAKIgCAQIgGAAIgEAAg");
	this.shape_287.setTransform(64.1,581.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#199943").s().p("Ai5A/IgCgFQgEgMACgHQAEgZAJhTIAJARQAFAKAGAGIAFAQQACAGAGACQAEABAGgBQgCAFgCAQQgDAPgGAIQgCgGgBgBQgDgDgEAHQgKAPgRAgQAAgEgCgJgACoAyQgcgeAKgiQAEgNAcgwIABARIAAAoQABAgAHAXIAAABIgBANQgBAJgGADg");
	this.shape_288.setTransform(80.4,588.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#4BB92A").s().p("AABCZQgJgIABgOIABgXQAAgdgIg/QgIg7ABggQAegfAOgnIAHgGIAAgBIgFApQgEAaACAQIgIAgIgVgLIAWAwQgJBUgEAZQgCAHAEAMIACAGQACAIAAAEIgIAHgAgdhlIABgTQAHAHAAAMIgBATQgIgHABgMg");
	this.shape_289.setTransform(61.1,581.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#19A55B").s().p("AgKAEQABgJgBgFIAAgBQASgIADATIgIAOQgMgCgBgIg");
	this.shape_290.setTransform(300.4,585.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#52B22A").s().p("AgRAbQAHgSAAgIIAAgBQAHgHAAgRQAAgSAGgJIAQAMQgLAKgCAPIgDAbIAAAUQAAAMgHAHQgRgKAEgPg");
	this.shape_291.setTransform(307.2,585.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#299248").s().p("AgWAtIAHgUIAJgMQAEgIgSgEQgGgBABgHQACgJAAgEIAAAAQAWASAFgKIAHgaQAAgGAGAAIAKAUQgHAIAAARQAAASgHAHIgBAAQgFADgJAJQgHAHgJAAIgEAAg");
	this.shape_292.setTransform(304.8,582.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#84B12B").s().p("AABAiIgJgJQgGgDgFgCQgRgZAageQAcAiAJAbIgFAGQgGAEgGAAQgEAAgFgCg");
	this.shape_293.setTransform(303.3,563.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#84C820").s().p("AgSALIACgEIAEgFIALgLQAGgHAJgCIAFAAIgXAlg");
	this.shape_294.setTransform(305.6,571.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#70A62C").s().p("AAEAnQABgSgFgKIAXgmIAOANIABATQgcAWADAhQgGAAAAAGQgDgHAAgUgAglhBQAEABAGAEIALAIQALAFAJgHIAEgFQAQAMgBAUIgFAAQgJACgHAHIgKAMIgFAFg");
	this.shape_295.setTransform(305.2,572.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#49B234").s().p("AgSAMIACgeIAJAJQAFAEAGAAIAPASQgJAGgKAAQgJAAgJgHg");
	this.shape_296.setTransform(300.3,557.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#2C9131").s().p("AgDAgQADgPgGgZQgGgeACgMIAAgfQAGAFAEAPIAAACIACAIQAEAJAFAEQgCAOgDAvQgDAlgFAWg");
	this.shape_297.setTransform(858.3,568.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#21AC68").s().p("AgLAEIgSgtIABABIAVATQAEAHAQAQQAOAPADAMIgIANQgWgNgLgZg");
	this.shape_298.setTransform(904.5,579.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#1F8635").s().p("AgFABIABgpIAGAAQAGAPgEAZQgEAeACALQgHgRAAgXg");
	this.shape_299.setTransform(910.9,580.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#23AF6B").s().p("AgKgHQADgGASgEIgCALIgOAYQgIgTADgGg");
	this.shape_300.setTransform(916.9,579.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#77C920").s().p("A41A2IABgNIABgHQAAgJgDgMQgGgTABgJQAPgIAGgGQAKgIgDgOIABgBIAQASIgBAFIABADIAdBFQgKALgXgDQgZgDgJAGgAYHAwIgCgBQgLgEgRACIgUADIgKAAIgCgNIAHgOIAQgYQAMAAAaAGQAWAAAKgTIAGABIAQAkIAAAEQABAQgRADQgWAAgIAEg");
	this.shape_301.setTransform(767.5,579.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#83D51D").s().p("AgBAsQgagGgNAAIACgMIALgLQAGgHgWABQgBgQANgLIAIgCIAYgFQATgEAHgPIABAIQAAARAQAaIgNAFQgGAEAEAIQgJAVgUAAIgBgBg");
	this.shape_302.setTransform(921.9,575.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#9DE80F").s().p("AgogJQACgEAMgNQAIgLAAgIQAQAUAKgRIADgEQAFAdAZgWIgQA9QgHAPgSAEIgaAEIgIACQADgRgJgng");
	this.shape_303.setTransform(922.2,568.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#CCE5D3").s().p("AgEAUQgCgBgCgDIALgkIAGAEIgBAkIgHABIgFgBg");
	this.shape_304.setTransform(905.9,555.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#329E4E").s().p("AAHAiQgEgGgHgYQgHgSgLgIQgFgNAAgBQAEgEAGACIAJAEIABABQADACACAIQAEAGAJgLQACADADACQAEACAIgCQgHAKAAAWQABAVgHAKg");
	this.shape_305.setTransform(903.8,560.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#196513").s().p("AgEAlQgDgHgDgDIgBgBIgIgdQAHgFAFgNQAEgNAFgFQAKAGAEALQACAGACANIgLAkQgGAHgDAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_306.setTransform(904.1,554.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#9AE611").s().p("AgcAkIgCgYIAAgBIAXgkIABgBQABAHADAEQACAEAHABQAFAAAEgEIAFgJIAGgLQABgDADgCIgDAZIAAAAQAAAGgJAMQgIAMAEAIIgHAGQgJAKgMAAQgHAAgIgEg");
	this.shape_307.setTransform(842.1,567.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#269B11").s().p("AARCXIgcAAQgSAAgKgFIAAgsQAGgZAEgjIAEg7QAAgOAFghQAFgfgCgSQAIgGAAgMQgBgNABgHIAJgOIADAGQACAHgBAKQAAAPAHAIIAAABIACAYIAHA6QgDAKAEASIAGAbQgCAQAEAaQAGAfAAAKIAFA/QgGgNgRgBg");
	this.shape_308.setTransform(837.9,580.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#3FA039").s().p("AgOAHQgGgsACgZIAMgNQAHgGAKANIAIBfQgIAVgLARIgKANQABgVgFgyg");
	this.shape_309.setTransform(844,553.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#2E9D51").s().p("AgWA1QgIgJgKgCQgDgIAHgMQAKgOAAgFIABAAQAMgFALgPIASgYIALgOIAFgEQAFgFAFgCIAAAmQgHAEAAAKQgLAJgHARQgFAJgHAVIgOAZIgNgOg");
	this.shape_310.setTransform(847.6,565.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#22AE3B").s().p("AgmA7QAIgZABgjQgBgpABgUQAAgJAHgEIACAQQACAIANACQAPADAIgKIAMgTQgBAMAGAdQAFAbgDAOQgEACgEAYQgCASgbgGIgcAgg");
	this.shape_311.setTransform(854.1,570.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#3B9139").s().p("AglBJIACgZIAehRIAAAAQAGgGAPgKQANgKgCgNIALAHQgJAtACAXQgFADgFAEIgFAFIgLANIgSAZQgLAOgMAGIgBAAg");
	this.shape_312.setTransform(848.8,558.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#25A723").s().p("AACAPQgIgCgBgHIACgMIAAgCQADAAADgGQADgDADAIQABAEgCAVIgEgBg");
	this.shape_313.setTransform(417.1,565.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#449B39").s().p("AgLAUQABgIgFgJIgKgOIAQgCQAIgCAEgEIADABIAAACIgCANQAAAGAJACIAFABIAIAFQgRgBgMAKg");
	this.shape_314.setTransform(416,566.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#9EEA0F").s().p("AgSgFIARgKQAKgEAKAGIAAAHQgFACgDAMIAAABQgCAFgFADQgDABgDAAQgJgFgHgSg");
	this.shape_315.setTransform(315.3,568.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#7CCF1E").s().p("AAFAQQgEgIgJAEIgOgMQAEAAADgBQAFgDACgFIAAgBQADgNAFgCQgEAZAZANIACAGIgJAHQgDAAgGgKg");
	this.shape_316.setTransform(317.3,570.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#359C13").s().p("AgLAZQAAgHAGgbQADgLAAgIQAAgJgBgHIAAAAIAPAZIAAA6IgWAGg");
	this.shape_317.setTransform(310.1,568.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#61A838").s().p("AACA2QgEgCgDgDQgGgFgBgIIAAgBQgBgjAJgVIAPggIAAAAQAFATgIAiQgIAmACAQg");
	this.shape_318.setTransform(309.5,558.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#127010").s().p("AgMAjQgEgBgBgGQgDgaASgkQAGADAFAJQAFAKAEADIgFALIgPAgIgIABIgCAAg");
	this.shape_319.setTransform(309.3,552.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#07882B").s().p("AAOBIIgJgIIAAgBIgmgrQAEgOARgbQAPgaACgQQAJAEAEgHQAFgJADAAQAHAEABAIIAAANIAAABQgIANAAAcQABAbgHANQgEADgBAEQgFAHAEAJIAMAVIgBAAQgGAAgFgEg");
	this.shape_320.setTransform(298,549);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#26871D").s().p("AgJACQAHgKACgHQABAGAHAJQAFAIgGAIQgTgEADgKg");
	this.shape_321.setTransform(307.5,546.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#339736").s().p("AgSAXQAPgmABgfIAFgBIABADQADAHACANQACAMAFAHIADAEQgCAMgNAOIgWAXg");
	this.shape_322.setTransform(712.6,557.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#12862E").s().p("AABAWQgEgHgCgLQgCgNgCgGIgCgEIAJgGIACADQALAOABAVIAAAHIgIAGIgDgEg");
	this.shape_323.setTransform(714.1,554.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#9BBF2E").s().p("AgCAWQgBgVgNgOIgCgDIAAgMIAXATIAOASIgIANQgGAHgHAAIAAgHg");
	this.shape_324.setTransform(715.7,553.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#097A26").s().p("AgFAzQgPgGgCgYIAAgiQAHgVALgOIAEgEIAXAnQACAHgFARQgFAQAHAKQgFAAgHAJIgBABQgEAGgFAAIgFgCg");
	this.shape_325.setTransform(701,562.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#2D9C50").s().p("AgJAqQABgMgIgPQgLgQgEgIQgFgHAFgJQAHgNAAgDIAPgZIAAAiQACAZAOAGQAJAEAGgIIABgCQAHgIAFgBQABAKgGAWQgEASACAMIAAABIgQAUQgJgFgMgUg");
	this.shape_326.setTransform(699.7,567.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#93B827").s().p("AgkBFIgPgEIgBgYIAug4QAOgMgBgOIAPgIQAEAAAJgMQAHgJALADIgnBFIgEAEQgKANgHAWIgPAZQgFADgGAAIgDAAg");
	this.shape_327.setTransform(699.5,557.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#5C8F10").s().p("AAFAUQABgIgGgMIgIgSQAMgMAFAIIAAAwIgEgGg");
	this.shape_328.setTransform(958.8,547.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#A6ED0E").s().p("AgwBJQALgNAKgVIARglIAKgLQAKgRAKgVIAAgBIAQgWQAKgMADAPQgTAmgKArQgIAKgDASIgHAbQgIgDgRAHQgIADgGAAQgGAAgFgDg");
	this.shape_329.setTransform(424.2,561);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#0EA22E").s().p("AgDg7QAGAEAAAGIAAAJIABAyQABAfgIATg");
	this.shape_330.setTransform(328.9,575.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#3C933C").s().p("AgXAgIAthGQAEAOgDAXQgDAbACAKIgDgBQgMgBgcAFg");
	this.shape_331.setTransform(321.8,568.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#5BA21B").s().p("AAEAYQgRgOgUABIAAg5IAOAMIAIAIQAHATAIAFIAOAMQADASANAIIgBALIgdgXg");
	this.shape_332.setTransform(314.6,570.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#227D0F").s().p("AACAnIgLgRIgCgCIABgTQAFgEABgPQABgOAGgGIAJAOQgBADAAALIABARQAAAUgIAMIgCAAg");
	this.shape_333.setTransform(484.3,543.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#4ABD2E").s().p("AAHAvQgDgagagEIAIgSIAOgaIAAAAIAXgTIAAAaQAAAogPAbIgBAAg");
	this.shape_334.setTransform(490.7,560.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#A6F00D").s().p("AAIBEIgOg4QgKgfgMgXQAAgIgDgGIgFgGIAAgSQAOAKANAYQAOAbAKAJQADANAJAOQAEAGAGAGIAAAaQgCAPgGALg");
	this.shape_335.setTransform(497.4,560.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#067E28").s().p("AgKAWIgEgZIAIgMQAGgGADgHQAEgJABgKQAJANgCAWIgCAiIgNAaQgGgKgEgQg");
	this.shape_336.setTransform(489.2,555.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#0C710C").s().p("AgIAFIABgQIACgHIANABIABAGQAAAKgFAHQgDAHgGAGg");
	this.shape_337.setTransform(489.1,552.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#398213").s().p("AANAvQgEgKgEACIgHAIIgYgfIABAAQAJgMgBgTIAAgSQgBgLABgDQAMAQAMAcIAUAsIgBAIg");
	this.shape_338.setTransform(487.3,545.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#0F882D").s().p("AgKAIIAAgBIAGgRIAHgNQAIAJAAANIAAAZg");
	this.shape_339.setTransform(499.4,552.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#3D9E38").s().p("AgZBKQgJgOgDgOQACgPgDgTIgGgiIAWAQIABgaQAAgNgIgJIAMgRQAGgIAHgEIAEgCIABAJQAEAQAPAXQAVAgAEAOIglA/IgBgdQgBgTgLgMIgLBKQgFgFgEgHg");
	this.shape_340.setTransform(502.8,555.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#53BF2A").s().p("AAJAIQgOgWgEgQIgCgJQANAHAQAUQATAWAJAHIAKALIgXAbQgEgOgUghgAg3gIIAGgNIAIgMQANgFACgMIAAgDQALgEADAGQABADAAAJIgEACQgHAEgGAIIgNARIgIAMQgIgEACgIg");
	this.shape_341.setTransform(503.9,550.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#549813").s().p("AgBgKQADgHAFgFIABAZIAAADQgCAMgMAFQgBgVAGgMg");
	this.shape_342.setTransform(500.4,544.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#0A8E2E").s().p("AgUAQQgEgYALgUIACgDIAFgJIACgBIAagSIgHA9QgGAFgDAHQgGANAAAVIgHAMIgNgsg");
	this.shape_343.setTransform(499.7,542.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#A7D6AC").s().p("AgIArQADgQgBgIQAHgPAAgZIAAgpIAGAAIACAmIgDBXQgNgGgBgOg");
	this.shape_344.setTransform(497.5,531.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#097A02").s().p("AgEAmIADhYQAHARgCAcQgBAeABAMIAAABIgEAJIgCADg");
	this.shape_345.setTransform(498.6,534.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E3F0E0").s().p("AgBAnIgKgLIACg4IABgBIALgMIAJAlIgHAug");
	this.shape_346.setTransform(509.8,549.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#DDE9D0").s().p("AgGgHIAHgJQAGAEAAAGIgBAKIgLANIgBABg");
	this.shape_347.setTransform(509.5,544.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#87A708").s().p("AgBAqIABgLQAAgHgFgEIgIAJQgMgfgEhMQAJAPACACQAJAGAOgGQALgFAOANIgXCEg");
	this.shape_348.setTransform(510.2,541.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#349739").s().p("AgOBEQADgXgGgoQgGgsABgSQAGgDACgHIAAgDQABgMAEgFQADAMAMAFIAMADIAABUIAFAAQgHAqgIAdg");
	this.shape_349.setTransform(218.9,561.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#40B02F").s().p("AgKBMQACgSgGgkQgGgiACgTIAlgsIAABLQAAAKgJAXQgIATABANQgDABgBAEQgBAAAAAGg");
	this.shape_350.setTransform(803.4,563.7);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#0D902E").s().p("AgKANQABgbgBgOIAAgBIAVgYQgFAQAAAlQgBAjgHATQgHgRgBgYg");
	this.shape_351.setTransform(805.7,550);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#147514").s().p("AgPAIIAAgDQABgQAGgMIAIgSIAGAHIAEAHIAGAQIgCANQgEAEgHANIgBACIgHANIgCACIgHAGQgBgXAAgLg");
	this.shape_352.setTransform(836.2,552.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#7CB22A").s().p("AgSAUIABgQIAAgmQAFACAMgCQAMgCAHADIgQArIgPAaQgFgGgBgKg");
	this.shape_353.setTransform(814,566.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#3F9D32").s().p("AgGgMQAFgEABgIIAAgNIAHAAIAAARQAAAKAIAFIgdArg");
	this.shape_354.setTransform(819.6,555.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#25B339").s().p("AgQBQIgCgMIAAgnQABgWAFgPIABglQAHgGABgKIgBgPIAAgCIADgGQAFADAAAGIAAAKIAAAAIgBAGQAAAPAIAGIAAAfIAHAeIABACIAAAdQABAbgZAEIgCAAQgHAAgCgFg");
	this.shape_355.setTransform(826,563.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#90BB23").s().p("AAAAJIAFgRIgNgHIgNgLIgBgCIgHAAIAHgNQAaATAEAMIAWATIAAACIAAAPQgBAKgHAGg");
	this.shape_356.setTransform(822.6,554.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#379739").s().p("AAaBSQgIgRgQgYIgbgoIAOglIgcASIgQgHIAAgGIAAAAQAKgKgCgWQgCgWAIgKQACAIAAASQADANAXAAQAQAAAGgCQALgEgBgOQgBgRAPgCQgGANgBARIAAACQAAALABAXIAHgGQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQAFgCgGABIAAgBIAIgMIABgDQAHgNAEgEQAAAPgFAwQgFAnADAYQgBAHABANQAAAMgIAHg");
	this.shape_357.setTransform(832,559.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#679814").s().p("AgBAWIgDgHIgHgHQAEgIABgDQABgGgMgCIAAgHQADgBANgKQAJgIAKAAQACAbgQAwg");
	this.shape_358.setTransform(837.3,547.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#247E11").s().p("AgHAUIAAgIIAAgiIABACIAOAXIAAAHIgEAIQgCAEgCABIgCAAQgEAAgBgDg");
	this.shape_359.setTransform(834.7,545.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#2C9239").s().p("AgKAxIAAggQAIgKAAgPIgBgMIAAgOQAGgYAIgHIAABAQgJAMABAVQACAggBADg");
	this.shape_360.setTransform(9,570.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#529D38").s().p("AgGASIAAgBIgBgKQAAgUAOgMIAAANIABAMQAAAQgIAKQgEgDgCgFg");
	this.shape_361.setTransform(7.9,569.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#20721B").s().p("AgJACIgBgCIANgYIABAKIABABQACAFAEADIAAAeQgIgFgMgSg");
	this.shape_362.setTransform(6.7,572.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#7BCC1C").s().p("AALAjIgWgkIgKgVQgHgMgMgEIAIgPIAdAbIABABQAMATAJAFIAPARIAHAHQgBAPgXAQg");
	this.shape_363.setTransform(6,575.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#3FA038").s().p("AoyAjIACgDQAEgIABgMIABgMQgBgYAGgKIABgBIAJhdQALAXAEAgIAGA4IAEAuQAEAZAIAUIguA4gAIGBSQAAgLgBgDQgDgHgKgBIAAgOQANgNgNgQQANgPABgWQgBgaABgOIABAAQAHgKAAgYQAAgYALgLIASB3IAAABQABANgBAcQABAYAHARIAAAGIgmAtQgHgOAAgcg");
	this.shape_364.setTransform(749,548.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#8FDD14").s().p("AgKgxIAUABIABAGIgHAOIgOBOg");
	this.shape_365.setTransform(1.5,574.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#81B12D").s().p("AgKAvQgGgCABgMQABgKgLgCQgBgIgIgEIgGhEQAdAZAdAyIABAAQgBALAPACIAIAYIgBAHQgTghgfAUg");
	this.shape_366.setTransform(682.6,562.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#76A92A").s().p("AgNATQgMgTAAgIQAfgUAUAfIAAAUQgIACgIAKQgKALgDACQABgLgLgSgAAEgnIAAAAIAJgIIADADQADAGgBALQgOgBAAgLg");
	this.shape_367.setTransform(684.1,568.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#187711").s().p("AgTBIIAAgDQADgigGgxQgIg5gCgeQgBgIABgcIAAgCQAOARASApQARAmAQASIAAABQACAigFAvIgJBTg");
	this.shape_368.setTransform(685.6,547.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#A9F10A").s().p("AAAAwQABgLgDgGIgDgDIgdhaIgDgGQgBgEAIABIAGAGIABABIAoBDIAUAhIABAMIAAAAQADAMgPADQgQAFgCAEg");
	this.shape_369.setTransform(685.9,560.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#28BC37").s().p("AALCHQgLgHgMACIgUghIAJhTQAFgugCgjIAAgBQAAgIAFgUQAFgSgCgKIABgWQAFAFACALQACAJADADIABABIABATIAPBkIAOBfIABAZIgBAZIgBAAIgUgMg");
	this.shape_370.setTransform(691,551.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#318C21").s().p("AAIgPQAAATgPAMQgBgTAQgMg");
	this.shape_371.setTransform(879.7,549.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#498C14").s().p("AgGgcIANAOIAAArQgMgZgBggg");
	this.shape_372.setTransform(887.2,556.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#39A534").s().p("AAbA3QABgPgCgIIAAgIQgCgFgHACQgCABgCAFIgCAHQgegGgVAGIgPhkQAbAUAagUQAJAuAbAeIAWAyIAAAGIgHABQgUAAgCgMg");
	this.shape_373.setTransform(873.3,568.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#42B22E").s().p("AAAAjQgFgRgJgFQAAgPAAgIQgBgNgMgHIgCgBIgIgTIAAAAIAmACQAVAAAQgIIgBAHQgIAVgGAfIgJA2QgIgGgGgQg");
	this.shape_374.setTransform(863.2,559.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#1B9231").s().p("AAAgJIAGAHIABAMQgWgDAPgQg");
	this.shape_375.setTransform(349.5,548.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#1D7419").s().p("AgJAXQgKgQAKgPIADgtQALAEAEANIAGAWIgCASIgBANQgBAWgJAPg");
	this.shape_376.setTransform(331.7,558.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#58A238").s().p("AgdAwQAHgPgEgXIgIglIgCgQQAAgKAGgGIAMAfQAJgPABgVIABgOIACgTQAIAOAMAiQALAfALAQIAAAXQgUgFgEALQgDAGgDAPQgGAEgBAIIAAANQgEADgEALQgFAJgJACg");
	this.shape_377.setTransform(333.8,566.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#B7E1BD").s().p("AgHABQABgigDgHQAPADACAMIACAXIgEAsQgNgPAAgag");
	this.shape_378.setTransform(330,553.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#2AB639").s().p("AgRBKIgFgbIAAgYQAGgVAFgaIADgxQABgKAFgBQACAAAHAGQgCAZAGAjIAJA5IADAWQgBAMgIAIQgKAEgGAAQgNAAgCgLg");
	this.shape_379.setTransform(339.8,563.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#127F13").s().p("AgKAEQADgEAFgMQADgLAIgEQAEAMgEAPIgFAcQgKgIgEgQg");
	this.shape_380.setTransform(333.3,541.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#94C081").s().p("AgFAPIAAgdQACABABADIAIASQAAAHgJAAIgCAAg");
	this.shape_381.setTransform(350.9,546.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#6CAB65").s().p("AAEAmIgIgUQgBgDgCgBIAAgUQAHgDAAgMQAAgLAGgFIACBLg");
	this.shape_382.setTransform(351.2,544);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#77AB2C").s().p("AgZArQADgJgBgEQACgMgBgFQgBgKgGgFIAAgsQAFADAFADQAUAGAVgUIAIAHIgBAaQgeAkgOAnQgKgDAAgIg");
	this.shape_383.setTransform(902.3,569.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#8DB72A").s().p("AgLAlQgFgCgFgEIgBglIAHgDQAPgKAAgNQAMAIAGATQAJAXADAGQgQAPgOAAQgGAAgFgCgAgdgWIABgQQAHAGAAAKIgBAQQgHgGAAgKg");
	this.shape_384.setTransform(901.5,561.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#99BF28").s().p("AgJAmQAAgKgHgGIgBgOQAGgCAEgFQAHgHABgPIABgJQACgRAHgGQABAHgCANQABAMAHAHIAIAeIgJgEQgFgCgEAEQgBABAFANQgBANgPAKIgGADIABgQgAgZgeIABgRQAGAGABAKIAAAQQgHgGgBgJg");
	this.shape_385.setTransform(900.3,555.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#B6CC26").s().p("AgTAnIABgRQgBgKgGgGIAAgSQAYgPAGgGQAQgNAFgQIgQA/QgHAGgCARIgBAJQgBAPgIAIQgEAFgFACg");
	this.shape_386.setTransform(900.4,549.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#CEE4C5").s().p("AgGAZQgFgSAAgZIABgNIAWAkQgFATgLAIIgCgHg");
	this.shape_387.setTransform(902.6,535.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#1F8212").s().p("AgTBIIgGgfIAdh0QALAIAFATIgBANQAAAaAFARIACAHQgQAggKAQQgCAHgDAEQgCACgDAAQgEAAgFgEg");
	this.shape_388.setTransform(899.5,537.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#6AAA2F").s().p("AgLAYQgCgIAEgQIACgIQADgNAIgMIAJgKIAAAZQgHALAAATIAAAgQgPgHgCgNg");
	this.shape_389.setTransform(891.1,567.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#D4EAD0").s().p("AgHgDIAHgMIADADIABABIACACIACAZQgJgEgGgPg");
	this.shape_390.setTransform(866.8,552.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#25B139").s().p("EhB+AAGQAIhEANgtIAPBZQAJAygEAmQgLAGgOAUQgOATgOAFIAMhygEBBWABeIABgQIAHhaIAJg2QAFggAIgVIAIBFIAPBkIgHAUIgnAlQgGgFgBgIgEBCEABMIABACIgDACg");
	this.shape_391.setTransform(445.6,566.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#6D9709").s().p("AAEAuIgBgBIgDgDQgMgQgCgZQgEgjgDgHIAMAEIAJACQAFAAAFgFQADgDADgEIAGAAQgFANAAAiQAAAggLAQg");
	this.shape_392.setTransform(866.9,546.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#B9D9A7").s().p("AAAANIgCgFIgDgIQgBgEADgFIACgDIAHAHIAAASg");
	this.shape_393.setTransform(868.4,540.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#729F0C").s().p("AAHAWIgOgTIAOgXIABgCIAAAtg");
	this.shape_394.setTransform(860.1,541.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#89A807").s().p("AAAArIgLgEQAAgKgJgcQgHgXABgPIAHgGIAuAIIAAASIgDAXIgCADQgDAFABAFIADAIIADAFQgDAFgDADQgEAEgGAAIgKgBg");
	this.shape_395.setTransform(865.8,538.2);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#198F27").s().p("AgKAHIgBgJIAPgMIAIAGIgJARIgGAGQgGgCgBgGg");
	this.shape_396.setTransform(863.6,532.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#58A216").s().p("AgIADQADgEADgEQAEgEADACQAFAEgDAEIgHAIg");
	this.shape_397.setTransform(864.8,531);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#2F9B4C").s().p("AgOAJQAKgJAAgCQAEgIAIgGQAEgDAGgDIAAAOIgdAfQgKgIAHgGg");
	this.shape_398.setTransform(196.8,571);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#61A136").s().p("AgLAEQACgagIgLIAGgHIAeA+QgGACgEAEQgIAFgFAIQgJgMACgZg");
	this.shape_399.setTransform(196.8,566.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#0D8429").s().p("AgIABQgBgNAJgMIAEAEQAHAJgCALQAAADgIAUIgBACg");
	this.shape_400.setTransform(185.2,552.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#056E02").s().p("AACAcQgNgbAOgfIACA3IgBAHIgCgEg");
	this.shape_401.setTransform(184.7,546.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#74AE39").s().p("AgSAJIAkgyIABANIgBAyIgDADQgDACgBAEQgBAIgCADQgNgJgNgYg");
	this.shape_402.setTransform(199.8,555.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#A3C22A").s().p("AgXATIAAAAQATgmAcgMIgCANIglAyg");
	this.shape_403.setTransform(199.4,553.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#52860C").s().p("AgCAgQgHgRgMgFIATghQAKgTAOgLIAAAUIAAATQgJAcABApQgKgFgGgSg");
	this.shape_404.setTransform(173.9,557);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#379B39").s().p("AgKBJQAAgYgCgMQgDgTgKgOIAAgSIABgBQAEgJAUgSQARgQACgOIABAAIgBASQgBAFABAIQAAAIgHADQgMAGACAHQAAACAJAMIAAAAIAAABIAPArQgIAEgKANQgIAMgJADIgBAAg");
	this.shape_405.setTransform(178.7,555.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#6CAA44").s().p("AgDg1QAIARgBAeQgCAlACALQgBAHgDADIgDACg");
	this.shape_406.setTransform(186.2,543.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#DDECDC").s().p("AgFAiQgEgBgBgGIgBghIACgOIABgGQACgEADgDQALANAEAUIgBABQgFAFABALQAAALgDAFIgHABIgCAAg");
	this.shape_407.setTransform(207.2,551);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#80B451").s().p("AgGABQgFgHAKgHIAKANIAAAJIgFAFIgKgNg");
	this.shape_408.setTransform(219.8,520.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#93C06D").s().p("AgJAEQAGgMAMgCQADAKgMALg");
	this.shape_409.setTransform(316.8,520.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#6DAC39").s().p("AAOAdQAAgIgKgGQgKgIgCgEIAAgZQAAgQAHgJQAGAPASAeQAMAbgGAXgAgXAcQAAgGgCgCQgCgEgDAAIAAgBIAAgfQAIAFAAAIIACAFIAEAJQACAEAIAHQAFAHgKAEIgGACQgFAAgBgHg");
	this.shape_410.setTransform(19.2,562.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#68AE37").s().p("AgSAwQADgUgEgbIgHgvIABgGQAEAAABADQACADAAAGQABAKAMgFQAIgEgEgHQgHgHgDgFIgDgJIgDgFIAOAHQACAEAKAIQAKAGAAAHQgJAJAEAJIAMAOQgHAkgjAtg");
	this.shape_411.setTransform(18.7,569.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#22AF3B").s().p("AghAqIAAgWIAAg/IAAgNQAAgIAHgEIADAeQAGANAdgPIANAKIAHAuQAEAcgDAUQgTgIgMAGQgNAHgIAAQgRAAADgbg");
	this.shape_412.setTransform(13.5,568.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#078128").s().p("EBBvAA+IgCgIIgBgCQgEgOgGgGIgHg1QgEggAKgWIAYA5IAIASIAAABIgIBLQgGgFgEgJgEhBvAA5QAAgIgIgGQgRhFAQgrQADAMAOAdQAMAZABAPQgHAJAAAQIAAAag");
	this.shape_413.setTransform(437.7,556.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#2ABA37").s().p("AAfCgQgHgKgGgEQgLgHgQAFQgbAGADgcIAHh/QgBgIAGgUQAGgTgKgKIAAgGQAUgZgMgVQAGgIACgRQACgSAEgIIAHALIAPCaIAHAgQgBATAGAsQAFAogCAXIAAAHQgEgCABgDg");
	this.shape_414.setTransform(214,552.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#0D8E32").s().p("AgKAVIgIgQIAfgkIAEAHQADAHgBAIIAAAUIAAABIgQAUQgHgDgGgIg");
	this.shape_415.setTransform(18,538.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#6C980A").s().p("AgGAkIgBgRQAAgOgGgJIgBgBIAAgUQAAgLAHgIIAWAyQgCAdgTAKIAAgJg");
	this.shape_416.setTransform(35.6,545.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#BFDAAD").s().p("AAAAVQAAgMgHgGQABgQABgHIACgDQADgLAGgHIACA0IAAAEIgIAbQAAgEAAgRg");
	this.shape_417.setTransform(26.7,546.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#799E0E").s().p("AgGAyIAAgJQgBgTgEgcQgKgrAAgNQADALARABIAOAEIAKADIAAANQgIAHgDAKIgBAEQgCAHgBAPIgIAzQgFgDgBgLg");
	this.shape_418.setTransform(25.1,545.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#229227").s().p("AgLAHQAGgIACgFIAAgBIANgOQACAEABAFQAAAGgFAHIgNAWQgKgHAEgJg");
	this.shape_419.setTransform(22.7,532.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#399A3A").s().p("AAAAkQgMgMgGgMQAAgXAIgZIAAgBIAdgTIAABxIgTgVg");
	this.shape_420.setTransform(41.2,556.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#279B10").s().p("AgTCXQgNgCgBgLQACgNgCgFIAAgHIAAgSIAChAIACgJQANg7AGhTIAAgCIABgPQACgJAHgGQAEADABAKQAAAKAGACIgBACQgDAGADAIQADAMgBAEIAAATQgBAMAIAHIABAHQgCAgAIA7QAJA/gBAdQgHAQgQADQgFABgGAAQgIAAgLgCg");
	this.shape_421.setTransform(57,579);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#72A92C").s().p("AgRAoIABgTQAAgMgHgGQAAgDgDgMQgCgIACgGIABgCIABgSQACAIAFAEQAGAFAIADQACABAZADIAEAAQgOAngeAeg");
	this.shape_422.setTransform(60.6,569.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#23AC3B").s().p("AgGA4IgegsIAAgrIAKAGIAAAAQAGACADgKIAEgYIACgDQALgQAGgDQANgGAQAOIACACQgFBSgNA8IgDAJg");
	this.shape_423.setTransform(52.1,573.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#71A82F").s().p("AAAAmIAAAAIgKgGIgBgUIAFgMIAEgMIADgJQAEgKAGgGIABAoIAAADIgEAYQgDAIgEAAIgBAAg");
	this.shape_424.setTransform(49.5,567.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#0E8325").s().p("AgLgSQAHgEAAgJIAJgYQANAugJArIgFAWg");
	this.shape_425.setTransform(45.8,553.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#379938").s().p("AgUBDQgCgUgDgGIAFgXQAJgrgNguQADgOAKgHIAAAgQgBAUADAGQAGALAXgCIAGAKIAAAyIgNAKQgOAPgGAQQgDAIgBAJQgGgKgDgQg");
	this.shape_426.setTransform(48.8,555.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#8AB42A").s().p("AAXAzQgZgDgCgCQgJgCgFgFQgFgFgCgIQgKgtADgfQAHAFABAMQgBALAEAGIACACQACgGAJgBIAEAAQAFgBADgDIAeAyIAAATIgBABIgHAGIgDAAg");
	this.shape_427.setTransform(60.8,561.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#9EC12A").s().p("AgDA2QgEgGAAgLQAAgMgIgFQgKgoACgjQAIAEAAAJQABANABACQAEAKAEACQAFADAHgMIAIAHIAJAZQgUAGAGAMQADAHAJAMQgDADgGABIgEAAQgJABgBAGIgCgCg");
	this.shape_428.setTransform(59,554.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#2FA11D").s().p("AgEA0IABgdQgBgDACgcQAAgTgIgMQAEgGACgOQACgNAGgGIAHAGIAAATQgKAbACAnIABBCQgJgKABgRg");
	this.shape_429.setTransform(479.1,573.5);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#EDF5E6").s().p("AgOAQIgHgGIABgTQAFgDAEgCQAQgHAQAOIAAABQACAXgZAAIgMgBg");
	this.shape_430.setTransform(481.7,564.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#2F9F4F").s().p("AgSAEIAGgKIAIgPQAEgIAJgGQAEgDAGgCIAAAmQgGACgFAFQgEAGgDAIQgEAOgHAGIgHACg");
	this.shape_431.setTransform(470.8,563.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#5CAF3D").s().p("AgWAZIAIgGIAHgDQAHgFAEgNQADgJAEgFQAFgGAGgCQACAGgFASQgFAQAIAJg");
	this.shape_432.setTransform(470.4,565.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#389A37").s().p("AgXAvQgDgSgDgIQAJgKgBgQIgBgdIAAgUQAAgMAHgGIACAMQACAFALgFQAIgEAIAEIAOAHIgIBRQgGACgEADQgJAGgEAIIgIAQIgGALQgGgKgCgRg");
	this.shape_433.setTransform(470.5,556.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#89B92C").s().p("AAcBGQgQgOgPAIQgFABgFADIgHgoQgEgYADgQIAAgCQACgDAFgCIAIgDQAMgBACgJQAKAKAEAWIgVgKIAdA8IgBAUgAgdgrQABgSgBgIQAIAKAAAPIgBAaQgHgKAAgPg");
	this.shape_434.setTransform(480.9,556.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#B2CA25").s().p("AgQA2IACgaQAAgPgJgKIABgMQAZAAAKgRQAKgYAGgKIAAATQgDAOgKAbQgHAXAFASQgBAIgNACIgIADQgFABgBADIgBADgAgZgcIgDgNIAUgBQACAIgHACQgKAEgBACIgBgCg");
	this.shape_435.setTransform(480.3,549.4);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#58BB4C").s().p("AAAADIgwgCQANgBAaAAIA6gCQgSAFgbAAIgEAAg");
	this.shape_436.setTransform(453.4,576.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#238638").s().p("AgOAgQgJgYABgOQAAgVAQgRQAJAiAUASIgdAlQgBgLgHgCg");
	this.shape_437.setTransform(426.8,580.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#51AA2E").s().p("AgSA3QAGgLgDgLQgCgGgMgSIgGgfQgEgSADgOQAGADABAOQAAAIAFADQACACAFAAQAJACAHgFQAEgDACgDQACgEABgEIAVAZIABAAIAIAfIgQAaQgJAEgJAKg");
	this.shape_438.setTransform(438.9,594.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#61B828").s().p("AAIAxQgFAAgCgCQgEgDAAgIQgBgOgGgDQAAgXgDgMQgEgVgQgMIAcACIABAGQABAIAHALQANATACADIAHANIAIATQgBAEgCAEQgCADgFADQgFAEgHAAIgEgBg");
	this.shape_439.setTransform(436.3,587.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#279C14").s().p("AgNgPIAbACIACAdQglgEAIgbg");
	this.shape_440.setTransform(432.8,578);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#22A740").s().p("AgUAPIgDgdQAJABARgDQAPAAAGAOQgQATgTAAIgJgCg");
	this.shape_441.setTransform(436.6,578);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#1D9F40").s().p("AgFACQgIgKgBgIIgBgGIAXgCQAIAEAAAPQgFADADAMQACAIgDAEIgEADQgCgEgMgTg");
	this.shape_442.setTransform(437.3,584.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#218228").s().p("AgHAJQAAgJgBgFIAOgOQAGAHgEAMQgEAQABAEQgKgEgCgHg");
	this.shape_443.setTransform(439,561.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#259C11").s().p("AgPANQACgNAGgHQAHgIAQABQgEAQAEANIgPABQgKAAgGgDg");
	this.shape_444.setTransform(432.7,572.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#2AAF41").s().p("AAEAQIgUgCQgEgNAEgQIAIgBQANABAIAIQAIAHgDAIQgCAJgJAAIgDgBg");
	this.shape_445.setTransform(436,572.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#25A823").s().p("AgGgBQAAgOgBgHIAAgBIAAAAQAQAGgBAOQAAAGgGAVQgIgMAAgNg");
	this.shape_446.setTransform(432.9,565.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#61A439").s().p("AggA+QAKgsATgmQAOAGgBgQQgBgdAQgRIAIAGIAAAUQABAMgJAGQgGAIgDALIgBAFIgCAZQgEAdgdAfg");
	this.shape_447.setTransform(429.6,556.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#309D4F").s().p("AFGA6IAHgbQADgSAIgKIAMAQQAegfAEgdIACgaIABgEQADgMAHgIIAABkIAAABIgBAAQgIAJABAQIABAZQgMAEgMAKIgUARIgBABQAHgagggIgAlpAgQgGgFgEgKQgGgQgHgDQACgKgMgSQgMgRAGgMIAQATQAIAKAVAUQAOASgNAVIAAAGIgHgDg");
	this.shape_448.setTransform(391.8,562.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#4FBC33").s().p("AASAQIg0AAQAFgdAagCQAXgCAKAPQAGAJgBAEQgCAFgNAAIgCAAg");
	this.shape_449.setTransform(451.7,572.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#5C9E3A").s().p("AAAAwIgCgBQgFgDAAgJIACgXQAAgMgJgJIAAgTIAAgNQAAgJAOADIAAAHQABAGAFAGQAJANAAAGIAAA4IgCABIgJABIgEgBg");
	this.shape_450.setTransform(458.4,561.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#2E9D50").s().p("EAgjgAYIgIgPQgGgKABgHQAHgCAGAGQAGAIACABQAwAugKA2gEggcAA4QgBgOgKgSIgSgdIgFgHQgBgEgCgCQAAgGgKgNQgFgGgBgGIAAgHIAIAAIAIAHIADACIADACIABACQAFALAMAMIAUAUIABABIAAACIAAAqIAAAMg");
	this.shape_451.setTransform(671.3,562.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#279A11").s().p("AAHBAQgFgGgJgBIgSAAIgIgHIABgFQAPgRgQgPQAIgKAAgPIAAgaIAEgRQAEgKAGgFIAPACQAQAMAEAUQADAMAAAYQgDANAEATIAGAfIgMAHIgFABQgFAAgFgHg");
	this.shape_452.setTransform(432.5,589.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#AAF10A").s().p("Eg6KAAaIgJglIgQgsIAAgBIABgGQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABABIAEABQAKAVAMAFIAuBeIgmAHgEA5nAAhIAnhKIAVgTIAAgBIAAABIABAIQgBAHgDAJQgGARABAIQgHAIgFARQgFATgEAHQgLAJgHAAQgKAAgDgQg");
	this.shape_453.setTransform(554.5,560.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#23AF3B").s().p("AALBTQgagBgLgGQABgEgKgIQgIgFAEgJQAGgKAAgRQgBgYABgEIgBglIAAgCQgBgXAJgQQACAKgDAWQACARAUAJQAWAJAJgEQAKgEgDgUQAJAKgBASIgBAcIAAAtQABAPgEAGQgFAGgMAAIgJgBg");
	this.shape_454.setTransform(947.7,566.9);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#3CA933").s().p("AATBMIgOgTIgHgXQgGgOgJgIIgHgFQAEgIgEgIIgJgQQgBgIAGgRQADgJAAgHIAAgIIgBgBIAAAAIARAHIAAADQABAKAMAFQAHAUAXAYQgBANgFAcQgEAYADARg");
	this.shape_455.setTransform(931.8,561.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#F2F9F7").s().p("AgHAAQgCgTALgKIAGAkQAAABAAAAQgBABAAAAQAAABAAAAQABABAAABIgBAAIgDACQgCACgBAGQgBAGgFADQABgFgDgag");
	this.shape_456.setTransform(940.4,554.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#2B8239").s().p("AgXAVIgHglIAAAAQANgHAFgOIAFgZQAGgCABgHQAAgFACgDIACgCIACAAQAXAjACAsQAAASgIA/IgKACg");
	this.shape_457.setTransform(940.6,564.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#99BD29").s().p("AgVAOIAAgDQAHgFAOgQQALgOALgFIgCAJIgBADQgDAJgHAJIgRAdQgNgGAAgKg");
	this.shape_458.setTransform(933.1,553.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#3C8E38").s().p("AgSAKIASgbQAFgLAEgIIABgEIACgIIAHgFIAAAmIgIBFQgWgYgHgUg");
	this.shape_459.setTransform(934.1,555.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#2C983C").s().p("AgYBhIgCgSIACgXQAAgNgIgIIAAAAIgBgmIAkA8IAKgCQAIg+AAgTQgCgtgWgiIgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAUABIAGABQAHADADAHIABATQgJAPABAXIAAACIABAmQgBADABAYQAAARgGAKQgEAJAIAGQAKAHgBAEIgHAAQgKACgKANQgJAOgIADQgLgEgDgKg");
	this.shape_460.setTransform(941.6,566.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#4E9839").s().p("AgOg7IAcASIABABIAAAsQgBAWgFAQIgCAFIAAABQAAAJgHADg");
	this.shape_461.setTransform(950.3,546.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#429B40").s().p("AAHApIgFgBIgVgBIgGglIgBgBIAPAHQAIABADgNIARguIAAgBIAJAIQACARgFAdQgFAjAAAOQgDgIgIgDg");
	this.shape_462.setTransform(943.2,551.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#1B7911").s().p("AgLAHIAAAAQgIgHACgKIAFgQIABgEIAHgBIAIANIAJASQAFAMAAAIIgPAMQgDgQgLgJg");
	this.shape_463.setTransform(957.5,547.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#1FA73E").s().p("AghBPQAAgTAGgwQAFgogDgZIAAgNQABgIAHgEIACAMQACAGAJgBQAZgEgBgbQAIALAAASIgBAdQAJAmgCBGIgWgOQgEgEgEgQQgEgOgKgGIAABJg");
	this.shape_464.setTransform(825.9,578);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#E9F3E6").s().p("AgHAuQgIgIABgPQAAgTgCgEIACglIAAgBQAKgLARAGIAEAHQgCAnABATQAAANgEAFQgFAGgKAAIgEAAg");
	this.shape_465.setTransform(281.3,577);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#DAEFDF").s().p("AgFAOQgJgCgCgKQgCgOAXgBQAUAJgNASIgNAAIgEAAg");
	this.shape_466.setTransform(281.5,570);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#7ECA1E").s().p("AgDgFIAFgFQAAACAIAIQAFAEgGAGIgVABQADgLAGgFg");
	this.shape_467.setTransform(265.2,571.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#F6FAF4").s().p("AgHAwQgWgBgOgPQgKgeACgMQAKgYAWgKIAHgCIABgBIAVgBQAYAIAOAQQARAlgxgEQgUgCgHAFIAAABIgBgBQAGAOAKAAQAGAAAQgIQAegDgKAXIgOAIQgVADgMAAIgGgBgAgRgNQAUAJANgHQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAgBgBQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgHgFgHAAQgIAAgJALg");
	this.shape_468.setTransform(265.2,577);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#78AA2D").s().p("AgIAGQgOgVAAgMIAegMIAHAMIAIAsIgFAEQgHAGgCALIgBAAIgHADQACgPgLgUg");
	this.shape_469.setTransform(263.1,568.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#90D43D").s().p("AAEAjQAKgXgdADQgHgGgMAAIgTABIAAgBQAHgFAVACQAwAEgRglIAOgHQgGAQAMAMIAcASQgCADgYACQgGAAgDACIgDAIIAAAHIAAAAIgGABIgGAAg");
	this.shape_470.setTransform(269.4,577.3);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#75C529").s().p("AgXASIgCgEIgIgeIAOgIIAGAAIAGAAIApANIAAABQgCAEAAANQABAMgPABIgXAFIgDAAQgJAAgGgHg");
	this.shape_471.setTransform(271.8,583.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#399A56").s().p("AAXAMQgigIgLgNQAIgEAMAEQANAEAGgCIACACQACADACADIABAIIAAACIAAABg");
	this.shape_472.setTransform(276.7,575.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#71C710").s().p("AAAATIAAgCIgBgIQgBgEgCgDIgCgCIAEgRIABAAIACgCIAFABIABAAIgBAlIgGABg");
	this.shape_473.setTransform(279.1,575.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#309E4F").s().p("AAHAqIgEgBIgBAAIgPgYQAIgdgggVIABgGQATgGARAMQADAKADAEQAEADAIgCIAFgCIAIARQgYABACAPQABAKAKACIASgBIAAAMQgTgFgKALg");
	this.shape_474.setTransform(278.9,569);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#156C11").s().p("AgJA+QgEgDgCgKIgBhMIAJgVQAGgNANgCQAMAwgSBMIgEACIgFABQgEAAgCgCg");
	this.shape_475.setTransform(280.6,560.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#F6FBF6").s().p("AlhBDIgTgCQgigZANgsQAMgQAVgFIAKgBIAMAAIABAAQAMACABgHIgBgKQACgMACgEQAEgIAMgBIAEADQALAKgBASIAAAhQgEALABARQAAAGAEAXIgNAMIgPgDQgJgBgGADQgHABgIAAIgFAAgAltATQgBAKAFAHQAGAHALAAQAJAAAGgGQAFgGAAgKQAAgXgVAAQgUAAAAAVgAE/BBQgMgIgEgFQgIgIAAgKIAAgcIABgKIAHgMIAKgHQAcgEANABIACABQALgEgBgIIgBgPQAFgMAKgBQAQAAAAAOQgBAUACAmQAAAigFAXIAAABgAFOABQgNAKAAAKQAAAKANAJQATANAKgZQABgVgFgFQgDgCgIAAIgOABg");
	this.shape_476.setTransform(288.4,575);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#2C913C").s().p("AgMA/IAAghQABgSgLgKIgEgCIAChJQAFAEAFAIIAFAKQAJASADAGQAAALAOAWQAMAUgCAOQgWALgJAXg");
	this.shape_477.setTransform(260.5,568.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#74AC2C").s().p("AgXAPIgMgUIgLgRIAAgGIAFgHQABgEACgCQACANAEAEQAGAJAMABQAEgEgGgKQgGgKADgEQAJgEAIAIQAIAJAEACIABAAIACgGIAAgJQABgIAHgDIAAAVQgBANgDAIQgIAUAHAKQAHALAYACIgNAAIgJACQgVAEgMARQgCgRgNgXg");
	this.shape_478.setTransform(249.8,569.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#89B72A").s().p("AgJAbIgFgKQgEgHgGgFQgGgOgDgpQAPADAKAOIAQAXQAGAGACAAQADgBACgHQAFAKAEAPIAEAaIgeAMQgEgFgJgTg");
	this.shape_479.setTransform(260.5,560.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#187E14").s().p("AgYBFIgCgeIABAAQALgTANglQAMgoALgTQAGAtgCAZQgCAPgQAaQgQAbgEAOg");
	this.shape_480.setTransform(295.9,543.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#24AB46").s().p("AADAXIAKhGQAQA6gDAlQgVgKgCgPgAgaAKQAAgOAIgEQAAAGAGAHIAIAMIgHAGg");
	this.shape_481.setTransform(232.8,574.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#7EAD2A").s().p("AgVAbQgJgIABgJIASgnIAGgLIAfAAIAEAHIgVAkQgKAWgGAQQgBgDgNgLg");
	this.shape_482.setTransform(232.3,567.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#36A24A").s().p("AgEADIgEgGIARAAQAAADgCACQgBACgEAAIgGgBg");
	this.shape_483.setTransform(235.8,563.4);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#4DBD2A").s().p("AgFDGQgOgNgNgUQgTgfgLgQIgPgMIAeg/IgWAMIgIhSIAAAAIAPANIAHAWQAFANAJAIIAJANQgCARAKAXIARAmQAIgWACgoQACgqAHgRIABABQAKALAPAcQANAcANANIAAAAQgBAIAFAJIAKAPQgIAMACAaQACAagKAMIgsgsQgIALgCAUQgCAYgEAIIgJgJgAAoALQgNgPgQgEIgHgGIAIgUIAAg5IAAhyQAGgEADAFQADAFADAAIAPBMQAEAGACAUQACARAHAJIAAAWQgBANAIAIIABAUIAAArQgHgEgSgUg");
	this.shape_484.setTransform(42,571.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#309D50").s().p("AARAuQgFgHgEgKQgIgVgJgIQACgIgMgTQgIgMABgIQAAgFACgEQAEAJALAEQAFALALAMIAVAUIgBA5QgFgEgFgHg");
	this.shape_485.setTransform(40.4,562.4);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#81B433").s().p("AgkAAIABgCQAJgKAFgDQAJgGAMAPQAEAGAMAAIAVAAIAAADQgXgBgMABIgDAAQgQABgLAIIgHAFg");
	this.shape_486.setTransform(411.1,562.5);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#5FA33A").s().p("AgOAtIAAgEQAGgIgCgUQgDgTAHgJIAVgmQAAA0gPA4g");
	this.shape_487.setTransform(416.3,558.3);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#6CB432").s().p("AgGgJQAYAFgSAOQgGgFAAgOg");
	this.shape_488.setTransform(407.3,558.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#0D872A").s().p("AgSAXQACgNgCgHIAlgsQACARgKAbIgVAnQgIgHAAgMg");
	this.shape_489.setTransform(416.7,552.6);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#98D8A1").s().p("AggABIgCgBIACgDIBDACIAAADIgjACQgTAAgNgDg");
	this.shape_490.setTransform(376.9,577.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#6ABC75").s().p("AgVACIAAgDIArAAIAAADg");
	this.shape_491.setTransform(382.6,577.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#BBE09B").s().p("AgWABQAKgEAMgBQADgBAUAAQgJAFgNADIgXADg");
	this.shape_492.setTransform(387,577);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#63AC3D").s().p("AgCAaIgFgHQgFgKACgKIABgCQADgIAHgKIAKgKIAAAeIgGABQgJADADAFIAJAIIACADIgHANIgFgGg");
	this.shape_493.setTransform(364.2,566.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#2D9D52").s().p("AABBmIgEgJIgPiXIAAguQAGAEAKASQAHAOAOACIAAAtIgKAKQgJAKgBAHIgBACQgDALAFAKIAFAHIAGAGQACAVgJAqQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_494.setTransform(363.4,565.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#F9FBF9").s().p("AgeBHQgBgsACgWQABgNgHgGQgGgFgQAAIgCgDQgEgKAJgIIADgEQAWABAAgPQAAgVADgDIAHgGQALgHAPgBIAEAAQAMgBAXAAIAPAKIgBALQgEAEgJABIgPACQgTgCAAAQQABALAMACQAQACADADIABAAQADATgTAAQgOABgDAHQgCAEADALQgEAQABAZIABAjIgBAGIgQALQgagDABgYg");
	this.shape_495.setTransform(410.2,572.6);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#2B994E").s().p("AgtBrQgIgIAFgMQAFgPgCgFQAQgYAEgOQAGgWgLgTQANgMACgYQACgdAGgKIAMgVQADAEAAAPQABAMAMAEIAXgcIgBAaQgBAQAJAJIgEADQgIAJAEAJIABAEQgIAEAAAJQgQALABAaQgKAKgIAQIgMAcQgMAVgSAIg");
	this.shape_496.setTransform(400,573.2);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#ABEE1B").s().p("AghAsIAig+IAagkIAHAHIgSBDIgMAUQgEgBgNANQgEADgEAAQgGAAgGgLg");
	this.shape_497.setTransform(398.8,560.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#197116").s().p("AgTAjQAAgPgDgDIAShDQALACAFANQAGAOAEADQACAKgCALIgGAUIgWAcQgMgEgBgMg");
	this.shape_498.setTransform(402.8,560.7);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#CDEECC").s().p("AgNACQAFgFAIABIAOACQgHADgJAAIgLgBg");
	this.shape_499.setTransform(381.8,563.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#3B7714").s().p("AgJANQgDgCAAgEIgCgIQAOgPAPAEIAAAEIgKALIgFAIQgCADgDAAIgEgBg");
	this.shape_500.setTransform(376.5,568.3);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#54B52D").s().p("AgTAKQgEgKAOgYIACAJQAAAFADABQAFADADgEIAGgIIAKgNQADAogJAXQgcgLgFgLg");
	this.shape_501.setTransform(376,570.6);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#EEF8F0").s().p("AgHAeQgDgMgLgCIADgGIAIgVQAFgMgBgJQAAgFgBgEQAEgHAKADQAMADADgCIgDAEQgOARgDAXQgCAPAAAgQgDgDgEgOg");
	this.shape_502.setTransform(370.5,571.7);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#E0F1DB").s().p("AgEAGIgDgCIgKgHQgDgFAKgDIAHgCIAVAQQgCADgBADQAAACABADQgKgIgKAAg");
	this.shape_503.setTransform(365.8,568.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#3BA140").s().p("AgFAHIgCgHIAHgMIAIAHIAAASg");
	this.shape_504.setTransform(376.5,544.6);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#709C0C").s().p("AgdAwIAAgTIA7hsIAAAhQgQAOgBAaQgBAhgEAIQgCAGgBAQQgBAPgEAIg");
	this.shape_505.setTransform(380.3,541.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#BDCF25").s().p("AgUAXIgGg2IAdgtQAAAIAHAFIAPAHIACAHIgLAiQgGATgBAOQgIAQgGArQgMgVgDghg");
	this.shape_506.setTransform(373.2,550.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#0E8F2C").s().p("AgVgxIATAXQAKAPAOAGIAAALIgdAtg");
	this.shape_507.setTransform(371.3,542.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#6DAA3A").s().p("AgHAhIgOgOQAFgIAQgaQAHgPAHgKIAJgKIAAAaIAAAHQgJAKABAQIABAeQgCAIgGAEg");
	this.shape_508.setTransform(352.5,552.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#98BC27").s().p("AAFAdQgJgSgGgEQAAgSgRgSIgFgGIAAgHQACgDAEABIAIACIAzA/IgGAZQgOgCgIgPg");
	this.shape_509.setTransform(362.6,554.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#4AB72D").s().p("AALBrQgLgNgPABQgIgPABgXIAAgmIAAhSIABgXQABgNgJgIIAAgTIAXAZIAAABIACAnQAEAXAPAOIAPCXQgGgCgNgSg");
	this.shape_510.setTransform(360,562.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#549015").s().p("AgIAIIgCgmIAAgBIAAgNIAFAGQAQASAAATIAAAtQgOgOgFgWg");
	this.shape_511.setTransform(360.4,555.5);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#3D9F26").s().p("AACgVIAEgOQABgIAIgDIADgBQAKAEAAAIIgDANIgJALQgHAKgIANQgPAbgFAIIgIABg");
	this.shape_512.setTransform(352.3,550);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#157808").s().p("AgIAlIgDhKIABAAIAWAsIAAAFIgDABQgIADgBAIIgDAOg");
	this.shape_513.setTransform(352.9,544);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#F5F9F0").s().p("AglgaQAFABANgJQALgHAIAIQAKAQAKgJQAOgNAEACQgGAJgCAcQgCAZgOAMIAAABg");
	this.shape_514.setTransform(395.4,568.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#34B649").s().p("AgYACQgBgQAXgHQAaABACAUQAAATgWACIgGABQgTAAgDgUg");
	this.shape_515.setTransform(390.3,569.1);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#348F24").s().p("AgQAdIAAgTQACgKAGgIQAFgFABgHIABgKIAAgDQAPACADAKQACAHgEANIgZAjg");
	this.shape_516.setTransform(400.1,555.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#27B13E").s().p("AgXAhQAJgXgDgnIAAgEQAUAAALAKQALAJgBAPQgCARgMAJQgJAHgOAAIgKgBg");
	this.shape_517.setTransform(379.8,570.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#187013").s().p("AgMgMQAIgrAHgQQAAAUAQAhQgQAOAAAZIABAjIAAAHIgOAJQgOgnAMgtg");
	this.shape_518.setTransform(373.9,559.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#40780E").s().p("AgSAiIgBgiQgBgaAQgOQAEAIAFASQAEANAHAHIAEAFQABAOgOAHIgZAJIAAgHg");
	this.shape_519.setTransform(376.2,561.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#A4ED0C").s().p("AATBMQgHgCgPgXIgIgTIgIgaIgWhEIAHgNIAmA/IAmBLQgPANgHAAIgBAAg");
	this.shape_520.setTransform(158.4,561.8);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#79CD1F").s().p("AgJgPIATANIAAAFIgHANQgIgKgEgVg");
	this.shape_521.setTransform(153.9,553.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#05842A").s().p("AROBSQgHgJgEgMQgGgSgEgIQgPgigBgSQABgOAGgVIALgiIAOAGIAeAhIgIB9IgNAJIgEgFgAxmACIAAgEIACgUQABgMAFgHIAGgGIAMgPQAJgLADgJIAAgDIAIAGQAKAggFApQgBALgLA9g");
	this.shape_522.setTransform(267.6,553.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#729A09").s().p("AgYgoQAFACAKAKQAJAEAFgQIACACIANAQIAAABQAHAFgDAFIgEAKIgBABQgCAJgKAMIgLAOIgFAHQgQgkABgug");
	this.shape_523.setTransform(156.8,545.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#1EA340").s().p("AgcBEIgCgHIABgBIAIg8QABgigRgZIAQgNQAHADALAMQAGAHAMgDIACgCIAFgCQACgCACAEQACAEABAFIgKgDQgDAAABAGIABACQAEAIAPAdQgPAMgQAZQgUAegIAKQgEgCgCgDg");
	this.shape_524.setTransform(146.1,580.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#2A8F38").s().p("AgdA/IAAhSQAPgNALgTQARALABgNQACgQAFAAIAIAaIgBABQgIAMACASIAAAgQgGAMgOAPIgXAYg");
	this.shape_525.setTransform(154.3,569.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#83B02A").s().p("AgLAoQgRABgFgKQAOghAmgpQABAEAJASQAHAMgCAJIgXAsQgFgFgRABg");
	this.shape_526.setTransform(124.6,564.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#2E9D4D").s().p("AgKgPQADgFAGgTQADgOAKgHIAAAtIgBACQgJANACAWQABAcgEALQgNghACgrg");
	this.shape_527.setTransform(69.8,572.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#E6EFE7").s().p("AgDALIgCABIAAgBQgCgFADgGIAEgLQAGAEABAHIgBAMQgFgEgEADg");
	this.shape_528.setTransform(63.6,556.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#33A04D").s().p("AgLgGQgJgMgDgHQgGgMAUgGQADACADALQACAJAHADIABAAIABgBQAGgDAEAEIABAKQABAGAFACIgHAsg");
	this.shape_529.setTransform(62.3,559.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#BCD024").s().p("AgCAqQgEgCgEgKQgBgCAAgNQgBgJgHgEQgIgNACgZQAGAFAGgDIAJgIQABAKALgBQANAAADAFIABABIACABIgRA7QgFAKgFAAIgCgBg");
	this.shape_530.setTransform(58.6,548.9);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#499422").s().p("AgDAJIgEABIAIgTQAFADACADIAAACIAAABIgBAKIgKgBg");
	this.shape_531.setTransform(61.8,545);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#98C58A").s().p("AgCAHIABgJIAAgBIAAgCQgCgEgFgCIAIgfQAHAOAAAbQgBAbACAMIgIAFg");
	this.shape_532.setTransform(62.8,545.2);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#9BBC26").s().p("AgiAWQAJgDAJgQIABgBQAYgWAPgVIAEgFIAGAMQgBADABADQgOALgLASIgSAiIgIAMQgQgGgBgTg");
	this.shape_533.setTransform(172.6,554.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#679210").s().p("AgXAjIAEgVQAKgDgCgHQgCgJAAgEQALAAAFgKIAGgIQADgFADgCIAJATIgEAGQgPAUgYAXIgCABg");
	this.shape_534.setTransform(173,551.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#4B9312").s().p("AgRAAQgFgwAAgOIACAAQAeA4ANAnQgDABgEAFIgFAIQgHAKgJAAQgGgDgCADIgCAGQABgYgDgng");
	this.shape_535.setTransform(172.3,544.6);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#06892C").s().p("AAKBVIglhYQAAgEgKgQQgHgOADgKIAAAAQASgFAQgXQAPgXAQgGIAKAZIgCABQgLAKgKAWQgLAZgFAIQgKANAKANIArBJIADAAIABgBIAAABQgKAQgIACIgEABg");
	this.shape_536.setTransform(166.8,546.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#339739").s().p("AgDBjIAAgeQgBgSgOgKIgIgrIAAhFIAtgaIAAAyIgVCSgAAahOIAAAAIABAAg");
	this.shape_537.setTransform(112.6,564);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#6CAC39").s().p("AgDApIgBgJQgBgGgFgEIAAg+IAAgBQAIADADAKQAGALAEADQAAAJgBAIQgCAWgKARg");
	this.shape_538.setTransform(115.6,551.9);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#599F3A").s().p("AgEA3IgEgeQgDgRgGgLIAcg/IAHAAIAAAtQgGAOAAAdQAAAegJAPg");
	this.shape_539.setTransform(90.9,577.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#0F8E2B").s().p("AACAYQgHgNgDgPQgCgKAAgKIAVAeIAAABIgIASIgBgBg");
	this.shape_540.setTransform(96.8,559.9);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#6CA838").s().p("AgKgiQARARAEAhIgVATg");
	this.shape_541.setTransform(90.1,567.2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#29984E").s().p("AgVA3IgOgXIAAAAIgCgUQAAgTALgYQADgIALgRIAKgSIABAAIADA9IAFgEIABgCIAWgUQAFAEACAGIABAKIgeA+QgIAMAAAUQgLgGgKgOg");
	this.shape_542.setTransform(88.2,572.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#459832").s().p("AgaAjQACgGAHgQIAkhGIAIANIAABFIgBADIgFADIgEg7IAAgCIgBABIgKASQgKAQgDAJQgLAXAAAVQgKgKACgNg");
	this.shape_543.setTransform(86.3,568.1);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#ACF409").s().p("AgQA3IgGgDQgEgDgCgEQgCgEABgGIAmhJIATgXQAFAJgEAJIgGAQQgWAugHAqIgKgGg");
	this.shape_544.setTransform(85.1,560.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#3D9D3E").s().p("AgLBrQAGgQAAgeQABghADgOQAHgfgYgfIgGgIQgCgJAIgEIASAXQAKgRABggIABgPQACgIAMgCQgKAkADA1QgKANABAVIABAjQgJAOABAbQABAdgHANg");
	this.shape_545.setTransform(102.1,561.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#26B239").s().p("AATBWIAAgQQAHAGABAJIgBARQgHgGAAgKgAgaA5IAQhkIAIg6QAFAFABAHQABAFgBAJQAAALACAKQADAPAIAOIABABQgHAJACANIAGAVIAAAmIAAAAQgkAMgIAhg");
	this.shape_546.setTransform(95.3,564.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#9EC029").s().p("AgWANIAtgsIAAATIgEADQgGAGgHANQgGALgGAGIgHAFg");
	this.shape_547.setTransform(91.9,553.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#71AE38").s().p("AgGAYIgPgVIAHgEQAHgGAGgKQAGgOAGgGIAEgEIAGAHIACATIgIA5QgNgGgIgMg");
	this.shape_548.setTransform(92.8,556.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#64A334").s().p("AgOgHIAAgIQAAgGACAAQAEgCADACIAFAHQALALADAFQADALgKAKg");
	this.shape_549.setTransform(119.8,548.6);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#9EE90F").s().p("AgMAlQgHgGgGgPIgQgyQAVAQATgEQAGgBAGgIQAFgJADgCQgBAGADAFQABADAEADIAGAEIAKAGIgDAMQgCAHgDAEQgCAGgCAOQgCALgNADIgKABQgJAAgIgGg");
	this.shape_550.setTransform(80.2,567.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#25B439").s().p("AgUAzIAGgpIAAgTIAHgsQAAgYALgPIALAuQAAAOAGAkQAEAggCASQgXgDgIAPQgGAIgIATQgCgRAEgZg");
	this.shape_551.setTransform(65.7,565.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#08862C").s().p("AgSAwQgDgKgDgDIgJgaIAXggIAJgFIAMgUQAEgGAHgDQAFgCAFAAIACAMIgkBTIgFAMQgDAGACAFIAAABQgIgDgCgJg");
	this.shape_552.setTransform(63.9,551.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#5DA01D").s().p("AgOAHQAAgZgGgPIAFgOQAPAJAGAXQAKAZAFAHQgFAAgFACQgHACgEAHIgMAUQgCgMAAgdg");
	this.shape_553.setTransform(65,544.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#6CA62E").s().p("AgdAQIgBgfIAAgDIABgXIACACQAEAEADAJIAAADQAGAKATgFQARgEAAgJQgBgJAAgEIACgDQAPAQgNAVQgKAPgVAdIgQAOQgIgMABgUg");
	this.shape_554.setTransform(590.6,570.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#78CB1C").s().p("AgOAPIAHgJQAGgKADgNQAIgYgBgeIAAgGIgBgDIAGACIABAAQACBOgRBRQgLgZgDgpg");
	this.shape_555.setTransform(583.8,577.4);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#7DCD1C").s().p("AgmAaIAKgSIAIgGQAUgQARgcIAUgDIABAJIgJAFIgxBNg");
	this.shape_556.setTransform(576.2,575.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#92DF13").s().p("AgHAdQgEgYgJgKIgCgJQgFgEACgFIAGgIQACgDARgKQAFgDADgEQADgFgCgGQAHAFADAJIAGAQIABADIAAAGQABAdgIAYQgEANgGALIgHAJQgFgKgEgYg");
	this.shape_557.setTransform(582.1,572.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#80AF2C").s().p("AgQAfIAAgDQgDgJgEgEIgCgCIAAgMIAHgIQAEgGABABQATADAAgKQgEgNACgFQAJAIAFANIAIAXIgBADQAAAFABAIQAAAJgRAEQgHACgEAAQgKAAgEgHg");
	this.shape_558.setTransform(590.2,564.9);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#2B8E38").s().p("AgcgPIAWgdQAMgSATgEIAEANQgHAOABAWIABAiQgRAcgTARIgJAFg");
	this.shape_559.setTransform(575.5,569.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#A6EF0B").s().p("Ay2AgIgDgNQgDgTgLgZIgSgsQAKgIAEAHIAGAJIABAAQAJAXAUAaIAJAMIAXAzQACAGgDAFQgDAFgGACQgRAKgCAEgASIBDIgHgEIAQgsQARgPAFgXIAfgrQAIgHgDgNIAOAHIgGASIgDAFQgGAMgEAVIgDANIAAAAIgTAtQgEACgBAGIgJANIgBABQgGAHgJAAQgEAAgGgBg");
	this.shape_560.setTransform(699,561.2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#82AD6D").s().p("AgGAAQgBgGAHgFIAHAHIAAABIAAAIQAAADgDACIgEACQgFgIgBgEg");
	this.shape_561.setTransform(577.8,551.5);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#56890A").s().p("AAFBDQgSgagKgXIAAAAIACgMQACgGAGgDIAEgCQACgCABgDIAAgJIAAgBQAXgkgBgXIAHAHQADAfgFAtIgHBMIgJgNg");
	this.shape_562.setTransform(579.3,553.1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#9DC526").s().p("AgEArIgOhYQALAGAFAPQAGATAEAFIALAdQgDAMgDACQgDADgEAAQgFAAgFgDg");
	this.shape_563.setTransform(586.6,549.8);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#549A3B").s().p("AgaA+IgBgzIAlhTIAIAgQAMAWgCAiQgEAvABAKg");
	this.shape_564.setTransform(521.2,561.4);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#5DA33A").s().p("AgVAZQAPgrAWgnQAKARgIAWIgOAkQgBAGABAQQgBAOgQADg");
	this.shape_565.setTransform(524.4,551.6);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#097602").s().p("AgLgJIABgZQAJAHAFALQADAGAFAPIgUAeg");
	this.shape_566.setTransform(524.1,538.5);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#72AA37").s().p("AgeB4IACgKIAHgvIAViEIACgOQAMgEAAgIIgGgQIABgIQAPAEACAOQACAUADADQgIAHACAKIAEASQgGAGAAAIIABAQQABAdAGA8QgPAEgOAQQgOAUgIAEg");
	this.shape_567.setTransform(513.2,542.7);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#ACCF94").s().p("AgMgNQAKACAGAHIAJALIgJAHQgLgIgFgTg");
	this.shape_568.setTransform(519.5,526.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#0EA42C").s().p("AgKAYIAGgnIABgKQAGgHAEADQACABACAJQgIAGAAASQABASgIAIg");
	this.shape_569.setTransform(527.1,574);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#AEC108").s().p("AgaAfQgEgFABgJIAAgNIAAgBIgBgPQABgLAKgBQAIgBARgFQAQgCAJAMIgIAlQgFgCgEAAQgIAAgIAGQgOAIgHACIgDAAg");
	this.shape_570.setTransform(510.2,525.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#1EA540").s().p("AghAJQgBgcAJgSIADgEIAIgKQAHgHALACQANACACAJIABAQIAHALIAAABIAHAFIgsA2IAAAAIgDAJIgUAGQABgIgBgog");
	this.shape_571.setTransform(623.9,578.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#2F9D4F").s().p("AgSAjIAAgyQAKgOAGgDQAIgGALAPIACACQABAEgBACQgLAIgHAPIgMAbg");
	this.shape_572.setTransform(601.5,564);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#307A1B").s().p("AgGAdIgJgXQgBgMAIgQIAOgcQALAEgCALQgDAOABACIgIBGQgHgIgEgOg");
	this.shape_573.setTransform(596.1,556.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#91B82B").s().p("AgWguQAMAFAFgFQADgDACgLIAHAIIAGAgIgIgDQgFAAADAHQAEAOAOAZQgCAEAEANQAAAKgUgDQgBgBgDAGIgHAJg");
	this.shape_574.setTransform(588.4,558.8);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#167710").s().p("AgMA4IgLgeQAFgjAhg2IAIAOIgFAKQgEAJACAMQABALAFAQIACAFQAAANgKAOIgTAXg");
	this.shape_575.setTransform(589.7,547.1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#2B7D14").s().p("AgGAcQgGgSgBgKQgBgLADgKIAFgKQADALAPAUQAJATgaANIgBgEg");
	this.shape_576.setTransform(592.7,545.3);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#3FAC31").s().p("AgJAwIAAAAIgIhlQAKAHAHASQAHATAFAGIAGATQACALgIAIIgOATg");
	this.shape_577.setTransform(627.6,572.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#37A237").s().p("AgkBbIAbhAIgEgBIg1A7QgIgMgBgXQgBgZgFgKIACgNQBDAEAYgSQAagSAAg2IAAgBIAAAAIACgFQABgDAFAFQACADAAAKQgBAIAEAEQACAhgBAHQAAAaAaACIAEAAQgZAFAEAYQgIAHAAAMIAAATIAAAGQgQANgbABQgfgCgPABg");
	this.shape_578.setTransform(540.9,581.9);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#69BF26").s().p("AgSAgIgOgWIAFgFQALgLAGgPIABgFQAJgGAFgPQAPAEAGAMIAHAXQgGAFgBAMQgNAMgKAbQgMgFgJgLg");
	this.shape_579.setTransform(569.9,584.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#32A545").s().p("AgWAcIAIgTIAAAAIAGAAQAHAPAYgBIgBAFQgGAPgLANIgFAFQgTgTgDgOgAgWgrIAAgRQALAFgCALQgCAPABACQgIgGAAgKg");
	this.shape_580.setTransform(566.6,579.9);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#7BAD4A").s().p("AAIAxIAAgkQgBgCACgPQACgKgKgFQgHgFgEgJIgEgNQAbgJACAfIgBBJg");
	this.shape_581.setTransform(564.2,575.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#40AC31").s().p("AgCAtQgJgLgKgCQgBgoAAgVQACgXAUgFIADANQAFAJAHAFIAAARQAAAKAIAFIAAAkIAAABIgIATQgIgCgJgLg");
	this.shape_582.setTransform(562.8,576.9);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#03872D").s().p("AglBhQgDgdgHgNIAEgZIAagrQAKgIgDgJIgKgQIgeg4IgFgSQgBgKAIgHIA1A8IADADIABgEIAIggIADAsIAVgeIAOAUIABAZQAAAOgIAKQgXAmgPArIgkBUQgIgNgDgcg");
	this.shape_583.setTransform(521.2,548.6);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#40AE32").s().p("AgIA8IgBgWIABgGQgBgDgFAAQgBABgCALIgIgCIAChNQACgdAaACQAPABAEAJQADAGAAAOIgBBEQgHgIABgTQAAgUgDgKQgOAuABAsg");
	this.shape_584.setTransform(553.3,577.4);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#5FB72A").s().p("AgFAFIgJgSQAOAEAGAHQAEAEAEANQgOgBgFgJg");
	this.shape_585.setTransform(563.3,566);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#529839").s().p("AgGBKIgFgDIAAiPIABgCIAOAaQATA2gbBFIgCgBg");
	this.shape_586.setTransform(540.6,561);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#4FBC2B").s().p("AgZBXQAShCAEgtIABAAQAEgFABgIIAAgNQAEgFACgFQADgJgBgLIAAgCIAPgFIAAAgIAACPg");
	this.shape_587.setTransform(536.9,559.3);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#96BB29").s().p("AQ2A8IgDgyIAIgMIABgBQAIgHAXgDQAYgCAGgMIgIAxQgFAYgRAPQgHgDgMACIgMABIgGgBgAx4gCQANgCAIgKIAPgUIANgOQAIgJAJgDIACAIIgPAcQgJAQACAMQgOAMgLAAQgOAAgHgSg");
	this.shape_588.setTransform(704.4,557);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#589F3A").s().p("AANA/QgRgXgOgeIgBgCQADgPgDgXQgFgagCgNQAEABAFAHQAFAFAEgMIAJAmQAGAWAMANQAGAWACALQABASgKAOIgFgHg");
	this.shape_589.setTransform(604.5,553.6);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#4B9837").s().p("AgMhLQAIAIAFANQADAHAFAPIAAABQAIAbgHAdQgGAXgRAcg");
	this.shape_590.setTransform(647.5,560.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#56A039").s().p("AgJAZQADgKgEgXQgEgXAEgMIAXAlIgCANQgDAPgHAPIgDAHQgHgEAAgPg");
	this.shape_591.setTransform(644.1,551.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#48B62C").s().p("AgTAZIAQhaIAAgBIADgGQAHgQADgPIACgOQAFADACAGIABALIgBCXQAAAJAHAEIgGAMQgLAEgLAQQgNAPgKAEQgCgpAIg0g");
	this.shape_592.setTransform(644.2,562.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#A7EF0B").s().p("AADBNQACgggQgaQgBgOgGgFQABgBgBgEIAAgCQgBgNgHgTIgNgiQgFgQARAKIABADQAOAeARAXIAFAGQABAKAMARQALARAAALIAAADQAAAIAHACQgFAGgLAKQgKAIgEAIg");
	this.shape_593.setTransform(605.3,562.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#79AC2B").s().p("AgIAOQgGgSgMgIQgHgDABgHIAAgDQAGAAAGgFIAJgJIAHAEQAVAJAQgQIAAAAQgBAOgPAcQgPAbABAQQgFgGgGgXg");
	this.shape_594.setTransform(612,568.8);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#309039").s().p("AgoAuIAAgGQgBgQAPgbQAPgcABgOIAAgBQAAgKAKgGIAFgFQAUAfARAuIAAAGQgPACgKAKIgPAUQgNAUgJgBQgKABgKgWg");
	this.shape_595.setTransform(616.4,569.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#89B52A").s().p("AgXAgIgGgEQAQggAcgeQANAOACAXIgFAEQgKAHAAAJIAAABQgLALgLAAQgIAAgIgDg");
	this.shape_596.setTransform(613.9,562);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#267113").s().p("AgMgIIAEgVQAEgLAIgHIAJANIAAAoQAAAagIAQg");
	this.shape_597.setTransform(672.7,557);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#80BA28").s().p("AgFAAIgDgFQgBgFAFgCIANAIQABAMgHAFg");
	this.shape_598.setTransform(673.7,552.2);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#348E1A").s().p("AgGAIQACgPALgIIAAAfg");
	this.shape_599.setTransform(673.9,550);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#37A435").s().p("AgOBJIgPhyIAAggIAIAAIABABQAIAIALAVQAGAPAKAHIAHAFIAGAiQAEAWgCAOQgIADgMAKQgKAHgIAAIgGgBg");
	this.shape_600.setTransform(669.4,576.1);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#6CAA2D").s().p("AAHAsQgIgIgHgPQgLgVgJgGIgBgBIAAgTIAKAGQABABABAAQAAAAABABQAAAAABAAQAAAAABAAQAJgEgDgKQgDgNAAgCQALgDAGAKQAIALAJgDQACAGgDAZQgBATAJALIgCACQgMAGgCALIgHgEg");
	this.shape_601.setTransform(670.2,569.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#85B42B").s().p("AgXA3IgJgGQAAgsApg+IASA5IAGANIgOAeQgJAEgHgLQgHgLgKAEQgBACADANQADAJgJAEIgBABIgEgDg");
	this.shape_602.setTransform(670.5,561.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#319E4C").s().p("AgIACIgTgtIADgCIAYAWIAcA4QgGAEgBAIIgHABQAAgagWgSg");
	this.shape_603.setTransform(655.3,559.7);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#569F38").s().p("AgSgZQALAAAHAIIALAMIACADIAGAMQABAFgDAFIgGAGg");
	this.shape_604.setTransform(648,548.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#379939").s().p("AglBsQgHgEAAgJQASgdAGgXQAHgdgIgaIABgBQAHgMAAgTIgBgfIAGgGQACgFgBgFIgGgNIgBgDIAHAAQAmAvAOAwIgXgWIgEACIAUAtIg0BSIgJAIQgGAFgHAAIgBAAg");
	this.shape_605.setTransform(650.6,558.6);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#247F16").s().p("AgOASIAXgrQALAOgJANQgEAJgPAPg");
	this.shape_606.setTransform(661.8,554.9);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#99BC24").s().p("AgWAKQAFgDAQgRQALgOANgDIAAAAIgHAMIgYArQgMgDgCgPg");
	this.shape_607.setTransform(661.1,553.8);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#24B43A").s().p("AgeA/QgCgCgBgQIAAgiQABgEgBgXIAAgLIAAgLQABgQAHgLIAAAMQABAGgBAEQgHAWARAEIAdACQAQABgCgKIgCgTQACgEgBgGIgBgMQAKAPgCAXIAAALIAAAbIAAACQAAAdgFAFQgFAFgbACIgGAEQgLAIgFAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_608.setTransform(635.2,564.5);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#339E39").s().p("AABDVIgthGIACgBIAcgtQALgVADgSQABgFgBgFQAHgIgCgLIgFgUQAPgJgBgLIAHhEQADgpgdgaQAHgCAJAGQAIAEAEgDQAFgDABgGIABgMQgBgRACgJQACgPAMgJQgJAnACAsQgIAKgBAQIAAAMIABALQABAYgBADQgEAEABAHQgPAuAaAfIgIAGQgLANgDASQgBALACAVQAAAJgFAhQgFAaAIAPIgIAag");
	this.shape_609.setTransform(628.9,571);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#359939").s().p("AABBIQAAgWgPgNIAAgNQgBgIgGgEIAAgaIAAgLQABgYgJgOIAAgZQAGgTARABQAIAAAVAFQAAAPAHAEIAAAAIgQBaQgIA1ACAoIgHAHIAAgkg");
	this.shape_610.setTransform(640.9,564.4);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#3AA933").s().p("Ag3g7QAMAVAKABQAKABAUgQIAOAMQADAUAQAYQAWAkAEAIQggAGgEgUQgIgjgBgBQAFA0g5AKg");
	this.shape_611.setTransform(766.7,569.7);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#35A336").s().p("AgaAtIAnhJQAFgIgDgIQgCgIgIgDQgJgFgFAGIgHANQgMAPACAOIgHAAIAAgmIAGgDQANgSAKgDQAMgFAPAVQABACAJAAIABACQACAngIAvIgCAHIAAAfQgHAGgQgCQgPgCgGAEg");
	this.shape_612.setTransform(753.9,573.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#2E9A4B").s().p("AAPBPQAIgUgSgbQgFAEgEAHIgEAMQgQgNgGgHQgJgMADgOQAKgOgEgRIAJgNQANAGAIgIIAKgNIAbgdQACAagGA1QgGA0ADAbIgBAAIgOABg");
	this.shape_613.setTransform(740.7,567.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#84C91D").s().p("AgKAEIAHgMQAEgHAKAAIgFAQQgEAJgFAGQgCgKgFgCg");
	this.shape_614.setTransform(741.2,554.5);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#2F9E4F").s().p("AohA4IgkgxQABgLgMgUQgMgVAAgKIABAAIALAJIAEADIAsAsIABAjIAAACIgBASIgBAAgAI4AKQAFgRAggYIgBAnIgJAKQgJALgDAOIgCAIQgTgVAGgUg");
	this.shape_615.setTransform(832,562.4);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#389239").s().p("AgSA6IgPgMQgIgGABgIQAAgFAFgKIAnhOQAEADADAGQAEAJADANQAAALAMAUQAMATgBAMIgHAUQgPAKgRAAQgJAAgLgEg");
	this.shape_616.setTransform(769.7,559.8);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#46B42C").s().p("AgPAuIABhmIAAgPQADgHALgCIAAAHQgCAVAFAdIAMAxQAFASgKAPQgGAIgPAOIgDAAg");
	this.shape_617.setTransform(779.1,557.8);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#08892D").s().p("AgHAMIAHgeQARATgRASg");
	this.shape_618.setTransform(780.6,549.1);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#509836").s().p("AADAyIgKgJIAAAAQgDgNgEgJQgEgGgEgDIAkg+IAFABIAEgBIgFA1QgDAfgIAVIgEgDg");
	this.shape_619.setTransform(772.3,552.6);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#9FD39B").s().p("AgGALIABgOIAGgIQAJAFgDAGIgFALIgDABIgFgBg");
	this.shape_620.setTransform(774.4,546.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#2F7C15").s().p("AgRATQgCgMAJgOIANgYQAYARgNARQgHAKgRATg");
	this.shape_621.setTransform(714.8,547.2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#98E312").s().p("AgaAnQgEgBgDgDQAGgfAYgkIAAgBIAFAIQAJALAIgGIAOgTQAEARgKAPQgMAOgEAeIgCgBQgHgCgNAEIgKACIgFgBg");
	this.shape_622.setTransform(734.3,568.9);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#A8F00B").s().p("Ao1A2IgFgIIAXgxQATgWAMgcIAHgHQAFACACALIgWBKIgKANIgOATQgCACgDAAQgGAAgGgHgAIFA4QgHAAgDgFQgDgEgBgHIAQglIAKgMQALgRAJgVIACAAQADgBADgIQAEgJAKALIAAABIgeBQQgDACgBAEIgGAKIgFAJQgDAEgFAAIgBAAg");
	this.shape_623.setTransform(791.1,560.9);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#166D11").s().p("AgGAQQgIgPgHgEIAEgOIADgSQAOAFAGATQAGAUAKAGQgCAOgLAHQgJgFgGgPg");
	this.shape_624.setTransform(794.1,561);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#97BE26").s().p("AgOgSQAPAEAEgMQAGgQAEgBIgHAsIgHAZIgDASQgPgcADgig");
	this.shape_625.setTransform(792.6,554.7);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#95BC28").s().p("AgQABIgBAAQgIgGAAgJIABgMIgBgFQAOAGANAQQASATAGAEIAAASg");
	this.shape_626.setTransform(783.1,554.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#529C16").s().p("AAPArQgLgYgOgNQACgIgFgIIgMgOIgHgYQgGgNgKgHIAAgNIABAAIAsAfQAUAkAgAbQgEAJgCAaQgBAWgIAMQgDgFgQgig");
	this.shape_627.setTransform(786.2,563.1);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#267E1D").s().p("AgGABQgHgdADgUIAHgCIAGAHIAAAGIABAEIgBANQAAAJAIAGIAAABIAAAMIABAVQABAOgJAIIgKgyg");
	this.shape_628.setTransform(780.2,555.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#75A009").s().p("AgVgyQALAGALASQANAUAIAGIgbAzg");
	this.shape_629.setTransform(791.1,542.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#2B7411").s().p("AAFBcQgIgGgIgPQgKgRgIgGQACgVALghIARg1IADgDQADgGAEgJIAEgOIAPAAQgJASABAdIABAuIAAABQgBANABAbQgBAXgNAPIgEALg");
	this.shape_630.setTransform(798.6,541.8);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#8CB21A").s().p("AgKAJQADgPASgJIgEAOQgDAIgEAGIgBADg");
	this.shape_631.setTransform(798.9,534.2);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#88D718").s().p("AgQAXQgHgCgEgEQgBgDgBgGIAAgBQAAgSAOgOQADADAEABQAGABAIgCQAOgEAHACIACABIABAMQgGAHgHATIgCADQgHAIgKAAQgGAAgIgDg");
	this.shape_632.setTransform(732.5,575);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#609E2E").s().p("AgRAEIARgYQAIgPADgMIAHgGIAAAZIAAAlIAAABQgDAcgMAQg");
	this.shape_633.setTransform(727,574.8);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#62920D").s().p("AgSAQIAMgeIAFgMQABgHALgJQAKgJAAgJIABAGQAEAQgFAYQgIAjAAAIQgFADgHALIgBADQgHAMgKADQgMgUALgZg");
	this.shape_634.setTransform(729.7,549.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#40A039").s().p("AgoAsQAAgKgIgGIAAgGQAJgMgBgZQgBgLABgJQACgMAFgHIABAXIALgTQAHgKALABQAMABAGAMQAIAQACACQAIADAFgIQAGgHAFAAIgFANIgNAdQgKAaAMATIgPACQgJABgEgDQgPgKgMAFQgIAEgKAOIAAgQg");
	this.shape_635.setTransform(724.6,550.7);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#05892E").s().p("AASA4QgEgGgIgEIgSAXIgYgTIAAgFQARgTAIgKQAMgRgXgRQABgaAPgZQAGADAIAUQAGAPASABIABAAQAEADgCAJQgCAJAEADQgFAGgBAMQgCAJACALQABAagJAMIgFgOg");
	this.shape_636.setTransform(717.5,545.9);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#7CCC1D").s().p("AgpAnIABgTQALgQADgaIAAgBIAIgBIAAACQABAGABACQAEAEAHACQAVAHAKgMIACgCQAHgUAGgHQADANgKAWQgKAVACAMQgKANgSADIgOABQgNAAgMgEg");
	this.shape_637.setTransform(731.4,578.2);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#179C67").s().p("AglAYQAIgZAPgWQAMASAOgCQAJgCASgMQgDASgKAWIgBAFg");
	this.shape_638.setTransform(378.7,597.7);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#128645").s().p("AgOAXIgEgHQgJgOABgSIABgGIAHAAQAIAbAKALIABgBIAKgNQAJAIAHANg");
	this.shape_639.setTransform(577.4,597.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#138945").s().p("AgkgdQAOgCAEgPQAGgQAGgEIAJAzQAFgGAEgRQAEgQAHgGIAOAAIgHAgQgLAKgJASIgQAcIgIAVQgGALgJAHQACgkgJg8g");
	this.shape_640.setTransform(4.8,602.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#BFD123").s().p("AgiBZIgGg5IAcgzIAXgqIAVgbIAJAHIgSA1QgLAggCAWIgOAlQgEACgGAPQgDAJgKAAIgHAAg");
	this.shape_641.setTransform(794.6,544);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#3F9E38").s().p("AgSAUIAAgCIAAgBIAAgRIALgFIAEgBQADgDABgDQADgDAAgEQAMAJADAQIgFAOg");
	this.shape_642.setTransform(714.9,598.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#449118").s().p("AgCANIgKgVIgCgFQAIADAHAKIAOAMIAAABg");
	this.shape_643.setTransform(703.3,598.7);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#1A9843").s().p("AAJBNIgBgBQAQgMgLgUQgEgJgggwQAGgXAEgKQAIgUAMgKIAAALQABAMAGAQIACAGQAIANAAAVIgBAhIAAACIABAZQAAAIgCAGg");
	this.shape_644.setTransform(703.9,592.3);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#67BC23").s().p("AgEAkQgFgRgBgLIAAgKIAIgnIANAIIAAA3QAAAJgCAEQgDAFgIACIgCgGg");
	this.shape_645.setTransform(705.8,585);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#209F2A").s().p("AgKAMIAOgeQAQATgRASg");
	this.shape_646.setTransform(706.6,579.6);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#53AC2E").s().p("AgWglQAGAIAQAAQAQAAAGAFQADAIgKAOQgKANACAIQAAAEgCADQgCADgDADIgDABIgLAFg");
	this.shape_647.setTransform(714.5,594.2);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#1F8439").s().p("AiRAwIgBghIAfhCIAHgQQAGgIAJgEQgGAQgBAjQAAAggHARQgEAdgbAeQgGgOgBgSgAB0gSQAAgMACgEQADgJAKgEIAIANIAAAZQgBALAFAIIAEAGQgEAGgGAOQgHAKgOACg");
	this.shape_648.setTransform(726.1,580.6);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#2B9A4E").s().p("AgoAKIAKgOQALgQALgWIAZg2QAFgLADgDQAFgGAKgBIABABQgQBQABA7QgJADgGAIIgHAQIgeBEg");
	this.shape_649.setTransform(714.1,570.3);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#81B028").s().p("AgUANQgDgNACgJIAagGQAOgGADgNIAAAZIgPASIAAAAQgGACgBALIgNAMIgBABIgGgWg");
	this.shape_650.setTransform(708.5,563.4);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#23AE3B").s().p("AgsCCQAHgQAAgiQABgjAGgQQgCg6AQhQIAAgBQABgHACgEQABgGAFgDIAHACIAHASQgJAGADAKIAGAQQgEAYARAjQAWArADAMIgeAhQgPASgHAQIgBACQgIADgFAJQgEAEgFAKg");
	this.shape_651.setTransform(719.8,569.7);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#50A33C").s().p("AAIAWIgOgTQABgCgIgJQgGgIAOgFIAVAfQgGADgCAJg");
	this.shape_652.setTransform(403.4,586.9);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#20A342").s().p("AAKBXQgPgTgFgEIgXghIAAg3QAIgNAAgWIAAgkQAAgJAIgEQAQAAAFAFQAIAGgCANQgCAXACAsQgCAXAaADIAAAeIgOgJQgHgEgIAFQgFAGACAGIAIALIAOAaQAHAQADANQgMgHgMgPg");
	this.shape_653.setTransform(406.2,581.5);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#259815").s().p("AgKBdIgIAAIgaghQAIgMgBgTQgBgVAAgJQAJgHgBgMIAAgUIADgcQADgPALgKIAcAHQABAIgBAQQABAPAHALQAGgHABgNQABgMAGgEQAIACAAAKQgbBFAMBUg");
	this.shape_654.setTransform(310.5,590.7);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#138845").s().p("AgJAMQgBgNAHgKIADABIAKAWg");
	this.shape_655.setTransform(701.9,598.8);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#409C33").s().p("AgNAhIgFgOQAKgIADgRQADgTAFgHQgCAKAHAKIALASIgCACQgHAKABAPg");
	this.shape_656.setTransform(699.8,596.8);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#1EAC6D").s().p("AAUA3IgPghQgIgVgMgMIgBgBQADgHgKgPQgIgNAIgJQAMANAYAZQAMAOADATIAAAkIAAAAIAAAGIgHABIgBgDg");
	this.shape_657.setTransform(656.1,582.1);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#086E37").s().p("AgKAUIAAgCQAFgWAQgPQgFANgBAag");
	this.shape_658.setTransform(428,598.1);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#29963C").s().p("ApLBKQgEgOgFgNQAEgmAagYQAOgBAgABQAcgBAQgNQAMAMgMALQgOAMgBAEIgyBAgAIvg2IAmgTIAAAjQABAVgHANIgCABQgIANgOAFQgLgmADgfgAncg2QAAgMAIgHQgBAHABANQAAAMgIAHIAAgUg");
	this.shape_659.setTransform(594,592.7);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#117535").s().p("AgHAJIACgTQABgLAFgHIAHAAIAAA5QgNgGgCgOg");
	this.shape_660.setTransform(48.4,600.2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#219A43").s().p("AACAxQgHgggCgRQgGgeAKgXQABAPAMAKIAAAHQgIAOABAWQABAhgBAGIgBgFg");
	this.shape_661.setTransform(52.6,593.2);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#1EAA69").s().p("AAPA4QgKgqgaghIgIglIArAsQABAJAHAFIAIAEIAAAaQgBAPgHAKg");
	this.shape_662.setTransform(46.9,591.7);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#239B40").s().p("AgGAsQgIgGAAgJQAKgMgCgZQgDgbAJgLIAPAkIAAABQgHAJgBATQAAAUgHAIIgGgDg");
	this.shape_663.setTransform(49.9,587.5);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#71C522").s().p("AALAmQAAgIgHgEIgBgBIgOgkIgKgPQgGgJABgIIABAAIAPAIQAJADAFgMIAXAaIgBA/g");
	this.shape_664.setTransform(51,584);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#218F13").s().p("AgWBNIABgaQAOhEAAg7IABAAIAGAGQAGBJARA7IAAAHIAAAIg");
	this.shape_665.setTransform(259.4,592.4);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#238F12").s().p("AgmAaQABgaAFgNIAIgMIATAAQAIAAAFAHQAHAKAIgFIAMgGIgBAZQAAAMAFAIg");
	this.shape_666.setTransform(432.4,597.5);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#3E9E3B").s().p("AgLAKQABgLAHgIQAEAJALADIgEAHg");
	this.shape_667.setTransform(385.2,599.1);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#118A48").s().p("AgRAXIABgEQAKgXADgSQAOgBADAKIAEAQQgHAIgBAMg");
	this.shape_668.setTransform(383,597.7);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#72C326").s().p("AAlAUIAIAIQAAAMgPgBQAAgNAHgGgAgpAUIgBAAIgCgHIACgPQAngKAigbQACAFgFAQQgFAMAIAHIgGALQgEAFgGADIgHgDQgTgIgWAKIgGACIgCgBg");
	this.shape_669.setTransform(392.3,583.9);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#189E68").s().p("AghAnIASggQARgcAVgRIALAZIgJAZQgIANABAMIgCACg");
	this.shape_670.setTransform(638.4,596.2);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#4F9913").s().p("AgLAZIgHgGIARgcQAIgSALgKQADAPgEAWIgFAgIgBAGg");
	this.shape_671.setTransform(6,603.1);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#239113").s().p("AggBjIABgGIAFggQAEgYgDgPIAHgfIABgzIAHg+IABgHQAJAJAFAWIAAAaQABAPAGAKIAHBeQACALAMACQgIASACAPQgCAJgKALIgPAOIgCADQgcgPgCgQg");
	this.shape_672.setTransform(10.4,597.1);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#C4D203").s().p("AABA+QgCAAgCgBIgRg+IgHgaQgFgQgHgKIgBgNIAFgFQAKAWAVAWQAEATAUAYIAWAtQgKALgKAAQgKAAgLgKg");
	this.shape_673.setTransform(21.8,590.6);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#269615").s().p("AgTBHQAAgNADgRIAGguIAKhBIAMAOQgDAeALAmIAAAaQgGAPgPASg");
	this.shape_674.setTransform(648.7,592.9);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#3C9A36").s().p("AgJAdIgCgNQgGgfABgNQAQARAKAYIAHAQg");
	this.shape_675.setTransform(403,597.1);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#BACB05").s().p("AgxBQIADgHIAlhLQALgKAJgSIAQgfQAGgCAEgGIAGgLIAHABIAAASQgIAGAAAOIgQArQgGAHAAAMIAAATIgBAAQgLANgGAZIgBACg");
	this.shape_676.setTransform(391,592);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#1D843B").s().p("AAMAzQABgZgEgIQgJABgCALQgCAMgFACIgQgSIgIgIIAAgSQASgIAMgUIALgcQAIgRAKgJQACAGgCALQAAAKAIAFIAAA4QgOAFAGAIQAIALAAACQgIAIAAASQABASgIAHQgJgLACgVg");
	this.shape_677.setTransform(399.4,584);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#0C773E").s().p("AgLAOQAFgTAJgIQAFANAEAOg");
	this.shape_678.setTransform(533.9,598.7);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#0E8447").s().p("AAOAXIgNAAIAAgtIAVAtgAgWAXIABgIIAEgDIAEAIIABADg");
	this.shape_679.setTransform(263.9,597.8);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#62B829").s().p("AgNAzQgIgCgEgFQgBgHgDgGQgJgXABgeIACAAQAHAJAMgCIAWgFQAPgBgBgMQAAgOACgEIAAgBQAEgCADAAQABAIAAAQQABAOAIAJIgJAxIgQANQgTgBgIgDg");
	this.shape_680.setTransform(272.9,587.3);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#3F9C36").s().p("AADAYQgIgRgNgHIAAgGQAMgFAGgQQAEgSAHgFQAIAUAAAeIAAAzQgGgFgKgWg");
	this.shape_681.setTransform(170.5,599.9);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#65BA26").s().p("AgZAeQgHgJgBgJIgIg3QACAKAOAFQASAGAEAEQACANgEARQgBALgFAVIgOgOgAAKAGQgBgVgMgJQABgRAOAJQAMAHACgNQAKAOAGAkIgYAaQgGgIgCgYg");
	this.shape_682.setTransform(166,587.9);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#ABCA0D").s().p("AAAAYIgSgyIAQAIIAAAAQABAIAIAIIAKALIACAEQgBAJgDADQgCACgEAAQgEAAgFgDg");
	this.shape_683.setTransform(234.9,586.7);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#21AC6A").s().p("AAIA2IgJgMQgIgIgCgJIgdhLIAHgGIAIAGQACAPAUAJQADAKAMANQAMANADAHIAAABIAOANIgOAOQgIAJgIAEIgDgEg");
	this.shape_684.setTransform(235.7,582.2);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#36943B").s().p("AgJAuIAAhBQAFgNAGgNQAJARgBAbQgBAnABAEQgMAEgGAAIgBAAg");
	this.shape_685.setTransform(197.6,602.6);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#148F45").s().p("AgNBJIAAg0QAAgegIgUQAEgUANgXQAGgMAUgaIAAABIAAA+IAAACQgHAYgCAnQgCAwgCARIgBACIAAAaQgRgQgEgWg");
	this.shape_686.setTransform(173.8,597.7);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#1DA96A").s().p("AgogCIAYgaQAVgPAHgWQAPgGAGABQAHABACAIIAAAIIgBAAIAAABQgUAagHAMQgNAVgDAVQgHAFgFASQgGAQgMAFQgLgjADgng");
	this.shape_687.setTransform(171.9,592);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#50AA2D").s().p("AgdgLIANgKIACACQgEATAPADIAUgBIANgBIgDAFIg0AAIAAARQgFgXABgLg");
	this.shape_688.setTransform(185.8,590.9);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#66B824").s().p("AgMA/QgEgMAAgSIAAgkIABgUQABgMgIgHIAGgTIAjBDQAJATgNARIgQAVg");
	this.shape_689.setTransform(193.5,585.2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#64B928").s().p("AgdAWIABgEQACgFAOgWQALgRABgMIABgHQACABAGAQQADAHAIgBQAEgBAHgDIgQBFIgNABIgUACQgPgDAEgVg");
	this.shape_690.setTransform(187.3,586.7);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#79C91F").s().p("AgFAoQgGgQgCAAIgQhFQAHAHAKAVQALAOAYgKIAHABIAAAFIgGATQAAATgJAMQgGADgEAAIgCAAQgGAAgCgGg");
	this.shape_691.setTransform(188.8,579.7);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#44A035").s().p("AgNAXQgGgJgHgFIgBgfIAMADIAPADQATADAGAKIABABIABACIgIAXg");
	this.shape_692.setTransform(250.1,597.8);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#56AE2D").s().p("AAMAzIgBgBQgHgKgRgCIgQgDIgMgEIABgMIAIgQIAIgQQAJgTAMgMIAHgGQAAANAOAEQAIAEAQAEIgbBKIgCACIgBAAg");
	this.shape_693.setTransform(251.5,592.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#41B02F").s().p("AgTAAQgGgdAAgVQAFADAEgCIAQANQAMAEAHgRIAAAAIAAATQgBAMAIAGQgLAMgJASIgHARIgIAQIgKgzg");
	this.shape_694.setTransform(248.5,589.1);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#BCCC03").s().p("AgLAuIgWhAIAGgRQAEgIANgCIAJAOIAjBKIgDADg");
	this.shape_695.setTransform(239.5,595.5);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#2AAE67").s().p("AgFAMQgGgLAGgIQADgFAKgMIABAsIgGAGg");
	this.shape_696.setTransform(239,589.7);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#138B47").s().p("AgNA5QgBgEABgoQAAgagIgRIAAgHIABgMQABgIAIAAQAHgBADAFIADALIAUAqIAAACIABAEQgJAIgIARQgGAUgHAHg");
	this.shape_697.setTransform(200.1,601.1);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#2BAD38").s().p("AAABSIAEgJIACgEQgBAKACAUQABARgIALgAAAA/IgOgMIAAgBQAKgbAEgtQADg4AEgSIAAgQQAAgJAHgFQADAigGA9QgGBBABAdg");
	this.shape_698.setTransform(240,578.9);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#269511").s().p("AAMBDIAAgSIAIAAIABADIACADIADACQgHAEAAAIIAAAMQgHgFAAgJgAgIhQQAXA5gDBIQgIAKgCgCQgPgIgDALQgHAPgCAAg");
	this.shape_699.setTransform(213.2,594.3);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#4F9B18").s().p("AAAAMQgHgTgFgKIADAAQAJgCAGAIIADAEIAEAEIgKAAIAAAWIgDgHg");
	this.shape_700.setTransform(220.8,600.4);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#3AA833").s().p("AAHA9IgEgFIgDgDQgFgJgKACIgDABIgHgBIAAgBQgDgMALgPQAPgTABgHQACgLAKgPIADgEIANgWQgCANgEAyQgCAjgFAXg");
	this.shape_701.setTransform(221.4,594);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#1FAB67").s().p("AgWAUQAAgFABgGQACgGAFgGQAOgRAAgDIAXgOIgdBLg");
	this.shape_702.setTransform(205.3,580.2);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#48B82C").s().p("AgVAWIAchLQAAgJAHgEQAKALgCASIAAAcIgHBMQgPgNgVggg");
	this.shape_703.setTransform(206.9,581.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#1CA23F").s().p("AghgLQAFgDABgGQABgBABgKIgBgRQABgKAMgCIAcgDQANAAAIAIIAFAGIg6BcIgHAOQgGAHgKAAg");
	this.shape_704.setTransform(212.5,582);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#1EA668").s().p("AgmA9IgDgCIgCgDIgBgDIAlhRIAzgyIAAATIgMAWIgEAEQgJAPgDALQgBAHgPATQgLAPAEAMIAAABQgFAYgPAIg");
	this.shape_705.setTransform(219.7,593.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#49B529").s().p("AgFgCQAOglAVgXIgIBLIgzAzIAYhCg");
	this.shape_706.setTransform(221.9,584.7);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#23731E").s().p("AACAWQgEgDgDgHIgIgUIAIgTQALAIACATQACAVAEAHQgHgCgFgEg");
	this.shape_707.setTransform(196.3,579.9);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#7CCD1E").s().p("AghAfIAAgNQAGgBAIgJQAHgIAHAAIABAAIAAAAQAJAKgHAQIgIASIgBABQgMAAgKgOgAgEAAIAAAAIAAgBIABgLIAeggIAHANIgBABQgCADACADQgGAEgKALQgIAJgLAAIgCAAg");
	this.shape_708.setTransform(196,574.5);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#65A12D").s().p("AgSAdQABgPgBgIIABgcQAEgRAKgLQgBAJAIAIQANALABADQACALgIAOQgIAFAAAOIgOAaQgJgIABgOg");
	this.shape_709.setTransform(229.7,573.2);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#2B9E4C").s().p("AgDAXIgDgUIgEgbIAAgHIAVATIAAAZQgDANgMAGIABgJg");
	this.shape_710.setTransform(218.6,571.3);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#24AB3C").s().p("AgdAXQgCgDADgDIABgBQAIgaAGgnIAHg/IABgEIAHgHQAIAIgBAVQgBAUAIAIQgEAGACAKQAEANgBADIAOByQgBAEgOARQgFAGgCAHQgBAFAAAFQgrgjAGhCg");
	this.shape_711.setTransform(202.2,569.7);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#25AA3C").s().p("AglB2QABgTgJgKIgBgZQAGgkAAgRQAGggABgQQADgdgRgUQgJgLAMACQAPADACgIQABgKACgDQACgDAAgOQAAgKAHgFIgHCBQgDAaAagGQARgEALAGQAGAFAHAKQgBACAEADIAFAdIACATIAAAKQgCAPgNAJIgFgGQgIgJgNAAIgdAEQgLABgBALIAAARQAAAKgBABQgBAGgFADIAAgcg");
	this.shape_712.setTransform(212.9,566.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#98B60C").s().p("AgMAmQgCgEgGAFQgMgJgCgLIAIgFIAsgyIAJgHIAIAHIgqBQIgFgGg");
	this.shape_713.setTransform(158.5,608.8);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#128846").s().p("AgaBEIABgLIAGgLQAEgHgJgFIAAAAIABgCQAGgKAAgPIAAgdQAIgIAAgRQAAgVABgFQARAfAHAQQALAaAAAWIgsA0QgJgCAAgEg");
	this.shape_714.setTransform(157.6,602.8);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#0D7239").s().p("AgMAcIgBgBIgJgcIAXg5QAIAHAFARQAEAUAFAGIAAAdQgBAPgFAKIgBACIgOAMg");
	this.shape_715.setTransform(153.5,601.5);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#1AA267").s().p("AAYBFQgGgKgKACQgOgKgKgZQgLgagKgJQgSgfAEgnQAEAFAAAHQADAGAEAFQANATAbAEQAEABACgDIACgGIAPAOQACANAMAVQANAXADALIgHAAIgngpIgFACIAkBOQgGgBgIgKg");
	this.shape_716.setTransform(96.4,597.7);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#1FAD6E").s().p("AAsBdQgcgEgNgTQgDgFgDgGQAAgHgEgFQgGgQAAgEQADgNgJAAQgMAEgEgCQgEgVgNgLQgNgngRgSIgEgJQgDgFACgDQABgEAFACIAHACIABAAIAOAXQAKAOALAGQAEAQATAKIAIAMQAGAJAEAAQAFAAAGgJIA1g/IAQgUIAAABIAGgBIgXA0QgcAwgEAMQgKAjAcAeIgCAGQgBACgEAAIgBAAg");
	this.shape_717.setTransform(92,585);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#48B72C").s().p("Agcg/IAOgZIAOANIAeBMIgBAAIgPgHQgIALABAXQABAYgFALQgDAFgCAKQgEAIgIADQgShWAEhCg");
	this.shape_718.setTransform(231.6,584.7);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#539C13").s().p("AgPAhQACgQgBgIQgBgOgBgEQgDgKgHgGIgDgCIgBAAQgBgWARgEIABAAIAsAAIgGALIgSAoQgJAKgEARIgBAdQgIgJAAgMg");
	this.shape_719.setTransform(228.6,568.4);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#0D6E35").s().p("AgPAUIgBgCQgBgJAFgKIALgSQALAQAHAXg");
	this.shape_720.setTransform(682.4,598.1);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#488F11").s().p("A0yBmIADgFQAGgQAIgGQAMAAAYACQAUgCAGgTQACARgFAcIAAABgAUrA4IgPAAIgNgCIgJgEQAJgegCgUIAAAAIABgfQAAgUgIgMIAAgmIACAAIANASIAFAbQACALAGAHIAIAGQgGAPAFARIAKAeIAAABIAAAZIgIAAg");
	this.shape_721.setTransform(818.7,589.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#1A9F67").s().p("AgVAxQgFgMgIgJQADgaAUgyQAPAYARAnIAOAig");
	this.shape_722.setTransform(518.1,595.2);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#0E8449").s().p("AgZAwIAzhxIAABUIgmAwg");
	this.shape_723.setTransform(109.7,604.6);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#0A6F38").s().p("AgKgnIAAgDIAFgDIAQA+QgCAPgTANg");
	this.shape_724.setTransform(113.4,602);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#169244").s().p("AgiBiQgFgFgGgHIgNgRIAHAAQAMAEAFgKIAchGIAOgcQAIgRAAgMIAVgkIAVA+QgpAuguBdIgFgDg");
	this.shape_725.setTransform(106.9,595);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#6DC223").s().p("AgSAhQgQgCgCgJQAOgkAegaIAAAAQABAJAMAAQAOAAACADIgIAaIgIAHIgVAkQgCgGgQgCg");
	this.shape_726.setTransform(108.4,584.3);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#529B12").s().p("AgGAxIAAgNIAAgRQgBgKgHgGIAAgeIAAggIAOAMQABAOAOAGQgCAKgDAiQgDAbgGAQQgHgEAAgHg");
	this.shape_727.setTransform(47.6,605.9);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#9AB505").s().p("AADAnQgRgBgEgJIAAgBIAGgUQgGAAgFAEIgJAGQgCgMALgWQAJgTgBgNQACAKAEAHQAJAPAXACIALAAIgHA/QgEgKgUAAg");
	this.shape_728.setTransform(25.4,608.4);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#ABBF03").s().p("AAPAjQgWgCgJgPQgFgHgCgJIgBgEQgIgLAAgVQAEAIAHAFQAHAGALABQAJABARgFIAKgDIgHA4IgLAAg");
	this.shape_729.setTransform(26.2,603.4);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#2D9A3A").s().p("EhBDADsQgHgEgHgJIgNgRIAAhsQAJAHgCALQgGAaAaAPIAKAEIAAAnQgBAVgGAPgEBA0gB4QgEgMgBgTQAAgdgGgMIgGgLIgBgBIgBgCIAAgGIAIgUQAVgHAfAHIABAGQABAOgFAWQgEASAAANIAAAKIgeAmIgEgJg");
	this.shape_730.setTransform(455.5,595.2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#0C824A").s().p("AgMA6IgBgtIgBgVQgDgRAEgPQAGgYAWgRIABAAIAAA5IAABqg");
	this.shape_731.setTransform(34.8,607.5);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#3BA932").s().p("AAEBOQgZgOAHgbQACgLgJgGIAAg4IgBguIApBSQABAEADADIAAAmIgIAmIgLgFg");
	this.shape_732.setTransform(38.6,603);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#168F44").s().p("AgSAjIgEg6IAGgTIASgxQANAMAIAfIAAAuIAAAAQgXAQgFAYQgEAPADARIAAAWIAAAAQgIgYgEghg");
	this.shape_733.setTransform(34.1,599.6);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#B2C706").s().p("AgMAwQgLgBgHgGQgHgFgFgIIgKgeQAXAUASgVIAJAGQAEACAFgIIAZgsIAIASIANAMIgHASQgGgEAAgKQABgJgBgFQgGAMgEAVIgGAjIgKADQgOAEgKAAIgCAAg");
	this.shape_734.setTransform(27.1,597.1);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#4A9513").s().p("AgEAEIADgHQAFADABAEg");
	this.shape_735.setTransform(490.2,599.7);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#6BBF28").s().p("AgBA5IgRgiQAGgTgEgYIgJgsIAagCQALAUAGAPQAIAUAAAMQAAASgOAPQgMAMADAVQgDgEgBgGg");
	this.shape_736.setTransform(507.6,588.7);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#69BC24").s().p("AgEADIghgvIA0AGQANAKAEAXIAFAYQACAPgCALQgXgQgSgag");
	this.shape_737.setTransform(85.2,587.2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#179D68").s().p("AgtBHQgKgMgEgLQAuhcApgvIAgBqQABAFgCAFIgFAKIgIAAIgRg+IgFADIAAACIgzByIgSgVg");
	this.shape_738.setTransform(109.9,600.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#2AB066").s().p("AgOAAIAFgBQAGgDAEgGIADgDQAHgJAEgCQACAWgQAbQgNgHgCgSg");
	this.shape_739.setTransform(116,587.9);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#6BAF36").s().p("AgGBSIgEgpQgFguAAgPQAAgiAIgbIAPAeQAMASgGAZIgMAoIgCAzg");
	this.shape_740.setTransform(118.9,561.8);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#6DA52D").s().p("AgUABQgCgcgDgQIAGAAQAGAKAQgCQARgBAGAFIAAAHIgSAhQgJAUgCAQQgOgQgDgcg");
	this.shape_741.setTransform(123.1,571.9);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#4FA931").s().p("AgCAJIgYgxIA1AMIgIBFg");
	this.shape_742.setTransform(76.5,596.4);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#5CB42B").s().p("AgUAaQgkgdAegiIAAAbQAIAAAOgEQAMgDAJAHQALAGADgGIAAgCIACgMQAGAEABAFQABACAAAIIgIArg");
	this.shape_743.setTransform(75.9,589.7);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#6ABE26").s().p("AAOAoQgJgHgMADQgOAFgIAAIAAgcQAAgMAKgQIALgTIAEgIQAcAgAGAlIgCALIAAADQgCACgDAAQgDAAgGgDg");
	this.shape_744.setTransform(76.2,584.5);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#7BCC1E").s().p("AgHAXQgdgXgJgUIAHgDQAKgDAOACQAVAEAIgIQASATAMAmg");
	this.shape_745.setTransform(82.2,580.4);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#86D61A").s().p("Ag8BVIADgHIAJgbQAHgUgDgPQAGAPAHAGQALAJARgEQAMgDADgLQABgOACgGQADgEACgHIADgMQAJgrAVguIAIAyIglBGQgHAQgCAGQgCANAKAKIACATIgBABIgHgDQgFgBgBAEQgCACADAGIAEAIQgJAIgVgEQgOgCgJADIgHADg");
	this.shape_746.setTransform(82.1,567.8);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#20A63E").s().p("AAGAiIgGgBIgKAfIg1g/IAIgfQAIgTAFgIQAJgPAXADIAIAAQgCAtAMAfQAFgKgCgcQgBgXAIgNIACABIAAAXQADANAPAFIAEABQAAAJAJALIAMARQgEABgFADQgNAGgKAQIgQAWQgGAHgDACg");
	this.shape_747.setTransform(69,577.6);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#22AD3C").s().p("AAFA6QgHgIgJAEIgDgBQgPgFgDgNIAAgXIgBgCIAAgsIAAgGQAYgCATgYIAHAOIAPAyQAEAOgHAUIgJAbIgDAIQgEgBgIgIg");
	this.shape_748.setTransform(74.3,569.7);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#0F884A").s().p("AgKAKQACgFAAgGIAAgBIAGgHQAHAJAGAKg");
	this.shape_749.setTransform(514.9,599);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#549B11").s().p("AgPBAQgHggAAgmQAHgDABgKIAPgYQAFgHAHgFIAKgIIAAA5QgBAfgHAZIgHAOg");
	this.shape_750.setTransform(496.7,593.6);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#66BB26").s().p("AgkAqIAAggQAHgEAAgPIAXgsQAKAJAFACQAKAFALgDIAHATIgIAGQgLAJgCAQIgKAIQgGAFgGAHIgPAYg");
	this.shape_751.setTransform(497.4,586.2);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#BECE05").s().p("AgXBHQgPgNgDAAIACgFQAHgUARgbIAdgwQAFgDAGgPQAFgMAMgCIgPA5QgUAygDAaIgGAHIgBACQgGAHgGAAQgFAAgDgEg");
	this.shape_752.setTransform(514.3,592.1);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#28AB61").s().p("AgbBlQgFgEAAgGIgCgLQgDgVAMgMQAOgPAAgRQAAgNgJgUQgFgPgLgUIAJgTQAHAEASAVQANAPAOAFQAOAKACAVIgeAxQgPAbgHATIgCAGgAgohZIAVgOQABAOgKAOg");
	this.shape_753.setTransform(511.5,587.4);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#289C11").s().p("AgNBnIgHgTQAOgPgLgQQgSgbAAgBQAMgNADgSQACgLgCgWIgBgHQAGgLACgOIAAgbIALhKQALAMABATIAAAdIAIA/QAAAMgCAYQAAATAIAPIABASIgBAGQgZAXAaARIAJAsQAEAZgGATg");
	this.shape_754.setTransform(502.5,573.7);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#96B205").s().p("AgfggIgCgLIAAgBIACAAQAQAIAQAWQAUAYANAIIAAABIgIAYIgHACg");
	this.shape_755.setTransform(950.6,607.6);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#066B3A").s().p("AAAA4IgOhqIAAAAIAHgGQAKAFACAQIAEANQACAIAEACIAAAxIgPAUg");
	this.shape_756.setTransform(954.1,603.8);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#0F7946").s().p("AABApIgCgNQgDgQgKgFQAHgTAFgKQACgIAEgGQAEgIAHgGQgBAFABAtQABAfgJAUQgDgDgDgHg");
	this.shape_757.setTransform(954.8,597.4);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#1CA76B").s().p("AkQBFIAmiGIAFgFIAIgNQAcASACAbQACAQgGAeQgGAgACAPIgIAHIgDACIgTANQgMAHgKAAQgOAAgHgPgADkA6QAAgKgHgFIAAgaIABAAIAzg3QADAWgKAbQgHAGgEAIQgEAGgDAIQgFAKgHAUIgHAGg");
	this.shape_758.setTransform(929.7,591.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#208D3F").s().p("AgbBlIgKgeQgFgSAGgPIAfhFIAthFQgBAegFArIgKBIIgyA4IgBAAg");
	this.shape_759.setTransform(954.6,582.7);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#1FAC6D").s().p("AgCAZIgIgXQgGgLgHgIIgCgCIgQglQAOgCAJALQAMAPADABIAWAaIAOASIAJAGQgBAFgJAOQgFAGgBAGIAAAHIgPAAg");
	this.shape_760.setTransform(929.6,583.4);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#44961D").s().p("AgBAQQgIgMgIgHQAAgJAHgDIAPAUQAGAGAHAFg");
	this.shape_761.setTransform(580.4,598.4);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#158D45").s().p("AgOAuQgCgFgDgDIAAgXQABgNgJgIQAIgbAQgMIAbBNIAEAOg");
	this.shape_762.setTransform(595.6,595.5);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#17925D").s().p("AgRgfQACACADAAIAEgCQAIAHAGAOIAMAXIgbASg");
	this.shape_763.setTransform(939.4,607.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#19A16A").s().p("EA0SABFIgCgTQgLgJgJgWQgKgXgGgJIAAgCQAAgMAJgPQAMgVACgHQANAIAKAUQAMAWAIAHIAIANIAIAZQACAMgEAGQgFAGgPgDQgKgBgBACQAAADADAGQgHADABAKIgDACQgDAAgCgCgEg0nAAaIgWgtIAAgNIAsgMIAQAMQABATALADQAIACAEgHIAGgLIAOgTIAQgOIgLBVg");
	this.shape_764.setTransform(603,597.5);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#38851B").s().p("AgNANIAJgNIAOgNQAIAKgHAJIgFAHg");
	this.shape_765.setTransform(919.2,598.7);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#32913B").s().p("AgPATIABghIgBgBIABAAIABgBIABgBIATgkQAKAQgBAZIgCAoIgOALQgIAHABAIQgJgNABgWg");
	this.shape_766.setTransform(931.5,605.3);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#2E8D3D").s().p("AgGARIAGgYIAAgCIAHgHIAAAhg");
	this.shape_767.setTransform(909.1,598.4);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#448B12").s().p("AgVBJIgQhxIAJgGQAKgJAEgRIAOgBIAlAHIABAHQgCAHgMAVQgJAPAAAMIAAACQgOANgBAYIgUAkIgBABIAAABg");
	this.shape_768.setTransform(932.3,596.4);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#57B12B").s().p("AgMANQgEgLADgHQAHAAADgBQAFgDgBgGQgBgOABgCIAOAfQgDARgKAJIgIAGIgGgTg");
	this.shape_769.setTransform(929.2,589.1);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#1E9E57").s().p("AgKAXIAAgCQAAgJAAgDIAAgfQAFADAFAJIABAEQAFALAFAEIgJAOg");
	this.shape_770.setTransform(917.6,597.8);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#4DA731").s().p("AgJAZIgCgEQgFgIgFgDIAAgZIAKgBQAMgCAJgGQAIgGAEgKQAAAKgFAYQgFAVADANIgPANQgFgEgEgMg");
	this.shape_771.setTransform(918.7,594.5);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#60B629").s().p("AgfANQgDgRACgNQAXAPALgFQAMgGANgeIAHAAIAAAaQgKAGgDALIgDATQgEALgIAGQgHAGgOACIgKABIgGggg");
	this.shape_772.setTransform(919.1,588.5);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#6BBF25").s().p("EgjIAAlIgBgBIgPgpQgMgXgZgJIAfgCQARgDALgHIADAHQADAGADAFIAGAFQAEAdgKAvgEAi5AAGIABgaQAIgEAWABQAQgDAAgQIABgCQAHAIAGAMIAIAXQgCABACAOQABAGgGADQgDABgHAAQAAgJgBgEIAAgHQAAgEgFAAQgBAAgEAEIgFAHIglATgEAh2AAFIAAgZIAKAAIAUgCQASgCAKAEIACAAQgMAegMAFQgDACgEAAQgLAAgSgMg");
	this.shape_773.setTransform(699.1,586.1);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#379738").s().p("AxVBiIAAgZIgfgxQgSgbgSgSIAXgqQgNAEgKAKIgPAPIgIgTIAIAAQAKgOAIgEQAMgFAQAKQAEADAJgBIAPgCQAKgDAHgMIACgDQAGgLAGgCQgTB8ADA5QABADgDAFIgEAGIgBAAgASsgVIAAgBQgFgLACgRIADgaIACAAIACADIAABsIgEAGg");
	this.shape_774.setTransform(839.7,562.1);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#369A38").s().p("AgHBhQgDgWgTgMIAAgcQABgSgJgKQACgUgDgfQgFghgBgRQAHgEAAgJQAbAPAHgCQAFgCAHgYIAGgMIAAgBQAMAJADAQQgBASgOA1QgMArAEAdQAkAFgFggQgDgSAKgIIAAA+IgBAnIgzAyQABgYgBgMg");
	this.shape_775.setTransform(954.8,561.8);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#65BA27").s().p("Ag/AeIACgEQAIgZAbgbIABAAQAJgFAYADQAXACALgKQAHAFAFANQACAIADAFQACAEACABQAAALgKAJQgGAGgMALQgsgMg2AFg");
	this.shape_776.setTransform(611.2,587.3);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#20AB6B").s().p("AANAwQgDgFgDgIQgEgNgHgFIgdhFIADgBQAGADAJAJQAKALAJACQAAAKAIAKIAOAQIAIAOQgFADgDANQgCAMgHAEQgCgCgCgEg");
	this.shape_777.setTransform(615.8,581.9);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#1D9F3F").s().p("AAXBfQgCgNgFgOQgSgpgHgWQgCgFgJABQgIAAgBgEQAgg+gThCIAJgEQAIAKADAYQAEAYAHAKQADApAMAZIAABdIAAAAQgBADABATQAAAOgIAJQAFgUgEgWg");
	this.shape_778.setTransform(580.9,585.7);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#47A233").s().p("AgbAoQgCgHgCgKQgEgQgKgFIgGgIQAMAAACgLIAGgBQAGAKAUABQAVAAAGAHQgBAMgMAcgAAkgfQAAAVgOAKQgCgTAQgMgAAsgRQgCgKgGgEIAHgHQAEgDADAJQACAFAAAIIgBAOQgFgCgCgKg");
	this.shape_779.setTransform(605.7,596.1);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#3F9B37").s().p("AgOAaIAAgIIAVgsQAJAKgBANIAAAWIAAAHg");
	this.shape_780.setTransform(592.1,597.4);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#1DA869").s().p("AgaAWIABgrQAIgDAFgIIAIgPIAUgMQALASAAATQgQAMgIAZIgVAtg");
	this.shape_781.setTransform(592.5,593.2);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#228F49").s().p("AyKBrQAFgdgDgzQgEg5ACgXIgHggQgDgSACgOIABAAQAKAKAJASIARAdQAFAHAPAdQALAXAOAKIAAAMQgbAcgJAZIgBAEQgRARgGAWIgGABQgIgIAAgDgARfAdQAChFgJgnQAJANAQAOQAIAJAUAPIAGAHQgOAPgCAbQgCAkgFAJQgXgRgGgUg");
	this.shape_782.setTransform(717.4,582.5);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#2F883A").s().p("AAABDIgGgOQAFgSgEgOQgFgOgLgDIAkhGIAAgGIAHAAIAAAvIAAADQgJASABAcQABAogBAJIgHAAg");
	this.shape_783.setTransform(619.1,577.4);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#C5D203").s().p("AASBIQgEgBgDgDQgBgIgGgHIAAgBQgBgKgDgGQgDgFgEgCIgWg4QAAgGgBgEIgCgEIgEgFQgIgKAAgQQANAAAFALQAGAMAEADIABAAIACAIQACADAEABQAHATAcAtIAQAdIABABQABAEgBADIgGACQgJAEgHAAIgFgBg");
	this.shape_784.setTransform(144.5,591.3);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#179A63").s().p("AgQAXIAEgHQAPgVAIgOIABgDQAFADAAAHIAAAKIgBAZg");
	this.shape_785.setTransform(255.5,597.8);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#9BB405").s().p("AAFAqQgOAHgJgHQgCgBgJgQQADgNgGgXQgHgbACgMIAHAAIABAAIAAANQgBAJAEAFIADAAQAHgCANgIQAIgGAJAAQAEAAAEACQgCAIAKAMQAJAMgBAGIgBAIIgIgHQgFgDgHABIAOAlIgBAOQgPgOgKAFg");
	this.shape_786.setTransform(510.2,530.6);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#1EA163").s().p("AgVgTIAAgEIAAgBIAAgHQAMAFALAOIATAYIABAGIgNAOQgKgggUgTg");
	this.shape_787.setTransform(773,596.2);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#9BC210").s().p("AgKAGIAOgYQAGADABAFIAAAKIgNATIgBAAQgBgKgGgDg");
	this.shape_788.setTransform(783.2,585.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#1EAB6E").s().p("Ag8AvIAAgCQgBgVARgXIAegqQAFgEAbgiQATgYAXgMIABABIgXAqIgBAFIgZAsQgMAXgGATIgBACIgtBgg");
	this.shape_789.setTransform(765.5,587.6);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#21AB3C").s().p("AABBMQgIgPgLgDIAAgBIgIgMIABhMQAJgMgBgUIgBgfQAPANAKAYQAQAiAEAEIgJByQgJgEgIgPg");
	this.shape_790.setTransform(786.9,573.2);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#2E9A3A").s().p("AgWA1QgWgUAIgdQAGgRABgbIAAgsIABAAQARAUASAjIAcAyIAEAHIAAANIgQAaIgQATg");
	this.shape_791.setTransform(779.8,579.3);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#81D21B").s().p("AmUA4IgcgzQgTgigRgUIAAgBQABgKAGgCQAZAkAbAWIAOAUIABADIAIAMIAAABQgFAVgJAKIgEgHgA1FAPQgFgTAAgPQAkAEAPgDIAQASIAAATQAAANAHAHQgCAPgPgJQgTgLgXAQIgKgjgAT4AlIAQgaIAPgRIA0gyIgHAZIgtBEIgQADIgEAAQgGAAgFgDg");
	this.shape_792.setTransform(823.7,575.8);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#228E40").s().p("AgTAkQgBghACgmIAJAQIAdA2IAAABg");
	this.shape_793.setTransform(459.5,596.5);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#189C65").s().p("AAEAnIAAgBIgdg2IgJgQIAAgGQAVARAXAcIAZAgg");
	this.shape_794.setTransform(461.1,596.2);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#1E9E40").s().p("AgFBAQgGAAgCAGQgCAGgEAAIgIggIAAAAQAGgXAEgxQAEgwAIgZQAVAhAoAHIAIAHQACAFgEAGIglAxQAAgIgBgFQgCgKgHgJIgBAAIAAAAIgMBQIABAYQAAAPgIAJgAAYAdQACgLgBgGIACADIANARIgIAMQgIgGAAgJgAhAgMIAEgDQADgEgCgJQgDgMAFgEQARAWgRAWg");
	this.shape_795.setTransform(444.7,588.5);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#22AD6D").s().p("AgmAfIgCgDIAAgGIAkgxQAEgGgCgFIgIgHIAzgCQgJATgYAdQgZAfgJAQg");
	this.shape_796.setTransform(451.3,586.9);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#36AB47").s().p("Ag5ARQgGgIAKgEIAxACQAcAAAUgHIAIgCIAIAOIgEARQgHgOgLABQgEABgRAJQgVAMgQAAQgWAAgPgVgAA3glQALAOgKAQQACgSgDgMg");
	this.shape_797.setTransform(453.9,575.8);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#32953F").s().p("AgNBMIAAgEIAAgBIgBgoQgCgbALgPIgIgUIAAgsIARAeQALASABAOIgUADIAAgBQgFAOAAAdQACAfgEAOg");
	this.shape_798.setTransform(462.1,569.4);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#189B61").s().p("AAAA0IAAgmQABgZgGgQQgFgMAGgHIAEgFQAKAqgCAbIAAAig");
	this.shape_799.setTransform(474.1,594.9);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#31A03C").s().p("AAUBZQgGgSgDgiQgDgmgFgSQgDAGAAAQQABAPgJAHIgchxIAHABQAZAJALAWIAPArIgFAEQgGAIAFAKQAHARgBAaIgBAlgAAWgNIABABIAOAMIAAASIAAABIAAASQAAAMgHAHQABgcgJgpg");
	this.shape_800.setTransform(472,591.1);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#169863").s().p("AgEAaIgLAAQACgHAAgHIAPgZQADAAADgGQACgGAGAAIAAAlIAAAFIgBACIgGAHg");
	this.shape_801.setTransform(442.5,597.5);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#358E3D").s().p("AgLAnIAEgFQAJgQgKgOIgDgGQAIgKAAgPIAAgaIAHAAIAIATQgLARACAaIABAoIAAABIAAADIgHABg");
	this.shape_802.setTransform(460.3,571.6);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#229213").s().p("AgsAtIAAgiQAIgGAAgLIAAgSIACgBQAbAHAMgCQAWgCAKgWIAAAmQgBAXAJAOIAAAOg");
	this.shape_803.setTransform(479.5,595.6);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#ADC103").s().p("AgaAKIACgGIAOgNQAKARAQgGIALgEIgCAMg");
	this.shape_804.setTransform(776.4,599);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#C4D103").s().p("AgkA1IgCgHIArhLIAKgSIAQgTQAGACACALIgUBEQAAAHgKAPQgJANABAKIgKAGIgHABQgLAAgJgOg");
	this.shape_805.setTransform(779,592.7);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#33A037").s().p("AAeBvIgZggQgXgdgUgRIgGgUQgDgMgGgEIAdg0QAQgfACgYQADALgCAPIABAtQACAgAggKQADACAEAHQAEAGAGgBQACAAABgGIACgIQAFATgEAlQgEAoACARIABAPg");
	this.shape_806.setTransform(461.6,589);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#249412").s().p("ADTBHQgCgFgFgCIALgjQAEgUgBgOIAIg5IAPAGIAAAgIAAANQABAHAGAEQAAAnAHAggAj+BHIAAgGIAAgCIAAgGQAJgJAAgOIgBgZIAMhPIAAAAQAIAJABAJQACAGAAAJIAAAGQABAFgCAMQAAAJAHAFQACAnAGAgg");
	this.shape_807.setTransform(469.6,592.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#229112").s().p("AgVBJIAIhMIAAgCIAEgiQACgTAJgOQADAOADAlQACAfAGASIAGAtg");
	this.shape_808.setTransform(742,592.7);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#4BA532").s().p("AgLAgIgFAAIgDgIQgMgbgCgKQARgUAUAIQAOAGAAgMIAPAMIABATIgBAAQgLAIgKAYIAAAAg");
	this.shape_809.setTransform(752.4,596.8);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#249916").s().p("AgDA3IgBgBIAAAAQgMgMgCgNIAAAAQAAglARhBQAFAOAAAZQgCAVAHAKIABABIAIBFIAAAHQgSgOgDgFg");
	this.shape_810.setTransform(758.4,592.6);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#1B9F40").s().p("Ao9BjIAAgCIgBgTIABhJQABgqAGgeIAAgfQAbgWAhAWIABAgQACATAMAMIgeApQgRAYABAUIgBABQgHgKACgVQAAgYgGgNQgRA/AAAmIAAAAQAAAHABANQAAAMgIAHgAH9ACQgEgdACgVIArhIIADgCIABAAIAFALQAHANAAAdQAAASAEANIAFAJIg9BSIgFgzg");
	this.shape_811.setTransform(813.2,587);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#179965").s().p("AgWAXIAFgOIAWgfIAFABIAMAnIABAFg");
	this.shape_812.setTransform(718.5,597.8);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#189345").s().p("AgSANQgCgIAKgNQAKgOgDgIIAHgIQAJAJADANQACAHABAQIgVAgQgEgRgMgJg");
	this.shape_813.setTransform(717.1,594.8);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#189C48").s().p("AgMgMIgCgGIAHgHIAOAZQAJAOgBAMg");
	this.shape_814.setTransform(720.4,589.1);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#B4CF0A").s().p("AgEAOQgGgNgGgEIAAAAIACgKQACgFAFgDQAHAUAPARIABAGIgEAAQgMAAgEgIg");
	this.shape_815.setTransform(717.5,585.6);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#62B629").s().p("AgEAoQgQAAgGgIIAAgSQAbgdADgdIAOABIAAAHQgGADgBAFIgCAJIAAABQgFAMAMAQQANASgDAJIgIAIQgGgFgQAAg");
	this.shape_816.setTransform(714.9,587.2);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#6BC125").s().p("AgaAbIAGgUIgHgEIgNARIAHgkIAHgHQATAHATgEQATgDAKgNQACAOgKAeQgOAdgTAAQgMAAgOgKg");
	this.shape_817.setTransform(729.9,584.5);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#72C623").s().p("AgZgBIAAgHQAFgKADgEQAGgJAIgDQAJAHAUgGQACAJgIANIgIAQIgCAFQgKAAAAAGIADAMIgGAHQgQgRgGgTg");
	this.shape_818.setTransform(719.3,583.7);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#209049").s().p("AgEAmQgNgRgNgFIACgEIAIgQQAIgNgCgKIAKgTQANAEAIAQQAIAUAGAFIgHAkQgIAMgIAAQgHAAgFgJg");
	this.shape_819.setTransform(723.4,583);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#148944").s().p("AgQAUIASgnQAFAFACAOQACANAGAGIAAABg");
	this.shape_820.setTransform(425.1,598.1);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#BED10A").s().p("AghA/QgDgBgCgHIAeg9IAmg5QAGACADALIgmBxIgMgEQgHgBgGAEQgEACgDAAIgCgBg");
	this.shape_821.setTransform(420.9,592.4);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#219049").s().p("AABBGQAAgKAHgGIAAARQAAAJgHAHIAAgRgAgVAEIAAgdIASgKQAFgJgBgOQgBgRACgFIAHgGIANASIAAABIgPBsQgVgPgHgWg");
	this.shape_822.setTransform(411.8,585);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#89D71F").s().p("AgPA2QgDgTgNgHIAJgCQAQgGAAgUQAAgmACgTQAFgfAfAIQgaBWgIA6IgDATQgGgGgEgXg");
	this.shape_823.setTransform(420.6,579.5);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#1DA96C").s().p("A17BiQACgDgCgDQACgNAQgTQASgUACgLQASgQgGgQQgDgIgRgXIgGgGQgBgbgPgNQgQgdgDgIIgBgCQgCgGAEAAIAJADIAIAGQAfAtAcA9QARAjAfBJQgOgCgHgQQgHgQgJgEIgDgLQgCgHgJgCIgRAiIgYA6gAUhB3IACgOIAmhxIAAgBIAOgZIAeglIAWALQgHAFgDAKIgFARQgMATgBAGQgFANALANIABAgIgBAFQgIACgFgIQgGgJgHgBQgMAYAAALIgTAogA2IiDIABAAIgDACIACgCg");
	this.shape_824.setTransform(289.4,588.1);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#1EA141").s().p("AgjBSIAFgSIACgUQAJg5AZhWIAfgCIAAABIgIAsQgQAQAAAWQgBAOAJAXIgOAaIgmA5QgIgIAEgMg");
	this.shape_825.setTransform(423.2,581.5);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#66A232").s().p("AANAgQAAgYgGgLIgCAiIgBgBIgMgSIAAgOQAAgIgGgFIgBAgQgBAFAAASQABAOgGAIIABgGIgBgjQgBgZAEgQQgDgLACgFQADgGAOgBQASgBgDgSIAIAAIABB9QgLgKACgVg");
	this.shape_826.setTransform(413.5,575.1);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#F7FBF4").s().p("Ag3A/IgBh9QAMgJARAAIAIAEQAKAGAOgGQARgHAJADQAgAIgHAaIABgBIgBABIAAAAIgfABQgfgIgFAgQgCASAAAlQAAAVgQAGIgJACg");
	this.shape_827.setTransform(421.3,575.1);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#46B62C").s().p("AgLAMQACgTgBgLQAJgDADgIQAFgMAEgDIABBGQgCAOgNAFQgHgNgBgUg");
	this.shape_828.setTransform(332.6,578.3);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#39B314").s().p("AgEgWIABgNQABgIAFgEIACBeIgIABg");
	this.shape_829.setTransform(334.2,576.1);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#138944").s().p("AgWAoIAPggQACgEAGgaIAAgCQAEgBAEgKQAEgGAJADIABABIgJBNg");
	this.shape_830.setTransform(738.4,596.1);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#1DAB6D").s().p("AHlBiIgGg/QAUgXACgGQAIgQgMgSQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAIAIAAQACAIADACQAEACAGgHIAWgfIAJgNQAIgDAGgIIAJgNIAdggQAHAMgKAOQgMAQgBAHIAAABQgRAQgEAWQgDAMgQAWQgKAUAUAQIAAAlQgKAAgGgJQgIgLgGgCQgJAJgKAdQgIAagRAKgApeBIQAHgRARgaQAUgfAGgTQAOgBAGgLQAGgOAEgGIAOgRIAWgUIAIgKQAFgFAJAAQACAIgGAJIgJAPIgLASQgFAMgBAJIgOANQgJAOgDATIgDAiIgBABQgJgEgEAHQgFAKgDABIgBABQgJALgRADIghADIADgHg");
	this.shape_831.setTransform(793.5,587.5);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#1C9E42").s().p("AgkB4IABgGIAIgtQAGgfgBgUQAKgegCgOQgCgMALgWQAJgWgDgNQACgDABgDIAJgSQATAWAFAVQgKAEgCAJQgCAEAAAMIAABCQgGASgTAgQgRAbgHAQIgDAIg");
	this.shape_832.setTransform(735.5,583.5);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#5BB32B").s().p("EAxDAA3QgHgIgEgBQgCgKgIgKIgPgSQgWgYAYgUQAmAbAWguQABAUgGAfIgIAsIgBAGQgEAKgEAAIgEgBgEgxZAAfQgEgFACgMIAWgZQAFgUANgJIAEgCQACAIAQACQAQADAEAGQAAAMgJAQIgOAcIgJAAIgJgBQgLAAgIACIgJABQgIAAgDgEg");
	this.shape_833.setTransform(416.7,590.9);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#6ABF25").s().p("A9rAtQgCgMgPgXQgNgUAAgOQABgGAEgCQACgDAFgBIAJgCQAGgCACgCQAIAEAGALIAKAPIAAABQgDArgMAZIgBABgAdEgSQABgJAFgMIALgSQASAMANAVQAKAMAMAZQgCAKgQAEQgSAFgDAHg");
	this.shape_834.setTransform(557.6,585.9);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#128A47").s().p("AgTArIADgHQAKgVADgPIAAgCIAUgoIACAAIAAAiQACATgEAcIAAAEg");
	this.shape_835.setTransform(342.4,595.7);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#199F69").s().p("AgoAgIADgFIAKgSQAKgQgBgMIAPgMQAFAfAigLIAEABQgCAOgKAVIgDAHg");
	this.shape_836.setTransform(337.9,596.8);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#4BA82E").s().p("AgDBQQgcgmANgqQAEgNAkhCIABAPIgCAXIgGAlIgBAQQABAKAHAGQABAMgKARIgKASIgCAFg");
	this.shape_837.setTransform(333.8,592);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#1A9C42").s().p("AgsA0IABgSIAFgkIADgXIgBgPIAHgWIAEgBQAKgDATACQAWAEAKgHQAEAZAFAIQgVAPgSAaIgbAwIgPANQgIgGAAgKg");
	this.shape_838.setTransform(339.7,588.1);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#559C14").s().p("AAABgIgFgiQgBgJgCgDQgDgFgJgBIAAgiIAAgEIAAg/QgGgIgDgZIAGgFQAIACACAKQADALAFADIAAABQAZBhAKBDg");
	this.shape_839.setTransform(346.4,590.4);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#45B42B").s().p("AAHBKIgBgBIAAAAQgDgFgCgJIAAgCQgCgLgGgFIgPh3IANAVIAKATQAPAZAGAPIAAACQgCANADAZQAAAXgQAOg");
	this.shape_840.setTransform(360.8,581.2);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#7FD11C").s().p("AACAnIgBgBQgFgRgPgYIgLgSIgNgWIgCgNQARgBALANQANASAEACIAGAJQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIASAbQAKAQAKAJQgCACgGACIgJACQgFABgDACQgEADAAAFg");
	this.shape_841.setTransform(362.9,577.6);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#F2F9F1").s().p("AgzA5IgCheQADgPADgGQAEgLAUAFIAGAbQADARAbgJQAdAMAIAOQAHANgGAjIgKAMIgGAFQgLAHgWgEQgTgCgKADIgDABgAAAgCQgTACACAVQACATASADQAVgGAAgRQgCgXgSAAIgEABg");
	this.shape_842.setTransform(339.9,575.1);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#1DA43F").s().p("AgDBCIgKgOQgHgKgBgKIAAAAIAHgCQAJgSgBgfIgBgyIAPAAIAHAyQABALgCAUQABAUAHAMQgEACgFAMQgFAKgIACIgDgEg");
	this.shape_843.setTransform(330,578.4);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#239111").s().p("AgVBEIgFgBIgBgMQANgCADgKIACgQQAEgXAHhHQAEACACAFIACAHQAAAKAHADQACA0AJA4g");
	this.shape_844.setTransform(323.1,593.2);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#6DBF25").s().p("AANAaIgJgOIgBAAQgHgUgJgJQgNgNgWgCIBJAAIABABIABAAIAAAAQABAKAHAKIAKAMIAEAFQgEAYgSACIgCABQgGAAgGgHg");
	this.shape_845.setTransform(325.1,584.8);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#549C14").s().p("AgKA/QADgRgPgcIgRgaQgHgNgBgMIAAgFQAAgKgIgDIAAgSQAPgFAFgFQAIgHgEgMIgCgCIAPAAQAAAJAHAJQAEAFALAHQAWACANAOQAJAIAIAVIAAAAQgHAFAAAKIAAAQQgGgEgBgIIgCgIQgCgEgDgCQgJBHgEAWIgCARQgDAJgNACg");
	this.shape_846.setTransform(319.8,588.6);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#1E9640").s().p("AAABTQgKhDgahiIAAAAIAPAMQAFAGAIAAIAOgBQADAQgBAhQACAbAbANIgGAqIgBARg");
	this.shape_847.setTransform(349.5,591.8);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#269811").s().p("AgbCyIgFgDIgEADIgLAAIABgRIAGgpIAFhIIAIgvQAEgagKgUQAAgHAKgQQAHgPgCgKIAJhIIAAgHIANgFIAAAlQgBAXAHAPIACANIAPB4IgBAjQgBAWAJANIAIAZQABAHgBANQAAALAGAHIgDAOg");
	this.shape_848.setTransform(357.3,582.2);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#1EA43F").s().p("AcQBhIgOgVIgMgTIgBgBIgKgPQgGgLgIgEQgKgJgKgQIgRgbQAJgqgCgVIAHgNQAMgBAKAJQABAHgJAOQgEAMAVAEQALACADAMQAEAOAFADQgDAQALAPIAWAZQACALgDAVQgBAUAJAMIgHAJIgCAAQgEAAgEgGgA7yAnQgKgPgLgIIgJgFIAYgoIACgFIgEADIgeATIgHgIQABgDgCgfQgBgVAJgOIAAAWQgEApAogUQAMgGAUAHIACAZIAFBFIABANIgQAIQgHgGgPgZg");
	this.shape_849.setTransform(191.8,579);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#ABBF04").s().p("AATABIAAAAIABAAgAgTABQAKgEAKAEg");
	this.shape_850.setTransform(630.7,599.9);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#148B46").s().p("AgHANIAAgaQAIAKAHAQg");
	this.shape_851.setTransform(622.2,598.7);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#1CA56A").s().p("AgHBQQgIgSgJgJIgKg6QgEgUgBgQIgBgYIAAgIIAHAAIAUgGIAKAUIAsCLg");
	this.shape_852.setTransform(623.9,592);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#249512").s().p("AgFBJIgPAAIAGhBQAGgwANggIABAYQABAQAEAUIAKA6IAAAbg");
	this.shape_853.setTransform(619.3,592.7);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#50A72E").s().p("AgLAwIgSgnIACgJQAEgVAQgaQALAOAKAZIAQApQgGAEgEAJIgCACg");
	this.shape_854.setTransform(564.3,595.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#24AA62").s().p("AgGgPIAMAGIACAMIgPANg");
	this.shape_855.setTransform(553.1,585);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#1E9D44").s().p("AggA9QAAgDAPgOQALgKgMgMIAAgGQAIgGAAgLQgBgNABgHQgEgYAXgFIAQgKIAIABIgOApQgGATgBAPIgBAHQgCAMgLAKQgGAGgQAKg");
	this.shape_856.setTransform(548.1,587.5);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#549D16").s().p("AgOAoQABgPAHgUIANgoQACgLABAAQAFgBAAADIAAAGIAAAWIAAAgQgCAKgJAJQgEAEgOAIIAAgHg");
	this.shape_857.setTransform(550.8,585.1);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#1E9C42").s().p("AARBfQgGgHgGgCQgJgugkgeQAAgJgGgCIgCgNQgCgsAOgvQAEAKAAAVQgCATAIAIQAKAUAbgGIAmBSQgQAagFAWIgCAJQgDgCgGgJg");
	this.shape_858.setTransform(558.6,585.5);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#3B8611").s().p("AgEAEIAIgHIABAHg");
	this.shape_859.setTransform(848.4,599.6);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#169962").s().p("AgkAMIAAgFIAIgOQANAZAegRIATgMIADgBIgGAYg");
	this.shape_860.setTransform(905.3,598.8);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#1C9756").s().p("AAAABIAAgBIABABg");
	this.shape_861.setTransform(855.7,600);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#478E12").s().p("AgPBAQgIgnACglQAQgLgIgPQAMABAIgLQAKgNAGgCIAABYQgHAGgBANQgCANgFAGIAAABg");
	this.shape_862.setTransform(854.9,593.6);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#438A13").s().p("AgYAqIAAgCIAChRIAJANQAJAMAIASQAKAWAJAOIACAEg");
	this.shape_863.setTransform(827.4,595.9);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#70AB39").s().p("AAfBHIgCgEQgIgOgLgWQgJgTgIgMIgJgMQgEgagUgTIgBgNIAXAOQAGALALAMIAUAVIAWAZIAAAAIABAfQABAQgGALg");
	this.shape_864.setTransform(826.7,593);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#138646").s().p("AgkAmIAAgCQARgJAJgaQAJgdAIgJQAGACAIAMQAHAJAJAAIgHArIgKAJg");
	this.shape_865.setTransform(845.9,596.3);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#229111").s().p("AgUBEIgBgIIAHgtIAAgkQAHgIABgPQABgRADgGQAKAJAAAVQgBAUAJAIQgBAmAHAng");
	this.shape_866.setTransform(851.1,593.3);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#169C67").s().p("AgkAaQABgFAFgDIAXgYQAUAOAJgNQANgUACAAIAAAMIgKARQgGALACAKIgBABg");
	this.shape_867.setTransform(678.4,597.5);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#2A983A").s().p("AgSATQgGgcADgQIAAgTQANADALgIQAMgKAIgDIgGATIgBAFQgBAIAIAFQACAWgOAYQgIAPgRAbQACgNgGgfg");
	this.shape_868.setTransform(670.1,587.8);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#21A43E").s().p("AgnAyIABgFIAGgTQACgOgEgVIgGgkQACgLALgGIACABIACARQAFAIASgJQAFgDAVALIALASQAFAKgCAJQgCgBgIgKQgHgIgLAAIAQAfIgCAAQgIAEgIAMIgIAKIgEAHQgGgDgBgKQgBgKgEgEQgIAIgEAOQgEAVgCACQgIgFABgIg");
	this.shape_869.setTransform(675.7,578.9);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#68BD26").s().p("Egp5AAHQAJgJAUgeQARgZAPgNQAPANABAbIgDAHIgVAqQgLAWgEASIgCAMQgdgugHgSgEApLgAkIAFgHIAIgKQAIgMAIgEIACAAIAQAhIgvBeQgRgrARgzg");
	this.shape_870.setTransform(411.9,587.1);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#199543").s().p("AglAwQAFgWABgKIAuheQAWAbACAWQACAagaAWQgLAJgMAaIgYAZQgIgNADgSg");
	this.shape_871.setTransform(678.6,591.3);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#A9C70C").s().p("AgJAxQgHgKgXAIIAdg4IAGgGIAPgcQANgWAQgJIgmCGIgHAPQgBgVgDgFg");
	this.shape_872.setTransform(902.3,592);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#22933F").s().p("AggAwIgEgkIgBhRQAFACAEAAQAEAAACgDIABgMQAHAEAAAIIARAuQANAYAVANIgEAFQgQAIgNAWIgPAdIgGAGQgMgOgDgVg");
	this.shape_873.setTransform(903,582.8);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#2F9D39").s().p("AgBAkIgCgBQAAgIgHgEQANgmAegmIAAAtQgGAJgBAWQgBAWgGAJgAgZAjQgHgGAAgMQABgNgBgGQAHgFABgKIAAgRQAGAHABAJQAAAGgBALQABAEgDAIQAAAIAKAEIgBAMQgCACgDAAQgEAAgFgCgAgKAXIAAAAg");
	this.shape_874.setTransform(901.8,572.2);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#137D47").s().p("AgRA0IgPgUIAAgBIgGgoQgCgUAAgQIAAgGQAKgBANADIAVAFIABAAIAkBFQgIAKgEARg");
	this.shape_875.setTransform(886,594.9);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#249514").s().p("AgTBJIAAgFIAAAAIACgIIAAgnIAAgTQAIgKABgbQABgZAJgMQAEAFgBARQgBAPAIAGIAAAFQAAAQACAUIAGApIAAAAIAAAUg");
	this.shape_876.setTransform(880.7,592.7);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#1EA96A").s().p("AhHB9IgBgKQAAgegBgGIABggIA8hRIAdgnIAugyIAHgBQAFADgCAEIgCADIgCADQgxBHgRA/QgFAMgYArQgPAbgHAUg");
	this.shape_877.setTransform(871.9,587.6);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#21AC3B").s().p("AgFBSQgGgHgGgCIgXgkIgBgBIAFgVQAEgLAHgHIAAgfQAAgUAHgMQAKgCAUACQASgCAAgXQAKAHACAKIAAAPIgJgCQgFAAgBAGIgXCTQgEgBgFgJg");
	this.shape_878.setTransform(894.3,572.3);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#2C973B").s().p("AgcAvIgBgEQgDgSAEgZQAHgkAAgLIABAAQAgArAQArIADAIQgKgFgUAEQgKACgIAAQgHAAgEgBg");
	this.shape_879.setTransform(886.4,576.1);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#82D31A").s().p("AAMAwIgCgIQgQgrghgrIgBgBQAAgEgBgCQAPgCAHALIAMARQAHAEAHAIIALAOIABABIAXAjQgHANgPAGg");
	this.shape_880.setTransform(888.3,576);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#28974D").s().p("AgFAwQgQgggBgNIACgCQAGgHAKgUQAIgTAKgIIABgBIAGAAQACACAAAEIAAAAQAAALgHAlQgEAZADARIAAAEQgGAGgEACIgDABQgEAAgDgHg");
	this.shape_881.setTransform(881.9,576.2);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#2F8E39").s().p("AADBZIACgDIACgEQABgEgFgDIAAgFQAJgMABgOQAAgJgCgTIABgWQgBgNgNAAQgJgBAAAMQAAAPgDADIgEAJQgbgdgKguQAEgYASgJIATAPQAMAGANgHIAtBRIgHAaIgBABQgKAIgKATQgKAUgGAIIgBACg");
	this.shape_882.setTransform(878.6,567.5);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#9EB705").s().p("AgmgrIABgMQAEACACAFIACAIQAGATANACQAMACAUgOIACAAIAPAfIgZAdQgOARgNAKg");
	this.shape_883.setTransform(149.8,607.5);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#1A8C46").s().p("AgLASIgDgCIAAgMIAUgZIAJATIgBAMQgBAAgLAKQgCACgDAAQgEAAgEgEg");
	this.shape_884.setTransform(144.5,602.1);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#43A037").s().p("AgMAKQgJgNgBgLIAIgBQAGgCAEgEIANgNIANAsIgUAZIgOgZg");
	this.shape_885.setTransform(142.9,599);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#49AF2F").s().p("AgVAvQAMgLgCgRIgFgbQgFgXAAgjIAHAAQAAAPAIAKQgTAPAZAEIAWA4IAAANIgNANQgEAFgFABIgIABg");
	this.shape_886.setTransform(141.5,590.7);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#56A62A").s().p("AgSAKIAAgFIABgBIAHgFIACgCIAJgKQAHgIALgBIgNAYQgIANgIAIQAAgJgIgEg");
	this.shape_887.setTransform(660.8,586.8);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#36A533").s().p("AAEBGIAAgkQgDgUgLgOIgFgcQgEgRACgLIAAgBQAFgHAMgCIAIgBIALgCQgJBRACAwIAAADIgHAHg");
	this.shape_888.setTransform(658.5,580.2);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#189642").s().p("AABAyQgDgDgEAKQgEgDABgDQgGgPABgWIAAgrIAAgKIAAgLQABgFAEgCIADAAQAFgBACAHQADAHAEABQgDAQAGAcQAGAfgCANIgGAOIgIgJg");
	this.shape_889.setTransform(667.1,589.6);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#1EA53D").s().p("AgJAnQAAgfgEgKQgEgOgCgYIgCgnQAFgBAGACIAFADIAMAJIAPBxIAAATQgEgBgDgHQgDgHgFABIgCAAQgFACAAAFIAAALIAAAKQgJgPAAgag");
	this.shape_890.setTransform(665.7,578.6);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#43B22D").s().p("AgaA8IAAgZQgPguAWgeQAAgIAHgEQAOAaALgMIAUgUIAAAMQgNAQgCAfQgCAkgGAMIgKACIgJABQgMACgFAHIAAAAg");
	this.shape_891.setTransform(659.4,568.4);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#28B538").s().p("AAGBLIgFgCQgFgDgFACQAAgJgGgaQgEgWACgNIAAgMQAIgKAAgZQAAgZAKgNIASCHIAAAgIgNgJg");
	this.shape_892.setTransform(664.5,563.5);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#1B9B42").s().p("AgZA2QAJgaAEghQABgMABgwQAcAxAIAZQgNAkgmAVg");
	this.shape_893.setTransform(126.9,586.9);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#50BD29").s().p("AAABWIAEAFIACAFQABAEAAAFQgZgEASgPgAAKBHQgFgLgMABIgHAAIgIhSQADgLgHgeQgGgZAJgPIABgCIAHAGIAeBAQAQAagBAhIgIA9IgCAAQgEgDgGgMg");
	this.shape_894.setTransform(140.8,578);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#199E67").s().p("AgPBQQABgRgFgnQgFgkADgVIAIgGQAQggAKgPQAEgHADADQABABACAFIgOBYQgJA1AAAjQgJgBgGgLg");
	this.shape_895.setTransform(63.4,600.1);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#3C8D1A").s().p("AgKALIgFAAIAfgVIgJAVg");
	this.shape_896.setTransform(796.4,599);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#47A536").s().p("AgHAWQABgIgBgJIgCgOIgFgfQAMAFAGAPIAHARIAEAGQgFAUgQATg");
	this.shape_897.setTransform(794.9,595.2);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#299834").s().p("AABASIgBgBQgDgDgCACIgBAGIgBgBQgIgLABgPIAAgKIAAgTQAYAoAFAdIgOgRg");
	this.shape_898.setTransform(794,581.2);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#1E9141").s().p("AgCA4IgHgQQgHgPgMgGIgBhLIACgGQABgCAEADIACABIAOARIAkBLQgMACgFAMQgFAPgHADIgDgIg");
	this.shape_899.setTransform(796.3,589.1);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#24AF69").s().p("AgfAeQAAgGACgGQACgHAGgIIAUgWIAVgZIABgBIAJgDQAEgCgCAJQgCAGgSAhIgcA0g");
	this.shape_900.setTransform(808.5,581);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#20A73F").s().p("AgSAmIAAhYIAlAzIgTAXQgGAIgCAHQgCAGAAAGg");
	this.shape_901.setTransform(806.4,578.9);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#248B39").s().p("AgDAgIAAgLQABgdgIgxIAHABIAJAMQAFAIAAAFIAABZQgLgKgDgQg");
	this.shape_902.setTransform(803.5,577);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#037524").s().p("AgdATIAAgBIgHgXIABgZQAHAFAIAPQAHAOAJAFQAKgHACgNQAJgdAUgXIgGBBQgGAggRAWIgHAHg");
	this.shape_903.setTransform(795.6,563.7);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#24AE3A").s().p("AIQBRIgjg1IAHgHQARgVAGggIAGhCIABgSIAAgNQALABACAHQACADAAAKQAAAdAHANQgDATAGAjQAGAjgBASQAHAwAAAfIAAAKQgSgSgVgfgAoRBDIgOgrQgHgTgJgMIgHgIIAAgMQAMgCAMAIIAUAMIABAAIABAKIADAGIADADIAABNg");
	this.shape_904.setTransform(746.4,567.2);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#468C11").s().p("AgiAhIgGg6IABAAQALAAAWgHQARgCAHATIABADIAIAGQgCAJAIANIAIARg");
	this.shape_905.setTransform(810.2,596.8);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#71C321").s().p("AgsAcIAdg0QAWAIAQgMQAFgEARgXIAAAUQgUAhgyA6QgOgIgFgUg");
	this.shape_906.setTransform(811.4,583.2);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#1E8339").s().p("AgiAfIAGAEQALAIAIAQIAQAcIACgIIgBgBQgagwAMgmQADgKAEgIQABgBgDgKIANggIAAgCIAJgNQAFgIAIgCQADAYgFAqQgGAvAAASIABAOQgHAFgBAIQgBAFADAKQADAJgGADQgEADgKABQgRgUgVgsg");
	this.shape_907.setTransform(819.9,582.1);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#2C9A4D").s().p("AgsBMQAOgkABgbIARg+IASguIAEA2QAKgFAGgIQACgFADgKIAOgHQgGARgBAWIAAAlQgHAEgBAIIAAAOQgHACgGAIIgIANIgDACQgKAGgNAPQgPATgMAFg");
	this.shape_908.setTransform(820.3,570);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#76C820").s().p("AgJAoQgPgGgBgKIAAgBIgKglQgFgSgBgQIABAAQAEAQANAIIAAAEIADgCIAEABQAOAHAdAAQANAQACAbQgCANgNgHQgOgJgCARQACADgCADQgDgEgRgFg");
	this.shape_909.setTransform(164.4,581.1);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#249212").s().p("AAhBLQgagdgHgBQgJAAgbAcQgIgPAAgaQACghgCgHIAAgGIABAGQABgGgBghQgBgXAIgPQACAFgCANQABALANACQAUAEAKgDQAQgDAHgQIAAAXQgBAOAJAIIABAAQgDAVAEAjQAGAngCASg");
	this.shape_910.setTransform(57.3,599.6);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#198E49").s().p("AgZAVIAEgMQAKgPAAgFIAAAAIAIgHQAEgFAFAJIAUAhIAAACg");
	this.shape_911.setTransform(300.4,598);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#B1CD10").s().p("AgSAOIANgTIAHgOQACAAAHgIQAFgGADAOIgGATIgNAeIAAAAQgQAAgCgQg");
	this.shape_912.setTransform(301.2,587.2);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#27A23C").s().p("AggAfIAQgaIABABQABAGgBAJQABAJAMACIgNAUQgPgGgCgPgAAGASQgDgTgSAHIgBgBIANgcQAGgSALgKIABAYIAAAAQAAAEgCAJQgBAIAGABQASAEgEAGIgJANQgEgNgEAFQgIAIgBAAIAAAAg");
	this.shape_913.setTransform(300.9,583.4);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#32B041").s().p("AgKAFQAAgHACgEQADgHAMACIAFAAIgJANQgFAIgIADIAAgIg");
	this.shape_914.setTransform(300.3,575.8);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#1EAA6B").s().p("EApYAA8QgEgRgLgHIgBAAIgWgaIgPhMIAXAOQAGAUAWARIARATIAAAsIgCATgEgpHAAqQgSgOgNgfIAMgfQALACAJgJQAKgJAFgDIABABQAAAIgHASQgEAPARAKQgBAJACAWQAAASgIAMg");
	this.shape_915.setTransform(567.6,590.7);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#258B3A").s().p("AgHAwQAAgMgGgEQgIgJgBgOQABgPgCgIQAWgEAGgOQAFgLgDgTIABAAIAHgBQACAFgBATQAAAPAIAIIgBAEIgBAfIgQAVQgJAMADAMQgGgEgBgMg");
	this.shape_916.setTransform(278.2,583.3);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#F2F8F1").s().p("AAPAkIgBgYIACgRQAAgLgKgGIgFgBQgMgBgDAHQgCADAAAIIAAAHIgCAcQAAAXgbgIIgDhEQgCgXAaACIACABQAIABAQgDQARgCAJAEIAOAIQAGAKgBASQAAATADAHIgHAaQgCAEgEAAQgIAAgOgMg");
	this.shape_917.setTransform(300.9,577);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#0C6912").s().p("AgKgBQAEgLAOgPIADAFQADAFgCAJQgDANAAAEIAAAAIgOATQgKgPAFgOg");
	this.shape_918.setTransform(296.7,561.5);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#27AF3D").s().p("AgQBGIgCgBQgRgOABgXQAFgagBgMQAAgEAFgTIAAgBQgBgEAEgOQABgJgCgFIgDgFIACgBIAGgBQASAMATgLIABAOQgZAeAQAZIAYBAIgBAFQgJgEgRACIgTACIgFAAg");
	this.shape_919.setTransform(300.3,565.5);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#2F9653").s().p("AgQADQACgDAHgBIABAAIAIgCQAMgEACAHQADAGgLAAIgYgDg");
	this.shape_920.setTransform(288.8,582.3);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#409F5B").s().p("AAAAXQgWAAACgXQABgWATAAQALgBAGAIQACAFACALQgEAWgQAAIgBAAg");
	this.shape_921.setTransform(289.3,577);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#80CC33").s().p("AgKA2QgIgNgEgCQgIgHgMACIABgFQAPABAFgGQAEgGAAgMQgBgTACgoQACAFACAMQAAAKAFAGQABAXAJAMQAMAPAcADIgJACIgBAAQgHAAgCAEQgOgDgHABQgHADAAAOg");
	this.shape_922.setTransform(284.7,578.7);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#75AA37").s().p("AgSgbQAEACAHABIAHgBIAJABQAGAAAEADQACAPgKAaIgcAIg");
	this.shape_923.setTransform(287.5,570.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#85B12B").s().p("AAJAfIgJAAIgIAAQgHgBgDgCQgHgMAAgSQAAgVgBgLQAYAAAGABQAQADAGAPQACAKgEAPIgGAZQgDgDgGgBg");
	this.shape_924.setTransform(287.6,564.6);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#94BC28").s().p("AgRgWIgCAAIgBAAIgCAGIgHACIAAgOQABgIAJgEIAMAHIAmAqIAAABIgCAfIgGAAg");
	this.shape_925.setTransform(295.5,554.4);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#309E4E").s().p("AgSAeIAAgXQABgIADgIQAGgPAPgPIAMgKIgIAxQgFAGgFAKIgDAJIgEANIgEANQgIgJAAgMg");
	this.shape_926.setTransform(49.5,563.7);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#C0ECFA").s().p("Ag8ABIgbgBIA8AAQgTABgKAAIgEAAgAAxAAIAnAAIgMABIgFAAQgIAAgOgBg");
	this.shape_927.setTransform(49.2,28.4);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#D3F1FC").s().p("AAAAQIAAgfIABAfIgBAAg");
	this.shape_928.setTransform(670.5,52.7);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#4DBC29").s().p("AgVBVIAAAAIgYg5QgOgWAAggQACglgBgTIgBgDIAGgBIAIAOQAEAMASASIAQATIAAABIAzBLQAGARAKAEIAAAFIgHAAQgPAIgWAAIglgCg");
	this.shape_929.setTransform(861.6,546.3);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#2B8C1F").s().p("AgVAiIAAg/IAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgDACgDIACgHQAIAFAKAYQAIAUARAFIAAAIQgOABgJALIgOATg");
	this.shape_930.setTransform(858.4,534.2);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#F0F9FA").s().p("AAIgYQgCADAAADQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIAAAAIgIAnQgUggAcgRg");
	this.shape_931.setTransform(855.4,532.7);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#81A307").s().p("AgdA0IgGglIA5hFIAOASQgFAMgSAcQgQAagEAQIgJAIIgFABQgEAAgEgDg");
	this.shape_932.setTransform(59,540);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#308F10").s().p("AgQAnQABgUAGgYIAPgrIAHgCIABADIADA2QgDAKgIANIgPAVQgFgCgCgKg");
	this.shape_933.setTransform(296.4,531.8);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#24B03A").s().p("AYnB+QADgegGg3QgGg6ABgaQALgIAGAKQAHALAFgBIAKASQAIAogCARQgNALABARQAWAAgGAGIgLAMQgTAEgDAGQgDAGAIAUIgIAOIgFgOgA5QAaQgDgqAKg1IAJhGQANAMAAAaQABAcAHALIAAAyIABATQABAKgCAIQAAAFACAMQAAAJgOABIgEAAQgYAAADgag");
	this.shape_934.setTransform(757.5,568.8);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#AAF40A").s().p("AgBAzQABgUgOgkQgOgogBgXIApA9IACACIAQAmQAAAIgIALQgMANgCAEg");
	this.shape_935.setTransform(917.3,560.5);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#5D8E0B").s().p("AADAXIgJgCIgCgMQAEgWANgJIAAAmQgBAGgFABg");
	this.shape_936.setTransform(919.4,552);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#3A9B39").s().p("Eg5aABiIgvhfQAPgFAJgOIABgCQAIgVAAgDQADgLgHgJIgFgFIgBABIABgHQADABAEgBIADgCQAEgDABgHIAHgMQARAXATAjIAfA8IgGAGQgNALgNAVQgUAfgIAJgEA5FABKIgQgmIAAgEIABg2IAKACIAAAAQAEgBABgGIAAgoQADgTANgCQAFgBAEAGIAGAMIAmBFIgnBLIgCAEQgFAIgHAAQgHAAgJgLg");
	this.shape_937.setTransform(554.9,556.4);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#2B9C4F").s().p("AgDAwIAAgCQgJgUACgoIAAAAQAFgFAFgMQAEgLAHgFIAAA4IAAABQACAHgEAMIgGATg");
	this.shape_938.setTransform(910.8,571.6);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#1EA53E").s().p("EA/fAAsQgDgLgOgPQgRgSgEgGQAGgJACgWQAAgWAHgKQAcgCANgMIAEgFIAAAGQgBApAIAVIABABIgCApQABAYAIARIAAAOQgBAHgGAFQgCgagcgTgEhADAA5QAIgPABgeQAAgdAGgOQAIghAlgMIABAAIgBANIAAAQQAAAKAHAGIABAOQAAADACADIAFAGIg0A+QgHAIgFABQgFAAgGgJg");
	this.shape_939.setTransform(501.2,578.3);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#1E7213").s().p("AAKAiQgOgTgHgLQgOgUAHgVIADgJIAdA+QAJAQgCAPIgLgNg");
	this.shape_940.setTransform(908.3,548.1);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#05862C").s().p("AAXBeQgDgfgLgcIgHgEQgCgNgBgGQgEgLgKgFQgGAEgEANQgFAMgHAGQgHgIgBgMQACgMgBgHIARhAQADgDAEgOQADgMAKgDQAJAJAHAYIgEAJQgFAWAMAUQAHALAQASIALAOQAAAigCAJQgEAXgQAQIgBgLg");
	this.shape_941.setTransform(905.9,550.6);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#4EA93A").s().p("AgOAdQgGgXADgLIAAAAQAPgfAAgaIAVBxIAAAHQgKgNgIAFIgLANQACgKgGgYg");
	this.shape_942.setTransform(843.2,540.8);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#4E9838").s().p("AgdBKIgHhfIAAgHQAcAFAEgTQAJgdACgCQAAAKADAKQABAKAGAKIAVAkIgBAgIgLgHQABANgNAKQgOAKgGAGQgKgLgEAJQgDAHgDACIgBAAIgCAAg");
	this.shape_943.setTransform(848.9,548.8);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#E4F2E5").s().p("AgMBOQACgZgGgsQgBgDADgMQABgKgEgGIgEg3IACgCQAMAKAIAUIALAUQAFAJAFAEIgIBLIgGAHQgDAAgFAJQgCAFgEAAIgGgCg");
	this.shape_944.setTransform(299.9,534.8);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#A9BE1F").s().p("AAPAXIgLgUQgIgTgMgKIgCgCIgHACQgBgIAHgBIAJABIADABIAiAgIgCAlQgFgEgFgJg");
	this.shape_945.setTransform(299.6,529.6);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#40A139").s().p("AgIA9QgYgZgMgaQAIgNgBgcQgBgcAIgNIAAAAIAAAAIAAgNQgBgJgGgDIAFgHQAUAPgSARQAIAVADgJQADgMAQgCQATgCADgCIAHAMQgCAHgHALQgCAKATAEIAIAOQgSAkACAaQACAGAEABQACABAIgCQgJAVABAkQgfgagOgSg");
	this.shape_946.setTransform(304.5,551.3);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#98BC29").s().p("AgfANQgEgUADgNIAAgBIAGgBIADABQAuAJAMgjQgBAfgPAmQgDANgPAGIgZAHIgHgjg");
	this.shape_947.setTransform(708.8,557.7);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#2AB337").s().p("AgTA9QAGgWgBgKQgHgJAFgQQAFgSgCgGQAGgKACgaQABgRAFgKQADgFADgDIABAOIAAABQgDANAEAVIAHAiQgCAJADANIAGAWQgUAggWAXIgCABQgCgMAEgTg");
	this.shape_948.setTransform(704.7,563.3);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#ACC626").s().p("AgiAiIgDgBIAMgiQAJgUAKgOQAGAKAKAAQAGAAAOgEIAIAOIAAAEIAAAMIgJAGIgGACQgJAbgeAAQgIAAgKgCg");
	this.shape_949.setTransform(710,552);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#55860B").s().p("AgWAPIAmhEIAHAAIAAAmQgEADgCAEQgHAJAAARQgCAbgGAJg");
	this.shape_950.setTransform(703.1,555.7);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#63940E").s().p("AgKAFQAMgTAGgMIAAgBIAOgNIgHA/IgGAAQgKgDgHAJQgJALgEABQgBgQAMgUg");
	this.shape_951.setTransform(703.9,548);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#367D11").s().p("AgVBJQAGgbgBgEIgNiSQAGAEABAIQABAMACACQANgOAJgCQALgEAMAJIAEAFQACAbgJA2IgBAQQAAAJAIAGIgBABQgGAMgNAUQgLAUABAQIgPAIQgKgNAEgTg");
	this.shape_952.setTransform(701.7,542.4);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#458B14").s().p("AgWAyQgBgIgHgEIAAgUQgCgKgFgIIAAhAIABABQAPAUASAhQAVArAIALIAAAAIABAAIAJgVIACASQAAAJgIAIIgEgFQgMgJgLAEQgJACgOAOQgBgCgBgMg");
	this.shape_953.setTransform(701.8,528.1);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#759C08").s().p("AgNAWQAHgiAQgWIADACIAAA/QgFgIgMAMg");
	this.shape_954.setTransform(958.4,542.3);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#28B839").s().p("AACDfIgCgBQAFgYAAghQgCgoABgTQAAgOgPAAQgKAAgFANIABAPQABAIgLADQgBgKACgbQADgYgEgNQAHgXACgnQACgiACgSIACgLIAEgRQACgJgGgHIAFgMQAFgRABgLQADgXgHgTQAHgFAEgOIAFgMQACgFAEgDIAAAGIAGBzQACAHAAAkQgBAaAPAOQgKAQAKAPQgGAGAAAKIACAQIAIAmQAEAXgHAPIgPAAIAAgJQgBgHgHgDIAAB3IgGACg");
	this.shape_955.setTransform(327.6,559.3);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#329F4D").s().p("AgoA8IAAgGQgBgNAJgQIAKgSIAEgJQAGACAAAFQAAAGADADQAWgPAIgbIAGgyIgCgOQAAgJARAEIgCALQgDATgBAhQgCAogHAXIgtBGQgagNAEgag");
	this.shape_956.setTransform(321.3,562.1);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#A6EB0F").s().p("AguBFIATgeQALgRACgPQAMgKAJgPIAOgfIADgCIAXgaIgaBaIgEAKIgKASQgIAQABANQgKgHgLAEIgRAKg");
	this.shape_957.setTransform(317.3,560.5);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#40A43A").s().p("AgPAPIgJhcIgBgPIANAPIADguIAGAAIAVCsQACALAFAGIABABIgPAeQgJAQgLALQgBgtgFhAg");
	this.shape_958.setTransform(316.9,548.8);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#1A8118").s().p("AgQABQgKgcAagXIAPAVQAGATgCAVQgCALgFARIgEAMQgTghgFgRg");
	this.shape_959.setTransform(324.7,543.9);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#749D0B").s().p("AAFA/QgFgKgGgCIgIgPQAGgIgFgJQgGgJgDgFIgGgMIAAhAIAGgCQAIgCAFAFIAEAEQAHAPAGABIAVAkIAAAAIgPBZQgEgCgFgKg");
	this.shape_960.setTransform(309.7,544.1);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#098622").s().p("AAJAdIgEgEQgFgFgHACIgGACQgRgjAQghQAEAPAPAdQAPAcADARQgGgBgIgPg");
	this.shape_961.setTransform(308.2,534.5);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#2F8D13").s().p("AgNAOQACgVALgXIALASQAFAIgBAIIAAACIgOAOQgGAJgJACQAAgIABgJg");
	this.shape_962.setTransform(321,534.4);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#5A9E19").s().p("AgagKIAZgqIAcAlIgBAHQgLAWgCAXQgCAIABAJQgXgYgPgog");
	this.shape_963.setTransform(318.3,532.2);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#B1CE82").s().p("AAHANQgHgBgDgFIgHgNIAIgGQAMAMAAANIgDAAg");
	this.shape_964.setTransform(425.1,535);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#C7DDAB").s().p("AgBALIgNgZIAEgDIAFgFIAUAmIgIAGg");
	this.shape_965.setTransform(423.3,532.1);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#DDEED8").s().p("AgJACQgFgKAJgLIARAfIgFAEIgEAEIgMgSg");
	this.shape_966.setTransform(421.4,528.7);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#769D0A").s().p("AADAtQgCgHgLgYQgKgRACgOQACgSAMgJQADgEAEgCQARAcgBAZIAAADIgBAWQgBAOgGAJg");
	this.shape_967.setTransform(431.8,544);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#E8F1D9").s().p("AgFgNQANAPABAMQgYgHAKgUg");
	this.shape_968.setTransform(902,528);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#589D39").s().p("AgPANQgHgXgKgJQgGgMAIgQIAHgWIABgGIAWAOQABAOAMAIQACATAVAHIgHAtQgFAagKASg");
	this.shape_969.setTransform(908.4,542.1);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#CAD724").s().p("AgqA3QgDgMAFgHQAJAHAFgGQADgDADgHQAKgQAPggQAMgHAFgTIAVgZIACAHIgBAHIgIAVQgHARAGALQgKADgEALQgEAOgDAEQgFAQgPANQgHAFgYAQQAAgDgFgPg");
	this.shape_970.setTransform(901.6,541.1);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#C9D723").s().p("AgoBFIgCgRQACgCAKgDQAHgDgDgHQAAgLAKgPQAMgPACgIIAVgsQAEABAGgKQAFgIAJAKIAAABIgRAqQgHAGgBAOQgBANgFAGQgHAKgIAXQgKARgZAAIgCAAg");
	this.shape_971.setTransform(482,541.5);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#40A438").s().p("AgPBwIACgiQACgWgKgNIgBgGIABgHQAZgggLg4QAIgGAAgMIAAgSIAAgCIAJgPQAEAFACANQAAAMAGAEIgKB1QgCAOAGAIIAAASIgIAOIgXASg");
	this.shape_972.setTransform(492.2,546.7);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#0D8B2C").s().p("AgBAKQgMgSgLgJIgBgTIAHgCQAFgCACAEIAlAmIAAABIAAASQAAAMgIAHQgHgHgMgXg");
	this.shape_973.setTransform(489.6,536.8);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#EEF9F0").s().p("AgFALIgCgLQgEgaANgYQAFAEABAGIAAAAIABAKIAAAoQABAZgJAQg");
	this.shape_974.setTransform(496.6,528.7);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#D2EAD9").s().p("AAAAKIAAAAQgBgGgFgEIgBgJQABgGAFgEIAJAIIgCAeIgGABIAAgKg");
	this.shape_975.setTransform(497.5,523.6);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#95C680").s().p("AgHACQACgLANABIAAAEIgBADQgBAHgEAEg");
	this.shape_976.setTransform(498.1,521.4);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#218B13").s().p("AgOBbQgBgLABgfQACgdgIgQIgCgmIABgfQAEgEACgHIAAgEIAAgEIABgHIACACIAIAPQAGAKARgHQABAAABAOIABARIABAHQACAUgGAhQgFAmAAAPIgaATIgCgBg");
	this.shape_977.setTransform(500.5,529);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#0A8729").s().p("AgQgZQAGAHANAKQAMAKACALIgIAMQgRgRgIghg");
	this.shape_978.setTransform(846.5,534.4);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#2CBE38").s().p("AAEByQgMgYgOgKQgFgHACgOIAKh1IAPhbIABAAIAHAnQABAIgDAQQABAOAOAHIACANQgLAUAEAZIANArIgFANQgDAHAJAGIgGARIgBABIAGAjQADAUgCAPQgKgJgQgbgAgdBwIAIgOIAFAGQADAGAAAIIgQAUg");
	this.shape_979.setTransform(496,544.8);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#1D8711").s().p("AABCBIgRh3QgLALAAAYQAAAYgHAKIgBAAIgBgvQgBgdAJgSQgDgUAGgkQAGgpAAgQIAAAAQAIAUAjASIAAAAIAAAMQABAIAGAFIABANQAAAHAGAFIgPCRIgWAYg");
	this.shape_980.setTransform(804.5,534.1);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#298D23").s().p("AgHAWQACgLgCgFIADgDQAEgEABgLQABgQAGgJIAAArIAAAAIgBASIgBABIgHANQgGgGAAgKg");
	this.shape_981.setTransform(812.1,554.2);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#AFC827").s().p("AgpA2IACgSIAAgBIAkhFQACABALAEQAKADAAALIAWgmIgIAtIgHAMIgBANQgBAIgFAEQgGAMgXACQgXADgIAIg");
	this.shape_982.setTransform(816.9,551.2);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#0A862A").s().p("AgEABQgHgKgCgLIgBgIQAJADAHAJIAMAOIABAAIgBAfQgOgTgEgJg");
	this.shape_983.setTransform(826.3,544.9);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#246C11").s().p("AAXBMQAAgHgGgCIgCAGIgVgUQgEgMgagTIAHgsIAXg/QAMALABAOIABAIQADALAGALQAFAJAPATIAAAYQgIAJACAXQACAWgKAJIAAgJg");
	this.shape_984.setTransform(824.1,548.1);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#238912").s().p("AgDgeIABgNIgBgIQABgEADgBQAGgBACAFQACADAAAGQAAAygNAyIgIABg");
	this.shape_985.setTransform(814,530.6);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#378011").s().p("AgLglIAWABQAPAAAHgHIgGBYIgCACQgJANgHAIQgGAFgFADgAghg3IAAgNIAAAAIAAgHIABAAQAGAGACAJIgBARQgHgEgBgIg");
	this.shape_986.setTransform(810.2,531.9);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#49A139").s().p("AgKAzQgBgjABgQQADgdAMgVIAGAAQACArgPA6g");
	this.shape_987.setTransform(10.4,554.1);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#43A036").s().p("AgEgWIATAIIgdAkg");
	this.shape_988.setTransform(4.8,565.3);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#4BAA3A").s().p("AgOAnIAAg+IACADQAGgDAAgKQABgLAJgCIALBOIgMAOIgDABQgHAAgHgIg");
	this.shape_989.setTransform(1.9,540.8);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#289512").s().p("AgVAuIAAAAQgDgIAFgPQAFgQgBgHIAJhTQALAEACAJIAAAOIAIA4QgBAMAFAbQAGAYgDAOIAAAHQgigSgJgUg");
	this.shape_990.setTransform(804.6,516.6);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#A5EE0D").s().p("AgkBSIAAgzIAPghIAdgvIABgBIAYggIAEABIgjBlIgJAtIgIASIgVgBg");
	this.shape_991.setTransform(4.1,561.1);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#2F9E51").s().p("AgnApIgCgGIAIgTIAeglIARgVQAKgNACgLIAIAAIAIATQgHAEgBAIIAAANQgIAIgHAXQgPAMAAAVIgOAZg");
	this.shape_992.setTransform(6.7,565.9);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#C3D322").s().p("AAHBCIgbhSIgGgYQgDgMgIgJIAAgRQAMAGALAUQAJASANAEQACAOALAVQAOAaACAKIgGAmg");
	this.shape_993.setTransform(662.7,541.8);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#AFCB26").s().p("AgSAXIAAgBIgBgTIABgFIAWAMIgEAPQgBADgEAAQgFAAgIgFgAALgbIAJAMQgCATgOAGg");
	this.shape_994.setTransform(665.3,548.7);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#327D13").s().p("AgRgiIABAAQAJgIAHgQIAMgbIAFALQACALgCAOIgHAjIgDAxQgCAdgHAUIAAACg");
	this.shape_995.setTransform(678.8,545.5);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#40A137").s().p("AAZCbQgdgzgdgYIgBgaIABgCQAHgVADgcIADgyIAHgiQACgPgCgKIgFgLIAUgmIACACQgCAbACAJQACAdAIA5QAFAxgCAjIgBABIAAABIgHgGQgHgBAAAEIAEAGIAcBaIgIAIIgBgBg");
	this.shape_996.setTransform(681.9,548.8);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#258712").s().p("AADAaQgHgLgLgDQgEgCgFgBQAVgZAHgfIAOAAQgEAGADAKQACAMAAAEIgBAEQgBALAEAQQAFAXgBAJQgGgDgQgTg");
	this.shape_997.setTransform(684.8,531.6);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#419139").s().p("AgNA7IgUgOQAIgpAdghQAPgMAAgUIAHAAQAAAJAIADQgJAOABAfQABAdgIAOQgCAAgHgIQgFgGgGABQgBAIAEAJIAJAQQgHADgGAAQgGAAgFgDg");
	this.shape_998.setTransform(878.6,554);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#42AE2F").s().p("AgOAAQgGgzADgcQANAIACARIAAABIAGAXQACAhANAYIgBAfQgDAQgYAGQABgZgGg3g");
	this.shape_999.setTransform(886,557.1);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#128A2D").s().p("AgHAYIgHgXIAAgBQALgKADgVIAAgGIAAAAQAMABACAJQACAEgBALIgBAZQAAAPgHAKg");
	this.shape_1000.setTransform(887.2,551.6);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#39A038").s().p("AAUB5QgHgIgHgEIgLgRQgIgLgOACIgGAAIAHgZQAKg3gvguQAIgOgBgeQgBgfAIgOQADABAJgDQAHgCAEAEQgDAcAGA1QAGA1gBAaQAYgGAEgRIAAgdIAAgsQAHgKABgPIAAgaQAHgDANgJQANgGAMAFQADAUgFAfQgFAmAAANQggAXgFASQgGATATAVQgEARACAIQACANAQAGQgHAIgEALIgFAVg");
	this.shape_1001.setTransform(886.9,562.3);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#19850F").s().p("AgKAAQAJgIgBgQIAAgaQAIAJgBAQQgBAXABACQAAAHgBAMQAAAMAHAHIgCAHIgTAGg");
	this.shape_1002.setTransform(333.3,530.6);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#9CC278").s().p("AgFgXIAFgBIAGAGIABANIgBAAQgGAEAAALQAAAMgGADg");
	this.shape_1003.setTransform(351.1,540.8);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#91AF06").s().p("AgJAxIgBgPIgBgIQAAgEgKgUQgIgOAFgMIATgaIAFgOIAEgEQADgDADABIACAAQAOACABAYIgdBzQgGgJgBgNg");
	this.shape_1004.setTransform(897.3,534.4);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#73AB3A").s().p("AAMASQgFgSgKgIQAAgYgOgCIgCAAQgEgBgCADIgEAEIgHAOIgSAZIgBgfIARgRQAFgEAJgLQAKgGAMAOIANgHIAAALQgKAUAZAHIAeArIgVAZg");
	this.shape_1005.setTransform(900.3,530.8);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#DCEFE1").s().p("AgFAIIAEgWIAEgBIACANIgDASg");
	this.shape_1006.setTransform(868.8,537.9);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#A1CA73").s().p("AgGAHIACgCQADgFABgIQAAgLAFgFIACAYQAAAQgHAJIgGAAg");
	this.shape_1007.setTransform(869.3,533.9);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#9EB605").s().p("AgaAsIAJgTIAIgIQADgEgFgEQgDgDgFAFQgDADgDAFIgPAMIAAgGIAcg7IABgFQASAQALgCQALgDAMgWIgIBGQgGAEgBAMQgBAJgCAEIgCACg");
	this.shape_1008.setTransform(866.5,529.4);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#C5D825").s().p("AAGAnIgchPQACgBABgGQACgDAFAGIAjAwIgBAlIAAABQgGAGgDABQgEAAgDgKg");
	this.shape_1009.setTransform(892.4,538.5);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#42A43A").s().p("AggBTIgMgSIABgEIgCgaQALgQAAggQAAgiAFgOIAAgTIADgTQAFAGABAHIAAAPIABAJQACAFAGgCQAYgJAHAPQAFAHAHARIAAAAIANAXQACAEgEAJQgFAJAIAFIg/BPQgJgFgGgMg");
	this.shape_1010.setTransform(872.1,547.6);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#45B42C").s().p("AhBBOIgIhGIABgHIAGAAIAMASQAGAMAJAFIA/hOQAGgFAQgSQAMgOAMgIQAGAGgDAIQgFAJABADIgHAAQgRAMABAUQgdAigIAoQgRAJgEAYQgNAJgNAAQgOAAgNgJg");
	this.shape_1011.setTransform(874.3,554);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#529912").s().p("AgDAcIAAgGIgQgLQgLgHgDgGIAWgUIABAAQAWACAWgUIAAAxIgXAgg");
	this.shape_1012.setTransform(328.9,534.8);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#6CAA37").s().p("AARBXQgKgKgIgPQgTgegFgHIAFgbQAEgQgEgMIAAggIACgHIAAgMQAAgHACgEQACgEACADIACAFIAHAOQACAFADAXQADASAHAKQABAHgBAMQAAALAHAHIAHBNIgJgJg");
	this.shape_1013.setTransform(336.3,541.4);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#398401").s().p("AAGBAIgGgHIgIhXIABghQAFAEAEAJIACACIAFAMIgBAwIAAAVIgBAfg");
	this.shape_1014.setTransform(349.6,542);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#6EAA34").s().p("AgeAjQgHgIABgGQAKgEAIgJIALgRIABgCQAGgCANgOQALgPAOgDQgXAfgPAoIAAABIgVATQgBgCgIgJg");
	this.shape_1015.setTransform(327.7,529.9);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#95C286").s().p("AABA1IgBg3IAAgOQAAgIgHgEIAPgZIAABqIgEABIgDgBg");
	this.shape_1016.setTransform(185,543.7);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#5EA124").s().p("AgTAPIACgzIAIApQAIAAAEgFIAIgJIAJAHIgXAnQgEgSgMgEg");
	this.shape_1017.setTransform(314.7,521.5);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#128B02").s().p("AAAgZQAAgFAEgEIABASIgBAzQgPgeALgeg");
	this.shape_1018.setTransform(312.3,519.5);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#EDF8F7").s().p("AgXB3IABgdQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBIAXgnQANgNgDgKQgMACgFAOIgIAJQgGAGgHAAIgJgqIgCgRIgHh/IADgOIALAIIAyBzIAAABIAOAjQAKAXACAPQgXAYgHAbIgXArQgQgKAAgRg");
	this.shape_1019.setTransform(316.5,516.5);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#7DBD68").s().p("AgKAAIABgSIAAAAIAMAAQAAAEAGAMQAEAIgDAHIgKgIIgEAOQgGgIAAgLg");
	this.shape_1020.setTransform(312.4,501.5);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#249012").s().p("AgTBkQgQgPAFgZQAGgigCgIQAIgKAAgPIgBgZIABgBQAHgJAAgMIAAgXIAAgGIAAgBIAAgFQAFgDACgKQACgLAFgGIAWCqIACASQABALAFAHIgBACIgLARQgIAKgKAEg");
	this.shape_1021.setTransform(323.7,520);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#45A438").s().p("AAKBhQgJgMAAgBQgBgIALgGQAHgDAAgIQgBgIABgEQARAXgQAVIgEgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAIgBAGgAgaBBQgBgDABgCQAKgnABgMQAEgcgHgWQAKgJADgQQACgTADgLIALAkIAAABQgCAPAEAXIAGAlIAAANIgBgBQgCAOgQAQQgVATgEAIIgBABg");
	this.shape_1022.setTransform(178.7,545);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#7BA008").s().p("AgJAtIgGgmQgEgWACgPIAAgBIAOgNIAVAsIABABIAAAAIgWAsg");
	this.shape_1023.setTransform(181.6,542.1);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#4ABC2B").s().p("AAmB2IgBgOIgeg/QgBgXgNgPIgfg8QgTgkgRgXIAAgNQAPAIATAYQASAYAPAIQACAPARAJIACAAIAGAOIACgBIgBABIAJAMQANAXANAJQADgDABgIQABgEACgCIAEABIgIA/QgFAngJAbgABEg1QAHAIAAAOIAAAWIgIAHg");
	this.shape_1024.setTransform(194.9,558.3);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#227D12").s().p("AgTAAIAWgqIABgBIAHgOQAHAFAAAIIAAAOQgPAfAOAbIACAEIABgBQgKANABAOQgZgigFgYg");
	this.shape_1025.setTransform(183.2,546.5);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#459F23").s().p("AABAMQABgdgJgRQAEgRALgJIAABfIAAANIgHANQgBgLABgmg");
	this.shape_1026.setTransform(186.6,541.8);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#1B7E11").s().p("AgQAKIAAgCIgBgbQgBgRAJgLIAXAxQAMAVgUAZQgRgQgFgWg");
	this.shape_1027.setTransform(210.8,540.6);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#71AB39").s().p("AAGAZIgyhgIAGgCIAsAvIAAAAIAnAyQgEAHgCASQgCASgGAHg");
	this.shape_1028.setTransform(209.2,533.3);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#ECF7F3").s().p("AARA+IgQgiQgJgUgNgMQgFgDAAgGIAAgJIABgCIARghQABgDACgDQgBAEAEAEIAHAFQAMAFAAAHQgKAHAEAIIALANIAFAIIAABCIgKgCg");
	this.shape_1029.setTransform(218,523);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#289411").s().p("AgdBUQgBgTAJgMQgBADACAdQAAATgIANIgBghgAACAvQgGgDgHACIgKAHQgBghAIgzQAIg+ACgWQALARADAeIAFAyQACAHAAANQACALAEAIIACADIAAAJQAAAGAFADIgHARQgOgJgHgDg");
	this.shape_1030.setTransform(212.8,518.4);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#ECF7F5").s().p("AAGAxQAAgIgLgFIgHgEQgEgEABgFQAIgdATgtIAFgLIAAB8g");
	this.shape_1031.setTransform(219,514.3);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#0E8C29").s().p("AgIABIgNgXQAJgDAJAMQAHALALgIQAIAGgCANIgOAOQgHgIgIgOg");
	this.shape_1032.setTransform(5.6,534.2);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#349625").s().p("AgGAHQgFgGAFgHIABgCIABgDQADgGADgBIAHAlIgHAAQgFgHgDgFg");
	this.shape_1033.setTransform(12.9,534.4);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#74AE40").s().p("AgcAVQAXgVAGgSIAcgUQgCAQgKATQgOAXgCAGQgDACgDAGIgBACIgBADQgTgBgCgRg");
	this.shape_1034.setTransform(13,529.9);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#AABF05").s().p("AAMAxIgIgMQgLgSgNAUIgNAOIgEgCQAAgEANggQAIgWgFgQIABgDQACgaAMgEQAMgEAgARIAAAAIgOBlQgHgCgFgHg");
	this.shape_1035.setTransform(25.7,526.7);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#EEF9FB").s().p("Ag+gBIA0hhQAFgJAFgBQAEAAAHAIIA0BkIg/Btg");
	this.shape_1036.setTransform(27,509.1);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#337A10").s().p("AgHAWQgHgRAAgKIAAgGQAIgEAAgKIAFgKIACgHQAEgLAKgDIAAATQgHAGAAAMIAAATIABAdQAAARgIALQgBgKgHgZg");
	this.shape_1037.setTransform(467.4,552.9);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#CCD925").s().p("AAIAsQgCgBgDgGIgVg+IABgKIAAAAQABgFAGgDIAcArIAAAAIAAAkQgDACgEAGIgCAAIgBAAg");
	this.shape_1038.setTransform(473,539);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#8CC22D").s().p("AgIABIgCgBIABgSQAJABAFAHIAGALQgGADAAAFIAAABIgBAJg");
	this.shape_1039.setTransform(470.8,534.5);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#47A739").s().p("AACBMQgHgEgJAEQgLAGgCgGIgCgMIAAgTIAAgtQAAgcAHgSQACgGgDgFQgCgDgDgCIAHgUIACACIANASIAUA+QADAGACABQAAABABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAFgGADgBQAAAPgGAaQgHAfgBALIgOgHg");
	this.shape_1040.setTransform(471.9,542.7);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#078B2F").s().p("AgBA0IgXgzIgJgbQgFgQAFgMIA1A9QAEAGAMABIAAADQACAYgSANIAAgBQgFACgFAAQgGAAgFgDg");
	this.shape_1041.setTransform(37.3,540.6);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#C5D725").s().p("AgGAIIgMgqIABgFQACgFAEgCIAeArIAAABIgIAxQgLgPgGgYg");
	this.shape_1042.setTransform(51.8,539.9);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#0D8C2D").s().p("AgZAXIABgLIAAgDQAMgGAMgNIATgXIAHgBIAAABIgHAYIgkAsQgIgEAAgIg");
	this.shape_1043.setTransform(45.8,537.3);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#9AC82D").s().p("AgHAAQgBgEgCgBIAAgBIAAgMQAJADAEAIIAIAOQgEACgCAFIgBAFg");
	this.shape_1044.setTransform(49.5,534.5);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#F0FAFB").s().p("AgXBUQgRhPgEhUQAGgJAHgZQAFgWALgKIA7CHQgCBfgMA9g");
	this.shape_1045.setTransform(36.4,526.7);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#F0FAFA").s().p("AgsB1IgBgLIgHgmQACgGAOgYQAKgTACgQIgcAUIAAgXIA8iIQANAVALAoQALArAIASIAAABQAFAPgIAXQgNAgAAAEQgHAGgFgFQgFgIgDAAQgBAGAAASQAAAOgFAIIggAlg");
	this.shape_1046.setTransform(18.4,525.7);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#45B035").s().p("AApBVIgWgYIgHgUQARgWgSgVQAAgPgHgEQALgGAEgDQAKgFAEgEQAVgUgVgJIgCgBIgEgBQAEgGAKgDQANgEADgCIAGAaQgIAZgEAvQgEAygFAWIgBAAgAgIhOQgSACgIgBIgcgBQAQgGAZABIAoADIAIAKIAAAAIgPAFQgFgOgPABg");
	this.shape_1047.setTransform(437.7,584.3);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#53A038").s().p("AgYAkQgHgQAAgWIAAgmIAHABQABAFAAAKQACAHALAEQgBgFAEgPQAEgNgGgIIAIgMQAaAsAFAVQAKAkgcAgg");
	this.shape_1048.setTransform(440.6,564.6);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#53830A").s().p("AgKA3QgGgTgBgZIgBgsIABgDIACgSQAaAqAIApIgIAMIgOAPg");
	this.shape_1049.setTransform(438.5,555.1);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#6DAA36").s().p("ARYCHIgfg1IAAhXQAAgVABgEQABgKAFADIAHAFIABABIAgCXIgBANQgCAKgEAAQgEAAgFgIgAxniJIAFgFIAAANg");
	this.shape_1050.setTransform(333,535.7);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#29B737").s().p("AgNAAQACgSALg2IAOA8QAIAhgCAaIgnAaQgCghAIgog");
	this.shape_1051.setTransform(446.7,563.4);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#329539").s().p("AAAAzQgjg1Akg2IAPAMIAAATQgCALADAeQACAagFAQg");
	this.shape_1052.setTransform(455.3,563.1);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#479939").s().p("AgNBKQAGgPgCgbQgEgeACgKQAJAIAAAMIgCAXQAAAKAEACIACABQADACALgCIACgBIAAAaQAAAPgIALgAASAvIAAg3QADABABAEIAEAGIAAAsgAgZgoIAWg5QAHABADACIABABQACAFgFAGQgGAJABAKQACAGAIALIgHAAQgOgEAAAJIAAAOg");
	this.shape_1053.setTransform(458.1,561.5);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#69A93C").s().p("AgHAmQgJgKgCgGQgCgKAHgKQAGgFgDgEIgBgBQgDgDgHgBIAMgTQAKAGAFgIQAGgKADgBIAHAAIAAAHQgIAIAAAOIAAAVIAAAGQgGAEgBANQAAAMgHAEg");
	this.shape_1054.setTransform(459.9,552.9);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#108B2C").s().p("AgHAXQgBgRgGgGIABgMQAJgEAFgLQAHgMAGgEIABgBIAAADQgDAxAAAZQAAAEgCAEQgDADgHABQgGgHgBgPg");
	this.shape_1055.setTransform(447.2,549.1);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#3FA139").s().p("AHlAyQAGAAAEgDQACgEAAgEQAAgZACgxIAAgDIAAgQQABgKAHgFIAAAkIAbgBQAPAAAMAIQAEADABgFQAAgJACgBQAHAIgBATQAAAQAIAIIhCBSgAo9BGIgIgTQAIgLAAgRIAAgcIAAgUQAAgMAGgHQACASAQgBIAbgBQALADAEgIIABgQIgBgXQAAgOAIgIIAIBYQgQAQAYACQgQANgUAaQgYAfgKALg");
	this.shape_1056.setTransform(398.7,548.5);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#1D8411").s().p("AghglIAAgBIAHgeIACgCQAGgHAAgNQAAgSABgFIACADIABACQAIALAKgFIAWgLQgEAdAHA1QAHA3gDAbQgHAGAAAJIAAARIgBAAQgGAEgHAMQgGAMgIADg");
	this.shape_1057.setTransform(446.1,536.3);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#ECF7F0").s().p("AgHAFIACgXIAAgBIAAgHIAGgIQAKAOgEATIgGAkQgHgOgBgQg");
	this.shape_1058.setTransform(450,526.9);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#7DA108").s().p("AgTAHIgHggIgDgMIAAgNIAIAGQAGAGAGAIIAOAWQAGAJADACQAHADAJgFQgCAIgMAQQgKAPAAALIgSAAQABgSgIgag");
	this.shape_1059.setTransform(478.7,540.1);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FAFCFA").s().p("AjyBLIgBgtQACgPgDgLIAAgHQAEgOgCgfQAAgcAFgQIAAABIAVgDIAIABQAIAPAKgEIATgLIAtAAQATAGAYAbQAKAigIAhIgXAdQgMAHgQADIgfACIgHgBIgRgIQgIgGgDACQgCACgBAIQgBAJACARQAAAQgHAKQgIACgGAAQgUAAgBgYgAi6g2QgKAHABALQgFAbAHALQAIALAcAGQAVgCAGgNQAOgcgGgPQgGgQgcgLIgGAAQgPAAgJAMgAoMAvIgQgCIgWgKQgUgTgKghIAIgsIABgBIAUgRQANgKALgEQAmgEAdAFIAmAfQAFAWgCAIQgDAOgWAFIgqgCQgYgBgRAFQgIAbAmAEQAaAFATgXIAPgFIABAAIAEABIABABQAWAJgVATQgFAFgJAEQgFAEgLAFIgYADgAnpgjQALACADgKQADgJgIgHQgIgIgOgBIgIABQgQgBgIAJQgGAGgCAPQAKAEAWgDIAVACgAHbAuIgegTQgPgRgDgVQgCgRAEgaIARgTQAKgKAKgFIAYgGIAzABIAEADIACAAIAKAEQAYAQAMAdIAAABQAAA1gaASQgUAQgyAAIgWgBgAHpg9QgfAUAQAlQAEARAQADQANAHAMgDQAMgDAHgKQAZgigcgcQgFgJgLgBIgMgCQgMAAgGAGgAEIATIgIgRIgCgrIAJgVIAQgSIAXgMQAWgBAIgFIA0ALIAdAcIgBAJQgOASgWgLQgKgQgKgFQgOgHgTAKQgzAlAyAnQAQAMAQgMIAWgRQANgLARAEIAGAGQAEAQgMAMQgEAEgYAPIhDADQgagLgTgRg");
	this.shape_1060.setTransform(485.4,577.5);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#2BB838").s().p("AggCeIgBgZQAAgQAIgJIAAAAIAAAAQACAIgBANQABAPAIAMQAGgVAAgIQACgOgSgGIAAhlQAIgGAAgLIAAgUQAGgJABgNIABgXIABgCQAHgPAAgYQgCgiACgHIANASIAAABIAABDQABAlAGAbIAAADIABArQABAaAGASIAAAnQABAWAGAQQgdgFglAEg");
	this.shape_1061.setTransform(434.7,552.3);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#30771E").s().p("AgIAfIAIhEIAIAMIABACQABANgEAQIgGAgg");
	this.shape_1062.setTransform(945.8,543.3);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#479238").s().p("AghAmIABgHIAEgCQAKgLAAgUQAAgUAFgKQABgEACgCQAJAHAKgFQAQgIACAAIACADQAFAIAAALIAAAWIgHAEQgLAFgMAOQgNARgHAFg");
	this.shape_1063.setTransform(932.6,550.4);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#177714").s().p("AgGBSQgDgXgJgRIAAgnIAAgVQAAgLgFgIIgCgDIABgtQAGgEAHgQQAFgOAKgEIABAGQAEAMABASIABAkQABAMABAXQACATALANIAAABQgMALACATQAEAbgBAEIgFAaQgFANgMAHQgBgegCgMg");
	this.shape_1064.setTransform(937.9,550);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#F1FAFB").s().p("AAABpIgOgHQgLgOgCgUQgBgXgBgMIgBgjQgBgRgEgNIgBgGQgBgJAHgNIAJgVIAPgTQALAOAMAaQAQAiAFAIIgJBEIAAAAIgSAvQgDAMgHAAIgBAAg");
	this.shape_1065.setTransform(942,541.8);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#5C9F39").s().p("AABASIgHgtIgRA+IgBAAIgdgTIgBgfIAIAGQAGAEAEgIIAUggIAIgIQAIgCAhgCIAWgDIAAAvQgEAJAAAGQgRAXgGAiIgHACQgOgRgGgag");
	this.shape_1066.setTransform(954.2,538.5);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#1F8412").s().p("AgBAHQAAgHADgIIAAASIgDgDg");
	this.shape_1067.setTransform(959.5,538.1);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#94E113").s().p("AgRAoIgCgGIgGgTIAAAAIgHgHIgBgSIABgHQACgEARgFQAOgDgDgMIAAAAIAGAIQAJANAGATIAPAqQgHABgMAAQgNAAgTgCg");
	this.shape_1068.setTransform(690,569.8);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#28BB38").s().p("AgfCOQgIgJAFgQQAFgTgCgGIAAgnIAIhRQABgLAHgeQAHgagBgQIAAgkIAAgBIABgOQABgIAHgEIACALIAHAhQAHAagBATIAEAMIAAACIACARIAAAOQABAIgBASQAAAOAHAKIABAGQgDARAEAYIAHAoIAAAUQgIAGgBANQgCAPgFAFIgBALQgCAFgHAEQgXgcgTgGg");
	this.shape_1069.setTransform(475.8,553.9);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#4AB72C").s().p("AgCgIIgFgLQgEgGgFAAQgOACgCAUQgNAIgEAXQgNgaAOgeQAOgCAFgKQADgEACgQIBIBRIABABIAIAMIgBAHIAAAAIAAABIgVATg");
	this.shape_1070.setTransform(923.6,550.1);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#32943A").s().p("AgQBHIgBgBIgEAAQgIgJAAgOQACgRgBgHQAGgBAEgEIACgDQAGgJADgBQAfAVgIAeQgEAAgEACIgJAHQgGAFgFABIgEAAgAgGAAQAFgQALgTQAOgXAGgMIAABLQgSgLgSAGg");
	this.shape_1071.setTransform(275.9,565.1);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#F9FCF7").s().p("AgoAkIABAAIgBgGIAEgIQADgDAGAAQAXgBADgDIgcgSQgMgMAFgQIAKgLIAPgFIACABIAXABQAPACAJAGIgFASQgFADgOgFQgNgEgHAFQALANAiAHQADATgFAKQgHAOgWAEQgDAAgEADgAApgnIAAABIgCABIACgCgAgIgwIABAAIAEAAIgDAAIgCAAg");
	this.shape_1072.setTransform(275,577.1);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#7BCC28").s().p("AAAAFIgXgCIgCAAIgBgCIADABIABAAIAGAAQAFgBAFgEIAJgHQAFgCADAAIAQAXIgCACIgBAAQgJgGgPgCg");
	this.shape_1073.setTransform(276.4,572);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#91B82A").s().p("AgwAxQgGgVAJgNQAhgfASgeIACgBQAHgFAHgIIAOgQQANgKABAHIACAMIgKAVQgOACgGANIgJAVQgGALgNAXQgMAUgFAPIgBAGQgDABgGAJIgCADQgEAEgGABQADgJgGgZg");
	this.shape_1074.setTransform(277.6,559);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#97E118").s().p("AgWAVQAGgHgFgFQgJgHABgCIgIgsQACAFAEAHQADAHAFADQALAIAGABQAFABAEgFQADgCABgHIAgA1IgKALIgOAGQgOgQgXgHg");
	this.shape_1075.setTransform(268.5,570.1);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#528A0E").s().p("AgWgPIACgCQAMgDACgPQAJAKAJgEQAGgCAFgKIAAApQgBAZgHARg");
	this.shape_1076.setTransform(264.6,556.4);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#A6EE0C").s().p("AAbBJQgGgBgMgJQgEgDgEgGQgCgIgDgEIgHgMIgFgaQgDgPgFgKIgQgsQgCgJAIADIAIAHIAlA5IAeBDQgCAGgDADQgDAEgEAAIgCAAg");
	this.shape_1077.setTransform(265.1,561.4);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#177716").s().p("AgIAAQgEgQAFgMIADgGIAHAIIAAADQADAcAFAMQgCAPgLADQACgIgIgbg");
	this.shape_1078.setTransform(262.8,551.2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#41A136").s().p("AAPBtIgQgXQgKgOgQgDIACgfIAEgUQAJguABg6IAAgCQAGgDACgKQACgKAFgDIAWBrIgDAGQgGALAFARQAHAbgBAIIgCACIgIgHQgIgDACAJIAQAsQgCAHgDABQgDAAgFgGg");
	this.shape_1079.setTransform(259.8,548.5);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#0B801F").s().p("AgJANIgFgyIAJgRQAFgMAOAEIAAACQAAA6gKAuIgEAUQgGgUgDgfg");
	this.shape_1080.setTransform(257.2,545.9);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#668E07").s().p("AgNAlQgGgMgCgcIgBgDIAZgNQAPgIgBgPIAFABIgGBIQgFAJgHADIgEAAQgGAAgHgGg");
	this.shape_1081.setTransform(265.4,549.2);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#79B25B").s().p("AgEgBIAKgIQACAOgIAFQgIgGAEgFg");
	this.shape_1082.setTransform(284.2,545.6);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#2EB039").s().p("AAABpQgBgLgDgFIgDgHIAAgMQAMgTgTgJIgIgRQAShNgMgwIAKgUQAGAHADATQACARAIAIQACAEgEAPQgEALAHAIQABAKAAAVQAAATAHAMIABA4QgMAMgGAWQgFgFAAgLg");
	this.shape_1083.setTransform(283.5,564.4);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#7EAE26").s().p("AgXAwQgEgFgCgMIAAgNQAJgLAJgbQAJgZAKgMIAEAIIAEAJQAEALAKADIAAAsQgHADgBAJIAAAJIgDAEIAAABQgEgBgJgJQgHgJgJAEQgDAFAGAJQAGAKgEAFQgMgCgGgIg");
	this.shape_1084.setTransform(248.9,561.9);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#078329").s().p("AgGAbIgEgKIgEgHIAIgbQAGgRAPgGIAAAIQAAApgIAgQgJgEgEgKg");
	this.shape_1085.setTransform(251.2,555.1);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#27B838").s().p("AACCtIgBAAQgWgDgIgKQgHgKAIgVQADgIABgNIAAgWIABgtQAIgfgBgpIAAgIIAPiFQAHAGAAAQQgCAQAJAFIAEA0QADAeAIAVIgCAdQADAqAHAPIgCBJQgMABgEAIQgCAEgCAMIABAKQgBAFgHAAIgFAAgAgjBwIABgBIACgEIgCAFIgBAAg");
	this.shape_1086.setTransform(254.4,555);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#98BB29").s().p("AADAUQgGgBgYAAQgHgHAEgLQAEgOgCgEIAKgTIAGgBQACACgBAJQABAFAIgBQAPgDAIAIQAFAGAHALQABAIgDALIgGATQgGgOgQgEg");
	this.shape_1087.setTransform(287.7,559.2);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#BFD125").s().p("AAEAgQgGgHgNACQgGACgBgGQAAgIgBgCQARgpAMgQQAAAFAKAMQAHAJAAAIIgBAAIACAdQgIAEgCAIIAAAOIgKgNg");
	this.shape_1088.setTransform(291.1,548.4);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#6B980D").s().p("AgJANQAIgGgCgOIACgRQAPAKgFAOIgJAZg");
	this.shape_1089.setTransform(285.2,545.3);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#81AA0B").s().p("AgPABQgFgnADgZQAHAGABAKIgBASQAAAcAVAHQACALAGACIgcAtQAAgRgGgug");
	this.shape_1090.setTransform(293.5,535.1);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#25B337").s().p("AASCMIgdipIgDgQQgDgIgIgDIABgOIAEAAIAAguIACgQQAAgHAFgBQAEAAAFACIAAAGQgBAfAFAXQACAYAJARIAAAGQgBAkAEAxIAMBWIABAAIgEABIgFgBg");
	this.shape_1091.setTransform(244.1,570);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#4CBC2A").s().p("EglHAEZQgEgHgMgOQgNgNgCgKQADgkgQg7IgKBGIgIgGIgIgMQgGgHAAgHQAJgPgCgLQAFgQAMgWIAUgmQAKAEADgEQACgDgBgEIAxAAIgBAOIgBATQgHAFAAAJIAAAQQgEASgEA4QgEAugKAbgEg7CADVQgCgDAAgDIgBgOIABgRQgBgJgHgGIABgNIAAgmQAKAJAJATQALAWAGAHIAIANIgOATIgQAUIgFgGgEgkQAA/QgEgXABgfQAGAJACAaQACAYAMAKIAAANQgCACgBAEIgEAHQgIgRgEgYgEgkkgAQIACgCIAHgLIAIAgQgGgCgDAAQgGABAAAHIgCAQgEA60gCaQgGgKgHgFIgEgVQgEgMgOgEQAEgQgOgWQgSgYAAgMIAUALIANAUQAJAJAOACQAGAJAOARQALAQABAOQgJAGABARQAAAQgHAGQgDgDgHgOg");
	this.shape_1092.setTransform(476.1,555.8);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#1E8F29").s().p("AgDgHIAHAEIgGAKIgBABg");
	this.shape_1093.setTransform(242.4,553.3);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#ADC925").s().p("AgPALIAAgdQACAJAHACQAEACAHAAIALgCQgJAXgFADIgCAAQgFAAgKgIg");
	this.shape_1094.setTransform(243.6,549.3);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#9AB303").s().p("AgCAuIgGgOIAAhSQAHgCAJAHQACASgFAeQgFAiAAAOIgCgFg");
	this.shape_1095.setTransform(242.9,533.9);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#C7D72F").s().p("AgHApQgHgDgCgJIAAhGIAhBEIgCANIgLACIgDAAQgFAAgDgBg");
	this.shape_1096.setTransform(243.7,544.4);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#308D14").s().p("AgDgLIAFANIADAFIgIAFg");
	this.shape_1097.setTransform(242.5,538.3);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#A3C328").s().p("AAEAeQgHgJgRAEQgIABgBgGQABgIgBgDQAFgfARgZQACADgBAHQABAGAFgBQANgDAHAIIAKANQACAKgKAUQgKAUADAMQgHgNgEgFg");
	this.shape_1098.setTransform(289.4,554.4);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#C8D722").s().p("AgWA5QgKgMgBgFIAKgZIAbgsIAQgUQAIgNADgLQAEAHgBAJQgDAOABACQgMASgMAnQgMAngMATQABgIgHgJg");
	this.shape_1099.setTransform(295,539.9);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#AAC00A").s().p("AgKAhIAAhAQAHACACgDIABgFIAHAHQAGAOgDAUIgEAiQgJgHgHACg");
	this.shape_1100.setTransform(243.1,525.5);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#BFCD05").s().p("AgEANIAAgaIAJAUIgBAFQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEgBg");
	this.shape_1101.setTransform(242.5,521);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#26B439").s().p("AilApIACgaQAHgJgBgVQAAgXAHgKIABglQAMAcADAfIAAALIAPBSIgEAFQgNAMgdACgACABQIAAgNQgDgRAEgYQAFgcABgNIAIhGQAJASADAXQACAMABAeIAAAAIAHAlIABAnQgCAMgMgBQgPgCgGACIgBABQgCAAAAgGg");
	this.shape_1102.setTransform(921.7,562.7);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#1DA23F").s().p("EAtAABMQgMgZgJgNQgOgUgSgMIAKgOQAGgJgDgJQgJABgFAFIgIAKIgNgQQgHgIgBgIIAOgBIABgBQAEABAdgDQAUgDAPAJIAAgkIAHAAIAAA6IAIAeIAAAkQACAWgJAMgEgswABGIAAgIQgCgIgGgBQgGgBgQAGIAAgEQgCg2AKhMIAAgFQACACAGAYQAFAQAYgFQgDAQgCAoQgBAdgGAUIgCAJg");
	this.shape_1103.setTransform(462.5,579.6);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#36993A").s().p("AEgBGIgUgVQgMgMgFgMQAIgGAAgMQgBgNAAgGIAAgHQAJgIAAgNQgCgQABgHIAAgHQAKAIADARQADATAHAHIAAAAIAABZIAAAAIgBAAgAjjBGQgMAAgFgHQgMgOgKAGQgEADgJAKIgBABIgBgfQASgOgZgGIAAgNQAJgIgCgWQgBgXAIgJQACA5BBgfIABAGQACAHgCANQAAALAIAHQgIAIADAVQADAUgGAIIgVAAg");
	this.shape_1104.setTransform(435.5,555.5);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#1E7F13").s().p("AgWBCIAIgaIABgKIABgDQACgDAEgCQAPgMgFgIQgCgCgFADIgJAHIANhSIAWAnQACAkgKAZIgkAtg");
	this.shape_1105.setTransform(417.1,545.6);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#80A50A").s().p("AgGBAQAAgfgIgLQAEgNgCgVQgEgaABgJIABgRQAAgJgHgGIgBgYQATASAKAbQAHAQAJAiIgOBRIAGANQgEACgCADIgBADIgBAKQgNgNAAgbg");
	this.shape_1106.setTransform(414.9,539.2);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#29B73C").s().p("AgHA/QgJgJABgQIABgaIAGgTQACgMgCgKQAHgGABgKIAAgNIABgEIAGAFIAAANQAAAPAIAFIAAAdIAAACIACASQgDADAAAVQAAAOgTAAIgCAAg");
	this.shape_1107.setTransform(405.9,561.8);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#93C321").s().p("AALAZQgFgNgLgCIgHgGQAEgNgCgGQgDgKgQgDIgBgHIABgHIAHADQAJADAIAIIARASIABABQADAIAGACIAGAAIADAIIgBAFIgBAMQgBALgHAGQgEgDgGgPg");
	this.shape_1108.setTransform(402.9,554.5);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#85B97B").s().p("AABAPQgFgCgDgJIAAgBIACgSIAAABQALADACAKQABAEgDANIgFgBg");
	this.shape_1109.setTransform(405,553.1);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#99CC8F").s().p("AgHADQAEgYgCgEIAFABQADAAADgDQADAMgBAQIgCAbQgRgJAEgQg");
	this.shape_1110.setTransform(385.6,552.6);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#D4DD25").s().p("AgTAuQgHgFAAgHIAAgMQAFgDgCgDQgDgFACgCQASgIAKgTQAHgPAGgJIAGgLIAEATIAAABQgLAUgOA1IgGANIgPgHg");
	this.shape_1111.setTransform(376.2,539.3);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#64A835").s().p("AgSAQIAAgQQAKgCAJgNQAKgNAIgDIAAAHIgeA4QgHgGAAgKg");
	this.shape_1112.setTransform(369.4,528.7);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#178F2B").s().p("AgiA1QAOg1AMgUIAAgBIAbggIAIgGIAIAGIgBAGIg7Brg");
	this.shape_1113.setTransform(379.9,537.9);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#469B1A").s().p("AgLAFQAGgIACgCQAFgGAIABQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIgCAHIgNAMg");
	this.shape_1114.setTransform(383.8,531.4);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#E9F4EB").s().p("AgWAAQgEgogBgVIAAgJQATALAMAbQAQAgAIAIIgGALQgHAJgHAPQgJAUgTAIQADgagFgtg");
	this.shape_1115.setTransform(375.8,533.1);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#1A7915").s().p("AATAqIgSgSQgHgIgIgDIgIgDIAAgPIABgBQAHgEACgNQACgOAJgEQAAAMALAUQANAUgBALIABABIgBAAIgCATIgBAAg");
	this.shape_1116.setTransform(402.1,549.2);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#7EA307").s().p("AAAAQIAAgNQADgGALgCQANgCAEgDIAHABIAAAEQgBALACAVQgBAVgPANgAgSgNIgBgDQgFgIgGgEIgIggQAcAfADAbIgGABIgFgMg");
	this.shape_1117.setTransform(351.8,538.6);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#4D961D").s().p("AgHAAQACgdgBgPQAPAEgBANIgBAVIAAANQgDACgBAEQgDAEAAAIIgBATQgGgRAAgbg");
	this.shape_1118.setTransform(392.3,555.5);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#93B929").s().p("AgkAvIAAgEQAIgKAAgQQgDgRAAgIIACgUQABgHACgFQACgEADgCIABAIQAKgDAPAHQAQAIAKgCIAGAGIgkA+QgIgIgLAHQgMAIgFAAIgBAAg");
	this.shape_1119.setTransform(395.3,560.8);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#A4C327").s().p("AgGAdQgQgHgKADIgBgIIAAgOIAWglIAHAEIAQAIQANAIACAMQgBgLAAgFQAAgKAHgGIABAHIAAADIgBAKQgBAIgFAEQgGAHgBALIgBATIgDAAQgJAAgNgGg");
	this.shape_1120.setTransform(396.5,554.4);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#3FA338").s().p("AghB+IAIh+QAEgHABgPQABgQACgGQAEgIABgiQABgaAPgOIAAAGQAAAZAGApQAJAwABAPQACAFgEAYQgDARASAIQgDALgIAUQgEATAQAMIgNAAIgFAAQgLAAAFgPQADgHgFgEQgEgFgJABQgJAAgEAGQgDAEAEAHQAHANgGACIgFAAIgMgBgAAEh4QAEAEAAAGIAAACIgEgMg");
	this.shape_1121.setTransform(382.9,549.1);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#9DD5A0").s().p("AgEgPIAEAAQAAAAABAAQAAAAABgBQAAAAAAgBQABgBAAAAIABASQAAAMgIAHg");
	this.shape_1122.setTransform(150.3,552.1);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#82A508").s().p("AAHAsQgJgKgFgCQgHgIAAgNQAAgPgCgIQABgCgFgOQgEgKAJgGIAFAIQAZArAHAZQgEANgHAAIgEgBg");
	this.shape_1123.setTransform(155.1,538.2);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#789F08").s().p("AgGBEIgIgvQgHgoAcgqIADgFQACgCACAFIACAKIgQB2QAAAAAAABQAAAAAAABQAAAAgBABQgBAAAAAAIgEAAg");
	this.shape_1124.setTransform(150.5,543.7);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#BDD52D").s().p("AABAzIAFgKQADgFgIgFIAAgBQAAgQgKgaQgKgbgCgNIgBgEIAOgBQAEAbAbAaIABAgQgBARgOAMg");
	this.shape_1125.setTransform(158.7,540.2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#148D28").s().p("AgGAEIADgHQADgEAEgCQAFAEgEAFQgEAIABACg");
	this.shape_1126.setTransform(172.1,532.7);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#1FAD6D").s().p("AgXgMQAAgGgMgRQgLgPAHgMQAFACACAFQAKAQAGgIIAMgOIABgBQACAJgBASIAAADIACAIQACAMAKAHQADAMAUASIAIANIgMAPQgIAJgKABQgIgagcgxg");
	this.shape_1127.setTransform(128.2,581.5);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#56840A").s().p("AgDAxIgDgKIgGgZIgCgHQACgdAbguIgICJQgGgJgEgLg");
	this.shape_1128.setTransform(144.5,555.4);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#36993B").s().p("AgVA8QAAgIgDgGIgEgFIgBhRIAGgFQABgFAAgFIABgQQADgJAFADIAJAFQAEAWAHAKIAXBFQgFAAgCAQQgBANgSgLQgKAUgPAMIAAgTg");
	this.shape_1129.setTransform(153.5,559.5);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#86B32A").s().p("AgcA7IgBglIANgqQAIgZAQgOIACAIIAGAYIADAKQAFAMAGAIIgHAzIgRgRQgLgLgSgEQAQAOgEAKQgCAGgNAIIgCgBg");
	this.shape_1130.setTransform(142.2,562.1);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#6BAB2C").s().p("AgVgMIgHgGIgBACIAAgIIABgNQAAgIAHgFIABAlIAAABIABAAQAOgIACgGQADgKgQgOQARAEAMALIASARIAAARIAAABIAAAUQgCALgFAIIgQAMg");
	this.shape_1131.setTransform(141.5,569.4);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#47B72A").s().p("AgjgMQgBgGACgIIAEgOQACgQAKgUIASgiIAOgHQANAWACAnQACAuAFAOQgKgGgDgMIgCgIIAAgDQABgSgCgJIgBABIgMAOQgGAIgJgQQAPgUgGgaIgQAnQgHAMALAPQALARAAAGQAAAwgCAMQgDAigKAaQgTh2gBgMg");
	this.shape_1132.setTransform(125.8,580.5);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#479C34").s().p("AgOASIAVgqIAIAAQAAAGgJAPQgGAMAAAJIgOAHg");
	this.shape_1133.setTransform(127.2,566.9);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#359E4C").s().p("AAPAuQACgLgHgMQgJgSgBgDIgbgvQALADAJALQAHAMAIABQAEALAMATQAJARgKARg");
	this.shape_1134.setTransform(126.5,559.8);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#9CBE2A").s().p("AdWAdIAAgEQAIgEAQgUQAOgPAOgFIgCAOIgkAyQgMgGgCgKgA+JAZIAJgNQAFgIAHgDQAdgNgFgfQAHAAAAAPIABAEQABAGAGABIAIgCQAAAOgPAFQgEAAgEACQgLAEgFANIgIARQgEAGgCADQgOgGgBgOg");
	this.shape_1135.setTransform(323.2,552.3);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#268118").s().p("AgOAaQgDgBgBgHQACgCAEgHIAIgQQAEgMALgFQAEgCAEAAQgCAMgIANQgDAFgMASQgDAFgDAAIgCgBg");
	this.shape_1136.setTransform(133.6,554.9);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#B7CD24").s().p("AgJAWIAAgDQAAgQgIAAQgEgFgCgKIgCgQIADADIANAMQAJAHANgKIANAOQgJATgLALIgHABQgHgBgBgGg");
	this.shape_1137.setTransform(136.5,547.5);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#E8F6EC").s().p("AgBApIgDgGQgBgEgEAAIACghQADgWAMgPIACgBIgJBSIgCgBg");
	this.shape_1138.setTransform(162.5,534.1);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#46A537").s().p("AgdBOQAJgGAAgNIgBgTIAQh2IALgOQACAJAAAPQAAANAHAIQgBAvAQAjQgGAHgBAMIgBAUIgVgOIgHgFQgFgDgDAJIgBAQQAAAFgCAFIgFAGQgHgFAAgKg");
	this.shape_1139.setTransform(152.8,546.2);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#218715").s().p("AgIAvIAIhSIgBABQgNAQgDAVIgCAhIgDAAIgCAaQgcgagEgbIAyhXQAHAHgBAOQgCARACAFQAFgEAAgIQABgKADgEIAMANIAAABIAkBFQgQAGgQAXQgQAXgQAFg");
	this.shape_1140.setTransform(163.5,533.5);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#6DA937").s().p("AgWAeQABgEAOgYQAHgOABgMIAAgCIAVgaIAAAhQgMABgBAIIgBAOQgCAggJARg");
	this.shape_1141.setTransform(102.5,551.8);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#5F8C09").s().p("AgdAkQABgJgBgGQgBgGgGgFIgBgSIAJgHIABgBIALgZQAGgRAKgIQACAOAPgFQASgFADAQIAAACQgCALgHAQQgNAXgBAEQgHADABAKIgQAsg");
	this.shape_1142.setTransform(98.7,553.8);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#A3C875").s().p("AgHAJIAAgSIAHgGIAIAYIAAABIgIAGg");
	this.shape_1143.setTransform(95,551.3);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#E4F2E6").s().p("AgJAOIgCglIABgRQAAgGADgFQABgDAEgCIAMAZIABABIABAkIgBABQgEAHgBAOQgCASgEALQgHgVgCgWg");
	this.shape_1144.setTransform(86.2,528.7);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#389939").s().p("AgoBNIAMgpQAGgZgLgRQALgLgCgRQgCgTAAgKQALgKgDgLQgDgGgMgLIAOAAQATAVAPAfIAaA3QgIgCgIgLQgJgLgLgCIAcAuQgmApgOAiIgHABQAAgTgOgGg");
	this.shape_1145.setTransform(123.2,557.3);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#2BBA37").s().p("AgQgXIACgLIAAgOQABgHAGgEIAEAJIACAHQAUA6ADAUQgUAYgXABQgBg1AGgeg");
	this.shape_1146.setTransform(73.1,559.6);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#A8F40A").s().p("AgBAxIgHgNQgDgVgVg6IgCgGIgDgKIAIgBIAUAhQALATANALIAJAeQAGAQAIAMIgIAAQgQAAgPgMg");
	this.shape_1147.setTransform(76.2,559.5);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#3B9C39").s().p("AgdBEIgJgfQAEgJgHgZQgFgVAIgMIACAIQABADACABIACAAQAHABABgDIAAgIIAAgoIAOgaIA1BfIgnBLQgCABgFAKQgFAHgHACQgJgMgGgQg");
	this.shape_1148.setTransform(81.6,556);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#24801D").s().p("AADAZIgCAAQgBgCgCgDIgBgIIgHgMIAVgZIAAAoIgBAHQAAAEgFAAIgCgBg");
	this.shape_1149.setTransform(78.1,551.6);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#278720").s().p("AgIAkIADgkIAAgBQAFgEAAgPQAAgOAJgEIAAA+QgCADgCAJQgBADgEAAQgDAAgFgDg");
	this.shape_1150.setTransform(79.2,542.2);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#489215").s().p("AgEAVQgMAPAAAYQgFgDgBgGIgBgKIABgMQgBgIgGgEIAkhTIAWAnQACANgEAYQgGAYABANIAAABQgCAOgNAFg");
	this.shape_1151.setTransform(66.5,553.8);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#E9F7EF").s().p("AgPg/IAAgOQAAgIAPAIQAQASAAAdIAAAwIAAAAIgDAlQgDADgCAMQAAAJgIADg");
	this.shape_1152.setTransform(77,540.3);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#CCE6CE").s().p("AgBAZIgFgYQgEgRAEgOIABgEIAOAkQgDADgCADQgDAFAAAGIAAARIgCgLg");
	this.shape_1153.setTransform(85,522.8);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#42A337").s().p("AAKBgQgDgHgJAIQgUgGgDgQQABgTgCgJIAAgZIAAgCQABgNAFghQAEgegCgSQAGgWAIgIIABAPQABAXADAcIAKBDQABAIACAEIACACQADADAHABIABAMQgIAFABAHQABAEAGAIQgGAEgCAHIgCALIgBAAIgGgJg");
	this.shape_1154.setTransform(575.2,544.4);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#217F10").s().p("AAFBSIgCgCQgCgEgBgIIgIhEQgEgbgBgXIgBgPIAJgUQAFADAAAFIABAMIAOCXQgGgBgEgDg");
	this.shape_1155.setTransform(576.2,540.5);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#8CB31A").s().p("AAEASIgOgdIACgGQACgDADABQAGADAEAGQABADADAJQgFADgBAFIAAAKIgBgCg");
	this.shape_1156.setTransform(578.1,535);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#CADC77").s().p("AgGABIgBgZIAIABQgBAFAGATQAEAOgIAKQgHgKgBgOg");
	this.shape_1157.setTransform(555.9,547.8);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#BAC907").s().p("AgmAzQgJggACgYQADgBAGgKQAGgJAJABIANAOQAHAEAGgRIAPgbIATAGQAHAEAAAIIAAAEQgDAcgNAaQgJgMgQACQgRAFgIABQgKABAAALIAAAQIgBABg");
	this.shape_1158.setTransform(510.3,520.4);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#0B8A2E").s().p("AgHArIgBAAIgFgsQgDgaACgSQAGACAFAFIAEAIQAHALAFAFIACABQACALgDARIgGAcIgIADIgCAAQgDAAgCgDg");
	this.shape_1159.setTransform(88.2,548);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#86A90A").s().p("AgCBPIgQhMQANg4AYgaQAAAigFAtIgKBPg");
	this.shape_1160.setTransform(120.9,536.7);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#0B892B").s().p("AAGAaQgDgEgCgMQgBgKgIgEQgEgDgFgLQgFgKgIgDQgBgOAKgLQAEAAAEADQAFADAEAGQAGAMAFACIAWAeQAAAKACATQACARgLALg");
	this.shape_1161.setTransform(117.6,550.9);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#1B7E13").s().p("AgLAoQgEgFgFgEQgEgCgEAAQAMgvAXgjIAQBLIAGAaIgOAAIgFgHQgDgDgEACQgCABgBAGIAAAIQgEgCgHgNg");
	this.shape_1162.setTransform(118.3,542.4);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#41A23A").s().p("AAXA8IgtAaQgIgJABgOQABgPgBgHQAJgYAEglQAGgzADgMIABgOQACgGAFgGQAIASADAkQADAkAIAQIAAA/QAFADABAGIABAKIAAAAQgBAGABALQgBAKgGAEg");
	this.shape_1163.setTransform(112.2,548.2);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#A7C869").s().p("AAFgRQAKAMgHAJIgSAOg");
	this.shape_1164.setTransform(114.8,528.3);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#349A3A").s().p("AgSBCQAAgIgCgHQgCgHgEgGIABgrQgCgagHgTQAJgGgBgQQgBgJADgGQACgFADgCQABAJAAATQADAQASAGIASAsQALAaADASQgUAEgNASIgUAdIAAgdg");
	this.shape_1165.setTransform(574.5,558.6);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#D3DB23").s().p("AAFAuIgXhQIABgKQABgGAFgCQAHAOAHAEQADAPAMAMIABAAQgBAJABAVQAAATgHALg");
	this.shape_1166.setTransform(580.4,540.6);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#2ABC37").s().p("AYxB2IAAgPQgCgKgKgHQAAAXgSACQgVgCgKACIAAgYIABgoQAAgMAFglQAFgfgDgUQAOgcAAgjIAAgBIABglQABgOANgFIABAIIABAOQABANAFAKIAGAfQgFAHADAMQAFAPAAADIAAATIgBARQABAJAHAHIAAAXIABAOIgBAQQAAAJAHAHIABAmIAAAsIAAARQgBAJgHAFgA4QCVIgGgQQgEgKgGgFIgYg0IAHhLQAFgtgDgfQAHgLAAgTQgBgVABgKIAAAAIABgJQABgGAGgDQAHAEAAAOQABANAGAFIAAAAIACAlIAOBZIAPBrIAAAMIgBAYIgDgBQgEgIAAgKQABgRgEgHQgJAKgCAQIgBAag");
	this.shape_1167.setTransform(740,554.5);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#108E2D").s().p("AgKgsIAAABIAUASIABABIAAAYQgDADgCAFQgDAFABAJQABAQgIAHg");
	this.shape_1168.setTransform(571.4,549.1);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#1D8014").s().p("AgOAeIAAgBIAAgeQAIgGAGgRQAGgRAJgGQACASgFAeQgFAhAAANIgBABg");
	this.shape_1169.setTransform(571.8,541.7);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#3C8110").s().p("AgHBOIgBgLIgOiYIAGAAIAPAeIABACIAXBQQAAAXgXAkg");
	this.shape_1170.setTransform(578.6,542.4);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#789D07").s().p("AgPArQgFgPgLgGIgCgkIAAAAQAIgGAOgVQALgSAMgHQARAYAFAUQgiA1gEAkQgFgFgGgTg");
	this.shape_1171.setTransform(587.9,543);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#24B13B").s().p("AAFA9IgCgpQgBgigjgJIAAgeQAIgOAKgDQAMgDAPAIQAGACAAgGIABgJQAEAFACAHQACAHAAAJIAAAcIAHBTIgJATg");
	this.shape_1172.setTransform(569.9,570.4);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#BEE5C7").s().p("AgHALQACgLgBgGIALgQIACgDIABAaQAAAPgIAKQgHgGAAgJg");
	this.shape_1173.setTransform(566.5,555.4);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#A8C97D").s().p("AgKAMQACgOAKgKIAJAHIgHAMQgEAGgIAAIgCgBg");
	this.shape_1174.setTransform(539.1,539.5);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#67A735").s().p("AAMAzQgFgQgDgGQgFgLgJgHQAAgQgMgWQgOgXgGgNIAKgHIAKAOQAEAEAFABIAJgBQADASAOARQAHAKAVAUIACALIAAABQgHAGgBAQQgBAQgIAHg");
	this.shape_1175.setTransform(524.1,533.9);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#108B28").s().p("AgXAWIAAgBIgCgLQAPgGAIgMIAMgNQAIgJAIgDQgDAigiAhg");
	this.shape_1176.setTransform(530.8,534.1);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#0E8626").s().p("AgPADIAeglQAEASgKASIgXAhg");
	this.shape_1177.setTransform(550.7,544.9);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#EFF9F9").s().p("AgRBUQgDgDgCgUQgCgOgPgEQABgHgJgMQgKgMACgIIAIglQAOgaACgdIACgDIAUg0QAPAZASAuQAXA3AJARIgBAWIgIAAQgGgBgEgEIgKgNIgJgMQgHgHgKgCQAFATAMAJQAGANAOAXQAMAVgBARIgBAaIgHAgIgCAAIgCABg");
	this.shape_1178.setTransform(518,526.4);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#85B22B").s().p("AgWgBQAIgZAVgmIATAwIAFAnIAAAeIgfABQgQADgMAIQgGgfAMgjgAgGAmQAFAJAOABQgEgNgEgEQgGgIgOgEIAJATg");
	this.shape_1179.setTransform(563.4,562.7);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#28B738").s().p("AgEA6QgSgKAEgQQAEgLAEgjQAEggAJgUQABANALA3QAIAogFAZg");
	this.shape_1180.setTransform(557.2,562.1);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#94B824").s().p("AgVAIIAEgEQAFgEAKgMQAKgMAOAAIgdAyQgOgHAAgLg");
	this.shape_1181.setTransform(553.8,554.2);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#388618").s().p("AgSAUIAdgyIAIABQACAOgIAPIgQAYQgEAHgEAAQgEAAgDgLg");
	this.shape_1182.setTransform(554.9,554.7);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#248428").s().p("AgLgKQAAgLACgFQACgIAJgDIADANQABAGgCAMQAAAIAIAGIAAAQQAAAJgGAFg");
	this.shape_1183.setTransform(565.3,557.2);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#E1F2E8").s().p("AgLASQAAgYARgYIAGAJQgFAHgBAKIABAQIgDAAIgBACIgLARg");
	this.shape_1184.setTransform(566.7,551.7);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#7EAD2B").s().p("AAFA+QAAgKgCgDQgEgFgBAEIgCAEIAAABIAAAAQgMgdgYgQQAMgIAMgVQAOgYAGgIIALgOQAGgIAMABIAGAVQACAIAAAGIgBAJQgKAJgBAGQgCAIAMAHQgegCABAcIgCAxQgEgEABgJg");
	this.shape_1185.setTransform(545.2,568);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#329F4A").s().p("AANAlQAAgGgCgIIgHgVQgJgHgIgOIgNgZQAGgCAGADIABABQAJAGADABQABAIAMAPQAMAOABAJQADARgBADQgBAKgOAFIABgJg");
	this.shape_1186.setTransform(548,560.3);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#2F7610").s().p("AgOAJIAAACIAAggIAOgNIAIANIAAACQAHATAAAHQAAARgPALg");
	this.shape_1187.setTransform(541,552.6);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#389A39").s().p("AgpBgQAchEgTg3QAPgLAAgQQAAgIgHgTIgBgCQAKgOAFgBQAIgDAHARQAFALAMAUQAKATADAOQgDgBgIgGIgCgBQgGgDgGACIANAZQAIANALAIQgMgBgGAIIgLAOQgHAIgNAYQgMAVgMAJg");
	this.shape_1188.setTransform(544.3,558.8);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#81BF55").s().p("AgGAKIAAgSIANgCIAAANIgHAHIgEABIgCgBg");
	this.shape_1189.setTransform(542.5,544.9);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#D9EDDA").s().p("AgIAIIAIgQIABABIAEgBQAFAKgCAEQgBADgHAAIgIgBg");
	this.shape_1190.setTransform(542,546.8);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#7DA50F").s().p("AgIAtIgOACIgKABIAIghQAKAAAEgFIAHgMIAkguIgGBfIgOABQgKgEgLABg");
	this.shape_1191.setTransform(540.6,539.2);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#29B739").s().p("AADCoQgDgCgIAHIgdgcQgBgKAEgvQACgjgMgWQAQgDACgOQgCgPACgGIAOglQAHgWgJgRQAHgJAAgOIgBgaQAIgHAAgQQABgQAHgGIANALQgKAVAGAhQAJAsgBAJQAAAHAFAcIAAAAQABAGgCANQAAALAIAHQgCAXAFAqQAFAvAAAUQgLAFgKAJIgRAUQgCgKgCgBg");
	this.shape_1192.setTransform(527.5,554.2);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#709A10").s().p("AgegBIAAgGIABAAIAPgZIAJgBIANgDQANAAAKAEIAAATIgIAQIgBAPIgPANIgOAGQgFgYgSgOg");
	this.shape_1193.setTransform(538.8,547.3);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#45A43A").s().p("AAaBuQgFgWgFgKQgIgSgXgCIgKAnQgIgHAAgMQABgNAAgGIAAAAQAMgVADghIAGg3IALg7IASB1IAAAAIAAAGQAAAkAQAiIAAAOQgCAIgFAEg");
	this.shape_1194.setTransform(533.9,545.7);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#E0EFDD").s().p("AgYAnQAVgvAKgXQABgHACgEQADgGAMAGIgEAqIgkAug");
	this.shape_1195.setTransform(541.8,534.3);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#BACF24").s().p("AgVAgIAAgOQAJgJgFgOQgGgUACgFQAEgEALAJQAIAIAGgMIAOASQgMAXgBABQgJAOgNAFg");
	this.shape_1196.setTransform(558.2,548.4);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#347B12").s().p("AgXA/IgKgPIAAgmIAYggQAJgTgDgSIgDgHQgBgEADgCQAEgEAEAFIAGAGIAPAsIABAZQABAOAHAKIAAAOQgOAAgLANQgJAMgFAFIgEADQgIgEgGgIg");
	this.shape_1197.setTransform(552.6,547.4);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#42A23A").s().p("ANfBeQgBgagNgLQgBgDADgOQACgKgLgFIgBgHIABAAQAQgMAAgVQAAgeAFgIQADgGABgJIACgQIAAgDIABgTQABgNAGgNIACABIAOBrQACANAFAYQADAYgDAPQgRgJAFAPIANAiQAHATABANIgCAAQgLgPgJAHQgGADgKAOQgIgLAAgcgAuMhfQAIgEAEgLIADgHQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAFgMIAaDIIAAAAQgJAWgMARIgKALg");
	this.shape_1198.setTransform(512.5,549.1);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#0A872B").s().p("AgOCBIgHggIAUgXQAKgNgBgOQAbgOgJgSQgQgUgDgLIgHgOQgEgTgRgZIgeg2IAWAKQAlBDANAaQAZAyAGAsIAAACQgJADgIAJIgNAOIgPAUQgHAKgNACIgBAAg");
	this.shape_1199.setTransform(591.3,543.8);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#EDF8F3").s().p("AgfAPIAwhWQALAQAEAmIgWBZg");
	this.shape_1200.setTransform(597.2,533);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#DAEACF").s().p("AATBRQgGgIgDAAIgOhqIgBgEIAAADQgHANgBANIgBARIAAAEQgLABgBgGIAWhZIAFADQACAlAMAkIABADIABASQABALAFAHIAFAnQgDAJgEAAIgCgBg");
	this.shape_1201.setTransform(600.9,539.3);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#479339").s().p("AgPBlQgIgRgKgIQgIgIABgNIAAgXQANgPAJgYIANgmIACgFQAZgpAFgWIAPgNIAAAgQgMAJgCAPQgCAIABASIgBALQgBAGgFADQgEAEgIgFQgIgGgJADQAeAagDAnIgHBFQABAMgOAJQgFgGgIgUg");
	this.shape_1202.setTransform(629.2,559.2);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#50830D").s().p("AgWghIAWgGQANgCAKABIgCAFIgOAkQgHAZgOAPg");
	this.shape_1203.setTransform(626.5,558.3);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#24B13A").s().p("EAmcABkIgBgQQgCgJgNgCQgMgCgHAHIgIAKIgDAAIAAgvIAOhZIABgHIAAgYQAAgSAHgMIABgBIAGAAIAIBMIAAAXQAAAMAIAIIAIBmgEgmHABSQgJACgSAOQgBgpAIg5QALhFAFglQAIATAEAsQAEAjANARIAAAIQgJAPAGAZQAHAegDALQgMgTgOADg");
	this.shape_1204.setTransform(379.9,566);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#579D3C").s().p("AgWAHIAeg5IAPATQgGADgBAGIgBALIAAABQgHALgBASIAAAYIAAAHQgSgLgLggg");
	this.shape_1205.setTransform(622.1,556.1);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#9BBD2A").s().p("AgWAQIASgZQAKgPARgEIgeA5g");
	this.shape_1206.setTransform(620.6,553.9);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#FCFDFC").s().p("AuGB9IgtgSIgWgZQgLgQACgQQgBggADgPQADgWAOgRIADgEIABgIIAPgIIAagKQAOgGgBgPIANgIQAOACADgCQAGgCgHgMQgEgHADgFQAEgFAJgBQAKAAAEAEQAFAEgDAIQgFAOALABIAFAAIANAAQAGAMASAIIAdAPIAAAEIA0BAIAAgBQALAUgGAVQgEAPgQAYQgiAagoAKIg3AGgAu1A7IABACQAXAEAtgDIAsAAIAYgDQANgDAJgGQgUAAgEABQgMABgKAGIgsAAIhEgCgAumgfQgOAXAFALQAFALAcAKQAWADANgJQAMgJABgQQACgQgLgJQgLgKgVAAIgHgBQgMAAgMAMgAslgTQADAWAagDQAWgCAAgTQgCgVgbgBQgXAHABARgAtvhNQASADAJgGIgOgCIgCAAQgHAAgEAFgAMjBuQgagCAAgaQABgHgCghIACgwQgCgdAfADIALAJQAGAGAJgHQAJgGAPgCIAZgBIAYAJQAGAKAJgGQALgIARgDIAfgBQAkAJABAiIACAoIAAAlQgFAPgKAGQgZABgHgQIABhKQgCgegcAJQgVAEgBAXQgBAVACApIgJAUQgcAGgLgUIABhFQAAgOgCgGQgFgIgOgBQgbgCgDAcIgCBOIgQAKIgDAAgAjzBGIgGgaIANgyIAngaQAogDAbAFIAOAGIAYAYIACAHQAEAMgDASIgEAFIgHADIg7ADQgaAAgOACQgKAEAHAIQAaAlAwgcQARgJAFgBQAKgBAIAOQgIAQghASIg0ACQgngHgXghgAirgGQgZACgFAdIA1AAQAOABACgGQACgEgHgKQgJgNgTAAIgGABgAv5ADQAJgNgBgHQgCgDABgDQAAgDADgCIAVgKQABAFAAAFQAAAJgEALIgIAVIgDAGQgVgEAEgMg");
	this.shape_1207.setTransform(468.4,571.3);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#618D09").s().p("AgiADIACgTIAKgEQAKgEAMgCIAhgCIABATQgNADgMANQgPASgFAEQgTgKgEgQg");
	this.shape_1208.setTransform(660,552);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#258112").s().p("AgRAkIgEhAIgIgkQgFgWAMgPQACACAEAFIADAHIACAEQAEAFAHABQAAAhAAARQABANAFgCQADgBAGgIQAHAJAEAMIAGAXQAAATgQAYIgQAaIgIAOQgHgbgCgng");
	this.shape_1209.setTransform(657.4,538.2);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#E9F6F0").s().p("AADBFIgCgEIgCgGQgEgGgCgBIgMgeQgHgSAFgNIAgg7QAIgNAFANIgKCQQgHgBgEgGg");
	this.shape_1210.setTransform(655.9,522.9);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#1F7D16").s().p("AgGAlIgIgOIAAgCIAAgeIAcgmQADATgEAcQgGAkAAAMQgIgDgFgIg");
	this.shape_1211.setTransform(616.9,549.4);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#078728").s().p("AgRADQgCgTAJgLIAJgHIAUAHIgHAZIgcAlg");
	this.shape_1212.setTransform(617.1,544.9);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#69930C").s().p("AgJAVIgJgmIgFgnQAGAHAKAQQAHAHANgFIAKgGIABAlIAAACQgCAKABASQgBARgOAKQgKgPgHgVg");
	this.shape_1213.setTransform(605.5,548.4);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#7C9F0A").s().p("AgHAmQgKgPgGgHQgFgIgBgKIgBgTIABgCQAAgHAFABIAKAEQAcAQALgTQADgFACgIQACAsgKAfIgKAGQgFACgEAAQgFAAgFgEg");
	this.shape_1214.setTransform(605.6,541.2);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#1B8F29").s().p("AAGAYIgGgMQgDgIgFgEIgFgEIgIgOQAAgEACgCQABgFAFgBIAMANIAAABQAHAPAQAIQgBAQgMAIIgDgHg");
	this.shape_1215.setTransform(637,533.8);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#86AC0C").s().p("AAHAlQgHgKgBAAIgIgTQAGgDACgIIAEADQAFAFAEAIIAGAMIADAHQgFAIgEAAQgDAAgCgDgAgTgaQgEgGAHgFQAHgGAIAOQgFACgBAEQgCACAAAEIgKgJg");
	this.shape_1216.setTransform(635.8,533.7);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#41A13A").s().p("AgdBPQAIgWACgfIAGg1IAEgLQADgHgIgEIgDgFQAKgHgGgLQAFgFAEgGQACgGABgHIABgKIAAgRQAaBRAEAoQgMACgCAGIgBAOIAABog");
	this.shape_1217.setTransform(776.1,550.1);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#BAE0BC").s().p("AgFACIABgCQAEgEAAgJIABgSIACADIAEAKIgBARIgBAJQgBAHgCAGQgDAGgFAFg");
	this.shape_1218.setTransform(775.4,539.6);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#06892D").s().p("A1uBlQgFgPgDgIQgGgNgIgHIgBgLQgCgGgFgDIgYglIABgLIAAgCIAXgsQAGgBAGgEQAIgGAHgJQAIgMAHgGQAFgEAEgCQAEAQgHAdQgGAeACAOIAAASIgHAAIgMgLQgHgIgMAAIAfAzIABAfQAAAUgHALgAWBAzIAAAAIAAg+IAXgnIAJgBQAFAAgCAFQgDAKgBAKIAAAVQgCABgBAEQgFAJAAAVQAAAVgLAKIgEADg");
	this.shape_1219.setTransform(787.5,547.1);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#1C8312").s().p("AAZg/QAEAQgCAaQgEAeABALQgEABgFAEQgHAHgIALQgGAKgIAFQgGAEgGACg");
	this.shape_1220.setTransform(648.1,535.1);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#C5D423").s().p("AglA6IAthdIAOgUQAGgCACgKQAFADABAFIAAAAIABAKIABANQgQAZAAAZIgOAYQgJAPABAMQgOADgFAAQgMAAgGgKg");
	this.shape_1221.setTransform(713,542.6);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#D7E36D").s().p("AgEAMIAAAAQgBgFgFgDIANgaIAIAIIgFASQgDAMgGAGIgBgKg");
	this.shape_1222.setTransform(717.1,535.4);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#E3EDAE").s().p("AgGACIAHgLIAEAIIABABQADAFgIAFg");
	this.shape_1223.setTransform(718.1,532.9);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#3D9037").s().p("AghgCIACgCIABABIALAGQAHADACgPIAAggIABgPIANAZIABACQADAHAIAWQAHAWALAKIAAATQgJgBgCgBQgOgVgNAEQgJADgNATIgGADg");
	this.shape_1224.setTransform(753.9,562.4);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#23B03B").s().p("EArfABsIACgHQAIgwgDgmIAAgDIAAgSQAIgOAGgeQAFgeAIgPIALBGIAOB4IAAANQghgVgaAVgEAz7ABmIABAAIgBABgEgzcABgQgBgFgCgEQgCgFgCADIgFACIgBAAIgBABQgMAEgHgHQgLgMgHgDQAFgIACgKIAAgUIABgDIAFgLQACgaAGgIQAKgNAgAMIAEgIIAEAFQADAGAAAIIAAASIAABTQgQgGAAANgEAzUABKQgSgYgLgKQgBgNAIgUQAJgWAAgKQAGAAAXABQARACALgEQADAFAAANQAAAEACAEIAFAGIABABIgBAQQABAJAGAGIgKASQgFAKABAKQgGAEgCAIIAAANQgVgHgSgUgAfbBXQgEgDgGAEQgVgKgFACQgUAKgFgIIgBgSIAAgCQgJgMABgTQADgZgCgGIAOgeIA1AFQAHADABAJIAABsIgGgIgEAqAABWQgdADgEgBQgDgbAGg0QAGg1gCgaIABgKQACgGAFgDIAAAsQABATATgBQAQgBADgBQAIgDgCgMIAHAAIAAAEIABA6IAAAmIAAAkQgPgJgUADgEgvbABNQgGgYgDgCQAKglgCgmQAIgFgBgIQgBgpAJgdQAKAOADAUQACALAAAZIAIAfQACAwgKAuIgJABQgQAAgEgMg");
	this.shape_1225.setTransform(478.3,566.3);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#439539").s().p("AgkBCIAWhLQAGgGAEgJIAEgRQAPAEAAgKQAAgMALgFQAEgCAHgBQgJA0ACARQgFADgCAGIgBAKIgaAdIgLAOQgFAEgGAAQgFAAgFgCg");
	this.shape_1226.setTransform(742.3,557.1);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#50830C").s().p("AAJA+IgKgGIgBgBIgCgBIgHgBQACgVgDgjQgGgqAAgPQAHgDAFACQADADACAHQABAHAKAUQAJAQAAALIgBAPIAAAgQgBANgGAAIgCgBg");
	this.shape_1227.setTransform(751,556.4);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#759D08").s().p("AADArIgCgEQgEgKgEgDIAAAAQgJgVgDgJQgEgTAIgOQAHgDABgJQAJADAGALQAIAOAGADIgIBEQgHgBgEgGg");
	this.shape_1228.setTransform(744.6,544);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#3FA13A").s().p("EA4vAAkIAAgoQgCgWAHgPIACgEQAdgVAjAZIAEADQAJALgCAUQgeAugjAjgEg6BAAeIACgeIAIgaIADgEQAEgHgBgLQAAgSAEgHQAQAaAogLIABACQAGAJAAAOIABASIAAAIQgKASgRAXIgjAnQgVgVgBgWg");
	this.shape_1229.setTransform(397.9,550.5);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#7EC173").s().p("AgDADIABgJQABgGAFgCIAAAPQAAAIgFAGg");
	this.shape_1230.setTransform(762.1,537.9);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#14811D").s().p("AgCBFIgCgBIgIgTQADgMgGgZQgFgYAEgNIAGgNIAEgPIAWgaIACANIgBBAIgCADQgHAQACAWIAAApg");
	this.shape_1231.setTransform(760,546.1);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#41A539").s().p("AgFAxQgOgQgOgGIAAgFQASgSgRgTQANgeACgTIgBgJQAUAWAggPIgQCMQgGgFgRgUg");
	this.shape_1232.setTransform(783.9,548.8);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#749C0C").s().p("AgdAKIABgDIgBgWQgBgQAJgJQAEAEAaAGQAVADgCASIACAFIgHAHQgLAEgMAQQgLAOgKAFQABgVgJgLg");
	this.shape_1233.setTransform(771.5,545.6);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#48B82B").s().p("AgHBkQgKgBgMgWIgKhGQgJAPgFAeQgGAfgIAOQgKgLgIgVQgHgXgEgHIgBgCQAwgZAFglIACABIANALIARAlQAigjAeguQALgEAMgPQAMgQALgEIgBAOIglA/IgoBPQgEAJAAAFQgBAIAHAGQgSARgKAAIgBgBg");
	this.shape_1234.setTransform(764,555.9);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#5FA23B").s().p("AADBDQgDgogahQIgFgKIgBgDIAFgHQAEACADADQAGAGABAMQADAVAEAHIAmguIABA1IAAAJQgBASgOAeIgIAeIgHACg");
	this.shape_1235.setTransform(778.8,543.1);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#EDF7F2").s().p("AgRAsQgBgMgHgGQgDgDgEgBIACgdIAOg3QAFgQALAMIAgA6IgEAiIgmAuQgFgHgCgVg");
	this.shape_1236.setTransform(779.3,533.5);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#078926").s().p("AgMAYIgBgZIAXgWIAEACIgUAtg");
	this.shape_1237.setTransform(789.5,533.3);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#8DAC08").s().p("AgWg1QAQASAKAgIATAzQgFACgOgBQgMAAgGAFg");
	this.shape_1238.setTransform(728,534.1);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#478F13").s().p("AgDAEQABgEACgDIAEAHg");
	this.shape_1239.setTransform(575.6,599.7);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#40A239").s().p("AgWhFQAJgIgBgRQgBgTAEgHQAKAKABAWIAAAEQgBAKADASQAFAWAAAJQADAMAEAkQACAeAHASQgLAcgTAWQgQhgABheg");
	this.shape_1240.setTransform(737,548.5);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#64A439").s().p("AgKAmQgCgBgNgKQAAgIgFgWQgEgRABgLIABgEQAQAEAGAAQALABAKgGQAIgFAIAMQgJAPAFARQACAKAJAVIgNgFQgJgCgFAFQgHAHgFAAIgFgBg");
	this.shape_1241.setTransform(740.3,543.1);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#65A834").s().p("AgWACQAKgBALgPQAJgPAPABIglA5QgJgPABgMg");
	this.shape_1242.setTransform(789.6,528.4);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#1C8510").s().p("AgGA/QgMgSgLgGIgBgMIAVgtIgEgDIgYAWIAAgRIAlg6IAGgIQAEgGADABQAFAAACAFIACAKIAAAoQgCAYAIAPIABABQAHAHABAMIABAUIgYAqQgIgGgMgUg");
	this.shape_1243.setTransform(791.9,533.1);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#228E16").s().p("AgHAPIAAgdQADACACAEIAAABIACAIIACAGQACAFAEABIAAACg");
	this.shape_1244.setTransform(712.2,598.6);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#29BB37").s().p("EA4UACaIABABIAEgHQADgEgBgDQgDg6ASh8QAAgIAIgkQAFgYgDgQIgCgGIAAgMQALgGADgPQAFgZABgDIAKArQgBBfAQBfIgXAyIAAABQgYAlgGAfQgOAOAAATIgIAAgEg5egBzQAGAaABA1QACA1AGAaIgPAig");
	this.shape_1245.setTransform(368.3,556.4);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#799E08").s().p("AgSAsQAAgMgFgdQgFgaADgPQAGgFANAAQANABAFgCQAHAEAAAMQAAAMAHAEIABAMQAAAHgKAJQgMAKgBAGQgEAAgGAHQgDAGgFAAIgEgBg");
	this.shape_1246.setTransform(729.1,543.4);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#E5F4EE").s().p("AAIAcIAAgBIgBAAQgJAAgJAKQgKAKgKAAIgKiUQAEgHgCgTQgBgKACgIQACgFADgDIBLCsQgCAhgWAmIggAzIgJANQgMhIArg2g");
	this.shape_1247.setTransform(797.3,517.5);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#B4DBB0").s().p("AgFglQAJAHADARQgDAEgBAFQgDAGABAKQACAUgDAGQgJgcAEgvg");
	this.shape_1248.setTransform(793.2,503.4);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#0E8C2B").s().p("AABARQgEgHgGgJIgMgWQAJgEAJAMQAFAIAGgBIAHgDQAHAEAAAOIgPAOIgGgGg");
	this.shape_1249.setTransform(5.7,612.3);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#529B15").s().p("AAEAvIgLgTIgWggQAHgDAAgIQAJgHAGgLIAHgVIAHAGIAXA4IgGADQgHABgGgIQgJgLgIAEIAMAXQAFAJAGAHIAFAGIgFAMIgDABQgEAAgGgIg");
	this.shape_1250.setTransform(4.1,610.5);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#228F11").s().p("AgGAaIgJAAQACgGAAgIIgBgZIABAAIAJgIQAFgGAIAEQADACACAEQACADAAAFIgBAPQgIAHAAANg");
	this.shape_1251.setTransform(707.7,597.5);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#539C14").s().p("AgCABIABgBIAEABg");
	this.shape_1252.setTransform(320.6,600);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#1EA968").s().p("AABAfQgBgNgHgQIgOgZIgIgKQgEgHAHgFQAHgGAIAFIAMAIQAHAWAWAPIABAMQgHAGAAAJIAAARIAAAGIgIABg");
	this.shape_1253.setTransform(409.4,589.3);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#128D45").s().p("AgIBAIgHgQQgLgagQgRIAAgRQAHgHAAgSQAAgSAHgIIAPASIAAABIA4Bsg");
	this.shape_1254.setTransform(405.7,593.6);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#29A056").s().p("AgRgDQAOgFAHgNIAOAFQgCAJgLAEIgBAAQgGADAAAPIgPAHg");
	this.shape_1255.setTransform(652.5,594.5);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#C3D725").s().p("AgBAfIgDgLQgMglgGgMIAEgBQAKgCAEAHIAFAOQAGAGAGAJIAAAAIAKAQIgBALg");
	this.shape_1256.setTransform(51.3,615.7);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#3E8611").s().p("AgCANQgDgRAAgJQAFAEABAJIAFANg");
	this.shape_1257.setTransform(697.9,598.7);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#249211").s().p("EgygAHqIAAgRQAGAGABAJIAAARQgHgGAAgJgEgzVAHAIAPhyQAEgIACgYQACgVAIgKIAIAkQAAAsAOA7IAAAgQgcgEgLAPIgOAhgEAylAGbIAAgBQAFgcgCgRIAThfIABAAIAMA7QAFAgABAXQAAAIADATgEAy7gE4QgTAAgHgCIAAgZQAJgkgCgoIAShZIAEAAIAQBoIAAAPQAAAJAIAEIgBAAIAABAQgJgEgRAAg");
	this.shape_1258.setTransform(369.5,558.9);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#1F9D61").s().p("AgcAgIAxg/IAIAAIgBALIAAABIgPATIgYAgg");
	this.shape_1259.setTransform(542.7,596.8);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#8AA906").s().p("AANAmQgFgDgGgBQgFgBgSAAIgIgyIAOgUQAEAKARABQAUAAAEAJQACAMgEATIgFAYg");
	this.shape_1260.setTransform(25.1,615);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#1F9127").s().p("AgNAIIABgMIAHgFIAIgGQAFgFAGABIgHATIAAAAIgMAUQgIgEAAgIg");
	this.shape_1261.setTransform(22.8,611.2);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#0C8A2A").s().p("AgPGQQAEgJAIgJIAEADQAFAGAEAJgAAEkoQgPghgFgSQgJgdAWgXIAVAbIABABQADAjgLAog");
	this.shape_1262.setTransform(10.5,578.8);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#6CA012").s().p("AgCAFIADgFQABgDABgBIAAAJg");
	this.shape_1263.setTransform(19.5,618.3);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#088B30").s().p("AgLAcIgHgMIAkgrIABAsQgCABgBAEIgEAGg");
	this.shape_1264.setTransform(18,616.1);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#118D5E").s().p("AgXAdIgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgBIgBgGIgHgfIACgNQAfgSAYgBQACADAAAMIAAABQAAALAGAFIAAATIgjAsg");
	this.shape_1265.setTransform(16.4,612.9);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#4CB928").s().p("AAWBCQgFgJgFgGIgFgDQAAgbgVgLQAAgOgHgEIgXg5IAXAOQACAQAaAPQACASAVABQAAASAOAGIABAGIgBABQgHAFABASQABAIgEAFg");
	this.shape_1266.setTransform(9.4,612.2);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#179864").s().p("AAFA5IAAgBQAAgMgCgDQgXABgfASIAdg5QARgJALgaQAPgfAHgJQABACAEAAIAKAeQAAAUAIAMIABAEQABAMgIATQgLAXABAMIgGAFIgPgNIgCATQgHgFAAgLg");
	this.shape_1267.setTransform(18.6,604);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#157E3E").s().p("AAAAnIgHgMIgJgbIgBgBIABgTQAAgLAGgHQAKAEADAOQACAJADAFIAEAGIAGAaQAAAHgBAGg");
	this.shape_1268.setTransform(394.8,596.1);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#5EB12A").s().p("AgGApQgDgGgDgIQgEgOgKgEIAQgsQAOABABgMIAQASQAHAKgCAMQgBAHgFAPIgDABQgIADgDAKQgEAOgEADIgEgGg");
	this.shape_1269.setTransform(396.3,591.4);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#128946").s().p("AGQAgIAAAAQAMgSgDgOQAFgOAJgFIAPAmIABAMIgBABgAm2AgIAkg/IAWA/g");
	this.shape_1270.setTransform(276.4,596.8);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#71AD39").s().p("ADXELQgFgHAAgNQAAgSgHgIIABgBQADgKATgSQASgTgCgQQALAGAFgEQADgDABgJQAJgEAIgJIAOgOIAHAAIAAAFIgCAFIgFAJQgLAMgDAFQgGAJAGALQgNACgFAIIgGARIgjBAgAkqi/QAQgVgRgYIABgSIAAgMIAFAAQAFAXAaAiIAJAYQgJAOgPAGQgLgGgKgUg");
	this.shape_1271.setTransform(210.6,573.3);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#1E9C43").s().p("AgYAwIAEgJQAIgEAEgIQADgKADgEQAEgLgBgYQgBgXAIgLIASAyQACAPgSASQgSATgEAJIAAACIgIABQgGgFACgFg");
	this.shape_1272.setTransform(232.2,589.8);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#1C8413").s().p("AgfBMIgBgYIAHh4IAHgGIAAAAIABABIAyBjQgNAHgTAXQgIAMgKAIg");
	this.shape_1273.setTransform(165.9,611.3);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#519A13").s().p("AgcAGIAEgHQAFgOgFgTQgIgfADgKQANAGAJASQAJAVAGAGQAEAWASAPIgCAgIAAAQQAAAJABAGg");
	this.shape_1274.setTransform(171.5,607.5);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#1E8611").s().p("AgTBCIgXglQgCgGAAgJIABgPIACggIAAgaQAIAEAPAAQAQAAAIADQASAHAPgOIAGgGIAABKIgUAbIgPAIIgKgcQgFAHgCATQgCARgIAHg");
	this.shape_1275.setTransform(178.8,612.2);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#509A14").s().p("AgKAkQgKgMAHgOQAHgHAGgTQAHgRAJgIIABAnQAAAXgIAOIgCgGQAAgCgGAFIgFAKIgGgGg");
	this.shape_1276.setTransform(200.7,605.9);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#258741").s().p("AgbAsQAAgLgGgCIAAgRIAgAAIAAhEQAFABAOgEIAHABQgHANAKAMIAGAGIgBAHIgMgIQgIgEgEAOQgHAZgVAyQgGgFgCgKg");
	this.shape_1277.setTransform(196.8,612.7);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#789E08").s().p("AgIAPIAAgVIANgIQgEAGAAAGIAAAGIAEAHIAFAEg");
	this.shape_1278.setTransform(180.8,617.3);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#89A806").s().p("AgVAdIgEgFIgFgGIAAgIQABgGAEgFIATgbIAAAKIAlAAQgIASgNARIgHAMg");
	this.shape_1279.setTransform(183.9,615.9);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#189E69").s().p("AgFgQIALACIAAAHQgGALgFANg");
	this.shape_1280.setTransform(197.2,598.9);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#539B15").s().p("Al9COQgJgLgNACIgmgsIgkhOIAFgCIAnApIAMASQAGAHAFAEIAGAEQAEALAKAMIARAUIAOATIgHAOQgDgCgMgPgAG5g0IADgFIAPhGQAIgMAAgTQAIAHgBAMIAAAUIAAAmQgBARAFAMg");
	this.shape_1281.setTransform(144.4,596.8);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#078B2D").s().p("AgMAQQACgegIgOQAGgDAGgFQAGgIAJgNIABgCIAJAAQgHA9gBAfQgBAHgFAIIgJAMQgJgPABgdg");
	this.shape_1282.setTransform(811.8,542.4);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#187F3D").s().p("AgDAmIgIgRQgIgNACgJIAKgkIAUAqQAIALgDARIgBAFg");
	this.shape_1283.setTransform(814.7,596.3);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#129060").s().p("AgFAHQgBgIABgFQAGAFAFAIg");
	this.shape_1284.setTransform(248,599.4);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#ADC002").s().p("AgCABIACgBIADABg");
	this.shape_1285.setTransform(242.9,599.9);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#1B8012").s().p("AgTAYQAFgCACgFQABAAAAgMIAAgPQABgIAGgFIAYAvg");
	this.shape_1286.setTransform(210.2,616.4);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#71AB38").s().p("AAfBKIgZgwIgzhjQARAGAOARQAQAVAGAEIAmAyIgOAxg");
	this.shape_1287.setTransform(209.1,611.4);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#288D14").s().p("AACA0QgHgHgHgEIgCAAIAAgZQAJgOAAgXIgBgnIgBgFIACAAQANAZADAoIAEBDIgNgPg");
	this.shape_1288.setTransform(203.1,607.9);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#459F34").s().p("AghAXQgBgPACgHQAFgMAZACIAGgNIAFAEQAGAGAEAMQAGAQAJAGIAAgBIAAACg");
	this.shape_1289.setTransform(821.4,597.8);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#59B02C").s().p("AgaAPIgKAkIgIgGIABgDQAFgxAmgxQATAsASATIAIAgIgdABQgRACgFAPg");
	this.shape_1290.setTransform(816.6,591);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#1B8E44").s().p("AAaBWQgEgMgGgHIgFgEIgHgGIgHggQAJgBAEgDQAGgDgDgJQgDgJABgFQABgIAHgFQAUASAEAZIgCBSIAAABQgJgGgGgQgAgRgKQgIgQgLgIIgGgEQAJgfAYgmQAEAKgBABQgFAIgDAKQgMAnAaAvIABABIgBAIIgRgbg");
	this.shape_1291.setTransform(820.7,589.1);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#15915C").s().p("AgJAHIACgCQAEgHAFgEIAHANg");
	this.shape_1292.setTransform(567.1,599.3);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#148E2C").s().p("AAQGiQgIgJgEgCIgGgMIgXggQANgCAJALQALAPADACIAQASQgDAMgFAAIgDgBgAAQlrQgIgJgEgBIgGgNIgYggQAOgBAJAKQAJANAEADIABABIAQATQgDALgFAAIgDgBg");
	this.shape_1293.setTransform(106.6,573.8);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#148D5D").s().p("AAgBZQghhSguhRIAAgBQgKgQACgQQAKAKALAaQAKAZAPAJIAJARIAhA6QATAiAEAcIgGAIQgLgCgHgRg");
	this.shape_1294.setTransform(98.2,607.5);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#208A11").s().p("AALBMIgHgMIglgyIAAgjQACgTAFgPQACgBAHgOQADgLAPAIQACABAIgJIAAARQAAAKAHAFIAQB5QgCAKgHAAQgFgBgJgFg");
	this.shape_1295.setTransform(213.3,607.4);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#137F3F").s().p("AgUgQQAPgHAFgYIAGABQAFAJAHAUIAEAHIAAA2IgHAEg");
	this.shape_1296.setTransform(219,603.4);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#0E8248").s().p("AAAABIAAgBIABABg");
	this.shape_1297.setTransform(680.7,600);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#79A10A").s().p("AgJAiIgGgkIAAgCIgEgNQgEgKAKgGQAXAlALAeg");
	this.shape_1298.setTransform(155,615.4);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#178E2A").s().p("AANApQgLgfgYglQAAgMAOAAQACALALAJQABAGAKAbQAFAPACAMg");
	this.shape_1299.setTransform(155.9,614.8);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#92B007").s().p("AglAjIAHgOIAmguQAUgNACgPIAIAAIAAAFIgmBNIgHAOQgGAIgHADg");
	this.shape_1300.setTransform(111.5,609.1);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#239312").s().p("AgcBfIgBgSIABgDIANh1QADgLgDgPIgEgZQAFACALgEQAIAAgDANQAAAEAHAQQgEAnARAeQgCAQAKARIAAAAQgIAGAAAMIAAAUQgLAUgYAAQgHAAgIgCg");
	this.shape_1301.setTransform(90.4,596.1);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#0E8C2D").s().p("AgVAiQgEgFAAgFIAAgOIAKgFQAHgGAHgJQAOgTAGgEIAHAGQABAHgHAHQgIAJgBACIgbAkg");
	this.shape_1302.setTransform(45.8,615.4);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#058A2E").s().p("AgPAcIgGgGIgGgxIAcAZIANAQQAGAJAIAFg");
	this.shape_1303.setTransform(36.3,616.1);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#1D8712").s().p("AgoBPQAFgQACgVIAAgmIAHglIAOghQALgPAbAEIAAAfIAAARQAAAJAHAGIAAAOQABAGAIAEIAAABQgGAEgPATQgIAJgHAGIgIAGIgBgMQgDgHgHgFQgEAJgCAXIgCAQg");
	this.shape_1304.setTransform(43.6,610.9);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#4DAD39").s().p("AghB7IAFgYQAEgUgCgMIAHhAIAIg3IAGgkQADgVAFgNQABAGAAAJQAAAKAGAFIAEA6QAEAiAIAXIAAgBIABAtIAHAyIAAAGg");
	this.shape_1305.setTransform(30.8,606.6);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#189857").s().p("AgCAHIAGgNIAAANg");
	this.shape_1306.setTransform(497.9,599.4);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#8BAB08").s().p("AgKA8IgIglQAHgcAHgOQAIgYAPgQIgGBQQgCAVgDASg");
	this.shape_1307.setTransform(120.9,612.8);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#1C975B").s().p("AgMgdIgDgYQAAgNAIgJIAGAPIADALQAEAMAGAJIADADIABATQgEALgCAeIgBAMQgDASgFALQgLhRgCgYg");
	this.shape_1308.setTransform(85.9,606.3);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#ADC80A").s().p("AAABgIAFgKQACgFgBgFIgehqIgWg+IAIgIQAEAEAKAQQAIANAJAFQADASAMAHIAnBSQgGArgpANg");
	this.shape_1309.setTransform(115.2,594.2);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#279B11").s().p("EAifADYQgFgIACgOQABgWgFgIQgEAFAAAMQAAAMgHADIAAgPQAAgFgBgEQgCgDgEgCQgIgEgFAGIgJAIIgBgBIABgiQgBgVgHgOQAJgBACgGQACgDAAgJIAAg4QASgTgQgTQAGgWADgmQABguADgPQADgLAFgCIABAAIAIBGIANBrIACAhQABASAFANIAAATIAIBMIAAASIgGgGIgCgFIgDgJIAAgBQgBgEgEgCIAAAdgEAiEADYQAAgMAJgIIAAAUgEg53ADLIgnhTQARgcgDgWIAPiYIABgzQAOAGABATQADAQABAdQADAcAOAQIgDANQgCAIABAFQABANATB3IAAAMIgBAMIgPAUIgLAMQgGAIgJAAIgBAAgEAvRACpQgJgKgUAEQgPAEgCgOIgFgOQgCgGgBAAIgBgTIAAAAQAHgMABgXQABgZAEgKIAJhzQAIgLABgXQACgaAEgIQABgKAHgEIAHAZIAAABQgKAOABAUIAEAjQAEAcABAYIAAARIAAALQgBAQAHALIABABIABBMIAFAgIACAOQABAKgBAHQgHgPgFgFgEgwCACxQgBgKgDgEQgJANgSAEIggACQgGAAABgNIAAgTIAAgFIAAg+IAAgCIAAAAIABAAIACgJQAGgTABgdQACgpADgPQAKgvgCgwIAHgHQAHAKADAPIAGAbQACAKACAlQACAXAFAOQAAAGADADQgCAUAEAfQAEAdABAPIABAHQgBALAFAYIAAAnQgDgDgBgHgEA5UABYIgBgSQAKgSgBgbQgBglABgHQAHgXACglQAEgwACgOIAIhLIABAAQAMAIABAMQABAJgBAPIADAvQACAbAFATQADAJAAAgQAAAYAJAOQgGAGADAMQAEAPAAAEQgCAVADAeIAGAzIgBAfQgZgFgNAAQgVAAgPAMgAPFCmQgVABgIgCIgBgBIAAhdQARhRgDhPIAAAAIABgaQACgPAJgLQAEAHgBARQAAALAEAHIAEAEIAAAgQgBAUAJAMIAAAfQgCAsARBSIgBAsQgJgGgUACgEgwKgAUIADACIgDABg");
	this.shape_1310.setTransform(490.4,578.4);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#0E885A").s().p("AgLA3IgHhDQALgHgFgNQgDgIAAgGQAAgFACgDQAIACAIAJQAIAKAHABIgHAgIABA3g");
	this.shape_1311.setTransform(77.3,613.3);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#188820").s().p("AgNBSIgBg3IAIgfIAGg/IACgOQAGAFAAAMIAAADQAAANAGAFIgJBSIgDArg");
	this.shape_1312.setTransform(79.9,610.6);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#168142").s().p("AAEBEIAAgDQgBgMgEgGIgCAOQgHgHgIgZIAIhFIAIgtQAJAHADAPQAGATACAEQADBUgLAqQgGgGAAgMg");
	this.shape_1313.setTransform(80.3,597.6);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#199A62").s().p("AAEBPQgDgQgGgIIAAgBQgEgFgGgSQgFgPgIgGQgPgngEgQQgIggAGgbQAGAIAAAMIAAAUQAGAbAOAFQANAFAagOIAWAgQAIAYAHAHIgHA/QgHgBgJgKQgIgJgJgCQgCADAAAFQAAAGADAIQAFANgKAHIgFgag");
	this.shape_1314.setTransform(74.6,601.5);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#239511").s().p("AgdBNIAAgOQAHgZABggIAAg5QACgQAMgJQAGAOAKApQAKAhALAUIAAAAQgCAKgDAeIAAAFg");
	this.shape_1315.setTransform(501.2,592.4);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#B4C503").s().p("AgoANIAAgNIAKAAIAJABQAKgBAAgMIANAEQADAAAPAMQAJAJALgMIACgBQAAAHgCAGg");
	this.shape_1316.setTransform(509.8,598.8);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#B8CE05").s().p("AAWBJIgKgBIgEgRQgDgKgGgEIgBgBQgLgTgKgiQgLgogHgOIAIgGIAtBGIARAhQACAFAEAFIABAKQABAHAFADQgBANgKABIgJgBg");
	this.shape_1317.setTransform(504.5,591.5);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#1E8311").s().p("AgBAHQABgHACgJIAAATIgDgDg");
	this.shape_1318.setTransform(959.5,616.2);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#779D08").s().p("AgGAJIAJgRIAEACIAAAPg");
	this.shape_1319.setTransform(959,617.9);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#6AA83A").s().p("AgYAYIAQgUIApg0IAABXQgOAGgPgFQgKgEgaANg");
	this.shape_1320.setTransform(956.4,607.1);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#277216").s().p("AgFADQACgDADgCIAGAFg");
	this.shape_1321.setTransform(945.8,618.6);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#0E865E").s().p("AgWAvQABgLgBgMQgBgNgGgYIAAgBIAQggIADAFQAWAeASA1QgEABgCAEg");
	this.shape_1322.setTransform(942.8,614.1);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#5CA03A").s().p("AA4BPQgBgSgEgHQgCgEAAgLQgCgKgCgGIgKAnIgDARIghAAQgBgSAAgUQADACAFAEIACACQAGADAFgJIAQggIAGgBQAagMALADQAPAFAOgGIAAArQgDAJgBAIIgKATgAgZBPIgHgGQgSg1gWgdIgEgGIgCgGIgLgXQgGgPgKgGQgBgKAHgDIBLBRIAQAhQgJAFABAQQAAAPgGAHg");
	this.shape_1323.setTransform(949,611);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#327911").s().p("AADA6IgCgCQgEgFgDgBIgHgGIgQggIAIhGIAzBNIgQAgQgEAIgEAAIgDgBg");
	this.shape_1324.setTransform(949.5,610.1);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#1A9A43").s().p("AgaA2IACgCQAHgNgBgUIAAgiIAHgsIABAAQALAOAKAUIAOAhIABACQgEAMgNAOIgVAYg");
	this.shape_1325.setTransform(655.6,586.9);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#08872F").s().p("AgaAyQgJgYANgeIAJgFQANgIABgOIAcgSIACAGIgQAgIgBABQgHAJAAAOIAAAaQgEgDgCgGIgDgOQgIAKgEAMIgFAMg");
	this.shape_1326.setTransform(938.2,613.8);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#1E8815").s().p("AgLgQIAAAAQAAgMACgIQAEgKAIgHIABASIAIA+QgBAOgNAIIgJAFg");
	this.shape_1327.setTransform(937.1,607.9);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#1C8412").s().p("AgOBLIAAiNQAJACAKgKIABAAIAAAiQgBAWAIANIABBFIABALg");
	this.shape_1328.setTransform(929.4,611.3);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#118946").s().p("AgSA2IACgqQABgYgKgPQACgZAOgOQAGAJAJAYQAJAWALAJQgJAGgDAKQgDAIAAANIAAAAQgGAFgDAKIgFAQg");
	this.shape_1329.setTransform(934.8,602.8);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#208144").s().p("AgEA1IgNgLIAAhFQgBgIAJgGIANgLIAPAMIgVBdg");
	this.shape_1330.setTransform(932.5,613.5);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#208B12").s().p("AgeAHQAKgGAQgBQAbgDAHgDQABADAAAJIAAABg");
	this.shape_1331.setTransform(913.4,599.4);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#5DB429").s().p("AgSgSIAkgTQABAngIAWIgBACQgKgFgDAGQgFAKgCABg");
	this.shape_1332.setTransform(924.4,591);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#259311").s().p("Eg7cABaQgLgNgLgGIgDgBIAAgHQgCgTAFgjQAGglgBgQQAFgVABgKQAEgTgCgNQABgDgBgDQANAJABAWQACAZAGAHQgDApALAhIAAAIQgDAKAHAeQAFAUgEAOIgFAIIgVgYgEA7hABPIAAguIgYAAQgBgIABgJIAAguIABgDQAIgWgBgoIAFgHQADgEACgBQAFABAAAEIgBAHQACAFAAAIQgDAIADALIAGATIAQByIgBAAIgBABQgJAIgIAAIgDAAg");
	this.shape_1333.setTransform(547,596.8);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#178142").s().p("AgQBDIAEgHQAIgLgIgJQgDgNAFgWQAFgXgBgLIADgUQADgLAJgGIABAYIAHA4IgBA1g");
	this.shape_1334.setTransform(921.6,593.4);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#1AA066").s().p("AghBQIgDg5IAAgCIAOgNQAHgIABgJQANgLAEgGQAKgKABgLQAHgEACgMQADgMAEgEIAHAGIAAAIQgOAggGAwIgHBBg");
	this.shape_1335.setTransform(616.1,592);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#30903B").s().p("AgCAEIAAgHQACADADAEg");
	this.shape_1336.setTransform(593.8,599.7);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#1C8411").s().p("AggBLIgEgxQAFgLACgQIABgNQADgeAEgMQAkAIAOgaQgBAPAJAdIgYBpg");
	this.shape_1337.setTransform(89.7,611.3);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#127E43").s().p("AgUAkQALgcABgLQAOgLAAgVQAGAEACAKQABAKAFACIABALIgBAHQgGAGgGAJIgGAMg");
	this.shape_1338.setTransform(608.8,596.5);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#57AF2D").s().p("AAWAVIABgOQABgHgCgFQgEgJgEADIgGAHQgQAKACAVQgGgJgVAAQgVgBgFgKQAFgUARgRQA1gFAsAMQgBAJgHAJIgOAMIgCACQgFADgBAIQgCAKgFADg");
	this.shape_1339.setTransform(608.6,593.4);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#BED625").s().p("AgDAgQgCgMgFgPQgKgagBgHQAGgFACAEIAFAGIAZAmIAFARg");
	this.shape_1340.setTransform(158.6,615.6);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#549B12").s().p("AgoBRQAAgSgDgVQgJgugDgWIgCgPQgBgHAGgEIAOAUQAFAKAFgDIAHgJQALgHAKgOIAQgZIArADIg0BuQgPAWgIAag");
	this.shape_1341.setTransform(376.5,592);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#269A11").s().p("AgjCrQAFgXACgjQADgzACgNIAAgSIAIhMIAIh9IACAAQAHAGACAJQACAFAAAPQACAIgCAPQAAANAIAJQABAHgBAQQgBAOAJAIQgEBCATBWIgFAJQgCAGAHAEIgHAMIgZAhg");
	this.shape_1342.setTransform(226.5,582.9);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#149060").s().p("AgBBAIgagnIAphRIAOgHIgIB4QgMgRgEALQgDANgBAAIgBAAg");
	this.shape_1343.setTransform(160.5,610.7);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#229011").s().p("AT1AaIgoAAIgSgaIACgTQAKAEASAAIAdAAQARACAGANIACAYIAAACgA0OAaIAAgIQAIgIgBgNQgBgTABgDIABAAQAIADAVgCQAUgBAJAGIAIAkIAAAJg");
	this.shape_1344.setTransform(712.6,597.5);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#0A6E38").s().p("AgDALIADgMIAEgJIAAAVg");
	this.shape_1345.setTransform(782.5,599);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#178045").s().p("AAQAdIAAgVIgDAJIgFAMIgfAAIACgNQgBgKAJgNQAKgPABgGQAIADAFAMIADAHQAEAHAFABIABAbg");
	this.shape_1346.setTransform(781.2,597.1);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#23A764").s().p("AgDAzIgDgHQgFgMgJgDIAThEIABgBIANgTIAIAFIAAABQgIATAAAmQgBAngHARQgFgBgDgIg");
	this.shape_1347.setTransform(783,591.3);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#1D9840").s().p("AgGgaIgCgSQAAgJAIgGIAHASIAAABIABASIAAAEQgBAKABAaQABAagIAQQAAgagHg8g");
	this.shape_1348.setTransform(786.6,593.9);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#70C322").s().p("AALA2IgIgSIgMgVIgBAAIgIgGIAAgJQgBgFgFgEIAAgNQAIgJAGgWQAKAEAIAOQAJAQAIAEQgFAKgBAYQAAAXgHAMg");
	this.shape_1349.setTransform(786.2,584.4);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#138846").s().p("AAAAdQAIgBAAgIQgCgKAAgEQABgFAAgdQAUAUALAfIgCAGgAglAdIAAgLIAAgCQACAHAJAEIALACg");
	this.shape_1350.setTransform(770.1,597.1);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#138A45").s().p("AAdA0IgLgDQgJgEgCgHQgEgGgCgOQgBgQgGgHIgIA5IgmAAIAAgCIAAgHIAtheQAHAEAAAKQABAMACADQACABABAOQABAHAMACQAMACAIgFIALgJIACAAIAAAEQAAAegBAEQAAAEADALQAAAHgJACg");
	this.shape_1351.setTransform(765.6,594.9);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#128C45").s().p("AgTA5QgDgcAAgYIAeg+QAGAGADAMIAGAUIAAAGQgDAmACAgg");
	this.shape_1352.setTransform(455.4,594.3);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#4E9415").s().p("AgCADIAEgGIABABIAAAFg");
	this.shape_1353.setTransform(443.8,599.7);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#B3C605").s().p("AgYALIgCgCIAOgTQACAHACABQADACAGgDQAGgEAHABIANAEIgDANg");
	this.shape_1354.setTransform(418.3,599);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#159764").s().p("ALIAQIAAAAQAKgXALgIIABAAIAAAYIABAHgAreAQIAHgLQAFgIAGgHIgDAag");
	this.shape_1355.setTransform(682.4,598.4);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#70AB3A").s().p("EA1dAEGQgBgUAJgOIAFAHIAVAbgEg14gCrQgHgLACgPIAFgZIAAgLIADgEIATgYIAAA0IAAABQgIAZAAAZQgKgEgEgJg");
	this.shape_1356.setTransform(382.8,573.9);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#189F69").s().p("AglAfIgUgbIgGgFIAAgGIAEgCQAGgCAJAAQAOAAAFgDQAEABAHAIQAHAFAFgOIAGAAIAhgCQARgDAJgMIABAAQgHAcgCADIgPAfg");
	this.shape_1357.setTransform(732.1,596.9);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#ACC30A").s().p("AgEAaIgBgFIgMgnIADgGQAEgDADAGIAZAvg");
	this.shape_1358.setTransform(721.3,597.5);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#73AE37").s().p("AAfBKIgZgwQgDgGgDADIgDAGIgFgBQgBgRgCgHQgEgMgIgIQACgKgMgRQgMgSAFgMQAFAFAGAMQAHAKAPgCIAbAnQAAAJAKAHQAKALADAEIgIA0g");
	this.shape_1359.setTransform(719.9,592.7);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#1DAA6C").s().p("AqkB2QgHgFgGgHIgRgVQgDgWgTgWQgPANAAASIgHAAIgBgOQAAgIgHgDQALgVgEgYQgDgQgNgbIgGgXQgGgNgQgDIAAglIAUATIASAUIAmAxQABAFAIAAQAJgBACAFQAGAVAUApQAFAOACANQADAWgEAUIAAAHgAEVBVQANgaALgJQAagYgBgZQgCgVgWgbIgQghIgPghQAKABAHAIQAJAKACAAQAXAcAWAsIAjBJQADAIgCAJIgGARIgEgBQgFgCgDgEQgDgIgDgEIgDgMQgDgIgIgBQgIAAgEAJQgDAKgFACQgCAAgMAUQgFAHgHAAQgIAAgLgIgALnBCQgDgEgKgLQgKgIAAgJQABgMgIgPIgQgYIgEgMQAAgGAMAAQAMAEANARQAOATAPgWIANgRIAHAEIgGAUQgYATAVAZIAQASQAIAKACAKQgGACgNABQgJgBgHACIgDACg");
	this.shape_1360.setTransform(649.9,588.3);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#299B14").s().p("AggBkQgIgMAAgNIAAgGQAIgGAAgKIgBgQIgBgOIAQhrIACgjQAGAMAAAYQgCAVALAKIAQAJQAMAHAEATQAEAWAGAHIgFASQgEALAIAJIgdA+IgNAUgAgmiDQAGAFAAAIIAAAPIgHAFg");
	this.shape_1361.setTransform(415.9,586.7);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#1A9645").s().p("AgJABQgCgOgBghQAGgDADAEQADAGADAAIAHANQAIAlgPAmQgJgVgDgbg");
	this.shape_1362.setTransform(367.3,594.4);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#80A206").s().p("AgUAkIgBgCIgBgGIgGgrQgDgaADgSQAHAFALAPQAKANAIAFIAWAyIAAAMQgJAAgKAIQgNAKgDABg");
	this.shape_1363.setTransform(836.1,539.9);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#0B7234").s().p("AgIARIADgPIABgSIANAOIgCATg");
	this.shape_1364.setTransform(362.8,598.4);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#078B2C").s().p("AgJAOQgFgKgCgIQgDgLABgJIAPgaQAGAEAGALQAIAOACACIAAAjQABAXgJAMIgUglg");
	this.shape_1365.setTransform(851.5,544);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#6FAB39").s().p("AiSEbIAEgDIAOgPQAKgKADgKIAXgUIAIAAIgdA5IgDANQgCAEgDACIgDABQgUgBgCgSgAB0hdIgIgXIAAiGIAIgbQAEgRALgHIgFAZQgCAOAHALQgCAFAAAEQgBAJAIALQAMAUgCAJQgGAUgCAoQgCAggDASIgDALQgJgJgFgMg");
	this.shape_1366.setTransform(24.8,581.8);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#1D8510").s().p("EghWAHLIgCgZQgDgSgLgMIAAAAQgBgZAHgMIABgCQACgCAIgWQAGgPAMABQAKABAHANIAKAbIANAdIg0A+gEAhCgFEQgEgCgGgKIgPgXQgGgHgGgGIgIgGQgFgPAAgEQgCgKAHgIIAagrQAPANAOAgQAPAeANANIgXAsQgGADgEAAQgDAAgCgBg");
	this.shape_1367.setTransform(268.8,572.9);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#2A9715").s().p("AgXBNIAAgIQAPglgIgmIABgBQAMgYADgtIAAAAIAMATQgGAFABAHIACAOQADAXAJAuQAEAVgBASg");
	this.shape_1368.setTransform(370,592.4);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#1CA76A").s().p("AgCAiIAAgKQgCgGgFgDIgIgYIgBgUQAAgLAIgHIABAFQADAJAJAJIAHAHIAJAIIgIA4g");
	this.shape_1369.setTransform(362.6,593.3);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#32A335").s().p("AgBAuIgHgHQgJgJgEgJQAQgNAAgWQgDgZACgNIABgBIAOATQgBAOAOAUQAPAXABAMQgCAAgEgFQgEgFgFADQgNACgCAIIAAAQIgJgIgAglATIABgiQAGAEADALIAAACQACAIADAFIAAAAIABABQgJAHABALIAAAUQgJgNABgWg");
	this.shape_1370.setTransform(363.7,586.9);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#369939").s().p("AgWATQgFgpACgXIAKgnQAXACAIASQAFAKAGAWQgEAtgSBCIgWAHQAAgUgFgvg");
	this.shape_1371.setTransform(533.8,560.1);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#4EBB28").s().p("AtfHlQABgYgIgNIAJgUQAOgKAOgRIAZgeIAOgMIAAABQAIAFgEAGIgFAMIgCAKQABAFAJABIgIAFQgOAAgBANQgJAGAEAKIAEANIAAADIgMAAQgTAPgHAVgANDmxQAHgbAWgYQADAIgHAiQgFAZAQAPIgHAHg");
	this.shape_1372.setTransform(234.6,570.3);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#1D9E64").s().p("AgEAdIAAgHQgBgYgNgNIgBgBIAAgMQAHABAFAIQAHAIACACIASAmg");
	this.shape_1373.setTransform(561,597.1);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#1EA76A").s().p("AAGBDIgnhfIAAgBQAEgSASgUQAjAeAKAuIAAAMIAAABQABAYgDAVg");
	this.shape_1374.setTransform(555.7,593.3);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#71AC39").s().p("AglAvQgDgSgEgHIAAgBIABgLQARgKAGgFQAMgKACgMQANgIAFgFQAJgJACgKIAQgNQAGADAAAJQgSAUgDASIAAABIgDAGIgHAKQgKAMgJAUIgSAlIgFAJQgIgIgBgSg");
	this.shape_1375.setTransform(550,592.6);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#24B23A").s().p("AgFBGQgRAGgHgGQgGgFgBgPIAAg3IgBgjQAAgWAJgNIAAA0IAegFQAQgBANAFIAHArIAAA5IgBAAQgRgOgZAIg");
	this.shape_1376.setTransform(106.9,566.2);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#5D9F37").s().p("AgaAfIAAgtIAAgkIAAgHIABgWQAAgNgHgIIAAAAQAPgMAAAMQABAOAGgDIAAAHIABAKQABAFAGADQgCAPAGAYQAJAbAAAKQADAHAEAkQADAZAMAQIgIAMg");
	this.shape_1377.setTransform(863.5,540.9);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#6FAB3A").s().p("Eg4ZABvIgQgOQgEgcgTgiIgig5IgJgRQALgCAGAKQAHAKAGABIAmArIAXAgQgBAlgGATgEA5MgBMIAAghIANAGIATAbg");
	this.shape_1378.setTransform(466.4,607.8);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#AAC006").s().p("AgYASIARggQAWgIAHAKQACAFABAUIAAAFg");
	this.shape_1379.setTransform(899.1,598.2);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#1E8911").s().p("AAAADIAAgFIAAAFg");
	this.shape_1380.setTransform(878.7,599.8);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#0D7238").s().p("AgGANQAEgPAHgLIACANIAAANg");
	this.shape_1381.setTransform(889.6,598.7);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#068A2C").s().p("AgMAUIgIgOIAVgfIAUgGIAAAgQgIADgEALQgFANgDAEQgHgEgGgIg");
	this.shape_1382.setTransform(332.1,538.3);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#94B105").s().p("AgDAMQgKgXgIgGQgBgPAHgFIAeAhIABAAQAGAHABANIgBAWQgRgFgIgVg");
	this.shape_1383.setTransform(858.7,531.3);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#1DA76A").s().p("AAcA6IgkhEIAAgBIgcg5IAFgCIBEBOIAAAgQAAATgHAMg");
	this.shape_1384.setTransform(887.3,591.5);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#72C620").s().p("AABAbQgEgJgDgCIgBAAIgOggQAOgGAHgMQAGABAGAHQAGAJAEACIgIAyIgBAAQgIAAgEgIg");
	this.shape_1385.setTransform(892.5,583.1);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#3D8411").s().p("AghBWQgBgMgHgHIABgBIABgJIAJgNIAggyQAWgmACghQAEgTALgJQABAHgFAQQgFAPADAIQAAARgGAoQgFAjACAUIgPABQgTAJgDAQIgUAbIgCgUg");
	this.shape_1386.setTransform(798.9,527.2);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#128A44").s().p("AgTAkIABgDIARgiQAJgWAMgMIAABGIAAABg");
	this.shape_1387.setTransform(656.1,596.5);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#209F5F").s().p("AgDAbQgCgQgBgEQgBgBgBgLQAAgHgFgEIgBgCIAAgBQAEgKAEADIAHAJQAOARAAAbg");
	this.shape_1388.setTransform(667.9,597.3);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#4F9613").s().p("AgWBhQAAgcgOgSIAGgNQATgcAHgOQANgZgBgVQABgDAEgUQAFgPAIgIQADAEABALQABAJAGADQgRA1ARApQgBALgFAVQgEATAJAMQgFAEgBAFg");
	this.shape_1389.setTransform(671.7,590.4);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#279B12").s().p("EAykACyQgIg9ABgjIAAgZQAIgFgBgJIAIgxIAXiVQABgGAFAAIAJADIAAA4QABAHgBANQAAAMAHAGIABBRIADAlQAEAVAMANIgdA5IgRAhgEgypACyIgHgyIAAgEIgCADQgHAMAAASQAAAOgEAHIgJAAIgCgCIgkhLIAFgGQAJgMgBgRQgCgTABgLIAAgFQgBgdAGhCQAGg9gDgiIABgSQAJACADAJIACAPIAeCpQAAAUAGAfIAKAzIgBAMIABAhQgBAFAAAIg");
	this.shape_1390.setTransform(570.3,582.2);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#129163").s().p("AADAKIgJAAIAAgTIANATg");
	this.shape_1391.setTransform(883.5,599.1);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#8DAB05").s().p("AcAArIgEgNIAAgCQAAgGgFgEIAAgHIAAgfIABgGIAOgNIAdAMIACAOIgJBFIgIABQgQAAgEgOgA75A1IgPgDQgRgCgDgLQgIgLAAgaIAOgWQAEgHAAgHQAAgFgCgEQAMgUANASIAHAMQAFAHAIACIAAApQgCAYgGARIgKgDg");
	this.shape_1392.setTransform(205,535.2);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#0E8247").s().p("AgUAdQAkgXgIghQAAgBAAAAQABAAAAAAQABAAABABQABAAABABQAGAEADAAIAAAlIgDAIIAAAAIgBAGg");
	this.shape_1393.setTransform(876.8,597.2);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#169245").s().p("ASZBJQgGgIADgMQAGgRAAgKIAghiQAFAJACAdQAAAZAOALIAAATQgCAAgGgDQgCgBgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABQAIAhgmAXgAzMBJIgBAAIgCgCQgCgCACgDIACgGQAQgZAPgsIAXgtQAJAIAHARQAIAVAEAFQgWAQgSAdIgRAfg");
	this.shape_1394.setTransform(755.6,592.7);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#BBCD05").s().p("AgwBJQAHgTAPgcQAYgpAFgMIAYgjIAIgIIAOgCIghBiQgUABAAASQAAARgFALg");
	this.shape_1395.setTransform(871.9,592.7);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#238E40").s().p("Ag0AuQgBgegFgJIgOADIgIAIIgYAjQARhAAxhHIAJABQAAANAQAgQAFAKAGgDQADgCAGgGQAKAEAUgFQAVgEAKAFIAIAGIAOAfIAAABIABAmQABAXgJAPIhFhOIgFABIAcA5IAAABIgWgGQgNgCgJABQgJgHACgOQAAgRgEgGQgKAMAAAaQgCAbgHALQgOgMgBgZgABgAtQgBgHAKgGIAAAaQgHgJgCgEg");
	this.shape_1396.setTransform(882.7,584.6);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#689B14").s().p("AgFAPIABgPQAAgIACgGIAIAdg");
	this.shape_1397.setTransform(127.5,617.3);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#118F62").s().p("AgYBPIgNhpQgBgUACgGIACgFQAFgJANgFIAEACQAIAHAFgGQALgKABAAIAZBjIgJAUIgNAOIgBABIgPAXg");
	this.shape_1398.setTransform(144.6,611);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#1A9D66").s().p("AgBA8IgBgEQgOg3gFhDIAIAGIAMAUQABALAIAPIAPAYIAAAMIgBAAQgOAFgFAKIgBAEQgCAGAAAUIgBgHg");
	this.shape_1399.setTransform(140.8,601.5);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#1DAA6D").s().p("AkvBgQgOgFgGgbIAAgUQAAgNgGgHIAAg/QADgDAGgHIAQgWQAKgPANgHQAFgCAFgBIADAMIgEAIIgLAUQgKAQAAANQgeAhAkAeIAYAyQgUALgNAAIgHgBgAEtA4QgKgegHgKIAAgCQAGgSAQgRIAXAUQADAQgFAfQgEAUgBANIgBAOQgMgMgIgZg");
	this.shape_1400.setTransform(102.6,588.7);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#249414").s().p("AACByQACgTgGgaQgLgngBgLIAAgTIABgOQABgNADgUQAFgfgCgRQAGgCAAgKQABgKAFgDQALAngCAxIAAABQgEAWgCA1QAAAygIAbIABgHg");
	this.shape_1401.setTransform(136.2,598.1);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#6EAC3A").s().p("AylEmQAAgSgBgKIABgNQAogVANgkQAKgBAIgJIALgPQAHADAAAJQgQARgGAUIAAABIg1BhQgMgKgCgOgASAkPIAAgCIAggsQAIAMgBAQIgBAdQgCAIgEAiQgCAZgIAPIgHgCQgFAAgCACQgOgqAGgzg");
	this.shape_1402.setTransform(243.3,568.2);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#1CA13F").s().p("AAYBlIgHAAIAAgBQACgxgLgnQgGADgBAKQgBAJgFADIgXgUQAAgJgHgDIgHgMQAJgJgBgPIgBgaIABgRQAAgJAHgGQASgPAIgBQAOgDALATIAIBSQAAAjAFAXIAGAcQABAQgMAMg");
	this.shape_1403.setTransform(136.1,584.8);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#159563").s().p("AgngYQgDgGAAgDQAAgDAKACQAQADAFgHQADgGgBgMQAIAIAGAXQAHASAJgFQAEgCAKgLIAGAAIAAACIACALIgIBFg");
	this.shape_1404.setTransform(943,605.6);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#249411").s().p("Eg+/ABrIAAiTQADAFAEACIABArQAJA8gCAkQAAAJgHADgEA+TAASIAAgTQgBgXALgjQAOgsACgOIANBOIAFA5g");
	this.shape_1405.setTransform(403.6,598.2);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#189742").s().p("AgCBHQgMgCgBgIQgBgOgCgBQgCgDgBgMQgBgKgHgEIABgCQAFgTAOgXIAYgsIAIAtQgCAqAJAhIAAAHIgCACIgLAJQgGAFgIAAIgFgBg");
	this.shape_1406.setTransform(767.8,588);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#99B505").s().p("AggAYIAzg8QAMgLACAOIgBABQgLAMgMAUIgVAkIgNAGg");
	this.shape_1407.setTransform(66.9,607.1);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#298A41").s().p("AACAxQgCgSgKgJQgKg0ACgiIAAgCIAPgMQAHAHAFAOQAGASAEAGIAAAAIgIBwQgGgIgDgWg");
	this.shape_1408.setTransform(72.1,610.4);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#81A306").s().p("AggAfIAzg9IAOASIgXArg");
	this.shape_1409.setTransform(59.3,615.7);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#549A11").s().p("AguCiIAAAAIgYg5IglhMQgFgdgZgnQgBgZgEgcIgEgjQgBgTAKgPIAfAsIAjA1QAVAfASATQADAOAMAKIAHANIAPATQAFAVANAHQA0g7AUggQALgEAPgTQANgQALgGIACAAIgOAhQgYAlgIAfQglAxgGAyIgCAAQgHgTgSACQgWAHgKAAIgBAAIgMhNQgCANgOAtQgLAjABAWg");
	this.shape_1410.setTransform(806.4,581.8);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#B0C302").s().p("AgBAFIABgBQALgFAGAFIABABgAgRAFIAHgJIADAHIABABIABABg");
	this.shape_1411.setTransform(294.9,599.6);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#BACC05").s().p("AgXAqIgBgBIgBgBIgDgIQABgOANgTQAPgWACgMQAAgDADgCIADgCQATAHABAQQAAAKgEASIAAAAQgBAFgJAQIgFAMIgKAAIAAgBQgGgGgMAGIgBABIgCABIgCgBg");
	this.shape_1412.setTransform(296.7,595.9);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#1A9736").s().p("AgHAAQACgJgBgHQAQAJgDAQIgEACQgDACAAADQgHgFAAgLg");
	this.shape_1413.setTransform(297,590.7);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#78CA21").s().p("AgdAvIgDgnIAEgBQAbAJAAgWIABgcQAHgDAGgHIAJgPQALAGAAAMIgDASQgKAKgIARIgMAdIABABIAAAAIgBgBIgPAag");
	this.shape_1414.setTransform(299.2,580.6);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#138B45").s().p("AgLApIgKhRIACABQAKAHAHAOQAMAWADADIAAABQgBAOAKASIAAABg");
	this.shape_1415.setTransform(280.7,596);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#189845").s().p("AAPBNIgBgDQgVgogOgTQgLgPAHgPQADgJARgTQALAOALAaQANAdAGAMIABABIgOAmgAgkhMQAMgBAIAHQAEACAIAMIgCAHQgUgFgKALg");
	this.shape_1416.setTransform(284.1,589.7);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#1CA96D").s().p("At1B1IgUgrIgEgLQgDgFgHABQgIAAgCAIIgBAMIgMgCIAAg5IghAAIARgUQANgRgJgSIgkhFIAAgFIAIgIQAKAOANgBIAIAWQADAGAFAEQAFAEAHACQASADAKALQAKALAIAZIADAJQAuA3gwBGgAOrBWIgEgRQgDgKgPABQgSANgJABQgPACgMgRIA0hvIA4gGIgCARQgRAUAJARQAGAJAYARIgkBNQgKgDgGgKgAhYBJIAAAAQgDgEgNgXQgHgNgKgIIgDgCIgCgUQgEgLAKgMIAQgVQALgLAUAFIABAGQgRAUgDAIQgIAQAMAPQAOATAVAnIACADQgIAFgIAAQgLAAgKgLg");
	this.shape_1417.setTransform(290.9,589.4);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#61B729").s().p("AAJAvQgGgMgMgeQgLgZgMgOIgBgHIACgGIAGAAQAOAMAlACQAGAIACAKIgBASQgHAGAAAJIAAARIAAAMIgQABIgBgBg");
	this.shape_1418.setTransform(286.8,588.8);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#2F9C4A").s().p("AgRg+IAOgOIANgSIABAAQgFATAAAFQABAMgFAbQgBAXARANQgZgCACAXIADBEIgDABQgMheAAg/g");
	this.shape_1419.setTransform(296.6,571.9);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#0A7F28").s().p("AgOA2IABg4QAAgjgJgXIADgGIACgBIAoBBIgCABQgPAOgEALQgEAPAJAPIgNAOQgBgKgHgEg");
	this.shape_1420.setTransform(295.5,558.9);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#2C8F38").s().p("AgSAzIAAhsQALACAAAKQgBAMAFADQABAJALATQAKARAAAKIgZAhQgJgCgDgFg");
	this.shape_1421.setTransform(681.8,570.6);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#399C39").s().p("AAHAmQgUgUgIgKQAGgEABgIQAJgKgBgSIgBgdIAAgHIAJgHQAGgDAHAEIAAATIgBAXQAAAOAIAIIAABSIgOAGQANgVgOgTg");
	this.shape_1422.setTransform(355.5,557.2);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#F8FBF7").s().p("AgyA0QAAgNAJgDQAHgCAOAEIAXADQAMAAgDgGQgDgIgLAEQgcgCgMgQQgJgMgBgXQAGgXAMgLIAcgJQAJAFARgBIAPgBIAMAAQAGATAAAbIgCAuQgCAegwAGQgkgDgPgLgAAAgoQgTAAgBAWQgCAXAWAAQARABAEgWQgCgMgCgFQgFgHgLAAIgBAAg");
	this.shape_1423.setTransform(289.3,578.8);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#339539").s().p("AgaBgQAKgbgCgPIAGgZQAEgPgCgKIAGgSQACgMAAgIQgEgMAJgTQALgVgDgLIAHgBQAJAXAAAjIgBA4IgIApQgDAYALARIgLAAIgPABIgFAAQgNAAgIgDg");
	this.shape_1424.setTransform(291.3,562.7);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#CDEFFB").s().p("AnFArIgFhOIABAAIAFBOgAHJgrIACAGIAAAAg");
	this.shape_1425.setTransform(716.4,57.9);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#288913").s().p("AAAAUQgKgPgIgFIAAglQAOAKAHAXQAKAbAGAIIAAAHQgKgEgJgOg");
	this.shape_1426.setTransform(835,533.9);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#78B14B").s().p("AAFA5QgBgOgKgQQgNgRgGgKQALgKADgRQACgKAAgUIAFAAIABADIAAAGIgBACQAAAGAEADIABACQAHgEACgGIACgMIABAAIAFAAQAIADAAALQgHAEABAQIgCAHQgcAQAUAhIAIgnIAAA/IgGABg");
	this.shape_1427.setTransform(854.4,531.9);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#DCEBCA").s().p("AgDANQgEgEAAgFIAAgCIAAgFIAAgDIAHgHIAIAGIgCALQgCAHgFADIgCgBg");
	this.shape_1428.setTransform(854.8,526.9);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#E1F1E5").s().p("AACAWIgCAAIgHgGQgCgIAEgKQAFgMABgGQACgCADABIADABIgCArg");
	this.shape_1429.setTransform(855.6,523.8);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#7AB96E").s().p("AgBAIQgDgBgCACQgBgLAOgGQABANgHAEIgCgBg");
	this.shape_1430.setTransform(856.4,520.8);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#BED008").s().p("AG8GDQAAgTgLgSIABgCIAAgEIAJgIIANAOIAqBRIAGAJQgBADgFADIgLAFIgIAFQgFADgCAFgAnHlRQgCgJgIgDIgmhlQABgIABgBQAEgGACADIACAFQAGAHAQAbQAMAWANALIAAAAIAUAwQgJgBgFAJQgHAKgCABQgCgCgEgMg");
	this.shape_1431.setTransform(550.8,552.2);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#A3BB06").s().p("AgbAVIABgRQgBgJgHgGIAAgsIAGgCIABACIAAAJIAAAAIABACQACACAJgFQARgLAWAJIALALIgCAAIgKgBQgHABABAJIgPAqQgGAZgBAUQgWgJAAgcg");
	this.shape_1432.setTransform(295.2,529.9);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#B7C805").s().p("AgkA8IgBgCIAAAAIAAgJIAAgCQAGgVAOgaIAXgsIANgQQAPAMAEAVQgNAbgLA3QgUgJgTALQgGAEgDAAIgCgBg");
	this.shape_1433.setTransform(296.2,519.4);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#A3D28D").s().p("AgIAAIAAgWQAMACADALIACARIgLAPQgGgJAAgOg");
	this.shape_1434.setTransform(297.1,512.6);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#80A407").s().p("AgLgDIAJgSIAOAGIgBAlQgUgIgCgRg");
	this.shape_1435.setTransform(910.9,538.6);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#3FA637").s().p("AgOCvIAAgHIgOhTQAQgPAEgYQACgIgBgjQACgPgJgQQAKgSAFgZIAHguIABgmIAKgTQAEAGgBARQgBAMAGAHIACACIgVERQgIAEgEALQgEANgGAEg");
	this.shape_1436.setTransform(911.2,552.6);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#257311").s().p("AgRAUIgBgzQABgCgBgRQAAgMAHgHQAAATANAFQALAFAFAJQACAGAAAOIAAAxQgCAQgEAEQgEAKgOACQgLgUgCgeg");
	this.shape_1437.setTransform(919.1,540.2);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#0A8A28").s().p("AgYANQANgKgBgJQAPgGAWgXQAAAOgLAPIgQAYIgJASQgMgJgBgOg");
	this.shape_1438.setTransform(910.8,534.6);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#61A339").s().p("AALA/IgVhxIAAgBIAAgMQAJAEAGALIAKASIAHAJQAEADAHgHIAJgMIAHgGQAOAEAEAMIAEAVIgPAZQgCACgKAcQgEAPgSAAIgLgBgAhGgRIAAgIQAageAgAFIACAAQAAAbgPAdIAAgfQgNAJgBAUQgBAVgIAHg");
	this.shape_1439.setTransform(844,539.5);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#2ABB36").s().p("AghDSIAAg4IAWkRIABgCQABgPAFgbQAEgeAAgQQAMAKgBAXQgBAXAIAJIACA0QACAeALAUQgOAfANAZIACAMIgBA4IgBAAIgqg8QABAXANAoQAOAlAAATQgFABgHgLQgGgKgKAIIgEgCIgDACQgCAIgEAhQgDAZgGAPg");
	this.shape_1440.setTransform(915.3,551.5);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#73AD3A").s().p("A/cBgIAAgoIAAAAIAAgVQABgJgDgGIgEgHQAGgIAAgNQAAgSABgGQADAAAFAIQAFAFAGgGIAEACIAAACQgCAEgGAJQgEAIAKAHQAAAbAIALQABANAJAsQAFAcAAAUIAAAJQgdgcgQgjgAeoAnQgJgigHgPQgLgbgTgSIAAhnIAdAiIAAABIAfAkQgBAIALAAQALgCABAFQgIAKAFALIAMASIAOAZQgIAFAAAOQABAOgIAFQgOAGAAATQAAAVgIAGgAd6gOQACgMgBgFQAHAGAAAJIgBAQQgHgFAAgJg");
	this.shape_1441.setTransform(221.2,534.4);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#C9D626").s().p("AgDAWQgJgGgDgIIAAgBIAXggIAIAOIgFASQgEALgFAIIgFgEg");
	this.shape_1442.setTransform(300.8,509.8);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#D4E049").s().p("AgIAEIAGgLQADgGAIgEQACAOgMAVg");
	this.shape_1443.setTransform(302.5,506.8);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#76AF3E").s().p("AABAXQgDgVgPgLIgDgSQgCgKgOgDQgNgwAHgqQAGAQABAiQAEAdAZAOIAAAAQADAJAHAGIAHADIAjAqIgEAHQgFAKABAOIABAfQgBAIABAPQAAAOgHAJQAIg7gngxg");
	this.shape_1444.setTransform(299.9,514.3);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#1B810F").s().p("AgSBUIABgRQAJg2gCgaQAIgHAAgKIgCgSIAAgpQAJgMAHAEQAJAFgCAKIAAARIAAAAQgJAKABAQIAAAaIgIBkIgNAMQgIgGAAgJg");
	this.shape_1445.setTransform(705.8,535.3);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#1A8F29").s().p("EgrDAA0IgNgRIgBgCQgHgZgagqIgFgIQAAgNAPAHIANANIABAEQACAOALAZQAKAbABARgEArcgALQgCgFAAgQIAAgDIAIAAIAWAZIgOATQgMgIgCgMg");
	this.shape_1446.setTransform(434.3,538.1);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#EEF9F8").s().p("AASCbQgHgLgWgsQgRghgQgTIAAgBIABgBQAMgsAZg4IAshkQAEACABAGIAAABIACAKIgNC7QgJAAgJgIQgIgGgHgBIgCAAIABABIAeA3IAAApIgJAVg");
	this.shape_1447.setTransform(702.5,517);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#9ED398").s().p("AgBAIIAAgBQgBgFgEgCQABgMALgFQACAWgIANIgBgKg");
	this.shape_1448.setTransform(707,501.5);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#208C11").s().p("ARwGxIgBgIQAIgGAAgMQgCgOABgGQACANALAMIABAAIgBABIACAAQAEAFASANIAAACgAyaGxIAAgCIAAgMIAVAHQAHADAFAEgARuGQIABgBIAAACIgBgBgAC8jJQgLgUgLgGIAAARQgGAHgDACQgFABgBgMQgBgRAAghIAKiRQAGgEAAgHIAAgOQAKAGgDALQgKAsAxgIQALgBACAGQACAEgBAJIAABeIAAAAQABAhgCAMQgCAYgMASQgNgEgKgRg");
	this.shape_1449.setTransform(642.3,556.8);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#EEF9FA").s().p("AgMBpIgNgOIgUgwIAAAAIgDhaQAPgUAPgkIAOgCIA1BnIAAABQgCANgMAUQgQAYgDAJIgPAbQgFAOgGAAIgCgBg");
	this.shape_1450.setTransform(510.7,508.8);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#A8DE9C").s().p("AgEgHQAEgCADAEQAEAEACAEIgHAGQgQgJAKgHg");
	this.shape_1451.setTransform(425.9,527.2);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#419B24").s().p("AgQAfQgBgBACgFIADgIQAMgKABgHQADgJgHgKIgDgDIAGgKIAFAEQAFAFADAIQACAHACANIgVAYQgFAEgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_1452.setTransform(428.2,534.6);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#9BB40F").s().p("AAbA5QgBgNgMgNIgVgmIgSggQgCgEgLACQgLAAABgJIAPgGIBJBIIADAEQAIAJgDAKQgCAIgMAKg");
	this.shape_1453.setTransform(423.4,530.7);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#51BD2E").s().p("AAiBUQABgbgRgbIgVglQgCgPgCgGQgDgIgFgFIgFgFIgVggIAHgGQAEAIALgCQAEAhAhAFQAAAKACADQADAGAKABQgBALAKANQgCAHACAjQAAAXgHAQg");
	this.shape_1454.setTransform(430.3,536);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#B5C606").s().p("AgeAGIAAAAIAAgDIAdgsQACADAFAAIAKgDIAHAAQAHAAABAKIgRBDIgOAGg");
	this.shape_1455.setTransform(418.6,521.4);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#C9D411").s().p("AgFAqIgHAAIgKADQgGAAgCgDIAJgdIABgBIArg/QAEACACAEIACAHIgeBaQAAgKgGAAg");
	this.shape_1456.setTransform(421.6,513);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#D7E259").s().p("AgDALQgCgEgEgCIAGgMQADgHAKgDQACAJgEAJIgJARIgCgHg");
	this.shape_1457.setTransform(424.9,507.3);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#9CB50F").s().p("AAGAmIgCgHIgdgrQgBgMgOgPIAAgLIABgBIBHBGIAIANQABAKgNAKg");
	this.shape_1458.setTransform(905.5,530.7);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#AEC207").s().p("AgiAOIAdgyQAHgCAPgFQAHgBAFAFQADADADAHQAAAEgDASQgDALAFAIIgBACIgOAHQgMgPgJAGQgJAMgFAEIgRAQg");
	this.shape_1459.setTransform(898.1,524.2);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#C5D20A").s().p("AgIA9QgEgEgIAAQgPAGgIABQACgIANgaQALgUAAgOIAFgCQAJgDAFgKIALgVIAKgPQAIgKANgGIguCPQgDgHgDgEg");
	this.shape_1460.setTransform(901.9,514.1);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#75BF6D").s().p("AgFACQgEgKAHgGQAIAGABAIIAAAPg");
	this.shape_1461.setTransform(851.1,508.8);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#6FAB35").s().p("AAdA8QgMgMgPgfQgNgegPgNIgbApQgLgJAGgKQAJgMADgGIACgDQALgRAJAAQAKAAAMAUQACAGAJAIIAPAPQAGgMgBgWQgCgYACgJQAGAJAAAXQgBAVAJAJIgBACQgHANACAGQACAJAUACIACATIgIABQgJgKgFAIQgFAJgEAAIgBgBg");
	this.shape_1462.setTransform(481,529.7);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#4C9515").s().p("AABA7IgHADQgUgCgCgJQgCgHAHgNIABgCQAeg9AVgdIgBAVIgCApQgDAmgPAXQgDgEgEABg");
	this.shape_1463.setTransform(487.6,527);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#259611").s().p("AALBYIAAgRQgBgOgBAAQgQAHgIgKIgIgPIgBgCIgChtIAIgRIAIAAIAlBkIgFAqQgDAWgFAPIgDgCg");
	this.shape_1464.setTransform(501.5,516.1);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#90CE8F").s().p("AgDgRIAAAAQAFAGABgBIABASQgFAEgCAJg");
	this.shape_1465.setTransform(242.4,487.5);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#3F861E").s().p("AgGgmIAVAsIgUAhQgRgoAQglg");
	this.shape_1466.setTransform(820.2,537.1);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#93B205").s().p("AAAAGQgLgTgLgLIgBgNQAMAEALAPQAMAQAKAEIAAAAIACATQgBAKgGAHQgGgHgLgZg");
	this.shape_1467.setTransform(827.1,528.7);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#378312").s().p("AAGBSIgGgJIgKgSQgHgLgIgEIgIgTIAIgHQAKgNARgjQAQgfAOgRIABAPQAAALgDAOQgEAdAAALIgUgLQAAAMASAXQAOAWgEAQIgIAGQgCgLgMgLQgNgKgHgHQAIAhASASQgFAFgEAAIgDgBgAgigNIABgRQAGAGAAAKIgCAQQgFgFAAgKg");
	this.shape_1468.setTransform(845.6,529.1);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#B0DAB0").s().p("AgGAIQgCgJACgFQACgJAJgGQAFAXgEAUg");
	this.shape_1469.setTransform(817.4,517.8);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#60A023").s().p("AgOAEQgBgFAIgqIAWBXQgcgPgBgZg");
	this.shape_1470.setTransform(827,508.4);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#6BA72E").s().p("AgJAIQADgKAQgHQACAJgLAKg");
	this.shape_1471.setTransform(820.5,497.3);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#C5D424").s().p("AgaBBQgMgEgCgBIAfhCIAUghIAYgnQAFAGABAIQAAAHgEAIQgKAWABAGIgXA+IgVAmQAAgLgKgDg");
	this.shape_1472.setTransform(820.6,541.7);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#367C11").s().p("AAFBPQgHgJgJgDQgBgPgNgKQgBgGAKgWQAEgIAAgGQgBgIgFgGQgCghAJgsQALALAJAUQANAZAFAHIgCBZQgGAGAAAJIgBAQIgBAAIgMgNg");
	this.shape_1473.setTransform(826,535.3);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#428912").s().p("AggA3IgBgNIABgRQgBgJgGgGIgBAAQADgNgGgYQgFgbABgMQAKANACABQAIAFAMgFQAMgFAHAGIACACQAMAOABABQACAGALAMQAJAMABAHIAGAOQACAGgIAGQgBgGgBgEQgCgEgHABQgEAAgBAFIABAIIgBANQgIAHgOAAIgWgBQgFADgCAGIgBAKQgGgFAAgHg");
	this.shape_1474.setTransform(810.9,523.3);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#3E8512").s().p("AgaApQABgmgBgDIAxhSIAEAyIAAAzIgBAMIgsA0QgIgQAAgag");
	this.shape_1475.setTransform(672.8,534.5);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#519614").s().p("AgdB1QAGgOgEgGQAEhhAqh6IAAgBIAFgNQACCMAGBFIg6BAQgIgHAFgNg");
	this.shape_1476.setTransform(672,516.9);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#93B105").s().p("AgcAgQABgMgCgHIA7g+IgCATIgxBQQgHgGAAgMg");
	this.shape_1477.setTransform(672.3,529.3);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#3B8711").s().p("AAbBHQgCgMgFgFIgBAWQgUgLgCgOQABgJgFgXQgEgRABgKIABgEQAvAEAEgmQAAgMAIgEIAAAZIgPB3IgCABQgEgEgCgIgAgxggQAGgWASgcIAHAIQAIAMAAASIgOAAQgFgBgGAJIgEAEIgFABIgFgBg");
	this.shape_1478.setTransform(687.7,531.3);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#499011").s().p("AgZA/QAAgEgCgMQgDgKAEgGQAAgSgIgMIgHgHQAJgbAVgeQAVAVAKAAQAJAAAMgVQACApgJAjQgIAEAAAMQgEAjgmAAIgJgBg");
	this.shape_1479.setTransform(689.3,523.7);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#85B95C").s().p("AgJgMQALAFAJAOIgIAGQgNgMABgNg");
	this.shape_1480.setTransform(678.9,496.9);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#589D3A").s().p("ArvA0QgEglgCgMQAMAKACABQAJADAJgJQAGgGAIADIAOAFIAAAAQAEADAFAKIACAEQAEAGAHACIAAAMQgHABgEADQgLAEAAANQAAAJgPgEQgKAAgFAHIgHANIgHAHQgHgSgDgegALRAZQACgRgHgaQgHgXgCgNIAAgHIADAEIACAFIADADQADAAAFgGIAjgsIAAAMIgFAmQgEAeACATQABAGgFAGIgKALIgBAAIgBAFIgJADQgFgCAAgEg");
	this.shape_1481.setTransform(813.6,545.6);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#ACCFAF").s().p("AgFAIIAAgBIAAglIALATIAAAqg");
	this.shape_1482.setTransform(875.9,543.8);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#48A839").s().p("AgWBAQgCgJgMgBIAKgKQAGgGgBgHQgCgTADgdIAFgmIABgMIABgLIAGAAIAcBOQACAKAFAAQADAAAFgHIABABQAAAjgOAcQgMgGgMAGQgNAJgHADQABgKgCgFg");
	this.shape_1483.setTransform(890.9,542.4);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#1A7F11").s().p("AgiBOQAFgKgDgEIAAgrIAKhwQAEAFAGAEQAHADALACQARADAJAFIABABIADADQgBAEgCAOIgEAnQgCAigMAVQgMAIgLAOQgQASgGAFQgIgFAEgJg");
	this.shape_1484.setTransform(879.8,540.5);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#47A73C").s().p("AABBTQgDgEgIACQgIACgDAAQgHgEAAgJQgBgDAFgJQADgIgHgFQAMgVADgjIAEgnQABgOACgEIAAgFIAAgjQAEAGAAAJQACAPABASIAAAvIABAHQACAMAHAXQAHAbgCAQQgBAFAGABIAJgCQgDAVgLAMQgCgSgNgIgAAHgEIgDgGIAFAJIgCgDg");
	this.shape_1485.setTransform(884.1,540.8);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#4FAE40").s().p("AgDAAIACgTIAAABIABABQAGAOgCAWQgHgHAAgMg");
	this.shape_1486.setTransform(881.5,512.8);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#90C330").s().p("AgFAGIgCgHIACgHQACgDAFABIACABQADACABADIAAAIIgCAHg");
	this.shape_1487.setTransform(872.2,517.4);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#B0C406").s().p("AgeAiIAAgKIABgBIAjg/IAGAFQAFACADgDQADgDAGgIIACAIIgKA9QgLAXgKADIgDAAQgKAAgRgOg");
	this.shape_1488.setTransform(868.5,522);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#468C13").s().p("AgGA2IgHhLIAAgUQAAgMgIgGQgDgOAPAAQAGABAEgBQAGgCABgEIAJAYIAGAoQgHAHAAALIAAATIAAAdQABASgJALQgLgJgDgRg");
	this.shape_1489.setTransform(339.7,545.6);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#439819").s().p("AABAMQABgOgIgKIABgNQAAgJAHgDQAGAEABAMQABAMAFAEQgCADgCAEQgCAFAAAKQgBAPgHAGQgBgDABgXgAgOAMQgBgOAJgKIABAZQAAAQgIAJIgBgag");
	this.shape_1490.setTransform(333.7,526.8);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#519615").s().p("AgGAnQACgNgCgHQAHAHAAAMIAAATQgHgHAAgLgAgQgIQgEgXgCgFIAWgUQAPAaAIAeQgBAEgGABQgFABgGAAQgOAAADANQgGgKgEgRg");
	this.shape_1491.setTransform(338.2,537.6);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#2D9734").s().p("AgNAGIAVgYQAHACgBAGIAAAKIgVATg");
	this.shape_1492.setTransform(336.7,532);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#5EA01C").s().p("AgSAWQACgMgBgHQAHgFABgQQAAgJACgGQABgFADgCQAIAGAEAMIAKAUIgWAYIgBgFQgDgEgCAEQgCAEAAAIIAAAMQgHgHAAgMg");
	this.shape_1493.setTransform(335.6,530.4);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#90AE06").s().p("AAAAtQgCgbgcgeQgHgKAAgcQAIAAAIAIIAEAFQAGAGAEABQAFAOAIAEIAgAxQgDADgNACQgMACgDAHg");
	this.shape_1494.setTransform(351.1,533.8);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#589D16").s().p("AARB4IgEgFQgIgHgHgBQgEgMgEguQgEgfgHgSIgDgGIgBg8QgBgWADgRIABgEQABgKADgHQAqCLADByQgEgBgGgGg");
	this.shape_1495.setTransform(347.6,518);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#4BAA39").s().p("AgeB9IgGgoQALgaAEgrQAFg6ACgLQADgMAFgsQAGgFAAgKQAAgMAAgFIADAGQAIAUADAeQAFAuADAMQAAAbAHALIAIAfIgBAhQgHAIAAAOIABAXIgCAQQgDAIgLgDIgaABIgCAAQgPAAgBgRg");
	this.shape_1496.setTransform(345.1,531.4);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#69A92F").s().p("AgGhZQANALAAARQgDAIgCAJIAAAEQgCARAAAWIABA7QgBAFABAMQgBAKgGAFg");
	this.shape_1497.setTransform(345,511.4);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#9CC77F").s().p("AgMAIQALgRAOgGQgCARgPAOg");
	this.shape_1498.setTransform(340.4,496.8);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#569C12").s().p("AAeCCIgOgkIAAgBIAMgJQAHgGAIAEQAHAGAAALIgBARIgBACIACAZQAAAQgIAJQgCgPgKgXgAAuBAQgCgGAGgFQABgBAAAAQABgBAAABQABAAAAAAQABABAAABIACAGIAAAFIAAABIAAAGIgKgIgAAPAeQADgFAIABQADAAAGAFIgXANQAAgKADgEgAASgBQgPgHgIgBIAzAAQgKAJgLAAIgHgBgAgDgqIgOgNQgOgQgKATIgNgBIgBhyIAdAhQAQATAHARIgHAGQgFAEgGgEIgGgHQgGgDgEAHQgEAGAAAGQACAGAHADQANAEAOALIAXAVIgHAAQgJAAgFgEg");
	this.shape_1499.setTransform(316.9,504.9);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#279812").s().p("AgOCZQgZghABgbIAVjMIACgiQAKgsgBgXIABAAIABAAIAEABIACAFQADAIACABQgBADABADIACByIAAABIgBASQAAALAGAIIAIB+QgEADAAAGQgLAfAPAeQAMADAEASQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgGADgCAKQgCAMgEAGQgGgQgfgsg");
	this.shape_1500.setTransform(310.5,507.3);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#239112").s().p("AguGrIgCgCQAGgFABgNQABgOAIgGQAOgMAVAAQAMAAAZAGQABAGAAAdIABALgAANkKQgBgMgOAMIgfggQgBgLgHgDIABgrQAIgEgBgPQgFgHABgJIAFgRQASABARgLQAagPAEALQACAGgBASIgBAfQAAATAKAKIAFAIIAAABIAAAKIgBAEIgcA8IgBAAQgFAAAAgMg");
	this.shape_1501.setTransform(860.5,557.4);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#559C12").s().p("ALtIOIgBgPQgCgRAEgoQAEglgFgUIgBgGIgCgxIABgDIARAIIAcByIgEBBgAqAiVIAAAAQAOgpAXgfQgOADgLAOQgNAPgHACQgFgHgBgLIgBgSIgWirQgGAGgCALQgCAKgGADIgCgHQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBABAAAAQgHAFADAGIAKAJIAAAXQAAAMgGAJIgBgBIABgQQAAgMgIgFQgHgFgHAGIgNAKIgyhzQADgHgEgJQgGgMAAgEQAJgSAPAPIANANQAJAGAOgCIgYgUQgOgMgNgEQgIgCgBgHQgBgGAFgGQAEgGAFADIAHAGQAGAEAEgEIAIgGIByCgQA4hKA4g8IAIAHQg5BwgQAdQgZAsAaAkQADAEAJAWQgIAEAAAIIgBAOQgJAJABAQIABAaQgUATgWAAIgDgBgArfmLQgCAEAAAKIAWgNQgGgFgCAAIgCAAQgHAAgDAEgArbmqQAPADANgLIg0AAQAIABAQAHg");
	this.shape_1502.setTransform(391.9,547.5);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#80B355").s().p("AgFAIQgCgCABgDIAAgBIANgLIAAAIQAAAJgIACIgCAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_1503.setTransform(194.8,539.9);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#419D16").s().p("AgDAAQAAgHAGgHIABARIgCAMQgEgKgBgFg");
	this.shape_1504.setTransform(193,535.9);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#449E16").s().p("AgEAdIAAg5QAJAFAAAKIgBAQIgEAag");
	this.shape_1505.setTransform(192.3,528.9);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#509613").s().p("EgwlAEXQgTgIgCgQQAEgRgGgoQgEglAGgUIAAAAIABAAIAAABQgBACACACQAAABAAABQABABAAAAQABAAABAAQAAAAABAAQAJgDAAgKIAAgIQANgsAQgbIAQAOQgfBcgHB0IgBAAgEAvkgBNIgCgCQgIgGgMAFQgMAFgIgFQgCgBgKgNIgIg5IAXgHQALAHAFgFIAHgMIAug5QAaggAYgWIALACIhECEQgOAagDAOQgEAXALAUQgBgBgMgOg");
	this.shape_1506.setTransform(507.1,526.1);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#2D962C").s().p("AgHAAIACgMIANAHIgBASg");
	this.shape_1507.setTransform(199.3,531.9);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#70AB38").s().p("AgbCDIAAgBQAHh1AehbIABgTIAJgPQAIALgGAXQgHAVAKALIAAAAIABAGIACCFQgdALgSAnIgBABgAAHh/QAEgKAHgGQACAYgTAJIAGgRg");
	this.shape_1508.setTransform(199,541.1);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#339015").s().p("AATAzQgEgIgKABQgGABAAAHQABALgBABQgKgLAHgVQAFgXgHgLIgJAPIgOgGIAEgHQATgIgCgYIAOgfIAFAHQALAPABAYQACAlADAJQADAHgBALIgBARQgEgBgGgMg");
	this.shape_1509.setTransform(201.7,530);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#559C11").s().p("AwNIWIgHheIAGgEQAIgFAAgKQAbgbADgRIAQgHQAIAJAFAQIAHAbQgNAPgLAZIgSAqIgSAsQgMgCgBgMgAPXkoQAAgPgCgHIgFgxQgDgegMgSIgDgDQAWgoApg5IAYggIAACRIgEAKQgUAtgJAfQgCADgBADIgRAhIgDAAQgEgIgCgLg");
	this.shape_1510.setTransform(116.2,548.3);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#589D15").s().p("AAdiKIAAB1IAABZQgDgFgCgGQgDgMgBgPQAAgXgMgLIgHBCQgDAlgHAaIgTANQAGiHAziNg");
	this.shape_1511.setTransform(189.1,516.8);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#1F8911").s().p("AN/GiIAEgDIAFADgAt5jGQgLgQgDgKIAIgtIAAAAQAOgxABg7IAAgoQAIAIgCAZQgBATATAFQAkAKALgTQABgKADgEIAKB/IAAAAIghAzIgPANIgMglQgCALgCAUQgEAQgJAIQgDgHgOgRgAnkjPQgDAAgKgGIgHgLIgngzIAAAAIABgGQAIgMAAgUQgCgdABgDIAKgGQAHgDAHADQAHADAOAJIAQB5QgCALgHAAIgBAAg");
	this.shape_1512.setTransform(264.2,558.2);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#79B14A").s().p("AgQgRIAGgFIAbAfQgEACgCAEIgCAHg");
	this.shape_1513.setTransform(196.8,498);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#559C17").s().p("AAEApIghgyIAAgBIAIgNIABAAIATgZIAEAGQAMALADAHQALANABANQgKAIgJgLQgIgMgJAEIAMAXQAIANAJAJQgFAKgBACIgDABQgEAAgGgIg");
	this.shape_1514.setTransform(4.1,532.9);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#599F1D").s().p("AgGAbIgGgHQgCgFAAgFQANggAPgSIABALQAAANgCAQQgGAeAAALIgNgOg");
	this.shape_1515.setTransform(6.4,525.2);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#4DBA28").s().p("AAQAyQgCgbgVgLQACgNgIgGQgCgOgKgNQgEgGgLgMIgFgFIACgKQABgHAGgBQABAEACAFIAGAIIAOANQAKARATAKQACASATAAQgFAHAFAGQADAFAGAHIAAAbQABAPgJAKg");
	this.shape_1516.setTransform(8.5,533.9);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#529A11").s().p("AgKg9IAWAhIgBBNIgBAMIgHABQgShCAFg5g");
	this.shape_1517.setTransform(47.3,527.7);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#5DA019").s().p("AgkgtIAGgIIBDBIIgWAjg");
	this.shape_1518.setTransform(31.8,503.6);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#249013").s().p("AgdBcQAAgLAFgeQADgSAAgMIgBgMIAUh+IAGgBIAEAsIAWCBIAAAYQgHASgXAWQgTgKgKgRg");
	this.shape_1519.setTransform(10.1,520.1);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#5DA01A").s().p("AgpAzIgKgSIBVhiIASAZIgGAHQgIgIgEABQgFABgFAJIg0BgQgHgFgGgKg");
	this.shape_1520.setTransform(23.5,502.3);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#218D12").s().p("AAZCAQgJgEgQgDQgMgCgHgEQgGgEgEgFIAZjpQAIAIACAJQACAFAAAIIgCAUQAAALAIAIQAOBkACAyIgBAjIgDABIgBAAg");
	this.shape_1521.setTransform(880.5,520.7);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#72AF41").s().p("AgYApQgCgDgBgKIAdgjQASgXAGgRQAGAOgJAYQgIAYADANIgMgNIgRAhQgKgBgDgGg");
	this.shape_1522.setTransform(434.8,529);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#258A15").s().p("AAEAkIAAgBIgNgTQgKgOABgJIASgiIALANIABAAQACADgCADQAAAFAGAbQAEATgKANg");
	this.shape_1523.setTransform(435.5,534.7);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#97D285").s().p("AgQAbIAHgOQADgIgBgGQACgIAFgIIAPgMQAFAKgEANIgIAUQgEABgFAKQgDAFgFAAQgDAAgEgDg");
	this.shape_1524.setTransform(460.7,547);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#A5D5A5").s().p("AgGACQAEgPgCgIIAMANIAAAdQgPgFABgOg");
	this.shape_1525.setTransform(454.5,529);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#2D9124").s().p("AgKAfQAGgYgBgGIAAgeIADgeIAKAQIABACIADAwIgBAOQgHAHgEAIQgGAMACAMQgKgLAEgSg");
	this.shape_1526.setTransform(455.8,531);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#3BA45D").s().p("AgDAHQgDgEgIAAIABgOQAHALAFgFIAIgKIAIAHIgPAYQAAgGgDgDg");
	this.shape_1527.setTransform(458.5,532.9);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#118D33").s().p("AgPAHQgBgLAHgMQAEgIAGgHQAHABAEAEQADADABAFIgJAlQgJgFgEAIQgFAJgCABg");
	this.shape_1528.setTransform(456.9,536.3);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#83C79F").s().p("AgIADQAIgOAGAEQAGAEgEAEIgIAIg");
	this.shape_1529.setTransform(460.1,531);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#A0D0A1").s().p("AAEAPIgJgPQgDgOAHgCQAGgCACAGIAAAJQABADgCARIgCgCg");
	this.shape_1530.setTransform(456.2,525.1);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#95B402").s().p("AAMAaIgdgnIgBgMIAJABIAIAGQAKATAKAFIgGAUg");
	this.shape_1531.setTransform(468.4,527.5);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#5FB44F").s().p("AABAfIgBgLIAAgGIAAgLIAAgDIAAgBQgBgGgFgEQgEgRAJgLQAKAggBAvQgFgDgCgGg");
	this.shape_1532.setTransform(472.6,513.4);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#31A01D").s().p("AACAMIgFgKIAAgRQAFAEABAHIABACIAAACIAAAKIAAAGIgCgEg");
	this.shape_1533.setTransform(472.3,513.7);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#7DB44E").s().p("AgFAIQgBgEgFgBIANgSIAKAIIgPAXIgCgIg");
	this.shape_1534.setTransform(461.9,498.5);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#A2CB89").s().p("AgJAFIARgSQAEAKgEAGIgIAKg");
	this.shape_1535.setTransform(463.1,496.4);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#77B046").s().p("AgLAEIAOgTIAJAIQgDAEgEAIQgEAHgGAEQAAgKgGgCg");
	this.shape_1536.setTransform(438.6,521.4);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#A4CA88").s().p("AgIACIAGgIQAEgEAFAEQAHAEgOALg");
	this.shape_1537.setTransform(439.8,519.6);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#61B757").s().p("AgIAMIACgeIALgGIADAGIgBArg");
	this.shape_1538.setTransform(433,489.4);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#228C12").s().p("AgoCkQALg9ADhgIAQhrQALgOgFgaIAEgbQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIABADIgBAUQAAALAIAHQADALAEAkQADAdAGARQgEA4ASBDIgUAXQgMAPgLAGIgBgLQgBgIgKgDQgEAIAAAWQAAAUgHAKQgMgBgDgGg");
	this.shape_1539.setTransform(43.5,525);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#C2D007").s().p("Ag0AhQgLgngNgVQgCgfgPgTQABgMAGgCIAKASQAGAJAHAFIA/BuIA/hsIAWgjQAIABABAEIAAAJQgUAdADAWQgKALgGAVQgGAZgGAIIgNgWIgLA7IAAAAQgfgRgNAEQgMADgCAaIgBACQgIgSgKgqg");
	this.shape_1540.setTransform(27,514.9);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#599C1A").s().p("AgKAgQABgOgEgKQgCgEgDgEQAOglAWgbIABBGIAAABIgHAfIgCAAIgHgFQgEgDgBAKQgBAEAAAVQgJgKACgXg");
	this.shape_1541.setTransform(441.5,528.7);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#4B9013").s().p("AgBA0QgNgSgHgIQAKgNgEgSQgGgcAAgFQANgDAFgNQAGgRAFgEQADADACAFQAEAJgCAPQgCAWAJAKIAABXQgMgIgLgQg");
	this.shape_1542.setTransform(438.9,536.3);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#46A63B").s().p("AAMB5IAAgCIAAhaIAAACQAOA4gKA6QgBAJgDAJgAgaBIIgDgCIgEgCQAIgEAAgMQAAgNAHgEQgBAHACANQAAAMgIAHIgBgCgAgSAHQgBgNAJgIQgBAHACAOQAAAOgJAIIAAgWgAACADQgDgRgJgHIgHAAIAIgVQAEgNgFgKIAOhXIAMAVIAJgfQACAMAAALQgBAVgHAVQgBApAQA2QAAAJgIAEQgQgFABAJIABANIgBABQgGgHgDgTg");
	this.shape_1543.setTransform(463.3,550.6);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#20801A").s().p("AgHAhQACgSgIgIIAAgyQACgBAFgJQAEgHAJAEQAGAYABA7QgCADgCAOQgBAKgJAEQgHgHAAgSg");
	this.shape_1544.setTransform(456.9,543.9);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#4E9314").s().p("AgOAfQAAgLgCgLIAIhRIAeAnIABAAIAAABIAAAYIAAARIgIAUQgIAFgJATQgJAQgLAFQAIgWAAgVg");
	this.shape_1545.setTransform(467.5,533.5);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#50980B").s().p("AgLBgQAAhnABgzIgBgXQAAgMAIgIQAGAJABAVQABAVAHAKIgCAeIgNgSIAACCg");
	this.shape_1546.setTransform(468.6,515.4);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#579C14").s().p("ABaB5IAAiCIAOARIACgdIAIAbIABADQAGAagFApQgGA2ACARQgKgGgMgUgABKByIAAjgQAMAGACAJQACAFAAAIQgIAJAAAMIACAWQgCAzAABngAhsA1QgFgggDgQIgCgFQAJAIAFgFIAGgJQBEhdAtgvQAFACABAEIACAIIhTCkQgXApgGAbIgHAIQgIgTgEgkg");
	this.shape_1547.setTransform(459.1,513.5);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#269314").s().p("AgdAjQAKgXAHgtQAHgxAIgXIAGA1IABAGQAEAQAEAfQAFAkAHATIAAAHIgBAAIgFAAIgXAKQgJAFgIgLIAAgEIgBADIgCgDQgBAEAAATQAAAMgHAIIgBAAg");
	this.shape_1548.setTransform(446.4,518.7);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#4CAB3B").s().p("AAbCRQgLgIgPAAIgaABIAAglQACgagGg4QgHg1AEgcIAGAAIABABIgCAYQABAQAIANIAGglQAEgTgKgNQAGgbAWgpQgCATAFAgQAGAlAAANQACAHgEAQQAAAOAPAGQABAFgGAYQgEASAKALIABAZIAAAzQgBABAAAJQAAAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAIgEgBg");
	this.shape_1549.setTransform(452,531.3);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#337B13").s().p("AAGAxQgEgJgLgFQgNgFAAgTIAAgHIAshIQADA2gRBTQAAgOgCgGg");
	this.shape_1550.setTransform(920.2,532.1);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#0A8C31").s().p("AgWgFQAEgCAHgKIAEgGQAGgKAGgEIAEgBIAGgFIAHAHIgJAVQgHAMACAJQgLAEgEAOQgIAQgGAEg");
	this.shape_1551.setTransform(937.6,537);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#44A866").s().p("AgKAHQAEgJAPgLIACAJIgOASg");
	this.shape_1552.setTransform(940.2,531.8);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#339328").s().p("AgLAdQAFgWgDgJIAEgeQACgMAEgKIABgDIACgEIAMBaIgDABQgIAEgFAKIgDAGQgHAKgEACQgDgLAGgWg");
	this.shape_1553.setTransform(936.8,530.2);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#98C376").s().p("AgFACQgDgJgDgFQARAHAFALIgIAHQgEgEgEgHg");
	this.shape_1554.setTransform(939.4,526.2);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#66A53E").s().p("AAUA5QgFgIgPgiQgMgZgMgOIgCgJIgOgdIAIgGIA6A+QABAGAFAHIAJAMQgIAHABASQABASgHAHg");
	this.shape_1555.setTransform(943.8,533.8);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#95B105").s().p("AgfgfIgBgOQAQAKARAWQAWAXAKAIIgBACIgEASIgIAHg");
	this.shape_1556.setTransform(950.5,529.4);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#478D14").s().p("AgGBDQgFgPgGgGIAAgCIgBg5QgBgUADgQIAAgDQACgMADgJIASBIQAMAqABAeQgIADgGAAQgIAAgEgHg");
	this.shape_1557.setTransform(949.9,510.8);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#A0C886").s().p("AgGhiQAOAGgBAOQgDAJgCAMIAAADQgCARAAATIABA5IAAACQgBAIAAAWQABARgHALg");
	this.shape_1558.setTransform(948,511.3);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#649E40").s().p("AgJAHQADgLAQgIQACAOgNALg");
	this.shape_1559.setTransform(919.8,520.5);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#86C980").s().p("AADgNQAGAEgCALIgLAMIgBAAQgEgOAMgNg");
	this.shape_1560.setTransform(927,508.3);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#1F8612").s().p("AgJBGQAAglgDgLQgFgWgCgiIgCg5QgBgNAJgGQAGgFAPgCQAEAGACALIACAPIAHCKIAAAZIgXAoQgIgRgBgfg");
	this.shape_1561.setTransform(928.5,534.2);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#539A39").s().p("AgRBRIAAgUQABgLADgJQACgGgFAAIgJACIAAgZQABAAAHAJQADAHAFgOQAGgPALgxQAHgYAKgKQADALgGAWQgGAVAEALIABAxIgBAtQgCAAgQAIQgEACgEAAQgGAAgFgEg");
	this.shape_1562.setTransform(933.3,538.3);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#337912").s().p("AABA5IgHgGIgIgNIgKgMQgEgIgBgGIAJhFIAyBNIgTAhQgDAFgDAAIgEgBg");
	this.shape_1563.setTransform(949.5,531.9);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#6CA93A").s().p("Eg7AACzQABgDgEgNQgCgKAEgGIAOgmIAEgNQAJgGAFgKIAGgUQADgFAAgLQgBgLAFgFIABgBQAKgHAHgRQAJgUAEgFQAKAKgGARQgGAVABAHQgHAFAAALQAAANgCADQgCADgBALQgCAIgPgDQgMgDAJAMQARATgDAdQgBAQgGAhQAAARgGAkgEA6JgCoIACgBIADgBQAFgCADgGQADgDADgIIApg1IAABVIgWACQghADgJACg");
	this.shape_1564.setTransform(581.6,548.3);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#418518").s().p("AAgBPQgKgIgWgZQgRgVgQgKIACgjQAHgLgBgSQgBgVADgJQAFAHAFAPQAHALATgHQANAvAIBVIAAABg");
	this.shape_1565.setTransform(950.6,523.3);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#529716").s().p("AgVA8QgDgEgEgDQgFgCgIgCIgLgCQAug/A6g3QgrBigcAtQAAgHgCgFg");
	this.shape_1566.setTransform(938.1,504.3);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#458B13").s().p("AgWBEQgCgMgEgFIgJhOIABgCIABgBQAKgIALgSQAMgUAIgGIAKACQAJACAFADQAEACACAEQADAFgBAHIgcBGQgQAsgOAaIgCgPg");
	this.shape_1567.setTransform(932.2,517.3);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#299616").s().p("AgRAvQAAgegBgGIAAgBIAKhPIABAAIAKgNIAHA5IAAAEIAKBOQgQACgFAFQgJAFABAOQgKgOACgWg");
	this.shape_1568.setTransform(927.3,516.7);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#3EA03A").s().p("AgOADQgBgzgGgbIAAgBQAJAMAIgFIALgOIAPB3IAAABIgcAvQgGgbgCg2g");
	this.shape_1569.setTransform(2.6,552.4);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#CADA75").s().p("AgJgJQAJgBADAFIAHAJIgIAHQgMgKABgKg");
	this.shape_1570.setTransform(251.6,525.8);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#40A037").s().p("AgfB0QgFgYAKgSQANgeAHguIAJhNQABgJABgBQABgGAFgCQAAASACAIQAEAPAIAKQgGAWAEAcIAKAzQgDAHACAMQADANgBAFIAAACQgTAeggAgIgOgogAgKhyQABgWAFgRIABgCIAABMIgFAEIgDADQAAghABgJg");
	this.shape_1571.setTransform(274.8,544.9);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#B5E8C2").s().p("AgCgHQAHgBACAFIAAAKIgMABQgDgOAGgBg");
	this.shape_1572.setTransform(268.4,536.3);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#10B61E").s().p("AgEAAQAAgOAHgKIACASQgCADAAAMQAAALgFAFIgCgZg");
	this.shape_1573.setTransform(268.8,541.4);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#B5C735").s().p("AgLADIAOgSIAJAHIgPAVIgBACg");
	this.shape_1574.setTransform(284,527.2);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#D5E49D").s().p("AgIADQAGgPAHAEQAGAEgDAFIgIAIg");
	this.shape_1575.setTransform(285.1,525.3);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#60B655").s().p("AgEgCIACAWQAAANgIAJQgCgdAIgPgAAJABIgLgPQgDgRAIgKQALAVgDAYQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_1576.setTransform(259,511.1);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#7AA81F").s().p("AgBAhQgGgWgCgYQgCgPgBgQQAPAaAJArQgFACAAAIQACAIgGACIgEgMg");
	this.shape_1577.setTransform(249.4,538.2);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#2B8E1E").s().p("AAAAXQgIgMgDABIAAAAQABgQACgFQADgHAFgEQAEgDAFgCIABAAIACAlQgCANgEABIgBAAQgCAAgDgDg");
	this.shape_1578.setTransform(261.4,533.9);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#A2B918").s().p("AgdgiIAIgGQADACAMAPQAJALAKAEIABAAQAFAQAMAIQgCAMgNAKIgGADg");
	this.shape_1579.setTransform(254.9,530.3);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#1C8118").s().p("AgTAdQgEgdAHgWIAeg4QAKAxgDAgIgngIIAWAqQAHAXgTATIgLgyg");
	this.shape_1580.setTransform(279.1,542.5);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#28BB37").s().p("EgtsAB6IgehEQAGgRACgYIAAgpIAGhJIAAgBIAJgJQAHgGAAgKQAAgOABgDIAHAUIAAABQADAQAEAfQADAeAMASQgLATAGAWIANApQgIAMAFAWQAHAYgEAKQABAHgCAQQAAAPAIAJIAFAAIAAABIgBAAIgEgBIABACIgOAFgEAtnABpQgNgCgCgIIgCgRIAAgmQgCgYAJgsIABggQAJgNgBgWIAAgkQAHgGAAgQQgBgQAJgGIAHABIABADQABATgCAlQAAAhAOAWQgKAWAEAgIAHA1IAAAfIgMAUQgGAHgLAAIgHAAg");
	this.shape_1581.setTransform(561.7,555.2);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#7AD587").s().p("AgKAnIAAgJQAIgNAAgUIAAgiIANgCIAAAUQgJAJABAPIABAZIgIAJIAAABg");
	this.shape_1582.setTransform(268.1,541);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#749C0D").s().p("AgSAdQgEgegCgQIgBgCQASgOASgkIACgCIAGgFIAHAAIgKBNQgIAugLAeQgMgSgDgeg");
	this.shape_1583.setTransform(272.6,544.6);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#228E13").s().p("AgbCSIAAhNQADhCAYiUQAVBkAGBiIAAABIAAABIAAAKQgBAOgKAPIgcAiQgFACgBAFQgBACAAAJg");
	this.shape_1584.setTransform(277.2,522.4);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#90AE08").s().p("AgiAnQgCgJAAgRIAdghQAJgPAAgOIAAgKIAAgCQAJAUAHgIQAFgEAIgKIAHAMIgeA6IgeA4QgIgKgEgOg");
	this.shape_1585.setTransform(279.7,533.9);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#06882C").s().p("AAXA0QgEgSgGgIIgBgMQgBgHgMAKIgOAQQgIAIgGAFIgCgBQAAgFgDgNQgCgMAEgHQAUgSgHgYIgXgqIAoAJQAJAWAKgKQAGgEALgMIAAABQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAABIgCARIgLAIQgEAFAJAHIAJAMQAHAOAAAXQgCAfACAIIgKATQgIgJgCgRg");
	this.shape_1586.setTransform(281.5,549.6);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#4EAC39").s().p("AglBTIAAgIIAJgEQgBgOAFgjQAGgdgDgSIAFgjQACgUgGgOQAIgIgBgSQAAgUAGgLQAMArAIBMIAEgoQAGASAAAcIAAAsQABAQACAPQACAZAGAWIAEAMIgQAZQgLAPgPAEg");
	this.shape_1587.setTransform(245.8,531.9);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#249014").s().p("AgbBWIAAAAIARiMQAIgJAAgMIgBgYIABgLIALAQQAAAAAAABQABAAAAABQAAAAAAAAQABAAAAABIALBOQAGAsAAAhIgBAEQgFAdggAPQgLgJgGgRg");
	this.shape_1588.setTransform(259,520.8);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#2ABB37").s().p("AgKCYIgIgFQACgVgCgEQgCgJgEAEQgEAGgCAAIgDgBIABgLQAOg4AAg1QAKgbgCgRQAKgYgCgmQAHgFAAgVQAAgTAOgGIAAAZIAPDXIgQAlQgLAVgJANg");
	this.shape_1589.setTransform(419.7,552.7);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#239211").s().p("AgjAoIgBgBQAIgQgBgZQgBgbAAgKIAFACIAEAPQACANAPgDQAUgEAIAJQAFAGAIAOIABAUIAAAHg");
	this.shape_1590.setTransform(790.4,596);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#4DAD3C").s().p("AfgCBQgIgPgZAKQgFACgDgFIgBgKIAAgOQAAgIgGgGIgCgMQAJgJgBgQIgBgZIAIhGIAKg+IAMAFIAZDdIAAAmQgIgQgEgIgA+4BhIgdgsIgHgMQgFgHgKgBIAAgYIAAgBIAGgSQgCgRAHg2QAEgpgGgaIgBgDIAOgBIAFAKIADAEIABALQABAGAGADIAKBEIAKgzQAEALgDAfIAAAEQgBAVAHAOIACADQgDAGgKALQgGAKALAKQgHAIACAKQAAAEAGAPIAAAOQgHAEgBAIIgBAOg");
	this.shape_1591.setTransform(672.5,529.3);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#4DAD3B").s().p("EhB3ABqIgIgPQgFgIgJgDIABhOQAHgRADgeIAEgyIACgXQACgOAGgJQAHAJABAYQACAVAJAIIABAtIAAAAQABANgCAZQgBAXAJAOIAAAOQABAIAGAEQgIAMABAbIAAArgEBBcABfQgEgGgCADQgCAFgBACIgGAAQADhVATiTQAAgCADgDIAEgEQAIAGACgGIACgGIAAgBIABAAIACAAQACAOgEARQgJAcAGAlQADAVAJAqIABAfIABAgQgFAMAHAPQAKAUAAAFQgMAFgCAOIgkgxg");
	this.shape_1592.setTransform(472.2,524.6);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#5B9814").s().p("AgMAJQAMgEAAgOQABgQAIgFQADAGABAHQABAJgDAJIgIAaIgCAEg");
	this.shape_1593.setTransform(407.3,545.2);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#44A33A").s().p("AvvA+QAJgDADgHQACgFAAgLQAAgcAHgkIAMhDIAPBOIAABnIgMgEQgNgEgEgMQgDAEgBAMIgBAEQgCAGgFAEgAORAlIgGgNIACgFIAIgZQADgJgBgJQgBgHgDgGIAGgaIAHAKQACAFgBALQAAAIAKACQAJACAHgHIAMgMQAHALAAAfQAAAaAOANIgIAaQgXALgPAAQgcAAgBglgAPeAHIAJgHQAGgCACACQAGAHgRAMg");
	this.shape_1594.setTransform(316.7,545.9);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#A9BF1E").s().p("AAMAlQgIgIgPggQgNgbgSgLQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAIAHgKQANALAZAeQAWAYATALIACACIgdAhg");
	this.shape_1595.setTransform(377.3,530.2);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#06882B").s().p("AAKBJIgEgIQACgNgBgFQgCgKgKgDIAAgBQAAgMgNgUQgLgTgBgMQACgRAGgNQAEgJAFgIQAAAeAXAbIAOAVIAHAOQgJAJABAXQACAWgJAJg");
	this.shape_1596.setTransform(405,548.2);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#C9D724").s().p("AgJBCQACgLgJgEQgCgCgQgEQAAgLALgSQAMgSABgIIAkg4IACABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABAAIACADIACAHQgJATABAVQgGAIgDAIQgGANgCAQQgJAEgBAOQgCANgHAEg");
	this.shape_1597.setTransform(400.9,541.9);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#6CBC23").s().p("AgHAPIAAgJIAAgOQgBgKAIgFQADgDAFgCIgCAZQgGADAAANQAAALgGAFg");
	this.shape_1598.setTransform(388.6,531);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#A7BC0B").s().p("AgqArQASg1AVghIAGAEQAHAEADABQAKADAKgGIAEgCQAHgDgBAFQgCAJACAAQABARgJAMQgFABgEADQgIAGABAJIAAAQIAAAIIgdgMIACgGQAAgBAAgBQAAgBAAAAQAAgBgBAAQgBAAAAAAQgIgBgGAHQgCABgGAJIgIAHg");
	this.shape_1599.setTransform(385.9,528.1);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#E4EB8F").s().p("AAAAVIgCgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgCgBQgIgQADgbQAGAFAAAKQgBALACADQAEAAAEgEQAEgEAGACQADANgPATIgBgHg");
	this.shape_1600.setTransform(404.3,533.6);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#B7C80A").s().p("AAMAoQACgFgIAEIgEABQgJAGgKgDQgDAAgHgFIgHgEQANgiAcgwIAMABQAFABAEADQAGAEAAAHQgGAMgDAcQgEAcgJANQgBAAABgJg");
	this.shape_1601.setTransform(389,520.2);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#D7E25A").s().p("AgIAFQAFgQAMgFQADAPgNASg");
	this.shape_1602.setTransform(395.6,506.7);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#CAD515").s().p("AgHAlQgEgCgFgBIgMgBIAxhQIAHAMIgdBTQAAgHgGgEg");
	this.shape_1603.setTransform(392.6,512.1);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#70BE67").s().p("AgFAQQgEgTAJgMQALALgEAUg");
	this.shape_1604.setTransform(399.8,508.7);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#B4D4A2").s().p("AgHgEQAAgBAHgBQAGAFACADQACAFgJAAQgGgDgCgIg");
	this.shape_1605.setTransform(402.6,507.5);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#D2EBD8").s().p("AgIAFQAEgKgBgEIAOAAIAAASIgJABQgHAAgBgFg");
	this.shape_1606.setTransform(367.4,519.5);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f("#259314").s().p("AgYA9QABgXAHgTIAAgSIAPhmIAGAAIAIA6QAIBBAEARQABAIgFAJIgIAPQgIADgJANQgKANgKACIAAgpg");
	this.shape_1607.setTransform(370,518.5);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f("#8DBE69").s().p("AgJAEQAGgMAMgDQADAHgEAFQgCAEgHAHg");
	this.shape_1608.setTransform(386.6,497.1);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#81C57A").s().p("AgFgOIAMAGIAAARIgNAGg");
	this.shape_1609.setTransform(365.3,510.6);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#64B757").s().p("AgGgGIANgGIAAASIgNAHg");
	this.shape_1610.setTransform(365.3,512.8);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#B3DCB6").s().p("AgGACIABgGQACgEADABQAGACABAFIgBAIg");
	this.shape_1611.setTransform(365.4,508.9);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f("#78B043").s().p("Agrg+QAMgEAIAGIAMANQAGAEARAYQAOASASAEIgQA+g");
	this.shape_1612.setTransform(407.4,515.5);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f("#228D12").s().p("AgQCKIAAgPIgHhZQgDgzAAglQAAgJAGgfIADgNQADgQgEgLIACgSIANAAIAZDNQgDAbAIARIgkA4QgHgFAAgKg");
	this.shape_1613.setTransform(400.9,525.6);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#579C12").s().p("AhKCJIAIgPQAEgJAAgIQgEgSgIhBQAKgCAIgKQAFgKAFgFQA5hPA4g6IAIAHQhEB7g7CMIgHAJIAAABIgPAFg");
	this.shape_1614.setTransform(378.9,511.9);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#1F8A11").s().p("AAFCAQgDgSgFgIIgKATIgHgBIgggyIAOiXQAHAFABABIABAGQAEANANABIAbgCQAOgBgBgJQgFgMAAgFIgCgiQAAgIACgHQACgLAGgHQAPBgABBiIAAADIAGAeQACATgJAOIgfArQgHgHgDgRg");
	this.shape_1615.setTransform(357,525.5);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f("#4DAC3A").s().p("AgFCVQgKgCAAgJQABgKgCgFIgHgKIAOiuIAOg+IAHgZIAAAEIACAwIAABmIAAAYQABAFgBAMQAAAJAGAGQgBAJAEAaQADAWgEANIgMAMQgFAFgGAAIgEAAg");
	this.shape_1616.setTransform(411.2,528.2);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#709F17").s().p("AgMAAIAAg1IAEANIAVBJIgQAVQgHgXgCgfg");
	this.shape_1617.setTransform(128.4,543);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#DCE453").s().p("AAAAPIgNgeIAFgCIAWARIAAAAIAAABIAAAJQgHgEgDAEIgCAJIgCgEg");
	this.shape_1618.setTransform(131.5,535.9);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#93D784").s().p("AgIAHQACgIAPgKQAEAMgNAMg");
	this.shape_1619.setTransform(156.1,527.6);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f("#A1BA17").s().p("AgmAiIAAgHQAQgLAXgZQAUgaAPgKIACgCIABAHIgxBXIgOABg");
	this.shape_1620.setTransform(158.9,529.7);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f("#D2DD38").s().p("AgGgKQAIgHAHARIgHANQgQgRAIgGg");
	this.shape_1621.setTransform(141.2,507.8);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f("#92BF6E").s().p("AgJAFQAEgJAPgIQACAIgEAGIgJALg");
	this.shape_1622.setTransform(132.1,508.5);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f("#7EB450").s().p("AgOgTQAMAEAGAIQAEADAHAKQgEACgCAEIgCAIQgMgNgJgag");
	this.shape_1623.setTransform(150.5,498.2);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f("#47AB35").s().p("AgEgSIALAGIAAAMIgJANQgBAFgDABg");
	this.shape_1624.setTransform(166.2,510.3);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f("#83C67F").s().p("AgFAEIgBgIQAAgFAEAAQALACgCARg");
	this.shape_1625.setTransform(166.3,508);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f("#09872B").s().p("AgYAyIgJgPIAAgkIASgVQAYgUAEgSIAMAVIACAPQACAKAFAGQAFAegdAOQgHAEgEAHIgJAOQgIgDgGgIg");
	this.shape_1626.setTransform(131.3,548.7);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f("#CBD928").s().p("AAHAuIgLgNIgEgCIgLgUIgKgwIACgJQADgDAHAEIAZAmIAXAxQgIAGgHAAQgEAAgFgCg");
	this.shape_1627.setTransform(134.7,541.6);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f("#2ABC36").s().p("AgdCNIAGg0IAJiJQAFgjABgSQAEgfgEgVQAAgDADgBIAGADQAFADABAGQABAFAAAMIgBAbQgBAQAJAKIAIAvIAAAiQAAAKAHAFIAABSIgEAIQgegNgLAOQgGAIgBAbIgGALIgBAAg");
	this.shape_1628.setTransform(147.5,553.4);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f("#A0B809").s().p("AgfgJQABgNACgFIABgCQAFgHANADQAHABAGgEIAGgDIAGgFIAQAgIgCACQgIAIgPATQgKAPgKAJIgGAEg");
	this.shape_1629.setTransform(150.5,530.6);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f("#4EBC28").s().p("AgfA+IABgbQAAgMgBgFQgBgGgFgDIgHgDQgCgGAIgHQAJgJABgCIAGgFQAKgIALgPQAOgVAIgHIACgCIAOgLIAIAGIgJARQgFAKAFAJIAAAHQgPgHAAANQgJAGADAKQAGAOgBACIgNANIgCgKQgCgEgCABIgCAFQgdAqAHApQgJgKABgQg");
	this.shape_1630.setTransform(151.4,537);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f("#AFC107").s().p("AgdgJIAAgFQgEgOAFgJQAFgHAOgDIAJgBIATAeQALATACANIgGAFIgGADQgHAEgHgBQgMgDgFAHIgBACQgCAFgBANQgNgjgBgXg");
	this.shape_1631.setTransform(148.9,524.7);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f("#248F14").s().p("AgbB/IAAgJIABgBIAPiNQAKhPAOg+IAPB6QgFAEgDAEQgDAFgBAEQgCAGgBAPIgICaQAAAMgGAFg");
	this.shape_1632.setTransform(135.7,524.2);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f("#4CAC3A").s().p("EguVAIXIAAgBQgGgKgFgFIgHgPQgDgGgKACIgEAAIgGAAIgHgHIAAAAQAGgQADgcQADgiACgLIAAg5QAHgKABgPIAAgaQAGgJABgTQABgUAHgJQAHAFAAAHIAPAHIgBATQgMgLgCgPQgJAXAFAgQADAQAHAhIABAFQABAHgBAiQgBAaAJAPIAAAOQABAHAGAEIgBACQgHANABAYIAAAAIAAAsgATAF2IAEhAQAJgIgBgOQgBgSAFgFQAEASAEAnQADAiAFASgAnMF2IAAgBQAGgKACgPQACgTAEgHIAQATQgHAPgCASgAG4hjQABgNgQgEQAAgGgFgRQgCgHAAgGQgBgFABgFQAQAPAEgIIABgRIAZi5QAMhZAXg7QADALgCAQIgDANQgHAfAAAJQAAAlADA0IAHBZIAAAPQAAAKAHAFQgBAIgMATQgLARAAALQgWAZAAAUIgWAnIABgVgEgyPgCYIgCg0IAAgNQAHgRABgZIAAgpIAOhmIALg7IANAWQADBWARBPQgFAMAFAQIAJAcQgHAIAAALIAAATQgoALgQgaQgEAHAAASQABAMgEAGIgDAAgEghBgCoIgWgxQAHgFAAgNIAIiaQABgPACgGQABgFADgEQADgEAFgEQAKAjAIA3IANBbQACAHABARQACAOAIAJIgmAugEAxlgCmQgDgKgOgaQgLgWgCgOQAMgTACgYQACgMgBggIAAgBIAAAAQAShLgMg8QgHgqACguIAcCbIADATQADAKAIAGQAEAGgGAOQgFANAIAHQABAHAAAMQAAAMAHAGQABAEgBAmQAAAaAIAQIgPAYQgIAOgNAGgAnci6QASgRgUgPIAIhMIACgmIAIgUQAIgJAAgNQgCgQABgHIgBggQAAgNAEgKIAEgIIAJASQgHA/AUA2QgQAgARAlIAABAQgDACgUACQgQACgEAMQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQgCAAgGgPgAnci6IAAAAIAAAAgACEjNIAAgdQABgQgIgMQAJgNgCgUIgGgdIAAgDQAOgBAAgIIAAgPIAOiGIAPgGIAIAzQABAEgEALQABAHARgEQgHATgBAXIAAApIAAAQQAAALAHAFIABAmIgIBHQgNAFgKAAQgRAAgMgMg");
	this.shape_1633.setTransform(349.1,562.7);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f("#75AE3F").s().p("AgmAIIACgIIAGgFIAFgDIACgBIA1g5IAJAHIhEB+g");
	this.shape_1634.setTransform(128,515.8);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f("#C5D10B").s().p("AglhCIAIgNIAlA7QAUAhAKAbIgKABQgPADgEAIQgGAIAFAOIAAAGg");
	this.shape_1635.setTransform(145.2,515.8);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f("#529B14").s().p("AAHA2QAAgDAEgHQADgGgFgEQgFACgDAEIgBAIIgdgfQALgRgGgbQgFgTAAgMQgBgJACgFQAMAOALAWIASAkIAGAJQADADAFAAIAEgBQgHAJAHAIIAAABIgIAsQgQgFAAgOg");
	this.shape_1636.setTransform(171.5,528.4);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f("#579C13").s().p("ALsCFQABgOgIgHIgBgGQgSg2gjhHIg9h5IACgIQACgEAEgDQA4A6BDBfQAGgCABgHQACgIADgCQABAFgBAHQgBAIgEAKQgCAUgJAqQgCAkAZAYQgGADgBAJIAAgBIgMgMQgCADgBAKQgBAIgFAFQgCgFACgSgAoagWQgDgWAUgdQAYAZAdAvIACABIADACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgQBsgAsHgQIAHALQAEAEAIgLIAWgfQANgTAMgKQAPATACAfIg+CGg");
	this.shape_1637.setTransform(88.6,514.4);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f("#259214").s().p("AgCBJQgagYACgkQAJgpACgUQAEgLABgIQABgHgBgFQADgBABgEIAKgOIAQBrQgBAFAAAJQABAMAEATQAHAcgLARg");
	this.shape_1638.setTransform(166.6,520.2);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f("#B8E4C3").s().p("AgCgOIAGAAIgBAdQgIgLADgSg");
	this.shape_1639.setTransform(72.7,538.5);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f("#20953D").s().p("AgCACQAAgcgQgSIABgBIAGgFIANALIABADQACAHAEAEQADAFAGACIABARQgBAIgGAGQgKAFABAOQAAAOgFAFIAAgxg");
	this.shape_1640.setTransform(78.9,537);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f("#66B783").s().p("AgMgOQAMgGAFAGQAEADAGALIgGAEIgBABQgOgHAAAHIgBANQgLgLAGgVg");
	this.shape_1641.setTransform(76.1,532);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f("#29901F").s().p("AgDAuQgEgFgCgGIgBgEIAKhSQAGAEABAFIAAALQAHAQgEAZQgFAjAAAIQgFgDgDgEg");
	this.shape_1642.setTransform(80.1,529.9);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f("#4E970B").s().p("AgGBZIADgXQADgbgCgzQgCg4ACgZIACgRIAHAAIAADEIgCAZQgLgIAAgOg");
	this.shape_1643.setTransform(68.9,513.8);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f("#7FB551").s().p("AADAOIgOgWIAIgHIAPASQgEACgCADIgCAIIgBgCg");
	this.shape_1644.setTransform(74.2,497.9);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f("#B0D29D").s().p("AgGAAQgDgDAFgEQAEgEAJANIgIAHIgHgJg");
	this.shape_1645.setTransform(73,496.1);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f("#D3DE3D").s().p("AgKgUQAKACAFAHIAGANQgFADgBAGIAAAKQgJgMgGgdg");
	this.shape_1646.setTransform(111.8,508.2);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f("#91C06D").s().p("AgIgLQAOAEAEANIgHAGQgOgMADgLg");
	this.shape_1647.setTransform(96.9,519.9);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f("#769B09").s().p("AgQAmQgPAFgCgOQACgIATgaQAMgRgBgOIgBgHQAFADAGgCIAIgGIARAPQACAegKAZIgWAaQgDgQgRAGg");
	this.shape_1648.setTransform(102.1,544.3);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f("#75AE3D").s().p("AASA7QgEgcgVglQgfg4gDgJQACgDAGAEQAGAFACgBIAEADQAKAHAIAPQALAUAKAGIAYAfQABAjgJAWg");
	this.shape_1649.setTransform(102.1,533.5);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f("#98B30B").s().p("AglAgIABgBIABgNQAQgJAUgYQAVgaAQgJIAAAEIgQAkQgEAGgPAZQgKAVgNAJg");
	this.shape_1650.setTransform(111.5,531.2);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f("#2BBE38").s().p("AAEB6IgTghQgHgIgDgFQgFgIAAgHIAOhpIABgeIAKhOQAGABAAAEIAAAIQgFAWAKAMIAQCRIABAgIAGAMQgIAMAGAWQAGAZgEAKQgNgMgMgTg");
	this.shape_1651.setTransform(74.7,544.5);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f("#589D14").s().p("AgUB2IgBgGQAJgKANgeQAIgRAKgLIAJgJIAEA4QgEALAFATIACAIQADAOAAAHQgBAFABAMQgBAJgHAGgAglBKIAAgBQAMhfAGggQANhJAUg2QgCAZACA4QACAzgDAcIgDAVQAAAOAMAJIgDADIgXAbQgRASgOAKg");
	this.shape_1652.setTransform(67.2,522.6);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f("#9AB507").s().p("AgZA5IgIgZQgBgCACgDQAPgLAQgQIAXgbIADgEIADgZQAKAPgGAXIgJAIQgKAKgJASQgNAegIAJg");
	this.shape_1653.setTransform(66.8,528.1);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f("#B9C908").s().p("AgQAPQgHgWAAgIQgBgKAGgHQAGgIAOgFIAWApQgGAogjAKQAHgMgGgTg");
	this.shape_1654.setTransform(117.5,521);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f("#C9D40D").s().p("AgagjIABgLQAAgFAFgDIApA6IAGAVQgPAFgGAIQgGAHACAKg");
	this.shape_1655.setTransform(115,513.9);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f("#259213").s().p("AgaBjIAAgCIgBgkIABgBIAPhrIALhLQAJAbAFAwQAGAvAHAUIgBAoQgFABgCAKQgCAKgLAAQgIACgFgGIgJgLIgBAFQAAAIAAARQABASgJAJg");
	this.shape_1656.setTransform(90.1,519.6);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f("#569C15").s().p("AAzBFQgFgDgKgNQgJgKgOACQgKgGgLgUQgIgQgKgGIgEgCQACgNgKgRQgOgWgBgFIAIgGQBCBEAhA4IgCANIgBAAg");
	this.shape_1657.setTransform(102.6,527.4);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f("#519518").s().p("AgUAAQgCgTAAglQAOAQALAXIAUApIgCAIQgIADgIAJIgLANQgLgZgDggg");
	this.shape_1658.setTransform(531.3,527.5);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f("#0A8B2E").s().p("AgSgoIAPAMIABABQAFAQAQAQIgWAkQgOgfgBgyg");
	this.shape_1659.setTransform(564.6,538.5);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f("#93B104").s().p("AgZAjQgCgVAVgVQAYgdAEgLQAFAMAAAQIgBAbIgBgBIgIgSIgoA7g");
	this.shape_1660.setTransform(550.2,528.4);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f("#2C8F23").s().p("AALAuIgPgMQgHgIAAgNIABgWIAEgFIADgFIABgGIgCgSQAHgGACAEIAAAIIAHBUIgBgBg");
	this.shape_1661.setTransform(563.2,531);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f("#5DB44E").s().p("AABAhQgBgKABgXQAEAEACAIIAAAOQACANAMgIIACASIgBAGIgCAFIgFAFQgMgNgCgTgAgPgHIACAgQABAUgKAOQgBguAIgUgAgGgUQgBgMgHgEQgDgPAHgNQAIAOACARIABAdQgHgEAAgMg");
	this.shape_1662.setTransform(560.5,523.5);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f("#5DA020").s().p("AgMAiQgBgGgBgBIAPg9QAEADACAGIAAAAQABAEAAAGIAAAAQAAAOAGAEIABAAQgPAYgFAFQgEADgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_1663.setTransform(550.7,508.7);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f("#A5CC89").s().p("AgJAMQgCgDgDgCIAAgHIAdgSQgJAXgNAOIgCgHg");
	this.shape_1664.setTransform(553.9,508.4);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f("#C0DBB3").s().p("AgGADQAAgMAHACQAOAFgPAKg");
	this.shape_1665.setTransform(552.3,501.8);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f("#88BB60").s().p("AgKgKQAKgCAEAGIAHAKIgIAHQgLgIgCgNg");
	this.shape_1666.setTransform(556.4,497.2);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f("#C7D410").s().p("AgHA6QAAgIgHgEIgTgGQAEgJAPgYQANgSABgOIAAAAQAQgIAFgTIABgGQALABABAHIAAANQgLAIgEAOIgGAWIgTA0IgBgBg");
	this.shape_1667.setTransform(515.7,511.3);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f("#6AA832").s().p("AgLAKIgHgVQANADAHgKQAJgNAFgBIACALQgPAjgOAUQADgLgDgNg");
	this.shape_1668.setTransform(507,500.7);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f("#6BA732").s().p("AgKACIABgIQABgGAFAAQAIAAACAHQACAJACABIgGAGIgNACg");
	this.shape_1669.setTransform(509.7,497.1);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f("#5D9F15").s().p("AAPA2Ig0hmIAGgGIBFBNIgBAGQgFATgQAHIgBgBg");
	this.shape_1670.setTransform(514,503.1);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f("#75AF45").s().p("AgSgMIAJgHIALAOQAIAHAIAEIABAAIgRAOg");
	this.shape_1671.setTransform(581.2,521.8);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f("#A3CA85").s().p("AgHAAQgDgEAFgDQAFgFAJAOIgJAHQgFgFgCgEg");
	this.shape_1672.setTransform(579.2,519.6);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f("#4CBB29").s().p("AglAsQABgJgCgGQgCgHgFgDQgBgKAHgFIALgEQAOgIAMgNIAYgkIAYgMIAAABIgXArIgJAUQgJAHgFAWQgIAGgGARQgHARgIAGQgJgHABgTg");
	this.shape_1673.setTransform(573.3,534.5);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f("#489014").s().p("AACBBQgCgKgCgDQgDgHgHgCQgEgBgBADIgCAGIgHAAIAAgLQgCgFgEgEIAWgqIABgBIgYAMIgIhSQARAVAUAnQAWArAKARIACADIAAgDQAJgsgFgZQALAZgDAdIgBAFQgDASgJAfQgBADgLADQgIgEgHgOg");
	this.shape_1674.setTransform(579,528.8);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f("#1F8713").s().p("AgDBUQgGgEgBgOQAAgOgHgEQgGAEgBAFIgBAJIgBAAQgMgMgDgPQALgDABgCQAJgfADgSIABgFQADgegLgZQgDgCABgDQALgHAIAHIALAMQACAKAOASQANASABALIgWgLIAeA2QgMAHgMASQgOAVgHAGIAAAAIAAAAg");
	this.shape_1675.setTransform(584.9,533.1);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f("#29BC38").s().p("AgdBnQAHgFgBgIIAAgRQAIgJAAgQIgBgaIADAAQAFgHABgJIgCgQIgGgJQAIgWAAgfQgCgiABgSIAHgSQAEAEACAGQACAGgBAKQgBASAJAIIAAAeIAHBYQAHATACAaIgBAtIgBAJQgBAGgFgCQgRgIgKADQgKADgIAOg");
	this.shape_1676.setTransform(568.9,550.7);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f("#CBD82F").s().p("AAWA8QgKgJgEAEIgIgBIgPgsQAAgMgJgWQgLgbgBgLIATALQAMAlAYAZIABAAIAFAXQADAOAJAIQgDAHgFAAQgDAAgEgDg");
	this.shape_1677.setTransform(555.3,539.8);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f("#478B14").s().p("AgcgeIAog7IAIATIABABIAGA2IgTgLQACALALAaQAIAWAAANIgGgGQgEgFgFAEQgDACABAEIADAHIgeAmg");
	this.shape_1678.setTransform(550.7,536.2);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f("#539912").s().p("AgaGxIAAgBIAGgJIASglQAJgUAKgNIAHgKQACALAAAyQAAAQABANgAgakdIAAgnQAAgIACgJQAEgSAJgTQATgkAIgSIAAABQADAMgBAhQgCAcAKAQIABAMQgDALgZAdQgVAWACAVQgHgOABgYg");
	this.shape_1679.setTransform(549.7,556.7);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f("#73AD3C").s().p("AggBqQgCgDADgJQAGgcgMggQAQgQAGgIQAMgOADgMQAAAAABAGQACAEAFgGQAFgEARgZIgCAAQgFgFAAgOIAAAAQAAgGgBgDIAAgBQgCgGgFgDIAJgfIAHAFIAAA5IAAAHQADACACAEIACAHQgKAXACAkQACAvgBAOQgLgQACgcQABghgCgMIgBgBQgIASgTAkQgJATgDASQgCAJAAAIQgKAAgBgEg");
	this.shape_1680.setTransform(549.3,513.2);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f("#228E12").s().p("AgQBsQgPgSgDgRIABgXIAQh4IAAgBQABgmAKgcQAGAXAFAyQAGAuAJAXQgBAlACAUQADAgALAZQgIANgPAGQgVgUgHgKg");
	this.shape_1681.setTransform(527.1,521.3);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f("#569B13").s().p("AgIADQgkhKgeg2IAIgIQA+BCA3BMQAEAEAEAKQAGAIAKAAIAAABQgEANgDAmQgCAYgIARIgGAKIg8iDg");
	this.shape_1682.setTransform(564.2,511);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f("#4EBD2A").s().p("AxEDMQAGgigHgPQgIgOgdgMQAJgIAAgMIgCgWIgKg7QgFghABgZIAIgGIAUAXQALgLAXgfQAUgaAQgNIgBgNIABAAQAMABABgHIAEAAIAGABIgfBFIAAAOQg4A7AvA8IARAZQAAAVAQAEIAEABQgIAZgJAJQgGgCgDgGIgEgLIgIgRQgHgIgNADQgMAFADAKQABAFAIAMIABAGQgLAHAEANIAGATgAQXBgQAFgZgIgnQgLg3gBgOQgKAUgEAfQgEAkgEALQgEAQASAKIgaACQgPABgJAHQgJAHgGgHIgLgJQgMgHACgIQABgHAKgIQAOgFABgLQABgCgDgRQgBgKgMgOQgNgOgBgIQgDgPgKgSQgMgUgFgMQgIgQgIADQgFABgKAOIgHgOIABgOQAPADACgGQACgDgFgLIAHgHQAKAQASAUIAgAiIAKAOQAGAIAIAFQAAALAOAHQAGASAJgPIARgZQAIgPgCgOQAPgFAIgOQACgBAMgYIAmguIAXgkIAOgJQgBASACAiQAAAfgIAWQgRAXAAAZQgLADgCAIQgBAFgBALQgWAlgIAZQgMAkAGAfQgDADgDAAQgFAAgEgHgARrhPQABgJAEgHIACARQAAAJgGAHIgBgRg");
	this.shape_1683.setTransform(454.3,559.2);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f("#A2BB1E").s().p("AghAWIAggjQATgVAPgMIABAIIgwBVg");
	this.shape_1684.setTransform(595.5,529.7);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f("#539B38").s().p("AgIAdQACgMgBgGQgBgHAAgsIANAZIADAcQABAQgCAMQgNgCgCgKg");
	this.shape_1685.setTransform(622.9,545.5);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f("#0C7905").s().p("AgBAMQAAgUgDgOIACgZQAHASAAAaIgBAsIgIAHIADgkg");
	this.shape_1686.setTransform(616.5,537.3);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f("#BAD8A7").s().p("AgIgKQALABAGAOIgIAGQgMgLADgKg");
	this.shape_1687.setTransform(626.3,525.8);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f("#769D0B").s().p("AgCApQgPAIgDgJQgEgOgBgBIAWgjQAMgVgGgTQALADADALQAEAPAFADQACALgDAQIgGAdIgPANg");
	this.shape_1688.setTransform(631.5,542.8);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f("#A2B90A").s().p("AgSAIQgSgUgBgUIAAgBQAZgRAdARQARAdAEAUIgDACIAAAAIgNgNQgHgNgHAFQgHAFAEAGIAJAJIAIAOQgBAIgHAEQgWgXgKgMg");
	this.shape_1689.setTransform(633.4,530.2);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f("#9AB50F").s().p("AgkARIABAAIACgCQAGAFAGgCQACgBAGgHIAxgzQgBAVgRAXIgdAnQgRgKgIgPg");
	this.shape_1690.setTransform(640.5,530.3);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f("#45AA34").s().p("AADATQACgTgBgJIgNALIgBABQgDgbANgWQAHAWgDAPIABAEQAFAJABAOIABAdQgJgLAAgRg");
	this.shape_1691.setTransform(619.5,511.9);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f("#7BC272").s().p("AgFABQACgKALgLIAAAkIgOAGQgBgNACgIg");
	this.shape_1692.setTransform(611.6,517.7);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f("#C7D30E").s().p("AApBBIgSgPQgNgIgOAIIgmhsIAEgDIABgBIAEgEQAgAxAJARQAXAkAMAeIgCgBg");
	this.shape_1693.setTransform(627.7,513.8);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f("#D5E04F").s().p("AgFgLQAJADAEAMIgEAEIgBAAIgDAEQgKgNAFgKg");
	this.shape_1694.setTransform(623.6,506.7);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f("#B8C80B").s().p("AgaACQgJgXABgNQAEgDAFgBQAGgCAGADIAHADIAKAEQAVAdAKAiQgYgJgdAQQAAgMgIgag");
	this.shape_1695.setTransform(600.7,521);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f("#C9D40E").s().p("AU+A6IgGgFQAohLAlgkIgmBuIAAgIQgBgEgDgBIgCgBQgGgCgCAEIgCAGQgGAIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgBgA1KAxIgHgDQgGgDgGACQgFABgEADIgBgDIgdhWIAJgIQAuBDAOAiIgLgEg");
	this.shape_1696.setTransform(735.5,512.6);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f("#D5E049").s().p("AgMgSQAWANADAQIgJAIg");
	this.shape_1697.setTransform(593.8,506.6);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f("#2C991A").s().p("AgRAgIAHgvIAAgBIAJg+IAGAAIAPBoQgEAOgMAOIgVAZQgEgTAEgcg");
	this.shape_1698.setTransform(648.7,515.8);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f("#A5BB0B").s().p("AgUAlIgGgDQgEgkgLgRIgBgIQAegQAXAJQAUAaAMArQgGgCgFAAQgJgBgMACQgQAEgJAAIgGgBg");
	this.shape_1699.setTransform(603.1,527.7);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f("#8FAC05").s().p("AgHAiIgKgEQgEAAgBAGIgCAAQgMgkgCgkQAJACAXgFQALgCAJABQAFAAAGACIAOAgIgCAYIgDAGIgBAHQgHALgLAAQgJAAgNgIg");
	this.shape_1700.setTransform(604.9,535.1);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f("#6DA93C").s().p("AglB1QAAgMAGgjQAFgdgDgTIAHgYIAShAIAHggIAFggQAJAxAEBhIgOgZQAAAtABAHQABAGgCAMQACAKAOACQACACADAJQACAHAHABIAAABQACAIgJAEIgPgTQgPAEgMAPIgRAag");
	this.shape_1701.setTransform(621.3,542.4);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f("#648E08").s().p("AgoAwIAAgLQACgGAFgDQAJgEgCgIIAAAAQALgbAagkQACABAEAOQACAJAQgIIAGAKQgFAVgZApQgKgBgNADIgWAFg");
	this.shape_1702.setTransform(627.7,550.1);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f("#74AE3B").s().p("AAWA4QgEgMgLgCQgHgYgQgfIgdg1IAIgGQADACAFAIQAFAEAIgHIACAAQABAUARAVQAKAMAXAWIAJASIgBABQgIAIgDANIgEAXQgFgDgDgOg");
	this.shape_1703.setTransform(631.1,533.5);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f("#559B12").s().p("Ai4H9QgGgggBgnIAIgNQAJgPAaggQAYgdAJgTQAhgSAIgQIADgRIAIgBIACABIAAAJQgCAYgQAeIgdA0IgfA/QgPABACAOQABAQgJASIgBADgEAl2ACYIAAgBIAPgSIAWgXQANgOADgOIAIgGQAIAAAGgHIAIgNIAPgGIAAAYQgFAEgCAGQgCADAAAHIgBAAQgJABgGAGQgCADgGALIgaA2QgLAWgKAQIgKAPgA47DLQABgUgQgMQgIgcgdgjIAAgOIgQgTIgMgVQgEgJAFgHQABgEADgDQAMAaAYAaQAPARAfAbIAAABQACAHAFAFQADADAFACQACAHgBAJQAAAJgCALQgHAbAAAIgEgnXgD4IAIgRQAMANAKATIAQAjQAHATgNAUQgGALgSAVgAZ+n0IAIgIQAwAwBBBXIAJAOQAFAHAHADIACAAIgHAwQgFAcAFATQgFAKgLACQghhYhYiqg");
	this.shape_1704.setTransform(467.1,549.1);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f("#1F8A12").s().p("AgWCVIABgsQAAgbgIgRQAEhPASh8IABgBIANgMQABAKgCAUQAAAQAJALIAPB+IgFAgIgIAgIgRBAg");
	this.shape_1705.setTransform(619.2,526.5);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f("#4AAB3B").s().p("AgUBtQgEAFADAHQADAHAAADIgWAAIgBgmQAJgfgBguIABgYIAWiSIANgGIAaDCIAKglQAEANgBAWIgCAjQgJAMACAUIABAgIgBAeIgBAAgAglAWIAEgGQgCAIgDAFIABgHg");
	this.shape_1706.setTransform(612,535.3);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f("#B2C409").s().p("AgeACQgIgWAAgSQAPgIANAJIARAOIACACQAWAdAIAiQgegRgYARIgBABIgOgpg");
	this.shape_1707.setTransform(631.1,522.6);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f("#71AE3D").s().p("AgfBDQACgJgFgGIgFgRQAjgiAOgSQAYghgHggIAFgEQAIAeAAAQQAAAZgOATIAAANQAAAHgGAEQgFgNgHANIghA7g");
	this.shape_1708.setTransform(656.3,513.2);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f("#269712").s().p("AACCgQgEgFgDACQgBAAgBAHIgNgNQgHgGgMAGIgIgMIARgOIAAgBIAKh5QAHhJgBgyIABgBQAFgKAAgPQAAgUACgHIABAAQAFgEAAgLQAAgMAGgDQAeDBAKCzIgEAjgAAvCrIAAABIAAABIAAgCg");
	this.shape_1709.setTransform(586.1,509.9);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f("#8CAB06").s().p("AAEAjQgLgBgGgMIgJgUIAHgCQADgDABgFIADgOIAAAAIAFgMQACAeAYATQgFAUgMAAIgCAAg");
	this.shape_1710.setTransform(739.3,533.6);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f("#A0B70B").s().p("AgZgVIAAgNQAOAEANARQAQASAIAFIAAAAIgDAOQgBAFgEADIgHADg");
	this.shape_1711.setTransform(735.8,530.3);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f("#C5D883").s().p("AgKgMQAOgBAHANIgBANQgOgHgGgSg");
	this.shape_1712.setTransform(732.2,526.8);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f("#4EBC2A").s().p("A+HDMQAIgdAGgqIAlAAIABAZIAAABQgIARgPATIgdAigEgyEADSIgBgKQgCgGgFgEQgEghgSgRIgIgNIgIgzIAGgQQAEgJgFgJIgTAWIg2hfIgOAaIgWAZIgBgfQAJgCAAgKQACgLACgDQAMAFADgGQABgIACgEIBJBMIABAAQADAEAEgBIAJgDIAAAOQABAHAFAEIAJATIAQAVQAJAMAMAFIgQBmgEA0BgBcQgGgMgKgDQAFgLgFgKQgEgFgMgMQACgMgMgSQgMgTABgLQALACAMANQAIAJAHADIAHACQABAOAJAIIAEADQABAFALAHQAIAHABAGQgNAbgBAYQgFgDgIgOgEApVgBMQAAgigPgWIAAg0QACAEABAIIAHAgQASgPARgWIAbgnQAGACAEgCIAEgEQAGgJAGABQgJAfgVAaIgCAHIgVAmIgNAaQgIAQgIAIIgBAAgEAqIgCkIACAAIAAABg");
	this.shape_1713.setTransform(412.5,549.7);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f("#9BC578").s().p("AgJAFQAHgMAMgEQACALgNAMg");
	this.shape_1714.setTransform(750,526.3);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f("#78B145").s().p("AIkC7QgKgIgBgNIAAgFIAAgjIABACIAJAXIAiglIAJAHIgmBFIgEgDgApMi9QAMADAJAPIgJAIQgOgMACgOg");
	this.shape_1715.setTransform(690.9,515.4);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f("#89A907").s().p("AgdApQgDgHAGgRIAAgBIAng4IASgNIgGA/QgFACgBAGIgCAKIgWAaQgVgCgDgLg");
	this.shape_1716.setTransform(759.9,535.3);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f("#85A505").s().p("AALAaQgbgGgEgEQgRgeADgdIAIgDIAEACIAPAFQAagEAJALQAHAJgBASIAAAFIgBAdQAGALgJAHQABgSgUgDg");
	this.shape_1717.setTransform(771.3,539.9);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f("#97B109").s().p("AAXA0QABgSgHgJQgJgLgaAEIgPgGIgEgCIAJghQAHgTAMgMIAGAFIACABQADAEADgBQAVgCAIAKQAFAHgBARIgCAdIgGAHIgBARQgBAJgEAGIgBgDg");
	this.shape_1718.setTransform(772.4,534.1);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f("#9EBA16").s().p("AgQgaIAFgFIAcAYIAAAAIgCAng");
	this.shape_1719.setTransform(781,529.5);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f("#A3B916").s().p("AgpAhIAJgUQAPgKATgYQAUgbANgJIAGACIgeA+IgIAMIgNAbQgBAKgHACg");
	this.shape_1720.setTransform(717.1,531.2);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f("#EEF8F3").s().p("EAg6ACDQgSgCgGgOQgJgUgGgDIgBgNQAHgHADgLIAGgTQAHgGgCgEIgCgDIgEgIIAeg+QACABACAEIAKAPIgHBLQgFAtgGAgIAAAAIgBAAgEghAgAjIAAgBIgLgKQAKg4ANgcQAnAygIA6IgIAUgEAg5gArQAAgKgFgVQgFgUACgLQAQAfgBAdIgBAEg");
	this.shape_1721.setTransform(510.1,529.7);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f("#B0C514").s().p("AAAAnQAAgEgCAAIABgFQABgdgQgdIgCgaQAGAEAFAHQAGAHADAKQAJAYAIAGIAAABIAAAEQgGAGAAAKIAAAQIgDANg");
	this.shape_1722.setTransform(721.5,522.1);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f("#78B03B").s().p("AAbBPQAAgKAGgGIABAQQAAAKgHAFIAAgPgAAhA6QgIgHgJgYQgEgKgGgHQgFgHgFgDIgkhKIgHgJQgDgGAKgEIALAOIACAEIAGAFQAGAGAJABIA3BLIgCABQgNgHAAAOIgBAmg");
	this.shape_1723.setTransform(720.1,516.7);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f("#C9D61E").s().p("AACARIgFgFIgCgEIgLgNIAAgSQASATAPAcQgJgBgGgGg");
	this.shape_1724.setTransform(717.7,507.9);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f("#A9BE06").s().p("AACAiQgHgKgVACQgDABgEgEIgCgBIgGgFQABgRAKgUIAUglIAIAGQAFAEALAFQAFADADAEQAGAHgBAKIAPANIgGAFQgLgLgFAPIgOA2QABgRgFgHg");
	this.shape_1725.setTransform(775.6,526.9);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f("#BDCB09").s().p("AAHAmQgEgEgDgDQgLgFgHgFIgIgGQAMggAZgkQAFACADADQAGAFABAHIAAABIABAWIgQBDQABgJgFgHg");
	this.shape_1726.setTransform(777.2,519.5);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f("#CDD713").s().p("AgMAkIAAgBQgBgIgFgFQgEgDgEgCQAKgXAigzIAKADIgmBvIgCgVg");
	this.shape_1727.setTransform(781.1,512.4);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f("#5DB551").s().p("AgFALQgDgPAPgNIAAAig");
	this.shape_1728.setTransform(758,508.6);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f("#187812").s().p("AgKBmQABgVgIgIIAAgWQAAgOgIgIIAAgNIACgMIgCiFQAnBCAMAoQgDADgCAEIgBAGIgCANIgGACIgDgCIgDABQAAAPgEAdQAAAaAIASIgNAmQgIgIABgUg");
	this.shape_1729.setTransform(204.2,550);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f("#61A234").s().p("AgfAWIgBgBQAPgOAAgWQgCgaABgMIgCgbQAAgPAKgJIAEAgIABAEQAFAVALANQgFARADAHQADAKAVACIgEAPIgGANQgEANAFAZQAGAZgDAMg");
	this.shape_1730.setTransform(756.1,540.5);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f("#4CAD3B").s().p("AgdCgIgBg1IAFgjIACgnIAAgBIAKhiQAGg+AJgrQACAKAEAtQADAeALARIAABlQgBAMAJAPIAAASIAAAaQACANgEATQgBAKgFAVQgNAGgKAAQgQAAgMgMg");
	this.shape_1731.setTransform(785.1,525.4);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f("#269711").s().p("AAUDlQgIgQACgYIAAgoIgCgKQgCgFgFAAQgDgBgDAGIgGAHQgPgBgKAPQgLAQgKACIAAhnIAWjcIABgmQAHgEAAgUQAAgRAQgDQgDAUAFAlQAFApAAARQgEAwAJAcIAKCVQAKAAAJgKQAJgKALAAIAAABQgsA2AMBIIgBAJIgBAAg");
	this.shape_1732.setTransform(792.7,510.9);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f("#218E12").s().p("Egl/AHEIALhWIAJgxQAFAEAAAMQABALAHAEIACAVIABABIALBSgEAlGgDTIgBgFIgDggIAYjLIAMAGIAaDSIgoA5IgBAAQgMgNgFgUg");
	this.shape_1733.setTransform(518.1,554.9);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f("#259114").s().p("AgcBSQACgvAJg7QADgWAPhWQAVBbAHBnIgBAjIgGACQgHgDgIgJQgLgNgMgCQAAALAMATQAKASgBAMIgGABQgZgUgCgfg");
	this.shape_1734.setTransform(741.7,521.9);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f("#167911").s().p("EA7xAARIAFgNQAEgLAIgJIAEANQACAGAEADIABALgEg8MAARQAKgRAFgMIACAFQgBAKAAAOg");
	this.shape_1735.setTransform(553.7,617.1);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f("#44A53A").s().p("AAFBYQgWADgGgLQgDgHABgUIAAgfIAAhfIAHgYQACABABAEIANAUIALAqQAHAZAKAOQgDAMgCAhQgCAcgHAQIgHgKg");
	this.shape_1736.setTransform(50.2,543.7);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f("#187A11").s().p("ACpGTIAAglIAUAiIACADgAi5k2QgJgOAKgNQAFgHALgZQAKgWALgLQAAAOAFAxQAEAngCAYIAAABIAEARIgEAVg");
	this.shape_1737.setTransform(184.7,578.6);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f("#048A2D").s().p("AgcAZQAJgIAKgMQARgWAOgHIAHAUQgFAKgKATg");
	this.shape_1738.setTransform(167,616.4);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f("#31BB36").s().p("AgGARIgFgRQADABAEgNQAEgLALARIABAXg");
	this.shape_1739.setTransform(161.5,617.1);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f("#2CBB36").s().p("AgIAcIACgMIAAgrIABAAQAJAMADASIACAZg");
	this.shape_1740.setTransform(54.4,616.1);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f("#04892D").s().p("AAdA8QgQgSgQgmQgSgogOgRIgCAAIACgGQAFAAAEACQALAEAIAKQAPATAGADQACAPAVAKQACAKgFASQgEAUAAAIg");
	this.shape_1741.setTransform(685.9,538.5);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f("#1C8311").s().p("AgPBZIgFgIQgGgGgFgCQgGgWAHgjQAIgqgBgPQAIgJgBgSQAAgQABgIIABgGIAIALQAFAGAIgBQAMgBACgJQACgLAEgBIABAXQABAOAGAIIgkCjIgCABQgFgFgHgLg");
	this.shape_1742.setTransform(89.9,536);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f("#779C08").s().p("AgLA7IgWhqIAAgTIAAAAQADgBAJAMQADAEADgBQAEgBACgNQABAXANAYQAFAIAYAhIAAAJQACAPgPAIIgZANg");
	this.shape_1743.setTransform(263.6,541.8);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f("#45A539").s().p("AgaBLQAAgRAIgKIABAcQABASgJALIgBgegAADBNIABgXQAJAIgBANIgBAXQgIgIAAgNgAAEAjQgGgFgGAEIgKAHIAAgaIAEgOQAAgHgLgDIABgGQAPgMABgVQgCgWABgLIAAgEIAJgTQAGAIADASQADARAHAHIAAACQgHAzAOAqIABAHIgBAMg");
	this.shape_1744.setTransform(356.6,546.2);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f("#779C0A").s().p("AgPADIgCgFQASABAFABQAHAAAEADg");
	this.shape_1745.setTransform(24.7,618.6);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f("#2BBB36").s().p("AgEAmQADgGAAgIQgBgRAGgFIABAAQAAAAAAABQABABAAAAQAAABAAAAQgBABAAAAIABABQADAKACAVgAgKgdIADgBQADgDACgEIAGAhQgOgHAAgSg");
	this.shape_1746.setTransform(13.4,615.1);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f("#70AD39").s().p("AgZAiIgGgqQAEACAIAHQAHAGAEgPQAIgDAEgIIAJgOQAcAHgOASIAAgBQgGgDgEACQgEABAAAHQABANgDAXg");
	this.shape_1747.setTransform(110.2,615.4);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f("#48A638").s().p("AgNAZQAIgHACgRQACgSAFgHIAKAbIAAAWg");
	this.shape_1748.setTransform(178.4,616.3);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f("#4C9210").s().p("AgGAMQAAgNABgKIAMAXg");
	this.shape_1749.setTransform(170.7,617.6);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f("#569C11").s().p("As6IFIgqhTQgIgfgNgMIAAgCQABgHAIgUQAIgRgLgMIAAAAIAHgMQAMAPASAfQAOAUAOAOIAKAJIgPByQgDgDAAgEgANXhjQgMgIgLgOIgTgcIABgRQABgLgDgGQgDgKgBglQgBgZgLgPIgGgGQAggngIguQgFghgfgxQgIgNgKgUIgQgiIACgHQACgEAEgCQAYAXAcAiIAyA/IAhgtIADADQgCAWgIA+QgIA1ABAgQgJAMABAUIABAgIgBAGIAAAAIgtgwIgGADIAzBgQgJALABARIABAcIgDAAg");
	this.shape_1750.setTransform(123.3,551.3);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f("#4E9614").s().p("AgfAsIgCgeQAGADABAKQABAKAHAFQAVgxAHgZQAEgPAHAEIANAIQgMAhgJAug");
	this.shape_1751.setTransform(196.7,614.4);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f("#1F7E1A").s().p("AgGAGIAGgLQAEAFADAGg");
	this.shape_1752.setTransform(185,618.2);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f("#6FAB37").s().p("AgRAyQAJgvALggIABgHIAGgJQAGgGAAADIACAGIgBAYIAAACIABAeIAAAkg");
	this.shape_1753.setTransform(199.8,613.8);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f("#48A73A").s().p("AgKAcIAHgpIAAgCIACgMQAGAWAGAhg");
	this.shape_1754.setTransform(219.3,616.1);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f("#35B936").s().p("AgMAZIANgxIAHAMIAFAlg");
	this.shape_1755.setTransform(213.6,616.3);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f("#4CAC39").s().p("EguEAGaQAEgHAAgOQABgTAHgLIACAAIAGAzgEAtxgCVQgYgEgCABQgHACABgJQABgOgCgCIAChaQAHgHAAgKIgBgTIAAAAQAGgQACgTIAAgkQAIgFgBgNQAAgOAHgFQAHARABAaIABArIgBASQAAAKAIAGIAAAnQgCASADAaIAGArQgEAOgNAAIgDAAg");
	this.shape_1756.setTransform(538.9,559);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f("#03892D").s().p("AgaGmIgBgCIgVgiIgBgfIADgBQAHAEAHAHIAOAOIAdArgAAEkhQgMgogohCIgBgGIAAAAQABgBgBgLQAAgHAIgBQAJgBAFAIQAGAMADABIASAcQALAOAMAIIADABQAGAXARAQIABAGQgEAFgKAVQgHARgKAHQgDgVgMgNg");
	this.shape_1757.setTransform(206.5,576.6);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f("#2DBD36").s().p("AgEATIAAgJQAAgJgEgEIgCgBIANgOQAIANgBAYg");
	this.shape_1758.setTransform(147.2,617);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f("#4AA635").s().p("AgKASIAEgjIAMAAIAFAjg");
	this.shape_1759.setTransform(152.8,617);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f("#759F08").s().p("AgMASQAIgUARgPIgFAjg");
	this.shape_1760.setTransform(150.9,617);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f("#729909").s().p("AgLAHIADgGIAGgHIAPANg");
	this.shape_1761.setTransform(104.1,618.2);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f("#2DBC37").s().p("AgJAcQAGgTABgkIAGANIAGAqg");
	this.shape_1762.setTransform(106.6,616);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f("#559B11").s().p("EgjmAKOIgegrIgFhDQgDgogOgaQAwhGgug4IgDgJQgIgZgLgLQgKgLgRgDQgEgHgDgWQgBgTgMgIQAHgQgJgLQANABAJgKQAJgLAHgEQgHBCAsAjIARASQAVAgAQANQAKgBAGgHIAHgOIA7hdQANgIACgQQANgGADgNIAdgiQAPgUAIgQIAGgBIABABIAAACIgIB9QgUAYgPAlIgYBCIglBSIgIAAQAChKgYg5IgQCdQgGAPgBATIAAAkQgHgEgQgWQgOgQgRgHIA0BlQgGAEAAAJIAAAPQgBAMgBABQgCAFgEACgEg1UAKOIAAg6IABgYQAAgPgJgJQgJgeABgPIAAgTQAAgMAIgGIAAAAQAuBSAiBSQAHAQALADIgDAFgEgibAHqIAAgNQAAgIAGgEIALASIAkBBQgOAkgYAcgEg6HAIxIgBgCQAAgjAJg1IAPhZQAGgHACgPQACgSACgEIACgQQACgKAFgGIALgfIAGABIAAAkIAABAQgGAbAIAgQAEAQAOAoIgOAMQgCgOgMALIg0A9gEg2bAHzQgGgIgFgMIgDgLIgGgPQgGgGgFgWQgEgSgPgGQgCgEgGgTQgDgPgLgHQAAgIgBgCQgBgFgFgDQgGgmgdggIgEgNIgMgSQgJgLAAgJQAIgEAIAHQAIAJAEAAIAQAUQAJAUAdAYIAhAwQATAaAWAPIgNB2IgEgBgEgqoAHrIgWguQgfhJgRgkQgcg9gfgtQAAgNAQAGIAJAIIAGAMQAFAGAJAAQgBAMAMAMQAGAIAOAMIAXAhQAOATAPAMQACAJAHAIIAOAPQABAQgGAmQgGAiADAUgEgkcAHdIACABIgCABgEAgoAHSIgZg1IgLgYQgDgFgJgWQgGgQgKgIQgCgagVgTQgCgSgOgWIgVgkIAHgGIAYAcQAMAOAQAIQACARAVAJQADANAMARIAWAbIAKAMIALASQAIAKAJAFIgHAvQgCARAAANgAUtHSIgHgPIgRgqQgJgZgMgOIgmhTIAJgUQAKACAJALQAKALAHACQADAOAUASIAPAWQAIALANAFQgGAQAPAKQABAtgFAggANdHSIgOgiQgQgngQgYIAPg5IAGgGQACAPANAQIAYAaIAGAAQAAAUAQAMQgHALgBARIAAAdIAAANIgBABgAxHHSQgJg4gDg1IAAgRQAAgKAHgEIABAAIAJANQAHAIAHgBQASgCAEgYQAIgCAFgKQAFgMAEgDQAPgEABgOIAIgCIAWAKIgIAXQglBCgFAOQgNAqAdAmgEAo5AG3QgBgXgEggIgNg7IgBgBIAAABIgSBfQgGATgUACQgYgCgMAAIAAgGIAGgQQACgKgDgHIgjhLQgWgsgXgbQACgJgGgKIgLgSQAHgFADADIAHAIQADAFAIABIAKATIAmAnQAFADANAXQAKARATABIANATQAGgMATgaQARgXAEgPQAYgYAGgUQAOgGAAgNIAQgTIACgCQAXgYAUggIAAgBIAOgMQgDAQgCAtQgCAngHAWIgPAfIgJAmQgNAKgIAUQgEAKgGAXQgOAHAAATQgFAGgEAUQgDASgJAHQgBgJgHgEgEglfADSIAAAAIAAAAgEg1NgAkQgIgdABgtIAAhKIABgZQAAgPgJgJQgFgIgCgOIgBgXIACgoQA7BZAgBeIABAHQAAAOgMARQgTAbgCAIQgLAIgGARIgLAZIgBABgAJUkuQgCgmgEgRIgHghIAAgEQARgEALgUQAOgWAIgFIACBuIgBAHQgOgBgCAMQgFAEgBAGIABAKQgOAXAEAbQgHgTAAgkgEAo5gFKIAAgPIgQhoIgDAAIgSBZQgMAVgKAAQgKAAgWgVQgGgegUgoQgXgrgLgXIgeg3IAJgHQApArBKBcQBChsBbh6QAQAKgEAMQgHASAAAdQAAAmgBAKQgMAFgBAMIgtBlQgZA4gMAtIgBAAQgIgEAAgJgEA4AgIBQgDgRgLgIQAAgQgEgpQgGglADgVQBbBkBEB6IgYAHIAAgPQgBgIgMgEIgJBUQgMAJgEASg");
	this.shape_1763.setTransform(435.5,553.4);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f("#44A337").s().p("AgQADQAOgRARAMQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQgGADgHAAQgIAAgMgFg");
	this.shape_1764.setTransform(265.1,575.3);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f("#1B7E14").s().p("AgNATQAJgXAKgOIAIAlg");
	this.shape_1765.setTransform(118.4,617);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f("#0B8C2E").s().p("AgNgxIALARQAFAIAIAFIADAAQgGALAAAXIAAAMQgBAMgFAJIgCADg");
	this.shape_1766.setTransform(692.7,546.6);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f("#29BC37").s().p("Eg/rAHGIACgGIAIhxIAAAAQAHAJADAPIAFAaIAHBFgEA36gBEQAAgLgCgGIgCgGIgLANQgDgXAFgpQAFgwAAgPIACgNQAQgygDgaIAAgMQAIgIABgUQACgWAMgIIAAAgIAAAAQgCAMAFAXQAGAYgBALQgDAZAGAtQAFAyAAAVIgQAlIgBABIgXAlQgHgHABgPgEhDKgA3IgBgqIAIgyIAAg0QAIgPACgdQACghADgMIAIgyIAAgBIAAgrQAGAGAEAJQADAGABAJIADAiIAGAlQgBAZAHANQgCAjAKAqQgCAeAKAuIgBASQgGgCAAgJQgBgLgFgDQgHAGgCAKIgBAPIgCAAQgRgPgMAGQgIADgLARIgCAAgA6chIIgQgZQgCgQAIgmQAIgjgFgTIAAAAIAFgMIAPhaIAAAAIAKg1IABgDIAAAAQAGAEAAAIIAAAMIABAPIAJBdQAFBAAAAtQgCAPgLARIgSAegEAzzgBBIgGgHQgBgEAAgEQgBgNgCgFQgLAEgRgCQgXgBgGAAIgBhMIABgGQAIgTABgjQAAgnAFgQIAPiRIABgKQABgHAGgCIAJBxQAHAOgBAfQgBAdAIAPIABA9IAAADQABAFgCALQAAAKAGAGIADAzIAAAngEBI6gBaQgVgJgBgSQACgVgCgKIAAgSQAAgOAFgjQAFgegCgRIAGggQAEgRgBgNIgBgCQAIgIgCgRQAAgSAIgIIAIANIAAAgIAPB5QABARAFAhQADAfgCAVQADAUgKAEIgHABQgJAAgPgGgEhIygBdQgeAOgGgNIgCgeIgIgUQARg6gCgrQALgngDgjIgBgBQAKgKgBgPIgBgbIAIAAIABAKQAFAQAAAuQABAnAPAXQgQAqAQBGIABAhIAAABIgBAGgEg61gCUQgDg1AKgjIAAghQAKgagCgeQAIgXAAgiIAHAMIAXCfQABAHgCAPQgBAOAJAJIAABFQgNgFgQABIgfAFg");
	this.shape_1767.setTransform(480.6,573.5);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f("#70AC3A").s().p("EgwFAGcIAcgkIAJAEQgBAHAAAZgEAvAADEQADgbgBgDIABAAQAKgEADgJIAWgYQAMgOAFgMIAHgBQAIAEAAAJIgQAmQgMAMgKAWIgQAjQgRgIABgSgARtlvQALgFAJgQQAKgSAIgFQADACACADQADAFgCAGQgHASAAAcIAAAuQgKADgEALIgDAHIgFAKQgQg2ABgpg");
	this.shape_1768.setTransform(351.9,577.6);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f("#43A536").s().p("AgKAYIACgQQACgVADgKQAHAFACAHIABALIAAAOQAAAFAEAFg");
	this.shape_1769.setTransform(42.5,616.4);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f("#6B9A0F").s().p("AgCADIAAgFIAFAFg");
	this.shape_1770.setTransform(34.4,618.5);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f("#70AC39").s().p("AgKAMIAAgYIAVAAIAAABQgPADABAVIgHAAIAAgBg");
	this.shape_1771.setTransform(226,564.3);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f("#28BA37").s().p("AAWCrQgEgGgFgVQgGgQgHgIIglhMQALg7ABgMQAFgqgKgfQAOgMABgSIgBghIADgZIADAAQADAAABAEIADAGIADAAIAAAgIAAABQgCAJAGAOQAJAQABAFQgHASAGAaIAJAtQgCAMADAQIAHAcQABAHgCANQAAALAHAIIAAAAQgDAFABAHIACANQgBAIADAhQABAZgIAQQgDgQgGgDg");
	this.shape_1772.setTransform(162.6,556.1);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f("#48A139").s().p("AgLAcIAEgRIAIgmQADAGABAKQAAALADADQADAIABARg");
	this.shape_1773.setTransform(953.4,616);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f("#2CB837").s().p("AgKAWQAHgHgBgPQgBgPAIgFIAHAFQgBATACASg");
	this.shape_1774.setTransform(947.8,616.7);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f("#0A7A56").s().p("AgGAfIgBgMIAAgZQAAgPAHgIIABAAQAFAYACANQAAAMgBALg");
	this.shape_1775.setTransform(939.7,615.8);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f("#4AA938").s().p("AgLAdIADgmQAAgPAIgEQAAACgCAaQgBASAPAJIgBACg");
	this.shape_1776.setTransform(653,597.1);

	this.shape_1777 = new cjs.Shape();
	this.shape_1777.graphics.f("#06882D").s().p("AgEAGIgBgLIALALg");
	this.shape_1777.setTransform(931.4,618.3);

	this.shape_1778 = new cjs.Shape();
	this.shape_1778.graphics.f("#6F9607").s().p("AgiAgIAJgOIAQgZQAPgYAAgTIAcBSIgBAHIghACQgMABgKAEIgKAFg");
	this.shape_1778.setTransform(660,545.2);

	this.shape_1779 = new cjs.Shape();
	this.shape_1779.graphics.f("#47A83A").s().p("AgLAZIAAgGQAHgFgBgRQgBgRAPgEQAAAVADAcg");
	this.shape_1779.setTransform(1.6,616.4);

	this.shape_1780 = new cjs.Shape();
	this.shape_1780.graphics.f("#4E9738").s().p("AgSA/IAVhdIAGgRQAEgJAGgGIAABGQgOAeAKAZg");
	this.shape_1780.setTransform(934.1,612.5);

	this.shape_1781 = new cjs.Shape();
	this.shape_1781.graphics.f("#4AAB39").s().p("EApAAGkIACg1QACAAAFgKQAEgHAKAGIAAAvQAAAJAAAIgA4iGkIABgEQACgfACgKIABAAQAHAFADAJIAFARIAAAOgEgpFAGkIgMAAQABgGgBgHIgGgaQAGgEAEgOQACgKAJgDIADAAIgCAfIABAngAG/gmIAAgmIAHhAIAIhlQAIgJAAgQIAAgaIAAAAQAIgTAGgqQAGgrAIgXIAKCXQAAAGgCALQACAKAGAGIAAADQAAAQABAGQADAMAMAIIgtBfQgKAOgJAUIgMAjIgGACg");
	this.shape_1781.setTransform(660.8,558);

	this.shape_1782 = new cjs.Shape();
	this.shape_1782.graphics.f("#2ABC38").s().p("AgkCSIAAgfIAAgsIAGgYQgBgdAHgoIAJhFIAAgBIAIhHIAHAOIAPBlIAGA1QACAiANAUQgNAuAOAnIgBAHQgDACgMgDQgKgDgEAHIgVAKg");
	this.shape_1782.setTransform(369.1,552.1);

	this.shape_1783 = new cjs.Shape();
	this.shape_1783.graphics.f("#42A33A").s().p("AvkAdQACAAAGAGQAFACABgLQAKhGALgwQAHAOAEAfQAFAeAJAPIAAABIgBALQgFANAEAWQAEAYgCALQgVgFgJAAQgRgBgGATgAOPBDQAAgSgCgIIAAgZIAAgfIAAgBIABgPQAAgKAHgGQABADgBANQAAAKAGgCQACgBAYADQAQACAEgPIABAGIAAAiIAAAHQABAEAGgBQADgBACgEIAEgHQAMACgBAFQAAAEgEAIIgJASQgPACABARQABAOgLAEQgGACgRAAQgXAAgDgNg");
	this.shape_1783.setTransform(736.9,546.2);

	this.shape_1784 = new cjs.Shape();
	this.shape_1784.graphics.f("#1C8211").s().p("AATBfIgEguIgGg3QgEgggKgXIgJBbIgDAAQgJgEgGgJIgKgRIgCgSIABgBIAPh4QAHACATAAQAQAAAJAEQAGAIABAKIABAUIANCSQABAFgGAaQgEAUAKAMQACAOgQAMQgIgTgEgag");
	this.shape_1784.setTransform(695.6,541.5);

	this.shape_1785 = new cjs.Shape();
	this.shape_1785.graphics.f("#49AB3A").s().p("AgOBHIgBgbQAHgSAAgmQABgmAHgUIAAAAIAOAVQgIAGAAAJIABARQAJA8gBAaIABACg");
	this.shape_1785.setTransform(785.1,593);

	this.shape_1786 = new cjs.Shape();
	this.shape_1786.graphics.f("#4DBC2A").s().p("AceDWQgRgugUgfQgCgYgOgOQgIgXgPgdIgdgwIAAAAQAAgDgDgHQgDgHAEgFIA1AzIABACIAIAOQAGAIAIADIAIANIAPANQAKAgATAMIgOBZgA8qhWQABgQgIgGIgBgCQgBgGAJgKQAKgJAAgGIAFgDQAOgKABgMQAhgOAFgdIABgEQABACAMgCQAKgBgIAMQgKAOAAAPIAAABQgGABgEADQgGAFgCAHQgCAEgCASIAAATQgFADgCAKQgCAKgGACQgPgDgGALIgIARQgJgFABgQg");
	this.shape_1786.setTransform(438.4,548.6);

	this.shape_1787 = new cjs.Shape();
	this.shape_1787.graphics.f("#48A93A").s().p("AgMAaIABgDQAJgTgBgOQgCgOAPgBQAAAYADAbg");
	this.shape_1787.setTransform(452.1,597.5);

	this.shape_1788 = new cjs.Shape();
	this.shape_1788.graphics.f("#4AAA3A").s().p("EAyGAG7IAIg0IAOAMIAAAGQgIAOABAUgAySgpQABgYgIgOIAKgYQAGgPgQgKQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBQATgoAJg1IALhhIAEg8QACgeAGgWIACgHIAEBBQADAkAJAcIAAArQgDAYAFAoQAGAvAAAQIgJAZQgNAQgRAqQgRAYgGAhIgGABQgBgHABgggEgr/gBvIAKhPQAFguAAgiIAAgkQAAgVAGgPQAHgTgOgLIAPgTIAJA7IAYClIgEgOIAAA3QACAfAHAXIgBAmQgpgogZglgEgybgBvIAAg/QAGgGABgJIgBgRQAAgHAEgjQAEgagGgQQAMgWACgiIAGg4QAHAGADALIAGAUIgCAFQgDAOADARIAFAYIADALIACAmQACAXAHAVQAEgMACgSQACgNADgHIABAAIABAYQABAOgIArQgGAkAFAWQgCASADAaIAFAtg");
	this.shape_1788.setTransform(402.9,555.8);

	this.shape_1789 = new cjs.Shape();
	this.shape_1789.graphics.f("#8AAA07").s().p("AgLBAIAAgBIgWgsIAhgyIAAAAQALgEAEgPIATgNQACANgDATIgGAfQgMAIgEASIgOAYIgHAOg");
	this.shape_1789.setTransform(184.7,535.7);

	this.shape_1790 = new cjs.Shape();
	this.shape_1790.graphics.f("#6FAC39").s().p("AALAnQgFgJgFAFIgHAHQAEgTAAgKQAAgPgTgHQADgSgRgIQAEgFgKgNQgIgMANgHIAOANQACAOAPAGQADARAQAAQANAfASAOQgEAHgBATQgCAPgHAJg");
	this.shape_1790.setTransform(299.9,592.6);

	this.shape_1791 = new cjs.Shape();
	this.shape_1791.graphics.f("#44A439").s().p("ACECGQgBgMAGgZQAEgZgCgNQgCgQAHgjQAGgggDgSQAGgGABgJQgBgMABgFQABgHgEgOIgCgIQgEgTADgLIAVA1QgDATAJALIgOBpQAAAHAFAIQADAFAHAHIgIACQgGAEgBAIIAAANIgcAZIgBAAgAiZAaIgTAYIgDABQgBgKAGgLQAIgPABgGQASgMgCgYIAAgCQAHgKAAgUQAAgWAEgJQAJADACAIIABALIAAADIgBALQABAIAHAEQAAAmABAKQADAbAKATQAAAKgHADQgDAAgDgFQgDgFgGAEIgeATg");
	this.shape_1791.setTransform(55.5,545.1);

	this.shape_1792 = new cjs.Shape();
	this.shape_1792.graphics.f("#29BD37").s().p("A/PCeQgSgIgGgNQgPgMAEgTQAIgUACgLIACgbQABgRgDgLIAIhaIAJhFQAGgFABgLQAAgNAGgEIASCeQgCAEABAGQAAAFACAHQAFARAAAGQABAPgCAeQAAAaAGASQAAAJADASQAAAQgIAKIgdgPgAeyBkIAAgRIAQiMQAFgVABgLQAEgTgCgNIAHABIABAMIAQBmIAGA4QgDAiAPAdIgDAOIgBAZQgHADgBAKQgggcgWglgANUCZIgHgOQAJgQAAgaIAAgpQAGgFgBgNIABghIAHhqIAAgBIABgMQAPAWAAAiIAAABIAPB3IAAAbIAHBFgAYeCKIAAgsQgCgSAJg0IAAgNIAIhEQAAgYANgbIACAGIAIB+QAAAQAFAqQAEAjgCAWQACAMgIADQgDABgQABIgCAAQgRAAgBgSgAHfCXIgegCQgQgFAGgVQACgEgBgHIgBgLQgCgsAKgnIAAgeIAGgdQADgRgCgMIADgWQAEgOAIgIIAQB+IAHBAIAAAZIABALQAAAHgCAEIADASQABAKgNAAIgDAAgAZSCLIACABIgCACg");
	this.shape_1792.setTransform(588.7,547.9);

	this.shape_1793 = new cjs.Shape();
	this.shape_1793.graphics.f("#4AAA39").s().p("EgxoAIJQgDgHgEgFQANgSAHgSIBAAAIAAARIACAfgEAw6AFNIABgFQADgQgIgMQAFgQARgCIAdgBIAHAGIgGANQgagCgEAOQgCAGABAPgAXviaIgMgMQgFgEgNgTQgLgPgOgDQgCgOAHgeQAGgdgEgQQAAgLADgfQADgagEgPQAQhBgDgtIADgKIAFAQQAFAGgBAJIAFAUQgEAOAGASIAMAeQgMAPAFAWIAJAkIADBBQADAnAGAbIACATIgCATQgGgDgGgHgEgw1gC2QgTgYgPgIIAAhfIAGggQADgTgCgNQAHgaAEglIAGhDQAMAMABAWQABAQADALQACAHADAFIAAhaQABATAFAmQACAhgJAYIAAA6IAEAAIAFgaQAIAYgDAcQgHAHAAAIQABAFAFAKIACgMQAHALAAAcIAAABQgGAUAEAlQAFAngDASQgPgIgSgYgEgwdgEjIAAABQAAAAABABQAAAAAAABQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgCAAg");
	this.shape_1793.setTransform(503.4,566.7);

	this.shape_1794 = new cjs.Shape();
	this.shape_1794.graphics.f("#4BAC3A").s().p("EAl2AAdQAGgLgBgQIgBgeIAAAAQALAHAFARIgBAhgAkkAdQACgWgBgWIABAAQANAMABAYIAAAIgEgmJAAdIABgFQADgbgBgTQAIAAAEAGQABACABAKIAFAhg");
	this.shape_1794.setTransform(588.2,597.2);

	this.shape_1795 = new cjs.Shape();
	this.shape_1795.graphics.f("#128748").s().p("AgRAwQgBgNAAgQQAAgxgCgLIACgGIAnBfg");
	this.shape_1795.setTransform(554.2,595.2);

	this.shape_1796 = new cjs.Shape();
	this.shape_1796.graphics.f("#45A53A").s().p("AgZBGIAAgCIACgEQAFgQABgXIgBgsIABAAIAQg/IAIAuQAGAaAOAQIgBADIgFAQQgCALAIAIIAAAAIgGAMQgIAYgGACIgCABQgHAAgXgNg");
	this.shape_1796.setTransform(953.7,544);

	this.shape_1797 = new cjs.Shape();
	this.shape_1797.graphics.f("#749B09").s().p("AgBBAQgCgPgIgxQgHgnABgZIAEAMIAEANQAFAQAWgDIgIBZQgDACgDAAIgFgBg");
	this.shape_1797.setTransform(385.2,543.6);

	this.shape_1798 = new cjs.Shape();
	this.shape_1798.graphics.f("#49A73A").s().p("AgIAXQADgWgBgOQgBgGAEgCQAEgCAFAEIABAAQAAAWACAUg");
	this.shape_1798.setTransform(112.3,616.5);

	this.shape_1799 = new cjs.Shape();
	this.shape_1799.graphics.f("#44A338").s().p("AghAJQAHgPADgZQAEghACgIQATATAggMIAAABIgJBDQgHAqAAAcg");
	this.shape_1799.setTransform(364.1,549.4);

	this.shape_1800 = new cjs.Shape();
	this.shape_1800.graphics.f("#4EBD29").s().p("EgtdAGWIAQgWIADAAQAEAEAAAJIAAAJgEgyaABPQgKgRgEgEIAIgaQAAgGADgHIAJgNIAbgqQAPgZAHgUIAHABIgPCYQgEABgHAJIgDADQgFAHgFACIgGADQgKgFgHgNgEgvzAAbQgFgQgDgtQgBgmgNgWQgBgJAHgNQAIgPABgGQAKgRgJgRQgMgUgEgLIgag4QgQgfgTgVIgGgZIAHAAQAZAlApAnIAKAPQAGAIAIADQABANANAGQACAGADACQAEADAEgHQANgSACgGQAJgOACgMQAPgEAAgOQAMgLAJgUIAmguQASgdATgRQADAVgDAfQgBASgGAjQgcAugCAeQgQAOgJAZIgMAqQgHAFAAAJIgBAMQgNgSgEgjQgFgrgHgUQgFAmgLBEQgIA6ABApQgHAHAAAJIgBAQIABAaQABAPgJAJQgUgTgDgMgAAqgTQAXgFACgOQACgIgFgWQAbgggJgkQgGgVgbgtQgHgqgcgqIgCASIgBABQgGgbgBglIAAhDIAAAAIAIAGQAHAIANASQAMAQAMAJIAgA0QAKAQAEgRQAGAGABAQQABAPAIAHIAeAtIBDhTQAIgEACgKQABgOACgDQAFAHALgFQABAHgDAIIgHAOIgMATIgXA6QglA2AkA2QgbgFgoAEQACgagHgiIgPg8QgMA2gCASQgHApABAhIgMAyQgEACgMAEQgKADgEAGgEgwngAdIARgoQAGAbgQATQgCgEgFgCgAEihkIAAgNQAEgIAAgKQALg6gPg3IAAgCIAAgBIgBgNQgBgJARAEIAAAGQgBAMAHARQAIAZABAJQADAIADASQACARAGAKIABAlIgIAGIgTALIgEABQgIAAgGgMgAEhicIABgBIAAADIgBgCgEAxmgDWQAAgLgJgRQgKgUgCgHQgCgHgDgCQgFgDgHADIgIh/IAtAyIACABIA6BTIAIATQgFAmgwAZg");
	this.shape_1800.setTransform(435.5,578.2);

	this.shape_1801 = new cjs.Shape();
	this.shape_1801.graphics.f("#097449").s().p("AgOAtIgJgeIAAgHIAAgBIABgZIgCgPQgBgJAMgCQALgBACAJQAEAMACACIABABIATBCg");
	this.shape_1801.setTransform(129.6,614.3);

	this.shape_1802 = new cjs.Shape();
	this.shape_1802.graphics.f("#1D8614").s().p("AgSAwQAGgUADggIAGg2IAAgRQAAgKAGgGQABAMAKAnQAHAagCASIgBAGIAAA7QAAAMgBABQgCAIgKACg");
	this.shape_1802.setTransform(134.5,609.1);

	this.shape_1803 = new cjs.Shape();
	this.shape_1803.graphics.f("#4DBD29").s().p("EgzlAG8QgCgUgDgKIAAAAIAVATIAHALgAvBBuIgRgOIgBAAIgLhVQgFgxABglIAKARIANAVQAMAXADAQQgNAsAiAZQgGAEAAAIIgBANIAAAAQgGAOgIAAIgFAAgEgzLAAaQAjgtAIgkIAIgNQAGgXgNgcQgRgegHgPQgBgQgMgZQgPgdgCgMQgPgWgBgnQAAgugFgQIAVAUIAIAQQAGAIAIADQACANAOAGQAQAjAdAcQABAKAHADQABAIACAEQADAFAIACQAAAWAWAVIAignQASgXAJgTQAUgKADgdQAKAGAMgFIAAABQgBAGgJAPQgGALABAKIABACIgBAMQgLAHgEARIgIAbQgYAPgIAXQgIAYAKAUIALASQAFALAAAKIgBAAIgCAHQgPA4ADAsIgBAEIgCAAIgbgbQgRgUgGgOQAEglgIg0IgQhYQgMAtgIBFIgNBxIgQAZQgKANgNAIIgGAEgEgkTgAEIAAgBIAWiSQAHgFABgKQgBgKABgHIAAAAQALgQADgXQABgIgBgJQAIAEACALQACAMADAFQgJAbABAiQAAAPAFAvIAEApQgQAIgQATIgcAdgEgrOgAkQACgTgEggQgGgkAAgPQAOgFACgOIABgBIAbgZIgCAMQgGAeACA2IAAAGQgKAHgEAOQgGATgDAFgEAyRgA4IgSiIQgLANAAAZQAAAZgIAKIgUAUQgLAMgPgaIgeg5QgOgwgmgvIgBgTQAOADALAPQANATAFAEIAMAMQAGAHAGADQAEAQATAKQADAPAMADIAGAJQAQgQAEgIQAJgOgLgPIAHgMQAOAJAFgGIAEgQQAOgGACgUQANgGAJgOIAOgXIAtg0IAAABIgHBrQgNAIgCARQgFACACAEIACAGQgIAIgEALIgFAVQgqA/AAAsIAAATgAhdiAQgMgigJgOIgGgVQgEgNgMgEIgCgXQgBgMgQgDIgGhzIAPANIAJAOQAGAIAHAEQAFARAKAIQAGAGASAeQAKAPAJAKIAKAJQADAQAMAKIAIATIgIAFQgIgFgCAAQgEAAgBALIgEAwQgEAcgHAUQgLgQgLgfgAvpiNQgCgagGgJIAAgGIgIggIgJgEIAAgWQAMAMAGgDQAFgDAJgYIACgOQAQgEALgPIAQgYQAGgDgBgIQgBgIAGgCIAAAAQAJgCAJgMQAKgOAGgDIABACIgPCEQgQAGgGAQIgIAcQgKAMgJAaQgJAbgKAMQgMgLgCgYgAjHljQgFgXgRgPIAAgCQABgIgFgJIgMgSIABgHIAHgGIAXAUQgBAFAHAIQAJAJAAACQADAHALAIIAQAKQgEAEgCAFIgGALQgEAPgHAFg");
	this.shape_1803.setTransform(344.7,574.4);

	this.shape_1804 = new cjs.Shape();
	this.shape_1804.graphics.f("#208911").s().p("AASADIguAAIAAgBQAlgJAQAHIAEADg");
	this.shape_1804.setTransform(661,599.7);

	this.shape_1805 = new cjs.Shape();
	this.shape_1805.graphics.f("#4BAB39").s().p("AWEGXQABgdAFgPIACAAQAFAEAAAHQABAMABABQABAEACAQgEgt+AGXQgCgQgGgRIAHgMIAHgBQAHAHAAASQAAAOAFAHgEAtEgBYQgHAIgBARQAAAKgFAGIgDAAIAAg9IAKgNQAFgHABgIQABgfAHg+QAOgyAAgzQAIgGgCgHIgGgNQAKgJACgPIADgaIANANQADBTANAxQgQAmARApIgfBDIgkBGg");
	this.shape_1805.setTransform(524.5,559.3);

	this.shape_1806 = new cjs.Shape();
	this.shape_1806.graphics.f("#078A2C").s().p("AgSABIAPgSQAIgMAOgBIAAAjIgBADIgPAXQgRgSgEgMg");
	this.shape_1806.setTransform(858.9,538.9);

	this.shape_1807 = new cjs.Shape();
	this.shape_1807.graphics.f("#49AA3A").s().p("EAjwAAdQAFgLAAgRQAAgRAVgBQABAKgHAQQgCAMAGAIgAk7AdIACgbIACgFQAFgCACgLQABgHAFgEIACAAIADA4gEgkJAAdQAFgKAAgPIgCgfIAIgBQAAANAIAMQgKALADAQIACAFg");
	this.shape_1807.setTransform(642.1,597.1);

	this.shape_1808 = new cjs.Shape();
	this.shape_1808.graphics.f("#4DAC39").s().p("AgRBNIAAgOQAIgMgBgUIAAgfQAJgOgBgXIgBgmIABgBQACACAFAJQAEAIAJAAQABAJgIAEQgKAFABAHQACAEAHAJQgBAiAIA+g");
	this.shape_1808.setTransform(892.1,592.4);

	this.shape_1809 = new cjs.Shape();
	this.shape_1809.graphics.f("#4AA432").s().p("AgcBFQAfgbgfgdIASgpQAKgZAMgPIARA+QgGAIgPAfQgLAagRAKg");
	this.shape_1809.setTransform(18.4,597.4);

	this.shape_1810 = new cjs.Shape();
	this.shape_1810.graphics.f("#108447").s().p("EgoEABgIgBgdIgIgvQgEgcAIgSIA1hhQAHAKAKAeQAIAZAMAMIABAUQgHAGAAAJIAAAQIgGA2QgDAhgGAUQgDgBgHgJQgGgGgGgCIgBAAQgCgCgEgMQgEgKgKACQgMABAAAKIACAOIAAAaIgBABQgJgKgBgSgEAoNgAZIACgBIAAABg");
	this.shape_1810.setTransform(382.7,602.7);

	this.shape_1811 = new cjs.Shape();
	this.shape_1811.graphics.f("#4AAB3A").s().p("A9MHvIgDgFQAKgCACgIQABgBAAgMIAAg7QAJgbAAgxQABg2AFgXIAIAAQAFBEAOA3IABAEIACAHIANBqgEgl0AHvIADgrIAJhTQALgqgDhVQAPAGAEATQAGAVAGAGQgJAJAAANIADAYQADAYAMBSIAEAxgAGeEzIABgUIAJg5IAAgQQACgIANgCQABAhABAPQADAbAKAVIAAAHgAGKETQABgNgBgHQAGADABAGIABAKIgCATQgHgHABgLgEAlAgDuQgJgIgDgOIgFgWIAAgCIAKhyQAJgOgBgUIgCghIABgdQAIAEAAAMQABANAIADQAAAAAAABQABABAAAAQAAABAAAAQgBABAAAAQgCAYACALQABASANANIgBAXQABAOAGAHQACA0AOAeIgmAug");
	this.shape_1811.setTransform(322.2,569.3);

	this.shape_1812 = new cjs.Shape();
	this.shape_1812.graphics.f("#48A739").s().p("ABnAfIACgDQAFgLAAgPQgCgcABgEQALAJACASQADAVAGAIIgCAFgAh6AfQAAgZABgHIgJgEQABgCAIgJQAHgHgBgHIAGAAQAGANALAlIAEALg");
	this.shape_1812.setTransform(60,615.7);

	this.shape_1813 = new cjs.Shape();
	this.shape_1813.graphics.f("#4E981A").s().p("AgHAGIADgGIADgFQAEAFAFAGg");
	this.shape_1813.setTransform(63.6,618.3);

	this.shape_1814 = new cjs.Shape();
	this.shape_1814.graphics.f("#CFD923").s().p("AgNGpIAWgrIAKgMIAIAHIgIAlIgDAGIgEAFgAgFkuIAEgBIAAAAIgDABIAAABgAgVkzQgMABgBgKQAFgQAQgaQASgdAEgMIASgZIAHAAIABAHIgCAGIgIASQgHAPAAALIgGAOIgJAfIgIAUQgCgFgOAAg");
	this.shape_1814.setTransform(61.6,576.3);

	this.shape_1815 = new cjs.Shape();
	this.shape_1815.graphics.f("#B0C923").s().p("AgKAJIAIgTIANgFIgBALIAAABIgMATg");
	this.shape_1815.setTransform(64.6,612.4);

	this.shape_1816 = new cjs.Shape();
	this.shape_1816.graphics.f("#579C11").s().p("AASBLQgjgrgJgZIAAgCIABgKIAVgkQALgVALgMIABABQgCAiAKA0QgBAEABAcQABAPgFALIgDAEg");
	this.shape_1816.setTransform(68.3,611.3);

	this.shape_1817 = new cjs.Shape();
	this.shape_1817.graphics.f("#3C8410").s().p("AgFAKIAFgTIAAAAIAGAAIAAATg");
	this.shape_1817.setTransform(801.7,599);

	this.shape_1818 = new cjs.Shape();
	this.shape_1818.graphics.f("#1D8511").s().p("A4yAuQgBgJgDgGQgDgJgHgGQgBgaAIgMIALgWQAHgOAMgIIAmBLIg6BHIgDgigAYkA6IgTgXIgIgOIgBglIAgg4IAPgGIAAgBQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAAAJQABAVAEApQAFAtgDAZQgBACACAFQACADgEADQgOgGgMgPg");
	this.shape_1818.setTransform(213.8,533.6);

	this.shape_1819 = new cjs.Shape();
	this.shape_1819.graphics.f("#40A22C").s().p("AgHA3IgCgDQgLgSgCgGIAOglIAPgBIALASQAHALgDAJQgHAHgEASIAAACgAAHgnQAAgJAHgGIABARQAAAJgIAGIAAgRg");
	this.shape_1819.setTransform(288.7,594.6);

	this.shape_1820 = new cjs.Shape();
	this.shape_1820.graphics.f("#189B65").s().p("EAn6AAnIAJgWIghAWIgGAAIAAgIQARgSAFgTQAHgDAFgPQAFgMAMgCIAYA4IAAAAIgGAVgEgocAAnIAAgBQgKgSABgOIAAAAQARARAUgLIAHAAQACAGAMASIABADg");
	this.shape_1820.setTransform(541.8,596.2);

	this.shape_1821 = new cjs.Shape();
	this.shape_1821.graphics.f("#218F12").s().p("A+kBxQgJgDgQAAQgPABgIgEIABgCQACgRACgwQACgoAHgXIABACIAAATQgBANAGAAIAggCQASgEAJgMQADADABAJQABAHADAEIAABUIgGAHQgJAIgLAAQgGAAgHgCgAfKAtIgnAAQAFghAAgsQANgZABgoQABgMAGgFQANAbADAQQADAZgKAUIAAARQABAIAEAEIACACQgBASAIAOQgCAEgBAEg");
	this.shape_1821.setTransform(375.1,595.6);

	this.shape_1822 = new cjs.Shape();
	this.shape_1822.graphics.f("#468C15").s().p("AgCAyQgMgPgMgEIACgfQAIgLgBgWQAAgTABgKIACgIIApBGIAAAkQgCATgGAPIgBABQgJgFgLgQg");
	this.shape_1822.setTransform(827.4,521.8);

	this.shape_1823 = new cjs.Shape();
	this.shape_1823.graphics.f("#72AC3A").s().p("AwhH6QgGgigIgWIgBAMIgBAAQgGACAGAAIABAAIgHAqIgiAAIgFgmQAJAFAFABQAHAAACgKQAYgcAOgkIAHgFIAABvgEghRAH6QgCgVgBgWQAOgTgcgGIAlhOQAogNAHgrQAJABAHgJIALgLQAOAKgHATQgGAPAAAVIAAAkQgPAQgJAYQgHANgHAdQgLAOgJAYgEgkvAH6IAYhqQAJAJAAAOIgBAZIAAA6gEgyhAH6QgEgdABgVQgQAEABARQABASgIAFIAAhdIAIALIAWAgIALATQAJALAFgEIAFgMIAPgPQAWALAAAbQgIAKgDAJgEAyXAE+QAPgSAGgPIAPgHIgEAogEAhoAE+IAZghIABAAQAGAPABASgAvgE+IAZghQAGARACAQgEgySgAzIAihmIgEgBIgXAgIgCAAIgPh4IgLhPQgKACgBALQAAAKgGAEIgCgEIAAhLIAHAKIAiA0QAJAKAEgEQACgBAEgLIAOgOQAWALABAbQgWAWAJAdQAGASAPAhQgMAUgDAeQgBARAAAiQgCALgKANIgSAWgEglDgCRIAAgNIAGgdQACgRgBgMIAAgCIAlijQAJAJAAAPIgBAYIAABLQgBAsAHAeIgGAFIguAtQgGgEAAgHgEAgugDSQASAPAGAXIAAACQAAALgCAJQgDAFgDAFQgQgiAAgkgEgiPgE+QAEACAHAIQAIAEAEgOQAOgJAKgVQAPgbAEgGIATgOQAHgKgKgMIAAgDIAEgGQAlgKAFgpQAKABAHgIQAJgMACgBQAOALgHATQgGAPAAAVIAAAkQgZAagNA5QgYAjgMAwQgKAKABAPIAAAAQgHgQgDgkQgEgkgHgSQgGAGgCAGIgBAOQgDAMgGAzQgEAmgJAYgAxek6QAKAHAEgBQAHABACgLQASgVAGgMQANgUgHgSIAKABIAACUIgOhOIgNBCQgGAlgBAcQAAALgCAFQgCAIgJADgAf2jIQABgJgJgsQgHghALgVQAjghADgjIACgIQAKAKAGgGIAIgLIApg5QAZgiAVgWIgFB6QgMgGgDAGQgCAEgBAGQgLAYgVAwQgKAJgCAQIgIAgIgPAZIgBAAIgSh1IgMA7IgGA4QgDAggMAWQgFgcAAgHgEAqPgCvQgHgsgZgzQgMgZgmhEQgCgKgNgSQgOgTgCgJQACgHABAAQADgCAEAFIApAsIADgjIABACIABACQAEAGgBAQQgBARAKAIIATAaIAqA5QABAGALgBIgBAPQgBAKgEAFQgFAIABAeQgBAXgPALIgCgCgEAwugC5QgGgFgDgBIgQh/IABAAQACAAAHAKQAFAIAJgMQAMgJABgPIAfgnQARgYABgVIAMgOQALgBAFgKIAVgZQAMgOAFgOIAMgHQAEAugRBAIg1CAIgWAsQgJgOgFgeQgDgggIgNQgKAvgKBIQgCAIgDAAIgBAAg");
	this.shape_1823.setTransform(326.3,568.3);

	this.shape_1824 = new cjs.Shape();
	this.shape_1824.graphics.f("#289A13").s().p("AgWCzIAAAAIABgbQADgJgIgLIgLgTIAAgMQAIgGAAgJIAAgQIAAgUQgCgKgGgIQAugFADgeIACguQAAgbgHgUQgKgRADgXIAHgqQAHAEACAKQgBBAAMBdIADAmQgOAHAIAMQALANgEAFQAAAHgBAKQAAALAIAFQgCAMgPAWQgNAVgBAOIgHAJg");
	this.shape_1824.setTransform(293.2,582.2);

	this.shape_1825 = new cjs.Shape();
	this.shape_1825.graphics.f("#238F13").s().p("AgvA/QAHh5AIgqQAHAHACAKIAAAEIgDAXQACAJADACQACABAKgBQAFAAAJACQAIABAAgLQAAgFABgDQACgGAFgCIAGBBQACAQAOgLQAGACAAAKIgHAMQgFASgSAWIgdAkQgigEgDgig");
	this.shape_1825.setTransform(433.2,521.7);

	this.shape_1826 = new cjs.Shape();
	this.shape_1826.graphics.f("#C8EEFB").s().p("AosFBQgVgKgJgBIhIAAQgpgDgcgQQgHgFgGAGQgFAIgEACQgjAUgFgaQgCgNgIgFQgHgEgPgCIiGgZQgVgFgGgCQgMgIAFgQQAEgNgWgFQhBgMgTgCQgigEgOAUQgHAKgfAFQggAEgNgGQgKgEADgFQADgIAMAAQAWABALgEQAQgGAIgRQADgHANAEQAQADAHgDQgLgMgNgJICVgGIHaAAIgBAFIEsAAIg8AGIgMACQgHADgCAFQgBAGAGACQAJADABABQAKAMgHAKQgDAGgQAJQgOAJgigFQgngGgPAOQgQAOANAdQAEAJgGADIgNAEIhfAQQgRABgBABQgCAWgOAAIgFAAgAt1DTIgdAHIAZAMQAQAJALgDQALgEgIgKQgJgLgOAAIgDAAgAG2B/IgGhtIAAAAIAHBtgAVAg+IAAAAIAhBxIgCABgA1blAIABAAIgFAYg");
	this.shape_1826.setTransform(627.9,60.4);

	this.shape_1827 = new cjs.Shape();
	this.shape_1827.graphics.f("#A5CD8E").s().p("AgGgHQAGgFAJAPIgIAGQgOgKAHgGg");
	this.shape_1827.setTransform(299.9,475.7);

	this.shape_1828 = new cjs.Shape();
	this.shape_1828.graphics.f("#90C16E").s().p("AgLgKQALgBAEAFIAIAKIgIAHg");
	this.shape_1828.setTransform(780.8,476.2);

	this.shape_1829 = new cjs.Shape();
	this.shape_1829.graphics.f("#56B148").s().p("A4mCPIgDgDIgDgBQAIgEAAgNQABgMAEgEQAGAagMAOQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAgA4XBlIABgUQAKANgDAZQgIgHAAgLgAYdhsIgBgZIACgMIANABIACARIgBAZg");
	this.shape_1829.setTransform(199.8,500.3);

	this.shape_1830 = new cjs.Shape();
	this.shape_1830.graphics.f("#9FD5A0").s().p("AgGgLIANAAIgCARIgKAGg");
	this.shape_1830.setTransform(432.9,486.2);

	this.shape_1831 = new cjs.Shape();
	this.shape_1831.graphics.f("#B2DDB7").s().p("AgFAKIgBgPQACgIALgCIAAAfg");
	this.shape_1831.setTransform(502.6,477.6);

	this.shape_1832 = new cjs.Shape();
	this.shape_1832.graphics.f("#51B043").s().p("AgGAiIAAgxIACgDIgBgCIABgBIALgMIAAAlQgGADAAAMQgBALgFAEIgBAAg");
	this.shape_1832.setTransform(586,489.1);

	this.shape_1833 = new cjs.Shape();
	this.shape_1833.graphics.f("#6EAA38").s().p("AAWG0IgNgdIgJgbQgGgNgLgBQgLgBgGAPQgIAWgDACQgGgEgBgIIAAgNQAagcAJAAQAJAAAYAdIANALQAGALAJACIACABIABAAIAGASIgIAUIgJALgAAWlZIgkhLQgNAHgHAOIgLAXQgGgFgBgIIAAgNIAigjQAIAFANASQANAPANAEIAEAMQADAGAJABIAIAZIgRAZgAAVmsIADgaIADABIACABIAAAyQgIgKAAgQg");
	this.shape_1833.setTransform(58.9,569);

	this.shape_1834 = new cjs.Shape();
	this.shape_1834.graphics.f("#93CF91").s().p("AgGgLIAFgGQACgDAFABIAAABQABABAAAMQgGADgBAIQgCAKgDADIgBABg");
	this.shape_1834.setTransform(56.7,487.4);

	this.shape_1835 = new cjs.Shape();
	this.shape_1835.graphics.f("#82C67E").s().p("AgHAHIgBAAIAAgYQAGAAACAIQACAHADACIAAAAQAEADAAAFIAAACIgEgKIgBASg");
	this.shape_1835.setTransform(120,486.9);

	this.shape_1836 = new cjs.Shape();
	this.shape_1836.graphics.f("#569C13").s().p("EAidABFQgSgugQgYIAFgYQAFgOAKgHQAOAHAQAbQAPAWARAIIAAABIgQB6QgJgRgXg3gEghbABrIgPglIgFgUQgDgLgIgHIhSifIACgHQACgEAEgBQAgAgAmAvIBABTIAAACIgPBsIgBAAg");
	this.shape_1836.setTransform(299.9,512.3);

	this.shape_1837 = new cjs.Shape();
	this.shape_1837.graphics.f("#72AD40").s().p("AgKgGIAIgHIANATIgDADIAAABIgGAEg");
	this.shape_1837.setTransform(301.1,477.3);

	this.shape_1838 = new cjs.Shape();
	this.shape_1838.graphics.f("#5B9F1A").s().p("AgZgdIgQgkIAFgEIAAAAIAEgEIBCBFIAIAMQABAWgKAsg");
	this.shape_1838.setTransform(305.6,485.3);

	this.shape_1839 = new cjs.Shape();
	this.shape_1839.graphics.f("#599D16").s().p("AgoAFIBKhQQAEABABAEIAAABQACACAAAFIgHASIhCB4g");
	this.shape_1839.setTransform(713.4,485.5);

	this.shape_1840 = new cjs.Shape();
	this.shape_1840.graphics.f("#7FB451").s().p("AgIAMIAAAAQgCgEgDgCQAIgRATgHQgEARgQAUQAAgEgCgDg");
	this.shape_1840.setTransform(718.2,477.3);

	this.shape_1841 = new cjs.Shape();
	this.shape_1841.graphics.f("#579D16").s().p("AgWgJQgBgNgMgSQgNgXgEgJIAIgGIBHBOIAKALQAGADAJgDIABAYQgQAEAAARQAAATgHAEg");
	this.shape_1841.setTransform(786.6,484.6);

	this.shape_1842 = new cjs.Shape();
	this.shape_1842.graphics.f("#4A9013").s().p("AgLBXQACg2gQhDQAQgFAKgRIARgbIAHgDIABBOIgEARQgCAJAFAHQgPAGABAMQgBAGgGAMQgEALACAIIgHAHg");
	this.shape_1842.setTransform(854.6,517.5);

	this.shape_1843 = new cjs.Shape();
	this.shape_1843.graphics.f("#259015").s().p("AgEANQgdglgMgYIACgYQAOAPAWgCQAsgGgGAnQgBAIABAGIAHAKQAEAIgDAPIgBARQAAAKAFAGIADAMIgIAHQgKgQgggsg");
	this.shape_1843.setTransform(838.3,523.9);

	this.shape_1844 = new cjs.Shape();
	this.shape_1844.graphics.f("#4AAC3A").s().p("AAGgYIABAeIgKAPQAAABAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgEgWAPgbg");
	this.shape_1844.setTransform(837.6,487.5);

	this.shape_1845 = new cjs.Shape();
	this.shape_1845.graphics.f("#90CD8E").s().p("AACAMQgCgLgFgDIAAgVIALgEIAAA3QgDgEgBgMg");
	this.shape_1845.setTransform(897.7,487.9);

	this.shape_1846 = new cjs.Shape();
	this.shape_1846.graphics.f("#299B13").s().p("AgHClIgXgpIgFgVIAUkLIAAAAIAMAMIAnEOIgCAIIgOATQgCABgKALQgGAIgIAAIgBAAg");
	this.shape_1846.setTransform(120.7,504);

	this.shape_1847 = new cjs.Shape();
	this.shape_1847.graphics.f("#289B12").s().p("AyTBgQgGAKAAAUQAAASgHAIIgIgIIgKgUIAAkuQACgIAHgEIAWB6IAYDRQACALgBAWIgFAoQgIhMgMgqgAhSBxIgBgFQAAgCgHgFQABguAHg+IANhsIAEgvIAGgQIAPAHIAEAOQAAAJADAEIAQCvQgGAIgCAKQgBAHAAAIIACAiQAAAFAFAMQABAJgPABIgcACQgNgBgEgNgAR+BPIgBgWQAAgQgIgEIAQivIACgHQAGgUAAggIACgBIAAgBIgBgBIgBgBIABAAIALgMIACAKQgBAYAHAQIAAABIASC0QgJAGgBAMIABAUQgBAHABAPQgCALgTAAQgTAAgEgKg");
	this.shape_1847.setTransform(362.3,507.2);

	this.shape_1848 = new cjs.Shape();
	this.shape_1848.graphics.f("#2A9D14").s().p("AAgCsQgNgKgMgWQgPgcgGgGIgCgGQgCgCgEAFQgBACAAAHIgIAAQgBgqAIhKQAJhUABggIAAgDIAHgwIAMAGIACASQgDAdAJATIABAQQgDAhAJAYIAAAAIABABIACA9IAGAWQADANgDAKIAEBbg");
	this.shape_1848.setTransform(502.8,495.9);

	this.shape_1849 = new cjs.Shape();
	this.shape_1849.graphics.f("#239012").s().p("EBCBABnIgNgUQAAgLAFgcQACgPABgLIgBgOIAQh1IANAMIADAlQAQBCgCA2QAAAUgCAKQgDARgLALQgPgBgJgKgEhCoABoIAAh9QACAFADAEIAKBwIgIAOIAAAAgEhCogBDIAAAIIAAANg");
	this.shape_1849.setTransform(426.9,520.5);

	this.shape_1850 = new cjs.Shape();
	this.shape_1850.graphics.f("#249312").s().p("AUTHMIgBgoIACgeIAAgCQAFgOABgIQACgMgIgKQAGgCABgNQACgKALgBQADAIgBAYQgBAVAJALIAAATQgCAOAGAfIADAOgEAhXgD7QgJgIgDgGQgLgUgLAAQgJAAgKARIgEAAQgHgOACgWIAAgDQACgfgEgMIAJhRQAIAEAAAQIABAWQAEALATAAQATgBACgLQgBgPABgGIgBgUQABgMAJgHQAKA1AEBeQgDAJACAXQABAWgGANgEggqgEJQgPgRgIgFIgiAiQgIgOAAgXQADgagBgNIAAgBQAHgaAEgoQADgcABgjQADADABAEQADAFAAAGIAAAQQABAGgBAMQAAAKANAEQANADAKgHIAFgEIALgKIAKBrIgDAZQAAAQAHAKIAAAHQgMgEgNgPg");
	this.shape_1850.setTransform(268.4,554.1);

	this.shape_1851 = new cjs.Shape();
	this.shape_1851.graphics.f("#299C13").s().p("AgkCrIgBgsIAgkPIABgBQADgDABgJQACgKAFgDIASCCQAJBJAEA4IgLAKIgFAFQgLAHgMgEQgNgDABgKQABgNgBgFIAAgQQgBgGgCgFQgCgEgCgDQgCAjgCAcQgEAogHAag");
	this.shape_1851.setTransform(56.6,503.9);

	this.shape_1852 = new cjs.Shape();
	this.shape_1852.graphics.f("#71AC3A").s().p("EhASAJLIAAgKIgBgtIAAgUIACgTIAPANIgBAOQAAAHAIAFIAHAyIACAFgAi/GQIgCgGQgEgQAKgMIAfAgIABACgAjUGQIg6huQABgJAHgDQAGAFAPASQANAPALAHIAPATIACAgQgBAPgFALgAztGQQABgSAHgQIAbAigEgz5ABgQgJgUgKgIIgHgXQgBgMAHgKIAIgSIAAgBIARgrIAGAIQAZAfgJAfQgCAOgBAhQAAAegHAQQgFgHgMgVgAxYAZQAAgGgGgCIAahaIgYAZIgDACQgFgGgCgLIgWitIgGAAIgDAuIgNgPIAAgMQAAgIgGgFIAAABIgCgFIABAIIgKA0IgVgkQgCgRgQgcQgQgegEgPQgUg2AHg/QAGgBACgGQADgIACgCQgCAbAZAiQAhArAGAQQAEgFABgNQADgKAFgCIgBAdQAAAQAQAKQAOAqAYAXQAJgCAIgKIANgNQARAOAGAXQgbAYAKAdQAEARAVAhQAFAGgCAKIgDAQQgRgEAAAJIACAOIgHAyQgHAagXAQQgDgDAAgGgAhMjvIgGALQAAABgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgCAHQgFALgIAFIAAgaQAIgFgBgOQAAgOAIgFIAJAMIAHANQAEAFAHABIADABIAIAAIgCAIQgCAEABACQADAEAIgHIAWgYIAVAmQgFACgCAEQgMAJgCATQgCANAKASQALAZACAGQgPARABAeQABAPgPgFQgDgPgKAMIgQAWgEg8ggCPQgBgLAAgmIAlgtIAABgQgKAHgEANIgJAYQgLgTgCgbgEAu0gDDQAAgMgHgEIgTg0QgLgggQgSIgJhqIACgCIA9BMQAHATAPAHIAlA6IAJAUQAGALAMACQAOACAFgWIAHgBQAMAMADAFQAFAKgFALQgBAKgGADQgJgNgHAFQgLAGgMAAQgFAAgQgEQgCgWgKgKQgEAGABAUQAAAQgIAIIgKgrQgCADgEAZQgDAPgLAHQgIgEAAgMgEA/IgEKQgJgXgNgLQgIgGAAgKIABgRIgBgrQgBgagHgSQgHAFgBAOQACAOgJAFIgphHIgCAIQgCAKAAATQACAWgIAMQABgugBgXQgDgqgbgaQAWAFADgJQAEgIABg3QAMAMABAOQgJArABAFQABAaAeAPQABAKAPAOQAPAPABAKIAHABQAAAEAEADIAIAEQANAZAdAlQAhAsAKARIAIASIAAANIgCABQgggFgaAeQgGgIgKgcg");
	this.shape_1852.setTransform(431.4,560.1);

	this.shape_1853 = new cjs.Shape();
	this.shape_1853.graphics.f("#299C14").s().p("EgigAIWIgCgBIAAgTQAKgugDgeQAJgJAAgQIgBgbQAHgjgKghQAIgDABgGIACgLQAHAMAAAUQgBAcABADIgCAeQAAAQAKALQANALAYgEIgBBZIAAABQgKAVgVADIgHAAQgNAAgVgFgEAiXgCjQgFAAgEgKQgBgGAAgJIAAgQQgBgWAAAAQgFgKgVADQgRADgBgWIABgSQgBgKgHgGQAIhVAGgpQAHhDANgzQAAgFACgDIACAXQAAAgAFAQIABAFIARESIABAKQADAEAGABIADAAQgFAKgGAAIgBAAg");
	this.shape_1853.setTransform(696.8,539.6);

	this.shape_1854 = new cjs.Shape();
	this.shape_1854.graphics.f("#269911").s().p("EA8uAIuQAIgTAAggQgCgtABgGQAKgbgDgXIAKhJQAFgrABgfIAGgZIABgnIAEgGIAAFuIgpA1gEA1jAIWIAAghQgBgQAGgfQAGgggDgQQAGgFABgIIAAgNQgCgMAEgdQAEgbgGgPIAGgTQADgLgBgIIAAgBQAHgPADgYQAEgiACgIIADgBIAEABQgBAaAGA7QAFA3gCAeIAFAOIACANIAAAaQgCANADASIAGAgIAAAaIAAAfQgHADgdADQgQACgKAGgAPKIWIgFgDQgQgIgmAKIAAhHIAQglQAIgJAIgNIAOgZQgLACgHAHIgKALIgCgDQgCgwAJhRQAGgMACgkQACggANgQQgCAOAEAVQAGAbAAAIIACAnQACAYAEAOQAEAKAAAgQAAAaAKAPIgBAsQgBAVAGAQQAAADADADIAAABIAAACQgGAPgBAdgEA1cAH7IAAACIgDAAIADgCgEg9TgCrIAAgCQAJiaAajKIAEgwIAAgBIAJgcIAJAUIABADIAdEMQABAJACAnQgDAEgBAJQgLAUgkgKQgTgGABgTQACgYgIgIIAAAnQgBA8gOAwQgGgIAGgJg");
	this.shape_1854.setTransform(567,546.7);

	this.shape_1855 = new cjs.Shape();
	this.shape_1855.graphics.f("#289B13").s().p("ATpDdIAAheQABgIgCgEQgCgGgLABQgxAHAKgsQADgKgKgGQAOgUAAgZQAAgPgIgeIASiqIABAAQADgDABgGQACgHAGgBQACAdALBRQAKBEABApQgCAtAHAqQAMA9gSBKgAzVCNIgcgiIgCgwIAAgEIAgjnIACgDIADgMQACgKAHgGIAHAjIAAACIARDpIAAACIgKAcIgdAtIAAADgAwfBfQgKgCgEAAQgKABgDgBQgDgCgBgJIACgXIAAgEQgCgKgHgIQACg+AViTIAPANIAEAUQAAAJADAGIAJDBQgFACgCAGQgBADAAAFQAAAKgHAAIgBAAg");
	this.shape_1855.setTransform(539.2,507.8);

	this.shape_1856 = new cjs.Shape();
	this.shape_1856.graphics.f("#299C12").s().p("AAPDIIABgfQABgSgCgGQgEgLgZAPQgSALgTgBIgBhOIAik1IAMAPIACAfQgDAXAHALIACAjQgCAYAGAOIABACIAABFIAAAEIAEgCIAkgiIAFAFQgkAqABBBQAAAmAHBKIABApQgLgKABgTg");
	this.shape_1856.setTransform(862.3,500.7);

	this.shape_1857 = new cjs.Shape();
	this.shape_1857.graphics.f("#279A12").s().p("EBFQACCQgGglAJgcQAEgQgCgOIgBgBIAai7IAAAAQAEgGABgKIABgQQAGAFACAKQABAMAEAEIARDhIAAADQABAPgLAVQgNAagCAIIgdAzQgJgsgDgVgA48B2IgEhAIAYi1IABgBQAHgQgCgRIACgRIABgBIAKgPIAJBHIADBLQgIAqAOAvIAAAXQAAAOAGAKIgZAtQgOAagGAVIgGACQgJgbgDglgEA9IAClQgBgGABgIQAGgngtAGQgWACgOgPQAHhvAXibQABAAAAAAQABAAAAgBQAAAAAAgBQABgBAAAAIALgQQAMBEAJBYIAPCbQACAPAAAdIgHgKgEhGRAB5IAAgYIAAgNQADACADABIgBArQgDgEgCgFg");
	this.shape_1857.setTransform(450.2,506.1);

	this.shape_1858 = new cjs.Shape();
	this.shape_1858.graphics.f("#279912").s().p("AyjDyQgHgGgBgKQACgLgBgGIgJiXQgIAXgGArQgGAqgIATIgBAAIABgRQABgLgJgFQgGgEgKANIgfg3IABgBQAIAAAIAHQAIAHAJAAIANi7QAIgNgCgXQABgKAAgmQAAgdAHgSQAEgMgQgKIAFgGQAFAAACgIQACgGAGAAIAIBHQAUCfASDqIgJATgAzYDSQgBgQAKgJIAAAAIAAAaQAAAQgIAJgATnA3IAOifIABgCIAPhkQABgLABgGIAAFoIgpA2QABg3AIhRg");
	this.shape_1858.setTransform(831,510.2);

	this.shape_1859 = new cjs.Shape();
	this.shape_1859.graphics.f("#228F12").s().p("EAgzACeQgFgHABgMQABgRgEgGIgLATIgQgGIASgZQAKgPAAgOQgWAXgPAGIgJgNIAMiwIAAAAQAEgHABgMQAAgPACgFQAHAGAAAKIgBARQABAWASgDQAVgDAEAKQABABAAAVIAAAQQAAAJACAGQADALAGAAQAGABAFgLIAJgLIAIAGQgRAfgFAVQgGAcAMAaIAAAHQgIAHAAAMQABARgBACQgIgJABgXQAAgXgLgKQAAAQgFAeQgGAbgBAPIgDAAgEgg2ACKQgBgNgEgFIgKAPIgmgmQAQgXACgmIACgpIACgVIASh9IAIAAIAGA5IABADIAGAhQAEARACAnQABAiAGAUIADAMIgBAAIgQBaQgGgEgBgMgA09A+QADghgHgUIAGgJQAIgRACgYQADgmAEgNIAAgBQAAglAPgbIAQCAIAIBRIgZAkQgMANgOAIIgMAFIAFg0g");
	this.shape_1859.setTransform(704,523.5);

	this.shape_1860 = new cjs.Shape();
	this.shape_1860.graphics.f("#EDF9FC").s().p("AiUApQglgEgWADQgHABgDgEIgEgIQgCgEgDgRQgCgMgGgHIgBgBIgJABQgBABgGgGIAAgBIAAgUQAVAAAbgEQAUgEAeABIAzABIEuAAIAcABQAPACAJAJQAAA4gLAKQgLAKhBAAIj9AAIgDAAQgRAAgogEg");
	this.shape_1860.setTransform(267.2,487.4);

	this.shape_1861 = new cjs.Shape();
	this.shape_1861.graphics.f("#BBCF25").s().p("AAAATIgQgIIgGgFQAAgTAWgZQAOAEADADQAIAEgCALIAAABIAAAPIgBAGQgHAHAAAKQgBAFACALQgCgMgOgIg");
	this.shape_1861.setTransform(397.6,550.3);

	this.shape_1862 = new cjs.Shape();
	this.shape_1862.graphics.f("#7FAF2B").s().p("AgVAwIgQgsQAIgHAUgfQAMgVANgMIAGgFQAOAPACAYIgHAHIgZAwQgPAeABAVg");
	this.shape_1862.setTransform(191.8,565.9);

	this.shape_1863 = new cjs.Shape();
	this.shape_1863.graphics.f("#C0D225").s().p("AgFAiIgThCIABgBQAGACAGAGQAHAJADACIAXArIADAFg");
	this.shape_1863.setTransform(132.8,615.4);

	this.shape_1864 = new cjs.Shape();
	this.shape_1864.graphics.f("#72AC39").s().p("AwkHJIgNgZIgCgFIgIgTIgzhkIACgBQALAGALAOIAVAXIA7BGIAXAlgEghTAHJQgEgHgFgEIAIglIANgUQAJAZAkArgAyLE5IAOgTIAOAGIAAAGIAAAAIgHAGIgNAHgAv9jpIgIgTQgNgogfg4IgKgZIgkhGIAAgBQAAgIAHgEIAXAaIAcAfIAJAGQAAAOAPAGQADAKALAQQAOARADAHQAHAXgEAcQgCANgJAngEgg2gEDIgCgMQgFgHgKgaQgIgWgOgJQABgLAGgPIAIgTIACgGIAzBAQAEASgGAhQgIAjACAQgEAg4gEXQgNgbgMgRIgJgNIARgrIAAAAIAIgBQALAJAMATQANAXAHAHQALA4gZAgIgUgtg");
	this.shape_1864.setTransform(277.6,573.1);

	this.shape_1865 = new cjs.Shape();
	this.shape_1865.graphics.f("#179A65").s().p("AgRAUIABgDQAGgXAKgNIABAAIAKAbIAHAMg");
	this.shape_1865.setTransform(392.9,598);

	this.shape_1866 = new cjs.Shape();
	this.shape_1866.graphics.f("#399B39").s().p("AdTBZQAAgLgMgRQgLgTgBgJQAKgOgCgSQgBgKgHgWQAOgJABgRQgBgSACgKIAAgDIAWAAIAAABIAdAxQAPAdAIAWQgdAdgQAiIgJAJQgFAEgGAAIgBAAgA+UA5IABAAIgBABIAAgBg");
	this.shape_1866.setTransform(421.2,557.3);

	this.shape_1867 = new cjs.Shape();
	this.shape_1867.graphics.f("#49AA39").s().p("AEbGiIAHg6QAGAIACAQQACAOAEAGIAAACIAAAMgA91GiQgBgSgHgQIgBABIAPgUIABAAQAEAIACASQACARAHAIIAAACgA9phdQgSgUgKgQIAAgOIAGhfIAEgsIAGh5IAGgNQANAggHAdQgCAIABADQACAEAJABIAAAmQgBAYAHAOIACANIANB5IABAgIAAAmIgggigAeGg8IhKhSIAAgyQARhUgDg2IAThXIAKAMIAAABQACAGgBAeQgBAWAJAOIADA5QABAiAFAWQAEAMAAAlQAAAeAJASIAAA+g");
	this.shape_1867.setTransform(735.8,558.3);

	this.shape_1868 = new cjs.Shape();
	this.shape_1868.graphics.f("#4BAB3A").s().p("ALlGiIgBgUQAIgEgBgMQAAgMAFgEQAEAIgBAVQgBAOAFAJgA0OhZQgPgUgPgHQABgJgCgDQgCgGgMAEIgBgaIAIg+QAAgPAFgnQAGgigDgUIACgEQAFgQADgWIAFgqQAHAEADAIQADAMACACQgCAaAJAgQgCALAIAbQAFAZgDANQAEBMAMAgIAAAaIgCA5QgKgHgTgXgAONh6QgGgMgNgBQgLgBgHAKIgLATIgBgXQgFgDADgJQABgJgEgDIAAAAQAHggAFgsIAGhNIADgOQAHgFAAgKIgCgQIABgFIAAAAIABgmQAAgOANAHIAAABIAJBqIAIBsQgDAPAFAbQAFAdgBAMQgCgCgIgQgATxh7IABhBQAHgGAAgJIAAgQIAFhAQAGhHANguIABgBIAFgQIAYC+QgEAdARAeQgIAKABAQIAAAWIgEABQgjgZgdAVg");
	this.shape_1868.setTransform(635.2,558.3);

	this.shape_1869 = new cjs.Shape();
	this.shape_1869.graphics.f("#4CAB38").s().p("AtNB4QADgRABgWIAGhQIAAgjQAAgVAGgPQAHgUgNgKIAOgTQACAJAAASQACAPAMAJQgJATAEAdIAJAuIAAAdQACARAJALIAAAAIAAAIQgCAGAAAIIgBAPgANDhCIAAgCQAEgSAHgHIgBAaIAAABg");
	this.shape_1869.setTransform(206.3,606.8);

	this.shape_1870 = new cjs.Shape();
	this.shape_1870.graphics.f("#EEF9FC").s().p("ADZDLIARhEIAehaIAJgRQAEgKgCgKQgJAEgFAHIgGANIgrA/IgBAAIgRjpIABgCIAAgKQACgrAOgKQAOgLAyAFIAhADQATADAMAIIAAAYIgBAfQgVCSgCA/QgIArgHB6QgLACgEgHQgCgFgEgEQgEgEgEACQgKAGARAKIAVAhIgIAKgANeDeQAAgXgGgJQgEhdgKg1IgRi1IABgVQABgMgIgHIgCgKQADgOARgCQA0gGBpgCQAJgBACAFIADAKQAOgKgEgbQgFgbARgPIAABBIAAADQgBAhgJBUQgIBKABApIgIASQgJAFgNAWQgLAUgRAEIgGg5IgIAAIgTB+QgVAcgfA/QgJgKABgVgAuqB4IgjgrQAFgIAEgKIAFgTQANgWgCgOQgIAEgEAGIgGAMIgZAhQgZgOgEgdQgBghgFgQIgDhLIABgkQAAgmAIgJQAIgIAtgNIAHgEIAHgGIA7BoIgBAiIgVDMQgCABgCAIQgCAHgHABg");
	this.shape_1870.setTransform(398.3,504.6);

	this.shape_1871 = new cjs.Shape();
	this.shape_1871.graphics.f("#EEF9FD").s().p("AWkFyQgDgKgDgCQADgMgBgQIgDgcQgEhigJgxIgPh/IgBgcQgBgOgFgKIgBgEQADgPgHgWQgOAWADAcQgTB7gDBPIgCAZIgLAlIgZjDIAAglQgMALgCAMQgCAHABANIgVCSIgPgfQgMgtgTgZQgKgjgVgdQgOgiguhDQgDgRgXgNIARAmIAdBVIABAEQgBANAJAYQAIAaAAAMQgQAMgTAVIghAkQgJgIABgRQABgQgEgHIAAgBIgBAAIgBgCQgKi0gdjBIAAgmQADgMAMgBIK8gBQAUAAAGALQACACACATIAAAAQgYBKABBkQAHAhgYAhQgOATgkAhIgDAKIgNAHIgPhoIgHAAIgIA9IgCAAQgHgDgGgFIgIgPQhChXgvgwQgJgPgMgDQgCAOAOAMQBYCpAiBYIgMANIgzA1QgFAGgDACQgFACgGgGQgEgVgSgdQgIgigWgeQgMgfgWgkQgKgRgggwQgEgNgKgDQgFAJAKAPIAlBsQAAARAIAXIAOApQgIAHgGgEQgEgIgDgCQgHgOgMgCQgCAKANANIAdA1QAQAfAIAYQAGATgNAUIgWAkQgbAlgLAbQgHgBgCgHgAt3FGIgSieIACgZQAJgMgBgSQAIgNAEgcQAEgdAGgMIAehUQAOgTgDgPQgNAFgFARIgyBQQgeAwgMAjQgVAigSA1QgSgLgXgZQgZgegOgLQA8iLBEh7QAIgHACgEQAEgGgDgHQgNADgGANQg4A7g7BPQgEAEgGAMQgHAJgKACIgIg6IgIAAIgPBnIgPAAIgIgyIAAgTIAAgTIAAgJQAAgFgGgCQgFgBgBAEIgBAHIgBAfIAAASIgPCGIABAOQgBAJgOAAQAAhjgQhfIgQiwIABgbQABgQgIgKIgCgRQAGgPASgEQAHgCAZABIHrgBQAWAAAIAHQAKAIgHASQgCAGABAKIABANIAAADIggDoIgHAYQgSgFgOgRQgSgXgGgFIgMgMQgIgHgLAEIBHB/IgOCvIgGAaQgHAEgBARQgCAPgMADQgYgaABgeQgBgVAJgTQAPgTgEgOQgGgCgEAEQgEAFgEAAQgCgEAAgLQAAgKgFgFIgajMQAEgVgLgLQgKAMAEAUIgCARQgWA6gMBaIgaC4IgBARQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgFAAgLgJgAsLhDQACAJAHADQAJABgCgGQgCgEgGgFQgIABAAABgAjWFIQgBg8gGgYIAJgmIAPgYIAJgJQAEgFgGgEQgGgEgJAPIgJAKQgFAFgHgLIgDgwQACgRgBgEIAAgKQgCgGgHACQgHACADAPIgDAdIgNgMQAAgOgGglQgFggACgSIBUilIAQgYIAIgLQAEgHgEgJIgSATIgOATQguAuhFBdIgGAKQgFAFgIgIIgGg2QgKAXgGAxQgHAugLAXQgWAbgOAmQgFAEgHARQgFANgNADQACgDgCgDIgBAAQgDgNAIgZQAJgYgGgOIAGgMQAHgEAEgIQAEgIADgEQAOgNgHgEQgFgEgFAEIgGAJIgOAUQgOALgCgRIgGhBIgKjAIACgpQAAgXgHgQIgDgGIABgSQAagIAkAAIA/ABIEzABQAQAAACAJQACAGAAALIAAAAIABABIABACIgCABQgKALABASIABAeIgQCwIgJBQIgKA0IgKhFQABgvgLgfQgKAKAEASIAAARIgOABIgHgbQgHgKgBgVQgBgVgHgJQAAgIgCgGQgDgIgMgGIAADgIABAMIgIBSIgJAfIgMgWIgPBYIgPAMQgGAIgCAIQgFACgDAAQgFAAgDgEgAm4kTQgBAFAJgBIAFgFIgFgDQgGABgCADgEg3CAD7IgYikIBEh+IAKgLQAEgHgCgIQgQAIgEAKIg2A4QgKgdgHg1QgJg/gEgUIgIg5QgEgagGgTIAAgDQAAgFgEgDIAAgBQAAgKACgDQAEgFAOgDQAegEArAAIBJABQBsgCDaACIAcgCQAQACADASQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABABQAEABABgBQAXgIAFALQAEAFABARIAAABIgEAvQgaDJgJCbIgEADQgFgBgDgCIgFgKIgTglQgMgWgMgOIgQhqIAAgNQACgRgMgCQgEgBAAAFIABAJIgCAmQgDABgCAJQgBAFgFADQhEhfg4g5QgHgLgEgEQgHgHgMgEQAJAbANANIA+B6QAiBGASA3IgBABQgPAKgVAaQgXAagQALQgFgJAFgKIAKgRQAOgLgEgOQgQAKgCAJIgPALIgQggQgCgNgLgUIgSgeQgKgbgUgiIgmg6QgIgRgIAGQgIAGAQASIAuCRQAAAYAOAjIALA3QgBADgJAIQgHAIACAGQgEABAAADQgSARgSAdQgJgJgCgNQgBgRgCgIIgMhbQgIg2gLgkIgOh5QgPA9gLBPIgPCOIgBAAIgXgSIgFACIAOAfIACAEIAKAwQgEASgaAUgA/BEiQADghgKgyIAdg6IACgCIAQgXIAIgIQADgFgGgFQgIgDgHAPIgOATQgIAKgFADQgHAIgJgTQgGhjgVhjQgZCTgDBDIAAACQgGARgBAWQgBAJAAAhQgSAkgSAOIgHgTIgBgSIAAgUIgBgKQgBgGgIABQgHABADAQIAAAiQAAAWgIANQgYgigFgIQgOgZgBgWIgCgmIgBAAIAAAAQABgQAJgOQAIgMgKABQgMACgBgCQAAghgGgtIgLhNQADgagLgVQgJAKADASIgBALQgJAQADAcIgSCNIAAAAQgKgEgKgLQgMgPgEgCIgGgKQgFgFgIABQgBALAMAKIApBLQAAAGgKAKQgJAJABAHQgGADgKAOQgJAMgJACIAAAAQgKgsgPgaIAAgtQgBgbgFgTQABgWgCgLIgYjRQADgZgJgtQgKgxACgWIABAAQAFAHADANQADAQACAFIAEAIQADADAHgBQAWgDAlAFQArAFAQgBID/AAQBBAAALgKQAKgKABg5QAMAGgDANQgDAOACAGIABACIgCARQgIAFAAALIACARIgYC2IgCAHQgGAUgCAfIgEA8IgLBhQgJA1gTAoQgLAMgGAEQgDADgDAAQgHAAgHgPgEAqqAEgIgtgyIgCgGQAAgGgJgHQgKgHgBgGIAmhFQANgMgCgMQgMADgIAOIgiAlIgJgXIgBgCQgGhngWhaQgPBUgDAXQgJA8gCAvIgFAMQgIgFgQgTQgNgRgOgEQgHgOgPAAIg9hLIg4hLQgPgdgTgUIAAASQgKAEADAGIAHAKIAkBJIACAZQgDALAGAUQAFAVgBAKQgMAKgVAbQgTAZgPAKQgSjqgUifIBEh5QAQATAYAIQAUAFAeABIHqgBQAfAABAgGIA1BZIgBAmIgWDcQgLgRgDgdQgEgtgCgKQgKArgGA+IgKBjIAAAAIgdgZIgPgMIAQhFIAnhvIgJgDQgkAzgKAXQgaAkgMAhIgUAmQgKAUAAASQgMAMgIATIgJAiIgHAEIgYi+IgFAPIgBgFIABAGQgOAugFBIIgTAOIgZjRIAAgjQgQAMADARIgYDKQgKAJAAAPIACAbQgBAMACAaQAAAXgPAOIABABIgBgBgEA9zAENIgZjdIACgIIAmhuQglAkgoBLIglBAIgBABIgEgIIgBgpQgHhJAAgmQgBhBAkgrIgFgFIglAhIgDgCIAAhEIABgUQAAgMgGgIIgCgjIABgSQAAgKgHgHIgCgeIAAgBIACgUQAIADABAFIgBAIQgCAZAPAPQAPAOAeAAID0ABIAYAAQANACAFAKQgCACgBADQgFAIgBALIAAAaIADACIAAABIgDgDQgFAEgBARIgeCwIgFAFQgDACAAACQgTCUgDBUIgBAMIgjArQgFAHgDgBIgFgIIgDgDIgBgvQAAgTgDgOQgBgJgDgGQgCgygOhmQACgWgHgOIgBgBIAAgBQAAgHgCgFQgCgJgJgIIgZDpIgKBxgALhDRIgHg3IABgcQAAgQgFgMIgBgMQACgOgCgvQgCgkAKgXQAOgOAJgZIgfATIAAg5QAPgKgOgGQgIgCAAANIgIAfIgQA/QgDAMgMAOQgHAIgPAQIgHANQgVAWgZAhIgpA5IgIAMQgHAGgKgLIgUgpQgMgYgOgQQgIgYgGguQgGgwgGgYQgKAdgCAlQgQgHgQgYQgQgagNgIIgBgMQAAgIgLgBIhGhOQgCgBgDgKQgCgIgIABQgGAAgBAGIgBAJQgGABgIAOQgIAKgNgEIgCg9IABgeQABgSgJgLIAAgQIABgYQABgOgJgKIgCgRIABghQAKAJACAQIABAZQAEAlArgGQA9gHBbACICXABIF3gBQAXAAAkAHQAOADAFAHQAEAFABALIAAABIABACIgDACQgJAUABAgIACA0QAAAxgGBKIgKB5IgBABQgJgEgHgIIgNgOQgIgPgGAFQgGADAEAFQACAEAGAFIAVAhIAIAMQgBAEADABQAFAagJAsIgCAAQgKgRgXgsQgUgmgRgVIgQh/QgPAaAAAlQgKAAgGgHQgEgKgEgEQg4hNg+hCIgHgLQgFgGgKADQACANAMAIQAeA3AkBLIA9CBQAHAVgDAgIgFA1QgGAFABAJIgIASIgOAJQgRgQgFgQIgHhWIAAgIQgCgDgIAFQgMAIgCgNIgBgNQgBgJgEgFQAAAAABgBQAAAAAAgBQAAAAgBgBQAAgBgBAAIgCgdQgCgRgHgOQgIANADAPIgBAdQgIAWACAtIgKByIgBABQgZgagMgkgEBGlAEKQgGgJgBAAIgHiLQAOgaARgsIAchGQAegtArhiQg8A2gtBAQgJAHgMATQgLASgKAHIgDgBIgGg4QACgLgGgEQgNANAEAPIgKBPIgBAAIgKgMIgSBXIgtBJQgMgaAGgdQAFgUARggQAOgLgCgPQgRAIgDAMIgJALIgCAAQgHgCgCgEIgBgKIgSkQIACgbQAAgQgHgKIgDgYQAKgKATgCIAfgCQAkgHAuAAIBSAAIBtAAQBAAAAsALQAKADgBADIgDAFIgMB4QgBAIAEAJIAAACIgOCgQgIBRgBA2QgDAIgDADQgCAFgGADIgCAAQgIhWgNgvQgBgegMgqIgThIQABgPgOgFIAADFIgCAkIACANIgKBGIg7g+QgFgNgSgGQADAEADAKQADAHAGAEIAOAdQgQALgEAKIgHAGIgMhbIgCADIgCABQgGADAGgDIABACQgFAKgCANIgEAdQgKAKgGAZQgMAxgGAPQgEAJgCAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBgEBENgECQAHAIACABQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABgHgKgDgEgsoAEIQAAgcgHgMIgBgSQADgcgIgYIAAgRQAAgKgJgFQAJgYgCggQgFgmgBgUIAAh0Qg0CNgGCHQgEAPgMAEIgKh/QgCgmgBgJIgdkLIAAgDQgBgSAIgHQAJgJAagDQBIgJBtACQCbABAZAAIAABiIgYAgQgpA5gWAoIghAtIgyg/QgcgigYgXIgcggIgGAFIAaAoIAQAiQAKAUAIANQAfAxAFAhQAIAtggAnIgPAfQgHAFgEAKIgGARIgEAHIgCAMQgQAbgOAsIgNANgEg7CAEEQggheg7hZQgHgUgGgwQgGgugKgcIgKBKIgBgCIhAhSQgmgwggggIgPgSQgJgOgFADQgFAEADAFIAIAIIAPAXIABACIBSCeIgGA4QgDAjgMAWIAAgLQAAgGgHgEIgKBUIgOgLQgGgKgEgEQgHgGgMAGIABgIQAAgFgHAAIgKBNIgIABIgUg1IgEg4QAGgXgKgOIAAjFIgHAAIgDASQgVA2gNBIQgGAggMBgIgBAAQgIgJACgWQACgWgLgKIAAAAQADgygHhCIgPh2IgRiDQgEgTANgIQALgHAXAAID3AAIC0AAQAvgCBcAQIAAAZIgUELIgqg6IgGgOQgFgHgLgCQAGAeAKAMIAcBaQAAAIAHAXQAGATgHALIgEAGQgQAJgVAaQgVAZgQAKQggg5hEhFQgEgNgPgFQgDAMAPANQABAEAOAXQAJAQgBANQgDAAgGgEQgFgEgDADQADAJAgA3QAWAnAEAcIgJAGIgDABQgEAAgEgDgA1wDuQgIgegQgbIAAgKQABgGgHgDIgJgUQgFgMgJgGQgFgEgBgMQgBgMgGgEQgJgXgDgDQgagkAZgrQAQgdA5hwQAQgNACgSQgPAGgLARQg4A9g4BJIhyifQgIgQgQgTIgdgiQgBgDABgDIABgUQAAgMgXAFQABgOAUACQBKAIB0gBQCcgCAhACIAnAAQAWABANAMIgCAMQgHAIAAAMIACAVIgEAvIgNBsQgHA/gBAtIgPCYQgJgFgFgOQgDhxgriLQAAgRgOgLIAACyQgEAtgDALQgCALgFA8QgEAqgLAagEgsxADuIAAAAQABgBABAAQABAAAAABQAAAAAAAAQAAAAAAABIgBABIgCgCgEA1FADCQgNgygChTQAEgTgFgYQgKAGgCAJQgCAEACALIgDAbQgCAPgLAIQAAgIgKgMQgKgMgCgGQgMgUAFgXQADgOAOgZIBDiEQALgKgBgKQgSAHgDALQgXAWgbAgIguA5IgGAMQgGAFgKgHQhEh6hahjIgBgZIADgNQADgHALACQBKAFB2AAIC+AAQAKAAAUACQAWABgDAUQgaCbgKCSIgGALIgGgBQgBgKgPgPQgQgOgBgKIgXhYQAAgOgMgMQgBA2gEAJQgDAJgWgGQAbAbACApQABAWAAAuIgDAgIABAMQgJAsACAiIgYAmgAeoC5QgBgHgCgEIgEgyIACgTQgGhGgDiMIgEANIgBAAIAAABQgrB6gDBiQgIgHgEgJIgDgTIgcibQgBgpgKhEQgLhQgCgeQA1gVAaABIEggBQAMAAAaAHQAXAGAPgCQAJgBAAAKQgCAQABACIgFAHQhbB5hCBsQhKhcgpgrQgJgOgMgGQgBAPAOAMIAdA3QALAXAXAsQAUAnAHAdQgVAegJAbQgSAbgGAXIgbAnQgSAWgSAPgEA/BADGIAAgBIADgBIAAAFIgDgDgEBB5AB0QgEgIACgMQAEgSgBgDIAviPQgNAGgHAJIgLAQIgLAUQgFAKgKAEIgFgCIgSjhIAAg5QAagOAoADIBEAFQAPAAgFAVQgMA3gQCWQgBAQAAAXIABAnIAAAAIgMCwgAYjC2IADgCIgDADgEA4sACbIACgQQAAgLgGgGQAEgPgFgJQABgdgCgPIgQibQgJhYgMhDIgBgfQANACAYgJQAYgJANACIBwAHQASABACAMIgCAUQgIApgFBCIgJBrIgRAbQgLARgQAFIgCgkIAAgQQgBgIgJgGQgHAGAEALIgRB1QgOARgQAgQgSAjgKANgEhKqACnIgJhyIABgqQAGgNgCgTIgFghIgGgzIAAjDIALgBQGBAABuACQAYgBAGACQASAFACATIAAAfIgfEPQgKgJgBgUQgCgXgGgJQgGAIgCAOIgCAXIgFAxQgDAfgHASIgXghQgGgRgDgdQgEgjgDgLQADgZgKgOIgBgDQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAgBABIgFAbQgEAEgBANQAAAMgIAEQgdgugYgZIAAgJQgBgFgHgBIhEhJIgSgZIhXBjQgGADAAAMQgNAKgNASIgWAgQgHAJgFgDIgHgLIgEgsIgHABIgUB+QgRATgNAhQgGACgCAGIgCAKIgTAZgA/OCMIAAgBIAAABgEAmSAAqIACgBIgCABgAQgjUIABAAIgBAAg");
	this.shape_1871.setTransform(479.8,513.8);

	this.shape_1872 = new cjs.Shape();
	this.shape_1872.graphics.f("#BCEAFA").s().p("EBCkAEhQh0gCi7gBIkvgCQgsAAAKggQAJgkgxgCIiGAAQARgNAbgaIFaAAIgCgEIHeAAIHgAAIghguIAiAAIAACnQk2AAjfgDgEBJ7ABXIgSgZIBQAAIAAAZgEhBygA+QgagBgRgKQgegRgqAIQgQADgYABIgqAAQgbACgCgOQgBgMAKAAIASgBIAOgFQghgbgtgFQgggEiegKQgMAAgZgJQgYgHgOAAQgEABgFgDQgFgDABgEQAEgVgOgDIgegCIgCAAIAAg8QAiAGAbgIQAfgJANATQALAOASACQAOACAQgIQASgIAPACQALACARAKQARAMAKgCQAggEAwAKQBGASAGAAQAKACATAAQAQACAJAGQAOAKAUAAIAlAAQARAAAcgMQAbgMAPAAQAyACBKgSQBhgYAYgDIAzgJQAegFAVgCIApgCQAZgCAQAAQAQAAAAgKIAAgGIMLAAQALAFALACIAdADQAPACAngJIAPgDQAPgBALABQAHABAHADQARAGAcAEIAuAGQAgAFAsgIIgXAoQhXgHiEgDQi6gFg5gDQi3gKjZAQIhRAHIhRAIQhUAHhBAWQAAAFAEACIAGADIAMAEQAHADgBAGQgBAEgFADIgLAEQghANgyAIQg4AGgcAEQgdAGgBABQgKAGAPATQAFAGgCAGQgDAGgKABIhOAMQgvAHggACQgZACgOAAIgFAAg");
	this.shape_1872.setTransform(480.4,57.3);

	this.shape_1873 = new cjs.Shape();
	this.shape_1873.graphics.f("#BDEBFA").s().p("EAlfAGCQgiAAgZgHIgbAAQgRABABgLQABgKAQAAIAcABQAagDA0AEQAtgBAbgWQACgCAEgBIAHAAQAYAIAkgEIA7gEQAuAAA+AGIBrAMQAzAGBbgMQBjgMAqACQAOAAAdgHQAcgGAMABQAkADAxgOQBCgUAPgCQAagEAzgMQAtgJAhADIAqgBQAbgBAQACQAMACAYgFQAQgDgDgKQAAgIgSAAIhDAAQgQAAgFgIQgFgFABgOQAAgDAHgHQAFgGgFgGQgygEiNACQh5AChHgKIBHgjQAqgTAlgFQgTgYgfABIhpAAQgVAAgFgOQgCgDADgDQADgDAEAAQALAAAPgDICxgFIACAGICGAAQgbAZgRANICGABQAxABgJAkQgKAhAsAAIEvACQC7AAB0ACQDfADE2AAIAAC9MgkeAAAIgoABIgUAAgEhK5AAdQDjgFDVgCQAOAAAqgIQAjgIAWAFQAfAHA4gEQA9gDAaAEQAMACAYgHQAagGALABQBdAHCogKQCzgJDsgCQA4AAAggOQANgGAHAEQAgAPAtgFQAWgCApgGIAOgDIAXgBIDagBIgpBIIgHAAQiFAFhBgBIgJAAQhYgBhjASIgZADIgYAAIAAAAIAAgBQgDgLgKgBIgTAAIi0gBQhrAAhIACQipAEj8AYQgJgCgKAAQgWAAgUAGQglACgsABIiLABQg2AChkAIQhpAHgyACIhWADgEg18ABWIgPAAQgIgCABgIQAAgHAJgBQAEgBALABICQAAIABAAIAAAAQgEASgYAAgEguwABKQArgMA0ALQgSAGgaAAQgXAAgcgFgEgzpABEgA9wAfIAZhMIADAAIgZBMIgDAAgEhDJgEaQgUgBgOgJQgJgHgQgBQgTgBgKgBQgGgBhGgRQgwgLggAFQgKACgRgMQgRgKgLgCQgPgDgSAIQgQAIgOgBQgSgCgLgPQgNgSgfAIQgbAIgigFIAAgZIGLAAIAbACQAKABAXgDIBNAAQATADAIgBIAMgCIHuAAIAAAGQAAAJgQAAQgQAAgZACIgpADQgVABgeAGIgzAJQgYADhhAXQhKASgygBQgPAAgbALQgcAMgRAAIgbABIgKAAgEgqKgFuIgugFQgcgEgRgHQgHgCgHgBIC+AAIgJAQQgbAFgXAAQgOAAgMgCgEgtSgF4IgdgDQgLgCgLgEIB4AAIgPACQggAIgQAAIgGgBg");
	this.shape_1873.setTransform(480.4,66.9);

	this.shape_1874 = new cjs.Shape();
	this.shape_1874.graphics.f("#B5E8F9").s().p("AikACIgCgCIFKAAIAAgBIADAAIAAADg");
	this.shape_1874.setTransform(943,28.3);

	this.shape_1875 = new cjs.Shape();
	this.shape_1875.graphics.f("#BBEAF9").s().p("EBKYAFaIgcgnIA+AAIAAAngEhK4ADNIHOAAQB2AABQgLQAVgEAdAEIAyAHQAqAFBBAAISFAAIgtBRIjaABIgXABIgOADQgpAGgWACQgtAFgggPQgHgEgNAGQggAOg4AAQjsACizAKQioAKhdgHQgLgBgaAGQgYAHgMgCQgagEg9ADQg4AEgfgHQgWgFgjAIQgqAIgOAAQjVACjjAFgEBJqAEaIhEhgICUAAIAABggA9WEOIAdhaIADAAIgdBaIgDAAgEBFtgBFIm/AAImbAAImyAAImlAAImuAAImvAAImkAAImsAAIm2AAInwAAIgBAAInbAAIoFAAIm1AAIm5AAIgBAAImUAAIm5AAIi+AAQgLgCgPACIh4AAIsLAAInuAAIgnAAIhNAAIg8AAImLAAIgBAAIAAkUMCVwAAAIAAESIAAACg");
	this.shape_1875.setTransform(480.3,35.3);

	this.shape_1876 = new cjs.Shape();
	this.shape_1876.graphics.f("#B8E9FA").s().p("Eg9WACKQhBAAgqgFIgygHQgdgDgVADQhQALh2AAInOAAIAAi9IACAAIAeABQAOADgEAWQgBADAFADQAFAEAEgBQAOgBAYAIQAZAJAMAAQCeAJAgAEQAtAFAhAbIgOAEIgSABQgKABABAMQACAOAbgCIAqAAQAYgBAQgEQAqgHAeAQQARAKAaACQAOAAAegCQAggCAvgIIBOgMQAKAAADgHQACgFgFgGQgPgTAKgGQABgCAdgFQAcgEA4gHQAygGAhgNIALgEQAFgEABgDQABgGgHgDIgMgFIgGgDQgEgBAAgGQBBgVBUgHIBRgIIBRgIQDZgPC3AKQA5ADC6AFQCEADBXAHIh8DagEBIlAB3Ii3j9IFLAAIAAD9gA86BwIBSj5IABAAIhQD5IgDAAg");
	this.shape_1876.setTransform(480.4,42.1);

	this.shape_1877 = new cjs.Shape();
	this.shape_1877.graphics.f("#C9EDFB").s().p("EhBZAE8QgZgIgkABQgnACgVAAQgWAAgJgGQgMgHAEgUQAEgQgWgCImuAAIAAj5IALgBQAdgEANABQByADBPgKIAUAAQAOAAAeAMQAaAGAUgSQABAAAGABQAHADABACQATAcAoAFQAWACAuABQA6ALAugTQAPgFANAFQAQAGgBAHQgBAJgPAAQgVACgHAJICSAVQAeAEAEARQAHAYgZASQgRANgdgIQgJgCgBgJQABgKgBgEQAAgYgbAAQghADAAAVQABAOgQAbQgOAaADAQQABAHgKAEQgKADgLgBQgbgDABgSQgBgNgCgGQgFgIgPgBQgQAAgEAJQgDAGAAAOQAAANgPAJQgTALgDAEQgDAEgLAHQgHAHADAIQACAGAKACIAQADQAVAGAdgBIAzgBQAXABALAEQASAEALANQgMANgRAAQgJAAgKgEgEhEogADQgagJgpAAIlOAAIAAhgILQAAQAeAAA7gGIAJgCQAHgCACgHIAAgSQgEggAnAEQARABAkgBQAQgBAIAEQAKAFgCAOQgBAQARAAIA0gBQAegBAWgEQAUgEArgOQAmgIAdAQQAJAEALgEQALgFAAgHQABgSAKgDQAHgCATAFQAPAEAVgJQAZgNASAIQAkAOAxgJQAbgFA2gOQAsgFBZgOQAsgGAlgDIA1gEQAWgBA+gIQA0gHAeABQAaAAArgEIBDgHQAUgBBigHIAABUQgzAGglAKQgUAGgxAJQgtAJgZAIIgJADQgngEhBAOQhIAQgdAAQhFgCgiAAQg9ABh8AOQh5AOg+AAQg1ABgvAVQgtAUgigcQgOgLgXAEIgoAHQgIgBgOACQgQADgHAAQghgBgRABQgdABgUAOQgEAEgRAAIiIAAQhPACg6AEQgqADgaAFQgjAIgaAQQgNAHgRAAQgPAAgQgEgEBKkgAyQgUgGgIgYQgEgRgQAFQgPAEgXAAIglgBIgNAAQgKAAgCADQgUASgIABQgNACgJgaQgCgFgKAAQgMACgFgBQgdgCgsADQg9AFgLAAQgbABhEgKQg7gIgjAEQgGABgiABQgYAAgOAEQgOAEgWgHQgXgJgJABQgsADhmgGQhdgFg1AFQgjAEg2gEIhagHQgkgEgTAAQgfAAgXALQgFACgVAAIhYAAQg0gBgkgKQgQgFgYAEQgcAGgOABQhsALhKgMIgKAAQhWAFiSgJQiogLhAABQgjAAhggHQhUgGgyACQiRAKiugUQg4gGhfAAQhugCgpgCQhMgGgvAGQgRACgegMQgfgNgRABIgRgCQgLgCgFACQg7ALg/gNQgegFgpACQgvAEgXABQgnABhNgJQgagEg8ABQg4ABgfgGQgQgEgkACQglAAgSgCQgtgIhFADIhyAEQgQAAgagFQgegHgNAAQiLgKhQgEQh6gGhiAAQhaABgygCQhPgDg8gKQhTgOh/AQIgLAAQiogNjigBQkHAEiDAAQgfAAg8AGQg8AFgfAAQhJAAhWgMQgWgDglAFQgrAFgRgBQg0gDgxAMQgyAMhBAAQggAAhUgGQgQgBgngBIg0gCIgDAAIABACQADAFAKADQALAEAAAHIgFAEQgmgHg1AGQg6ALgeAEIgeAEIAAhMQAfgCArgHQBMgKAlAAQBhAECXgJID5gOQAbgBBHAEQA9ACAkgDIAjgBQAWgBANgDQAcgHATAMQAMAHAPABQAOABANgEQAegMApABIBIAFQA6ADB2gDIBWADQA0ACAhgDQAXgCA6AHQAzAHAegGQAKgCAJADQAKADABAKQADAWAPgCIAagKQBEgbA3AQQARAFAEAAQAbgCBZAHQBHAGAsgJQAHgCATAGQAUAGAbAAIAyAAIBXgDQAzABAkAMQAQAFASgCQBTgLCEAOQA/AGBCgCQA8gCCAAKQB5AIBCgDQAQgBAJAKQASASAegMIAPgHQAJgDAHACQA+AIBzACQB6ACA1AGQASACArgDQAogDAVAEQA2AJBaAAQBwgBAgACQAZACBOABQBCABAnAFQANABAXgDQAYgEALAAQCegBDmADIGEAGQGAAFD0gBQAcAABagEQBJgDAtABQDeAIFPgBIItgBQAaAAASAIQASAIAHgEIAGgCIAACDIgJABQgGAAgGgBg");
	this.shape_1877.setTransform(480.4,182.4);

	this.shape_1878 = new cjs.Shape();
	this.shape_1878.graphics.f("#C6EEFA").s().p("EhK5gDYQAWAEAbABIBQgCQAaAAAJAGQAIAEACAKIgBAAQg6A1AABMQAABJA6A1QA7A2BUAAIABAAIgBAIQABBLA6A0QA7A2BUAAQBTAAA6g2IAFgDQAIAKALAKQA6A1BUAAQBTAAA7g1QA7g1AAhLIAAgGQBOgDA3gyQA7g1AAhKQAAgygbgoIAOAAIBNAAQATAAAOATQANARAPAAQAQAAAHgSQAEgOAKgDQAGgDAQACQAbACA2gBQAwABAiAIQAfAIAdgFQAigEAWgXQANgMAWALIAIAFIAJAGQAHAIgFAIQgHANAGADQAEADAPAAIBAgBQAkACAaAGQAUAHBKAIQA6AFAgASQAKAGAPgCQAzgHA6AGIAAGqQhiAHgUAAIhDAIQgrAEgagBQgegBg0AIQg+AHgWACIg1ADQglAEgsAGQhZAOgsAFQg2AOgbAFQgxAJgkgPQgSgHgZANQgVAJgPgEQgTgFgHACQgKADgBARQAAAIgLAEQgLAFgJgFQgdgQgmAJQgrAOgUAEQgWAEgeAAIg0ABQgRAAABgPQACgPgKgEQgIgEgQAAQgkACgRgCQgngDAEAfIAAATQgCAGgHADIgJABQg7AHgegBIrQABgEBKaAHHQgSgIgaAAIotABQlPAAjegHQgtgBhJADQhaADgcABQj0ABmAgFImEgGQjmgDieAAQgLABgYAEQgXADgNgCQgngEhCgCQhOAAgZgCQgggChwABQhaAAg2gKQgVgDgoADQgqACgTgCQg1gFh6gCQhzgCg+gJQgHgBgJACIgPAIQgeAMgSgSQgJgLgQABQhCAEh5gIQiAgKg8ACQhCACg/gHQiEgNhTAKQgSADgQgFQgkgNgzAAIhXADIgyAAQgbgBgUgFQgTgHgHACQgsAKhHgGQhZgHgbABQgEABgRgFQg3gQhEAbIgaAKQgPABgDgVQgBgKgKgDQgJgDgKABQgeAHgzgHQg6gIgXADQghADg0gCIhWgDQh2ADg6gEIhIgEQgpgBgeALQgNAEgOAAQgPgBgMgHQgTgMgcAHQgNADgWAAIgjACQgkADg9gCQhHgEgbABIj5AOQiXAIhhgDQglgBhMALQgrAGgfACIAAmCIACAGQAFAPAUAAIA8AAQgGgKgJgCQgFgBgMADQgOABgBgMQAAgJALgBIAegBQARACAJAJQAGAHAYAOQAUAKAGANQAGALAcgDQA8gIBmACQB4ABApgCQAogCA0AHIBaAPQAQADACAJQAGAiAkANQAIAEA6AMQADABAHgBQAGAAADABQAmAOAYgBQAfgDAYgaQAIgHATAEIAfAHICLAAIAYAAQANADAHAJQAFAJgKAIQgOALAAADQgCAEgQAJQgNAGAFALQAGAMAPgEIAZgGIIkAAQAXABAFADQAJAGgUARQgJAIAFAHQAFAHAQgDQApgHAXAYQAGAHAMABIAVAAICxAAIAMAAQAHACADAFQACADgDAEIgHAGIgKAJQgGAGAGAFQAKAKAYAAIDNACIASACQAMADAGgBQAjgCAwAGIBSAOQASACAIgCQAOgCAMgMQAKgNAUAAQASABARAMQAKAGAFACQAIADAGgHQAMgMAVgBMBGEgABIAACcIgGACIgGABQgHAAgMgFgArGEEQAMAHADABQAJADAIgFQAJgFgIgGQgHgEgIAAQgKAAgIAJgA5CCOQgKAFACAIQACAHAKAAIARgBQAJgCASgIQARgGAJgCIg6gFQgJAAgHAEgAt2gMQgTgNgdgDIg0AAIhgABQg4gBgngBQjJgEhigEQgPAAgpgKQgjgKgXADQgYACgMADQgYAGgLADQgTADgQgPQgCgDgMAAQgKAAgIADQguAQg3gFQgkgEhAgSQgRgFgZABIgrABIg1AAQgeACgXAJQgQAHgcgIQglgMgIAAIhqgGIhDgEIAAgkIjWAAIAAAWQgggBgmgCQhigJgygCQgIAAgCgLIikAAQgXAAgBgKQgBgHAHgEQAGgGAHACQAlAGB/AKIAFAJQAMgBAaABQAWgBAEgYIADgIQABgDgGgDQgTgMAMgdQADgKAOAAQAIAAAOABIekgBQH5ABCRABQATAAAygKQAqgIAaAEIAjACQAXAAANADQBUAXBOg0QAGgDARACQAOACAKgKQhhgQgwgKQhUgPg3gXQAmgMAoABIANAAQAHgBgBgIQAAgLgRACQgdACghgKIg6gTIgSgGQgJgFABgIQABgKALgEIAWgGQASgEAhABQAqAEARgBIgSgNIEHgKQANAJALALQgHAEgQgEQgNgEgDAIQgIARgQAGQgLAEgWgBQgMAAgDAHQgDAGAKAEQANAGAggEQAfgFAHgKQAOgUAiADQATACBBANQAWAFgEANQgFAQAMAHQAGADAVAEICGAaQAPACAHAEQAIAFACANQAFAaAjgUQAEgCAFgIQAGgGAHAFQAcAPApAEIBIAAQAJAAAVAKQASAFADgaQABgBARgBIBfgQIANgEQAGgDgEgKQgNgcAQgOQAPgOAnAFQAiAGAOgJQAQgJADgGQAHgKgKgMQgBgCgJgCQgGgDABgFQACgFAHgDIAMgCIA8gGIC+AAIAAgFIAkAAQAOABARgBIGSAAIAAgNIABAAIABAVIHiALIFBgGQgaABgLADIgRABQgLABgFAIQAJAEAPAAIAXgBQAFABALgBQAIABABAHQAAAHgIACIgPAFQgLAFgQgCIgcgDQhxAFgfADQgUABhrAEQhOAEgxAJQg4AIhZgKQi8gXh4APIgMAAIgLABIkrAGIgTABQgOADAAAJQAAAIAMADQAQAFAJAAQAeAEAAASQAAANgLAAIgUAAQgYAMguAIQg2AJgSAHQgQAFgEAFQgHAIAEAMQADAGAHAMQAFAMgMAKQgmAgghAAQgdAAgcAHQggAGgSgMQgQgLgKALQgJAJAHAPQAGANAUgIQAKgDAXACQAXACAKgEQAMgDAEAJQAEAIgKAMQgRASgpAKQgmAKgegDIhCgGQgmgDgfAHQhmAVhOgaQgMgEgQADIgbAEQg/AAhdADIibAFIj+AFQgUAAgBAEQgGATgUADIgjgBQghACg0gGQhAgGgUgBQgmgBhGAAIhsgBQg4gBgqATQgOAIgdAAIhdABQg4gBgngBQhGgCh8AUIgWACIgDABQgKAAgGgEgAg/hTIAKADIAKgIIgLgEgAMdhuQgHABABAHQABAKATAAIAKAAQAGgCABgFQgCgLgQAAIgNAAgAHnhiQAKAGAIAAQAIgBAMgFQgLgGgIAAQgJAAgKAGgACrhgICBAAIAAgFIiAAAgEhDagCrQAKgEAKABQgGAHgFAIIgJgMgEguogCuQgRAAgBgJQgBgKAQAAICSAAQANAAAAAIQACAJgQACgEgxmgC3QgSgEACgLQACgHAGgBIAOgBIApAAIAAABIAtAAQAJABAEADQACACABAEQgBAFgCADQgDAFgJABQgaACgWAAQgZAAgUgDgEgzkgDGQAAgJAJAAQAOACACgCQAGACAMgCQAIABAAAIQgCAIgIACQgEABgOAAQgYAAABgLgAJJleIgZgMIAdgHQAQgBAKAMQAIAKgLAEIgGAAQgJAAgMgGgEAjmgFiQAigIAXAJQgLAGgOABQgNgCgTgGgEAsrgHvIgJgiIACAAIAJAiIgCAAg");
	this.shape_1878.setTransform(480.4,118.5);

	this.shape_1879 = new cjs.Shape();
	this.shape_1879.graphics.f("#D8F3FC").s().p("EglLACpIAAlRMBwHAAAIAAFRgEhK7ACpIgBjZIAGAAIAAh4MAiVAAAIAAFRg");
	this.shape_1879.setTransform(480.1,315.5);

	this.shape_1880 = new cjs.Shape();
	this.shape_1880.graphics.f("#C1EDFA").s().p("ACCGaIhSgOQgwgHgjADQgGAAgMgCIgSgDIjNgBQgYAAgKgKQgGgGAGgFIAKgJIAHgGQADgEgCgDQgDgGgHgBIgMgBIixAAIgVAAQgMAAgGgHQgXgYgpAHQgQACgFgGQgFgHAJgIQAUgSgJgFQgFgEgXAAIokAAIgZAGQgPADgGgMQgFgKANgGQAQgJACgFQAAgCAOgLQAKgIgFgJQgHgKgNgCIgYgBIiLAAIgfgGQgTgFgIAIQgYAagfACQgYACgmgOQgDgCgGABQgHABgDgBQg6gNgIgDQgkgOgGgiQgCgIgQgDIhagPQg0gIgoADQgpACh4gBQhmgCg8AIQgcADgGgLQgGgNgUgLQgYgOgGgHQgJgKgRgBIgeABQgLAAAAAKQABAMAOgCQAMgCAFABQAJACAGAKIg8AAQgUAAgFgPIgCgGIAAg2IBDAEIBqAGQAIAAAlAMQAcAIAQgHQAXgJAegCIA1AAIArgCQAZAAARAFQBAASAkAEQA3AFAugQQAIgDAKAAQAMgBACAEQAQAOATgDQALgCAYgHQAMgCAYgCQAXgDAjAJQApALAPAAQBiAEDJAEQAnABA4AAIBggBIA0AAQAdADATANQAHAFAMgBIAWgCQB8gVBGADQAnABA4AAIBdgBQAdAAAOgHQAqgTA4ABIBsABQBGAAAmABQAUABBAAGQA0AGAhgCIAjAAQAUgCAGgTQABgEAUAAID+gFICbgFQBdgEA/ABIAbgEQAQgCAMADQBOAaBmgVQAfgHAmADIBCAGQAeADAmgKQApgJARgSQAKgMgEgIQgEgJgMADQgKAEgXgCQgXgCgKADQgUAHgGgMQgHgPAJgKQAKgKAQALQASAMAggHQAcgGAdAAQAhAAAmggQAMgKgFgMQgHgMgDgHQgEgMAHgHQAEgFAQgGQASgGA2gJQAugIAYgMIAUgBQALAAAAgMQAAgSgegEQgJgBgQgEQgMgDAAgIQAAgJAOgDIATgBIErgGIALgBIAMgBQB4gOC8AXQBZAKA4gJQAxgIBOgEQBrgEAUgCQAfgCBxgFIAcADQAQACALgGIAPgEQAIgCAAgHQgBgHgIgBQgLABgFgBIgXABQgPAAgJgEQAFgIALgBIARgBQALgEAagBIADAAIACAAICZgDIgRhAIACAAIASBBIEqgHQgPADgLABQgEAAgDACQgDADACADQAFAPAVAAIBpAAQAfgBATAYQglAFgqATIhHAjQBHAJB5gBQCNgCAyADQAFAGgFAGQgHAIAAADQgBAOAFAFQAFAIAQgBIBDAAQASAAAAAIQADALgQACQgYAGgMgCQgQgDgbABIgqABQghgDgtAKQgzAMgaAEQgPAChCATQgxAPgkgEQgMAAgcAGQgdAHgOgBQgqgChjANQhbALgzgGIhrgLQg+gGgugBIg7AFQgkAEgYgIIgHAAQgEABgCACQgbAWgtAAQg0gDgaADIgcgBQgQgBgBAKQgBALARAAIAbAAQAZAGAiAAQAVABAngBMAkeAAAIAAGvMhGEAAAQgVACgMAMQgGAGgIgCQgFgCgKgHQgRgLgSgBQgUgBgKANQgMANgOACIgJABIgRgBgEAjmgENQATAGANABQAOAAALgHQgLgFgPAAQgPAAgQAFgAq3FgQgDAAgMgHQAOgQATALQAIAGgJAFQgFACgFAAIgHgBgA5KDwQgCgIAKgFQAHgEAJAAIA6AFQgJACgRAGQgSAIgJACIgRABQgKAAgCgHgEgqqAAYQgggSg6gGQhKgHgUgGQgagHgkgBIhAABQgPAAgEgDQgGgEAHgMQAFgJgHgHIgJgGIgIgFQgWgLgNAMQgWAWgiAFQgdAFgfgIQgigIgwgBQg2AAgbgBQgQgCgGADQgKADgEAOQgHASgQAAQgPAAgNgSQgOgTgTABIhNAAIgOAAQgNgUgTgSQg7g1hUAAQhTAAg7A1QgOAMgJANQgQgdgagYQgNgMgOgJQARgfAAgmQAAg6gqgqQgigigvgGQD8gYCpgEQBIgCBrABIC0AAIATAAQAKACADALIgBAAIiQAAQgLgBgEABQgJABAAAIQgBAIAIACIAPAAIB3AAQAYAAAEgSIAAgBIAYAAIAZgDQBjgSBYABIAJAAQBBACCFgGIAHAAIgVAkIHdAAIgEAKIHjgKIAQgwIADAAIgPAwIHfAAIgCAKIHjgIIgBAEIHkAEIADgKIHWgEIgFATIBKgDIASANQgRABgqgEQghgCgSAFIgWAGQgLAEgBAKQgBAIAJAFIASAFIA6ATQAhAKAdgCQARgBAAALQABAHgHABIgNAAQgoAAgmAMQA3AWBUAQQAwAKBhAQQgKAJgOgCQgRgCgGAEQhOA0hUgXQgNgDgXgBIgjgCQgagDgqAIQgyAKgTAAQiRgCn5AAI+kABQgOgCgIABQgOAAgDAKQgMAdATALQAGAEgBADIgDAIQgEAXgWACQgagCgMABIgFgIQh/gKglgGQgHgCgGAFQgHAFABAGQABAKAXAAICkAAQACAMAIAAQAyACBiAJQAmACAgAAIAAAiQg6gFgzAHIgHAAQgLAAgHgEgEgu6gBiQABAIARAAICOAAQAQgBgCgJQAAgIgNAAIiSAAQgQAAABAKgEgxugB5QgGABgCAHQgCALASAEQAmAFA3gFQAJgBADgEQACgDABgFQgBgEgCgCQgEgEgJAAIgtAAIAAgBIgpAAIgOABgEgzkgBxQgBALAYAAQAOAAAEgBQAIgCACgIQAAgIgIgBQgMABgGgBQgCABgOgBQgJAAAAAJgEguwgFkQA9AKAigMQgYgFgWAAQgaAAgXAHgAg/ABIAJgIIALAEIgKAHIgKgDgAMrgHQgTAAgBgKQgBgHAHgBIANgBQAQABACALQgBAFgGACIgKAAgAHngNQAKgGAJAAQAIAAALAGQgMAFgIABQgIAAgKgGgACrgLIABgGICAAAIAAAGgEhDvgBsQg6g1hUAAQhTAAg7A1QgCgKgIgEQgJgGgaAAIhQABQgbAAgWgEIAAi5IBWgEQAygBBpgIQBkgIA2gBICLgCQAsAAAlgCQghAJgZAaQgNANgKAPQgTAgAAAoQAAAsAYAiIgPAMQgOANgLAOQgKAAgKAEQgJgMgMgKg");
	this.shape_1880.setTransform(480.4,110);

	this.shape_1881 = new cjs.Shape();
	this.shape_1881.graphics.f("#D3F1FB").s().p("EglOAKZIAAm3MBwHAAAIAAG3gEhK5AKZIAAm3Qe/HlDWnlIAAG3gEgwKAFcIAAhSIExAAIAABSgEAsQAC+QgzgUhFgEQhQgBgpgBQgdgBg0gHQg4gIgZgBQg9AAgfgBQg2gDgkgNQgxgRhbgGQhpgFglgJQgTgEglAIQgbAFgRgJQgPgKgDgYQgCgOgGgGQgHgHgOAEQgnAKgygGIhZgNQgjgFhKgDQhIgDglgGQg3gEgbgDQgggDgBgRQgBgKAKgGIAWgGQAEgCAKABQAKgBgBgIQgBgHgIgCIgRgBQgngEADgdQABgcAmgCQAcgCAMgIQAOgKgDgYQgEgXAhgDIBWgIIABgBIgBAAQgcgOgEgUQgEgRAOgXQAGgLAHgDQAIgDANAHQAXAMApAAQAyAAAPADQALACAGgIQAEgHgBgMQgCgTANgMQAMgIAYgFQAagDARgGQAbgLADAAQARgDAPAOQAGAEAPAAIAbgBIB3AAQAoABAmggQAjgfAdgQQAmgUAqgDQAwgDAqgKQAMgEAcACQAkACAMgBICkgNICjgKQBkgGCAAFQAUABAegHQAggHAOAAQC6gJB6ARQAlAFAsADIBSACIAOABQAIAAAEgCQAWgLAPACQASACATAQQAOAKAeAAIAzgGQAwgHA0AHIAkAGQAVACAPgKQAJgFAMAIQAXANAKAAQARABAKgXQADgFALgBQAJAAAFAEQAQANAlAFQAoAFAOAJQAQAKAdgGQA3gPBXACQB8ADAUgCQAWgBgCAPQgBALgWAAIimABIgVgBQgLABgFAFQArASBQAKQBcAKAjALQBeAdB8ABQAVAABagDIAAHwIgLAAQgRAAgDAMQgHAQgRAGQgKAEgYAAIgwABQgcACgTAIQgPAFgXgEQgigGgGAAQgfAAhCADQhAADghAAIpJABIpKAAQgoAAgVgRQgOgMgWAIIgkAMIhoAKIgVABQgtAAgfgNgEhK5ACcMAiVAAAIAAAZMgiVAABgEglOACcMBGoAAAQAOACAAALQAAALgOABMhGoAAAgAO/BZQgHgIgLgBIgSAAQgpADg5gGIhjgOQAKgHALgBIASAAIGFAAIAYgBQAMABABAPIACATQAAALgMADQgZAIgTgWQgLgMgQAAQgRAAgNAMQgTASgqAAIgCAAQgqAAgQgSgAScgZQgBgHALAAQAGAAACAIQgCAIgGAAQgMAAACgJgAQQg6QgPgDgFgJIgEgRQgFgRAOgEQAIgCAXAAQAHACAVADQAMAGgbAUIgHAPQgEAHgLAAIgHgBgARRhCQAIgGAHACQAEABAKAHQgIADgGAAQgJAAgGgHgAUYifQgJgCABgHQABgQAVgCIAOAEQAHAEgBAGQgBAOgVAAIgMgBgAUTjhQgBgIAIgCQACgCALAAQATAAAAALQAAAHgGADIgOADQgRAAgCgMgEgu1gEdQgTgLgZgDQgNgCghABQgQAAgagIQgcgIgNgBQgOgBABgMQACgHAKgEQATgIAWAFQAoAGA9AAQBbgBAKABQAcAAAOACQAlAGAjgSQAigSAIgfQACgPALgFQAFgDAUgBQAMgBBSAAQAZAAATgCIAAB8IgLAAQhDAAguAFQgaADgzgFQg3gFgYABQgaACgLACQgTADgPAHQgMAHgOABIgCAAQgOAAgIgGgEglOgHCIARgDQBMgQB9ADQApABAVgSQALgJAOgBQAOgCAKAGQAcAPAlgGQAVgDAogMQApgJAUAAQA9ABAggCQAzgFAmgRQAIgDAMAAIAUABIBhABQA6AAAlgCQAVgCAuAKQAqAJAYgEIBZgPQAygIAoACQAJAAAHgEQAHgEACgIQAAgMgWgIQgQgHgbAAIguABQgUgBgFgBQgNgEAAgLQABgLAOgDQAGgBATAAQHvAABjABIA0AFQAgACAWgHQARgFAbgMQAOgFAegNQAagKAVgBQGMgKEhAFQCEADEJALIB3AHQBJAEAuAAQAdgCAHARQAEAJALABQAFABANgBQAdABA7gBQAzABAjAHQhYAyhtgQQg3gIhagCQglgCgTAOQgJAHgTAAQghgBhYAGQhLAEgsgEQgbgCgvAIQg2AJgXAAQATANATgCQAcgCBSACQBEADApgJIAaABQAPABABAKQABANgSAAQgiADgSAFQgZAIgQASQgFAIgPgGQgKgDgIADQgHAEgBAHQAAAJAJACIARAAQAcABA6gBQAyAAAjAIQgwAWgygEQgZgDgTARQgbAYgwgMQglgJgyADQgIAAhOAJQgyAIgYACQgsAEghgDQgogDgMABQgeACgSATQgIAIgMACQgOADgKgHQgWgPggABQgLAAguAIQgcAEgcAAIjQAAQh8ABhVgCQgbgBg5AJQg3AJgegDIg+gJQgkgGgcAGQg3AMgLAEQgVAIgZACQgNACghAAIjnAAQiIABhfgDQhZgCigANQg4AFgWAAQgsACgggCQgcgCg/AIQg6AGgigEQgvgGhFAFQhOAHgoACIhLACgA36nzIA4AAIAAgEIg4AAgAYek6QgLgBACgFQAAgCAJgEIAKAHQAAAEgDABIgHAAgEBKMgGFQAAgJAJgDIATgBQANAAAEAGIAAAOQgCADgEABQgDABgNAAQgXAAAAgMgEA8RgHlQgJgBAAgHQAAgIAJgCIARgBQAZAAAAAKQgBAJgJAAQgOgBgBABIgRAAg");
	this.shape_1881.setTransform(480.4,232.2);

	this.shape_1882 = new cjs.Shape();
	this.shape_1882.graphics.f("#E9F8FD").s().p("EhBSAHgIgDgMIAAgHIAAgyIAAgBQAKAKgCAWQgCAWAIAJIABABIACAHQgCADAAACQgIgBgEgFgEhBaAGZIgKhrQgEg4gIhKIgSiCQAAgMgBgBIAAgBQgFgBgDADIgFAGQgCgSgSgFQgGgCgYAAQhugBmAAAIgMABIABnwMAiaAAAIAAHvQgZABibgBQhtgChIAJQgaADgJAJQgIAHABARIgBAAIgJgUIgJAcIAAAAQgBgQgDgFQgGgMgWAJQgCABgEgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgDgSgQgBIgcABQjZgBhtABIhJAAQgrAAgeAEQgOACgEAGQgCACAAALIAAAAQgDgCgDgHQgCgHgGgBQhcgQguABIi0ABIj4AAQgXAAgLAGQgNAIAFAUIAQCDIAPB2QAHBDgCAyIgDAAgEA3IAFnQgEgCAAgEIAGgLQAJiUAaiaQADgUgWgBQgTgDgLAAIi+AAQh1ABhKgGQgMgBgDAGIgDAOQgJAEgGgEIgKgLIhIhOIgIgLQgFgFgLABIAQAWQAEAIANAXQAMASABANQg/AGgfAAInrAAQgeAAgUgGQgYgHgQgSIAHgSQARgVAFgSQgVAIgIASIhLBQQgGAAgDAGQgCAIgFAAQAAgCABgQQABgKgKABQgPACgXgHQgagGgMAAIkgAAQgaAAg1AVQgFABgCAHQgBAGgDADIgBAAQgDgTgCgDQgGgKgUAAIq8AAQgMACgDAMIgMANIgBAAQgBgLgEgFQgFgHgOgDQgjgHgYAAIl3AAIiXgBQhbgBg9AHQgrAGgDgkIgBgZQgCgQgLgJQgMACgCAIIABAQIgHAvIgBAAIAAhAQgRAPAGAbQADAagNAKIgEgKQgBgFgKABQhpACgzAGQgRACgDAOIgLALIgBAAQAAgLgBgFQgDgJgQAAIkzgCIg+AAQgkAAgaAIIgPAAQgMgIgSgDIghgDQgygFgPALQgNAKgCArIgBAKIgBAAIgHgjQgGAGgCAKIgDAMIgCAAIgBgNQgBgKACgGQAHgTgJgIQgJgGgWAAInqAAQgaAAgHACQgSAEgGAPIgNgBQgNgMgWgCIgnAAQgggBidACQh0ABhJgIQgVgCgBAOIhDhEIgPgUQgJgPgHAFQgHAGAPALIAOAVIAQAkIgHAFIgHAEQguANgIAIQgHAJAAAmIgBAkIgKhHIgJAPIgCgBQgCgFADgOQADgNgMgGQgJgKgPgCIgcgBIkwAAIgygBQgeAAgUADQgcAFgUgBIAAnuMBwHAAAIAAIZQgBAGgBALIgPBkIgBAAQgEgJABgIIAMh4IAEgFQAAgDgJgDQgtgLhAgBIhsABIhTgBQguABgkAGIgfADQgTACgJAKQgCADgBAFQgNAzgHBDQgGApgHBVQgCAFAAAPQgBANgEAHIAAgBIgBgnQAAgXABgQQAQiXAMg2QAFgVgPAAIhEgFQgogDgaAOIgMAFQgGgKgMgCIgZgBIjzAAQgfAAgPgOQgPgOACgZIABgJQgBgEgHgEIgDAVIAAAAIgMgPIghE2IgGACIAIhrQAFhCAIgpIACgUQgBgMgTgCIhvgGQgNgCgZAJQgXAJgOgCQgPAcADAVQgXCbgHBwIgDAYIgIgFgEg4MAA9IABgTIAEAKQAGATAEAaIAIA6QAFATAIBAQAHA0AKAfIgDABIgEAEIgGAGgEhK7AE/IgBgJIAAhpIAGA0IAGAgQABAUgGANQgEgBgCgCgEBAcAEUIAeixQACgQAFgEIACACIgZC8IgCABIAAAAIgCAGQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgCAAgEgDgAcVAwIgSCqIgGAEQgBhkAZhKgEglDAA3IgBgTIAJgBIAAABQgCAWAKAwQAJAtgDAagAQUBjQgBgfAJgUIABAyIAAABQgCAGAAAUQAAAQgEAKIgBABIgCg1gAnMBwIgDgUIABgsQAIAQgBAXIgBAoQgEgGAAgJgEBD7ABmQgFgQABggQAHALAAAQIgBAaIgCgFgEA71ABpQgHgPADgXQAGAIAAAMIgBAUIgBgCgAD4BpIAAAAQgJgYACghQAKALgCASIgBAeIAAgCgA9TBZQAAgKAHgGQACARgIAQIAAABIgBgSgAgVBNQgBgSAKgLQAAAggGAUIgCAGIgBgdgAzCBYIgEgPIABgZQAIAKgBAPIgBAbQgDgEAAgIgAzdA+QAAgMAHgIIACAZIgHAQIgCgVgAAHBRQgHgPACgYQAHAHAAAMIgCAVgEBBBABPIgBgaQABgLAFgIQABgDADgCIAAAUIgBAQQgBAKgFAGgEBETAA+QgCgBgHgJIAHgEQAKADgBAHQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABIgCAAIgDAAgA6dAoIgDgFIgEgBIgBAAIgBAAIgIgMQAYgFAAALIgBAVQgDgBgDgIgAm7AkQACgDAGgBIAGACIgGAGQgJAAABgEgEA7qgACQAGAGAAAKIgBASQgIgMADgWgADqgPQAJAJgBAOIgBAYQgKgTADgcg");
	this.shape_1882.setTransform(480.1,482.6);

	this.shape_1883 = new cjs.Shape();
	this.shape_1883.graphics.f("#E3F6FC").s().p("EglMAEBIAAoCMBwIAAAIAAICgEhK7AEBIAAoCMAiaAAAIAAICg");
	this.shape_1883.setTransform(480.1,408.3);

	this.shape_1884 = new cjs.Shape();
	this.shape_1884.graphics.f("#DDF4FC").s().p("EglMAD7IAAn1MBwIAAAIAAH1gEhK7AD7IAAn1MAiaAAAIAAH1g");
	this.shape_1884.setTransform(480.1,357.4);

	this.shape_1885 = new cjs.Shape();
	this.shape_1885.graphics.f("#CEF0FB").s().p("EhK5AF0IAAgsMAiVgABIAAAtQhrDzolAAQolAAvgjzgEgwKAHuIExAAIAAhSIkxAAgEglOAF0IAAgtMBGoAAAQAOgBAAgLQAAgLgOgCMhGoAAAIAAnIIBLgCQAogCBOgHQBFgFAvAGQAiAEA6gGQA/gIAcACQAgACAsgCQAWAAA4gFQCggNBZACQBfADCIgBIDnAAQAhAAANgCQAZgCAVgIQALgEA3gMQAcgGAkAGIA+AJQAeADA3gJQA5gJAbABQBVACB8gBIDQAAQAcAAAcgEQAugIALAAQAggBAWAPQAKAHAOgDQAMgCAIgIQASgTAegCQAMgBAoADQAhADAsgEQAYgCAygIQBOgJAIAAQAygDAlAJQAwAMAbgYQATgRAZADQAyAEAwgWQgjgIgyAAQg6ABgcgBIgRAAQgJgCAAgJQABgHAHgEQAIgDAKADQAPAGAFgIQAQgSAZgIQASgFAigDQASAAgBgNQgBgKgPgBIgagBQgpAJhEgDQhSgCgcACQgTACgTgNQAXAAA2gJQAvgIAbACQAsAEBLgEQBYgGAhABQATAAAJgHQATgOAlACQBaACA3AIQBtAQBYgyQgjgHgzgBQg7ABgdgBQgNABgFgBQgLgBgEgJQgHgRgdACQguAAhJgEIh3gHQkJgLiEgDQkhgFmMAKQgVABgaAKQgeANgOAFQgbAMgRAFQgWAHgggCIg0gFQhjgBnvAAQgTAAgGABQgOADgBALQAAALANAEQAFABAUABIAugBQAbAAAQAHQAWAIAAAMQgCAIgHAEQgHAEgJAAQgogCgyAIIhZAPQgYAEgqgJQgugKgVACQglACg6AAIhhgBIgUgBQgMAAgIADQgmARgzAFQggACg9gBQgUAAgpAJQgoAMgVADQglAGgcgPQgKgGgOACQgOABgLAJQgVASgpgBQh9gDhMAQIgRADIAAj3IAegEQAegEA6gLQA1gGAmAHIAFgEQAAgHgLgEQgKgDgDgFIACgCIA0ACQAnABAQABQBUAGAgAAQBBAAAygMQAxgMA0ADQARABArgFQAlgFAWADQBWAMBJAAQAfAAA8gFQA8gGAfAAQCDAAEHgEQDiABCoANIALAAQB/gQBTAOQA8AKBPADQAyACBagBQBiAAB6AGQBQAECLAKQANAAAeAHQAaAFAQAAIBygEQBFgDAtAIQASACAlAAQAkgCAQAEQAfAGA4gBQA8gBAaAEQBNAJAngBQAXgBAvgEQApgCAeAFQA/ANA7gLQAFgCALACIARACQARgBAfANQAeAMARgCQAvgGBMAGQApACBuACQBfAAA4AGQCuAUCRgKQAygCBUAGQBgAHAjAAQBAgBCoALQCSAJBWgFIAKAAQBKAMBsgLQAOgBAcgGQAYgEAQAFQAkAKA0ABIBYAAQAVAAAFgCQAXgLAfAAQATAAAkAEIBaAHQA2AEAjgEQA1gFBdAFQBmAGAsgDQAJgBAXAJQAWAHAOgEQAOgEAYAAQAigBAGgBQAjgEA7AIQBEAKAbgBQALAAA9gFQAsgDAdACQAFABAMgCQAKAAACAFQAJAaANgCQAIgBAUgSQACgDAKAAIANAAIAlABQAXAAAPgEQAQgFAEARQAIAYAUAGQALADAKgDIAACYQgEgGgNAAIgTABQgJADAAAJQAAAMAXAAQANAAADgBQAEgBACgDIAAAkQhaADgVAAQh8gBhegdQgjgLhcgKQhQgKgrgSQAFgFALgBIAVABICmgBQAWAAABgLQACgPgWABQgUACh8gDQhXgCg3APQgdAGgQgKQgOgJgogFQglgFgQgNQgFgEgJAAQgLABgDAFQgKAXgRgBQgKAAgXgNQgMgIgJAFQgPAKgVgCIgkgGQg0gHgwAHIgzAGQgeAAgOgKQgTgQgSgCQgPgCgWALQgEACgIAAIgOgBIhSgCQgsgDglgFQh6gRi6AJQgOAAggAHQgeAHgUgBQiAgFhkAGIijAKIikANQgMABgkgCQgcgCgMAEQgqAKgwADQgqADgmAUQgdAQgjAfQgmAggogBIh3AAIgbABQgPAAgGgEQgPgOgRADQgDAAgbALQgRAGgaADQgYAFgMAIQgNAMACATQABAMgEAHQgGAIgLgCQgPgDgyAAQgpAAgXgMQgNgHgIADQgHADgGALQgOAXAEARQAEAUAcAOIAAABIhWAIQghADAEAXQADAXgOAKQgMAIgcACQgmACgBAcQgDAdAnAEIARABQAIACABAHQABAIgKABQgKgBgEACIgWAGQgKAGABAKQABARAgAEQAbADA3AEQAlAGBIADQBKADAjAFIBZANQAyAGAngKQAOgEAHAHQAGAGACAOQADAYAPAKQARAJAbgFQAlgIATAEQAlAJBpAFQBbAGAxARQAkANA2ADQAfABA9AAQAZABA4AIQA0AHAdABQApABBQABQBFAEAzAUQAnAQA6gEIBogKIAkgMQAWgIAOAMQAVARAoAAIJKAAIJJgBQAhAABAgDQBCgDAfAAQAGAAAiAGQAXAEAPgFQATgIAcgCIAwgBQAYAAAKgEQARgGAHgQQADgMARAAIALAAIAABMgAOtDiQALABAHAIQAQASAsAAQAqAAATgSQANgMARAAQAQAAALAMQATAWAZgIQAMgDAAgLIgCgTQgBgPgMgBIgYABImFAAIgSAAQgLABgKAHIBjAOQA5AGApgDIAMAAIAGAAgAScB4QgCAJAMAAQAGAAACgIQgCgIgGAAQgLAAABAHgAQBAlQgOAEAFARIAEARQAFAJAPADQARADAFgJIAHgPQAbgUgMgGQgVgDgHgCQgXAAgIACgARRBPQAJALAUgHQgKgHgEgBIgEAAQgFAAgGAEgAUQgWQgBAHAJACIAMABQAVAAABgOQABgGgHgEIgOgEQgVACgBAQgAUahZQgIACABAIQACAMARAAIAOgDQAGgDAAgHQAAgLgTAAQgLAAgCACgAYViuQgCAFALABIAHAAQADgBAAgEIgKgHQgJAEAAACgEA8RgFlQgJACAAAIQAAAHAJABIARAAQABgBAOABQAKAAAAgJQAAgKgZAAIgRABgEhK5AEuIAAmJIGuAAQAWACgEAQQgEAUAMAHQAJAGAWAAQAVAAAngCQAkgBAZAIQAeAKASgTQgLgNgSgEQgLgEgXgBIgzABQgdABgVgGIgQgDQgKgCgCgGQgDgIAHgHQALgHADgEQADgEATgLQAPgJAAgNQAAgOADgGQAEgJAQAAQAPABAFAIQACAGABANQgBASAbADQALABAKgDQAKgEgBgHQgDgQAOgaQAQgbgBgOQAAgVAhgDQAbAAAAAYQABAEgBAKQABAJAJACQAdAIARgNQAZgSgHgYQgEgRgegEIiSgVQAHgJAVgCQAPAAABgJQABgHgQgGQgNgFgPAFQguATg6gLQgugBgWgCQgogFgTgcQgBgCgHgDQgGgCgBABQgUASgagGQgegMgOgBIgUABQhPAKhygDQgNgBgdAEIgLABIAAgYIFOAAQApAAAaAJQAkAMAZgPQAagQAjgIQAagFAqgDQA6gEBPgCICIAAQARAAAEgEQAUgOAdgBQARgBAhABQAHAAAQgDQAOgCAIABIAogHQAXgEAOALQAiAcAtgUQAvgVA1gBQA+AAB5gOQB8gOA9gBQAiAABFACQAdAABIgQQBBgOAnAEIAJgDQAZgIAtgJQAxgJAUgGQAlgKAzgGIAAEDQgTACgZAAQhSAAgMABQgUABgFADQgLAFgCAPQgIAfgiASQgjASglgGQgOgCgcAAQgKgBhbABQg9AAgogGQgWgFgTAIQgKAEgCAHQgBAMAOABQANABAcAIQAaAIAQAAQAhgBANACQAZADATALQAJAGAPAAQAOgBAMgHQAPgHATgDQALgCAagCQAYgBA3AFQAzAFAagDQAugFBDAAIALAAIAAHIgA36lhIAAgEIA4AAIAAAEg");
	this.shape_1885.setTransform(480.4,217.6);

	this.shape_1886 = new cjs.Shape();
	this.shape_1886.graphics.f("#ED423E").s().p("EAsYAuJIAAi8IAEAAIAvAAIAOAAIAkAAIAbAAIAzAAIBDAAIAOAAIAFAAIA+AAIAOAAIAUAAIAhAAIAXAAIAYAAIAAAuIAACOgEAekAuJIAAi8IASAAIAnAAIAMAAIAsAAIBMAAIAVAAIARAAIBEAAIAyAAIAGAAIATAAIAgAAIAoAAIAAC8gEAQxAuJIAAhhQABgEgBgDIAAhUIANAAIAJAAIASAAIADAAIAQAAIAhAAIAuAAIAWAAIAEAAIAPAAIAhAAIBOAAIAlAAIAtAAIAsAAIAVAAIAFAAIAAC8gEAC9AuJIAAi8IAbAAIARAAIAyAAIAHAAIAUAAIATAAIAAAAIAYAAIAxAAIACAAIASAAIAYAAIAYAAIASAAIAgAAIAYAAIAnAAIAwAAIAAC8gEgK2AuJIAAi8IAZAAIAYAAIAuAAIARAAIAhAAIAXAAIA2AAIAmAAIAaAAIARAAIAZAAIAeAAIATAAIAaAAIAnAAIAAC8gEgYpAuJIAAi8IAPAAIAGAAIAtAAIAXAAIAaAAIApAAIAoAAIAeAAIAXAAIAmAAIAhAAIACAAIAIAAIBaAAIAIAAIAOAAIAAC8gEgmcAuJIAAi8IAJAAIBJAAIARAAIAoAAIAxAAIAYAAIBAAAIAcAAIAUAAIAzAAIAkAAIASAAIAMAAIAAC8gEg0PAuJIAAi8IAIAAIBXAAIAvAAIAhAAIAzAAIASAAIALAAIAXAAIALAAQABABAAAAQABAAAAAAQABAAABAAQAAAAABgBIAUAAIAKAAIA1AAIAVAAIAjAAIAIAAIAAC8gEARjguIIGuAAIBHD9IABAGIAfByIAJAiIARBAIiZADIgCAAIgDAAIlBAHgEgpHgm2IBvnSIG1AAIhDHUInjAIgEg4Jgm2IAGAAIDdnSIGUAAIhSD7IgdBZIgZBOIgQAwInjAKgEAj4gm2IiGAAIgCgFIi6nNIGyAAIDnHOIABAAIACAEgEgaMgm2IBunSIHcAAIgEAYIhkG2InWAEgEAEegm6IgkAAIgGAAIAcnOIGkAAIAODkIACAhIAFBPIAGBtIAAANImSAAIgQAAIgPAAgEAwugm6IkrnOIG/AAIACADIC3D+IBEBgIASAZIAcAmIAhAugEgLIgm6IB3nOIG2AAIhTHOg");
	this.shape_1886.setTransform(599.8,323.5);

	this.shape_1887 = new cjs.Shape();
	this.shape_1887.graphics.f("#F1F0F0").s().p("EAs6AuJIAAi8IAaAAIA6AAIAKAAIArAAIAYAAIACAAIBZAAIAXAAIAnAAIAXAAIAOAAIAoAAIABAAIAoAAIAKAAIAAC8gEAfHAuJIAAi8IAYAAIAXAAIArAAIAnAAIAVAAIAWAAIAQAAIAlAAIAzAAIAgAAIAIAAIAIAAIAfAAIBKAAIAHAAIAFAAIAAC8gEARTAuJIAAi8IALAAIASAAIASAAIATAAIA1AAIA7AAIACAAIAgAAIAQAAIBLAAIAsAAIAJAAIAZAAIAUAAIATAAIANAAIAJAAIAABUQABADgBAEIAABhgEADgAuJIAAi8IAGAAIAIAAIAqAAIAVAAIAJAAIBKAAIAeAAIAFAAIArAAIAuAAIAlAAIAXAAIAPAAIAXAAIAsAAIAPAAIAAC8gEgKTAuJIAAi8IAJAAIAaAAIALAAIAsAAIAYAAIAHAAIA2AAIAVAAIBRAAIAVAAIA5AAIAaAAIACAAIAhAAIALAAIADAAIAMAAIAAC8gEgYGAuJIAAi8IAEAAIAmAAIAbAAIA1AAIAGAAIAPAAIAkAAIAyAAIAbAAIAiAAIAQAAIBOAAIAIAAIAWAAIARAAIAKAAIAAC8gEgl6AuJIAAi8IAoAAIAKAAIAUAAIAmAAIAGAAIAyAAIBLAAIAFAAIBCAAIAkAAIAWAAIAgAAIAfAAIALAAIAAC8gEgztAuJIAAhvIAAg2IAAgXIAKAAIAHAAIAqAAIAgAAIASAAIAFAAIA6AAIArAAIAGAAIAIAAIAUAAIAOAAIAMAAIAiAAIARAAIAhAAIAuAAIAKAAIANAAIAOAAIAAC8gEAStgmyIgBgVIgHhtIgEhPIgDghIgOjkIGvAAIBQHhgEgLOgm6IBkm2IAFgYIHwAAIh2HOIiWAGIkHAKIhKADgEgaKgmwIAAgEIBDnUIIGAAIhvHSIAMAAIgCAKgEAhfgnxIgJgiIghhzIgBgFIhHj9IGlAAIC6HNIixAEIkqAHgEAIZgm2IktAAIABgEIBTnOIGsAAIgcHOIAHAAIgBAEgEgpKgm2IAQgwIAZhOIAchZIBRj7IG5AAIhwHSgEgwsgm2IndAAIAUgkIAphIIAuhSIB7jbIAXgoIAJgRIG5AAIjdHSgEAwsgm6IgBAAIjnnOIGcAAIEqHOg");
	this.shape_1887.setTransform(552.1,323.5);

	this.shape_1888 = new cjs.Shape();
	this.shape_1888.graphics.f("#FF0000").s().p("Eg0fAqZIABACIgCAAIABgCgEhJJAqTIgBgBIABABgEhJLAqNIABgBIAAABgEg3dAqMIABgBIAAABgEgpIAqFIABAAIAAACIgBAAIgCAAQgBAAAAAAQAAAAAAAAQAAgBABAAQABAAABgBgEgtHAqCIhAAAIglAAIAAgKIAAhLIAAhVIAAgnIAAgRIA0AAIAlAAIALAAIAhAAIAAA4IAAAjIAABCIAABFgEhC8Ap6IAAAAIAAAAgEBHfAp0IABgBIAAABIgBAAgEgr2ApsIADABIgDABgEg2+AptIABABIgBAAgEg/xAo7IAAAAIAAAAgEgzkAogIAAgBIABABIgBAAgEg1AAoaIABAAIADADIgEgDgEgxtAoaIADABIgCABgEhAYAobIABgBIAAACIgBgBgEBF9AobIABgBIAAABIgBAAgEBF+AoaIABAAIAAAAgEg9uAoXIAEABIgBACIgDgDgEBIpAoTIACABIgBAAIAAABgEg8vAn1IAAgBIABABgEAj+AntIAGAGIAAABQgEgCgCgFgEgF9AnuIABgBIAAACIgBgBgEgicAnnIAEAEIgEACgEAE+AnoIAAABIgBABIABgCgEArFAnhIABAAIgBABIAAgBgEAx7AnhIAAAAIAAAAgEAiRAndIACgDIACAFIgEgCgEgj2AnbIABAAIACgCIgBAFIgCgDgEgfRAnUIAAABIAAAAIAAgBgEAjAAnNIACABIgCAAgEgN7AnNIAAAAIABABIgBgBgEgV9AnJIAEgCIAAADIgEgBgEAcyAnJIAAgCIACACIgCAAgEAMBAnIIAAgBIABABIgBAAgEADcAnIIAAAAIABAAIgBAAgEAziAnFIACAAIgBACIgBgCgEglBAnCIACgDIAAAEIgCgBgEAP5AnCIAAgBIAAABgEAJ5AnBIAAgBIAAABgEA2eAm8IAAAAIABAAgEAUUAm8IACgBIAAABIgCAAgEAtGAm1IAAABIgCABIACgCgEAoCAm2IABgBIAAABIgBAAgEgv1AmxIAAgDIABAFIgBgCgEgBAAmuIADABIgDAAgEgNIAmvIADgBIAAABIgDAAgEBJYAmtIABAAIgBABgEgGTAmtIABAAIAAABgEArUAmmIABgBIAAADIgBgCgEAvsAmlIAAgDQACAAACAGIgEgDgEAoYAmnIABgBIAAACIgBgBgEgf0AmkIgBgBIADABIgCAAgEgViAmbIAAAEIgCAAgEA/KAmVIABgBIAAABgEBIxAmQIABgCIAAACIgBAAgEAvrAmPIAAAAIABAAgEgujAmEIACgDIgBAFIgBgCgEAbnAl1IABAAIgBABgEgv1AlvIAAgBIAAACgEg1AAluIABAAIAAABIgBgBgEAbvAlrIACACIgCABIAAgDgEgYeAlpIAAAAIAAAAgEAhUAlpIAAgCIAAACgEAvVAloIAAgBIABABgEgFoAlnIAAgBIABABgEgbhAliIABAAIAAABIgBgBgEghSAlfIAAgEIADAEIgDAAgEA//AlbIABABIgBAAIAAgBgEgRiAlcIAAgBIABABgEgi7AlbIAAAAIABAAgEgkNAlVIAAAAIAAAAgEgmEAlUIAAAAIAAABgEgVTAlPIABABIgBAAIAAgBgEBFhAk7IACACIgCACIAAgEgEgSmAk7IABABIgBABIAAgCgEgYJAk8IAAAAIACABgEAa6Ak2IAAgBIABABgEg6RAkvIAAgBIAAABIAAAAgEhGRAktIACAAIAAACIgCgCgEBIsAkpIAAgCIABACIgBAAgEhDxAkoIAAAAIAAABgEgyBAkeIAEADIgEACIAAgFgEAUVAkIIAEACIgDAAgEgySAkHIgBgFIABAFgEhJSAkEIAAgBIAEgDIgCAGIgCgCgEAtNAkEIADgCIgBADIgCgBgEg+HAkEIAAgBIAAABgEA07Aj8IADgCIgBACIgCAAgEAVwAj4IADAAIgDAEgEAbRAj1IAAABIAAAAgEgszAj1IABAAIAAAAIAAABgEAUEAjuIACACIgBABIgBgDgEg5yAjvIAAAAIAAABIAAgBgEg6DAjvIABAAIAAAAIgBAAgEAJxAjqIAAAAIAAABgEgfoAjoIABAAIAAABIgBgBgEAdzAjjIACgBIABACIgDgBgEBDKAjiIAAAAIAAABgEAibAjiIACgBIgCACIAAgBgEggfAjdIABABIgCAAIABgBgEhEmAjWIAAAAIACABIgCgBgEA+0AjWIAAgBIABABgEAgEAjWIABAAIAAAAgEhAQAjSIABgCIAAACIgBAAgEAuCAjRIAAgBIABABgEASeAjQIAAAAIAAAAgEg0wAjBIACAAIgCACgEAQaAi5IADABIAAADIgDgEgEAuIAi1IABAAIAAABgEg1kAi1IACABIgCAAgEhDaAizIACAAIgCADgEhCoAioIACAAIAAABIgCgBgEA4rAijIABAAIgBAAgEAuKAigIAEAAIgEADgEAhHAijIABgBIAAABgEARSAidIABAAIgCADIABgDgEgoEAifIAAgCIACACIgCAAgEABcAicIABAAIgBABIAAgBgEg9lAiYIAAgBIAAACIAAgBgEAUzAiSIABgBIAAABgEAfnAiRIgBgBIABABgEAjeAiQIAAgBIAAABgEAERAiPIAAAAIAAAAgEAAQAiLIAAAAIAAAAgEgLrAh8IACgBIgCACgEgc1Ah9IABgBIAAABgEAS6Ah0IACAAIAAADIgCgDgEBELAhiIACgBIAAAEgEAk3AhWIABAAIAAABIgBgBgEhAlAhWIABAAIgBABIAAgBgEgr5AhUIAEgEIAAAFIgEgBgEhBgAhQIABgBIAAABIgBAAgEAZ+AhJIABAAIgBABIAAgBgEA7EAhEIAAgBIACABIgCAAgEAzqAhDIAAAAIgBABgEA3MAhAIACgCIAAAAQAGAAgFACIgCAAIgBAAgEhKkAg8IABAAIgBACgEBHtAg8IABAAIAAAAIgBAAgEgZbAg3IADgCIgCADIgBgBgEAOyAgyIABAAIAAAAIgBAAgEAuvAgxIAAAAIABAAIgBAAgEAzcAguIADAAIgDADgEBKjAgsIAAgCIACACIgCAAgEAfdAgrIAAgBIABgBIAAADIgBgBgEgf2AgqIACABIgDABIABgCgEgssAgpIACAAIAAABIgCgBgEgCxAgjIABAAIAAABgEgMMAgjIABAAIAAABIgBgBgEgdfAgWIABAAIgDAHgEBFuAgXIABAAIAAAAgEg8WAgXIAAgBIAAABgEgHHAgPIABgBIgBADIAAgCgEAUyAgPIACAAIAAACgEAR4AgHIABADIgBAAIAAgDgEhFaAgDIAEgBIgDADIgBgCgAs2fyIABAAIgBABIAAgBgEBKFAfxIABAAIgBABgEhHCAfnIADAAIgDAEgEAyYAfjIAAAAIAAABgEAsrAfbIAFAAIgBAEIgEgEgAOGfeIABgBIAAACgAIXfeIABAAIgBABgEg9WAfeIADgBIgBACIgCgBgEhByAfZIABAAIACgBIgBACgEA1/AfLIABgBIAAABIgBAAgEAhEAfKIADAAIAAABIgDgBgEAgTAfLIAAAAIAAAAgAnkfIIABABIgBACIAAgDgEgyhAe9IAAAAIAAABgEBAcAe4IAAgBIAAACIAAgBgEguqAezIABAAIgBAAgEBJXAexIABAAIAAABgEAxzAexIABAAIgBABgAecexIABAAIgBABgEgqtAeqIADAAIAAACIgDgCgAGLelIADgBIABAAIgBAFgALuemIABgBIAAACgEAtuAeWIABACIgCACIABgEgAPoeaIABAAIAAAAgEAgpAeYIABAAIAAABIgBgBgEBDdAeWIADAAIAAACIgDgCgASyeQIACAAIgBADIgBgDgAhJeSIABAAIAAABgACoeKIACABIgCABIAAgCgAnOeMIAAgBIAAABgA6Wd7IACAEIgBAEIgBgIgEg2jAd0IgBAAIABAAIAAABgAScdzIABgCIABADIgCgBgEA4WAdlIABgBIAAABIgBAAgEg6hAdkIACAAIgBABIgBgBgEAw1AdfIABAAIAAABIgBgBgEA+oAdcIABAAIAAABIgBgBgAPkdSIACAAIAAAEIgCgEgEAiuAdSIAAAAIAAAAgAmLdRIABAAIAAABIgBgBgA4IdSIABgBIAAABIgBAAgAYLdOIgBgBIABAAIAAABgEAo5AdLIAHgDIAAAFIgHgCgEBJsAdFIACABIgCABgEBJuAdGgEBJuAdFIACAAIgCABIAAgBgEgqjAc/IAAAAIAAAAgEhBcAc4IABAAIAAABgEgwDAcyIAAACIgEABIAEgDgEg9sAc0IABgCIAAACIgBAAgAmDcyIACAAIgCABgEgjTAczIAAAAIAAAAgEA2PActIABAAIgBAAgEAu9AcsIAAAAIAAAAgEgxeAcrIABABIAAAAgAg7ccIAEAAIgCAEIgCgEgA80cYIACACIgCABgAXAcaIACAAIAAABIgCgBgA8scRIACAAIABABIgDgBgEg9sAcMIABAAIgBACgADNcGIACACIgBAFIgBgHgAD5cMIABgBIAAABgAl4cJIACgCIgBAEIgBgCgAlIcHIABAAIAAABIgBgBgEBHCAcBQgGADAGgDIACgBIgBADIgBgCgEA73AcBIABgBIAAABgEhHqAb/IABgCIAAADIgBgBgEhBtAb5IACAAIAAAAIAAABgEAlsAbuIAAAAIAAAAgAPwbtIABgBIAAABIgBAAgAqaboIAAAAIAAABgEAhuAblIAAAAIABAAIAAAAIAAABIgBgBgEhDDAbfIAAAAIAAAAgEAiYAbcIACAAIgBABgEgpuAbaIADAAIgBACIgCgCgEAxXAbXIABAAIgBABIAAgBgEAsLAa8IABAFIAAABIgBgGgEBFPAa+IABAAIAAABgAFHa4IABABIgBADIAAgEgA5DayIABABIgCABgEBC1AaiIAAAAIAAAAgEBFtAaaIADABIgBABIgBACgApzabIABAAIgBABgAZ1aaIACAAIgBABIgBgBgEBBTAaRIAFACIgFABgADvaQIAAAAIAAABgEBATAZtIAAAAIACgBIAAABIgCAAgAFOZkIAAgBIABABgAd9Y6IABAAIgBABIAAgBgEA7hAYOIADACIgDAEgEBKVAYIIABABIgBABIAAgCgAqEWvIABAAIAAACgAqYWnIACAAIgCADgEgvcAWdIAAAAIAAABIAAgBgA9gWWIACAAIgBABIgBgBgEgvKAWVIABAAIAAACgAb/WPIABAAIgBAAgAggWMIABABIAAABIgBgCgAQJWKIABAAIgBABIAAgBgAghWLIABAAIgBAAgEg4hAWIIABAAIAAABIgBgBgEglQAWDIAAgBIABABIgBAAgAC/VoIABAAIgBACgAXN0zIACABIgCAAgEgijgdOIADABIgCABIgBgCgEgz7gqaIAAAAIAAABgEgz8gqaIABAAIAAAAg");
	this.shape_1888.setTransform(482.2,345.1);

	this.shape_1889 = new cjs.Shape();
	this.shape_1889.graphics.f("#FFFFFF").s().p("AAQDrQgLgKgHgKIgEAEQg6A1hUAAQhUAAg7g1Qg6g1AAhLIABgIIgBAAQhUAAg7g2Qg7g0AAhKQAAhLA7g2IABAAQA7g0BTAAQBTAAA6A0QANALAJALIAJAMQAFgIAFgHQALgPAPgNIAOgLQA3gpBIAAQBBAAAyAgQAOAJANALQAbAZAPAdQAKgOAOgMQA7g0BTAAQBTAAA7A0QAUASANAUQAaApABAyQgBBKg7A0Qg3AzhNADIAAAFQAABLg7A1Qg7A1hUAAQhTAAg7g1g");
	this.shape_1889.setTransform(67.6,121.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:13.8}},{t:this.instance_2},{t:this.gameCode_txt},{t:this.text,p:{x:496.9,y:193.4,text:"משחקים לדוגמה:  101, 102",font:"bold 16px 'Arial'",lineHeight:19.9,lineWidth:258}},{t:this.play_btn},{t:this.txtError,p:{x:498,y:269.5,text:"",font:"bold 22px 'Arial'",color:"#FF0000",textAlign:"center",lineHeight:26.55,lineWidth:289}},{t:this.instance_1}]}).to({state:[{t:this.shape,p:{y:-31.2}},{t:this.instance_3,p:{x:1080.2,y:148.7}},{t:this.openingAnimation}]},1).to({state:[{t:this.shape_1889},{t:this.shape_1888},{t:this.shape_1887},{t:this.shape_1886},{t:this.shape_1885},{t:this.shape_1884},{t:this.shape_1883},{t:this.shape_1882},{t:this.shape_1881},{t:this.shape_1880},{t:this.shape_1879},{t:this.shape_1878},{t:this.shape_1877},{t:this.shape_1876},{t:this.shape_1875},{t:this.shape_1874},{t:this.shape_1873},{t:this.shape_1872},{t:this.shape_1871},{t:this.shape_1870},{t:this.shape_1869},{t:this.shape_1868},{t:this.shape_1867},{t:this.shape_1866},{t:this.shape_1865},{t:this.shape_1864},{t:this.shape_1863},{t:this.shape_1862},{t:this.shape_1861},{t:this.shape_1860},{t:this.shape_1859},{t:this.shape_1858},{t:this.shape_1857},{t:this.shape_1856},{t:this.shape_1855},{t:this.shape_1854},{t:this.shape_1853},{t:this.shape_1852},{t:this.shape_1851},{t:this.shape_1850},{t:this.shape_1849},{t:this.shape_1848},{t:this.shape_1847},{t:this.shape_1846},{t:this.shape_1845},{t:this.shape_1844},{t:this.shape_1843},{t:this.shape_1842},{t:this.shape_1841},{t:this.shape_1840},{t:this.shape_1839},{t:this.shape_1838},{t:this.shape_1837},{t:this.shape_1836},{t:this.shape_1835},{t:this.shape_1834},{t:this.shape_1833},{t:this.shape_1832},{t:this.shape_1831},{t:this.shape_1830},{t:this.shape_1829},{t:this.shape_1828},{t:this.shape_1827},{t:this.shape_1826},{t:this.shape_1825},{t:this.shape_1824},{t:this.shape_1823},{t:this.shape_1822},{t:this.shape_1821},{t:this.shape_1820},{t:this.shape_1819},{t:this.shape_1818},{t:this.shape_1817},{t:this.shape_1816},{t:this.shape_1815},{t:this.shape_1814},{t:this.shape_1813},{t:this.shape_1812},{t:this.shape_1811},{t:this.shape_1810},{t:this.shape_1809},{t:this.shape_1808},{t:this.shape_1807},{t:this.shape_1806},{t:this.shape_1805},{t:this.shape_1804},{t:this.shape_1803},{t:this.shape_1802},{t:this.shape_1801},{t:this.shape_1800},{t:this.shape_1799},{t:this.shape_1798},{t:this.shape_1797},{t:this.shape_1796},{t:this.shape_1795},{t:this.shape_1794},{t:this.shape_1793},{t:this.shape_1792},{t:this.shape_1791},{t:this.shape_1790},{t:this.shape_1789},{t:this.shape_1788},{t:this.shape_1787},{t:this.shape_1786},{t:this.shape_1785},{t:this.shape_1784},{t:this.shape_1783},{t:this.shape_1782},{t:this.shape_1781},{t:this.shape_1780},{t:this.shape_1779},{t:this.shape_1778},{t:this.shape_1777},{t:this.shape_1776},{t:this.shape_1775},{t:this.shape_1774},{t:this.shape_1773},{t:this.shape_1772},{t:this.shape_1771},{t:this.shape_1770},{t:this.shape_1769},{t:this.shape_1768},{t:this.shape_1767},{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1764},{t:this.shape_1763},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1760},{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751},{t:this.shape_1750},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1740},{t:this.shape_1739},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733},{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727},{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_7},{t:this.instance_6},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_5},{t:this.ProgressBar},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.MainQustion},{t:this.shape_1},{t:this.ClockSymbol},{t:this.TimeOutTxt},{t:this.GameTimeTXT},{t:this.BottomProgressBar},{t:this.QPicZoom},{t:this.GameName},{t:this.text,p:{x:1132.4,y:41.4,text:"0",font:"bold 30px 'Arial'",lineHeight:33.5,lineWidth:77}},{t:this.About1},{t:this.HowTo1_1},{t:this.instance_4},{t:this.Editor1},{t:this.Guide},{t:this.instance_3,p:{x:1135.2,y:132.6}},{t:this.finishAnimation},{t:this.txtError,p:{x:773,y:1,text:"פוצץ ת'בלון - ",font:"bold 20px 'Arial'",color:"#000000",textAlign:"",lineHeight:24.35,lineWidth:124}}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,309,1167.2,628);
// library properties:
lib.properties = {
	id: 'ED1921D956BF0C4A8A6C72A771B5B0FC',
	width: 960,
	height: 620,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Blow the balloon_atlas_.png?1540310916246", id:"Blow the balloon_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1540310918320", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1540310918320", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1540310918320", id:"an.TextInput"},
		{src:"components/ui/src/css.js?1540310918320", id:"an.CSS"},
		{src:"components/ui/src/css.js?1540310918320", id:"an.CSS"}
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
an.compositions['ED1921D956BF0C4A8A6C72A771B5B0FC'] = {
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;