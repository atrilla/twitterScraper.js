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
 |   File    : tweeter.js                                                      |
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


/*
 * Global ref to jQuery.
 */
var $ = require('jquery'); 

/*
 * Search tweets according to several parameters.
 *
 * Usage: searchTwitter({q: 'from:USER', rpp: NUMBER_OF_TWEETS});
 * Outputs the tweets and their IDs on the console.
 *
 * @param query Search params.
 */
function searchTwitter(query) {
    $.ajax({
        url: 'http://search.twitter.com/search.json?' + $.param(query),
        dataType: 'jsonp',
        success: function(data) {
            for (var res in data['results']) {
                console.log(data['results'][res]['text']);
                console.log(data['results'][res]['id']);
            }
        }
    });
}

/*
 * Output the text of a tweet on the console given its status ID.
 *
 * Usage: getTweet({id: 'STATUS_ID'});
 *
 * @param id The tweet status ID.
 */
function getTweet(id) {
    $.ajax({
        url: 'https://api.twitter.com/1/statuses/show.json?' + $.param(id),
        dataType: 'jsonp',
        success: function(data) {
            console.log(data['text']);
        }
    });
}

exports.getTweet = getTweet;

