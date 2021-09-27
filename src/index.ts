import listEndpoints from 'express-list-endpoints';
import app from './app';

app.listen(3000, () => {
    console.log(listEndpoints(app));
    console.log(`HTTP Server port ${3000}`);
});
