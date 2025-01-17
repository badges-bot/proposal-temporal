// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.fromepochnanoseconds
includes: [temporalHelpers.js]
---*/

TemporalHelpers.checkSubclassingIgnoredStatic(
  Temporal.Instant,
  "fromEpochNanoseconds",
  [10n],
  (result) => {
    assert.sameValue(result.epochNanoseconds, 10n, "epochNanoseconds result");
  },
);
