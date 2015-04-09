(function() {
  var TopPot = window.TopPot;
  var shops = document.getElementById('shops');
  var newForm = document.getElementById('newForm');
  window.TopPot = [];  //Need to empty this array again, otherwise it'll push all DonutShop objects from
  //donut_shop.js with each buttonClick

  newForm.addEventListener('submit', function() {
    event.preventDefault(); //Prevents form from refreshing the page, thereby deleting new pushes after buttonClick

    //Push values within each input textBox
    shops.push(new DonutShop(
      event.target.locationTop.value,
      event.target.minCus.value,
      event.target.maxCust.value,
      event.target.averagePerCust.value));

    window.renderStoreData();

    //To empty the input boxes upon buttonClick
    event.target.locationTop.value = null;
    event.target.minCust.value = null;
    event.target.maxCust.value = null;
    event.target.averagePerCust.value = null;
  });
})();
