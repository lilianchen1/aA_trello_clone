TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST["board_show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click a.add-new": "renderAddListBox",
    "click button.delete-board": "removeBoard",
  },

  render: function() {
    var content = this.template( { board: this.model });
    this.$el.html(content);
    var lists = this.model.lists();
    var that = this;
    lists.each(function(list) {
      var listView = new TrelloClone.Views.ListShow( { model: list });
      that.$("ul.list").append(listView.render().$el);
      var cards = list.cards();
      // var ord = 0;
      cards.each(function(card) {
        // card.set("ord", ord);
        // ord += 1;
        var cardShow = new TrelloClone.Views.CardShow({ model: card });
        $("li.list-id" + card.get('list_id')).append(cardShow.render().$el);
      });
      var cardForm = new TrelloClone.Views.CardForm({
        model: new TrelloClone.Models.Card({ list: list }),
        collection: list.cards()
      });
      $("li.list-id" + list.id).append(cardForm.render().$el);
    });
    return this;
  },

  renderAddListBox: function(event) {
    event.preventDefault();
    this.render();
    var newList = new TrelloClone.Models.List( { board: this.model });
    var formView = new TrelloClone.Views.ListForm({
      model: newList,
      collection: this.model.lists()
    });
    this.$("p.create-list").append(formView.render().$el);
  },

  removeListForm: function() {
    this.$("form.list-form").remove();
  },

  removeBoard: function(event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
    Backbone.history.navigate( "/", { trigger: true });
  }

});
