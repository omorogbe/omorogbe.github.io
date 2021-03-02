$('#clock').countdown('2020/10/10', function (event) {
    var $this = $(this).html(event.strftime(''
        + '<span>%w</span> weeks '
        + '<span>%d</span> days '
        + '<span>%H</span> hr '
        + '<span>%M</span> min '
        + '<span>%S</span> sec'));
});