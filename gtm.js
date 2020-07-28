$(document).ready(() => {
    let region = window.location.href;
    let gtm;
    const IDS = {
        'uk/en': "GTM-PJTCQT9",
        'se/en': "GTM-NM5HSVN",
        'dk/en': "GTM-M7PGW74",
        'eu/en': "GTM-MCQK6F",
        'es/es': "GTM-K3JQP5H",
        'it/it': "GTM-NTV8VVJ",
        'fr/fr': "GTM-TM4XN3",
        'de/de': "GTM-W88K7R"
    }

    switch (region) {
        case region.includes("uk/en"):
            gtm = IDS['uk/en'];
            break;
        case region.includes("se/en"):
            gtm = IDS['se/en'];
            break;
        case region.includes("dk/en"):
            gtm = IDS['dk/en'];
            break;
        case region.includes("eu/en"):
            gtm = IDS['eu/en'];
            break;
        case region.includes("es/es"):
            gtm = IDS['es/es'];
            break;
        case region.includes("it/it"):
            gtm = IDS['it/it'];
            break;
        case region.includes("fr/fr"):
            gtm = IDS['de/de'];
            break;
        case region.includes("de/de"):
            gtm = IDS['de/de'];
            break;
        default:
            null
    }

    $("body").prepend(`<iframe src="//www.googletagmanager.com/ns.html?id=${gtm}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`);

    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', gtm);


})




