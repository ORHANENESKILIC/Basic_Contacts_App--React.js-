function users({name, surname, age, isLoggedIn}){
    return(

        <h1>
            {isLoggedIn ? `Merhaba, ${name} ${surname} ${age}` : 'giriş yapmadınız!'}
        </h1>
    );

}


export default users;