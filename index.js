const env = require("dotenv");
const fs = require('fs');
var log_lower_levels;
var logger_levels;

function envLogger(options) {
  fs.access(options.env_file, fs.constants.F_OK, (err) => {
    if (err)
      console.warn("Could not find environment file for path: " + options.env_file);
  });
  if (options.log_lower_levels != undefined || options.log_lower_levels != null)
    log_lower_levels = options.log_lower_levels;
  else
    log_lower_levels = false;
  env.config({
    path: options.env_file
  });
  if (options.log_levels && options.log_levels != {}) {
    logger_levels = options.log_levels;
    if (options.log_levels.hasOwnProperty(process.env.LOG_LEVEL) == undefined ||
      options.log_levels.hasOwnProperty(process.env.LOG_LEVEL) == null)
      console.warn(
        "Warning: enviroment variable LOG_LEVEL is not defined for the current enviroment");
  } else {
    console.warn("Please create logging levels");
    process.exit(1);
  }
}

envLogger.prototype.print = function(text, lvl) {
  if (logger_levels[lvl] == undefined || logger_levels[lvl] == null) {
    console.warn("Logging level: " + lvl + " is not defined as a level");
  } else if (log_lower_levels && logger_levels[lvl] <= logger_levels[process.env.LOG_LEVEL])
    console.log(text);
  else if (!log_lower_levels && logger_levels[lvl] == logger_levels[process.env.LOG_LEVEL])
    console.log(text);
  else if (!logger_levels)
    console.log(text);
}

module.exports = envLogger;
