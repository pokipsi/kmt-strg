
function getWidth() {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth;
    return x;
}
function getViewportHeight() {
    return window.innerHeight || document.documentElement.clientHeight;
}
function getDocumentHeight() {
    return document.querySelector('body').offsetHeight;
}
function isMobile() {
    return this.getWidth() < 992;
}

function setWrapperHeight() {
    let wrapper = document.getElementsByClassName('kmt-modal-wrapper')[0];
    var target = document.getElementById('target');
    if(wrapper) {
        let wrapperHeight = wrapper.offsetHeight;
        let viewportHeight = getViewportHeight();
        let height = Math.max(viewportHeight, wrapperHeight);
        target.style.height = `${ height }px`;
    }
}