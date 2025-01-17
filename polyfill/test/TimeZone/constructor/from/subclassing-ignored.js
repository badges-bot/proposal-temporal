// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.from
includes: [temporalHelpers.js]
---*/

TemporalHelpers.checkSubclassingIgnoredStatic(
  Temporal.TimeZone,
  "from",
  ["UTC"],
  (result) => {
    assert.sameValue(result.id, "UTC", "id property of result");
    assert.sameValue(result.toString(), "UTC", "toString() of result");
  },
);
