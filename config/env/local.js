module.exports = {
    datastores: {
        default: {
            adapter: 'sails-mysql',
            // url: 'mysql://root:root@localhost:3306/shop_pick',
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'management'
        }
    },
    models: {
        migrate: 'safe'
    },
    blueprints: {
        shortcuts: false,
    },
    port: 1337
}