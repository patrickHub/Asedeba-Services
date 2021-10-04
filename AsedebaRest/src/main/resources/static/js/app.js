/*! Copyright (c) 2021 ASEDEBA. All Rights Reserved. */


"use strict";

import './modules/as-common.js';
import Lib from './modules/as-webpack.js';

var lib = new Lib();

!function(){lib.range(lib.totalAsMenu).forEach(num => {lib.showMenuAccordionCollapse('#as_menu_col_' + num + '_');lib.hideMenuAccordionCollapse('#as_menu_col_' + num + '_');})}();