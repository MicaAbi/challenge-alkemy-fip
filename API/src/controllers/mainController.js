const mainController = {
    index: (req, res) => {
        res.send('Welcome home');
        console.log('Hello World!');
    }
}

module.exports = mainController;