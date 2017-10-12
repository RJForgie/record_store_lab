var Customer = function (name, cash) {
  this.name = name
  this.cash = cash
  this.collection = []
}

Customer.prototype = {
  buyRecord: function (record) {
    if (this.cash >= record.price) {
      this.cash -= record.price
      this.collection.push(record)
    }
  },

  sellRecord: function (titleToFind) {
    var foundIndex = this.collection.findIndex( function (record) {
      return record.title === titleToFind
    })
    if (foundIndex === -1) return null

    var foundRecord = this.collection.splice(foundIndex, 1)[0]
    this.cash += foundRecord.price
    return foundRecord
  },

  collectionValue: function () {
    return this.collection.reduce(function (total, record) {
      return total + record.price
    }, 0)
  }
}

module.exports = Customer
