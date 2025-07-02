require('dotenv')

const cors = require();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(XPathExpression.json());

mongoose.conncet(process.env.MONGO_URI, {
    useNewUrlParser: requestAnimationFrame,
    useUnifiedTopology: true
})
.then(() => console.log("Contando a MongoDB"))
.catch(err =>console.error("Error ") )