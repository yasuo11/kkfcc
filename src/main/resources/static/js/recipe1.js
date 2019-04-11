!function (t) {
    var e = {
    };
    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {
            }
        };
        return t[i].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
    }
    n.m = t,
        n.c = e,
        n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        },
        n.r = function (t) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: 'Module'
            }),
                Object.defineProperty(t, '__esModule', {
                    value: !0
                })
        },
        n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: t
            }), 2 & e && 'string' != typeof t) for (var o in t) n.d(i, o, function (e) {
                return t[e]
            }.bind(null, o));
            return i
        },
        n.n = function (t) {
            var e = t && t.__esModule ? function () {
                    return t.default
                }
                : function () {
                    return t
                };
            return n.d(e, 'a', e),
                e
        },
        n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        n.p = '//s.chuimg.com/dist/',
        n(n.s = 150)
}({
    1: function (t, e) {
        t.exports = function (t) {
            function e(t) {
                'undefined' != typeof console && (console.error || console.log) ('[Script Loader]', t)
            }
            try {
                'undefined' != typeof execScript && 'undefined' != typeof attachEvent && 'undefined' == typeof addEventListener ? execScript(t)  : 'undefined' != typeof eval ? eval.call(null, t)  : e('EvalError: No eval function available')
            } catch (t) {
                e(t)
            }
        }
    },
    132: function (t, e) {
        $(document).on('click', '.open-in-dish-popup', function (t) {
            var e;
            return e = $(this).data('id'),
                openDish(e),
                t.preventDefault()
        }).on('click', '.noti-group-more-notis-link', function (t) {
            return $(this).closest('.noti-group-more-notis').hide(),
                $(this).closest('.noti-group-noti-list').find('.hidden').show()
        })
    },
    133: function (t, e) {
        var n,
            i;
        !function () {
            var t,
                e;
            if (e = 0, 8, t = function () {
                return $.ajax({
                    url: '/activity/async_feeds/',
                    type: 'GET',
                    dataType: 'html',
                    data: {
                        start: e,
                        limit: 8,
                        format: 'html'
                    }
                }).done(function (t) {
                    return $.trim(t) ? ($('.activity-feeds').append(t), $('.activity-more-feeds').html('<a href="#">加载更多动态</a>'), $('img[data-src]').unveil(), $('.inline-comment-input input[name="reply"]').atwho({
                        at: '@',
                        data: $.parseJSON($('#atCandiates').val())
                    }).atwho({
                        at: ':',
                        data: faces,
                        tpl: '<li data-value="${content}">${content} ${atwho-at}${name}</li>'
                    }).atwho({
                        at: '：',
                        data: faces,
                        tpl: '<li data-value="${content}">${content} ${atwho-at}${name}</li>'
                    }), e += 8)  : ($('.activity-no-feeds').show(), void $('.activity-more-feeds').hide())
                })
            }, $('.activity-feeds').length) $(window).debounce('scroll', function () {
                if ($(window).scrollTop() + $(window).height() >= $('.activity-more-feeds').offset().top) return $('.activity-more-feeds').html('服务器正在努力加载……'),
                    t()
            }, 100),
                t()
        }(),
            $(document).on('focus', '.inline-comment-input input[name="reply"]', function () {
                var t;
                return (t = $(this)).finish().animate({
                    width: '88%'
                }, 200, function () {
                    return t.next('input[type="submit"]').fadeIn(100)
                })
            }).on('click', '.feed.dish-feed .more-comments', function (t) {
                return t.preventDefault(),
                    $(this).parent().find('.more-comments').toggle(),
                    $(this).closest('.comments-list').children('.comment.hidden').toggle()
            }).on('click', '[role="reply-comment"]', function (t) {
                var e,
                    n,
                    i,
                    o;
                if (t.preventDefault(), i = $(this).closest('[role="comment"]').data('author-name'), (e = $(this).closest('.dish-feed').find('.inline-comment-input')).length) return o = 0 === (o = (n = e.find('input[name="reply"]')).val().trim()).length ? '@' + i + ' ' : o + ' @' + i,
                    n.val(o)
            }).on('mouseenter', '.feed.dish-feed .comment-text', function () {
                return $(this).find('.hidden').show()
            }).on('mouseleave', '.feed.dish-feed .comment-text', function () {
                return $(this).find('.hidden').hide()
            }).on('submit', 'form.inline-comment-input', function (t) {
                var e;
                return t.preventDefault(),
                    e = $(this),
                    $.ajax({
                        url: '/activity/async_comments/',
                        type: 'POST',
                        data: e.serializeArray(),
                        success: function (t) {
                            return e.children('input[name="reply"]').val(''),
                                e.prev().append(t),
                                $('img[data-src]').unveil()
                        },
                        error: function (t) {
                            return alert('评论失败了...')
                        }
                    })
            }).on('mouseenter', '.feed.dish-feed .cover', function () {
                var t,
                    e;
                return t = (e = $(this)).closest('.dish-feed'),
                    e.find('img').finish().animate({
                        opacity: 0.9
                    }, 100),
                    t.data('digged') ? (t.find('.undigg-link').finish().show(), t.find('.digg-link').finish().hide())  : (t.find('.undigg-link').finish().hide(), t.find('.digg-link').finish().show())
            }).on('mouseleave', '.feed.dish-feed .cover', function () {
                return $(this).find('img').css('opacity', '1'),
                    $(this).closest('.dish-feed').find('.digg-link, .undigg-link').hide()
            }).on('click', '.feed.dish-feed .digg-link', function (t) {
                var e;
                return t.preventDefault(),
                    e = $(this),
                    n(e.closest('.dish-feed')),
                    e.hide(),
                    e.next('.undigg-link').show()
            }).on('click', '.feed.dish-feed .undigg-link', function (t) {
                var e;
                return t.preventDefault(),
                    e = $(this),
                    i(e.closest('.dish-feed')),
                    e.hide(),
                    e.prev('.digg-link').show()
            }).on('click', '.feed.dish-feed .icon-digg.not-digged', function (t) {
                return t.preventDefault(),
                    n($(this).closest('.dish-feed'))
            }).on('click', '.feed.dish-feed .icon-digg.digged', function (t) {
                return t.preventDefault(),
                    i($(this).closest('.dish-feed'))
            }),
            n = function (t) {
                var e,
                    n;
                return n = t.data('dish-id'),
                    e = parseInt(t.find('.n-diggs').html(), 10),
                    t.find('.n-diggs').html(e + 1 + ' 赞'),
                    t.find('.icon-digg').removeClass('not-digged'),
                    t.find('.icon-digg').addClass('digged'),
                    t.data('digged', !0),
                    $.ajax({
                        url: '/dish/' + n + '/digg/',
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            xf: xf()
                        }
                    }).done(function (t) {
                        if ('error' === t.status) return alert('你赞的太多了，休息一下吧')
                    })
            },
            i = function (t) {
                var e,
                    n;
                return n = t.data('dish-id'),
                    e = parseInt(t.find('.n-diggs').html(), 10),
                    t.find('.n-diggs').html(e - 1 + ' 赞'),
                    t.find('.icon-digg').removeClass('digged'),
                    t.find('.icon-digg').addClass('not-digged'),
                    t.data('digged', !1),
                    $.ajax({
                        url: '/dish/' + n + '/undigg/',
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            xf: xf()
                        }
                    })
            }
    },
    134: function (t, e) {
        $(document).ready(function () {
            var t,
                e,
                n,
                i;
            return $('.event-info').on('click', '.event-info-edit', function () {
                return $('.page-info').hide(),
                    $('.event-edit').fadeIn()
            }),
                $('.event-info').on('click', '.cancel-event-info-edit', function () {
                    return $('.event-edit').fadeOut(function () {
                        return $('.page-info').show()
                    })
                }),
                $('.event-info').on('click', '.event-info-submit', function () {
                    var t,
                        e,
                        n;
                    return n = $('.event-info-textarea').val(),
                        e = $(this).data('event-id'),
                        t = {
                            desc: n,
                            xf: xf()
                        },
                        $.ajax({
                            type: 'POST',
                            url: '/event/' + e + '/update/',
                            data: t,
                            dataType: 'json',
                            beforeSend: function () {
                                return $('.event-info-submit').attr('disabled', 'disabled')
                            },
                            success: function (t) {
                                var e;
                                return e = t.content.desc,
                                    $('.page-info .desc').html(e),
                                    $('.event-edit').fadeOut(function () {
                                        return $('.page-info').show()
                                    }),
                                    $('.event-info-submit').removeAttr('disabled')
                            }
                        })
                }),
                n = $('#upload-form'),
                i = n.attr('action'),
                t = n.find('#desc'),
                e = n.find('#event-name'),
                n.on('submit', function (n) {
                    var o;
                    n.preventDefault(),
                        o = $(this),
                        t.val(t.val() + ' #' + e.val() + '#'),
                        $.ajax({
                            url: i,
                            type: 'POST',
                            data: o.serialize().replace(/\+/g, ' '),
                            iframe: !0,
                            files: $('#img')
                        }).done(function (t) {
                            alert('上传作品成功！'),
                                $('#upload-dish-modal').trigger('reveal:close'),
                                o.get(0).reset()
                        })
                })
        })
    },
    135: function (t, e) {
        window.setupDigg = function () {
            return $('.digg-button').toggleable({
                name: 'undigged',
                text: '赞',
                action: function () {
                    var t;
                    return t = $(this).data('dish-id'),
                        $.ajax({
                            url: '/dish/' + t + '/digg/',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                xf: xf()
                            }
                        }).done(function (t) {
                            var e;
                            if ('error' !== t.status) return e = t.content.digg_user,
                                $('.dish-diggs-block .content>.pure-g').prepend('<div class="pure-u" data-user-id="' + e.id + '">\n    <a class="image-link" title="' + e.name + '" href="/cook/' + e.id + '/">\n        <img src="' + e.pic + '" alt="' + e.name + '" width="30" height="30"></a>&nbsp;\n</div>'),
                            $('[role="more"]').is(':visible') && $('.digg-user:gt(13)').hide(),
                                $('.dish-diggs-block .title').html(t.content.n_diggs + ' 赞');
                            alert('你赞的太多了，休息一下吧')
                        })
                }
            }, {
                name: 'digged',
                text: '已赞',
                hoverText: '取消',
                class : 'gray-button',
                action: function () {
                    var t;
                    return t = $(this).data('dish-id'),
                        $.ajax({
                            url: '/dish/' + t + '/undigg/',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                xf: xf()
                            }
                        }).done(function (t) {
                            return $('.dish-diggs-block .content [data-user-id=\'' + t.content.undigg_user.id + '\']').remove(),
                                $('.dish-diggs-block .title').html(t.content.n_diggs + ' 赞'),
                                $('.dish-diggs-block .content>.pure-g').children('[data-user-id]:lt(15)').show()
                        })
                }
            })
        },
            setupDigg(),
            $(document).on('click', '.dish-rating-button', function (t) {
                var e,
                    n;
                return t.preventDefault(),
                    n = $('.dish-rating-recipe'),
                    e = $(this).find('i'),
                    n.is(':visible') ? (n.slideUp(), e.removeClass('up-arrow').addClass('down-arrow'))  : (n.slideDown(), e.addClass('up-arrow').removeClass('down-arrow'))
            }),
            $(document).on('submit', '.dish-rating-recipe form', function (t) {
                var e;
                return e = $(this).attr('action'),
                    t.preventDefault(),
                    $.ajax({
                        url: e,
                        type: 'POST',
                        data: $(this).serializeArray()
                    }).done(function (t) {
                        return $('.dish-rating-button span').html(t.content.text + '，修改评价')
                    }),
                    $('.dish-rating-button').trigger('click')
            }),
            $(document).on('click', '[role="user-delete-dish"]', function (t) {
                var e,
                    n;
                if (t.preventDefault(), confirm('你真的要删掉我吗(⊙_⊙)？')) return e = $(this).data('layer'),
                    n = $(this).data('url'),
                    $.ajax({
                        type: 'POST',
                        url: n,
                        data: {
                            xf: xf()
                        }
                    }).done(function (t) {
                        return 'error' === t.status && alert('权限不足'),
                            '1' === e ? location.reload(!0)  : location.href = t.content.redirect_to
                    })
            })
    },
    136: function (t, e) {
        $('.rl-show .collect-button').toggleable({
            name: 'uncollected',
            text: '收藏',
            class : '',
            action: function () {
                return $.ajax({
                    url: './collect/',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        xf: xf()
                    }
                })
            }
        }, {
            name: 'collected',
            text: '已收藏',
            hoverText: '取消收藏',
            class : 'collected',
            action: function () {
                return $.ajax({
                    url: './uncollect/',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        xf: xf()
                    }
                })
            }
        }),
            $('.edit-rl-item').click(function () {
                var t;
                return (t = $(this).closest('.info')).find('p.reason').hide(),
                    t.find('.rl-item-action-links').hide(),
                    t.find('.rl-item-reason').slideDown(),
                    !1
            }),
            $('.cancel').click(function () {
                return $(this).closest('.rl-item-reason').slideUp(function () {
                    var t;
                    return (t = $(this).closest('.info')).find('p.reason').show(),
                        t.find('.rl-item-action-links').show()
                }),
                    !1
            }),
            $('.rl-add-recipe-button').click(function () {
                return $(this).siblings('.rl-add-recipes').append('<li><input type="text" name="recipe_url"></li>'),
                    !1
            }),
            $('.rl-head-noti-ok').click(function () {
                return $.ajax({
                    url: './set_head_noti/',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        xf: xf(),
                        desc_noti_read: !0
                    }
                }),
                    $('.rl-head-noti').hide(),
                    !1
            }),
            $('#add_pic').click(function () {
                var t,
                    e;
                return t = $('#pic'),
                    e = $('#add_pic>span'),
                    t.is(':visible') ? e.html('+')  : e.html('-'),
                    t.toggle(),
                    $(this).toggleClass('gray-link')
            }),
            $('.block-rl').on('click', function () {
                var t,
                    e;
                return '求河蟹！╭(╯^╰)╮',
                    t = {
                        block: !0,
                        xf: xf()
                    },
                !!confirm('求河蟹！╭(╯^╰)╮') && (e = $(this).attr('href'), $.ajax({
                    url: e,
                    type: 'POST',
                    dataType: 'json',
                    data: t
                }).done(function (t) {
                    return location.href = t.content.redirect_to
                }), !1)
            })
    },
    137: function (t, e) {
        var n,
            i,
            o;
        i = $('.collect-button').data('not-rl-when-collect'),
            $('#chzn-recipe-list').chosen({
                width: '100%',
                create_option: function (t) {
                    return this.append_option({
                        value: '0:' + t,
                        text: t
                    })
                },
                skip_no_results: !0,
                create_option_text: '新建菜单专辑'
            }).change(function () {
                var t,
                    e;
                return null == (e = (t = $(this)).children(':selected').data('rl-desc')) && (e = ''),
                    t.siblings('.desc').val(e)
            }).trigger('change'),
            o = [
            ],
            $('#edit-recipe-cats').on('click', function () {
                return $(this).hide(),
                    $('.recipe-cats').hide(),
                    $('.recipe-cats-edit').show(),
                    $('#chzn-recipe-cats').chosen({
                        width: '100%',
                        create_option: !0,
                        skip_no_results: !0,
                        create_option_text: '添加分类'
                    })
            }),
            $('.recipe-tags').on('click', '.button', function () {
                var t,
                    e;
                return t = $('#chzn-recipe-cats'),
                    o = t.find(':selected').map(function (t) {
                        return $(this).val()
                    }).get(),
                    e = t.data('url'),
                    $.ajax({
                        url: e,
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            cats: o,
                            xf: xf()
                        }
                    }).done(function (t) {
                        var e,
                            n;
                        return 'ok' !== t.status ? alert('error: ' + t.msg)  : (n = t.content.cats, $('.recipe-cats').html([function () {
                            var t,
                                i,
                                o;
                            for (o = [
                            ], t = 0, i = n.length; t < i; t++) e = n[t],
                                o.push('<a href="' + e.url + '" alt="' + e.name + '">' + e.name + '</a>');
                            return o
                        }()].join('')), alert('修改分类成功'), $('.recipe-cats-edit').hide(), $('#edit-recipe-cats').show(), $('.recipe-cats').show())
                    })
            }),
            $('#collect-modal').on('reveal:close', function () {
                var t;
                return t = $(this),
                    setTimeout(function () {
                        return t.find('form').show(),
                            t.find('.collect-success').hide()
                    }, 500)
            }),
            n = !1,
            $('#collect-modal form').on('submit', function () {
                var t,
                    e,
                    i,
                    o,
                    s,
                    r;
                return !n && (o = (e = $(this)).serialize(), o += '&xf=' + xf(), i = e.attr('action'), (t = $('select[name=\'rl_id_name\'] :selected')).val() ? (s = t.val().split(':') [1], r = t.data('rl-url'), n = !0, $.ajax({
                    url: i,
                    type: 'POST',
                    dataType: 'json',
                    data: o
                }).done(function (n) {
                    var i;
                    if ('ok' === n.status) return r = n.content.url,
                        t.data('rl-url', r),
                        (i = e.siblings('.collect-success')).find('.collect-success-message').html('成功加入菜单&nbsp;<a href="' + r + '">' + s + '</a>&nbsp;!'),
                        e.hide(),
                        i.fadeIn(),
                        $('.recipe-show .collect-button').addClass('collected').text('已收藏')
                }).fail(function (t) {
                    try {
                        return alert(JSON.parse(t.responseText).msg)
                    } catch (t) {
                        return alert('收藏菜谱失败，请稍候重试')
                    }
                }).always(function () {
                    return n = !1
                }), !1)  : (alert('请选择或新建一个菜单专辑'), !1))
            }).on('change', 'input[name=\'not_rl_when_collect\']', function () {
                var t;
                return t = '/recipe/' + $(this).closest('form').data('recipe-id') + '/set_whether_add_to_rl_when_collect/',
                    i = $(this).is(':checked'),
                    $.ajax({
                        url: t,
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            not_rl_when_collect: i,
                            xf: xf()
                        }
                    })
            }),
            $('.recipe-show .collect-button').click(function () {
                var t;
                return (t = $(this)).is('.collected') ? (t.removeClass('collected').text('收藏'), $.ajax({
                    url: './uncollect/',
                    dataType: 'json',
                    type: 'POST',
                    data: {
                        xf: xf()
                    }
                }))  : $('#collect-modal').reveal()
            }),
            $('.recipe-show').on('click', '.rate-link', function () {
                var t;
                return (t = $('.rate-dialog')).hasClass('expanded') ? (t.animate({
                    height: '0'
                }), t.removeClass('expanded'))  : (t.animate({
                    height: '' + t.find('.form').innerHeight()
                }), t.addClass('expanded')),
                    !1
            }).on('submit', '.rate-dialog form', function () {
                var t,
                    e,
                    n;
                return n = (t = $(this)).attr('action'),
                    e = t.find(':checked').val(),
                    $.ajax({
                        url: n,
                        type: 'POST',
                        data: {
                            rating: e,
                            xf: xf()
                        },
                        dataType: 'json'
                    }).done(function (t) {
                        var e,
                            n,
                            i,
                            o;
                        return $('.rate-link').text(t.content.text + '，修改评价'),
                            i = t.content.great,
                            n = t.content.good,
                            e = t.content.general,
                            o = t.content.total,
                            $('.score .title strong').text(o),
                            $('.score .rate3').width(i / o * 100 + '%').parent().siblings('.num').text(i),
                            $('.score .rate2').width(n / o * 100 + '%').parent().siblings('.num').text(n),
                            $('.score .rate1').width(e / o * 100 + '%').parent().siblings('.num').text(e)
                    }),
                    $('.rate-dialog').animate({
                        height: '0'
                    }).removeClass('expanded'),
                    !1
            }),
            $('.question-list').on('click', '.answer .vote', function () {
                var t,
                    e,
                    n,
                    i;
                return n = $(this).closest('.answer').data('answer-id'),
                    i = $(this).attr('href'),
                    e = $(this),
                    $.ajax({
                        url: i,
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            answer_id: n,
                            xf: xf()
                        }
                    }),
                    (t = e.siblings('.count')).html(parseInt(t.html(), 10) + 1),
                    e.replaceWith('<span class="vote">有用</span>'),
                    !1
            }).on('click', '.question-answers .add-answer', function () {
                var t,
                    e,
                    n;
                return e = $(this),
                    t = e.siblings('form'),
                    e.closest('.question').data('question-id'),
                    n = e.data('url'),
                t.length || ((t = $($.parseHTML($.trim('<form action="' + n + '" method="POST" class="answer-form hidden" data-action="add-answer">\n  <textarea name="answer"></textarea>\n  <input type="submit" value="回答" class="button">\n  <a href="javascript:void(0)" rel="nofollow" class="gray-link">取消</a>\n</form>')))).on('click', 'a', function () {
                    return t.remove(),
                        e.fadeIn(),
                        !1
                }), e.after(t)),
                    e.hide(),
                    t.fadeIn(function () {
                        return t.find('textarea').focus()
                    }),
                    !1
            }).on('click', '.question-answers .edit', function () {
                var t,
                    e,
                    n,
                    i;
                return n = $(this).attr('href'),
                    i = (i = (i = (i = (t = $(this).closest('.answer')).find('.content .text').html()).replace(/<br>/g, '\n')).replace(/&nbsp;/g, ' ')).replace(/<a.*?>(.+?)<\/a>/g, '$1'),
                    (e = $($.parseHTML($.trim('<form action="' + n + '" method="POST" class="answer-form hidden" data-action="edit-answer">\n  <textarea name="answer">' + i + '</textarea>\n  <input type="submit" value="更改" class="button">\n  <a href="javascript:void(0)" rel="nofollow" class="gray-link">取消</a>\n</form>')))).on('click', 'a', function () {
                        return e.remove(),
                            t.children().fadeIn(),
                            !1
                    }),
                    t.append(e),
                    t.children().hide(),
                    e.fadeIn(function () {
                        return e.find('textarea').caret('pos', 1000000)
                    }),
                    !1
            }).on('click', '.question-answers .delete', function () {
                var t,
                    e,
                    n;
                return !!confirm('你真的要删除我吗(⊙_⊙)?') && (e = $(this), n = $(this).attr('href'), t = $(this).closest('.answer'), $.ajax({
                    url: n,
                    type: 'POST',
                    data: {
                        xf: xf()
                    },
                    dataType: 'json'
                }).done(function (n) {
                    var i;
                    if ('ok' === n.status) return 0 === (i = e.closest('.question-answers')).find('.add-answer').size() && i.append('<a href="javascript:void(0)" data-url="' + n.content.add_answer_link + '" class="add-answer" rel="nofollow">添加一个答案</a>'),
                        t.fadeOut(function () {
                            return t.remove()
                        });
                    alert('删除失败！')
                }), !1)
            }).on('submit', '.answer-form', function () {
                var t,
                    e,
                    n,
                    i;
                return (t = $(this)).find('[type=\'submit\']').attr('disabled', !0),
                    e = t.attr('action'),
                    n = t.closest('.question').data('question-id'),
                    i = t.find('textarea').val(),
                    $.ajax({
                        url: e,
                        type: 'POST',
                        dataType: 'html',
                        data: {
                            question_id: n,
                            text: i,
                            xf: xf()
                        }
                    }).done(function (n) {
                        var i,
                            o,
                            s;
                        return e = t.data('action'),
                            s = $($.parseHTML($.trim(n))),
                            'add-answer' === e ? (i = t.siblings('.add-answer'), (o = t.siblings('.answer-list')).removeClass('best-answer'), o.append(s), i.remove(), s.fadeIn(), t.remove())  : 'edit-answer' === e ? (t.closest('.answer').replaceWith(s), s.fadeIn(), t.remove())  : void 0
                    }),
                    !1
            }).on('click', '.question-action .edit', function () {
                var t,
                    e,
                    n,
                    i,
                    o,
                    s;
                return o = $(this).attr('href'),
                    e = $(this).closest('.question'),
                    i = e.find('.question-desc'),
                    n = e.find('.question-action'),
                    s = (s = (s = (s = i.find('.text').html()).replace(/<br>/g, '\n')).replace(/&nbsp;/g, ' ')).replace(/<a.*?>(.+?)<\/a>/g, '$1'),
                    (t = $($.parseHTML($.trim('<form action="' + o + '" method="POST" class="question-form hidden" data-action="edit-question">\n  <textarea name="question">' + s + '</textarea>\n  <input type="submit" value="更改" class="button">\n  <a href="javascript:void(0)" rel="nofollow" class="gray-link">取消</a>\n  </form>')))).on('click', 'a', function () {
                        return t.remove(),
                            i.fadeIn(),
                            n.css('display', ''),
                            !1
                    }),
                    i.after(t),
                    i.hide(),
                    n.hide(),
                    t.fadeIn(function () {
                        return t.find('textarea').caret('pos', 100000000)
                    }),
                    !1
            }).on('click', '.question-action .delete', function () {
                var t,
                    e;
                return !!confirm('你真的要删除我吗(⊙_⊙)?') && ($(this), e = $(this).attr('href'), t = $(this).closest('.question'), $.ajax({
                    url: e,
                    type: 'POST',
                    data: {
                        xf: xf()
                    },
                    dataType: 'json'
                }).done(function (e) {
                    if ('ok' === e.status) return t.fadeOut(function () {
                        return t.remove()
                    });
                    alert('删除失败！')
                }), !1)
            }),
            $('.questions').on('click', '.add-question .add-question-link', function () {
                return $(this).hide(),
                    $(this).closest('.add-question').find('form').fadeIn().find('textarea').focus(),
                    !1
            }).on('submit', '.question-form', function () {
                var t,
                    e,
                    n,
                    i,
                    o;
                return n = (t = $(this)).attr('action'),
                    e = t.find('textarea'),
                    i = !1,
                'edit-question' === (o = t.data('action')) && (i = !t.closest('.question').find('.more').length),
                    t.find('[type=\'submit\']').attr('disabled', !0),
                    $.ajax({
                        url: n,
                        type: 'POST',
                        dataType: 'html',
                        data: {
                            question: e.val(),
                            expanded: i,
                            xf: xf()
                        }
                    }).done(function (n) {
                        var i;
                        return i = $($.parseHTML($.trim(n))),
                            'add-question' === o ? (e.val(''), t.hide(), t.siblings('p').find('a').show(), $('.question-list').append(i), i.fadeIn(), t.find('[type=\'submit\']').removeAttr('disabled'))  : 'edit-question' === o ? (t.closest('.question').replaceWith(i), i.fadeIn())  : void 0
                    }),
                    !1
            }),
            $('.recipe-action').on('click', '[role=\'user-delete-recipe\']', function () {
                var t,
                    e;
                return e = $(this).data('url'),
                    t = {
                        delete : !0,
                        xf: xf()
                    },
                !!confirm('你真的要删掉我吗(⊙_⊙)？') && ($.ajax({
                    url: e,
                    type: 'POST',
                    dataType: 'json',
                    data: t
                }).done(function (t) {
                    return location.href = t.content.redirect_to
                }), !1)
            }),
            $('.recipe-action').on('click', '.label-black-list', function () {
                var t,
                    e;
                return t = {
                    recipe_id: e = $(this).data('recipe-id'),
                    xf: xf()
                },
                !!confirm('你确定要从榜单中删除吗？') && $.ajax({
                    url: '/recipe/' + e + '/add_to_label_black_list/',
                    type: 'POST',
                    dataType: 'json',
                    data: t
                }).done(function (t) {
                    return location.reload()
                })
            })
    },
    138: function (t, e) {
        !function () {
            var t,
                e,
                n,
                i;
            if (e = function (t) {
                return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
            }, n = 0, $('.feeds').nanoScroller({
                iOSNativeScrolling: !0,
                preventPageScrolling: !0
            }), t = $('.feeds > .content'), i = function () {
                return $.ajax({
                    url: '/activity/async_feeds/',
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        start: n,
                        limit: 8
                    }
                }).done(function (i) {
                    var o,
                        s,
                        r,
                        a,
                        l,
                        c,
                        h,
                        d,
                        u;
                    if ('ok' === i.status) {
                        if (n += 8, a = i.content.feeds, 0 === parseInt(i.content.count, 10)) return t.append('<a href="/activity/">全部动态</a>'),
                            void $('.feeds').off('scrollend');
                        for (l = '', c = 0, h = a.length; c < h; c++) o = (d = (r = a[c]).target).author,
                            s = e(o.name),
                            u = e(d.name),
                            l += '<div class="feed">\n  <div class="feed-author">\n    <a href="' + o.url + '" class="image-link avatar"><img src="' + o.avatar + '" alt="' + s + '的厨房" width="30" height="30"></a>\n    <div class="feed-author-action"><a href="' + o.url + '">' + s + '</a>&nbsp;',
                            'recipe' === r.kind ? l += '创建菜谱' : 'dish' === r.kind && (l += '做过'),
                            l += '&nbsp;<a href="' + d.url + '">' + u + '</a>\n  </div>\n  </div>\n  <div class="feed-cover">\n    <a href="' + d.url + '" class="image-link">\n    <img class="block-image" src="' + d.pic + '" alt="' + u + '" width="240"></a>\n    <div class="stats pure-g">\n      <div class="pure-u-1-2 time">' + r.create_time + '</div>',
                        'dish' === r.kind && parseInt(d.diggs, 10) >= 1 && (l += '<div class="pure-u-1-2 diggs">' + d.diggs + '赞</div>'),
                            l += '    </div>\n  </div>\n</div>';
                        return t.append(l),
                            $('.feeds').nanoScroller()
                    }
                    console.log(i.msg)
                })
            }, $('.feeds').size()) $('.feeds').debounce('scrollend', i, 100),
                i()
        }()
    },
    139: function (t, e) {
        window.setupFollow = function () {
            return $('.follow-button').toggleable({
                name: 'nufollowed',
                text: '关注',
                action: function () {
                    var t;
                    return t = $(this).data('user-id'),
                        $.ajax({
                            url: '/cook/' + t + '/add_follow/',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                xf: xf(),
                                user_id: t
                            }
                        })
                }
            }, {
                name: 'followed',
                text: '已关注',
                hoverText: '取消关注',
                class : 'followed',
                action: function () {
                    var t;
                    return t = $(this).data('user-id'),
                        $.ajax({
                            url: '/cook/' + t + '/del_follow/',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                xf: xf(),
                                user_id: t
                            }
                        })
                }
            })
        },
            window.setupFollow(),
            window.faces = [
                {
                    content: '(•ω•)',
                    name: 'en'
                },
                {
                    content: '(づ｡◕‿‿◕｡)づ ',
                    name: 'bao'
                },
                {
                    content: 'ʕ•ᴥ•ʔ ',
                    name: 'xiong'
                },
                {
                    content: '_:(´ཀ`」 ∠):_ ',
                    name: 'tuxie'
                },
                {
                    content: '(=^･ｪ･^=)',
                    name: 'miao'
                },
                {
                    content: 'U•ェ•*U ',
                    name: 'gou'
                },
                {
                    content: '(◕‿◕✿) ',
                    name: 'keai'
                },
                {
                    content: 'ヽ(✿ﾟ▽ﾟ)ノ ',
                    name: 'haoye'
                },
                {
                    content: '（づ￣3￣）づ╭❤～ ',
                    name: 'meme'
                },
                {
                    content: 'Σ(っ °Д °;)っ',
                    name: 'jing'
                },
                {
                    content: 'φ(≧ω≦*)♪ ',
                    name: 'kaixin'
                },
                {
                    content: '<(￣3￣)> 表！',
                    name: 'biao'
                },
                {
                    content: '( *￣▽￣)((≧︶≦*)',
                    name: 'ceng'
                },
                {
                    content: 'ε = = (づ′▽`)づ',
                    name: 'pao'
                },
                {
                    content: 'ο(=•ω＜=)ρ⌒☆ ',
                    name: 'meiyan'
                },
                {
                    content: '╰(*°▽°*)╯',
                    name: 'jingxi'
                },
                {
                    content: '┻━┻︵╰(‵□′)╯︵┻━┻ ',
                    name: 'xianzhuo'
                },
                {
                    content: '(ˉ▽￣～) 切~~',
                    name: 'qie'
                },
                {
                    content: 'ヾ(≧▽≦*)o',
                    name: 'haha'
                },
                {
                    content: '(✿◡‿◡)',
                    name: 'haixiu'
                },
                {
                    content: 'ε(┬┬﹏┬┬)3',
                    name: 'ku'
                },
                {
                    content: '(￣o￣) . z Z',
                    name: 'kun'
                },
                {
                    content: 'ヾ(￣▽￣)Bye~Bye~',
                    name: 'bb'
                },
                {
                    content: 'Ψ(￣∀￣)Ψ',
                    name: 'chi'
                },
                {
                    content: 'o((⊙﹏⊙))o',
                    name: 'haipa'
                },
                {
                    content: 'd=====(￣▽￣*)b',
                    name: 'zan'
                },
                {
                    content: '( *・ω・)✄╰ひ╯',
                    name: 'jian'
                },
                {
                    content: 'つ﹏⊂',
                    name: 'wulian'
                },
                {
                    content: '(ง •_•)ง',
                    name: 'jiayou'
                },
                {
                    content: '(((((ヾ(　o=^•ェ•)o　┏━┓',
                    name: 'chifan'
                },
                {
                    content: '(*￣rǒ￣)',
                    name: 'koubi'
                },
                {
                    content: '_(:3」∠)_',
                    name: 'pa'
                },
                {
                    content: '╮(╯▽╰)╭',
                    name: 'tanshou'
                },
                {
                    content: '╰(￣▽￣)╮',
                    name: 'hiwei'
                },
                {
                    content: '(#`O′)',
                    name: 'wei'
                },
                {
                    content: '(╯‵□′)╯︵┻━┻',
                    name: 'xianzhuo'
                },
                {
                    content: '┴─┴︵╰（‵□′╰）',
                    name: 'xianzhuo'
                },
                {
                    content: '（╯－＿－）╯╧╧',
                    name: 'xianzhuo'
                },
                {
                    content: '(-_-)y-~ —> (#-_-)y-~ －> (/#-皿-)/_|____|_ ',
                    name: 'xianzhuo'
                },
                {
                    content: 'o(*≧▽≦)ツ┏━┓',
                    name: 'paizhuo'
                },
                {
                    content: 'o(￣ヘ￣o＃)',
                    name: 'heng'
                },
                {
                    content: '(●′▽｀●)',
                    name: 'hehe'
                },
                {
                    content: 'o(*≧▽≦)ツ',
                    name: 'haha'
                },
                {
                    content: 'Hi~ o(*￣▽￣*)ブ',
                    name: 'hi'
                },
                {
                    content: '(¯﹃¯)',
                    name: 'koushui'
                },
                {
                    content: '(￣ε(#￣)',
                    name: 'chou'
                },
                {
                    content: '(￣ε(#￣)☆╰╮o(￣皿￣///)',
                    name: 'chou'
                },
                {
                    content: '(＞﹏＜) ',
                    name: 'bu'
                },
                {
                    content: '(┘￣︶￣)┘└(￣︶￣└)',
                    name: 'givemefivejizhang'
                },
                {
                    content: '(〃￣︶￣)人(￣︶￣〃) ',
                    name: 'givemefivejizhang'
                },
                {
                    content: '(～￣▽￣)→))*￣▽￣*)o ',
                    name: 'chuo'
                },
                {
                    content: '(￣y▽￣)╭唉唷唷~ ',
                    name: 'aiyo'
                },
                {
                    content: '<(=￣y▽￣=)╭',
                    name: 'aiyo'
                },
                {
                    content: '(^o^)c旦``',
                    name: 'hekafei'
                },
                {
                    content: '=_=凸',
                    name: 'shuzhongzhi'
                },
                {
                    content: '(_*_)',
                    name: 'pigu'
                },
                {
                    content: '(___r___)=3',
                    name: 'fangpi'
                },
                {
                    content: '╰_╯',
                    name: 'shengqihuoda'
                },
                {
                    content: '{>~<}',
                    name: 'haosuan'
                },
                {
                    content: '●_●',
                    name: 'aoyexiaomaoyan'
                },
                {
                    content: '＼(@^O^@)／★~~~晚安~~~',
                    name: 'wanan'
                },
                {
                    content: '(^^)／▽ ▽＼(^^)',
                    name: 'ganbei'
                },
                {
                    content: '(⊙_⊙)<~~啾~~(#^_^#)',
                    name: 'qin'
                },
                {
                    content: '(╭￣3￣)╭♡~~~~~~~~~~~~~~♡╮(￣3￣╮)',
                    name: 'qinqin'
                },
                {
                    content: '（ˇ＾ˇ）',
                    name: 'heng'
                },
                {
                    content: '（╯＾╰）',
                    name: 'kubilian'
                },
                {
                    content: '(．．) ? ',
                    name: 'qingwen'
                },
                {
                    content: '[噎住] ( *⊙~⊙)',
                    name: 'yezhu'
                },
                {
                    content: 'w(ﾟДﾟ)w',
                    name: 'aaa'
                },
                {
                    content: 'ㄟ( ▔, ▔ )ㄏ',
                    name: 'tanshousongjian'
                },
                {
                    content: 'o(一︿一+)o',
                    name: 'yuannian'
                },
                {
                    content: '┭┮﹏┭┮',
                    name: 'wuwuwuku'
                },
                {
                    content: '*<|:-)',
                    name: 'shengdan'
                },
                {
                    content: '┗|｀O′|┛',
                    name: 'aoao'
                },
                {
                    content: '槑槑槑槑呆槑槑槑槑槑槑槑槑',
                    name: 'bumingzhenxiang'
                },
                {
                    content: '(。>︿<)_θ',
                    name: 'chiyao'
                },
                {
                    content: '( *￣▽￣)o ─═≡※:☆▆▅▄▃▂＿ ',
                    name: 'ciyunililiang'
                },
                {
                    content: '( ￣O￣)ノノ……∞∞OOO))) ',
                    name: 'dongganguangbo'
                },
                {
                    content: '((o_ _)\'彡☆ ',
                    name: 'shuaidie'
                },
                {
                    content: '||Φ|(|T|Д|T|)|Φ|| ',
                    name: 'fangwochuqu'
                },
                {
                    content: '( ＿ ＿)ノ｜壁 ',
                    name: 'fuqiang'
                },
                {
                    content: '<( ‵□′)───C＜─___-)|| ',
                    name: 'nielian'
                },
                {
                    content: '<( ‵□′)>───Ｃε(┬﹏┬)3 ',
                    name: 'nieerduo'
                },
                {
                    content: '*★,°*:.☆\\(￣▽￣)/$:*.°★* 。 ',
                    name: 'sahua'
                },
                {
                    content: '石━━∑(￣□￣*|||━━化',
                    name: 'shihua'
                },
                {
                    content: '( *^-^)ρ(^0^* ) ',
                    name: 'weifan'
                },
                {
                    content: '( *^-^)ρ(*╯^╰)[不吃!] ',
                    name: 'buchi'
                },
                {
                    content: '(← ← )',
                    name: 'weiguan'
                },
                {
                    content: '( → →)',
                    name: 'weiguan'
                },
                {
                    content: '(。﹏。*)',
                    name: 'wocuole'
                },
                {
                    content: '||ヽ(*￣▽￣*)ノミ|Ю',
                    name: 'wohuilaila'
                },
                {
                    content: 'o(￣ヘ￣o* )',
                    name: 'woquan'
                },
                {
                    content: 'o(￣ヘ￣o＃) ',
                    name: 'woquan'
                },
                {
                    content: '(╯▽╰ ) 好香~~ ',
                    name: 'haoxiang'
                },
                {
                    content: '(*/ω＼*) ',
                    name: 'yanmian'
                },
                {
                    content: 'o((>ω< ))o',
                    name: 'zhuakuang'
                },
                {
                    content: 'o(~ˇ~)o',
                    name: 'haichi'
                },
                {
                    content: '✪υ✪~~ ',
                    name: 'haoxiangchi'
                }
            ],
            window.setupAutocomplete = function () {
                var t,
                    e;
                try {
                    t = $.parseJSON($('#atCandiates').val())
                } catch (e) {
                    t = [
                    ]
                }
                try {
                    e = $.parseJSON($('#sharpCandiates').val())
                } catch (t) {
                    e = [
                    ]
                }
                return $('textarea').atwho({
                    at: '#',
                    data: e,
                    tpl: '<li data-value=\'${atwho-at}${name}#\'>${name}</li>'
                }).atwho({
                    at: '@',
                    data: t
                }).atwho({
                    at: ':',
                    data: faces,
                    tpl: '<li data-value="${content}">${content} ${atwho-at}${name}</li>'
                }).atwho({
                    at: '：',
                    data: faces,
                    tpl: '<li data-value="${content}">${content} ${atwho-at}${name}</li>'
                })
            },
            window.setupAutocomplete(),
            window.setupUploadWidget = function () {
                return $('.upload-widget').each(function () {
                    var t,
                        e,
                        n,
                        i,
                        o;
                    return i = (t = $(this)).attr('data-upload-url'),
                        o = t.attr('data-uploading-text'),
                        n = t.attr('data-default-image'),
                        e = {
                            kind: t.data('kind'),
                            xf: t.data('xf'),
                            width: t.data('width')
                        },
                        t.upload({
                            uploadUrl: i,
                            uploadingText: o,
                            defaultImage: n,
                            data: e,
                            onUploadFinished: function (t) {
                                var e,
                                    n;
                                return this.onUploadFinished(t),
                                    this.$widget.find('input[name="ident"]').val(null != t && null != (e = t.content) ? e.ident : void 0).change(),
                                    this.$widget.find('input[name="picurl"]').val(null != t && null != (n = t.content) ? n.url : void 0).change()
                            },
                            onRemoveFile: function () {
                                return this.onRemoveFile(),
                                    this.$widget.find('input[name="ident"]').val('').change(),
                                    this.$widget.find('input[name="picurl"]').val('').change()
                            }
                        })
                })
            },
            $(document).on('click', '#report-modal .spam, #report-modal .irrelevant, #report-modal .invalid-pic', function () {
                return $('#report-modal .text').hide()
            }).on('click', '#report-modal .copy, #report-modal .other', function () {
                return $('#report-modal .text').show()
            }).on('click', '.reveal-btn', function () {
                return $('#report-modal').attr('reveal-url', $(this).attr('data-report-url'))
            }).on('submit', '#report-modal form', function (t) {
                var e,
                    n;
                return t.preventDefault(),
                    n = $('#report-modal').attr('reveal-url') ? $('#report-modal').attr('reveal-url')  : $(this).attr('action'),
                    e = $(this).serialize(),
                    $.ajax({
                        url: n,
                        data: e,
                        type: 'POST',
                        dataType: 'json'
                    }),
                    alert('你的举报已递交，我们会尽快核实处理！'),
                    $('#report-modal').trigger('reveal:close'),
                    !1
            }),
            $(document).on('click', '.share-to .expired, .to-bind', function (t) {
                var e;
                return t.preventDefault(),
                    e = $(this).find('input[name="connect_url"]').val(),
                    window.open(e, 'newwindow', 'width=640, height=480')
            }),
            $(document).on('submit', '#post_reply', function (t) {
                var e;
                return t.preventDefault(),
                    e = $(this).attr('action'),
                    $.ajax({
                        url: e,
                        type: 'POST',
                        dataType: 'html',
                        data: $(this).serializeArray()
                    }).done(function (t) {
                        return $('.comments-block').replaceWith($(t).find('.comments-block')),
                            $('img[data-src]').unveil(!0),
                            setupAutocomplete()
                    })
            }),
            $(document).on('click', '[role="delete-comment"]', function (t) {
                var e,
                    n,
                    i;
                if (t.preventDefault(), i = (e = $(this).closest('[role="comment"]')).data('target-url'), n = e.data('comment-id'), confirm('你真的要删掉我吗(⊙_⊙)？')) return $.ajax({
                    url: i,
                    type: 'POST',
                    data: {
                        xf: xf(),
                        remove_cid: n
                    }
                }),
                    e.closest('li').remove()
            }),
            $(document).on('click', '[role="reply-comment"]', function (t) {
                var e,
                    n,
                    i,
                    o,
                    s,
                    r;
                if (t.preventDefault(), o = $(this).closest('[role="comment"]').data('author-name'), (n = $('#post_reply')).size()) return r = 0 === (s = (i = n.find('textarea')).val().trim()).length ? '@' + o + ' ' : s + ' @' + o + ' ',
                    i.val(r),
                    (e = n.closest('#dishPopup')).size() ? isElementInViewport(n) || e.scrollTop(e[0].scrollHeight)  : isElementInViewport(n) || $(window).scrollTop(n.offset().top),
                    i.caret('pos', 1000000)
            }),
            $(document).on('focus', '.question-reply', function (t) {
                var e;
                return (e = $(this)).finish().animate({
                    width: '88%'
                }, 200, function () {
                    return e.next('input[type="submit"]').fadeIn(100)
                })
            }).on('submit', '.recipe-answer-input', function (t) {
                var e,
                    n;
                if (t.preventDefault(), e = $(this).attr('action'), n = $(this).find('input[name="reply"]').val()) return $.ajax({
                    url: e,
                    type: 'POST',
                    data: {
                        xf: xf(),
                        text: n
                    }
                }),
                    $(this).closest('li').remove();
                alert('回复不能为空!')
            }),
            $(document).on('click', '[role="delete-question"]', function (t) {
                var e;
                if (t.preventDefault(), e = $(this).data('delete-url'), confirm('你真的要删掉我吗(⊙_⊙)？')) return $(this).closest('li').remove(),
                    $.ajax({
                        url: e,
                        type: 'POST',
                        data: {
                            xf: xf()
                        }
                    })
            }),
            $(document).on('click', '.recipe-quesions-content .icon-digg', function (t) {
                var e;
                return e = $(this).attr('data-question-url'),
                    $(this).hasClass('digged') ? ($(this).removeClass('digged'), $.ajax({
                        url: e + 'undigg/',
                        type: 'POST',
                        data: {
                            xf: xf()
                        }
                    }).done(function (e) {
                        return $(t.target).parent().find($('.digged-number')).text(e.content.n_diggs)
                    }))  : ($(this).addClass('digged'), $.ajax({
                        url: e + 'digg/',
                        type: 'POST',
                        data: {
                            xf: xf()
                        }
                    }).done(function (e) {
                        return $(t.target).parent().find($('.digged-number')).text(e.content.n_diggs)
                    }))
            }),
            $(document).on('click', '.question-reply-btn', function (t) {
                return t.preventDefault(),
                    $.trim($('.question-reply-input').val()) ? $('.question-reply-form').submit()  : alert('留言不能为空，请重新输入。')
            })
    },
    140: function (t, e) {
        $('.user-nav').hover(function () {
            return $('.user-nav-submenu').show()
        }, function () {
            return $('.user-nav-submenu').hide()
        }),
            $('#notificationModal, .activity-right-notifications').on('click', '.clear-noti', function () {
                var t,
                    e;
                return t = $(this).closest('.notification').data('group-id'),
                    e = $(this).attr('href'),
                    $.ajax({
                        type: 'POST',
                        url: '/notification/mark_group_as_read/',
                        dataType: 'json',
                        data: {
                            group_id: t,
                            xf: xf()
                        }
                    }).done(function (t) {
                        return location.href = e
                    }),
                    !1
            }),
            $('#feedbackButton').on('click', function () {
                return $('#feedbackModal').reveal({
                    opened: function () {
                        return $('#feedbackModal textarea').focus()
                    }
                })
            }),
            $('#feedbackModal form').on('submit', function () {
                var t,
                    e;
                return t = $(this).attr('action'),
                    $.trim($(this).find('textarea').val()) ? (e = $(this).serialize(), $.ajax({
                        url: t,
                        data: e,
                        type: 'POST',
                        dataType: 'json'
                    }), alert('反馈我们已经收到，我们也许不能逐条回复，但每个反馈我们都会认真聆听，下厨房会因你的存在变得更好。'), $('#feedbackModal').trigger('reveal:close'), !1)  : (alert('意见反馈不能为空'), !1)
            }),
            $('#weibovip-noti-close').on('click', function () {
                return $('#weibovip-noti').hide(),
                    $.cookie('weibovip-noti-close', !0, {
                        expires: 365
                    })
            }),
            $(document).ready(function () {
                if (!$.cookie('weibovip-noti-close')) return $('#weibovip-noti').show()
            })
    },
    141: function (t, e) {
        var n,
            i,
            o;
        (n = window.jQuery).toggleable || (n.toggleable = {
        }),
            o = {
                name: 'state1',
                text: 'state1',
                hoverText: '',
                class : '',
                hoverClass: '',
                action: n.noop
            },
            i = function () {
                function t(t, e, i) {
                    var o;
                    this.el = t,
                        this.$el = n(t),
                        e = this.mergeState(e),
                        i = this.mergeState(i),
                        this.allStates = [
                            e,
                            i
                        ],
                        this.$el.data('current-state') === i.name ? this.currentStateNum = 1 : this.currentStateNum = 0,
                        this.transferToState(this.allStates[this.currentStateNum], !1),
                        this.$el.off('click.toggleable'),
                        this.$el.on('click.toggleable', (o = this, function (t) {
                            var e;
                            return t.preventDefault(),
                                e = o.allStates[(o.currentStateNum + 1) % o.allStates.length],
                                o.transferToState(e, !0)
                        }))
                }
                return t.prototype.mergeState = function (t) {
                    return t.hoverText || (t.hoverText = t.text),
                    t.hoverClass || (t.hoverClass = ''),
                        n.extend({
                        }, o, t)
                },
                    t.prototype.setCurrentState = function (t) {
                        return this.currentStateNum = this.allStates.indexOf(t),
                            this.$el.data('current-state', t.name)
                    },
                    t.prototype.transferToState = function (t, e) {
                        var n,
                            i;
                        return n = this.allStates[this.currentStateNum],
                            this.$el.html(t.text),
                            this.$el.removeClass(n.class ),
                            this.$el.addClass(t.class ),
                            this.$el.off('mouseenter.toggleable.' + n.name + ' mouseleave.toggleable.' + n.name),
                        t.text === t.hoverText && t.class === t.hoverClass || this.$el.on('mouseenter.toggleable.' + t.name, (i = this, function () {
                            return i.$el.addClass(t.hoverClass),
                                i.$el.html(t.hoverText)
                        })).on('mouseleave.toggleable.' + t.name, function (e) {
                            return function () {
                                return e.$el.removeClass(t.hoverClass),
                                    e.$el.html(t.text)
                            }
                        }(this)),
                        e && n.action.apply(this.$el),
                            this.setCurrentState(t)
                    },
                    t
            }(),
            n.fn.toggleable = function (t, e) {
                return this.each(function () {
                    var o;
                    if (!(o = n(this)).data('plugin_toggleable')) return o.data('plugin_toggleable', new i(o, t, e))
                })
            },
            n.toggleable.Toggleable = i
    },
    142: function (t, e) {
        !function (t) {
            var e;
            e = function () {
                function e(e, n) {
                    var i;
                    i = {
                        uploadUrl: '',
                        uploadingText: '上传中•••',
                        defaultImage: '',
                        fileField: 'file',
                        data: void 0,
                        onUploadFinished: void 0,
                        onUploading: void 0,
                        onFileChanged: void 0,
                        onRemoveFile: void 0
                    },
                        this.options = t.extend(i, n),
                        this.htmlTemplate = '<div class="upload-widget-autogen">\n  <input type="file" name="' + this.options.fileField + '" class="upload-widget-file" tabindex="-1">\n\n  <div class="upload-widget-progress">\n    <div class="upload-widget-stop">\n    </div>\n    <div class="upload-widget-progress-text">\n      <span>' + this.options.uploadingText + '</span>\n    </div>\n    <img src="" class="upload-widget-preview">\n  </div>\n</div>',
                        this.$widget = t(e),
                        this.genCode(),
                        this.$progress = this.$widget.find('.upload-widget-progress'),
                        this.$preview = this.$progress.find('.upload-widget-preview'),
                        this.origWidgetHeight = this.$widget.height(),
                        this.xhr = void 0,
                    this.options.defaultImage && (this.$progress.show(), this.setPreview(this.options.defaultImage)),
                        this.setupFileChangeEvents(),
                        this.setupRemoveFileEvents()
                }
                return e.prototype.genCode = function () {
                    var e;
                    return 0 === (e = this.$widget.find('.upoad-widget-autogen')).size() && (e = t(t.parseHTML(this.htmlTemplate)), this.appendAutogen(e)),
                        e
                },
                    e.prototype.appendAutogen = function (t) {
                        return this.$widget.append(t)
                    },
                    e.prototype.getPreviewUrl = function (t) {
                        var e;
                        return null != t && null != (e = t.content) ? e.url : void 0
                    },
                    e.prototype.setPreview = function (t) {
                        return this.$preview.one('load', (e = this, function () {
                            return e.$widget.animate({
                                height: e.$preview.height()
                            }, 500),
                                e.$preview.show()
                        })).attr('src', t);
                        var e
                    },
                    e.prototype.onUploadFinished = function (t) {
                        var e,
                            n;
                        if (n = null != (e = this.options.getPreviewUrl || this.getPreviewUrl) ? e.apply(this.$widget, [
                            t
                        ])  : void 0) return this.setPreview(n)
                    },
                    e.prototype.onUploading = function () {
                        var e;
                        if (this.getFile().val()) return this.$preview.hide(),
                            this.$progress.show(),
                            this.xhr = t.ajax({
                                url: this.options.uploadUrl,
                                type: 'post',
                                dataType: 'json',
                                data: this.options.data,
                                iframe: !0,
                                files: this.getFile()
                            }).done((e = this, function (t) {
                                return e.options.onUploadFinished ? e.options.onUploadFinished.apply(e, [
                                    t
                                ])  : e.onUploadFinished(t)
                            })).fail(function () {
                                return alert('上传图片错误')
                            }).always(function (t) {
                                return function () {
                                    return t.clearFile()
                                }
                            }(this))
                    },
                    e.prototype.onFileChanged = function () {
                        return this.options.onUploading ? this.options.onUploading.apply(this)  : this.onUploading()
                    },
                    e.prototype.onRemoveFile = function () {
                        return this.$preview.attr('src', ''),
                            this.$progress.hide(),
                            this.$widget.animate({
                                height: this.origWidgetHeight
                            }, 500)
                    },
                    e.prototype.getFile = function () {
                        return this.$widget.find('.upload-widget-file')
                    },
                    e.prototype.clearFile = function () {
                        var t;
                        return (t = this.getFile()).replaceWith(t.val('').clone(!0))
                    },
                    e.prototype.setupWidgetEvents = function () {
                        return this.setupFileChangeEvents(),
                            this.setupRemoveFileEvents()
                    },
                    e.prototype.setupFileChangeEvents = function () {
                        return this.$widget.off('change.upload'),
                            this.$widget.on('change.upload', '.upload-widget-file', (t = this, function () {
                                return t.options.onFileChanged ? t.options.onFileChanged.apply(t)  : t.onFileChanged()
                            }));
                        var t
                    },
                    e.prototype.setupRemoveFileEvents = function () {
                        return this.$widget.off('click.upload', '.upload-widget-stop'),
                            this.$widget.on('click.upload', '.upload-widget-stop', (t = this, function (e) {
                                var n;
                                return e.preventDefault(),
                                null != (n = t.xhr) && n.abort(),
                                    t.options.onRemoveFile ? t.options.onRemoveFile.apply(t)  : t.onRemoveFile()
                            }));
                        var t
                    },
                    e
            }(),
                t.fn.upload = function (n) {
                    return this.each(function () {
                        if (!t(this).data('upload-widget')) return t(this).data('upload-widget', new e(this, n))
                    })
                }
        }($)
    },
    143: function (t, e) {
        $(document).ready(function () {
            $('#month, #year').on('change', function () {
                var t = $('#month').val(),
                    e = $('#year').val();
                $('#day > option:gt(28)').removeAttr('disabled'),
                    '4' === t || '6' === t || '9' === t || '11' === t ? $('#day > option:gt(30)').attr('disabled', 'disabled')  : '2' === t && (e % 400 == 0 || e % 4 == 0 && e % 100 != 0 ? $('#day > option:gt(29)').attr('disabled', 'disabled')  : $('#day > option:gt(28)').attr('disabled', 'disabled'))
            }),
                $('#month').trigger('change'),
                $('#account-home-province, #account-current-province').on('change', function () {
                    var t = $(this).val(),
                        e = $(this).next();
                    t ? $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: '/location/city/',
                        success: function (n) {
                            for (var i = n.content.length, o = 0; o < i; o++) {
                                var s = n.content[o];
                                if (s.province_id === t) {
                                    for (var r = s.cities.length, a = '<option value="">请选择</option>', l = 0; l < r; l++) a += '<option value="' + s.cities[l].city_id + '">',
                                        a += s.cities[l].city_name,
                                        a += '</option>';
                                    e.html(a)
                                }
                            }
                        }
                    })  : e.html('<option value="">请选择</option>')
                }),
                $('#jobs').on('change', function () {
                    var t = $(this).val(),
                        e = $(this).next();
                    '其他' === t ? e.show()  : e.hide()
                });
            var t = $('#account-home-province').val();
            t && $.ajax({
                type: 'GET',
                dataType: 'json',
                url: '/location/city/',
                success: function (e) {
                    var n,
                        i = e.content.length;
                    for (n = 0; n < i; n++) {
                        var o = e.content[n];
                        if (o.province_id == t) {
                            var s,
                                r = o.cities.length,
                                a = '<option value="">请选择</option>';
                            for (s = 0; s < r; s++) {
                                var l = o.cities[s];
                                a += '<option value="' + l.city_id + '"',
                                l.city_id == $('#account-home-province').next().attr('data') && (a += 'selected'),
                                    a += '>',
                                    a += l.city_name,
                                    a += '</option>'
                            }
                            $('#account-home-province').next().html(a)
                        }
                    }
                }
            });
            var e = $('#account-current-province').val();
            e && $.ajax({
                type: 'GET',
                dataType: 'json',
                url: '/location/city/',
                success: function (t) {
                    for (var n = 0; n < t.content.length; n++) {
                        var i = t.content[n];
                        if (i.province_id === e) {
                            for (var o = '<option value="">请选择</option>', s = 0; s < i.cities.length; s++) {
                                var r = i.cities[s];
                                o += '<option value="' + r.city_id + '"',
                                r.city_id === $('#account-current-province').next().attr('data') && (o += 'selected'),
                                    o += '>',
                                    o += r.city_name,
                                    o += '</option>'
                            }
                            $('#account-current-province').next().html(o)
                        }
                    }
                }
            })
        })
    },
    144: function (t, e) {
        t.exports = '/* Chosen v0.11.1 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */\n!function(){var SelectParser;SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:a.label,children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},this.SelectParser=SelectParser}.call(this),function(){var AbstractChosen,a;a=this,AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=this.options.single_backstroke_delete||!1,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.create_option=this.options.create_option||!1,this.persistent_create_option=this.options.persistent_create_option||!1,this.skip_no_results=this.options.skip_no_results||!1},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text,this.create_option_text=this.form_field.getAttribute("data-create_option_text")||this.options.create_option_text||AbstractChosen.default_create_option_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.dom_id=this.container_id+"_o_"+a.array_index,b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=""!==a.style.cssText?\' style="\'+a.style+\'"\':"",\'<li id="\'+a.dom_id+\'" class="\'+b.join(" ")+\'"\'+c+">"+a.html+"</li>"},AbstractChosen.prototype.append_option=function(a){return this.select_append_option(a)},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build()},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.generate_field_id=function(){var a;return a=this.generate_random_id(),this.form_field.id=a,a},AbstractChosen.prototype.generate_random_char=function(){var a,b,c;return a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",c=Math.floor(Math.random()*a.length),b=a.substring(c,c+1)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.browser_is_supported=function(){var a;return"Microsoft Internet Explorer"===window.navigator.appName?null!==(a=document.documentMode)&&a>=8:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen.default_create_option_text="Add Option",AbstractChosen}(),a.AbstractChosen=AbstractChosen}.call(this),function(){var a,Chosen,b,c,d={}.hasOwnProperty,e=function(a,b){function c(){this.constructor=a}for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};b=this,a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c;return c=a(this),c.hasClass("chzn-done")?void 0:c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(d){function Chosen(){return c=Chosen.__super__.constructor.apply(this,arguments)}return e(Chosen,d),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")},Chosen.prototype.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")},Chosen.prototype.set_up_html=function(){var b,c;return this.container_id=this.form_field.id.length?this.form_field.id.replace(/[^\\w]/g,"_"):this.generate_field_id(),this.container_id+="_chzn",b=["chzn-container"],b.push("chzn-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chzn-rtl"),c={id:this.container_id,"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.container=a("<div />",c),this.is_multiple?this.container.html(\'<ul class="chzn-choices"><li class="search-field"><input type="text" value="\'+this.default_text+\'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop"><ul class="chzn-results"></ul></div>\'):this.container.html(\'<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>\'+this.default_text+\'</span><div><b></b></div></a><div class="chzn-drop"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>\'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chzn-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chzn-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chzn-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chzn-search").first(),this.selected_item=this.container.find(".chzn-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("liszt:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.mousedown(function(b){a.container_mousedown(b)}),this.container.mouseup(function(b){a.container_mouseup(b)}),this.container.mouseenter(function(b){a.mouse_enter(b)}),this.container.mouseleave(function(b){a.mouse_leave(b)}),this.search_results.mouseup(function(b){a.search_results_mouseup(b)}),this.search_results.mouseover(function(b){a.search_results_mouseover(b)}),this.search_results.mouseout(function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel DOMMouseScroll",function(b){a.search_results_mousewheel(b)}),this.form_field_jq.bind("liszt:updated",function(b){a.results_update_field(b)}),this.form_field_jq.bind("liszt:activate",function(b){a.activate_field(b)}),this.form_field_jq.bind("liszt:open",function(b){a.container_mousedown(b)}),this.search_field.blur(function(b){a.input_blur(b)}),this.search_field.keyup(function(b){a.keyup_checker(b)}),this.search_field.keydown(function(b){a.keydown_checker(b)}),this.search_field.focus(function(b){a.input_focus(b)}),this.is_multiple?this.search_choices.click(function(b){a.choices_click(b)}):this.container.click(function(a){a.preventDefault()})},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chzn-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus",this.activate_action),this.close_field()):(this.container.removeClass("chzn-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chzn-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(document).click(this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b,c,d;return b=-(null!=(c=a.originalEvent)?c.wheelDelta:void 0)||(null!=(d=a.originialEvent)?d.detail:void 0),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chzn-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(document).unbind("click",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chzn-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chzn-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){return a(b.target).parents("#"+this.container_id).length?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){var a,c,d,e,f;for(this.parsing=!0,this.selected_option_count=null,this.results_data=b.SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.selected_item.addClass("chzn-default").find("span").text(this.default_text),this.disable_search||this.form_field.options.length<=this.disable_search_threshold&&!this.create_option?(this.search_field[0].readOnly=!0,this.container.addClass("chzn-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chzn-container-single-nosearch"))),a="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],c.group?a+=this.result_add_group(c):c.empty||(a+=this.result_add_option(c),c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&(this.selected_item.removeClass("chzn-default").find("span").text(c.text),this.allow_single_deselect&&this.single_deselect_control_build()));return this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.search_results.html(a),this.parsing=!1},Chosen.prototype.result_add_group=function(b){return b.dom_id=this.container_id+"_g_"+b.array_index,\'<li id="\'+b.dom_id+\'" class="group-result">\'+a("<div />").text(b.label).html()+"</li>"},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(this.container.addClass("chzn-with-drop"),this.form_field_jq.trigger("liszt:showing_dropdown",{chosen:this}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results())},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chzn-with-drop"),this.form_field_jq.trigger("liszt:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field_jq.attr("tabindex")?(a=this.form_field_jq.attr("tabindex"),this.form_field_jq.attr("tabindex",-1),this.search_field.attr("tabindex",a)):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for=\'"+this.form_field.id+"\']")),this.form_field_label.length>0?this.form_field_label.click(function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{href:"#","class":"search-choice-close",rel:b.array_index}),d.click(function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a.attr("rel"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.form_field.options[0].selected=!0,this.selected_option_count=null,this.selected_item.find("span").text(this.default_text),this.is_multiple||this.selected_item.addClass("chzn-default"),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c,d,e;return this.result_highlight?(b=this.result_highlight,b.hasClass("create-option")?(this.select_create_option(this.search_field.val()),this.results_hide()):(c=b.attr("id"),this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):(this.search_results.find(".result-selected").removeClass("result-selected"),this.result_single_selected=b,this.selected_item.removeClass("chzn-default")),b.addClass("result-selected"),e=c.substr(c.lastIndexOf("_")+1),d=this.results_data[e],d.selected=!0,this.form_field.options[d.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(d):(this.selected_item.find("span").first().text(d.text),this.allow_single_deselect&&this.single_deselect_control_build()),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[d.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale()))):void 0},Chosen.prototype.result_activate=function(a,b){return b.disabled?a.addClass("disabled-result"):this.is_multiple&&b.selected?a.addClass("result-selected"):a.addClass("active-result")},Chosen.prototype.result_deactivate=function(a){return a.removeClass("active-result result-selected disabled-result")},Chosen.prototype.result_deselect=function(b){var c,d;return d=this.results_data[b],this.form_field.options[d.options_index].disabled?!1:(d.selected=!1,this.form_field.options[d.options_index].selected=!1,this.selected_option_count=null,c=a("#"+this.container_id+"_o_"+b),c.removeClass("result-selected").addClass("active-result").show(),this.result_clear_highlight(),this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[d.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after(\'<abbr class="search-choice-close"></abbr>\'),this.selected_item.addClass("chzn-single-with-deselect")):void 0},Chosen.prototype.winnow_results=function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;for(this.no_results_clear(),this.create_option_clear(),l=0,c=!1,m=this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html(),i=this.search_contains?"":"^",h=new RegExp(i+m.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&"),"i"),p=new RegExp(m.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&"),"i"),b=new RegExp("^"+m.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,"\\\\$&")+"$","i"),u=this.results_data,q=0,s=u.length;s>q;q++)if(e=u[q],!e.empty)if(e.group)a("#"+e.dom_id).css("display","none");else{if(d=!1,k=e.dom_id,j=a("#"+k),h.test(e.html))d=!0,l+=1,b.test(e.html)&&(c=!0);else if(this.enable_split_word_search&&(e.html.indexOf(" ")>=0||0===e.html.indexOf("["))&&(g=e.html.replace(/\\[|\\]/g,"").split(" "),g.length))for(r=0,t=g.length;t>r;r++)f=g[r],h.test(f)&&(d=!0,l+=1);d?(m.length?(n=e.html.search(p),o=e.html.substr(0,n+m.length)+"</em>"+e.html.substr(n+m.length),o=o.substr(0,n)+"<em>"+o.substr(n)):o=e.html,j.html(o),this.result_activate(j,e),null!=e.group_array_index&&a("#"+this.results_data[e.group_array_index].dom_id).css("display","list-item")):(this.result_highlight&&k===this.result_highlight.attr("id")&&this.result_clear_highlight(),this.result_deactivate(j))}return 1>l&&m.length?this.create_option&&this.skip_no_results||this.no_results(m):this.winnow_results_set_highlight(),this.create_option&&(1>l||!c&&this.persistent_create_option)&&m.length?this.show_create_option(m):void 0},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return this.result_highlight||(b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null==a)?void 0:this.result_do_highlight(a)},Chosen.prototype.no_results=function(b){var c;return c=a(\'<li class="no-results">\'+this.results_none_found+\' "<span></span>"</li>\'),c.find("span").first().html(b),this.search_results.append(c)},Chosen.prototype.show_create_option=function(b){var c;return c=a(\'<li class="create-option active-result"><a href="javascript:void(0);">\'+this.create_option_text+\'</a>: "\'+b+\'"</li>\'),this.search_results.append(c)},Chosen.prototype.create_option_clear=function(){return this.search_results.find(".create-option").remove()},Chosen.prototype.select_create_option=function(b){return a.isFunction(this.create_option)?this.create_option.call(this,b):this.select_append_option({value:b,text:b})},Chosen.prototype.select_append_option=function(b){var c,d;return c=a("<option />",b).attr("selected","selected"),this.form_field_jq.append(c),d=this.search_field.val(),this.form_field_jq.trigger("liszt:updated"),this.form_field_jq.trigger("change"),this.search_field.trigger("focus")},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_showing&&this.create_option?this.result_do_highlight(this.search_results.find(".create-option")):this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i;if(this.is_multiple){for(c=0,g=0,e="position:absolute; left: -1000px; top: -1000px; display:none;",f=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],h=0,i=f.length;i>h;h++)d=f[h],e+=d+":"+this.search_field.css(d)+";";return b=a("<div />",{style:e}),b.text(this.search_field.val()),a("body").append(b),g=b.width()+25,b.remove(),this.f_width||(this.f_width=this.container.outerWidth()),g>this.f_width-10&&(g=this.f_width-10),this.search_field.css({width:g+"px"})}},Chosen.prototype.generate_random_id=function(){var b;for(b="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();a("#"+b).length>0;)b+=this.generate_random_char();return b},Chosen}(AbstractChosen),b.Chosen=Chosen}.call(this);'
    },
    145: function (t, e, n) {
        n(1) (n(144))
    },
    146: function (t, e) {
        t.exports = '(function(){(function(e){return typeof define=="function"&&define.amd?define(["jquery"],e):e(window.jQuery)})(function(e){"use strict";var t,n,r,i,s,o;return o="caret",t=function(){function t(e){this.$inputor=e,this.domInputor=this.$inputor[0]}return t.prototype.setPos=function(e){return this.domInputor},t.prototype.getIEPosition=function(){return e.noop()},t.prototype.getPosition=function(){return e.noop()},t.prototype.getOldIEPos=function(){var e,t;return t=document.selection.createRange(),e=document.body.createTextRange(),e.moveToElementText(this.domInputor),e.setEndPoint("EndToEnd",t),e.text.length},t.prototype.getPos=function(){var e,t,n;if(n=this.range())return e=n.cloneRange(),e.selectNodeContents(this.domInputor),e.setEnd(n.endContainer,n.endOffset),t=e.toString().length,e.detach(),t;if(document.selection)return this.getOldIEPos()},t.prototype.getOldIEOffset=function(){var e,t;return e=document.selection.createRange().duplicate(),e.moveStart("character",-1),t=e.getBoundingClientRect(),{height:t.bottom-t.top,left:t.left,top:t.top}},t.prototype.getOffset=function(e){var t,n,r,s;n=null;if(window.getSelection&&(r=this.range())){if(r.endOffset-1<0)return null;t=r.cloneRange(),t.setStart(r.endContainer,r.endOffset-1),t.setEnd(r.endContainer,r.endOffset),s=t.getBoundingClientRect(),n={height:s.height,left:s.left+s.width,top:s.top},t.detach(),n}else document.selection&&this.getOldIEOffset();return i.adjustOffset(n,this.$inputor)},t.prototype.range=function(){var e;if(!window.getSelection)return;return e=window.getSelection(),e.rangeCount>0?e.getRangeAt(0):null},t}(),n=function(){function e(e){this.$inputor=e,this.domInputor=this.$inputor[0]}return e.prototype.getIEPos=function(){var e,t,n,r,i,s,o;return t=this.domInputor,s=document.selection.createRange(),i=0,s&&s.parentElement()===t&&(r=t.value.replace(/\\r\\n/g,"\\n"),n=r.length,o=t.createTextRange(),o.moveToBookmark(s.getBookmark()),e=t.createTextRange(),e.collapse(!1),o.compareEndPoints("StartToEnd",e)>-1?i=n:i=-o.moveStart("character",-n)),i},e.prototype.getPos=function(){return document.selection?this.getIEPos():this.domInputor.selectionStart},e.prototype.setPos=function(e){var t,n;return t=this.domInputor,document.selection?(n=t.createTextRange(),n.move("character",e),n.select()):t.setSelectionRange&&t.setSelectionRange(e,e),t},e.prototype.getIEOffset=function(e){var t,n,r,i,s;return r=this.domInputor.createTextRange(),e?r.move("character",e):(n=document.selection.createRange(),r.moveToBookmark(n.getBookmark())),i=r.boundingLeft,s=r.boundingTop,t=r.boundingHeight,{left:i,top:s,height:t}},e.prototype.getOffset=function(e){var t,n,r;return t=this.$inputor,document.selection?i.adjustOffset(this.getIEOffset(e),t):(n=t.offset(),r=this.getPosition(e),n={left:n.left+r.left,top:n.top+r.top,height:r.height})},e.prototype.getPosition=function(e){var t,n,i,s,o,u;return t=this.$inputor,i=function(e){return e.replace(/</g,"&lt").replace(/>/g,"&gt").replace(/`/g,"&#96").replace(/"/g,"&quot").replace(/\\r\\n|\\r|\\n/g,"<br />")},e===void 0&&(e=this.getPos()),u=t.val().slice(0,e),s="<span>"+i(u)+"</span>",s+="<span id=\'caret\'>|</span>",o=new r(t),n=o.create(s).rect()},e.prototype.getIEPosition=function(e){var t,n,r,i,s;return r=this.getIEOffset(e),n=this.$inputor.offset(),i=r.left-n.left,s=r.top-n.top,t=r.height,{left:i,top:s,height:t}},e}(),r=function(){function t(e){this.$inputor=e}return t.prototype.css_attr=["overflowY","height","width","paddingTop","paddingLeft","paddingRight","paddingBottom","marginTop","marginLeft","marginRight","marginBottom","fontFamily","borderStyle","borderWidth","wordWrap","fontSize","lineHeight","overflowX","text-align"],t.prototype.mirrorCss=function(){var t,n=this;return t={position:"absolute",left:-9999,top:0,zIndex:-2e4,"white-space":"pre-wrap"},e.each(this.css_attr,function(e,r){return t[r]=n.$inputor.css(r)}),t},t.prototype.create=function(t){return this.$mirror=e("<div></div>"),this.$mirror.css(this.mirrorCss()),this.$mirror.html(t),this.$inputor.after(this.$mirror),this},t.prototype.rect=function(){var e,t,n;return e=this.$mirror.find("#caret"),t=e.position(),n={left:t.left,top:t.top,height:e.height()},this.$mirror.remove(),n},t}(),i={adjustOffset:function(t,n){if(!t)return;return t.top+=e(window).scrollTop()+n.scrollTop(),t.left+=+e(window).scrollLeft()+n.scrollLeft(),t},contentEditable:function(e){return!!e[0].contentEditable&&e[0].contentEditable==="true"}},s={pos:function(e){return e?this.setPos(e):this.getPos()},position:function(e){return document.selection?this.getIEPosition(e):this.getPosition(e)},offset:function(e){return this.getOffset(e)}},e.fn.caret=function(r){var o;return o=i.contentEditable(this)?new t(this):new n(this),s[r]?s[r].apply(o,Array.prototype.slice.call(arguments,1)):e.error("Method "+r+" does not exist on jQuery.caret")},e.fn.caret.EditableCaret=t,e.fn.caret.InputCaret=n,e.fn.caret.Utils=i,e.fn.caret.apis=s})}).call(this),function(){var e=[].slice;(function(e){return typeof define=="function"&&define.amd?define(["jquery"],e):e(window.jQuery)})(function(t){var n,r,i,s,o,u,a,f,l;return i=function(){function e(e){this.current_flag=null,this.controllers={},this.$inputor=t(e),this.listen()}return e.prototype.controller=function(e){return this.controllers[e||this.current_flag]},e.prototype.set_context_for=function(e){return this.current_flag=e,this},e.prototype.reg=function(e,t){var n,r;return n=(r=this.controllers)[e]||(r[e]=new o(this,e)),t.alias&&(this.controllers[t.alias]=n),n.init(t),this},e.prototype.listen=function(){var e=this;return this.$inputor.on("keyup.atwho",function(t){return e.on_keyup(t)}).on("keydown.atwho",function(t){return e.on_keydown(t)}).on("scroll.atwho",function(t){var n;return(n=e.controller())!=null?n.view.hide():void 0}).on("blur.atwho",function(t){var n;if(n=e.controller())return n.view.hide(n.get_opt("display_timeout"))})},e.prototype.dispatch=function(){var e=this;return t.map(this.controllers,function(t){if(t.look_up())return e.set_context_for(t.at)})},e.prototype.on_keyup=function(e){var n;switch(e.keyCode){case a.ESC:e.preventDefault(),(n=this.controller())!=null&&n.view.hide();break;case a.DOWN:case a.UP:t.noop();break;default:this.dispatch()}},e.prototype.on_keydown=function(e){var n,r;n=(r=this.controller())!=null?r.view:void 0;if(!n||!n.visible())return;switch(e.keyCode){case a.ESC:e.preventDefault(),n.hide();break;case a.UP:e.preventDefault(),n.prev();break;case a.DOWN:e.preventDefault(),n.next();break;case a.TAB:case a.ENTER:if(!n.visible())return;e.preventDefault(),n.choose();break;default:t.noop()}},e}(),o=function(){function s(e,i){this.app=e,this.at=i,this.$inputor=this.app.$inputor,this.id=this.$inputor[0].id||r(),this.setting=null,this.query=null,this.pos=0,this.cur_rect=null,this.range=null,n.append(this.$el=t("<div id=\'atwho-ground-"+this.id+"\'></div>")),this.model=new f(this),this.view=new l(this)}var r,i;return i=0,r=function(){return i+=1},s.prototype.init=function(e){return this.setting=t.extend({},this.setting||t.fn.atwho["default"],e),this.view.init(),this.model.reload(this.setting.data)},s.prototype.call_default=function(){var n,r;r=arguments[0],n=2<=arguments.length?e.call(arguments,1):[];try{return u[r].apply(this,n)}catch(i){return t.error(""+i+" Or maybe At.js doesn\'t have function "+r)}},s.prototype.trigger=function(e,t){var n,r;return t.push(this),n=this.get_opt("alias"),r=n?""+e+"-"+n+".atwho":""+e+".atwho",this.$inputor.trigger(r,t)},s.prototype.callbacks=function(e){return this.get_opt("callbacks")[e]||u[e]},s.prototype.get_opt=function(e,t){try{return this.setting[e]}catch(n){return null}},s.prototype.content=function(){return this.$inputor.is("textarea, input")?this.$inputor.val():this.$inputor.text()},s.prototype.catch_query=function(){var e,t,n,r,i,s;return t=this.content(),e=this.$inputor.caret("pos"),s=t.slice(0,e),r=this.callbacks("matcher").call(this,this.at,s,this.get_opt("start_with_space")),typeof r=="string"&&r.length<=this.get_opt("max_len",20)?(i=e-r.length,n=i+r.length,this.pos=i,r={text:r.toLowerCase(),head_pos:i,end_pos:n},this.trigger("matched",[this.at,r.text])):this.view.hide(),this.query=r},s.prototype.rect=function(){var e,t;if(!(e=this.$inputor.caret("offset",this.pos-1)))return;return this.$inputor.attr("contentEditable")==="true"&&(e=this.cur_rect||(this.cur_rect=e)||e),t=document.selection?0:2,{left:e.left,top:e.top,bottom:e.top+e.height+t}},s.prototype.reset_rect=function(){if(this.$inputor.attr("contentEditable")==="true")return this.cur_rect=null},s.prototype.mark_range=function(){return this.range=this.get_range()||this.get_ie_range()},s.prototype.clear_range=function(){return this.range=null},s.prototype.get_range=function(){return this.range||(window.getSelection?window.getSelection().getRangeAt(0):void 0)},s.prototype.get_ie_range=function(){return this.range||(document.selection?document.selection.createRange():void 0)},s.prototype.insert_content_for=function(e){var n,r,i;return r=e.data("value"),i=this.get_opt("insert_tpl"),this.$inputor.is("textarea, input")||!i?r:(n=t.extend({},e.data("item-data"),{"atwho-data-value":r,"atwho-at":this.at}),this.callbacks("tpl_eval").call(this,i,n))},s.prototype.insert=function(e,n){var r,i,s,o,u,a,f,l,c,h,p;r=this.$inputor,r.attr("contentEditable")==="true"&&(s="atwho-view-flag atwho-view-flag-"+(this.get_opt("alias")||this.at),o=""+e+"<span contenteditable=\'false\'>&nbsp;<span>",u="<span contenteditable=\'false\' class=\'"+s+"\'>"+o+"</span>",i=t(u).data("atwho-data-item",n.data("item-data")),document.selection&&(i=t("<span contenteditable=\'true\'></span>").html(i)));if(r.is("textarea, input"))e=""+e,c=r.val(),h=c.slice(0,Math.max(this.query.head_pos-this.at.length,0)),p=""+h+e+" "+c.slice(this.query.end_pos||0),r.val(p),r.caret("pos",h.length+e.length+1);else if(f=this.get_range())a=f.startOffset-(this.query.end_pos-this.query.head_pos)-this.at.length,f.setStart(f.endContainer,Math.max(a,0)),f.setEnd(f.endContainer,f.endOffset),f.deleteContents(),f.insertNode(i[0]),f.collapse(!1),l=window.getSelection(),l.removeAllRanges(),l.addRange(f);else if(f=this.get_ie_range())f.moveStart("character",this.query.end_pos-this.query.head_pos-this.at.length),f.pasteHTML(i[0]),f.collapse(!1),f.select();return r.focus(),r.change()},s.prototype.render_view=function(e){var t;return t=this.get_opt("search_key"),e=this.callbacks("sorter").call(this,this.query.text,e.slice(0,1001),t),this.view.render(e.slice(0,this.get_opt("limit")))},s.prototype.look_up=function(){var e,n;if(!(e=this.catch_query()))return;return n=function(e){return e&&e.length>0?this.render_view(e):this.view.hide()},this.model.query(e.text,t.proxy(n,this)),e},s}(),f=function(){function n(e){this.context=e,this.at=this.context.at}var e;return e={},n.prototype.saved=function(){return this.fetch()>0},n.prototype.query=function(e,t){var n,r,i;n=this.fetch(),r=this.context.get_opt("search_key"),t(n=this.context.callbacks("filter").call(this.context,e,n,r));if(!(n&&n.length>0))return(i=this.context.callbacks("remote_filter"))!=null?i.call(this.context,e,t):void 0},n.prototype.fetch=function(){return e[this.at]||[]},n.prototype.save=function(t){return e[this.at]=this.context.callbacks("before_save").call(this.context,t||[])},n.prototype.load=function(e){if(!this.saved()&&!!e)return this._load(e)},n.prototype.reload=function(e){return this._load(e)},n.prototype._load=function(e){var n=this;return typeof e=="string"?t.ajax(e,{dataType:"json"}).done(function(e){return n.save(e)}):this.save(e)},n}(),l=function(){function e(e){this.context=e,this.$el=t("<div class=\'atwho-view\'><ul class=\'atwho-view-ul\'></ul></div>"),this.timeout_id=null,this.context.$el.append(this.$el),this.bind_event()}return e.prototype.init=function(){var e;return e=this.context.get_opt("alias")||this.context.at.charCodeAt(0),this.$el.attr({id:"at-view-"+e})},e.prototype.bind_event=function(){var e,n=this;return e=this.$el.find("ul"),e.on("mouseenter.atwho-view","li",function(n){return e.find(".cur").removeClass("cur"),t(n.currentTarget).addClass("cur")}).on("click",function(e){return n.choose(),e.preventDefault()}),this.$el.on("mouseenter.atwho-view","ul",function(e){return n.context.mark_range()}).on("mouseleave.atwho-view","ul",function(e){return n.context.clear_range()})},e.prototype.visible=function(){return this.$el.is(":visible")},e.prototype.choose=function(){var e,t;return e=this.$el.find(".cur"),t=this.context.insert_content_for(e),this.context.insert(this.context.callbacks("before_insert").call(this.context,t,e),e),this.context.trigger("inserted",[e]),this.hide()},e.prototype.reposition=function(e){var n;return e.bottom+this.$el.height()-t(window).scrollTop()>t(window).height()&&(e.bottom=e.top-this.$el.height()),n={left:e.left,top:e.bottom},this.$el.offset(n),this.context.trigger("reposition",[n])},e.prototype.next=function(){var e,t;return e=this.$el.find(".cur").removeClass("cur"),t=e.next(),t.length||(t=this.$el.find("li:first")),t.addClass("cur")},e.prototype.prev=function(){var e,t;return e=this.$el.find(".cur").removeClass("cur"),t=e.prev(),t.length||(t=this.$el.find("li:last")),t.addClass("cur")},e.prototype.show=function(){var e;this.visible()||this.$el.show();if(e=this.context.rect())return this.reposition(e)},e.prototype.hide=function(e){var t,n=this;return isNaN(e&&this.visible())?(this.context.reset_rect(),this.$el.hide()):(t=function(){return n.hide()},clearTimeout(this.timeout_id),this.timeout_id=setTimeout(t,e))},e.prototype.render=function(e){var n,r,i,s,o,u,a;if(!t.isArray(e||e.length<=0)){this.hide();return}this.$el.find("ul").empty(),r=this.$el.find("ul"),o=this.context.get_opt("tpl");for(u=0,a=e.length;u<a;u++)i=e[u],i=t.extend({},i,{"atwho-at":this.context.at}),s=this.context.callbacks("tpl_eval").call(this.context,o,i),n=t(this.context.callbacks("highlighter").call(this.context,s,this.context.query.text)),n.data("item-data",i),r.append(n);return this.show(),r.find("li:first").addClass("cur")},e}(),a={DOWN:40,UP:38,ESC:27,TAB:9,ENTER:13},u={before_save:function(e){var n,r,i,s;if(!t.isArray(e))return e;s=[];for(r=0,i=e.length;r<i;r++)n=e[r],t.isPlainObject(n)?s.push(n):s.push({name:n});return s},matcher:function(e,t,n){var r,i;return e=e.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&"),n&&(e="(?:^|\\\\s)"+e),i=new RegExp(e+"([A-Za-z0-9_+-]*)$|"+e+"([^\\\\x00-\\\\xff]*)$","gi"),r=i.exec(t),r?r[2]||r[1]:null},filter:function(e,t,n){var r,i,s,o;o=[];for(i=0,s=t.length;i<s;i++)r=t[i],~r[n].toLowerCase().indexOf(e)&&o.push(r);return o},remote_filter:null,sorter:function(e,t,n){var r,i,s,o;if(!e)return t;o=[];for(i=0,s=t.length;i<s;i++)r=t[i],r.atwho_order=r[n].toLowerCase().indexOf(e),r.atwho_order>-1&&o.push(r);return o.sort(function(e,t){return e.atwho_order-t.atwho_order})},tpl_eval:function(e,t){try{return e.replace(/\\$\\{([^\\}]*)\\}/g,function(e,n,r){return t[n]})}catch(n){return""}},highlighter:function(e,t){var n;return t?(n=new RegExp(">\\\\s*(\\\\w*)("+t.replace("+","\\\\+")+")(\\\\w*)\\\\s*<","ig"),e.replace(n,function(e,t,n,r){return"> "+t+"<strong>"+n+"</strong>"+r+" <"})):e},before_insert:function(e,t){return e}},r={load:function(e,t){var n;if(n=this.controller(e))return n.model.load(t)},getInsertedItemsWithIDs:function(e){var n,r,i;return(n=this.controller(e))?(e&&(e="-"+(n.get_opt("alias")||n.at)),r=[],i=t.map(this.$inputor.find("span.atwho-view-flag"+(e||"")),function(e){var n;n=t(e).data("atwho-data-item");if(r.indexOf(n.id)>-1)return;return n.id&&(r.push=n.id),n}),[r,i]):[null,null]},getInsertedItems:function(e){return r.getInsertedItemsWithIDs.apply(this,[e])[1]},getInsertedIDs:function(e){return r.getInsertedItemsWithIDs.apply(this,[e])[0]},run:function(){return this.dispatch()}},s={init:function(e){var n,r;return r=(n=t(this)).data("atwho"),r||n.data("atwho",r=new i(this)),r.reg(e.at,e),this}},n=t("<div id=\'atwho-container\'></div>"),t.fn.atwho=function(e){var i,o;return o=arguments,t("body").append(n),i=null,this.filter("textarea, input, [contenteditable=true]").each(function(){var n;if(typeof e=="object"||!e)return s.init.apply(this,o);if(!r[e])return t.error("Method "+e+" does not exist on jQuery.caret");if(n=t(this).data("atwho"))return i=r[e].apply(n,Array.prototype.slice.call(o,1))}),i||this},t.fn.atwho["default"]={at:void 0,alias:void 0,data:null,tpl:"<li data-value=\'${atwho-at}${name}\'>${name}</li>",insert_tpl:"<span>${atwho-data-value}</span>",callbacks:u,search_key:"name",start_with_space:!0,limit:5,max_len:20,display_timeout:300}})}.call(this);\n'
    },
    147: function (t, e, n) {
        n(1) (n(146))
    },
    148: function (t, e) {
        t.exports = '/*!\n  Autosize v1.18.6 - 2014-03-13\n  Automatically adjust textarea height based on user input.\n  (c) 2014 Jack Moore - http://www.jacklmoore.com/autosize\n  license: http://www.opensource.org/licenses/mit-license.php\n*/\n(function(e){var t,o={className:"autosizejs",id:"autosizejs",append:"",callback:!1,resizeDelay:10,placeholder:!0},i=\'<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>\',n=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],a=e(i).data("autosize",!0)[0];a.style.lineHeight="99px","99px"===e(a).css("lineHeight")&&n.push("lineHeight"),a.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),a.parentNode!==document.body&&e(document.body).append(a),this.each(function(){function o(){var t,o=window.getComputedStyle?window.getComputedStyle(u,null):!1;o?(t=u.getBoundingClientRect().width,0===t&&(t=parseInt(o.width,10)),e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){t-=parseInt(o[i],10)})):t=Math.max(p.width(),0),a.style.width=t+"px"}function s(){var s={};if(t=u,a.className=i.className,a.id=i.id,d=parseInt(p.css("maxHeight"),10),e.each(n,function(e,t){s[t]=p.css(t)}),e(a).css(s).attr("wrap",p.attr("wrap")),o(),window.chrome){var r=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=r}}function r(){var e,n;t!==u?s():o(),a.value=!u.value&&i.placeholder?(p.attr("placeholder")||"")+i.append:u.value+i.append,a.style.overflowY=u.style.overflowY,n=parseInt(u.style.height,10),a.scrollTop=0,a.scrollTop=9e4,e=a.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=w,n!==e&&(u.style.height=e+"px",f&&i.callback.call(u,u))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==g&&(g=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),w=0,f=e.isFunction(i.callback),z={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},g=p.width();p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(w=p.outerHeight()-p.height()),c=Math.max(parseInt(p.css("minHeight"),10)-w||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word",resize:"none"===p.css("resize")||"vertical"===p.css("resize")?"none":"horizontal"}),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(z).removeData("autosize")}),r())})):this}})(window.jQuery||window.$);\n'
    },
    149: function (t, e, n) {
        n(1) (n(148))
    },
    150: function (t, e, n) {
        n(149),
            n(147),
            n(55),
            n(145),
            n(143),
            n(142),
            n(141),
            n(140),
            n(139),
            n(138),
            n(137),
            n(136),
            n(135),
            n(134),
            n(133),
            t.exports = n(132)
    },
    55: function (t, e) {
        !function (t) {
            'use strict';
            var e = !1;
            t(document).on('click', 'a[data-reveal-id]', function (e) {
                e.preventDefault();
                var n = t(this).attr('data-reveal-id');
                t('#' + n).reveal(t(this).data())
            }),
                t.fn.reveal = function (n) {
                    var i = t(document),
                        o = {
                            animation: 'fadeAndPop',
                            animationSpeed: 300,
                            closeOnBackgroundClick: !0,
                            dismissModalClass: 'close-reveal-modal',
                            open: t.noop,
                            opened: t.noop,
                            close: t.noop,
                            closed: t.noop
                        };
                    return n = t.extend({
                    }, o, n),
                        this.not('.reveal-modal.open').each(function () {
                            var o,
                                s = t(this),
                                r = parseInt(s.css('top'), 10),
                                a = s.height() + r,
                                l = !1,
                                c = t('.reveal-modal-bg'),
                                h = {
                                    open: {
                                        top: 0,
                                        opacity: 0,
                                        visibility: 'visible',
                                        display: 'block'
                                    },
                                    close: {
                                        top: r,
                                        opacity: 1,
                                        visibility: 'hidden',
                                        display: 'none'
                                    }
                                };
                            function d() {
                                l = !0
                            }
                            0 === c.length && (c = t('<div />', {
                                class : 'reveal-modal-bg'
                            }).insertAfter(s)).fadeTo('fast', 0.8),
                                s.bind('reveal:open.reveal', function () {
                                    var o;
                                    l || (d(), 1 === (o = t('.reveal-modal.open')).length && (e = !0, o.trigger('reveal:close')), s.addClass('open'), 'fadeAndPop' === n.animation && (h.open.top = i.scrollTop() - a, h.open.opacity = 0, s.css(h.open), c.fadeIn(n.animationSpeed / 2, function () {
                                        try {
                                            this.style.removeAttribute('filter')
                                        } catch (t) {
                                        }
                                    }), s.delay(n.animationSpeed / 2).animate({
                                        top: i.scrollTop() + r + 'px',
                                        opacity: 1
                                    }, n.animationSpeed, function () {
                                        s.trigger('reveal:opened')
                                    })), 'fade' === n.animation && (h.open.top = i.scrollTop() + r, h.open.opacity = 0, s.css(h.open), c.fadeIn(n.animationSpeed / 2, function () {
                                        try {
                                            this.style.removeAttribute('filter')
                                        } catch (t) {
                                        }
                                    }), s.delay(n.animationSpeed / 2).animate({
                                        opacity: 1
                                    }, n.animationSpeed, function () {
                                        s.trigger('reveal:opened')
                                    })), 'none' === n.animation && (h.open.top = i.scrollTop() + r, h.open.opacity = 1, s.css(h.open), c.css({
                                        display: 'block'
                                    }), s.trigger('reveal:opened')))
                                }),
                                s.bind('reveal:open.reveal', function () {
                                    var t = s.find('.flex-video'),
                                        e = t.find('iframe');
                                    e.length > 0 && (e.attr('src', e.data('src')), t.fadeIn(100))
                                }),
                                s.bind('reveal:close.reveal', function () {
                                    l || (d(), s.removeClass('open'), 'fadeAndPop' === n.animation && (s.animate({
                                        top: i.scrollTop() - a + 'px',
                                        opacity: 0
                                    }, n.animationSpeed / 2, function () {
                                        s.css(h.close)
                                    }), e ? s.trigger('reveal:closed')  : c.delay(n.animationSpeed).fadeOut(n.animationSpeed, function () {
                                        s.trigger('reveal:closed')
                                    })), 'fade' === n.animation && (s.animate({
                                        opacity: 0
                                    }, n.animationSpeed, function () {
                                        s.css(h.close)
                                    }), e ? s.trigger('reveal:closed')  : c.delay(n.animationSpeed).fadeOut(n.animationSpeed, function () {
                                        s.trigger('reveal:closed')
                                    })), 'none' === n.animation && (s.css(h.close), e || c.css({
                                        display: 'none'
                                    }), s.trigger('reveal:closed')), e = !1)
                                }),
                                s.bind('reveal:closed.reveal', function () {
                                    var t = s.find('.flex-video'),
                                        e = t.find('iframe');
                                    e.length > 0 && (e.data('src', e.attr('src')), e.attr('src', ''), t.fadeOut(100))
                                }),
                                s.bind('reveal:opened.reveal reveal:closed.reveal', function () {
                                    l = !1
                                }),
                                s.bind('reveal:closed.reveal', function () {
                                    s.unbind('.reveal'),
                                        c.unbind('.reveal'),
                                        o.unbind('.reveal'),
                                        t('body').unbind('.reveal')
                                }),
                                s.bind('reveal:open.reveal', n.open),
                                s.bind('reveal:opened.reveal', n.opened),
                                s.bind('reveal:close.reveal', n.close),
                                s.bind('reveal:closed.reveal', n.closed),
                                s.trigger('reveal:open'),
                                o = t('.' + n.dismissModalClass).bind('click.reveal', function () {
                                    s.trigger('reveal:close')
                                }),
                            n.closeOnBackgroundClick && (c.css({
                                cursor: 'pointer'
                            }), c.bind('click.reveal', function () {
                                s.trigger('reveal:close')
                            })),
                                t('body').bind('keyup.reveal', function (t) {
                                    27 === t.which && s.trigger('reveal:close')
                                })
                        })
                }
        }(jQuery)
    }
});
