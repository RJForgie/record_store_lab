var RecordStore = function (name, city) {
  this.name = name
  this.city = city
  this.inventory = []
  this.balance = 0
}

RecordStore.prototype = {
  addRecord: function (record) {
    this.inventory.push(record)
  },

  listInventory: function () {
    var infoStrings = this.inventory.map(function (record) {
      return record.printInfo()
    })
    return infoStrings.join("\n")
  },

  sellRecord: function (titleToFind) {
    var foundIndex = this.inventory.findIndex( function (record) {
      return record.title === titleToFind
    })
    if (foundIndex === -1) return null

    var foundRecord = this.inventory.splice(foundIndex, 1)[0]
    this.balance += foundRecord.price
    return foundRecord
  },

  financialReport: function () {
    var inventoryValue = this.inventory.reduce(function (total, record) {
      return total + record.price
    }, 0)
    return "Balance: " + this.balance + ", Inventory value: " + inventoryValue
  },

  findByGenre: function (genreToFind) {
    return this.inventory.filter(function (record) {
      return record.genre === genreToFind
    })
  }
}

module.exports = RecordStore
