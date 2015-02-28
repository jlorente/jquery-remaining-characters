/**
 * @author      José Lorente <jose.lorente.martin@gmail.com>
 * @copyright   José Lorente
 * @version     1.0
 */

/**
 * 
 * @param jQuery $
 * @param document document
 * @param undefined undefined
 */
(function ($, d, u) {
    var rFunction = function (options) {
        var defaults = {
            label: 'p',
            text: '{n}',
            invalidClass: 'invalid'
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var $label = $(d.createElement(options.label));
            var $_this = $(this);
            var max = $_this.attr("maxlength");
            var update = function(c) {
                var r = max - c;
                $label.text(options.text.replace('{n}', r));
                $label.toggleClass(options.invalidClass, r < 0);
            };

            if (max === u) {
                throw "jQuery RemainingCharacters: Couldn't find maxlength attribute on attached element"
            }
            if ($_this.next(".char-counter").length > 0) {
                return;
            }
            $label.text(max).addClass('char-counter');
            $_this.after($label);
            update($_this.val().length);
            $_this.on('keyup', function () {
                update($(this).val().length);
            });
        });
    };

    /**
     * Exports
     */
    $.fn.remainingCharacters = rFunction;
})(jQuery, document, undefined);