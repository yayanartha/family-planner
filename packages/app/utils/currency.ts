import numeral from "numeral";

export const toCurrency = (price?: string | number, format = "$0,0") => {
	return numeral(price).format(format);
};

export const toAmount = (price?: string) => {
	return numeral(price).value() || 0;
};

export const configureNumeral = () => {
	// load a locale
	numeral.register("locale", "id", {
		delimiters: {
			thousands: ".",
			decimal: ",",
		},
		abbreviations: {
			thousand: "rb",
			million: "jt",
			billion: "m",
			trillion: "t",
		},
		ordinal: function (number) {
			return number === 1 ? "er" : "ème";
		},
		currency: {
			symbol: "Rp",
		},
	});

	numeral.locale("id");
};
