const fake = faker.helpers.createCard();
//console.log(fake);
const createUsers= (count)=>{
    const users=[];
    while(users.length<count){
        users.push(faker.helpers.createCard());
    }
    return users;
}
//const users=createUsers(20);
//console.log(createUsers(20));



class App extends React.Component{
    constructor(){
        super();
        this.state={users:createUsers(20)};
    }
    render(){
        const lis = this.state.users.map( user => {
        return React.createElement('li', { key:user.name},user.name,user.username);
        });
        const app = React.createElement('ul', null, lis);
        return app;
    } 
}  


 ReactDOM.render(React.createElement(App),root);
