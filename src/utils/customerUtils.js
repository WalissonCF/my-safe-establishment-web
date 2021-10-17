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

    unFormatCpf(cpf) {
        return cpf?.replace(/[^0-9]/g, '');
    },

    unFormatPhoneNumber(phoneNumber) {
        return phoneNumber?.replace(/[^0-9]/g, '');
    },

    removeItem(item) {
        item.map((itens) => {
            localStorage.removeItem(itens);
        })
    }
}

export default customerUtils;