const tileData = `
~~~~~~~~~~~~~~~~:::::::::::::::::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~::::::::::::::::::::::::::::::::::~~~~~~~~~~~~~~~~~~:::::::::::::::::::::::~~~~~~~~~~~~~~~~
~~~::::::::::::::::::::::::::::::::::::::::::::::::~~~::::::::::::::::::::::::::::::::::~~~~~~~~~~~~
~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~
~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~
~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~
~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~
~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~
~~:::::::::::::::::::########::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~
~~~:::::::::::::::::##########::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~
~:::::::::::::::::::##############::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~
~:::::::::::::::::::###################:::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~
~:::::::::::::::::::##########:::###########:::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~
~~::::::::::::::::::#########:::::::::#############::::::::::::::::::::::::::::::::::::::::::::~~~~~
~~:::::::::::::::::::#######:::::::::::::::##########::::::::::::::::::::::::::::::::::::::::::::~~~
~~::::::::::::::::::::::::::::::::::::::::::::::::####::::::::::::::::::::::::::::::::::::::::::::~~
~~::::::::::::::::::::::::::::::::::::::::::::::::::###:::::::::::::::::::::::::::::::::::::::::::~~
~::::::::::::::::::::::::::::::::::::::::::::::::::::###::::::::::::::::::::::::::::::::::::::::::~~
~:::::::::::::::::::::::::::::::::::::::::::::::::::::##::::::::::::::::::::::::::~~:::::::::::::~~~
~:::::::::::::::::::::::::::::::::::::::::::::::::::::###::::::::::::::::::::::::~~~~~:::::::~~~~~~~
~::::::::::::::::::::::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::::~~~~~~~~~~~~~~~~
~::::::::::::::::::::::::::::::::::::::::::::::::::::::###:::::::::::::::::::::::::~~~~~~~~~~~~~~~~~
~~:::~~~::::::::::::::::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~::::::::::::::::::::::::::::::::::::::::::::##::::::::::::::::::::::::::~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~:::::::::::::::::::::::::::::::::::::::::###:::::::::::::::::::::::::::::~~~~~~~~~~~~
~~~~:::::~~~~~~~~::::::::::::::::::::::::::::::::::::::::##::::::::::::::::::::::::::::::~~~~~~~~~~~
~~:::::::::~~~~~~~~::::::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::::::~~~~~~~~~~~~
~:::::::::::::~~~~~~:::::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::::~~~~~~~~~~~~~~
~:::::::::::::::~~~~~~:::::::::::::::::::::::::::::::::::###:::::::::::::::::::::::~~~~~~~~~~~~~~~~~
~::::::::::::::::~~~~~~:::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::~~~~~~~~~~~~~~~~~
~:::::::::::::::::~~~~~~::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::~~~~~~~~~~~~~~~
~~:::::::::::::::::~~~~~~:::::::::::::::::::::::::::::::::###::::::::::::::::::::::::::~~~~~~~~~~~~~
~~::::::::::::::::::~~~~~~~::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::::::::::~~~~~~
~::::::::::::::::::::~~~~~~~:::::::::::::::::::::::::::::::##::::::::::::::::::::::::::::::::::::~~~
~:::::::::::::::::::::~~~~~~~~~::::::::::::::::::::::::::::##:::::::::::::::::::::::::::::::::::::~~
~~::::::::::::::::::::::~~~~~~~~~::::::::::::::::::::::::::###:::::::::::::::::::::::::::::::::::::~
~~::::::::::::::::::::::::~~~~~~~~~~::::::::::::::::::::::::##:::::::::::::::::::::::::::::::::::::~
~~:::::::::::::::::::::::::::~~~~~~~~~~:::::::::::::::::::::##::::::::::::::::::::::::::::::::::::~~
~~:::::::::::::::::::::::::::::~~~~~~~~~~~::::::::::::::::::##::::::::::::::::::::::::::::::::::::~~
~~~:::::::::::::::::::::::::::::::~~~~~~~~~~~:::::::::::::::##:::::::::::::::::::::::::::::::::::::~
~~~::::::::::::::::::::::::::::::::::~~~~~~~~~~~::::::::::::##::::::::::::::::::::::::::::::::::::::
~~~~::::::::::::::::::::::::::::::::::::::~~~~~~~::::::::::###::::::::::::::::::::::::::::::::::::::
~~~:::::::::::::::::::::::::::::::::::::::::~~~~~~~~::::::###:::::::::::::::::::::::::::::::::::::::
~~~:::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~::###:::::::::::::::::::::::::::::::::::::::~
~~~::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~WW#::::::::::::::::::::::::::::::::::::::::~
~~~~:::::::::::::::::::::::::::::::::::::::::::::~~~~~~WWWW~~~~~:::::::::::::::::::::::::::::::~~~~~
~~~~~~~::::::::::::::::::::::::::::::::::::::::::::~~~WWWW~~~~~~~~~~~:::::::::::::::::::::::::~~~~~~
~~~~~~~~~~~::::::::::::::::::::::::::::::::::::::::::##WW~~~~~~~~~~~~~~:::::::::::::::::::::::~~~~~~
~~~~~~~~~~~~::::::::::::::::::::::::::::::::::::::::####::::::~~~~~~~~~~~:::::::::::::::::::::~~~~~~
~~~~~~~~~~~~~::::::::::::::::::::::::::::::::::::::###::::::::::::~~~~~~~~~::::::::::::::::::::~~~~~
~~~~~~~~~~~~~~~::::::::::::::::::::::::::::::::::::##:::::::::::::::::~~~~~~~~:::::::::::::::::::~~~
~~~~~~~~~~~~~~~:::::::::::::::::::::::::::::::::::###::::::::::::::::::~~~~~~~~~~~:::::::::::::::~~~
~~~~~~~~~~~~~~:::::::::::::::::::::::::::::::::::###:::::::::::::::::::::~~~~~~~~~~~~~:::::::::::~~~
~~~~~~~~~~~~~~:::::::::::::::::::::::::::::::::::##::::::::::::::::::::::::::~~~~~~~~~~~~~::::::~~~~
~~~~~~~~~~~~~~:::::::::::::::::::::::::::::::::::##::::::::::::::::::::::::::::::~~~~~~~~~~~:::~~~~~
~~~~~~~~~~~~~::::::::::::::::::::::::::::::::::::###::::::::::::::::::::::::::::::::::~~~~~~~~~~~~~~
~~~~~~~~~~~~::::::::::::::::::::::::::::::::::::::###:::::::::::::::::::::::::::::::::::~~~~~~~~~~~~
~~~~~~~~~~~::::::::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::::::::::::::~~~~~~~~~~
~~~~~~~~:::::::::::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::::::::::::::::~~~~~~~~
~~~~~~:::::::::::::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::::::::::::::::::~~~~~~
~~~~~::::::::::::::::::::::::::::::::::::::::::::::##:::::::::::::::::::::::::::::::::::::::::::~~~~
~~~~~::::::::::::::::::::::::::::::::::::::::::::::###:::::::::::::::::::::::::::::::::::::::::::~~~
~~~~~:::::::::::::::::::::::::::::::::::::::::::::::##::::::::::::::::::::::::::::::::::::::::::~~~~
~~~~~~::::::::::::::::::::::::::::::::::::::::::::::##::::::::::::::::::::::::::::::::::::::::::~~~~
~~~~~~:::::::::::::::::::::::::::::::::::####################::::::::::::::::::::::::::::::::::~~~~~
~~~~~~:::::::::::::::::::::::##########################################:::::::::::::::::::::::~~~~~~
~~~~~~~:::::::::::::::#####################::::::::::::::::##################::::::::::::::::~~~~~~~
~~~~~~~:::::::#################::::::::::::::::::::::::::::::::::::::###########:::::::::::::~~~~~~~
~WWWWWWW################:::::::::::::::::::::::::::::::::::::::::::::::::::###########::::::~~~~~~~~
~WWWWWWW########:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::##########:::::~~~~~~~~
~~~~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::#########::::::~~~~~~~
~~~~~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::#########::::::~~~~~~~
~~~~~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::#########::::::~~~~~~~
~~~~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::######::::::::~~~~~~
~~~~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~
~~~~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~
~~~~~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~
~~~~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~
~~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~
~~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~
~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~
~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~
~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~
~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~
~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~
~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~
~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~
~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~
~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~
~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~
~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~
~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~
~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~
~~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~
~~~~~~::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~~~
~~~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~~~~~
~~~~~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~:::::::::::::::::::::::::::::::::::::::::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::::::::::::::::::::::::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`.trim().split("\n");

function getTile(x, y) {
	return tileData[y]?.[x];
}

const TILE_WIDTH = 48;
const TILE_HEIGHT = 36;
