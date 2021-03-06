import axios from 'axios';
const HOST = "http://" + process.env.PROJECT_ROOT + "/";

const fetchFromCMS = async (path) => {
    const url = HOST + path;
    const res = await axios.get(url);
    return res.data.sort((elm1, elm2) => elm2.id - elm1.id );
};

export default fetchFromCMS;