export default class UserService{
    url = 'https://jsonplaceholder.typicode.com/users';

    async getUsersList(){
        return await fetch(this.url)
            .then(value => value.json())
    }

    async getUser(id){
        return await fetch(this.url + `/${id}`)
            .then(value => value.json())
    }
}