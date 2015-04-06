TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: function() {
    return "api/lists";
  },
  model: TrelloClone.Models.List
});
