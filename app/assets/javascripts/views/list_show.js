TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST["list_show"],
  tagName: "li",
  className: function() {
    return "list-id" + this.model.id;
  },

  events: {
    "click button.delete-list": "deleteList"
  },

  render: function() {
    var content = this.template( { list: this.model } );
    this.$el.html(content);
    return this;
  },

  deleteList: function(event) {
    event.preventDefault();
    this.remove();
    this.model.destroy();
  }
});
