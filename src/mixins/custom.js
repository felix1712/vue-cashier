const customJs = {
	methods: {
		formatDate(selector) {
			// const inputChar = String.fromCharCode(selector.keyCode);
			const code = selector.keyCode;
			const allowedKeys = [8];
			if (allowedKeys.indexOf(code) !== -1) {
				return;
			}
			selector.target.value = selector.target.value
				.replace(/^([1-9]\/|[2-9])$/g, '0$1/') // 3 > 03/
				.replace(/^(0[1-9]|1[0-2])$/g, '$1/') // 11 > 11/
				.replace(/^([0-1])([3-9])$/g, '0$1/$2') // 13 > 01/3
				.replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2') // 141 > 01/41
				.replace(/^([0]+)\/|[0]+$/g, '0') // 0/ > 0 and 00 > 0
				.replace(/[^\d\/]|^[\/]*$/g, '') // To allow only digits and `/`
				.replace(/\/\//g, '/'); // Prselector entering more than 1 `/`
			// custom replace by function
			const currentYear = parseInt(new Date().getFullYear().toString().substr(-2), 10);
			const maxYear = currentYear + 5;
			const valueYear = selector.target.value.lastIndexOf('/');
			const lastValueYear = selector.target.value.substring(valueYear + 1);
			if (lastValueYear.length === 2 && (lastValueYear > maxYear || lastValueYear < currentYear)) {
				selector.target.value = selector.target.value.replace(selector.target.value.substring(selector.target.value.lastIndexOf('/')), '/');
			}
		},

		numberFormat(selector) {
			selector.target.value = selector.target.value.replace(/[^\d\/]|^[\/]*$/g, '');
		},

		creditCardFormat(selector) {
			const v = selector.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
			const matches = v.match(/\d{4,16}/g);
			const match = (matches && matches[0]) || '';
			const parts = [];
			for (let i = 0, len = match.length; i < len; i += 4) {
				parts.push(match.substring(i, i + 4));
			}
			if (parts.length) {
				selector.target.value = parts.join(' ');
			}
		},

		commasFormat(selector) {
			selector.target.value = selector.target.value.toString().replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
	},
};

export default customJs;
