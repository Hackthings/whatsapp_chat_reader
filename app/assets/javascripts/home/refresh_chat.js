var WCR = WCR || {};

WCR.RefreshChat = function () {
  this.initialize();
}
WCR.RefreshChat.prototype = {
  initialize:function () {
    this.refreshChatClick()
  },
  refreshChatClick:function () {
    $('#mainScreen #sidebar #refreshChat').unbind('click');
    $('#mainScreen #sidebar #refreshChat').click(function () {
      console.log("refresh");
    });
  }
}