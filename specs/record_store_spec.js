var assert = require("assert")
var RecordStore = require("../record_store")
var Record = require("../record")

describe("Record Store", function () {
  var recordStore
  var record1
  var record2
  var record3

  beforeEach(function () {
    recordStore = new RecordStore("bind(records)", "Edinburgh")
    record1 = new Record("Jimi Hendrix", "Axis Bold As Love", "Classic", 100)
    record2 = new Record("Radiohead", "In Rainbows", "Indie", 10)
    record3 = new Record("Led Zeppelin", "IV", "Classic", 150)
  })

  it("should have a name", function () {
    assert.strictEqual(recordStore.name, "bind(records)")
  })

  it("should have a city", function () {
    assert.strictEqual(recordStore.city, "Edinburgh")
  })

  it("should have an empty inventory at start", function () {
    assert.strictEqual(recordStore.inventory.length, 0)
  })

  it("should have 0 balance at start", function () {
    assert.strictEqual(recordStore.balance, 0)
  })

  it("should be able to add records", function () {
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)

    assert.strictEqual(recordStore.inventory.length, 2)
    assert.ok(recordStore.inventory.includes(record1))
    assert.ok(recordStore.inventory.includes(record2))
  })

  it("should be able to list inventory", function () {
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)

    var expected = "Artist: Jimi Hendrix, Title: Axis Bold As Love, Genre: Classic, Price: 100\nArtist: Radiohead, Title: In Rainbows, Genre: Indie, Price: 10"
    assert.strictEqual(recordStore.listInventory(), expected)
  })

  it("should be able to sell record", function () {
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)

    var result = recordStore.sellRecord("In Rainbows")

    assert.strictEqual(result, record2)
    assert.strictEqual(recordStore.inventory.length, 1)
    assert.strictEqual(recordStore.balance, 10)
  })

  it("should not be able to sell record that doesn't exist", function () {
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)

    var result = recordStore.sellRecord("Any Beegees album")

    assert.strictEqual(result, null)
    assert.strictEqual(recordStore.inventory.length, 2)
    assert.strictEqual(recordStore.balance, 0)
  })

  it("should be able to print financial report", function () {
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    var result = recordStore.sellRecord("In Rainbows")

    var expected = "Balance: 10, Inventory value: 100"

    assert.strictEqual(recordStore.financialReport(), expected)
  })

  it("should be able to return all records of a genre", function () {
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    recordStore.addRecord(record3)

    var expected = [record1, record3]

    assert.deepStrictEqual(recordStore.findByGenre("Classic"), expected)
  })

})
