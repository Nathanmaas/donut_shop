    (function() {
      TopPot = function (locationTop, minCust, maxCust, averagePerCust) {
      this.locationTop = locationTop;
      this.minCust = minCust;
      this.maxCust = maxCust;
      this.averagePerCust = averagePerCust;
      this.open =  12;
      this.donArray = [];
      this.total  = 0;
    };

    TopPot.prototype.randomCustomerGenerator = function () {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    };

    TopPot.prototype.perHour = function() {
      var numCust = this.randomCustomerGenerator();
      return Math.round(numCust * this.averagePerCust);
    };

    TopPot.prototype.perDay = function() {
      var daily = 0;
      for (var i = 0; i < this.open; i++){
        var cadaHora = this.perHour();
        this.donArray.push(cadaHora);
        daily += cadaHora;
    };

      return daily;

    };

      TopPot.prototype.render = function() {
        var perDay = this.perDay();
        var elTable = document.getElementById('donuts');
        var elRow = document.createElement('tr');
        var elLoco = document.createElement('th');
        elLoco.textContent = this.locationTop;
        elTable.appendChild(elRow);
        elRow.appendChild(elLoco);
        for(var i = 0; i < this.donArray.length; i++){
          var elHour = document.createElement('td');
          elHour.textContent = this.donArray[i];
          elRow.appendChild(elHour);
      }

        var eltotal = document.createElement('th');
        eltotal.textContent = perDay;
        elRow.appendChild(eltotal);
      }

        var downtown = new TopPot ('Downtown', 8, 43, 4.50);
        var capitolHill = new TopPot ('Capitol Hill', 4, 47, 2.0);
        var southLakeU = new TopPot ('South Lake Union', 9, 23, 6.33);
        var wedgewood = new TopPot ('Wedgewood', 2, 28, 1.25 );
        var ballard = new TopPot ('Ballard', 8, 58, 3.75);

        downtown.render();
        capitolHill.render();
        southLakeU.render();
        wedgewood.render();
        ballard.render();
})();






