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
  },

  valueByGenre: function (genreToFind) {
    return this.collection.reduce(function (total, record) {
      if (record.genre === genreToFind) {
        return total + record.price
      }
      return total
    }, 0)
  },

  findMostValuable: function () {
    return this.collection.reduce(function (max, record) {
      if (record.price > max.price) {
        return record
      }
      return max
    })
  },

  sortRecords: function () {
    this.collection.sort(function (recordA, recordB) {
      if (recordA.price > recordB.price) return -1
      if (recordA.price == recordB.price) return 0
      return 1
    })
  }
}

module.exports = Customer
