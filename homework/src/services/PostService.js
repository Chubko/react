export default class PostService{
    url = 'https://jsonplaceholder.typicode.com/posts?userId=';

    async getPost(id){
        return await fetch(this.url + id)
            .then(value => value.json())
    }
}