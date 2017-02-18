var WCR = WCR || {};

WCR.ClearChat = function () {
  this.initialize();
}
WCR.ClearChat.prototype = {
  initialize:function () {
    this.clearChatClick()
  },
  clearChatClick:function () {
    $('#mainScreen #sidebar #clearChat').unbind('click');
    $('#mainScreen #sidebar #clearChat').click(function () {
      console.log("clear");
    });
  }
}