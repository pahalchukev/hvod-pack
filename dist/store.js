const store_options = {
    state: {
        alerts: [],
        notifications: [],
        confirm: {
            title: '',
            message: '',
            size: 'small',
            show: false,
            cancelText: 'Yes',
            confirmText: 'No',
            resolve: null
        },
        confirmPromise: null
    },
    actions: {
        confirm({commit}, message) {
            return new Promise((resolve) => {
                commit("openConfirm", message);
                commit("resolve", resolve);
            })
        }
    },
    mutations: {
        // Alerts
        inform: (state, {
            message = '',
            type = 'success',
            icon = null,
            dangerouslyUseHTMLString = false,
            withClose = true
        }) => {
            const newAlert = {
                id: Date.now(), // unique identifier for each notification
                show: true,
                type,
                message,
                icon,
                dangerouslyUseHTMLString,
                withClose,
            };
            state.alerts.push(newAlert);
            setTimeout(() => {
                state.alerts = state.alerts.filter((n) => n.id !== newAlert.id);
            }, withClose ? 10000 : 3000);
        },
        alertClose: (state, id) => {
            state.alerts = state.alerts.filter((n) => n.id !== id);
        },

        // Notifications
        notify: (state, {
            title = '',
            message = '',
            type = 'success',
            icon = null,
            dangerouslyUseHTMLString = false,
            withClose = true
        }) => {
            const newNotification = {
                id: Date.now(), // unique identifier for each notification
                show: true,
                type,
                title,
                message,
                icon,
                dangerouslyUseHTMLString,
                withClose,
            };

            state.notifications.push(newNotification);
            setTimeout(() => {
                state.notifications = state.notifications.filter((n) => n.id !== newNotification.id);
            }, withClose ? 10000 : 3000);
        },
        notifyClose: (state, id) => {
            state.notifications = state.notifications.filter((n) => n.id !== id);
        },
        showConfirm: (state, payload) => {
            state.confirm = {...state.confirm, ...payload};
            state.confirm.show = true;
            state.confirmPromise = new Promise((resolve) => {
                state.confirm.resolve = resolve;
            });
        },
        resolve: (state, value) => {
            if (state.confirm.resolve) {
                state.confirm.resolve(value);
                state.confirm.resolve = null;
            }
            state.confirm = {
                show: false,
                message: "",
                title: "",
                size: 'small',
                cancelText: 'Yes',
                confirmText: 'No',
            };
            state.confirmPromise = null;
        },
        closeConfirm: (state) => {
            state.confirm = {
                show: false,
                message: "",
                title: "",
                size: 'small',
                cancelText: 'Yes',
                confirmText: 'No',
                resolve: null
            };
        }
    }

}
export default store_options