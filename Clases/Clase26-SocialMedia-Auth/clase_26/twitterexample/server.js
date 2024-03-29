const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const routes = require('./src/routes/routes')
const UserModel = require('./src/models/usuarios');
const TwitterUserModel = require('./src/models/usuariosTwitter');

const { TIEMPO_EXPIRACION } = require('./src/config/globals')
const {validatePass} = require('./src/utils/passValidator');
const {createHash} = require('./src/utils/hashGenerator')

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

const app = express()

app.use(session({
    secret: 'coderhouse',
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: parseInt(TIEMPO_EXPIRACION)
    },
    rolling: true,
    resave: true,
    saveUninitialized: true
}))


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(passport.initialize())
app.use(passport.session())

app.engine(
    "hbs", 
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + "/src/views/layouts",
        partialsDir: __dirname + "/src/views/partials/",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    })
);
app.set('view engine', 'hbs');
app.set('views', './src/views');
app.use(express.static(__dirname + "/public"));

passport.use('login', new LocalStrategy(
    (username, password, callback) => {
        UserModel.findOne({ username: username }, (err, user) => {
            if (err) {
                return callback(err)
            }

            if (!user) {
                console.log('No se encontro usuario');
                return callback(null, false)
            }

            if(!validatePass(user, password)) {
                console.log('Invalid Password');
                return callback(null, false)
            }

            return callback(null, user)
        })
    }
))


passport.use('signup', new LocalStrategy(
    {passReqToCallback: true}, (req, username, password, callback) => {
        UserModel.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log('Hay un error al registrarse');
                return callback(err)
            }

            if (user) {
                console.log('El usuario ya existe');
                return callback(null, false)
            }

            console.log(req.body);

            const newUser = {
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                email: req.body.email,
                username: username,
                password: createHash(password)
            }

            console.log(newUser);

            UserModel.create(newUser, (err, userWithId) => {
                if (err) {
                    console.log('Hay un error al registrarse');
                    return callback(err)
                }

                console.log(userWithId);
                console.log('Registro de usuario satisfactoria');

                return callback(null, userWithId)
            })
        })
    }
))


passport.use(new TwitterStrategy({
    // ACA VAN SUS CREDENCIALES DE CONSUMER KEY Y SECRET KEY!!!!
    consumerKey: 'qOHcNyIl8AC1y5Gtd7mgsG1xA',
    consumerSecret: 'GN8JpLR62Z9szY50u2TolEyAAqujxs8xprqfGitUFTCqeSfWSd',
    callbackURL: 'http://localhost:8080/auth/twitter/callback'
}, (token, tokenSecret, profile, callback) => {
    TwitterUserModel.findOne({username: profile.username}, (err, user) => {
        console.log('Se loguea el contenido de profile');
        console.log(profile);

        if (err) {
            console.log('Error en el sign up / login');

            return callback(err)
        }

        if (user) {
            console.log('El usuario ya existe');
            
            return callback(null, user)
        } else {
            const newUser = {
                username: profile.username,
                id: profile.id,
                provider: profile.provider
            }

            TwitterUserModel.create(newUser, (err, userWithId) => {
                if (err) {
                    console.log('Hay un error al crear el usuario');
                    
                    return callback(err)
                }

                return callback(null, userWithId)
            })
        }
    })
}))

passport.serializeUser((user, callback) => {
    callback(null, user._id)
})

passport.deserializeUser((id, callback) => {
    UserModel.findById(id, callback)
})

//  INDEX
app.get('/', routes.getRoot);

//  LOGIN
app.get('/login', routes.getLogin);
app.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin' }), routes.postLogin);
app.get('/faillogin', routes.getFaillogin);

// TWITTER
app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', (
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function(req, res) {
         res.redirect('/twitterPage');
     }
  ))

app.get('/twitterPage', routes.getTwitterPage)

//  SIGNUP
app.get('/signup', routes.getSignup);
app.post('/signup', passport.authenticate('signup', { failureRedirect: '/failsignup' }), routes.postSignup);
app.get('/failsignup', routes.getFailsignup);

//  LOGOUT
app.get('/logout', routes.getLogout);


// PROFILE
app.get('/profile', routes.getProfile);

app.get('/ruta-protegida', routes.checkAuthentication, (req, res) => {
    res.render('protected')
});

//  FAIL ROUTE
app.get('*', routes.failRoute);

const server = app.listen(8080, () => {
    console.log('Server on port 8080');
})


server.on('error', error => console.log(`Error en el servidor ${error}`))