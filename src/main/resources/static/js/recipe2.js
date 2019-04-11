!function (t) {
    var e = {
    };
    function i(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {
            }
        };
        return t[n].call(o.exports, o, o.exports, i),
            o.l = !0,
            o.exports
    }
    i.m = t,
        i.c = e,
        i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        },
        i.r = function (t) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: 'Module'
            }),
                Object.defineProperty(t, '__esModule', {
                    value: !0
                })
        },
        i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, 'default', {
                enumerable: !0,
                value: t
            }), 2 & e && 'string' != typeof t) for (var o in t) i.d(n, o, function (e) {
                return t[e]
            }.bind(null, o));
            return n
        },
        i.n = function (t) {
            var e = t && t.__esModule ? function () {
                    return t.default
                }
                : function () {
                    return t
                };
            return i.d(e, 'a', e),
                e
        },
        i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        i.p = '//s.chuimg.com/dist/',
        i(i.s = 130)
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
    107: function (t, e) {
        $(function () {
            var t,
                e,
                i,
                n,
                o,
                r,
                s,
                a,
                l,
                c,
                u,
                d,
                h,
                p,
                f,
                g;
            if ($('.login-form').size() || $('.apply-form').size()) return e = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                n = /^\d{3,}$/,
                t = /^[0-9]{6}$/,
                l = $('.error'),
                c = 0,
                a = function (t) {
                    return l.html(t),
                    c && clearTimeout(c),
                        c = setTimeout(function () {
                            return l.empty()
                        }, 10000)
                },
                r = [
                    window.ali_appkey,
                    (new Date).getTime(),
                    Math.random()
                ].join(':'),
                s = null,
                i = {
                    renderTo: '#aliyundun-validate',
                    appkey: window.ali_appkey,
                    scene: window.ali_scene,
                    token: r,
                    customWidth: 300,
                    is_Opt: 0,
                    language: 'cn',
                    isEnabled: !0,
                    timeout: 3000,
                    times: 5,
                    callback: function (t) {
                        return s = t
                    }
                },
                (o = new noCaptcha(i)).upLang('cn', {
                    _startTEXT: '请按住滑块，拖动到最右边',
                    _yesTEXT: '验证通过',
                    _error300: '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
                    _errorNetwork: '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>'
                }),
            $('.login-form').size() && (h = $('.login-form'), d = h.find('.code-form'), u = h.find('.button[type="submit"]'), h.submit(function (i) {
                var l,
                    c,
                    d,
                    p,
                    f,
                    g,
                    m,
                    v,
                    y;
                if (i.preventDefault(), c = h.find('.mail'), g = h.find('.tel'), l = h.find('.code'), d = h.find('.operation'), p = h.find('.password'), f = h.find('.remember'), v = c.val(), y = g.val(), m = l.val(), !h.hasClass('loading')) {
                    if ($('#regagreement').prop('checked')) return !n.test(y) && g.size() ? g.focus() && a('手机号格式错误')  : !t.test(m) && l.size() ? l.focus() && a('验证码格式错误')  : e.test(v) || n.test(v) || !c.size() ? s ? (h.addClass('loading'), u.val('请稍候……'), $.ajax({
                        url: h.attr('action'),
                        type: h.attr('method'),
                        data: {
                            operation: d.val(),
                            password: p.val(),
                            mail: v,
                            tel: y,
                            code: m,
                            country_code: h.find('.country-code').val(),
                            remember: f.val(),
                            alisig: s.sig,
                            alitoken: r,
                            alisession_id: s.csessionid
                        }
                    }).done(function (t) {
                        return 'ok' === t.status ? location.href = t.content.redirect || '/' : (a(t.msg), o.reload())
                    }).fail(function () {
                        return a('登录失败')
                    }).always(function () {
                        return h.removeClass('loading'),
                            u.val('登录')
                    }))  : a('请完成滑动验证')  : c.focus() && a('邮箱格式错误');
                    a('请勾选确认同意协议')
                }
            }), p = d.find('.resend'), f = d.find('.timer'), g = f.html(), p.click(function (t) {
                var e,
                    i;
                if (t.preventDefault(), i = $('.tel').val(), e = $('.country-code').val(), !p.hasClass('disabled')) return n.test(i) ? $.ajax({
                    url: p.data('resend-url'),
                    type: 'POST',
                    data: {
                        tel: i,
                        country_code: e,
                        alisig: s.sig,
                        alitoken: r,
                        alisession_id: s.csessionid,
                        via: 'login'
                    }
                }).done(function (t) {
                    return 'ok' === t.status ? (p.addClass('disabled'), p.find('.action').html('重发验证码'), f.html(g))  : (a(t.msg), o.reload())
                }).fail(function (t) {
                    return a('发送验证码失败')
                })  : d.find('.tel').focus() && a('手机号格式错误')
            }), setInterval(function () {
                var t;
                if (f.is(':visible')) return (t = parseInt(f.html(), 10) - 1) ? (f.html(t), p.addClass('disabled'))  : p.removeClass('disabled')
            }, 1000)),
                $('.apply-form').size() ? function () {
                    var e,
                        i,
                        l,
                        c,
                        u,
                        d,
                        h,
                        p;
                    return e = $('.apply-form'),
                        d = e.find('.tel'),
                        l = e.find('.code'),
                        c = e.find('.password'),
                        i = e.find('.button[type="submit"]'),
                        e.submit(function (o) {
                            var r,
                                u,
                                h;
                            return o.preventDefault(),
                                h = d.val(),
                                r = l.val(),
                                u = c.val(),
                                n.test(h) ? u.length >= 6 ? t.test(r) ? s ? (e.addClass('loading'), i.val('请稍候……'), $.ajax({
                                    url: e.attr('action'),
                                    type: e.attr('method'),
                                    data: e.serialize()
                                }).done(function (t) {
                                    return 'ok' === t.status ? location.href = t.content.redirect || '/' : a(t.msg)
                                }).fail(function () {
                                    return a('登录失败')
                                }).always(function () {
                                    return e.removeClass('loading'),
                                        i.val('注册')
                                }))  : a('请完成滑动验证')  : l.focus() && a('验证码格式错误')  : c.focus() && a('密码至少为6位')  : d.focus() && a('手机号格式错误')
                        }),
                        h = e.find('.timer'),
                        u = e.find('.resend'),
                        p = h.html(),
                        u.click(function (t) {
                            var e,
                                i;
                            if (t.preventDefault(), i = d.val(), e = $('.country-code').val(), !u.hasClass('disabled')) return n.test(i) ? $.ajax({
                                url: u.data('resend-url'),
                                type: 'POST',
                                data: {
                                    tel: i,
                                    country_code: e,
                                    alisig: s.sig,
                                    alitoken: r,
                                    alisession_id: s.csessionid,
                                    via: 'apply'
                                }
                            }).done(function (t) {
                                return 'ok' === t.status ? (u.addClass('disabled'), u.find('.action').html('重发验证码'), h.html(p))  : (a(t.msg), o.reload())
                            }).fail(function () {
                                return a('验证码发送失败')
                            })  : d.focus() && a('手机号格式错误')
                        }),
                        setInterval(function () {
                            var t;
                            return t = parseInt(h.html(), 10) - 1,
                            !!h.is(':visible') && (t ? (h.html(t), u.addClass('disabled'))  : u.removeClass('disabled'))
                        }, 1000)
                }()  : void 0
        })
    },
    108: function (t, e) {
        $(document).ready(function () {
            var t,
                e,
                i,
                n,
                o;
            if ($('.people-base-desc-toggle').click(function () {
                return $('.people-base-desc').toggle()
            }), $('.people-collected-cancel-collect').click(function () {
                var t,
                    e;
                if (t = (e = $(this)).data('recipe-id')) return $.ajax({
                    type: 'POST',
                    url: '/recipe/' + t + '/uncollect/',
                    data: {
                        xf: xf()
                    },
                    success: function (t) {
                        return e.parent().parent().parent().fadeOut()
                    }
                })
            }), (t = $('.people-recipe-draft-main .recipe-drafts')).size()) return e = $(window),
                i = t.data('next-cursor'),
                o = !1,
                n = function () {
                    if (!o) return o = !0,
                        $.get(location.pathname, {
                            next_cursor: i
                        }).done(function (e) {
                            var n,
                                o;
                            n = (o = $(e).find('.recipe-drafts')).children(),
                                t.append(n),
                                i = o.data('next-cursor')
                        }).always(function () {
                            return o = !1
                        })
                },
                e.on('scroll.paginate', function () {
                    if (i) return e.scrollTop() + e.height() >= t.offset().top + t.height() ? n()  : void 0;
                    e.off('scroll.paginate')
                })
        })
    },
    109: function (t, e) {
        var i,
            n;
        $('.category-left-tree').on('click', '.name', function () {
            var t,
                e,
                i;
            return i = (e = $(this)).closest('li'),
                t = e.siblings('.level2'),
                i.hasClass('open') ? (i.removeClass('open'), t.slideUp())  : (i.addClass('open'), t.slideDown())
        }),
            n = $('.ing-recipe'),
            i = $('.ing-detail'),
            $('.ing-tab').on('click', 'li', function (t) {
                var e,
                    o;
                return o = (e = $(this)).index(),
                    e.addClass('active'),
                    e.siblings().removeClass('active'),
                    0 === o ? (n.removeClass('hidden'), i.addClass('hidden'))  : 1 === o ? (n.addClass('hidden'), i.removeClass('hidden'))  : void 0
            })
    },
    110: function (t, e) {
        $(document).ready(function () {
            return $(document).on('mouseenter', '.dish-280 .cover', function () {
                var t,
                    e;
                return e = (t = $(this)).closest('.dish-280').data('digged'),
                    t.find('.link-layer').finish().animate({
                        opacity: 0.35
                    }, 200),
                    e ? (t.find('.undigg-link').finish().show(), t.find('.digg-link').finish().hide())  : (t.find('.undigg-link').finish().hide(), t.find('.digg-link').finish().show())
            }).on('mouseleave', '.dish-280 .cover', function () {
                var t;
                return (t = $(this)).find('.link-layer').finish().css({
                    opacity: 0
                }),
                    t.find('.digg-link, .undigg-link').hide()
            }).on('click', '.dish-280 .digg-link.logined', function (t) {
                var e,
                    i,
                    n,
                    o;
                return t.preventDefault(),
                    n = (e = $(this).closest('.dish-280')).data('digged'),
                    i = e.data('id'),
                    e.data('digged', !n),
                    $(self).hide(),
                    e.find('.undigg-link').show(),
                    o = parseInt(e.find('.n-diggs').html(), 10),
                    e.find('.n-diggs').html(o + 1),
                    $.ajax({
                        url: '/dish/' + i + '/digg/',
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            xf: xf()
                        }
                    }).done(function (t) {
                        if ('error' === t.status) return alert('你赞的太多了，休息一下吧')
                    })
            }).on('click', '.dish-280 .undigg-link.logined', function (t) {
                var e,
                    i,
                    n,
                    o,
                    r;
                return t.preventDefault(),
                    o = (e = (i = $(this)).closest('.dish-280')).data('digged'),
                    n = e.data('id'),
                    e.data('digged', !o),
                    i.hide(),
                    e.find('.digg-link').show(),
                    r = parseInt(e.find('.n-diggs').html(), 10),
                    e.find('.n-diggs').html(r - 1),
                    $.ajax({
                        url: '/dish/' + n + '/undigg/',
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            xf: xf()
                        }
                    })
            }).on('click', '[role="more"]', function (t) {
                return t.preventDefault(),
                    $(this).hide(),
                    $('.dish-diggs-block .digg-user').show()
            }).on('click', '.ias-container .dish-280 .cover-link, .ias-container .dish-280 .name a, .dish-popup .user-dishes a', function (t) {
                var e;
                return e = $(this).closest('[role="dish"]').data('id'),
                    openDish(e),
                    t.preventDefault()
            }).on('click', '.dish-popup, .dish-popup-close, .dish-popup > .content', function (t) {
                var e;
                if (e = $(t.target), t.target === this || e.is('.page-outer, .page-outer > .pure-g') || e.is('.dish-popup-close img')) return closeDish(),
                    t.preventDefault()
            }).on('keyup', function (t) {
                if (27 === t.which) {
                    if ($('.reveal-modal-bg').is(':visible')) return;
                    return closeDish()
                }
            })
        }),
            window.openDish = function (t) {
                return $('body').css('overflow', 'hidden'),
                    $.ajax({
                        url: '/dish/' + t + '/',
                        dataType: 'html',
                        type: 'GET'
                    }).done(function (t) {
                        var e,
                            i,
                            n,
                            o,
                            r;
                        return n = (i = $(t)).find('.main-panel'),
                            r = i.find('.right-panel'),
                            o = i.find('#report-modal'),
                            e = i.find('#delete-dish-btn'),
                            $('#dishPopup .content').empty(),
                            $('#dishPopup .content').append(n, r),
                            $('#report-modal').replaceWith(o),
                            n.find('img[data-src]').unveil(!0),
                            r.find('img[data-src]').unveil(!0),
                            e.data('layer', '1'),
                            $('#dishPopup').scrollTop(0),
                        xf() && (setupFollow(), setupDigg(), setupAutocomplete()),
                            setupBDSharing()
                    }),
                    $('#dishPopup').show(),
                    $('.dish-popup-bg').fadeIn(100)
            },
            window.closeDish = function () {
                return $('body').css('overflow', 'auto'),
                    $('#dishPopup').hide(),
                    $('.dish-popup-bg').fadeOut(),
                    $('.bd_weixin_popup').hide()
            }
    },
    111: function (t, e) {
        $(document).ready(function () {
            return $('.recipe-show .cover img').imagesLoaded(function (t) {
                var e,
                    i,
                    n;
                if (t.images && t.images.length) return n = (i = $(t.images[0].img)).height(),
                    i.width(),
                    n <= (e = i.closest('.cover')).height() ? e.removeClass('expandable').height(n)  : void 0
            })
        }),
            $('.recipe-show').on('click', '.expandable', function () {
                var t,
                    e;
                return e = $(this).find('img').height(),
                (t = $(this)).hasClass('expanded') && (e = 396),
                    t.animate({
                        height: e
                    }),
                    t.toggleClass('expanded')
            }),
            $(document).ready(function () {
                var t;
                if ((t = $('.recipe-dishes .dishes')).size()) return $.get('./async_recipe_dishes/').done(function (e) {
                    return t.replaceWith(e),
                        $('.recipe-dishes .dishes img').unveil(),
                        !1
                })
            }),
            $('.questions .question-answers').on('click', '.more', function () {
                var t,
                    e;
                return e = $(this).data('url'),
                    t = $(this).closest('.question-answers'),
                    $.get(e, function (e) {
                        var i;
                        return i = $($.parseHTML($.trim(e))),
                            t.replaceWith(i),
                            i.fadeIn()
                    }),
                    !1
            }),
            $('.recipe-recommendations .unslider').each(function () {
                var t,
                    e,
                    i,
                    n;
                return i = $(this),
                    t = i.siblings('.left-button-icon'),
                    e = i.siblings('.right-button-icon'),
                    n = i.unslider({
                        keys: !1,
                        delay: !1,
                        loop: !1,
                        complete: function () {
                            var i;
                            return i = this.li.length,
                                0 === this.i ? t.addClass('left-button-disable-icon')  : this.i === i - 1 ? e.addClass('right-button-disable-icon')  : (t.removeClass('left-button-disable-icon'), e.removeClass('right-button-disable-icon'))
                        }
                    }).data('unslider'),
                    t.on('click', function () {
                        return n.prev()
                    }),
                    e.on('click', function () {
                        return n.next()
                    })
            })
    },
    112: function (t, e) {
        var i;
        $('.headline-slider').unslider({
            dots: !0
        }),
            i = $('.rising-recipes-slider').unslider({
                keys: !1,
                dots: !1,
                loop: !1,
                delay: !1,
                complete: function (t) {
                    var e,
                        i;
                    return i = this.li.length - 1,
                        (e = this.i) === i ? $('.rising-recipes .right-arrow').addClass('right-arrow-disable')  : $('.rising-recipes .right-arrow').removeClass('right-arrow-disable'),
                        0 === e ? $('.rising-recipes .left-arrow').addClass('left-arrow-disable')  : $('.rising-recipes .left-arrow').removeClass('left-arrow-disable')
                }
            }),
            $('.rising-recipes').on('click', '.left-arrow', function () {
                return i.data('unslider').prev(),
                    !1
            }),
            $('.rising-recipes').on('click', '.right-arrow', function () {
                return i.data('unslider').next(),
                    !1
            }),
            $('.homepage-cats').menuAim({
                activate: function (t) {
                    return $(t).find('.homepage-cat-submenu').show(),
                        $(t).find('.homepage-cat-name').addClass('hovered')
                },
                deactivate: function (t) {
                    return $(t).find('.homepage-cat-submenu').hide(),
                        $(t).find('.homepage-cat-name').removeClass('hovered')
                },
                exitMenu: function (t) {
                    return $(t).find('.homepage-cat-submenu').hide(),
                        $(t).find('.homepage-cat-name').removeClass('hovered')
                },
                submenuSelector: '.homepage-cat-has-submenu'
            }),
            $(function () {
                var t,
                    e;
                return t = function (t) {
                    var e;
                    t && ((e = new Image(1, 1)).onload = e.onerror = function () {
                    }, e.src = t)
                },
                    e = function (t, e) {
                        var i;
                        t && ((i = new Image(1, 1)).onload = i.onerror = function () {
                            location.href = e
                        }, i.src = t)
                    },
                    $('a[data-expose-tracking-url]').each(function () {
                        return t($(this).attr('data-expose-tracking-url'))
                    }),
                    $(document).on('click', 'a[data-click-tracking-url]', function () {
                        return e($(this).attr('data-click-tracking-url'), $(this).prop('href'))
                    })
            })
    },
    113: function (t, e) {
        var i;
        $('img[data-src]').unveil(),
            i = $('<img id="scrollTop" src="https://s.chuimg.com/pic/2013/scroll_top.png" style="opacity: 1; position: fixed; width: 50px; height: auto; z-index: 20; border: 0px; padding: 0px; bottom: 20px; right: 20px; margin: 0px; cursor: pointer; display: none;">'),
            $('body').append(i),
            $(document).on('click', '#scrollTop', function (t) {
                return t.preventDefault(),
                    $(window).scrollTop(0)
            }),
            $(window).debounce('scroll', function () {
                return $(window).scrollTop() >= 400 ? i.fadeIn()  : i.fadeOut()
            }, 30),
            $('.anti-ie').on('click', '.open', function () {
                return $('.anti-ie .collapsed').hide(),
                    $('.anti-ie .expanded').show(),
                    !1
            }).on('click', '.close', function () {
                return $('.anti-ie .collapsed').show(),
                    $('.anti-ie .expanded').hide(),
                    !1
            }),
            $('.fixed-scroller').fixedScroller(),
            $('input.typeahead').typeahead({
                name: 'recipes',
                prefetch: {
                    url: '/search/hint/',
                    filter: function (t) {
                        return t.content
                    },
                    ondemand: !0
                },
                limit: 3,
                shortcuts: [
                    {
                        url: '/search/?cat=1002&keyword=%QUERY',
                        caption: '搜 “%QUERY” 相关用户'
                    },
                    {
                        url: '/search/?cat=1007&keyword=%QUERY',
                        caption: '搜 “%QUERY” 相关菜单'
                    }
                ]
            }),
            $.ias({
                container: '.ias-container',
                item: 'li, .ias-item',
                pagination: '.ias-pager',
                next: '.ias-pager a.next',
                loader: '',
                history: !1,
                triggerPageThreshold: 1000,
                thresholdMargin: - 300,
                onRenderComplete: function (t) {
                    return $(t).find('img[data-src]').unveil()
                }
            }),
            $(document).on('click', '[data-track]', function () {
                var t;
                return t = $(this).data('track'),
                    $.ajax({
                        url: t
                    })
            }),
            $('.topbar-cats').hover(function () {
                return $('.topbar-cats-submenu').show()
            }, function () {
                return $('.topbar-cats-submenu').hide()
            })
    },
    114: function (t, e) {
        !function (t, e, i) {
            var n,
                o;
            o = function () {
                var t,
                    e,
                    i;
                for (e = [
                ], t = 9, i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'; --t; ) e.push(i.charAt(Math.floor(64 * Math.random())));
                return e.join('')
            },
                n = function () {
                    function i(i) {
                        var n;
                        this.el = i,
                            this.$el = t(this.el),
                            this.$window = t(e),
                            this.$startEl = this.startTop = this.$stopEl = this.stopTop = null,
                            this.posFixed = this.posAbsolute = !1,
                            this.posStatic = !0,
                            this.prevScrollLeft = this.$window.scrollLeft(),
                            this.$placeholder = null,
                            this.$el.css('z-index', 2),
                            this.interval = void 0,
                            this.topOffset = 'fixed' === t('.topbar-outer').css('position') ? t('.topbar-outer').height()  : 0,
                            this.insertPlaceholder(),
                            this.reset(),
                            this.scroll(),
                            this.$window.on('scroll', (n = this, function () {
                                return n.scroll()
                            })),
                            this.autoReload()
                    }
                    return i.prototype.insertPlaceholder = function () {
                        return this.$placeholder = t('<div id="' + o() + '" style="height: 0;"></div> '),
                            this.$placeholder.width(this.$el.width()),
                            this.$el.before(this.$placeholder)
                    },
                        i.prototype.reset = function () {
                            var e,
                                i,
                                n;
                            return this.$el.width(this.$el.width()),
                                e = t('#' + this.$el.data('start-id')),
                                this.$startEl = e.size() ? e : this.$placeholder,
                                i = t('#' + this.$el.data('stop-id')),
                                this.$stopEl = i.size() ? i : t('#main-panel-bottom'),
                                this.startTop = this.$startEl.offset().top - this.topOffset,
                                n = this.$stopEl.size() ? this.$stopEl.offset().top : void 0,
                                this.stopTop = n - 2 * this.$el.outerHeight() + this.topOffset
                        },
                        i.prototype.scroll = function () {
                            var t,
                                e;
                            if ((t = this.$window.scrollLeft()) === this.prevScrollLeft) return this.startTop >= this.stopTop ? (this.$el.css('position', 'static'), this.posStatic = !0, void (this.posFixed = this.posAbsolute = !1))  : (e = this.$window.scrollTop(), !this.posStatic && this.keepPositionStatic(e) ? (this.$el.css('position', 'static'), this.posStatic = !0, this.posFixed = this.posAbsolute = !1)  : !this.posFixed && this.keepPositionFixed(e) ? (this.$el.css({
                                position: 'fixed',
                                top: this.topOffset
                            }), this.posFixed = !0, this.posStatic = this.posAbsolute = !1)  : !this.posAbsolute && this.keepPositionAbsolute(e) ? (this.$el.css({
                                position: 'absolute'
                            }), this.$el.offset({
                                top: this.stopTop + this.topOffset,
                                left: 'auto'
                            }), this.posAbsolute = !0, this.posFixed = this.posStatic = !1)  : void 0);
                            this.prevScrollLeft = t
                        },
                        i.prototype.keepPositionStatic = function (t) {
                            return t < this.startTop
                        },
                        i.prototype.keepPositionFixed = function (t) {
                            return this.startTop <= t && t < this.stopTop
                        },
                        i.prototype.keepPositionAbsolute = function (t) {
                            return t >= this.stopTop
                        },
                        i.prototype.autoReload = function () {
                            var t,
                                e;
                            if (this.interval && clearInterval(this.interval), t = this.$el.data('interval')) return t = parseInt(t, 10),
                                this.interval = setInterval((e = this, function () {
                                    return e.reset()
                                }), t)
                        },
                        i
                }(),
                t.fn.fixedScroller = function () {
                    return this.each(function () {
                        var t;
                        return (t = this.fixedScroller) ? t.reset()  : this.fixedScroller = new n(this)
                    })
                }
        }($, window, document)
    },
    115: function (t, e) {
        $(document).ready(function () {
            $('.cates-list-more>.close').click(function () {
                var t = $(this).parent().parent(),
                    e = t.next();
                t.addClass('hidden'),
                    e.removeClass('hidden')
            }),
                $('.cates-list-more>.open').click(function () {
                    var t = $(this).parent().parent(),
                        e = t.prev();
                    t.addClass('hidden'),
                        e.removeClass('hidden')
                }),
                $(window).load(function () {
                    $(location.hash).size() && $('html,body').scrollTop($(location.hash).offset().top - $('.topbar-outer').height())
                })
        })
    },
    116: function (t, e) {
        window.isElementInViewport = function (t) {
            t instanceof jQuery && (t = t[0]);
            var e = t.getBoundingClientRect();
            return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
        },
            window.xf = function () {
                var t = $.cookie('S');
                if (t) return t.slice( - 5)
            },
            window.uuid = function () {
                for (var t = [
                ], e = 9; --e; ) t.push('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(Math.floor(64 * Math.random())));
                return t.join('')
            },
            function (t) {
                t.extend(t.fn, {
                    debounce: function (t, e, i) {
                        this.on(t, function (t, e) {
                            var i,
                                n,
                                o = this;
                            return function () {
                                return n = Array.prototype.slice.call(arguments, 0),
                                    i = clearTimeout(i, n),
                                    i = setTimeout(function () {
                                        t.apply(o, n),
                                            i = 0
                                    }, e),
                                    this
                            }
                        }.apply(this, [
                            e,
                            i
                        ]))
                    }
                }),
                    t.fn.log = function () {
                        return console.log.apply(console, this),
                            this
                    }
            }(jQuery)
    },
    117: function (t, e) {
        var i;
        (i = jQuery).fn.unslider = function (t) {
            var e = this.length;
            return this.each(function (n) {
                var o = i(this),
                    r = 'unslider' + (e > 1 ? '-' + ++n : ''),
                    s = (new function () {
                        var t = this;
                        function e(e, n) {
                            'dot' == e ? (n = '<ol class="dots">', i.each(t.li, function (i) {
                                n += '<li class="' + (i == t.i ? e + ' active' : e) + '">' + ++i + '</li>'
                            }), n += '</ol>')  : n = (n = '<div class="') + e + 's">' + n + e + ' prev">' + t.o.prev + '</div>' + n + e + ' next">' + t.o.next + '</div></div>',
                                t.el.addClass('has-' + e + 's').append(n).find('.' + e).click(function () {
                                    var e = i(this);
                                    e.hasClass('dot') ? t.stop().to(e.index())  : e.hasClass('prev') ? t.prev()  : t.next()
                                })
                        }
                        t.o = {
                            speed: 500,
                            easing: 'swing',
                            delay: 3000,
                            init: 0,
                            pause: !0,
                            loop: !0,
                            keys: !1,
                            dots: !1,
                            arrows: !1,
                            prev: '←',
                            next: '→',
                            fluid: !1,
                            before: !1,
                            complete: !1,
                            activeClass: 'active',
                            items: '>ul',
                            item: '>li'
                        },
                            t.init = function (n, o) {
                                t.o = i.extend(t.o, o),
                                    t.el = n,
                                    t.ul = n.find(t.o.items),
                                    t.max = [
                                        0 | n.outerWidth(),
                                        0 | n.outerHeight()
                                    ],
                                    t.li = t.ul.find(t.o.item).each(function (e) {
                                        var n = i(this),
                                            o = n.outerWidth(),
                                            r = n.outerHeight();
                                        o > t.max[0] && (t.max[0] = o),
                                        r > t.max[1] && (t.max[1] = r),
                                        0 == e && n.addClass(t.o.activeClass)
                                    }),
                                    o = t.o;
                                var r = t.ul,
                                    s = t.li,
                                    a = s.length;
                                return t.i = 0,
                                    n.css({
                                        width: t.max[0],
                                        height: s.first().outerHeight(),
                                        overflow: 'hidden'
                                    }),
                                    r.css({
                                        position: 'relative',
                                        left: 0,
                                        width: 100 * a + '%'
                                    }),
                                    s.css({
                                        float: 'left',
                                        width: 100 / a + '%'
                                    }),
                                    setTimeout(function () {
                                        0 | o.delay && (t.play(), o.pause && n.on('mouseover mouseout', function (e) {
                                            t.stop(),
                                            'mouseout' == e.type && t.play()
                                        }))
                                    }, 0 | o.init),
                                o.keys && i(document).keydown(function (e) {
                                    var i = e.which;
                                    37 == i ? t.prev()  : 39 == i ? t.next()  : 27 == i && t.stop()
                                }),
                                o.dots && e('dot'),
                                o.arrows && e('arrow'),
                                o.fluid && i(window).resize(function () {
                                    t.r && clearTimeout(t.r),
                                        t.r = setTimeout(function () {
                                            var e = {
                                                    height: s.eq(t.i).outerHeight()
                                                },
                                                i = n.outerWidth();
                                            r.css(e),
                                                e.width = Math.min(Math.round(i / n.parent().width() * 100), 100) + '%',
                                                n.css(e)
                                        }, 50)
                                }).resize(),
                                (i.event.special.swipe || i.Event('swipe')) && n.on('swipeleft swiperight swipeLeft swipeRight', function (e) {
                                    'swipeleft' == e.type.toLowerCase() ? t.next()  : t.prev()
                                }),
                                    t
                            },
                            t.to = function (e, n) {
                                var o = t.o,
                                    r = t.el,
                                    s = t.ul,
                                    a = t.li,
                                    l = (t.i, a.eq(e));
                                if (l.length && !(e < 0) || 0 != o.loop) {
                                    l.length || (e = 0),
                                    e < 0 && (e = a.length - 1),
                                        l = a.eq(e),
                                        s.children().removeClass(o.activeClass),
                                        l.addClass(o.activeClass),
                                    i.isFunction(o.before) && !n && o.before.call(t, r);
                                    var c = n ? 5 : 0 | o.speed,
                                        u = {
                                            height: l.outerHeight()
                                        };
                                    s.queue('fx').length || (r.find('.dot').eq(e).addClass('active').siblings().removeClass('active'), r.animate(u, c) && s.animate(i.extend({
                                        left: '-' + e + '00%'
                                    }, u), c, o.easing, function (s) {
                                        t.i = e,
                                        i.isFunction(o.complete) && !n && o.complete.call(t, r)
                                    }))
                                }
                            },
                            t.play = function () {
                                t.t = setInterval(function () {
                                    t.to(t.i + 1)
                                }, 0 | t.o.delay)
                            },
                            t.stop = function () {
                                return t.t = clearInterval(t.t),
                                    t
                            },
                            t.next = function () {
                                return t.stop().to(t.i + 1)
                            },
                            t.prev = function () {
                                return t.stop().to(t.i - 1)
                            }
                    }).init(o, t);
                o.data(r, s).data('key', r)
            })
        }
    },
    118: function (t, e) {
        /*!
     * Based on typeahead.js 0.9.3 (https://raw.githubusercontent.com/twitter/typeahead.js/v0.9.3/dist/typeahead.js)
     * Modified and commented by ushuz, at XCF (20140828)
     */
        /*!
     * typeahead.js 0.9.3
     * https://github.com/twitter/typeahead
     * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
     */
        var i,
            n,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            g,
            m,
            v;
        i = window.jQuery,
            l = {
                isMsie: function () {
                    var t = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
                    return !!t && parseInt(t[2], 10)
                },
                isBlankString: function (t) {
                    return !t || /^\s*$/.test(t)
                },
                escapeRegExChars: function (t) {
                    return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
                },
                isString: function (t) {
                    return 'string' == typeof t
                },
                isNumber: function (t) {
                    return 'number' == typeof t
                },
                isArray: i.isArray,
                isFunction: i.isFunction,
                isObject: i.isPlainObject,
                isUndefined: function (t) {
                    return void 0 === t
                },
                bind: i.proxy,
                bindAll: function (t) {
                    var e;
                    for (var n in t) i.isFunction(e = t[n]) && (t[n] = i.proxy(e, t))
                },
                indexOf: function (t, e) {
                    for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
                    return - 1
                },
                each: i.each,
                map: i.map,
                filter: i.grep,
                every: function (t, e) {
                    var n = !0;
                    return t ? (i.each(t, function (i, o) {
                        if (!(n = e.call(null, o, i, t))) return !1
                    }), !!n)  : n
                },
                some: function (t, e) {
                    var n = !1;
                    return t ? (i.each(t, function (i, o) {
                        if (n = e.call(null, o, i, t)) return !1
                    }), !!n)  : n
                },
                mixin: i.extend,
                getUniqueId: (n = 0, function () {
                    return n++
                }),
                defer: function (t) {
                    setTimeout(t, 0)
                },
                debounce: function (t, e, i) {
                    var n,
                        o;
                    return function () {
                        var r,
                            s,
                            a = this,
                            l = arguments;
                        return r = function () {
                            n = null,
                            i || (o = t.apply(a, l))
                        },
                            s = i && !n,
                            clearTimeout(n),
                            n = setTimeout(r, e),
                        s && (o = t.apply(a, l)),
                            o
                    }
                },
                throttle: function (t, e) {
                    var i,
                        n,
                        o,
                        r,
                        s,
                        a;
                    return s = 0,
                        a = function () {
                            s = new Date,
                                o = null,
                                r = t.apply(i, n)
                        },
                        function () {
                            var l = new Date,
                                c = e - (l - s);
                            return i = this,
                                n = arguments,
                                c <= 0 ? (clearTimeout(o), o = null, s = l, r = t.apply(i, n))  : o || (o = setTimeout(a, c)),
                                r
                        }
                },
                tokenizeQuery: function (t) {
                    return i.trim(t).toLowerCase().split(/[\s]+/)
                },
                tokenizeText: function (t) {
                    return i.trim(t).toLowerCase().split(/[\s\-_]+/)
                },
                getProtocol: function () {
                    return location.protocol
                },
                noop: function () {
                }
            },
            o = /\s+/,
            c = {
                on: function (t, e) {
                    var i;
                    if (!e) return this;
                    for (this._callbacks = this._callbacks || {
                    }, t = t.split(o); i = t.shift(); ) this._callbacks[i] = this._callbacks[i] || [
                    ],
                        this._callbacks[i].push(e);
                    return this
                },
                trigger: function (t, e) {
                    var i,
                        n;
                    if (!this._callbacks) return this;
                    for (t = t.split(o); i = t.shift(); ) if (n = this._callbacks[i]) for (var r = 0; r < n.length; r += 1) n[r].call(this, {
                        type: i,
                        data: e
                    });
                    return this
                }
            },
            u = function () {
                function t(t) {
                    t && t.el || i.error('EventBus initialized without el'),
                        this.$el = i(t.el)
                }
                return l.mixin(t.prototype, {
                    trigger: function (t) {
                        var e = [
                        ].slice.call(arguments, 1);
                        this.$el.trigger('typeahead:' + t, e)
                    }
                }),
                    t
            }(),
            d = function () {
                var t,
                    e;
                try {
                    (t = window.localStorage).setItem('~~~', '!'),
                        t.removeItem('~~~')
                } catch (e) {
                    t = null
                }
                function i(t) {
                    this.prefix = [
                        '__',
                        t,
                        '__'
                    ].join(''),
                        this.ttlKey = '__ttl__',
                        this.keyMatcher = new RegExp('^' + this.prefix)
                }
                return e = t && window.JSON ? {
                        _prefix: function (t) {
                            return this.prefix + t
                        },
                        _ttlKey: function (t) {
                            return this._prefix(t) + this.ttlKey
                        },
                        get: function (e) {
                            return this.isExpired(e) && this.remove(e),
                                r(t.getItem(this._prefix(e)))
                        },
                        set: function (e, i, r) {
                            return l.isNumber(r) ? t.setItem(this._ttlKey(e), o(n() + r))  : t.removeItem(this._ttlKey(e)),
                                t.setItem(this._prefix(e), o(i))
                        },
                        remove: function (e) {
                            return t.removeItem(this._ttlKey(e)),
                                t.removeItem(this._prefix(e)),
                                this
                        },
                        clear: function () {
                            var e,
                                i,
                                n = [
                                ],
                                o = t.length;
                            for (e = 0; e < o; e++) (i = t.key(e)).match(this.keyMatcher) && n.push(i.replace(this.keyMatcher, ''));
                            for (e = n.length; e--; ) this.remove(n[e]);
                            return this
                        },
                        isExpired: function (e) {
                            var i = r(t.getItem(this._ttlKey(e)));
                            return !!(l.isNumber(i) && n() > i)
                        }
                    }
                    : {
                        get: l.noop,
                        set: l.noop,
                        remove: l.noop,
                        clear: l.noop,
                        isExpired: l.noop
                    },
                    l.mixin(i.prototype, e),
                    i;
                function n() {
                    return (new Date).getTime()
                }
                function o(t) {
                    return JSON.stringify(l.isUndefined(t) ? null : t)
                }
                function r(t) {
                    return JSON.parse(t)
                }
            }(),
            h = function () {
                function t(t) {
                    l.bindAll(this),
                        t = t || {
                        },
                        this.sizeLimit = t.sizeLimit || 10,
                        this.cache = {
                        },
                        this.cachedKeysByAge = [
                        ]
                }
                return l.mixin(t.prototype, {
                    get: function (t) {
                        return this.cache[t]
                    },
                    set: function (t, e) {
                        var i;
                        this.cachedKeysByAge.length === this.sizeLimit && (i = this.cachedKeysByAge.shift(), delete this.cache[i]),
                            this.cache[t] = e,
                            this.cachedKeysByAge.push(t)
                    }
                }),
                    t
            }(),
            p = function () {
                var t,
                    e,
                    n = 0,
                    o = {
                    };
                function r(i) {
                    l.bindAll(this),
                        i = l.isString(i) ? {
                                url: i
                            }
                            : i,
                        e = e || new h,
                        t = l.isNumber(i.maxParallelRequests) ? i.maxParallelRequests : t || 6,
                        this.url = i.url,
                        this.wildcard = i.wildcard || '%QUERY',
                        this.filter = i.filter,
                        this.replace = i.replace,
                        this.ajaxSettings = {
                            type: 'get',
                            cache: i.cache,
                            timeout: i.timeout,
                            dataType: i.dataType || 'json',
                            beforeSend: i.beforeSend
                        },
                        this._get = (/^throttle$/i.test(i.rateLimitFn) ? l.throttle : l.debounce) (this._get, i.rateLimitWait || 300)
                }
                return l.mixin(r.prototype, {
                    _get: function (i, o) {
                        var r = this;
                        n < t ? this._sendRequest(i).done(function (t) {
                            var n = r.filter ? r.filter(t)  : t;
                            o && o(n),
                                e.set(i, t)
                        })  : this.onDeckRequestArgs = [
                        ].slice.call(arguments, 0)
                    },
                    _sendRequest: function (t) {
                        var e = this,
                            r = o[t];
                        return r || (n++, r = o[t] = i.ajax(t, this.ajaxSettings).always(function () {
                            n--,
                                o[t] = null,
                            e.onDeckRequestArgs && (e._get.apply(e, e.onDeckRequestArgs), e.onDeckRequestArgs = null)
                        })),
                            r
                    },
                    get: function (t, i) {
                        var n,
                            o,
                            r = this,
                            s = encodeURIComponent(t || '');
                        return i = i || l.noop,
                            n = this.replace ? this.replace(this.url, s)  : this.url.replace(this.wildcard, s),
                            (o = e.get(n)) ? l.defer(function () {
                                i(r.filter ? r.filter(o)  : o)
                            })  : this._get(n, i),
                            !!o
                    }
                }),
                    r
            }(),
            f = function () {
                var t = {
                    thumbprint: 'thumbprint',
                    protocol: 'protocol',
                    itemHash: 'itemHash',
                    adjacencyList: 'adjacencyList'
                };
                function e(t) {
                    l.bindAll(this),
                    l.isString(t.template) && !t.engine && i.error('no template engine specified'),
                    t.local || t.prefetch || t.remote || i.error('one of local, prefetch, or remote is required'),
                        this.name = t.name || l.getUniqueId(),
                        this.limit = t.limit || 5,
                        this.minLength = t.minLength || 1,
                        this.header = t.header,
                        this.footer = t.footer,
                        this.valueKey = t.valueKey || 'value',
                        this.template = function (t, e, i) {
                            var n,
                                o;
                            l.isFunction(t) ? n = t : l.isString(t) ? (o = e.compile(t), n = l.bind(o.render, o))  : n = function (t) {
                                return '<p>' + t[i] + '</p>'
                            };
                            return n
                        }(t.template, t.engine, this.valueKey),
                        this.local = t.local,
                        this.prefetch = t.prefetch,
                        this.remote = t.remote,
                        this.itemHash = {
                        },
                        this.adjacencyList = {
                        },
                        this.storage = t.name ? new d(t.name)  : null,
                        this.shortcuts = t.shortcuts || [
                        ]
                }
                return l.mixin(e.prototype, {
                    _processLocalData: function (t) {
                        this._mergeProcessedData(this._processData(t))
                    },
                    _loadPrefetchData: function (e) {
                        var n,
                            o,
                            r,
                            s,
                            a,
                            c,
                            u = this,
                            d = '0.9.3' + (e.thumbprint || '');
                        return this.storage && (n = this.storage.get(t.thumbprint), o = this.storage.get(t.protocol), r = this.storage.get(t.itemHash), s = this.storage.get(t.adjacencyList)),
                            a = n !== d || o !== l.getProtocol(),
                            (e = l.isString(e) ? {
                                    url: e
                                }
                                : e).ttl = l.isNumber(e.ttl) ? e.ttl : 86400000,
                            r && s && !a ? (this._mergeProcessedData({
                                itemHash: r,
                                adjacencyList: s
                            }), c = i.Deferred().resolve())  : c = i.getJSON(e.url).done(function (i) {
                                var n = e.filter ? e.filter(i)  : i,
                                    o = u._processData(n),
                                    r = o.itemHash,
                                    s = o.adjacencyList;
                                u.storage && (u.storage.set(t.itemHash, r, e.ttl), u.storage.set(t.adjacencyList, s, e.ttl), u.storage.set(t.thumbprint, d, e.ttl), u.storage.set(t.protocol, l.getProtocol(), e.ttl));
                                u._mergeProcessedData(o)
                            }),
                            c
                    },
                    _transformDatum: function (t) {
                        var e = l.isString(t) ? t : t[this.valueKey],
                            i = {
                                value: e,
                                tokens: t.tokens || l.tokenizeText(e)
                            };
                        return l.isString(t) ? (i.datum = {
                        }, i.datum[this.valueKey] = t)  : i.datum = t,
                            i.tokens = l.filter(i.tokens, function (t) {
                                return !l.isBlankString(t)
                            }),
                            i.tokens = l.map(i.tokens, function (t) {
                                return t.toLowerCase()
                            }),
                            i
                    },
                    _processData: function (t) {
                        var e = this,
                            i = {
                            },
                            n = {
                            };
                        return l.each(t, function (t, o) {
                            var r = e._transformDatum(o),
                                s = l.getUniqueId(r.value);
                            i[s] = r,
                                l.each(r.tokens, function (t, e) {
                                    var i = e.charAt(0),
                                        o = n[i] || (n[i] = [
                                            s
                                        ]);
                                    !~l.indexOf(o, s) && o.push(s)
                                })
                        }),
                            {
                                itemHash: i,
                                adjacencyList: n
                            }
                    },
                    _mergeProcessedData: function (t) {
                        var e = this;
                        l.mixin(this.itemHash, t.itemHash),
                            l.each(t.adjacencyList, function (t, i) {
                                var n = e.adjacencyList[t];
                                e.adjacencyList[t] = n ? n.concat(i)  : i
                            })
                    },
                    _getLocalSuggestions: function (t) {
                        var e,
                            i = this,
                            n = [
                            ],
                            o = [
                            ],
                            r = [
                            ];
                        return l.each(t, function (t, e) {
                            var i = e.charAt(0);
                            !~l.indexOf(n, i) && n.push(i)
                        }),
                            l.each(n, function (t, n) {
                                var r = i.adjacencyList[n];
                                if (!r) return !1;
                                o.push(r),
                                (!e || r.length < e.length) && (e = r)
                            }),
                            o.length < n.length ? [
                            ] : (l.each(e, function (e, n) {
                                var s = i.itemHash[n];
                                l.every(o, function (t) {
                                    return ~l.indexOf(t, n)
                                }) && l.every(t, function (t) {
                                    return l.some(s.tokens, function (e) {
                                        return 0 === e.indexOf(t)
                                    })
                                }) && r.push(s)
                            }), r)
                    },
                    initialize: function () {
                        var t;
                        return this.local && this._processLocalData(this.local),
                            this.transport = this.remote ? new p(this.remote)  : null,
                            t = this.prefetch && !this.prefetch.ondemand ? this._loadPrefetchData(this.prefetch)  : i.Deferred().resolve(),
                            this.initialize = function () {
                                return t
                            },
                            t
                    },
                    getSuggestions: function (t, e) {
                        var i,
                            n,
                            o = this,
                            r = !1;
                        t.length < this.minLength || (i = l.tokenizeQuery(t), (n = this._getLocalSuggestions(i).slice(0, this.limit)).length < this.limit && this.transport && (r = this.transport.get(t, function (t) {
                            n = n.slice(0),
                                l.each(t, function (t, e) {
                                    var i = o._transformDatum(e);
                                    return !l.some(n, function (t) {
                                        return i.value === t.value
                                    }) && n.push(i),
                                    n.length < o.limit
                                }),
                            e && e(n)
                        })), !r && e && e(n))
                    }
                }),
                    e
            }(),
            g = function () {
                function t(t) {
                    var e,
                        n = this;
                    l.bindAll(this),
                        this.specialKeyCodeMap = {
                            9: 'tab',
                            27: 'esc',
                            37: 'left',
                            39: 'right',
                            13: 'enter',
                            38: 'up',
                            40: 'down'
                        },
                        this.$hint = i(t.hint),
                        this.$input = i(t.input).on('blur.tt', this._handleBlur).on('focus.tt', this._handleFocus).on('keydown.tt', this._handleSpecialKeyEvent),
                        l.isMsie() ? this.$input.on('keydown.tt keypress.tt cut.tt paste.tt', function (t) {
                            n.specialKeyCodeMap[t.which || t.keyCode] || l.defer(n._compareQueryToInputValue)
                        })  : this.$input.on('input.tt', this._compareQueryToInputValue),
                        this.query = this.$input.val(),
                        this.$overflowHelper = (e = this.$input, i('<span></span>').css({
                            position: 'absolute',
                            left: '-9999px',
                            visibility: 'hidden',
                            whiteSpace: 'nowrap',
                            fontFamily: e.css('font-family'),
                            fontSize: e.css('font-size'),
                            fontStyle: e.css('font-style'),
                            fontVariant: e.css('font-variant'),
                            fontWeight: e.css('font-weight'),
                            wordSpacing: e.css('word-spacing'),
                            letterSpacing: e.css('letter-spacing'),
                            textIndent: e.css('text-indent'),
                            textRendering: e.css('text-rendering'),
                            textTransform: e.css('text-transform')
                        }).insertAfter(e))
                }
                return l.mixin(t.prototype, c, {
                    _handleFocus: function () {
                        this.trigger('focused')
                    },
                    _handleBlur: function () {
                        this.trigger('blured')
                    },
                    _handleSpecialKeyEvent: function (t) {
                        var e = this.specialKeyCodeMap[t.which || t.keyCode];
                        e && this.trigger(e + 'Keyed', t)
                    },
                    _compareQueryToInputValue: function () {
                        var t,
                            e,
                            i = this.getInputValue(),
                            n = (t = this.query, e = i, t = (t || '').replace(/^\s*/g, '').replace(/\s{2,}/g, ' '), e = (e || '').replace(/^\s*/g, '').replace(/\s{2,}/g, ' '), t === e);
                        !!n && this.query.length !== i.length ? this.trigger('whitespaceChanged', {
                            value: this.query
                        })  : n || this.trigger('queryChanged', {
                            value: this.query = i
                        })
                    },
                    destroy: function () {
                        this.$hint.off('.tt'),
                            this.$input.off('.tt'),
                            this.$hint = this.$input = this.$overflowHelper = null
                    },
                    focus: function () {
                        this.$input.focus()
                    },
                    blur: function () {
                        this.$input.blur()
                    },
                    getQuery: function () {
                        return this.query
                    },
                    setQuery: function (t) {
                        this.query = t
                    },
                    getInputValue: function () {
                        return this.$input.val()
                    },
                    setInputValue: function (t, e) {
                        this.$input.val(t),
                        !e && this._compareQueryToInputValue()
                    },
                    getHintValue: function () {
                        return this.$hint.val()
                    },
                    setHintValue: function (t) {
                        this.$hint.val(t)
                    },
                    getLanguageDirection: function () {
                        return (this.$input.css('direction') || 'ltr').toLowerCase()
                    },
                    isOverflow: function () {
                        return this.$overflowHelper.text(this.getInputValue()),
                        this.$overflowHelper.width() > this.$input.width()
                    },
                    isCursorAtEnd: function () {
                        var t,
                            e = this.$input.val().length,
                            i = this.$input[0].selectionStart;
                        return l.isNumber(i) ? i === e : !document.selection || ((t = document.selection.createRange()).moveStart('character', - e), e === t.text.length)
                    }
                }),
                    t
            }(),
            m = function () {
                var t = '<span class="tt-suggestions"></span>',
                    e = {
                        display: 'block'
                    },
                    n = {
                        whiteSpace: 'nowrap',
                        cursor: 'pointer'
                    },
                    o = {
                        whiteSpace: 'normal'
                    };
                function r(t) {
                    l.bindAll(this),
                        this.isOpen = !1,
                        this.isEmpty = !0,
                        this.isMouseOverDropdown = !1,
                        this.$menu = i(t.menu).on('mouseenter.tt', this._handleMouseenter).on('mouseleave.tt', this._handleMouseleave).on('click.tt', '.tt-suggestion', this._handleSelection).on('mouseover.tt', '.tt-suggestion', this._handleMouseover)
                }
                return l.mixin(r.prototype, c, {
                    _handleMouseenter: function () {
                        this.isMouseOverDropdown = !0
                    },
                    _handleMouseleave: function () {
                        this.isMouseOverDropdown = !1,
                            this._getSuggestions().removeClass('tt-is-under-cursor')
                    },
                    _handleMouseover: function (t) {
                        var e = i(t.currentTarget);
                        this._getSuggestions().removeClass('tt-is-under-cursor'),
                            e.addClass('tt-is-under-cursor')
                    },
                    _handleSelection: function (t) {
                        var e = i(t.currentTarget);
                        this.trigger('suggestionSelected', s(e))
                    },
                    _show: function () {
                        this.$menu.css('display', 'block')
                    },
                    _hide: function () {
                        this.$menu.hide()
                    },
                    _moveCursor: function (t) {
                        var e,
                            i,
                            n,
                            o;
                        this.isVisible() && ((i = (e = this._getSuggestions()).filter('.tt-is-under-cursor')).removeClass('tt-is-under-cursor'), - 1 !== (n = ((n = e.index(i) + t) + 1) % (e.length + 1) - 1) ? (n < - 1 && (n = e.length - 1), o = e.eq(n).addClass('tt-is-under-cursor'), this._ensureVisibility(o), this.trigger('cursorMoved', s(o)))  : this.trigger('cursorRemoved'))
                    },
                    _getSuggestions: function () {
                        return this.$menu.find('.tt-suggestions > .tt-suggestion')
                    },
                    _ensureVisibility: function (t) {
                        var e = this.$menu.height() + parseInt(this.$menu.css('paddingTop'), 10) + parseInt(this.$menu.css('paddingBottom'), 10),
                            i = this.$menu.scrollTop(),
                            n = t.position().top,
                            o = n + t.outerHeight(!0);
                        n < 0 ? this.$menu.scrollTop(i + n)  : e < o && this.$menu.scrollTop(i + (o - e))
                    },
                    destroy: function () {
                        this.$menu.off('.tt'),
                            this.$menu = null
                    },
                    isVisible: function () {
                        return this.isOpen && !this.isEmpty
                    },
                    closeUnlessMouseIsOverDropdown: function () {
                        this.isMouseOverDropdown || this.close()
                    },
                    close: function () {
                        this.isOpen && (this.isOpen = !1, this.isMouseOverDropdown = !1, this._hide(), this.$menu.find('.tt-suggestions > .tt-suggestion').removeClass('tt-is-under-cursor'), this.trigger('closed'))
                    },
                    open: function () {
                        this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger('opened'))
                    },
                    setLanguageDirection: function (t) {
                        'ltr' === t ? this.$menu.css({
                            left: '0',
                            right: 'auto'
                        })  : this.$menu.css({
                            left: 'auto',
                            right: ' 0'
                        })
                    },
                    moveCursorUp: function () {
                        this._moveCursor( - 1)
                    },
                    moveCursorDown: function () {
                        this._moveCursor(1)
                    },
                    getSuggestionUnderCursor: function () {
                        var t = this._getSuggestions().filter('.tt-is-under-cursor').first();
                        return t.length > 0 ? s(t)  : null
                    },
                    getFirstSuggestion: function () {
                        var t = this._getSuggestions().first();
                        return t.length > 0 ? s(t)  : null
                    },
                    renderSuggestions: function (r, s, a) {
                        var c,
                            u,
                            d,
                            h,
                            p,
                            f = 'tt-dataset-' + r.name,
                            g = this.$menu.find('.' + f);
                        0 === g.length && (u = i(t).css(e), g = i('<div></div>').addClass(f).append(r.header).append(u).append(r.footer).appendTo(this.$menu)),
                            r.shortcuts || s.length > 0 ? (this.isEmpty = !1, this.isOpen && this._show(), d = document.createElement('div'), h = document.createDocumentFragment(), l.each(s, function (t, e) {
                                e.dataset = r.name,
                                    c = r.template(e.datum),
                                    d.innerHTML = '<div class="tt-suggestion">%body</div>'.replace('%body', c),
                                    (p = i(d.firstChild).css(n).data('suggestion', e)).children().each(function () {
                                        i(this).css(o)
                                    }),
                                    h.appendChild(p[0])
                            }), r.shortcuts && r.shortcuts.length > 0 && l.each(r.shortcuts, function (t, e) {
                                url = e.url.replace('%QUERY', encodeURIComponent(a)),
                                    caption = e.caption.replace('%QUERY', a),
                                    el = document.createElement('div'),
                                    i(el).addClass('tt-suggestion').addClass('tt-shortcut'),
                                0 === t && i(el).addClass('tt-shortcut-first'),
                                    i(el).append(i('<a>', {
                                        href: url,
                                        text: caption
                                    })),
                                    i(el).data('suggestion', {
                                        value: a,
                                        url: url
                                    }),
                                    h.appendChild(el)
                            }), g.show().find('.tt-suggestions').html(h))  : this.clearSuggestions(r.name),
                            this.trigger('suggestionsRendered')
                    },
                    clearSuggestions: function (t) {
                        var e = t ? this.$menu.find('.tt-dataset-' + t)  : this.$menu.find('[class^="tt-dataset-"]'),
                            i = e.find('.tt-suggestions');
                        e.hide(),
                            i.empty(),
                        0 === this._getSuggestions().length && (this.isEmpty = !0, this._hide())
                    }
                }),
                    r;
                function s(t) {
                    return t.data('suggestion')
                }
            }(),
            v = function () {
                var t = {
                        wrapper: '<span class="twitter-typeahead"></span>',
                        hint: '<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',
                        dropdown: '<span class="tt-dropdown-menu"></span>'
                    },
                    e = {
                        wrapper: {
                            position: 'relative',
                            float: 'left'
                        },
                        hint: {
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            borderColor: 'transparent',
                            boxShadow: 'none'
                        },
                        query: {
                            position: 'relative',
                            verticalAlign: 'top',
                            backgroundColor: 'transparent'
                        },
                        dropdown: {
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            zIndex: '100',
                            display: 'none'
                        }
                    };
                function n(n) {
                    var o,
                        r,
                        s;
                    l.bindAll(this),
                        this.$node = function (n) {
                            var o = i(t.wrapper),
                                r = i(t.dropdown),
                                s = i(n),
                                a = i(t.hint);
                            o = o.css(e.wrapper),
                                r = r.css(e.dropdown),
                                a.css(e.hint).css({
                                    backgroundAttachment: s.css('background-attachment'),
                                    backgroundClip: s.css('background-clip'),
                                    backgroundColor: s.css('background-color'),
                                    backgroundImage: s.css('background-image'),
                                    backgroundOrigin: s.css('background-origin'),
                                    backgroundPosition: s.css('background-position'),
                                    backgroundRepeat: s.css('background-repeat'),
                                    backgroundSize: s.css('background-size')
                                }),
                                s.data('ttAttrs', {
                                    dir: s.attr('dir'),
                                    autocomplete: s.attr('autocomplete'),
                                    spellcheck: s.attr('spellcheck'),
                                    style: s.attr('style')
                                }),
                                s.addClass('tt-query').attr({
                                    autocomplete: 'off',
                                    spellcheck: !1
                                }).css(e.query);
                            try {
                                !s.attr('dir') && s.attr('dir', 'auto')
                            } catch (t) {
                            }
                            return s.wrap(o).parent().prepend(a).append(r)
                        }(n.input),
                        this.datasets = n.datasets,
                        this.dir = null,
                        this.eventBus = n.eventBus,
                        o = this.$node.find('.tt-dropdown-menu'),
                        r = this.$node.find('.tt-query'),
                        s = this.$node.find('.tt-hint'),
                        this.dropdownView = new m({
                            menu: o
                        }).on('suggestionSelected', this._handleSelection).on('cursorMoved', this._clearHint).on('cursorMoved', this._setInputValueToSuggestionUnderCursor).on('cursorRemoved', this._setInputValueToQuery).on('cursorRemoved', this._updateHint).on('suggestionsRendered', this._updateHint).on('opened', this._updateHint).on('closed', this._clearHint).on('opened closed', this._propagateEvent),
                        this.inputView = new g({
                            input: r,
                            hint: s
                        }).on('focused', this._openDropdown).on('blured', this._closeDropdown).on('blured', this._setInputValueToQuery).on('enterKeyed tabKeyed', this._handleSelection).on('queryChanged', this._clearHint).on('queryChanged', this._clearSuggestions).on('queryChanged', this._getSuggestions).on('whitespaceChanged', this._updateHint).on('queryChanged whitespaceChanged', this._openDropdown).on('queryChanged whitespaceChanged', this._setLanguageDirection).on('escKeyed', this._closeDropdown).on('escKeyed', this._setInputValueToQuery).on('tabKeyed upKeyed downKeyed', this._managePreventDefault).on('upKeyed downKeyed', this._moveDropdownCursor).on('upKeyed downKeyed', this._openDropdown).on('tabKeyed leftKeyed rightKeyed', this._autocomplete),
                        this.inputView.on('focused', this._handleOnDemandPrefetch)
                }
                return l.isMsie() && l.mixin(e.query, {
                    backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)'
                }),
                l.isMsie() && l.isMsie() <= 7 && (l.mixin(e.wrapper, {
                    display: 'inline',
                    zoom: '1'
                }), l.mixin(e.query, {
                    marginTop: '-1px'
                })),
                    l.mixin(n.prototype, c, {
                        _managePreventDefault: function (t) {
                            var e,
                                i,
                                n = t.data,
                                o = !1;
                            switch (t.type) {
                                case 'tabKeyed':
                                    e = this.inputView.getHintValue(),
                                        i = this.inputView.getInputValue(),
                                        o = e && e !== i;
                                    break;
                                case 'upKeyed':
                                case 'downKeyed':
                                    o = !n.shiftKey && !n.ctrlKey && !n.metaKey
                            }
                            o && n.preventDefault()
                        },
                        _setLanguageDirection: function () {
                            var t = this.inputView.getLanguageDirection();
                            t !== this.dir && (this.dir = t, this.$node.css('direction', t), this.dropdownView.setLanguageDirection(t))
                        },
                        _updateHint: function () {
                            var t,
                                e,
                                i,
                                n,
                                o = this.dropdownView.getFirstSuggestion(),
                                r = o ? o.value : null,
                                s = this.dropdownView.isVisible(),
                                a = this.inputView.isOverflow();
                            r && s && !a && (e = (t = this.inputView.getInputValue()).replace(/\s{2,}/g, ' ').replace(/^\s+/g, ''), i = l.escapeRegExChars(e), n = new RegExp('^(?:' + i + ')(.*$)', 'i').exec(r), this.inputView.setHintValue(t + (n ? n[1] : '')))
                        },
                        _clearHint: function () {
                            this.inputView.setHintValue('')
                        },
                        _clearSuggestions: function () {
                            this.dropdownView.clearSuggestions()
                        },
                        _setInputValueToQuery: function () {
                            this.inputView.setInputValue(this.inputView.getQuery())
                        },
                        _setInputValueToSuggestionUnderCursor: function (t) {
                            var e = t.data;
                            this.inputView.setInputValue(e.value, !0)
                        },
                        _openDropdown: function () {
                            this.dropdownView.open()
                        },
                        _closeDropdown: function (t) {
                            this.dropdownView['blured' === t.type ? 'closeUnlessMouseIsOverDropdown' : 'close']()
                        },
                        _moveDropdownCursor: function (t) {
                            var e = t.data;
                            e.shiftKey || e.ctrlKey || e.metaKey || this.dropdownView['upKeyed' === t.type ? 'moveCursorUp' : 'moveCursorDown']()
                        },
                        _handleOnDemandPrefetch: function (t) {
                            l.each(this.datasets, function (t, e) {
                                !e.prefetch.fetched && e.prefetch.ondemand && e._loadPrefetchData(e.prefetch),
                                    e.prefetch.fetched = !0
                            })
                        },
                        _handleSelection: function (t) {
                            var e = 'suggestionSelected' === t.type,
                                i = e ? t.data : this.dropdownView.getSuggestionUnderCursor();
                            !e && i && i.url && (window.location = i.url),
                            i && (this.inputView.setInputValue(i.value), e ? this.inputView.focus()  : t.data.preventDefault(), e && l.isMsie() ? l.defer(this.dropdownView.close)  : this.dropdownView.close(), this.eventBus.trigger('selected', i.datum, i.dataset))
                        },
                        _getSuggestions: function () {
                            var t = this,
                                e = this.inputView.getQuery();
                            l.isBlankString(e) || l.each(this.datasets, function (i, n) {
                                n.getSuggestions(e, function (i) {
                                    e === t.inputView.getQuery() && t.dropdownView.renderSuggestions(n, i, e)
                                })
                            })
                        },
                        _autocomplete: function (t) {
                            var e,
                                i,
                                n,
                                o,
                                r;
                            ('rightKeyed' !== t.type && 'leftKeyed' !== t.type || (e = this.inputView.isCursorAtEnd(), i = 'ltr' === this.inputView.getLanguageDirection() ? 'leftKeyed' === t.type : 'rightKeyed' === t.type, e && !i)) && (n = this.inputView.getQuery(), '' !== (o = this.inputView.getHintValue()) && n !== o && (r = this.dropdownView.getFirstSuggestion(), this.inputView.setInputValue(r.value), this.eventBus.trigger('autocompleted', r.datum, r.dataset)))
                        },
                        _propagateEvent: function (t) {
                            this.eventBus.trigger(t.type)
                        },
                        destroy: function () {
                            var t,
                                e;
                            this.inputView.destroy(),
                                this.dropdownView.destroy(),
                                t = this.$node,
                                e = t.find('.tt-query'),
                                l.each(e.data('ttAttrs'), function (t, i) {
                                    l.isUndefined(i) ? e.removeAttr(t)  : e.attr(t, i)
                                }),
                                e.detach().removeData('ttAttrs').removeClass('tt-query').insertAfter(t),
                                t.remove(),
                                this.$node = null
                        },
                        setQuery: function (t) {
                            this.inputView.setQuery(t),
                                this.inputView.setInputValue(t),
                                this._clearHint(),
                                this._clearSuggestions(),
                                this._getSuggestions()
                        }
                    }), n
            }(),
            s = {
            },
            a = 'ttView',
            r = {
                initialize: function (t) {
                    var e;
                    return 0 === (t = l.isArray(t) ? t : [
                        t
                    ]).length && i.error('no datasets provided'),
                        e = l.map(t, function (t) {
                            var e = s[t.name] ? s[t.name] : new f(t);
                            return t.name && (s[t.name] = e),
                                e
                        }),
                        this.each(function () {
                            var t,
                                n = i(this),
                                o = new u({
                                    el: n
                                });
                            t = l.map(e, function (t) {
                                return t.initialize()
                            }),
                                n.data(a, new v({
                                    input: n,
                                    eventBus: o = new u({
                                        el: n
                                    }),
                                    datasets: e
                                })),
                                i.when.apply(i, t).always(function () {
                                    l.defer(function () {
                                        o.trigger('initialized')
                                    })
                                })
                        })
                },
                destroy: function () {
                    return this.each(function () {
                        var t = i(this),
                            e = t.data(a);
                        e && (e.destroy(), t.removeData(a))
                    })
                },
                setQuery: function (t) {
                    return this.each(function () {
                        var e = i(this).data(a);
                        e && e.setQuery(t)
                    })
                }
            },
            jQuery.fn.typeahead = function (t) {
                return r[t] ? r[t].apply(this, [
                ].slice.call(arguments, 1))  : r.initialize.apply(this, arguments)
            }
    },
    119: function (t, e) {
        t.exports = '/*!\n * jQuery imagesLoaded plugin v2.1.0\n * http://github.com/desandro/imagesloaded\n *\n * MIT License. by Paul Irish et al.\n */\n(function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():\n0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):\ng}})(jQuery);\n'
    },
    120: function (t, e, i) {
        i(1) (i(119))
    },
    121: function (t, e) {
        !function (t) {
            'use strict';
            t.fn.unveil = function (e) {
                var i,
                    n,
                    o,
                    r = t(window),
                    s = window.devicePixelRatio > 1 ? 'data-src-retina' : 'data-src',
                    a = this.filter(':not(.unveiled)'),
                    l = {
                        threshold: 0,
                        show: !1,
                        inview: function () {
                            (o = (o = this.getAttribute(s)) || this.getAttribute('data-src')) && (this.setAttribute('src', o), t(this).addClass('unveiled'))
                        }
                    };
                e = 'boolean' == typeof e ? t.extend(l, {
                    show: e
                })  : 'string' == typeof e ? t.extend(l, {
                    threshold: e
                })  : 'function' == typeof e ? t.extend(l, {
                    inview: e
                })  : t.extend(l, e),
                    this.one('unveil', e.inview);
                var c = function () {
                    if (e.show) return !0;
                    var i = t(this),
                        n = r.scrollTop(),
                        o = n + r.height(),
                        s = i.offset().top;
                    return s + i.height() >= n - e.threshold && s <= o + e.threshold
                };
                function u() {
                    n = a.filter(c),
                        i = n.trigger('unveil'),
                        a = a.not(i)
                }
                return r.scroll(function (t, e, i) {
                    var n,
                        o,
                        r,
                        s,
                        a = 0;
                    i || (i = {
                    });
                    var l = function () {
                        a = !1 === i.leading ? 0 : (new Date).getTime(),
                            n = null,
                            s = t.apply(o, r),
                        n || (o = r = null)
                    };
                    function c() {
                        var c = (new Date).getTime();
                        a || !1 !== i.leading || (a = c);
                        var u = e - (c - a);
                        return o = this,
                            r = arguments,
                            u <= 0 || u > e ? (n && (clearTimeout(n), n = null), a = c, s = t.apply(o, r), n || (o = r = null))  : n || !1 === i.trailing || (n = setTimeout(l, u)),
                            s
                    }
                    return c.clear = function () {
                        clearTimeout(n),
                            a = 0,
                            n = o = r = null
                    },
                        c
                }(u, 30)),
                    r.resize(u),
                    u(),
                    this
            }
        }(window.jQuery || window.Zepto)
    },
    122: function (t, e) {
        !function (t) {
            t.fn.menuAim = function (e) {
                return this.each(function () {
                    (function (e) {
                        var i = t(this),
                            n = null,
                            o = [
                            ],
                            r = null,
                            s = null,
                            a = t.extend({
                                rowSelector: '> li',
                                submenuSelector: '*',
                                submenuDirection: 'right',
                                tolerance: 75,
                                enter: t.noop,
                                exit: t.noop,
                                activate: t.noop,
                                deactivate: t.noop,
                                exitMenu: t.noop
                            }, e),
                            l = function (t) {
                                t != n && (n && a.deactivate(n), a.activate(t), n = t)
                            },
                            c = function (t) {
                                var e = u();
                                e ? s = setTimeout(function () {
                                    c(t)
                                }, e)  : l(t)
                            },
                            u = function () {
                                if (!n || !t(n).is(a.submenuSelector)) return 0;
                                var e = i.offset(),
                                    s = {
                                        x: e.left,
                                        y: e.top - a.tolerance
                                    },
                                    l = {
                                        x: e.left + i.outerWidth(),
                                        y: s.y
                                    },
                                    c = {
                                        x: e.left,
                                        y: e.top + i.outerHeight() + a.tolerance
                                    },
                                    u = {
                                        x: e.left + i.outerWidth(),
                                        y: c.y
                                    },
                                    d = o[o.length - 1],
                                    h = o[0];
                                if (!d) return 0;
                                if (h || (h = d), h.x < e.left || h.x > u.x || h.y < e.top || h.y > u.y) return 0;
                                if (r && d.x == r.x && d.y == r.y) return 0;
                                function p(t, e) {
                                    return (e.y - t.y) / (e.x - t.x)
                                }
                                var f = l,
                                    g = u;
                                'left' == a.submenuDirection ? (f = c, g = s)  : 'below' == a.submenuDirection ? (f = u, g = c)  : 'above' == a.submenuDirection && (f = s, g = l);
                                var m = p(d, f),
                                    v = p(d, g),
                                    y = p(h, f),
                                    w = p(h, g);
                                return m < y && v > w ? (r = d, 300)  : (r = null, 0)
                            };
                        i.mouseleave(function () {
                            s && clearTimeout(s);
                            a.exitMenu(this) && (n && a.deactivate(n), n = null)
                        }).find(a.rowSelector).mouseenter(function () {
                            s && clearTimeout(s);
                            a.enter(this),
                                c(this)
                        }).mouseleave(function () {
                            a.exit(this)
                        }).click(function () {
                            l(this)
                        }),
                            t(document).mousemove(function (t) {
                                o.push({
                                    x: t.pageX,
                                    y: t.pageY
                                }),
                                o.length > 3 && o.shift()
                            })
                    }).call(this, e)
                }),
                    this
            }
        }(jQuery)
    },
    123: function (t, e) {
        t.exports = '/*! nanoScrollerJS - v0.7.3 - (c) 2013 James Florentino; Licensed MIT */\n!function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;w={paneClass:"pane",sliderClass:"slider",contentClass:"content",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},s="scrollbar",r="scroll",k="mousedown",l="mousemove",n="mousewheel",m="mouseup",q="resize",h="drag",u="up",p="panedown",f="DOMMouseScroll",g="down",v="wheel",i="keydown",j="keyup",t="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,x=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=r,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},o=function(){function i(d,f){this.el=d,this.options=f,e||(e=x()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.$content=this.$el.children("."+f.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return i.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===u&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===n){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===u&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},i.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},i.prototype.updateScrollValues=function(){var a;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},i.prototype.createEvents=function(){var a=this;this.events={down:function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.pane.addClass("active"),a.doc.bind(l,a.events[h]).bind(m,a.events[u]),!1},drag:function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.offsetY,a.scroll(),a.updateScrollValues(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1},up:function(){return a.isBeingDragged=!1,a.pane.removeClass("active"),a.doc.unbind(l,a.events[h]).unbind(m,a.events[u]),!1},resize:function(){a.reset()},panedown:function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1},scroll:function(b){a.isBeingDragged||(a.updateScrollValues(),a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.slider.css({top:a.sliderTop})),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,u),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))},wheel:function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}},i.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(q,a[q]),this.iOSNativeScrolling||(this.slider.bind(k,a[g]),this.pane.bind(k,a[p]).bind(""+n+" "+f,a[v])),this.$content.bind(""+r+" "+n+" "+f+" "+t,a[r])},i.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(q,a[q]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+r+" "+n+" "+f+" "+t,a[r])},i.prototype.generate=function(){var a,b,c,d,f;return c=this.options,d=c.paneClass,f=c.sliderClass,a=c.contentClass,this.$el.find(""+d).length||this.$el.find(""+f).length||this.$el.append(\'<div class="\'+d+\'"><div class="\'+f+\'" /></div>\'),this.pane=this.$el.children("."+d),this.slider=this.pane.find("."+f),e&&(b={right:-e},this.$el.addClass("has-scrollbar")),null!=b&&this.$content.css(b),this},i.prototype.restore=function(){this.stopped=!1,this.pane.show(),this.addEvents()},i.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l;return this.iOSNativeScrolling?(this.contentHeight=this.content.scrollHeight,void 0):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,c=a.style,f=c.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,k=parseInt(this.$el.css("max-height"),10),k>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>k?k:a.scrollHeight)),h=this.pane.outerHeight(!1),j=parseInt(this.pane.css("top"),10),g=parseInt(this.pane.css("bottom"),10),i=h+j+g,l=Math.round(i/b*i),l<this.options.sliderMinHeight?l=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&l>this.options.sliderMaxHeight&&(l=this.options.sliderMaxHeight),f===r&&c.overflowX!==r&&(l+=e),this.maxSliderTop=i-l,this.contentHeight=b,this.paneHeight=h,this.paneOuterHeight=i,this.sliderHeight=l,this.slider.height(l),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&f!==r?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&f===r?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),this)},i.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(-1*((this.paneHeight-this.contentHeight+e)*this.sliderY/this.maxSliderTop)),this.iOSNativeScrolling||this.slider.css({top:this.sliderY}),this):void 0},i.prototype.scrollBottom=function(a){return this.isActive?(this.reset(),this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(n),this):void 0},i.prototype.scrollTop=function(a){return this.isActive?(this.reset(),this.$content.scrollTop(+a).trigger(n),this):void 0},i.prototype.scrollTo=function(b){return this.isActive?(this.reset(),this.scrollTop(a(b).get(0).offsetTop),this):void 0},i.prototype.stop=function(){return this.stopped=!0,this.removeEvents(),this.pane.hide(),this},i.prototype.destroy=function(){return this.stopped||this.stop(),this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass("has-scrollbar")&&(this.$el.removeClass("has-scrollbar"),this.$content.css({right:""})),this},i.prototype.flash=function(){var a=this;if(this.isActive)return this.reset(),this.pane.addClass("flashed"),setTimeout(function(){a.pane.removeClass("flashed")},this.options.flashDelay),this},i}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},w,b),this.nanoscroller=d=new o(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=o}(jQuery,window,document);\n'
    },
    124: function (t, e, i) {
        i(1) (i(123))
    },
    125: function (t, e) {
        /*!
     * jQuery Cookie Plugin v1.3.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
        var i;
        i = function (t) {
            var e = /\+/g;
            function i(t) {
                return o.raw ? t : decodeURIComponent(t.replace(e, ' '))
            }
            function n(t) {
                0 === t.indexOf('"') && (t = t.slice(1, - 1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')),
                    t = i(t);
                try {
                    return o.json ? JSON.parse(t)  : t
                } catch (t) {
                }
            }
            var o = t.cookie = function (e, r, s) {
                if (void 0 !== r) {
                    if ('number' == typeof (s = t.extend({
                    }, o.defaults, s)).expires) {
                        var a = s.expires,
                            l = s.expires = new Date;
                        l.setDate(l.getDate() + a)
                    }
                    return r = o.json ? JSON.stringify(r)  : String(r),
                        document.cookie = [
                            o.raw ? e : encodeURIComponent(e),
                            '=',
                            o.raw ? r : encodeURIComponent(r),
                            s.expires ? '; expires=' + s.expires.toUTCString()  : '',
                            s.path ? '; path=' + s.path : '',
                            s.domain ? '; domain=' + s.domain : '',
                            s.secure ? '; secure' : ''
                        ].join('')
                }
                for (var c = document.cookie.split('; '), u = e ? void 0 : {
                }, d = 0, h = c.length; d < h; d++) {
                    var p = c[d].split('='),
                        f = i(p.shift()),
                        g = p.join('=');
                    if (e && e === f) {
                        u = n(g);
                        break
                    }
                    e || (u[f] = n(g))
                }
                return u
            };
            o.defaults = {
            },
                t.removeCookie = function (e, i) {
                    return void 0 !== t.cookie(e) && (t.cookie(e, '', t.extend({
                    }, i, {
                        expires: - 1
                    })), !0)
                }
        },
            'function' == typeof define && define.amd ? define(['jquery'], i)  : i(jQuery)
    },
    126: function (t, e, i) {
        'use strict';
        e.__esModule = !0;
        var n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
            : function (t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            };
        e.default = a;
        var o = /^https?:\/\/(www|m|simplecms)\.xiachufang\.com/i;
        function r(t) {
            var e = document.cookie.match(new RegExp('(^| )' + t + '=([^;]*)(;|$)'));
            return null != e ? unescape(e[2])  : ''
        }
        function s(t) {
            var e = [
                ],
                i = encodeURIComponent;
            for (var n in e.add = function (t, e) {
                this.push(i(t) + '=' + i(e))
            }, t) e.add(n, t[n]);
            return e.join('&')
        }
        function a(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ec',
                i = function (t, e) {
                    for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                    return t
                }({
                    url: location.href,
                    location: location.href.replace(o, ''),
                    host: location.host,
                    time: Math.floor((new Date).getTime() / 1000),
                    app_id: r('app_id'),
                    version: r('app_version'),
                    platform: r('app_origin') || (/micromessenger/i.test(navigator.userAgent) ? 'wechat' : ''),
                    sk: r('app_sk'),
                    device_id: r('app_id') || r('device_id'),
                    user_id: r('user_id'),
                    refer: document.referrer
                }, window.infoData || {
                });
            i = s(i),
            t && ('object' === (void 0 === t ? 'undefined' : n(t)) && (t = s(t)), i += '&' + t),
                (new Image).src = 'https://track.xiachufang.com/' + e + '.gif?' + i
        }
        window.sendLog = a
    },
    127: function (t, e, i) {
        'use strict';
        var n,
            o = i(126),
            r = (n = o) && n.__esModule ? n : {
                default:
                n
            };
        !function (t) {
            var e = /^https?:\/\/(www|m|simplecms)\.xiachufang\.com/i;
            document.body.addEventListener('click', function (i) {
                    if (!t.disableClickLog) {
                        for (var n = i.target; n.tagName && 'A' !== n.tagName; ) {
                            if ('HTML' === n.tagName) return null;
                            n = n.parentNode
                        }
                        if ('' === n.href || - 1 !== n.href.indexOf('javascript:;')) return null;
                        var o = n.getAttribute('data-log') || '';
                        o || (o = 'pos=' + function (t) {
                            if (t.parentNode.hasChildNodes()) for (var e = t.parentNode.childNodes, i = 0; i < e.length; i++) if (e[i] === t) return i
                        }(n)),
                            o = function (t) {
                                var e = [
                                    ],
                                    i = encodeURIComponent;
                                for (var n in e.add = function (t, e) {
                                    this.push(i(t) + '=' + i(e))
                                }, t) e.add(n, t[n]);
                                return e.join('&')
                            }({
                                target: n.href.replace(e, '')
                            }) + '&' + o,
                            (0, r.default) (o)
                    }
                },
                !1), t.addEventListener('load', function () {
                    t.disablePvLog || (0, r.default) (null, 'pv')
                },
                !1), t.sendLog = r.default
        }(window)
    }, 128: function (t, e) {
        t.exports = '/*!\n * Infinite Ajax Scroll, a jQuery plugin\n * Version 1.1.0\n * https://github.com/webcreate/infinite-ajax-scroll\n *\n * Copyright (c) 2011-2014 Jeroen Fiege\n * Licensed under MIT:\n * https://raw.github.com/webcreate/infinite-ajax-scroll/master/MIT-LICENSE.txt\n */\n(function(e){"use strict";Date.now=Date.now||function(){return+(new Date)},e.ias=function(t){function u(){var t;i.onChangePage(function(e,t,r){s&&s.setPage(e,r),n.onPageChange.call(this,e,r,t)});if(n.triggerPageThreshold>0)a();else if(e(n.next).attr("href")){var u=r.getCurrentScrollOffset(n.scrollContainer);E(function(){p(u)})}return s&&s.havePage()&&(l(),t=s.getPage(),r.forceScrollTop(function(){var n;t>1?(v(t),n=h(!0),e("html, body").scrollTop(n)):a()})),o}function a(){c(),n.scrollContainer.scroll(f)}function f(){var e,t;e=r.getCurrentScrollOffset(n.scrollContainer),t=h(),e>=t&&(m()>=n.triggerPageThreshold?(l(),E(function(){p(e)})):p(e)),n.onScroll(e,m(),t)}function l(){n.scrollContainer.unbind("scroll",f)}function c(){e(n.pagination).hide()}function h(t){var r,i;return r=e(n.container).find(n.item).last(),r.size()===0?0:(i=r.offset().top+r.height(),t||(i+=n.thresholdMargin),i)}function p(t,r){var s;s=e(n.next).attr("href");if(!s)return l();if(n.beforePageChange&&e.isFunction(n.beforePageChange)&&n.beforePageChange(t,s)===!1)return;i.pushPages(t,s),l(),y(),d(s,function(t,i){var o=n.onLoadItems.call(this,i),u;o!==!1&&(e(i).hide(),u=e(n.container).find(n.item).last(),u.after(i),e(i).fadeIn()),s=e(n.next,t).attr("href"),e(n.pagination).replaceWith(e(n.pagination,t)),b(),c(),s?a():(n.noneleft&&e(n.container).find(n.item).last().after(n.noneleft),l()),n.onRenderComplete.call(this,i),r&&r.call(this)})}function d(t,r,i){var s=[],o,u=Date.now(),a,f;i=i||n.loaderDelay,e.get(t,null,function(t){o=e(n.container,t).eq(0),0===o.length&&(o=e(t).filter(n.container).eq(0)),o&&o.find(n.item).each(function(){s.push(this)}),r&&(f=this,a=Date.now()-u,a<i?setTimeout(function(){r.call(f,t,s)},i-a):r.call(f,t,s))},"html")}function v(t){var n=h(!0);n>0&&p(n,function(){l(),i.getCurPageNum(n)+1<t?(v(t),e("html,body").animate({scrollTop:n},400,"swing")):(e("html,body").animate({scrollTop:n},1e3,"swing"),a())})}function m(){var e=r.getCurrentScrollOffset(n.scrollContainer);return i.getCurPageNum(e)}function g(){var t=e(".ias_loader");return t.size()===0&&(t=e(\'<div class="ias_loader">\'+n.loader+"</div>"),t.hide()),t}function y(){var t=g(),r;n.customLoaderProc!==!1?n.customLoaderProc(t):(r=e(n.container).find(n.item).last(),r.after(t),t.fadeIn())}function b(){var e=g();e.remove()}function w(t){var r=e(".ias_trigger");return r.size()===0&&(r=e(\'<div class="ias_trigger"><a href="#">\'+n.trigger+"</a></div>"),r.hide()),e("a",r).unbind("click").bind("click",function(){return S(),t.call(),!1}),r}function E(t){var r=w(t),i;n.customTriggerProc!==!1?n.customTriggerProc(r):(i=e(n.container).find(n.item).last(),i.after(r),r.fadeIn())}function S(){var e=w();e.remove()}var n=e.extend({},e.ias.defaults,t),r=new e.ias.util,i=new e.ias.paging(n.scrollContainer),s=n.history?new e.ias.history:!1,o=this;u()},e.ias.defaults={container:"#container",scrollContainer:e(window),item:".item",pagination:"#pagination",next:".next",noneleft:!1,loader:\'<img src="images/loader.gif"/>\',loaderDelay:600,triggerPageThreshold:3,trigger:"Load more items",thresholdMargin:0,history:!0,onPageChange:function(){},beforePageChange:function(){},onLoadItems:function(){},onRenderComplete:function(){},onScroll:function(){},customLoaderProc:!1,customTriggerProc:!1},e.ias.util=function(){function i(){e(document).ready(function(){t=!0})}var t=!1,n=!1,r=this;i(),this.forceScrollTop=function(i){e("html,body").scrollTop(0),n||(t?(i.call(),n=!0):setTimeout(function(){r.forceScrollTop(i)},1))},this.getCurrentScrollOffset=function(e){var t,n;return e.get(0)===window?t=e.scrollTop():t=e.offset().top,n=e.height(),t+n}},e.ias.paging=function(){function s(){e(window).scroll(o)}function o(){var t,s,o,f,l;t=i.getCurrentScrollOffset(e(window)),s=u(t),o=a(t),r!==s&&(f=o[0],l=o[1],n.call({},s,f,l)),r=s}function u(e){for(var n=t.length-1;n>0;n--)if(e>t[n][0])return n+1;return 1}function a(e){for(var n=t.length-1;n>=0;n--)if(e>t[n][0])return t[n];return null}var t=[[0,document.location.toString()]],n=function(){},r=1,i=new e.ias.util;s(),this.getCurPageNum=function(t){return t=t||i.getCurrentScrollOffset(e(window)),u(t)},this.onChangePage=function(e){n=e},this.pushPages=function(e,n){t.push([e,n])}},e.ias.history=function(){function n(){t=!!(window.history&&history.pushState&&history.replaceState),t=!1}var e=!1,t=!1;n(),this.setPage=function(e,t){this.updateState({page:e},"",t)},this.havePage=function(){return this.getState()!==!1},this.getPage=function(){var e;return this.havePage()?(e=this.getState(),e.page):1},this.getState=function(){var e,n,r;if(t){n=history.state;if(n&&n.ias)return n.ias}else{e=window.location.hash.substring(0,7)==="#/page/";if(e)return r=parseInt(window.location.hash.replace("#/page/",""),10),{page:r}}return!1},this.updateState=function(t,n,r){e?this.replaceState(t,n,r):this.pushState(t,n,r)},this.pushState=function(n,r,i){var s;t?history.pushState({ias:n},r,i):(s=n.page>0?"#/page/"+n.page:"",window.location.hash=s),e=!0},this.replaceState=function(e,n,r){t?history.replaceState({ias:e},n,r):this.pushState(e,n,r)}}})(jQuery);'
    }, 129: function (t, e, i) {
        i(1) (i(128))
    }, 130: function (t, e, i) {
        i(129),
            i(127),
            i(125),
            i(124),
            i(54),
            i(122),
            i(121),
            i(120),
            i(118),
            i(117),
            i(116),
            i(115),
            i(114),
            i(113),
            i(112),
            i(111),
            i(110),
            i(109),
            i(108),
            t.exports = i(107)
    }, 54: function (t, e) {
        !function (t, e) {
            'use strict';
            t.ajaxPrefilter(function (t, e, i) {
                if (t.iframe) return t.originalURL = t.url,
                    'iframe'
            }),
                t.ajaxTransport('iframe', function (e, i, n) {
                    var o = null,
                        r = null,
                        s = 'iframe-' + t.now(),
                        a = t(e.files).filter(':file:enabled'),
                        l = null,
                        c = null;
                    function u() {
                        l.prop('disabled', !1),
                            o.remove(),
                            r.one('load', function () {
                                r.remove()
                            }),
                            r.attr('src', 'javascript:false;')
                    }
                    if (e.dataTypes.shift(), e.data = i.data, a.length) {
                        o = t('<form enctype=\'multipart/form-data\' method=\'post\'></form>').hide().attr({
                            action: e.originalURL,
                            target: s
                        }),
                        e.data && 'string' != typeof e.data && (e.data = t.param(e.data, e.traditional));
                        for (var d = decodeURIComponent(e.data).split('&'), h = 0; h < d.length; h++) {
                            var p = d[h].split('=');
                            t('<input type=\'hidden\' />').attr({
                                name: p[0],
                                value: p[1]
                            }).appendTo(o)
                        }
                        return t('<input type=\'hidden\' value=\'IFrame\' name=\'X-Requested-With\' />').appendTo(o),
                            c = e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + ('*' !== e.dataTypes[0] ? ', */*; q=0.01' : '')  : e.accepts['*'],
                            t('<input type=\'hidden\' name=\'X-HTTP-Accept\'>').attr('value', c).appendTo(o),
                            l = a.after(function (e) {
                                return t(this).clone().prop('disabled', !0)
                            }).next(),
                            a.appendTo(o),
                            {
                                send: function (e, i) {
                                    (r = t('<iframe src=\'javascript:false;\' name=\'' + s + '\' id=\'' + s + '\' style=\'display:none\'></iframe>')).one('load', function () {
                                        r.one('load', function () {
                                            var t = this.contentWindow ? this.contentWindow.document : this.contentDocument ? this.contentDocument : this.document,
                                                e = t.documentElement ? t.documentElement : t.body,
                                                n = e.getElementsByTagName('body') [0] || e,
                                                o = e.getElementsByTagName('textarea') [0],
                                                r = o && o.getAttribute('data-type') || null,
                                                s = o && o.getAttribute('data-status') || 200,
                                                a = o && o.getAttribute('data-statusText') || 'OK',
                                                l = {
                                                    html: n.innerHTML,
                                                    text: r ? o.value : n ? n.textContent || n.innerText : null
                                                };
                                            u(),
                                                i(s, a, l, r ? 'Content-Type: ' + r : null)
                                        }),
                                            o[0].submit()
                                    }),
                                        t('body').append(o, r)
                                },
                                abort: function () {
                                    null !== r && (r.unbind('load').attr('src', 'javascript:false;'), u())
                                }
                            }
                    }
                })
        }(jQuery)
    }
});
