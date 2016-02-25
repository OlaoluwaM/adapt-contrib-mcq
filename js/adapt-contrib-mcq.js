define([
    'coreJS/adapt',
    './mcqView',
    './mcqModel'
], function(Adapt, McqView, McqModel) {

    return Adapt.register("mcq", {
        view: McqView,
        model: McqModel
    });

});
