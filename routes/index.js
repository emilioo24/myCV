var express = require('express');
const sqlcon = require('../config/conexion');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Emiliano Calderón' });
});

router.get('/descargar', function(req, res) {
  res.download('Emiliano-Calderon-CV.pdf');
});
router.get('/descargar-en', function(req, res) {
  res.download('Emiliano-Calderon-CV-en.pdf');
});

router.get('/contacto', function(req, res) {
  res.render('contacto');
});

router.post('/enviar', function(req, res) {
  const datos = req.body;

  if (datos.nombre === undefined || datos.nombre === "") {
    return res.render('contacto', { msj: 'Completa el campo nombre', color: 'red' });
  } else if (datos.email === undefined || datos.email === "") {
    return res.render('contacto', { msj: 'Completa el campo correo electrónico', color: 'red'});
  } else if (datos.mensaje === undefined || datos.mensaje === "") {
    return res.render('contacto', { msj: 'Completa el campo mensaje', color: 'red'});
  } else {

    sqlcon.query(`INSERT INTO coments(nombre, email, telefono, mensaje) 
      VALUES ('${datos.nombre}', '${datos.email}', '${datos.telefono}', '${datos.mensaje}')`, function(error, result) {
        if (error) {
          console.error(error);
          return res.render('contacto', { msj: 'Algo salió mal', color: 'red' });
        } else {
          return res.render('contacto', { msj: 'Mensaje enviado con éxito', color: 'green' });
        }
    });

  }
});

router.get('/en', function(req, res) {
  res.render('en');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.post('/enviar/en', function(req, res) {
  const datos = req.body;

  if (datos.nombre === undefined || datos.nombre === "") {
    return res.render('contact', { msj: 'fill in the name field', color: 'red' });
  } else if (datos.email === undefined || datos.email === "") {
    return res.render('contact', { msj: 'fill in the email field', color: 'red'});
  } else if (datos.mensaje === undefined || datos.mensaje === "") {
    return res.render('contact', { msj: 'fill in the message field', color: 'red'});
  } else {

    sqlcon.query(`INSERT INTO coments(nombre, email, telefono, mensaje) 
      VALUES ('${datos.nombre}', '${datos.email}', '${datos.telefono}', '${datos.mensaje}')`, function(error, result) {
        if (error) {
          console.error(error);
          return res.render('contact', { msj: 'Something went wrong', color: 'red' });
        } else {
          return res.render('contact', { msj: 'Message sent succesfully', color: 'green' });
        }
    });
    
  }
});


module.exports = router;
