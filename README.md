# grunt-cuked

> Grunt plugin for cuked

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cuked --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cuked');
```

## The "cuked" task

### Overview
In your project's Gruntfile, add a section named `cuked` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cuked: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

Configuration for [Cuked API](https://github.com/eclifford/cuked#path)

#### options.path
Type: `String`
Default value: `'./features'`

#### options.browser
Type: `String`
Default value: `'phantomjs'`

#### options.host
Type: `String`
Default value: `'localhost'`

#### options.port
Type: `Integer`
Default value: `4444`

#### options.user
Type: `String`
Default value: ``

#### options.key
Type: `String`
Default value: ``

#### options.platform
Type: `String`
Default value: `ANY`

#### options.version
Type: `String`
Default value: ``

#### options.name
Type: `String`
Default value: ``

#### options.log
Type: `String`
Default value: `silent`

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  cuked: {
    options: {
      path: 'test/features',
      log: 'command'
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 . Licensed under the MIT license.
