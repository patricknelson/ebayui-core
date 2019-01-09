const processHtmlAttributes = require('../../common/html-attributes');
const emitAndFire = require('../../common/emit-and-fire');
const template = require('./template.marko');

function getInitialState(input) {
    return Object.assign({}, input, {
        location: input.location || 'bottom',
        htmlAttributes: processHtmlAttributes(input),
        hostSelector: '.tourtip__host',
        overlaySelector: '.tourtip__overlay'
    });
}

function handleExpand() {
    emitAndFire(this, 'tooltip-expand');
}

function handleCollapse() {
    emitAndFire(this, 'tooltip-collapse');
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    handleExpand,
    handleCollapse
});
