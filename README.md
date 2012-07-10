twitterScraper.js
=================

Script bundle to build a text corpus based on tweet IDs.

Given a corpus of tweet IDs in XML (following the format provided by the
[SEPLN TASS](http://www.daedalus.es/TASS/about.php) competition), the
twitterScraper.js extracts the tagged IDs and queries Twitter in order to
obtain the body of the text.

For any comment or suggestion of any kind, please contact 
[Alexandre Trilla](mailto:alex@atrilla.net).


Install
-------

Some dependencies are needed for Node.js: jQuery and xml2js, available
through npm.

The main procedure is found in run.js. It outputs the textual body of the 
tweets on the console.


Hacking
-------

* run.js: main procedure.
* stereo.js: tweet ID iterator.
* tweeter.js: interface to query Twitter.
* woofer.js: interface to the XML corpus.


Credits
-------

* Node.js: Joyent, Inc. http://nodejs.org/
* jQuery: jQuery Foundation and other contributors. http://jquery.com/
* xml2js: Leonidas-from-XIV. https://github.com/Leonidas-from-XIV/node-xml2js/


Copying
-------

Copyright (c) 2012 Alexandre Trilla

Distributed under the MIT/X11 License.

