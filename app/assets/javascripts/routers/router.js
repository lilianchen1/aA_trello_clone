TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.boards = new TrelloClone.Collections.Boards();
  },

  routes: {
    "": "index",
    "boards/new": "new",
    "boards/:id": "show"
  },

  index: function() {
    this.boards.fetch();
    var indexShow = new TrelloClone.Views.BoardIndex({ collection: this.boards });
    this._swapView(indexShow);

  },

  new: function() {
    var board = new TrelloClone.Models.Board();
    var newView = new TrelloClone.Views.BoardForm({
      model: board,
      collection: this.boards
    });
    this._swapView(newView);
  },

  show: function(id) {
    var board = this.boards.getOrFetch(id);
    var boardShow = new TrelloClone.Views.BoardShow( { model: board } );
    this._swapView(boardShow);

  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
