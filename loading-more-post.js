var loadingGif = 'https://3.bp.blogspot.com/-5Y6n45Y0x1k/XUCGgEqFUiI/AAAAAAAAKrU/-DvYMPoZLy4-sSwtgBANsi9V6JyU2kf4wCLcBGAs/s1600/gaixinhxinh.xyz-loading.gif';
var text = 'Loading More Posts...';
! function (a) {
    function b() {
        h || (h = !0, d ? (f.find("a").hide(), f.find("img").show(), a.ajax(d, {
            dataType: "html"
        }).done(function (b) {
            var b = a("<div></div>").append(b.replace(k, "")),
                c = b.find("a.blog-pager-older-link");
            c ? d = c.attr("href") : (d = "", f.hide()), b = b.find(g).children(), a(g).append(b), f.find("img").hide(), f.find("a").show(), h = !1
        })) : f.hide())
    }

    function c() {
        var a = Math.max(i.height(), j.height(), document.documentElement.clientHeight),
            c = i.scrollTop() + i.height();
        0 > a - c && b()
    }
    var d = "",
        f = null,
        g = "div.blog-posts",
        h = !1,
        i = a(window),
        j = a(document),
        k = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    a(document).ready(function () {
        if (d = a("a.blog-pager-older-link").attr("href")) {
            var g = a('<a href="javascript:void(0)">' + text + '&nbsp;&nbsp;<i class="fa fa-arrow-circle-down"></i></a>');
            g.click(b), i.scroll(c), f = a('<div class="load-more"></div>');
            var e = $('<img src="' + loadingGif + '" style="display: none;">');
            f.append(g), f.append(e), f.insertBefore(a("#blog-pager")), a("#blog-pager").hide()
        }
    })
}(jQuery);
