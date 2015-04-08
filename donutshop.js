    var TopPot = function (locationTop, options) {
      this.locationTop = locationTop;
      this.minCust = options.minCust;
      this.maxCustHr = options.maxCust;
      this.averagePerCust = options.averagePerCust;
      this.opens = options.opens || 700;
      this.closes = options.closes || 1800;
      this.hoursOpen = (this.closes - this.opens)/100;
    };

    TopPot.prototype.generateRandom = function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
        return numCustomers * perCust;
    };

    TopPot.prototype.perHour = function() {
        return Math.floor(this.generateRandom() * this.averagePerCust);
    };

    TopPot.prototype.perDay = function() {
      var total = 0
      for (var i = 0; i < this.hoursOpen; i++)
        total += this.perHour();
        return total;
    };

    TopPot.prototype.render = function () {
      var total = this.perDay();
      var elTr = document.getElementById(this.name);
      for (var i = 0; i <= this.perHourTotal; i++) {
      var el = document.createElement('td');
      el.textContent = this.perHourTotal[i];
      elTr.appendChild(el);
      }
      el.textContent = total;
      elTr.appendChild(el);
    };

    var downtown = new TopPot ('downtown', {minCust: 8, maxCust: 43, averagePerCust: 4.50});
    var capitolHill = new TopPot ('capitolHill', {minCust: 4, maxCust: 47, averagePerCust: 2.0});
    var southLakeU = new TopPot ('southLakeU', {minCust: 9, maxCust: 23, averagePerCust: 6.33});
    var wedgewood = new TopPot ('wedgewood', {minCust: 2, maxCust: 28, averagePerCust: 1.25});
    var Ballard = new TopPot ('Ballard', {minCust: 8, maxCust: 58, averagePerCust: 3.75});
    downtown.render();
    capitolHill.render();
    southLakeU.render();
    wedgewood.render();
    ballard.render();





