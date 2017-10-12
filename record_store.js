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
    var foundRecord =  this.inventory.splice(foundIndex, 1)[0]
    this.balance += foundRecord.price
    return foundRecord
  }

}

module.exports = RecordStore
