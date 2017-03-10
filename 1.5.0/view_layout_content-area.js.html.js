tui.util.defineNamespace("fedoc.content", {});
fedoc.content["view_layout_content-area.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Class for the content area\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar View = require('../../base/view');\nvar classNameConst = require('../../common/classNameConst');\nvar ContentArea;\n\n/**\n * Create DIV element to draw border\n * @param {String} className - border class name\n * @returns {jQuery}\n */\nfunction borderDIV(className) {\n    return $('&lt;div>')\n        .addClass(classNameConst.BORDER_LINE)\n        .addClass(className);\n}\n\n/**\n * Content area\n * @module view/layout/content-area\n * @extends module:base/view\n */\nContentArea = View.extend(/**@lends module:view/layout/content-area.prototype */{\n    /**\n     * @constructs\n     * @param {Object} options - Options\n     */\n    initialize: function(options) {\n        View.prototype.initialize.call(this);\n\n        this.viewFactory = options.viewFactory;\n        this.dimensionModel = options.dimensionModel;\n        this._addFrameViews();\n    },\n\n    className: classNameConst.CONTENT_AREA,\n\n    /**\n     * Creates Frame views and add them as children.\n     * @private\n     */\n    _addFrameViews: function() {\n        var factory = this.viewFactory;\n\n        this._addChildren([\n            factory.createFrame('L'),\n            factory.createFrame('R')\n        ]);\n    },\n\n    /**\n     * Renders\n     * @returns {Object} this object\n     */\n    render: function() {\n        var dimensionModel = this.dimensionModel;\n        var scrollXHeight = dimensionModel.getScrollXHeight();\n        var footerHeight = dimensionModel.get('footerHeight');\n        var childElements = this._renderChildren().concat([\n            borderDIV(classNameConst.BORDER_TOP),\n            borderDIV(classNameConst.BORDER_LEFT),\n            borderDIV(classNameConst.BORDER_RIGHT),\n            borderDIV(classNameConst.BORDER_BOTTOM).css('bottom', scrollXHeight + footerHeight)\n        ]);\n\n        if (!dimensionModel.get('scrollX')) {\n            this.$el.addClass(classNameConst.NO_SCROLL_X);\n        }\n        if (!dimensionModel.get('scrollY')) {\n            this.$el.addClass(classNameConst.NO_SCROLL_Y);\n        }\n\n        this.$el.append(childElements);\n\n        return this;\n    }\n});\n\nmodule.exports = ContentArea;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"