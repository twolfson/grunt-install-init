# grunt-install-init

Install a grunt init template

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-install-init`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-install-init');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
`grunt-install-init` copies `grunt init` style files from a directory into the grunt's userDir (`~/.grunt` for Linux or `%USERPROFILE%` for Windows).

```js
grunt.initConfig({
  'install-init': {
    // 'Plugin name': 'Base directory where plugin is stored'
    'myinittemplate': 'src'
  }
});
```

copies `src/myinittemplate.js` and `src/myinittemplate` (a directory) into the grunt userDir's `tasks/init` folder.

Once they are copied, you can call `grunt init:myinittemplate` in a new folder and the `init` script you have set up will run.

More info on `init` can be found in the [grunt documenation](https://github.com/gruntjs/grunt/blob/master/docs/task_init.md#creating-custom-templates).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## License
Copyright (c) 2012 Todd Wolfson
Licensed under the MIT license.
