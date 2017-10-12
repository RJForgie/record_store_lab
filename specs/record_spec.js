var assert = require("assert")
var Record = require("../record")

describe("Record", function () {
  var record

  beforeEach(function () {
    record = new Record("Jimi Hendrix", "Axis Bold As Love", "Classic", 100)
  })

  it("should have an artist", function () {
    assert.strictEqual(record.artist, "Jimi Hendrix")
  })

  it("should have a title", function () {
    assert.strictEqual(record.title, "Axis Bold As Love")
  })

  it("should have a genre", function () {
    assert.strictEqual(record.genre, "Classic")
  })

  it("should have a price", function () {
    assert.strictEqual(record.price, 100)
  })
})
