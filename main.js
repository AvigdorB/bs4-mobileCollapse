// set footer colapse for mobile
$(window).on('load resize', function() {
    $("footer .col-md-4").each(function(index, el) {
        var link = $(this).children('a');
        var ul = $(this).find('ul');
        if ($(window).width() < 768) {
            $(link).attr({
                'class': 'footerCollapseTitle collapsed',
                'data-toggle': 'collapse',
                'aria-expanded': 'false',
                'href': '#collapseFooter' + index,
                'aria-controls': 'collapseFooter' + index
            });
            $(ul).attr({
                'id': 'collapseFooter' + index,
                'class': 'collapse'
            });
        } else {
            $(link).attr({
                'class': 'footerCollapseTitle',
                'href': 'javascript:;'
            }).removeAttr('data-toggle  aria-expanded  aria-controls');
            $(ul).removeAttr('id class');
        };
    });
}).trigger('resize');
