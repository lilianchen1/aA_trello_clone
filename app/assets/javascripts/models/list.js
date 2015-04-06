TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function() {
    return "api/lists";
  },

  cards: function() {
    if (this._cards) {
      return this._cards;
    }
    this._cards = new TrelloClone.Collections.Cards([], { list: this });
    return this._cards;
  },

  parse: function(response) {
    if (response.cards) {
      this.cards().set(response.cards);
      delete response.cards;
    }
    return response;
  }
});
