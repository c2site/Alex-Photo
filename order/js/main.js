$(document).ready(function () {
    $('.tabs-nav li').click(function() {
        var el = '.parent';
        var current = $(this).data('tab');
        if (!$(this).hasClass('selected')) {
            $(this).parents('.tabs-holder').find('.tabs-nav li').removeClass('selected');
            $(this).addClass('selected');
            $(this).parents('.tabs-holder').find('div.parent').slideUp('');
            $(".tabs-holder").find(el+"[data-tab='" + current + "']").slideDown('');
        }
    });
    $('.tabs-mobile__el').click(function(e) {
        e.preventDefault();
        var el = '.section-my-tariffs__el';
        var current = $(this).data('tab');
        if (!$(this).hasClass('active')) {
            $(this).parents('.container').find('.tabs-mobile__el').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.container').find('.section-my-tariffs__el').slideUp('');
            $(".container").find(el+"[data-tab='" + current + "']").slideDown('');
        }
    });
    $('.section-my-tariff__card-el_more').click(function() {
        $(this).parents('.section-my-tariff__card-el').find('.menu-hidden').fadeIn(200);
    });
    $(document).mouseup(function (e){
        var div = $(".menu-hidden");
        if (!div.is(e.target)
          && div.has(e.target).length === 0) {
            div.fadeOut(200);
        }
    });
})
document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], {numeric: true});
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for (const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));
        for (const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('.table-transaction th.th-sort').forEach(tableTH => tableTH.addEventListener('click', (event) => getSort(event)));
});