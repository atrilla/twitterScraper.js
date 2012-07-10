/*
  _            _ _   _            _____                                _     
 | |          (_) | | |          / ____|                              (_)    
 | |___      ___| |_| |_ ___ _ _| (___   ___ _ __ __ _ _ __   ___ _ __ _ ___ 
 | __\ \ /\ / / | __| __/ _ \ '__\___ \ / __| '__/ _` | '_ \ / _ \ '__| / __|
 | |_ \ V  V /| | |_| ||  __/ |  ____) | (__| | | (_| | |_) |  __/ |_ | \__ \
  \__| \_/\_/ |_|\__|\__\___|_| |_____/ \___|_|  \__,_| .__/ \___|_(_)| |___/
                                                      | |            _/ |    
                                                      |_|           |__/     
  ______________________________________________________________________
 |                                                                      |\
 |                                                                      |_\
 |   File    : run.js                                                      |
 |   Created : 14-Jun-2012                                                 |
 |   By      : atrilla                                                     |
 |                                                                         |
 |   twitterScraper.js - Script bundle to build a text corpus based on     |
 |                       tweet IDs                                         |
 |                                                                         |
 |   Copyright (c) 2012 Alexandre Trilla                                   |
 |                                                                         |
 |   ___________________________________________________________________   |
 |                                                                         |
 |   This file is part of twitterScraper.js                                |
 |                                                                         |
 |   twitterScraper.js is free software: you can redistribute it and/or    |
 |   modify it under the terms of the MIT/X11 License as published by the  |
 |   Massachusetts Institute of Technology. See the MIT/X11 License for    |
 |   more details.                                                         |
 |                                                                         |
 |   You should have received a copy of the MIT/X11 License along with     |
 |   this source code distribution of twitterScraper.js (see the COPYING   |
 |   file in the root directory). If not, see                              |
 |   <http://www.opensource.org/licenses/mit-license>.                     |
 |_________________________________________________________________________*/


var db = require('./woofer.js');
var proc = require('./stereo.js');

db.readXML('twits_sample.xml', function(corpus) {
    proc.processData(corpus);
});

