/*! Copyright (c) 2020 Hamilton Medical AG. All Rights Reserved. */


"use strict";

import './modules/hc-common.js';
import Lib from './modules/hc-webpack.js';
import HcValidator from './modules/hc-validator.js';

var lib = new Lib();

var hcValidator = new HcValidator();

!function(){lib.readQrc();lib.doPrivacyPolicy();lib.doEula();lib.loadTransition();lib.doSelect();hcValidator.doValidation();}();