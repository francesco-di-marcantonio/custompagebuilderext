define([
    'Magento_PageBuilder/js/content-type/preview',
    'Magento_PageBuilder/js//uploader'
], function (
    PreviewBase,
    Uploader
) {
    'use strict';

    var $super;

    /**
     * Quote content type preview class
     *
     * @param parent
     * @param config
     * @param stageId
     * @constructor
     */
    function Preview(parent, config, stageId) {
        PreviewBase.call(this, parent, config, stageId);
    }

    Preview.prototype = Object.create(PreviewBase.prototype);
    $super = PreviewBase.prototype;

    // Aggiungo component image:
    $super.getUploader = function () {
        var initialImageValue = this.contentType.dataStore
            .get(this.config.additional_data.uploaderConfig.dataScope, "");

        return new Uploader(
            "imageuploader_" + this.contentType.id,
            this.config.additional_data.uploaderConfig,
            this.contentType.id,
            this.contentType.dataStore,
            initialImageValue,
        );
    };

    /**
     * Modify the options returned by the content type
     *
     * @returns {*}
     */
    Preview.prototype.retrieveOptions = function () {
        var options = $super.retrieveOptions.call(this, arguments);

        // Customize options here

        return options;
    };

    return Preview;
});
