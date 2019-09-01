const envLogger = require('./test/test2/index.js');

var logger_with_lower_levels = new envLogger({
  env_file: "./demo.env",
  log_levels: {
    test: 0,
    dev: 1,
    patch: 2
  },
  log_lower_levels: true
});

logger_with_lower_levels.print("test with lower level, level test ", "test");
logger_with_lower_levels.print("test with lower level, level dev ", "dev");
logger_with_lower_levels.print("test with lower level, level patch ", "patch");

var logger_without_lower_levels = new envLogger({
  env_file: "./demo.env",
  log_levels: {
    test: 0,
    dev: 1,
    patch: 2
  },
  log_lower_levels: false
});

logger_without_lower_levels.print("test without lower level, level test ", "test");
logger_without_lower_levels.print("test without lower level, level dev ", "dev");
logger_without_lower_levels.print("test without lower level, level patch ", "patch");
