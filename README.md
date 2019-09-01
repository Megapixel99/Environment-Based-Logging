# Environment Based Logging

This is a Logging library designed to be used with an application which has multiple environments.

It allows the user to customize their logs for different environments.

## Installation

npm install cas-authentication-user

## Setup

1. Create an environment file with the variable: LOG_LEVEL

2. Use the following javascript in you file:
```
const envLogger = require('env-logger');

var logger_with_lower_levels = new envLogger({
  env_file: "path to environment file relative to your file (i.e. ../../environments/dev.env)",
  log_levels: {
    test: 0,
    dev: 1,
    patch: 2
  },
  log_lower_levels: true
});
```

3. Set LOG_LEVEL in your environment file to one of your log_levels (i.e. LOG_LEVEL=dev)

### Parameters

| Name | Type | Description | Default |
|:-----|:----:|:------------|:-------:|
| env_file | _string_ | The path to the environment file | _(required)_ |
| log_levels | _string_ | The names of the levels and their level in regards to development, with production being the highest | _(required)_ |
| log_lower_levels | _boolean_ | Determines whether lower levels should be logged | _false_ |

## Usage

javascript:
```
const envLogger = require('env-logger');

var logger_with_lower_levels = new envLogger({
  env_file: "../.env",
  log_levels: {
    test: 0,
    dev: 1,
    patch: 2
  },
  log_lower_levels: true
});

//Outputs all of the logs since log_lower_levels is true
logger_with_lower_levels.print("test with lower level, level test ", "test");
logger_with_lower_levels.print("test with lower level, level dev ", "dev");
logger_with_lower_levels.print("test with lower level, level patch ", "patch");

var logger_without_lower_levels = new envLogger({
  env_file: "../.env",
  log_levels: {
    test: 0,
    dev: 1,
    patch: 2
  },
  log_lower_levels: false
});

//Only outputs some of the logs depending on the since log_lower_levels is true
logger_without_lower_levels.print("test without lower level, level test ", "test");
logger_without_lower_levels.print("test without lower level, level dev ", "dev");
logger_without_lower_levels.print("test without lower level, level patch ", "patch");
```

## Example

For the usage case above, `LOG_LEVEL=dev` in the environment file will output:
```
test with lower level, level test
test with lower level, level dev
test without lower level, level dev
```
