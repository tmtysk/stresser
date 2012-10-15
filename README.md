Stresser
========

Stresser is stress-test-tool.
It produces a large quantity of specified processes.

Install
=======

    $ git clone http://github.com/tmtysk/stresser.git
    $ cd stresser
    $ npm install

Usage
=====

Run with loop count, concurrency and program.

    $ node stresser.js -l 10 -c 2 ls

Known Bugs
==========

* Running a huge count of processes, throws following error:
    Error: spawn EMFILE
        at errnoException (child_process.js:847:11)
        at ChildProcess.spawn (child_process.js:794:11)
        :


Copyright (c) 2012 tmtysk, released under the MIT license.
