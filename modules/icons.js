module.exports.search = function(event) {
	return [
		{_id: 1, name: 'fa-search', icon: 'the-icon-1', url: 'place.com'},
		{_id: 2, name: 'fa-times', icon: 'the-icon-2', url: 'plac2e.com'}
	];
};

module.exports.update = function(event) {
	return {_id: 1, name: 'my name', icon: 'the-icon', url: 'place.com'};
};

module.exports.get = function(event) {
	return {_id: 3, name: event, icon: 'i found this one', url: 'is here.com'};
};