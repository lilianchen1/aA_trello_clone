TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST["list_form"],
  tagName: "form",
  className: "list-form",

  events: {
    "click .new-list": "createNewList",
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createNewList: function(event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    attrs.board_id = this.model.get('board').id;
    this.model.save(attrs, {
      success: function() {
        this.collection.add(this.model);
        var listShow = new TrelloClone.Views.ListShow( { model: this.model });
        $("ul.list").prepend(listShow.render().$el);
      }.bind(this)
    });
    this.$el.remove();
  }
});
