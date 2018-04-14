
var urlRecentProducts = "https://04e8irvxg3.execute-api.us-west-2.amazonaws.com/test/product/recentlyadded";

var message = function(text){
	alert(text);
}

var app = new Vue({
  el: '#app',
  data: {
	products: [],
	loading: false
  },methods: {
	fillProducts: function(){
		this.loading = true;
		$.ajax({
			url: urlRecentProducts,
			contentType: 'application/json;',
			success: data => {
				this.products = data;
				this.loading = false;
			},error: data => {
				message('Não foi possível carregar os produtos mais recentes.');
				this.loading = false;
			}
		});
	}
  },mounted: function() {
	this.fillProducts();
  }
});