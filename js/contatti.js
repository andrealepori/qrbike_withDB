jQuery(document).ready(function($) {

    $('#myCarousel').carousel({
        interval: 5000
    });

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function() {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function(e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});












var web = (function() {
    'use strict';


    // click or touch
    var clickEvent = (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) ? 'touchstart' : 'click';


    return {

        // Call events here
        run: function() {
            this.menu_fn(); // Rende menu
            this.gallery_fn(); // Render gallery items
            this.service_fn(); // Rendes services
            this.contact_fn(); // robot function
            this.events_fn(); // Close function
            this.fx_fn(); // fx section
            //this.tools(); // basic tested tools
        },



        menu_fn: function() {
            var links = $('[data-js="link"]');
            if (links.length) {
                // Separe data with ex. title | description
                var lk = links.data('fn').split('|'),
                    tmpl = '<a class="menu-toggle">' +
                    '<span></span>' +
                    '<span></span>' +
                    '<span></span>' +
                    '</a>' +
                    '<ul class="menu-content">';
                for (var i = 0; i < lk.length; i++) {
                    tmpl += '<li><a href="#' + lk[i] + '">' +
                        lk[i] + '</a></li>';
                }
                tmpl += '</ul>';
                // now remove data-fn
                var tm = setTimeout(function() {
                    links.attr('data-fn', '');
                    clearTimeout(tm);
                }, 100);
                // Render html
                return links.html(tmpl);
            }
        },


        // close overlay
        events_fn: function() {
            $('.g_item_full').append('<a href="#" class="g_cl">X</a>');
            // click or touch
            $('.g_cl').bind(clickEvent, function(e) {
                e.preventDefault();
                $('.g_item_full').fadeOut('slow');
                $('body').css({
                    overflow: 'auto'
                });
            });
            // menu toggle event
            var m = $('.menu-toggle,.menu-content a');
            m.on(clickEvent, function() {
                $('.menu-content').toggleClass('show');
            });
        },




        service_fn: function() {
            var service = $('[data-services]'),
                self = this;
            if (service.length) {
                $.each(service, function(a) {
                    var sr = $('[data-services="item-' + a + '"]'),
                        o = sr.data('fn').split('|'),
                        p = o[0],
                        t = o[1],
                        i = o[2],
                        d = o[3],
                        s = '<div class="services_item">' +
                        '<span class="title">' + t + '</span>' +
                        '<span class="price">' + p + '</span>' +
                        '<span class="info">' + i + '</span>' +
                        '<span class="desc">' + d + '</span>' +
                        '</div>';

                    // Render services
                    sr.html(s);
                    // now remove data-fn
                    var tout = setTimeout(function() {
                        sr.attr('data-fn', '');
                        clearTimeout(tout);
                    }, 100);
                });
            }
            this.gallery_modal();
        },


        // gallery items render
        gallery_fn: function() {
            var gal = $('[data-gallery]'),
                self = this;
            if (gal.length) {
                $.each(gal, function(i) {
                    var fn = $('[data-gallery="item-' + i + '"]'),
                        obj = fn.data('fn').split('|'),
                        img = obj[0],
                        title = obj[1],
                        desc = obj[2];
                    fn.html(self.tmpl(i, img, title, desc));
                    // now remove data-fn
                    var t = setTimeout(function() {
                        fn.attr('data-fn', '');
                        clearTimeout(t);
                    }, 100);
                });
            }
            this.gallery_modal();
        },




        // gallery items render
        gallery_modal: function() {
            var modal = $('[data-modal]'),
                self = this;
            if (modal.length) {
                $.each(modal, function(e) {
                    var fn = $('[data-open="gallery_item_' + e + '"]');
                    $('[data-modal="gallery_item_' + e + '"]').on(
                        clickEvent,
                        function(p) {
                            p.preventDefault();
                            $('[data-open="gallery_item_' + e + '"]').fadeIn('slow');
                            // hide scroll
                            $('body').css({
                                overflow: 'hidden'
                            });
                        });
                });
            }
        },



        // template for gallery
        tmpl: function(id, photo, title, desc) {
            var template = '<div class="g_item">' +
                '  <span class="g_item_preview">' +
                '    <a href="#" data-modal="gallery_item_' + id + '">' +
                '      <img src="' + photo + '" alt="' + title + '" />' +
                '      <span class="g_caption">' + title + '</span>' +
                '    </a>' +
                '  </span>' +
                '  <div data-open="gallery_item_' + id + '" class="g_item_full">' +
                '    <div class="g_box">' +
                '      <img src="' + photo + '" alt="' + title + '" />' +
                '      <h3>' + title + '</h3>' +
                '      <p>' + desc + '</p>' +
                '    </div>' +
                '  </div>' +
                '</div>';
            return template;
        },




        // show and hide sections with menu
        fx_fn: function() {
            var self = 0;
            var h = 1300; // hide
            var s = 1300; // show
            // add class first element
            $('.menu-content a:first').addClass('active');
            $('.menu-content a').click(function() {
                if (!$(this).hasClass('active')) {
                    self = this;
                    // close all visible divs with the class of .section
                    $('.section:visible').fadeOut(h, function() {
                        $('.menu-content a').removeClass('active');
                        $(self).addClass('active');
                        var new_ = $($(self).attr('href'));
                        new_.fadeIn(s);
                    });
                }
                return false;
            });
        },



        // Contact section
        contact_fn: function() {
            var robot = $('#checkbox'),
                btn = $('#submit');
            console.log('ciao mondo');
            // if not checked retrun false
            btn.on(clickEvent, function() {
                if (robot.is(':checked')) {
                    $('.error').css('display', 'none');
                    return true;
                } else {
                    $('.error').css('display', 'inline-block');
                    return false;
                }
                return false;
            });
        },


        // basic tools 
        tools: function() {
            // try if exist touchstart event
            window.addEventListener('touchstart', function(event) {
                var emulate = event.targetTouches.length == 2;
                console.log(emulate ? true : false);
            }, false);
        },
    };
})();

web.run(); // run web







$(document).ready(function() {
    $(".labelImg").click(function() {
        var foto = $(this).css('background-image');
        $(".imgFull").css('background-image', foto);
        $(".lightbox").css("display", "block");
    });

    $(".lightbox").click(function() {
        $(this).css("display", "none");
    });
});


$(function() {

    $('#thumbnail li').click(function() {
        var thisIndex = $(this).index()

        if (thisIndex < $('#thumbnail li.active').index()) {
            prevImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
        } else if (thisIndex > $('#thumbnail li.active').index()) {
            nextImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
        }

        $('#thumbnail li.active').removeClass('active');
        $(this).addClass('active');

    });
});

var width = $('#image-slider').width();

function nextImage(newIndex, parent) {
    parent.find('li').eq(newIndex).addClass('next-img').css('left', width).animate({ left: 0 }, 600);
    parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({ left: -width }, 600);
    parent.find('li.next-img').attr('class', 'active-img');
}

function prevImage(newIndex, parent) {
    parent.find('li').eq(newIndex).addClass('next-img').css('left', -width).animate({ left: 0 }, 600);
    parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({ left: width }, 600);
    parent.find('li.next-img').attr('class', 'active-img');
}

/* Thumbails */
var ThumbailsWidth = ($('#image-slider').width() - 18.5) / 7;
$('#thumbnail li').find('img').css('width', ThumbailsWidth);










jQuery(document).ready(function($) {

    $('#myCarousel').carousel({
        interval: 5000
    });

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function() {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function(e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});












var web = (function() {
    'use strict';


    // click or touch
    var clickEvent = (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) ? 'touchstart' : 'click';


    return {

        // Call events here
        run: function() {
            this.menu_fn(); // Rende menu
            this.gallery_fn(); // Render gallery items
            this.service_fn(); // Rendes services
            this.contact_fn(); // robot function
            this.events_fn(); // Close function
            this.fx_fn(); // fx section
            //this.tools(); // basic tested tools
        },



        menu_fn: function() {
            var links = $('[data-js="link"]');
            if (links.length) {
                // Separe data with ex. title | description
                var lk = links.data('fn').split('|'),
                    tmpl = '<a class="menu-toggle">' +
                    '<span></span>' +
                    '<span></span>' +
                    '<span></span>' +
                    '</a>' +
                    '<ul class="menu-content">';
                for (var i = 0; i < lk.length; i++) {
                    tmpl += '<li><a href="#' + lk[i] + '">' +
                        lk[i] + '</a></li>';
                }
                tmpl += '</ul>';
                // now remove data-fn
                var tm = setTimeout(function() {
                    links.attr('data-fn', '');
                    clearTimeout(tm);
                }, 100);
                // Render html
                return links.html(tmpl);
            }
        },


        // close overlay
        events_fn: function() {
            $('.g_item_full').append('<a href="#" class="g_cl">X</a>');
            // click or touch
            $('.g_cl').bind(clickEvent, function(e) {
                e.preventDefault();
                $('.g_item_full').fadeOut('slow');
                $('body').css({
                    overflow: 'auto'
                });
            });
            // menu toggle event
            var m = $('.menu-toggle,.menu-content a');
            m.on(clickEvent, function() {
                $('.menu-content').toggleClass('show');
            });
        },




        service_fn: function() {
            var service = $('[data-services]'),
                self = this;
            if (service.length) {
                $.each(service, function(a) {
                    var sr = $('[data-services="item-' + a + '"]'),
                        o = sr.data('fn').split('|'),
                        p = o[0],
                        t = o[1],
                        i = o[2],
                        d = o[3],
                        s = '<div class="services_item">' +
                        '<span class="title">' + t + '</span>' +
                        '<span class="price">' + p + '</span>' +
                        '<span class="info">' + i + '</span>' +
                        '<span class="desc">' + d + '</span>' +
                        '</div>';

                    // Render services
                    sr.html(s);
                    // now remove data-fn
                    var tout = setTimeout(function() {
                        sr.attr('data-fn', '');
                        clearTimeout(tout);
                    }, 100);
                });
            }
            this.gallery_modal();
        },


        // gallery items render
        gallery_fn: function() {
            var gal = $('[data-gallery]'),
                self = this;
            if (gal.length) {
                $.each(gal, function(i) {
                    var fn = $('[data-gallery="item-' + i + '"]'),
                        obj = fn.data('fn').split('|'),
                        img = obj[0],
                        title = obj[1],
                        desc = obj[2];
                    fn.html(self.tmpl(i, img, title, desc));
                    // now remove data-fn
                    var t = setTimeout(function() {
                        fn.attr('data-fn', '');
                        clearTimeout(t);
                    }, 100);
                });
            }
            this.gallery_modal();
        },




        // gallery items render
        gallery_modal: function() {
            var modal = $('[data-modal]'),
                self = this;
            if (modal.length) {
                $.each(modal, function(e) {
                    var fn = $('[data-open="gallery_item_' + e + '"]');
                    $('[data-modal="gallery_item_' + e + '"]').on(
                        clickEvent,
                        function(p) {
                            p.preventDefault();
                            $('[data-open="gallery_item_' + e + '"]').fadeIn('slow');
                            // hide scroll
                            $('body').css({
                                overflow: 'hidden'
                            });
                        });
                });
            }
        },



        // template for gallery
        tmpl: function(id, photo, title, desc) {
            var template = '<div class="g_item">' +
                '  <span class="g_item_preview">' +
                '    <a href="#" data-modal="gallery_item_' + id + '">' +
                '      <img src="' + photo + '" alt="' + title + '" />' +
                '      <span class="g_caption">' + title + '</span>' +
                '    </a>' +
                '  </span>' +
                '  <div data-open="gallery_item_' + id + '" class="g_item_full">' +
                '    <div class="g_box">' +
                '      <img src="' + photo + '" alt="' + title + '" />' +
                '      <h3>' + title + '</h3>' +
                '      <p>' + desc + '</p>' +
                '    </div>' +
                '  </div>' +
                '</div>';
            return template;
        },




        // show and hide sections with menu
        fx_fn: function() {
            var self = 0;
            var h = 1300; // hide
            var s = 1300; // show
            // add class first element
            $('.menu-content a:first').addClass('active');
            $('.menu-content a').click(function() {
                if (!$(this).hasClass('active')) {
                    self = this;
                    // close all visible divs with the class of .section
                    $('.section:visible').fadeOut(h, function() {
                        $('.menu-content a').removeClass('active');
                        $(self).addClass('active');
                        var new_ = $($(self).attr('href'));
                        new_.fadeIn(s);
                    });
                }
                return false;
            });
        },



        // Contact section
        contact_fn: function() {
            var robot = $('#checkbox'),
                btn = $('#submit');
            // if not checked retrun false
            btn.on(clickEvent, function() {
                if (robot.is(':checked')) {
                    $('.error').css('display', 'none');
                    return true;
                } else {
                    $('.error').css('display', 'inline-block');
                    return false;
                }
                return false;
            });
        },


        // basic tools 
        tools: function() {
            // try if exist touchstart event
            window.addEventListener('touchstart', function(event) {
                var emulate = event.targetTouches.length == 2;
                console.log(emulate ? true : false);
            }, false);
        },
    };
})();

web.run(); // run web







$(document).ready(function() {
    $(".labelImg").click(function() {
        var foto = $(this).css('background-image');
        $(".imgFull").css('background-image', foto);
        $(".lightbox").css("display", "block");
    });

    $(".lightbox").click(function() {
        $(this).css("display", "none");
    });
});


$(function() {

    $('#thumbnail li').click(function() {
        var thisIndex = $(this).index()

        if (thisIndex < $('#thumbnail li.active').index()) {
            prevImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
        } else if (thisIndex > $('#thumbnail li.active').index()) {
            nextImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
        }

        $('#thumbnail li.active').removeClass('active');
        $(this).addClass('active');

    });
});

var width = $('#image-slider').width();

function nextImage(newIndex, parent) {
    parent.find('li').eq(newIndex).addClass('next-img').css('left', width).animate({ left: 0 }, 600);
    parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({ left: -width }, 600);
    parent.find('li.next-img').attr('class', 'active-img');
}

function prevImage(newIndex, parent) {
    parent.find('li').eq(newIndex).addClass('next-img').css('left', -width).animate({ left: 0 }, 600);
    parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({ left: width }, 600);
    parent.find('li.next-img').attr('class', 'active-img');
}

/* Thumbails */
var ThumbailsWidth = ($('#image-slider').width() - 18.5) / 7;
$('#thumbnail li').find('img').css('width', ThumbailsWidth);