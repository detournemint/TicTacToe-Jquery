(function (root) {
  var TTT = root.TTT = (root.TTT || {});

	var UI = TTT.UI = function(game){
		this.game = game;
	};

	UI.prototype.start = function(){
		this.drawBoard();
		this.setClickCallbacks();
	};

	UI.prototype.drawBoard = function(){
		for(var i= 0; i < 3; i++) {
			for(var j = 0; j < 3; j++) {
				var $new_div = $('<div></div>');
				$new_div.addClass("square");
				$new_div.attr('data-coordinate', i + ',' + j);
				$('#board').append($new_div);
			}
		}
	};

	UI.prototype.setClickCallbacks = function() {
		var that = this;
		$('.square').click(function (event) {
			that.makeMove($(event.target).data("coordinate"));
			console.log($(event.target))
	  });
	}

	UI.prototype.makeMove = function(coord) {
		var pos = []
		pos.push(+(coord[0]))
		pos.push(+(coord[2]))
		console.log(this.game.winner());
		if(this.game.move(pos) === true)
		{
			this.placeMark(coord);
		}

	}

	UI.prototype.placeMark = function(coord){
		var moveTile = $(".square[data-coordinate=\"" + coord +"\"]");
		console.log($(event.target))
		moveTile.text(this.game.player);
		if(this.game.winner()){
			alert("player " + this.game.player + " has won!");
			location.reload();
		}
	}


})(this)

