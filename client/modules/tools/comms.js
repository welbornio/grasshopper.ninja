angular.module('grasshopper.comms', ['btford.socket-io', 'grasshopper.model'])

	.factory('io', function(socketFactory, model) {
		var io = socketFactory();

  		io.on('search', function(data) {
        	model.searchResults = data;
        });

        io.on('update', function(data) {
        	model.icon = data;
        });
		
		return io;
	})

    .factory('comms', function($window, $timeout, io) {
        var comms = {
			search: function(data) {
                io.emit('search', data);
            },

            update: function (data) {
            	io.emit('update', data);
            },

            get: function(data) {
            	io.emit('get', data);
            }
        };

        return comms;
    });