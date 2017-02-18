var WCR = WCR || {};

WCR.LoadChat = function () {
  this.initialize();
}
WCR.LoadChat.prototype = {
  initialize:function () {
    this.loadChatClick();
  },

  loadChatClick:function () {
    $('#mainScreen #sidebar #loadChat').unbind('click');
    $('#mainScreen #sidebar #loadChat').click(function () {
      console.log("load");
    });
  }
}