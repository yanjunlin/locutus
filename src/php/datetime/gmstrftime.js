module.exports = function gmstrftime (format, timestamp) {
  //  discuss at: http://locutusjs.io/php/gmstrftime/
  // original by: Brett Zamir (http://brett-zamir.me)
  //    input by: Alex
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: gmstrftime("%A", 1062462400);
  //   returns 1: 'Tuesday'

  var strftime = require('../datetime/strftime')

  var dt = ((typeof timestamp === 'undefined') ? new Date() : // Not provided
    (typeof timestamp === 'object') ? new Date(timestamp) : // Javascript Date()
    new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
  )
  timestamp = Date.parse(dt.toUTCString()
    .slice(0, -4)) / 1000
  return strftime(format, timestamp)
}