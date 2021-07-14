var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var authMiddleware = require('./middlewares/auth.middleware');

var authRouter = require('./routes/auth.route');
var cartaoRouter = require('./routes/cartao.route');
var clienteRouter = require('./routes/cliente.route');
var compraRouter = require('./routes/compra.route');
var produtoRouter = require('./routes/produto.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/cartao', cartaoRouter);
app.use('/cliente', authMiddleware, clienteRouter);
app.use('/compra', authMiddleware, compraRouter);
app.use('/produto', authMiddleware, produtoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
