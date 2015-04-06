TrelloClone.Views.BoardIndex = Backbone.View.extend({
  template: JST["board_index"],

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(board) {
      var boardIndexItem = new TrelloClone.Views.BoardIndexItem({ model: board });
      this.$("ul.boards-index").append(boardIndexItem.render().$el);
    }.bind(this));
    return this;
  },

});
