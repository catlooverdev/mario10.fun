## Mario10.fun

#### A remake of Nintendo's original Super Mario Bros, expanded for the modern web. It includes the original 32 levels, a random map generator, a level editor, and over a dozen custom mods.

## How to Play

Although you may no longer play on [mario10.fun](http://www.mario10.fun), it is easy to play your own copy.

#### In your own site

Upload the latest release of Mario10.fun (or your built version) to your FTP server.

## Developing

#### Build Process

Mario10.fun uses [Grunt](http://gruntjs.com/) to automate building, which requires [Node.js](http://node.js.org). The process is straightforward; see [Grunt's help page](http://gruntjs.com/getting-started).

#### Coding

Mario10.fun is built on a modular framework called GameStartr. it's parent class EightBittr, and the modules used by the GameStartr framework. These all (theoretically) have their own README files, which you should skim before developing for Mario10.fun itself.

All source code is in the [Source](Source/) directory. See [Getting Started.md](Getting Started.md) for an in-depth guide on getting started programming with Mario10.fun.

The Mario10Fun.ts class declaration contains class functions and some constants, while static settings to be added to the Mario10Fun prototype, such as map layouts and object attributes, are stored in files under [Source/settings](Source/settings), such as audio.js and collisions.js.

## Legal

This is released under the [MIT License](http://mit-license.org/) (see [License.txt](LICENSE.txt)).

The Mario10.fun project started October 21st, 2012. The initial beta that was released in October 2013 saw the [primary host website](http://www.mario10.fun) received approximately 2.68 million unique visitors within a month, after which Nintendo shut the site down with a DMCA complaint (no action was taken against the authors, GitHub, or other hosting websites). The coding project then underwent an extensive rewrite and architecture change to become a modular project centered on the GameStartr platform, followed by a complete conversion to TypeScript.
