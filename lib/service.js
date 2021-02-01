import axios from 'axios';
const HOST = "http://" + process.env.PROJECT_ROOT + "/";

const fetchFromCMS = async (path) => {
    const url = HOST + path;
    const res = await axios.get(url);
    return res.data;
};

export default fetchFromCMS;