function main() {
    // Example Usage
    // Update sheet index & cells based on your sheet setup
	var sheet = SpreadsheetApp.getActive().getSheets()[1];
    var allTickers = fetchFromCexIO();
	sheet.getRange("A1").setValue(filterPrice(allTickers, "ETH"));
	sheet.getRange("A2").setValue(filterPrice(allTickers, "ADA"));
	sheet.getRange("A3").setValue(filterPrice(allTickers, "XRP"));
	sheet.getRange("A4").setValue(filterPrice(allTickers, "XLM"));
}

function filterPrice(allTickers, coinName) {
	return allTickers.filter(function(ticker){
		return ticker.symbol1 == coinName;
	})[0].lprice;
}

function fetchFromCexIO() {
	var response = UrlFetchApp.fetch("https://cex.io/api/last_prices/EUR/")
	return JSON.parse(response.getContentText());;
}
