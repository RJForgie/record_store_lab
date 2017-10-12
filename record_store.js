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
  }
}

module.exports = RecordStore
