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

    if (region.includes('uk/en')) {
        gtm = IDS['uk/en'];
    } else if (region.includes('se/en')) {
        gtm = IDS = ['se/en']
    } else if (region.includes('dk/en')) {
        gtm = IDS = ['dk/en']
    } else if (region.includes('eu/en')) {
        gtm = IDS = ['eu/en']
    } else if (region.includes('es/es')) {
        gtm = IDS = ['es/es']
    } else if (region.includes('fr/fr')) {
        gtm = IDS = ['fr/fr']
    } else if (region.includes('de/de')) {
        gtm = IDS = ['de/de']
    } else if (region.includes('it/it')) {
        gtm = IDS = ['it/it']
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




