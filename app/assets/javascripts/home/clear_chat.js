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
      $('#mainScreen #chatScreen #chatData').empty();
      $('#mainScreen #chatScreen #loadInput').removeClass('hidden');
      $("#chatScreen #loadInput .file-input button.fileinput-remove-button").trigger("click");
    });
  }
}