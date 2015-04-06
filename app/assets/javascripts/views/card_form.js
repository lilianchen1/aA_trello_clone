TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST["card_form"],
  tagName: "form",
  className: "new-card",

  events: {
    "click .new-card": "addCard"
  },

  render: function() {
    var content = this.template({ card: new TrelloClone.Models.Card() });
    this.$el.html(content);
    return this;
  },

  addCard: function(event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    attrs.list_id = this.model.get('list').id;
    var newCard = new TrelloClone.Models.Card(attrs);
    newCard.save(attrs, {
      success: function() {
        this.collection.add(newCard);
        var cardShow = new TrelloClone.Views.CardShow({model: newCard});
        (cardShow.render().$el).insertBefore("li.list-id" + newCard.get('list_id') + " form.new-card");

      }.bind(this)
    });
    this.$("input.card-input").val("");
  }

});
