// Xử lý sự kiện click vào ô check box trong bảng

const moduleA = {
    state: () => ({
        changeCheckBox: false,
    }),
    mutations: {
        /**
         * Khi click tích checkbox
         * AUTHOR: DTAN 12/08/2022
         * @param {*} state 
         */
        selectedCheckBox(state) {
            state.changeCheckBox = true
        },

        /**
         * Khi click hủy chọn checkbox
         * AUTHOR: DTAN 12/08/2022
         * @param {*} state 
         */
        unSelectedCheckBox(state) {
            state.changeCheckBox = false
        },
    },
    actions: {},
    getters: {},
}

export default moduleA