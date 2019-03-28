if(process.env.Node_ENV === 'development') {
    require('./app.dev.js')
}else {
    require('./app.js')
}