require.config({
    baseUrl: "../static/js/lib/",

    paths: {
        app: '../app/'
    }
});

require(["jquery", "app/current", "app/category"], function($, current, category) {
    var $classList = $("#class-list");

    $("body").click(function() {
        category.clearClassHl();
        current.$class = $classList;
    })
})
