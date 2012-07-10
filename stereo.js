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
 |   File    : stereo.js                                                   |
 |   Created : 15-Jun-2012                                                 |
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


var tw = require('./tweeter.js');

/*
 * Wait until some time has passed by.
 *
 * @param milliseconds The number of millisecs to wait.
 */
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

/*
 * Iterate through all the tweet IDs and query Twitter.
 *
 * @param data The structure of tweets.
 */
function processData(data) {
    for(var i in data['twit']) {
        tw.getTweet({id: (data['twit'][i]['twitid']).toString()});
        sleep(1000);
    }
}

exports.processData = processData;

