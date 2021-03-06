/* !
 * @author: Filipe Drumond
 * @date: 05/09/2019
 * @version: 1.0.0
 *
 */
require('./JsBsModal');

var $ = require('jquery');
var SimpleAlerts;

module.exports = SimpleAlerts = {
    optionsDefault: {
        text: "",
        title: "",
        time: 5000,
        img: false,
        closeText: "Fechar",
        closeCallback: function () { return }
    },
    alert: function (type, options) {
        options = $.extend({}, this.optionsDefault, options);
        var close = $('<button class="btn btn-primary" data-dismiss="modal">')
            .html(`<span class="text-close">${options.closeText}</span>`).click(function (e) {e.preventDefault() });

        if (typeof options.img === "string" && options.img !== "") {
            options.img = $(`<img src="${options.img}" class="modal-img">`)
        }
        if (options.time) {
            var count = Math.floor(options.time / 1000);
            var spanCount = $('<span class="text-count"></span>').text('(' + count + ')');
            close.append(spanCount);
            var intervalID = setInterval(function () {
                spanCount.text('(' + count + ')');
                count--;
                if (count < 0) {
                    clearInterval(intervalID);
                }

            }, 1000);
            setTimeout(function () {
                modal.modal('hide');
            }, options.time);
        }

        var modal = $.jsBsModal({
            contents: {
                'close': '',
                'modal-title': [options.img, options.title],
                'modal-body': options.text,
                'modal-footer': [
                    close
                ],
            }
        }).on('hidden.bs.modal', function () {
            if (typeof options.closeCallback === 'function') {
                options.closeCallback();
            } else {
                console.log("ERRO SIMPLE ALERT :: CLOSE CALLBACK NÃO É UMA FUNÇÃO E NÃO FOI EXECUTADO");
            }
            modal.modal('dispose').remove();
        });

        modal.find('.modal-content').addClass('alert alert-' + type);

        return modal;
    },
    success: function (options) {
        return SimpleAlerts.alert('success', options);
    },
    info: function (options) {
        return SimpleAlerts.alert('info', options);
    },
    warning: function (options) {
        return SimpleAlerts.alert('warning', options);
    },
    error: function (options) {
        return SimpleAlerts.alert('error', options);
    },
};