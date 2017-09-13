# blitzen-nightwatch
End-to-end tests for Blitzen.
Tests created using Nightwatch.js framework and set up to run with Chromedriver standalone.
This means you don't need to install Java and Selenium on your machine, all dependencies can be installed using ```npm install```.

## Setup
As for now the tests are not integrated into the Blitzen project, but they can still be run against any Blitzen environment.
You are going to need Node.js and NPM installed on your machine.
Clone this repo and from the root folder, run
```npm install```

This should fetch the dependencies, including chromedriver and nightwatch.js which should be installed locally in node_modules directory.
You might prefer to install nightwatch.js globally to be able to run the tests from any folder on your machine:
```npm install -g nightwatch```

## Run the tests
To run the tests, switch to e2e folder where nightwatch.json and nightwatch.js are located.
If you have Nightwatch installed globally, you can just run
```$ nightwatch tests/specs``` from e2e folder.
If you have Nightwatch installed as a dependency to your project, run
```node nightwatch tests/specs``` for Mac and Linux, or
```node nightwatch.js tests/specs``` for Windows, Linux or Mac.

### Run a single test suite

You can specify certain test suite to run:
```node nightwatch tests/specs/login_spec.js```

### Specify the testsing environment

By default, the tests will be run in development environment, but you can specify Staging or Production environment to run against:
```node nightwatch --env stg tests/specs``` will run all tests in Staging.
Change ```--env stg``` to ```--env prod``` and the tests will run in Production.
Please note that with Chromedriver standalone we cannot run all environments in parallel.

### Retry in case of failure

As our environments can sometimes be very slow, you can set retry option for failing tests using ```--retries <n>``` or ```--suiteRetries <n>```.
For example, the following command will run login tests in Production environment, retrying up to 3 times in case of failures:
```node nightwatch --env prod --suiteRetries 3 tests/specs/login_spec.js```
For more details, address Nightwatch API guide: http://nightwatchjs.org/guide#command-line-options
