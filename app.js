var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true
app.use('/assets', express.static('assets'))
app.use('/lang', express.static('lang'))
app.use('/', express.static('public'))

app.get('/tport/login', function (req, res) {
  res.render('tport_login')
})
app.get('/tport/login/set-pw', function (req, res) {
  res.render('tport_login_setpw')
})
app.get('/tport/members', function (req, res) {
  res.render( 'tport_members',{
    pageId: 'tport_members',
  })
})
app.get('/tport/vendors', function (req, res) {
  res.render('tport_vendors',{
    pageId: 'tport_vendors',
  })
})
app.get('/tport/vendors/edit', function (req, res) {
  res.render('tport_vendor_edit')
})
app.get('/tport/channels', function (req, res) {
  res.render('tport_channels',{
    pageId: 'tport_channels',
  })
})
app.get('/tport/channels/edit', function (req, res) {
  res.render('tport_channel_edit')
})
app.get('/tport/revenue', function (req, res) {
  res.render('tport_revenue',{
    pageId: 'tport_revenue',
  })
})
app.get('/tport/payment/channel', function (req, res) {
  res.render('tport_payment_channel',{
    pageId: 'tport_payment_channel',
  })
})

// SERVER LISTNER
app.listen(3000, function () {
  console.log('todolist app listening on port 3000!')
})
