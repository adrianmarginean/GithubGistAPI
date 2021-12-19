import axios from 'axios';

const GIT_API_BASE_URL = "https://api.github.com/users/";

class HomeServices{

    getGists(username){
       return  axios.get(GIT_API_BASE_URL + username + '/' +  'gists');
    }

    getGist(idGist){
       return  axios.get('https://api.github.com/' +'gists'+ '/' + idGist);
    }
}
export default new HomeServices();