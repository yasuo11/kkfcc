/**
 A jQuery plugin for search hints

 Author: Lorenzo Cioni - https://github.com/lorecioni
 */

(function($) {
    $.fn.autocomplete = function(params) {

        //Selections
        var currentSelection = -1;
        var currentProposals = [];

        //Default parameters
        params = $.extend({
            hints: [],
            placeholder: '搜菜谱',
            width: 200,
            height: 16,
            showButton: true,
            buttonText: '搜菜谱',
            onSubmit: function(text){},
            onBlur: function(){
                window.location.href = "/search/searchRecipe?keyWord=" + $("#search-text").val();
            }
        }, params);

        //Build messagess
        this.each(function() {
            //Container
            var searchContainer = $('<div></div>')
                .addClass('autocomplete-container')
                .css('height', params.height * 2);

            //Text input
            var input = $('<input type="text" autocomplete="off" name="query" id="search-text">')
                .attr('placeholder', params.placeholder)
                .addClass('autocomplete-input')
                .css({
                    'width' : params.width,
                    'height' : params.height
                });

            if(params.showButton){
                input.css('border-radius', '3px 0 0 3px');
            }

            //Proposals
            var proposals = $('<div></div>')
                .addClass('proposal-box')
                .css('width', params.width + 18)
                .css('top', input.height() + 20);
            var proposalList = $('<ul></ul>')
                .addClass('proposal-list');

            proposals.append(proposalList);

            input.keydown(function(e) {
                switch(e.which) {
                    case 38: // Up arrow
                        e.preventDefault();
                        $('ul.proposal-list li').removeClass('selected');
                        if((currentSelection - 1) >= 0){
                            currentSelection--;
                            $( "ul.proposal-list li:eq(" + currentSelection + ")" )
                                .addClass('selected');
                        } else {
                            currentSelection = -1;
                        }
                        break;
                    case 40: // Down arrow
                        e.preventDefault();
                        if((currentSelection + 1) < currentProposals.length){
                            $('ul.proposal-list li').removeClass('selected');
                            currentSelection++;
                            $( "ul.proposal-list li:eq(" + currentSelection + ")" )
                                .addClass('selected');
                        }
                        break;
                    case 13: // Enter
                        if(currentSelection > -1){
                            var text = $( "ul.proposal-list li:eq(" + currentSelection + ")" ).html();
                            input.val(text);
                        }
                        currentSelection = -1;
                        proposalList.empty();
                        params.onSubmit(input.val());
                        break;
                    case 27: // Esc button
                        currentSelection = -1;
                        proposalList.empty();
                        input.val('');
                        break;
                }
            });

            input.bind("keyup", function(e){
                if(e.which != 13 && e.which != 27
                    && e.which != 38 && e.which != 40){
                    currentProposals = [];
                    currentSelection = -1;
                    proposalList.empty();
                    if(input.val() != ''){
                        $.ajax({
                            url: '/search/hint.do',
                            data: {
                                keyWord: input.val()
                            },
                            type: 'get',
                            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                            success: function(result) {
                                proposalList.empty();
                                for(var i = 0; i < result.length; i++){
                                    currentProposals.push(result[i]);
                                    var element = $('<li></li>')
                                        .html(result[i])
                                        .addClass('proposal')
                                        .click(function(){
                                            input.val($(this).html());
                                            proposalList.empty();
                                            params.onSubmit(input.val());
                                        })
                                        .mouseenter(function() {
                                            $(this).addClass('selected');
                                        })
                                        .mouseleave(function() {
                                            $(this).removeClass('selected');
                                        });
                                    proposalList.append(element);
                                }
                            },
                            error: function () {
                                alert("异常错误！")
                            }
                        });

                    }
                }
            });

            input.blur(function(e){
                currentSelection = -1;
                //proposalList.empty();
                params.onBlur();
            });

            searchContainer.append(input);
            searchContainer.append(proposals);

            if(params.showButton){
                //Search button
                var button = $('<div></div>')
                    .addClass('autocomplete-button')
                    .html(params.buttonText)
                    .css({
                        'height': params.height + 2,
                        'line-height': params.height + 2 + 'px'
                    })
                    .click(function(){
                        proposalList.empty();
                        params.onSubmit(input.val());
                    });
                searchContainer.append(button);
            }

            $(this).append(searchContainer);

            if(params.showButton){
                //Width fix
                searchContainer.css('width', params.width + button.width() + 50);
            }
        });

        return this;
    };

})(jQuery);