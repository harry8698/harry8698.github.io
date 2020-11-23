window.onscroll = function() {
    dynamicHeader()
};

function loadPage() {
    dynamicHeader();
}

function dynamicHeader() {
    header = document.getElementById('header');
    content = document.getElementById('content');
    arrow = document.getElementById('arrow');
    scrollDist = document.documentElement.scrollTop;

    if (scrollDist < 50) {
        arrow.style.opacity = 1;
        arrow.setAttribute("href", "#anchor");
    } else {
        arrow.style.opacity = 0;
        arrow.removeAttribute('href');
    }
    if (scrollDist < window.innerHeight - 130) {
        header.style.height = window.innerHeight - scrollDist + 'px';
        dummy.style.height = window.innerHeight + 'px';
    } else {
        header.style.height = '130px';
        dummy.style.height = window.innerHeight + 'px';
    }
}
