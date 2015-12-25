/**
 * @license Copyright 2015 Namjun Lee, MIT License
 *
 */
/*jshint proto:true, eqnull:true, boss:true, laxbreak:true, newcap:false, shadow:true, funcscope:true */
/*globals global, define, exports, module, window*/

(function (global, factory) {
    var Pivot = factory();

    // register in -all- the module systems (at once)
    if (typeof define === 'function' && define.amd)
        define(Pivot);

    if (typeof exports === 'object')
        module.exports = Pivot;

    if (!global.Intl) {
        global.Intl = Pivot;
    }

    global.Pivot = Pivot;

})(typeof global !== 'undefined' ? global : this, function() {
"use strict";
    var pivot;

    // init pivot configuration

    // parse data

    // column group

    // row group

    // calcurate summary

    return pivot;
});
