var tabs = ['Experience', 'Projects', 'Education', 'Skill', 'About'];

ts.ui.ready(function () {
    var initHeader = function () {
        tabs.forEach(function (item) {
            ts.ui.Header.tabs().push({
                label: item,
                onselect: function () {
                    tabs.forEach(function (panel) {
                        var element = document.getElementById(panel);
                        if (element) {
                            if (panel === item) {
                                element.style.display = "block";
                                window.location.hash = item;
                            } else {
                                element.style.display = "none";
                            }
                        }
                    });
                }
            });
        });
    }

    var initBoards = function () {
        var companies = ['tradeshift', 'wangli', 'cloump', 'cicc'];
        companies.forEach(function (id) {
            initAside(id);
        });
    }
    var initAside = function (id) {
        if (!id) {
            return;
        }
        ts.ui.get('#board-' + id, function (board) {
            board.buttons([
                {
                    label: 'More', 
                    onclick: function() {
                        ts.ui.get('#aside-' + id, function(aside) {
                            aside.open();
                        });
                    }
                }
            ]);
        });
    }
    var init = function () {
        initHeader();
        initBoards();
    };
    init();
    window.addEventListener('load', function() {
        var hash = window.location.hash;
        ts.ui.Header.tabs().selectedIndex = tabs.indexOf(hash.substring(1, hash.length));
    });
});