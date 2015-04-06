TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST["board_form"],
  tagName: "form",
  className: "board",

  events: {
    "click .new-board": "createBoard",
  },

  render: function() {
    var content = this.template( { board: this.model });
    this.$el.html(content);
    return this;
  },

  createBoard: function(event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    this.model.save(attrs, {
      success: function() {
        this.collection.add(this.model);
        Backbone.history.navigate( "/boards/" + this.model.id, {trigger: true});
      }.bind(this)
    });
  }
})
