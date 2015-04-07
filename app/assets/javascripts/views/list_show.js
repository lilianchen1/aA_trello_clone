TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST["list_show"],
  tagName: "li",
  attributes: function() {
    return {
      class : "list-id" + this.model.id,
      id : "list"
    };
  },

  initialize: function() {
    this.$el.sortable({
      connectWith: "li#list",
      tolerance: "pointer",
      start: function() {

      }
    });
  },

  // cardSortingSetup: function(event) {
  //   var cardId = parseInt(event.currentTarget.id);
  //   var that = this;
  //   var clickedCard;
  //   this.model.cards().each(function(card) {
  //     if (card.id === cardId) {
  //       clickedCard = card;
  //     }
  //   });
  //   this.updateCardSort(clickedCard);
  // },

  events: {
    "click button.delete-list": "deleteList",
    "mousedown li.card": "updateCardSort",
  },

  updateCardSort: function(event) {
    var that = this;
    this.$el.sortable({
      update: function() {
        var cardId = parseInt(event.target.id);
        var parentEl = event.target.parentElement;
        if (!cardId) {
          cardId = parentEl.id;
        }
        var card = new TrelloClone.Models.Card({id: cardId});
        if (parentEl.id !== "list") {
          parentEl = parentEl.parentElement;
        }
        var parentClass = parentEl.className;
        newListId = parseInt(parentClass.slice(7, 9));
        card.set("list_id", newListId);
        // card.set("ord");
        card.save();
      }
    });
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
