window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert("hello from backbone")
    new TrelloClone.Routers.Router({ $rootEl: $("#main")});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
