// Hypothetical JSON or javascript object
var photos = [{url: "blah1", tags: ["photo", "fun", "sydney"]}, {url: "blah1", tags: ["sydney", "food"]}];

var t = function (emit) {
	var tags = [];
	for (var p in photos) {
		var phototag = photos[p]['tags'];
		for (var t in phototag) {
			tags.push(phototag[t]);
		}
	}
	emit(tags);
}

var c = function(a, emit) {
	list = [];
	for (var x in a) {
		var exists = 0;
		for (var c in list) {
			if (list[c]['tag'] == a[x]) {
				exists = c;
			}
		}
		if (exists == 0) {
			list.push({tag: a[x], count: 1});
		} else {
			list[exists]['count']++;
		}
	}
	emit(list)
}

// SHow a list of tags and count
t(function(d) {
	c(d, function(emit) {console.log(emit); });
});
