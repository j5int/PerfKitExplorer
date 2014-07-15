/**
 * @copyright Copyright 2014 Google Inc. All rights reserved.
 *
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file or at
 * https://developers.google.com/open-source/licenses/bsd
 *
 * @fileoverview Model definition for autocomplete picklists.
 * @author joemu@google.com (Joe Allan Muharsky)
 */

goog.provide('p3rf.perfkit.explorer.models.perfkit_simple_builder.PicklistModel');


goog.scope(function() {
var explorer = p3rf.perfkit.explorer;



/**
 * @constructor
 */
explorer.models.perfkit_simple_builder.PicklistModel =
    function() {
  /** @type {Array.<string>} */
  this.items = [];
};
var PicklistModel = explorer.models.perfkit_simple_builder.PicklistModel;


});  // goog.scope
