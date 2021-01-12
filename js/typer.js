
    $(function(){
        $(".home").typed({
            strings: ["George He"],
            startDelay: 300,
            showCursor: true,
            typeSpeed: 250,
            onStringTyped: function() {document.getElementsByClassName("typed-cursor")[0].className="empty";}
        });
        $(".hack").typed({
            strings: ["Hacker. Developer. Leader."],
            startDelay: 4000,
            showCursor: true,
            typeSpeed: 150,
            onStringTyped: function() {document.getElementsByClassName("typed-cursor")[0].className="empty";}
        });
    });
