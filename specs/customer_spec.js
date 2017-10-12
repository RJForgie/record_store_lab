var assert = require("assert")
var Customer = require("../customer")
var RecordStore = require("../record_store")
var Record = require("../record")

describe("Customer", function () {
  var customer1
  var customer2
  var recordStore
  var record1
  var record2

  beforeEach(function () {
    customer1 = new Customer("Ryan", 300)
    customer2 = new Customer("Michael", 50)
    recordStore = new RecordStore("bind(records)", "Edinburgh")
    record1 = new Record("Jimi Hendrix", "Axis Bold As Love", "Classic", 100)
    record2 = new Record("Radiohead", "In Rainbows", "Indie", 10)
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
  })

  it("should have a name", function () {
    assert.strictEqual(customer1.name, "Ryan")
  })

  it("should have correct cash at start", function () {
    assert.strictEqual(customer1.cash, 300)
  })

  it("should have an empty collection at start", function () {
    assert.strictEqual(customer1.collection.length, 0)
  })
})
