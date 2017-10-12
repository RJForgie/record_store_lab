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
  }
}

module.exports = Customer
