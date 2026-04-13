(function () {
    const pageMap = Object.freeze({
        app: 'app.html',
        splash: 'index.html',
        loading: 'loading.html',
        offersLoading: 'offers-loading.html',
        comparisonTool: 'comparison-tool.html'
    });

    function buildPageUrl(pageKey, hash) {
        const pagePath = pageMap[pageKey] || pageKey;
        const url = new URL(pagePath, document.baseURI);

        if (hash) {
            url.hash = hash.startsWith('#') ? hash.slice(1) : hash;
        }

        return url.toString();
    }

    function navigateToPage(pageKey, hash) {
        window.location.href = buildPageUrl(pageKey, hash);
    }

    function replacePage(pageKey, hash) {
        window.location.replace(buildPageUrl(pageKey, hash));
    }

    window.SitePaths = Object.freeze({
        buildPageUrl,
        navigateToPage,
        replacePage,
        pages: pageMap
    });
})();
