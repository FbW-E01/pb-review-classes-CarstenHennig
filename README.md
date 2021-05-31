# Review - Classes

NOTE! Pay close attention to creating code with good and consistent code style.

1. Create a class called "Component". The constructor for Component should take in one parameter "name". There should be one method called "render" that prints `<p>Component _name_  rendering` where `_name_`  is the provided name.
2. Create a child class called UserCard that extends Component. The UserCard should take in only one constructor parameter called "user". Expect the user to be an object with "name", "imageUrl" and "email" properties. The UserCard should override the original "render" method. The new render method should print out something like this: 


        <div class="card card-user">
            <img class="card-img-top" src="user imageUrl here" alt>
            <div class="card-body">
                <h5 class="card-title">user name here</h5>
                <p class="card-text">To contact, please send a message to</p>
                <a
                    href="mailto:user email here"
                    class="btn btn-primary"
                >
                    user email here
                </a>
            </div>
        </div>


3. Create an array of at least 5 user objects.
4. Using the .map() method, create 5 UserCard instances (objects) based on your users.
5. Using .forEach(), call the render method of your instances.
6. Print the type of the UserCard class.
7. Print the type of a UserCard instance.
