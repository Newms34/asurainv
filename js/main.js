var app = angular.module('asurapp', []).controller('asurcon', function($scope) {
    $scope.words = {
        //note the adverbs arent actually adverbs!
        adv: ["anti", "bi", "deci", "di", "exo", "ferro", "hepto", "hexo", "mono", "omni", "para", "poly", "post", "pre", "pro", "in", "quasi", "octo", "nono", "deci", "deca", "uni", "hetero", "homo", "hyper", "hypo", "gymno", "quatro", "sesqui", "semi", "tetra", "trans", "tri"],
        adj: {
            pref: ["a", "accipitro", "aethero", "alpha", "amnio", "amo", "an", "ana", "ani", "ano", "ansero", "anti", "aquilo", "asino", "astro", "atmo", "auto", "avo", "bari", "baryo", "baso", "ber", "beta", "bi", "bio", "bovo", "bubalo", "camelo", "cancro", "cano", "capro", "cardio", "cele", "celestio", "ceno", "centi", "cervo", "ceta", "cetio", "chlor", "chloro", "cho", "chroni", "chrono", "chryso", "co", "con", "corvo", "crocodilo", "cryo", "crypto", "cyber", "cygno", "data", "delphi", "delta", "deo", "dermo", "dia", "dio", "dis", "duo", "duro", "dyno", "echo", "electro", "elemento", "elephanto", "en", "energo", "ento", "entomo", "entro", "enviro", "equo", "exo", "falcono", "felo", "fero", "ferro", "fino", "firo", "fissi", "flo", "fluxo", "fusso", "galacto", "gamma", "geneto", "geno", "giga", "gravi", "haemo", "halo", "hano", "hecto", "helio", "hemo", "hexi", "hippopotamo", "hirco", "hirundo", "holo", "hydro", "hystrico", "ico", "iconic", "icono", "imaging", "in", "inter", "intra", "intro", "invisi", "ion", "iono", "iso", "isomero", "istro", "jingo", "joculo", "judio", "karyo", "keno", "kilo", "kaleido", "kineto", "lacerto", "laro", "leono", "leporo", "lineo", "limno", "lacustro", "lumbrico", "lupo", "macro", "mag", "magna", "magno", "mega", "mel", "mem", "meta", "metha", "meto", "metra", "metre", "micro", "mid", "midi", "milli", "mono", "moro", "morpho", "multi", "muono", "muro", "muta", "myo", "nano", "necro", "nega", "neural", "neuro", "neutral", "neutro", "new", "nis", "nit", "nitro", "non", "nor", "nuc", "nucleo", "opti", "osteo", "ovo", "pardo", "passero", "patho", "pavono", "phero", "photo", "phy", "physio", "pico", "pio", "pisco", "plasti", "plato", "plexi", "porco", "pro", "proto", "psi", "psy", "pteropo", "pur", "pyro", "quad", "quadra", "quadro", "quanto", "quasi", "radio", "rano", "re", "regulo", "repto", "retro", "rho", "salvo", "scolopendro", "self-", "sero", "serpento", "servo-", "som", "sonic", "sono", "sorico", "stego", "strato", "struthiono", "styro", "sub", "suillo", "super", "symbio", "synchro", "syno", "syntho", "tachyo", "tauro", "techno", "temporo", "terra", "thanato", "thauma", "thermo", "theta", "tigro", "tri", "trico", "turbo", "ulti", "ultra", "ultri", "un", "uni", "uri", "urso", "ventro", "vespo", "vipero", "viso", "vitulo", "viverro", "vulpo", "vulturo", "xeno", "xero", "xylo", "xantho", "yttro", "zebro", "zibelo", "zeno", "zelo", "zoo"],
            base: ["accipitrine", "aetheric", "anserine", "aphanous", "aquiline", "artificial", "asinine", "aural", "auric", "automated", "automatic", "autonomic", "autonomous", "auxiliary", "avine", "backup", "band", "baryon", "bookah", "bovine", "bubaline", "bulkhead", "cameline", "cancrine", "canine", "capacitance", "caprine", "celestial", "cellular", "ceramic", "cervine", "charge", "circuit", "cloaking", "collector", "compressive", "containment", "control", "corvine", "crocodiline", "damping", "degaussive", "diagnostic", "differential", "diffraction", "dilithium", "dimensional", "dissipation", "dorsal", "dynamic", "electrical", "elemental", "elephantine", "environmental", "equine", "extendable", "falconine", "feline", "ferine", "fission", "fluid", "flux", "fusion", "gas", "gaseous", "gel", "gene", "genetic", "genic", "gradiant", "gravity", "guidance", "haemological", "harmonic", "hippopotamine", "hircine", "hirundine", "hystricine", "inductive", "inertial", "inhibitive", "insulating", "integrated", "interlaced", "inverted", "isolated", "jingoist", "jellied", "jocular", "judicial", "jecoral", "kinetic", "kainotophobia", "kakorrhaphiophobic", "lacertine", "larine", "lateral", "leonine", "leporine", "light", "linear", "liquid", "logic", "logical", "lumbricine", "limnal", "lacustrine", "lupine", "magio", "magnetic", "metric", "mode", "modular", "murine", "narrow", "negative", "neural", "neuronal", "nominal", "nutative", "optical", "orbital", "ovine", "pardine", "particulate", "passerine", "pathic", "pattern", "pavonine", "picine", "piscine", "planar", "polar", "porcine", "positive", "pteropine", "quadratic", "quantum", "radiative", "radio", "ranine", "reactive", "receptive", "reconstructed", "regulatory", "resistive", "responsive", "scolopendrine", "secondary", "semiferrous", "sequenced", "serpentine", "solar", "solid", "soricine", "spatial", "spectral", "spherical", "stable", "standard", "static", "stellar", "struthionine", "suilline", "synergetic", "tachyon", "taurine", "telescopic", "thaumatic", "thermal", "tigrine", "torsive", "transitional", "translational", "transmissive", "trophic", "uric", "ursine", "utility", "ventral", "vespine", "viperine", "visual", "vituline", "viverrine", "voltaic", "vulpine", "vulturine", "watt", "wave", "wound", "winded", "windless", "welded", "wide", "xeric", "xanthic", "xanthocarpous", "xanthochroic", "xanthocomic", "xanthocyanoptic", "xanthodermic", "xanthodontic", "xanthometric", "xanthophyllic", "xenodochial", "xenolalia", "xerophobic", "xerophillic", "xylophoric", "xylophilic", "xylophobix", "ypsiliform", "yttriferous", "ytterbic", "zebrine", "zibeline", "zelophobic", "zelotic", "zenocentric", "zeugmatographic", "zoophytological", "zirconic"]
        },
        noun: ["accelerator", "acid", "algorithm", "amplifier", "analysis", "analyzer", "android", "antenna", "apparatus", "armament", "armor", "automation", "biont", "catalyst", "catalyzer", "converter", "deflector", "device", "diffraction", "diffractor", "discriminator", "display", "disruptor", "drill", "driver", "element", "emulator", "engine", "enhancer", "facilitator", "factioner", "field", "force", "generator", "golem", "harmonics", "impulse", "inducer", "infuser", "inhibitor", "injector", "instrument", "instrumentation", "intercom", "interlock", "inversion", "inverter", "isolator", "jig", "jargonaut", "jingoist", "jazzophone", "justiciar", "kainotophobe", "kakorrhaphiophobe", "kinetoscope", "kinescope", "kinetics", "laser", "latch", "lift", "light", "line", "liquid", "load", "lobe", "lock", "magnet", "main", "manifold", "mass", "material", "measure", "measurer", "memory", "mesh", "metal", "meter", "mirror", "mode", "motor", "node", "nutation", "oscillator", "pack", "particle", "pattern", "piston", "plane", "plasma", "pod", "polymer", "portal", "powerplant", "probe", "processor", "program", "projector", "quad", "qualifier", "radiation", "randomizer", "reaction", "reactor", "reader", "recalibration", "reciever", "recorder", "rectifier", "regulator", "resistor", "robot", "scanner", "scope", "section", "sequencer", "shaft", "sheeting", "simulator", "solid", "spectrum", "sphere", "square", "standard", "star", "stasis", "stimulator", "stream", "subroutine", "sweep", "synthesizer", "tank", "telemetry", "telescope", "thruster", "tractor", "translator", "transmitter", "transponder", "transporter", "unit", "utility", "vacuum", "ventilator", "vertex", "vial", "vibrator", "viewer", "visualizer", "wand", "warp", "weapon", "welder", "xperiment", "xanthocarp", "xanthochroia", "xanthocomic", "xanthocyanopsy", "xanthoderm", "xanthodont", "xanthometer", "xanthophyll", "yanker", "zeugmatography", "zenophile", "zenographer", "zelophile", "zoodynamics", "zygodactyl", "zymurgy", "zwischenzug", "zoophytology"]
    }

    $scope.getFiltWrd = function(a, l) {
        var wrdOpts = a.filter(function(w) {
            return w[0] == l;
        });
        var wrd = wrdOpts[Math.floor(Math.random() * wrdOpts.length)];
        try {
            return wrd;
        } catch (e) {
            $scope.inv = 'Uh oh! We can\'t find a match for one of the letters in your acronym (a/an ' + l + '). This is most likely the result of using a very uncommon letter (z, q, x, etc.). Try rerolling if you want!'
        }
    }
    $scope.inWrd = '';
    $scope.wrdInst = function(w,t,l) {
        this.wrd = w;
        this.type = t;
        this.let=l;
        this.held = false;
    }
    $scope.makeAcro = function() {
        if (!$scope.inWrd || $scope.inWrd == '') {
            $scope.inv = '';
            $scope.$apply();
            return false;
        }
        $scope.results = [];
        var theWrd = $scope.inWrd.split('').filter(function(n) {
            return !n.match(/[^A-Za-z]/)
        }).map(function(n) {
            return n.toLowerCase()
        });

        var numLets = theWrd.length;
        var i = 0;
        var str = '';
        while (i < numLets - 1) {
            var chance = Math.random();
            if (chance > .90 && i < numLets - 3 && $scope.getFiltWrd($scope.words.adv, theWrd[i])) {
                //three part word (adv,pref,base)
                //adv
                var newAdv = $scope.getFiltWrd($scope.words.adv, theWrd[i])
                str += newAdv;
                $scope.results.push(new $scope.wrdInst(newAdv.toLowerCase(),0,theWrd[i]));
                i++;
                //pref
                var newPref = $scope.getFiltWrd($scope.words.adj.pref, theWrd[i])
                str += newPref;
                $scope.results.push(new $scope.wrdInst(newPref.toLowerCase(),1,theWrd[i]));
                i++
            
            } else if (chance > .66 && i < numLets - 2) {
                //two part word (pref, base)
                //pref
                var newPref = $scope.getFiltWrd($scope.words.adj.pref, theWrd[i])
                str += newPref;
                $scope.results.push(new $scope.wrdInst(newPref.toLowerCase(),1,theWrd[i]));
                i++
            }
                //base
                var newBase = $scope.getFiltWrd($scope.words.adj.base, theWrd[i]);
                str += newBase;
                $scope.results.push(new $scope.wrdInst(newBase.toLowerCase(),2,theWrd[i]));
                i++;
            str += ' ';
        }
        var newNoun = $scope.getFiltWrd($scope.words.noun, theWrd[i]);
        str += newNoun;
        $scope.results.push(new $scope.wrdInst(newNoun.toLowerCase(),3,theWrd[i]));
        if (str.indexOf('undefined') == -1) {
            $scope.inv = str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase();
        }
        console.log($scope.results)
    }
    $scope.alterAcro = function() {
        var tempArr = angular.copy($scope.results);//because object references!
        var str = '';
        var wordCats=['adv','pref','base','noun'];//meow
        for (var n=0;n<$scope.results.length;n++){
            if($scope.results[n].held){
                str+=$scope.results[n].wrd;//this word is 'held', so just throw it in
                if ($scope.results[n].type==2) str+=' ';
            }else{
                //word NOT held, so grab a new one!
                var newWrd = null;
                if($scope.results[n].type==0){
                    newWrd = $scope.getFiltWrd($scope.words.adv, $scope.results[n].let);    
                }else if($scope.results[n].type==1){
                    newWrd = $scope.getFiltWrd($scope.words.adj.pref, $scope.results[n].let);    
                }else if($scope.results[n].type==2){
                    newWrd = $scope.getFiltWrd($scope.words.adj.base, $scope.results[n].let);    
                }else{
                    newWrd = $scope.getFiltWrd($scope.words.noun, $scope.results[n].let);    
                }
                $scope.results[n].wrd = newWrd;
                str+=newWrd;
                if($scope.results[n].type==2){
                    str+=' ';  
                }
            }
        }
        $scope.inv=str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase(); 
        console.log($scope.results)
    }
    $scope.refWrd = function(lookWrd) {
        var win = window.open('https://en.wiktionary.org/wiki/' + lookWrd + '#English', '_blank');
        win.focus();
    }
    $scope.clearAndRun = function(){
        $scope.inv = '';
        $scope.results=[];
        $scope.makeAcro();
    }
    $scope.checkHeldRun = function(){
        var hasHeld = false;
        for(var i=0;i<$scope.results.length;i++){
            if($scope.results[i].held){
                hasHeld=true;
            }
        };
        if(hasHeld){
            //one of the words is locked, so run alterAcro
            $scope.alterAcro();
        }else{
            $scope.makeAcro();
        }
    }
});
