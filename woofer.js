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
 |   File    : woofer.js                                                   |
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


/*
 * JS - XML wrappers.
 */
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();

/*
 * Parses the input corpus in XML.
 *
 * @param filename The XML file corpus.
 * @param procFunc Callback function to process the data.
 */
function readXML(filename, procFunc) {
    /*
     * Listener that is called when the parsing process ends.
     */
    parser.on('end', function(result) {
        procFunc(result);
    });
    /*
     * Process to parse an XML file.
     */
    fs.readFile(filename, function(err, data) {
        parser.parseString(data);
    });
}

exports.readXML = readXML;

