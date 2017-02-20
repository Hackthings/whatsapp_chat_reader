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
      var data = $("#mainScreen #chatScreen .file-preview-text").text();
      if (data !== undefined && data !== "") {
        $('#mainScreen #chatScreen #loadInput').addClass('hidden');
        $('#mainScreen #chatScreen #chatData').empty().text(data);
      } else {
        $('#mainScreen #chatScreen #loadInput').removeClass('hidden');
      }
    });
  }
}