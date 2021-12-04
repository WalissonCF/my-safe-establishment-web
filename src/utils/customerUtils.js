const user = localStorage.getItem('user');
const userParse = JSON.parse(user);

const customerUtils = {
    getCustomerId() {
        if (userParse === null) {
            return "";
        } else {
            return userParse.map((id) => {
                return id.customerId;
            });
        }
    },

    getCustomerName() {
        return userParse.map((customerName) => {
            return customerName.name;
        });
    },

    getCustomerToken() {
        return localStorage.getItem('token');
    },

    getTable() {
        return localStorage.getItem('table');
    },

    getProductName() {
        return localStorage.getItem('name');
    },

    getTotalValueProduct() {
        return localStorage.getItem('totalProduct');
    },

    unFormatCpf(cpf) {
        return cpf?.replace(/[^0-9]/g, '');
    },

    unFormatPhoneNumber(phoneNumber) {
        return phoneNumber?.replace(/[^0-9]/g, '');
    },

    unFormatNumber(number) {
        return number?.replace(/[^0-9.,]+/, '');
    },

    unFormatCardCreditNumber(number) {
        return number?.replace(/( )+/g, '');
    },

    replaceVirgulaToPonto(number) {
        return number?.replace(/,/g, '.');
    },

    unFormarValue(number) {
        return number?.replace("R$", "")
    },

    removeItem(item) {
        item.map((itens) => {
            localStorage.removeItem(itens);
        })
    },

    removeHidden(id) {
        document.getElementById(id).removeAttribute('hidden');
    },

    title() {
        return "My Establishment";
    },

    unformatDataBase(dataBase) {
        return dataBase.replace(/^data:image\/[a-z]+;base64,/, "");
    },
}

export default customerUtils;