TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST["card_show"],
  tagName: "li",
  attributes: function() {
    return {
      class : "card",
      id : this.model.get('id')
    };
  },

  events: {
    "click button.delete-card": "deleteCard"
  },

  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    return this;
  },

  deleteCard: function(event) {
    event.preventDefault();
    this.remove();
    this.model.destroy();
  },

});
