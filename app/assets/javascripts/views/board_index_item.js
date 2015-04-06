TrelloClone.Views.BoardIndexItem = Backbone.View.extend({
  template: JST["board_index_item"],
  tagName: "li",
  className: "board-index-item",

  initialize: function() {
    // this.listenTo(this.model, "sync", this.render)
  },


  render: function() {
    var content = this.template( { board: this.model });
    this.$el.html(content);
    return this;
  },

});
