"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoneFile = void 0;

var _makeZoneFile = require("./makeZoneFile");

var _parseZoneFile = require("./parseZoneFile");

class ZoneFile {
  constructor(zoneFile) {
    if (typeof zoneFile === 'object') {
      this.jsonZoneFile = JSON.parse(JSON.stringify(zoneFile));
    } else if (typeof zoneFile === 'string') {
      this.jsonZoneFile = (0, _parseZoneFile.parseZoneFile)(zoneFile);
    }
  }

  toJSON() {
    return this.jsonZoneFile;
  }

  toString() {
    return (0, _makeZoneFile.makeZoneFile)(this.toJSON());
  }

}

exports.ZoneFile = ZoneFile;