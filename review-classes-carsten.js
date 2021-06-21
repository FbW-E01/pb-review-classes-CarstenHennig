// # Review - Classes

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create a class called "Component". The constructor for Component should take in one parameter "name".
// There should be one method called "render" that prints `<p>Component _name_  rendering` where `_name_`  is the provided name.
class Component {
  name;
  constructor(name) {
    this.name = name;
  }
  render() {
    console.log(`Component ${this.name} rendering`);
  }
}
const composer = new Component("Mozart");
composer.render();

// arrayNew = ["Wolfgang", "Amadé", "Mozart"];
// arrayNew.forEach(function (i) {
//   const blaBla = new Component(i);
//   console.log(blaBla.render());
// });

// 2. Create a child class called UserCard that extends Component.
// The UserCard should take in only one constructor parameter called "user".
// Expect the user to be an object with "name", "imageUrl" and "email" properties.
// The UserCard should override the original "render" method. The new render method should print out something like this:

class UserCard extends Component {
  constructor(user) {
    super(user.name);
    this.user = user;
  }
  render() {
    console.log(`
            <div class="card card-user">
            <img class="card-img-top" src=" ${this.user.imageUrl}" alt>
            <div class="card-body">
                <h5 class="card-title">${this.user.name}</h5>
                <p class="card-text">To contact, please send a message to</p>
                <a
                    href="mailto:${this.user.email}"
                    class="btn btn-primary"
                >
                    ${this.user.email} here
                </a>
            </div>
        </div>
    `);
  }
}
user = {
  name: "Amadeus",
  imageUrl: "http://www.placekitten.com/200/300",
  email: "amadeus@placekitten.com",
};
const nUser = new UserCard(user);
console.log(nUser);
nUser.render();

// 3. Create an array of at least 5 user objects.
const array = [
  {
    name: "Wolfgang",
    imageUrl: "http://placekitten.com/g/100/200",
    email: "wolfgang@placekitten.com",
  },
  {
    name: "Joannes",
    imageUrl: "http://placekitten.com/g/100/200",
    email: "joannes@placekitten.com",
  },
  {
    name: "Chrysostomus",
    imageUrl: "http://placekitten.com/g/100/200",
    email: "chrysostomus@placekitten.com",
  },
  {
    name: "Theophilus",
    imageUrl: "http://placekitten.com/g/100/200",
    email: "theophilus@placekitten.com",
  },
  {
    name: "Amadé",
    imageUrl: "http://placekitten.com/g/100/200",
    email: "amade@placekitten.com",
  },
];

// 4. Using the .map() method, create 5 UserCard instances (objects) based on your users.
array.map(function (user) {
  console.log(new UserCard(user));
});

// 5. Using .forEach(), call the render method of your instances.

array.forEach(function (i) {
  const newRender = new Component(i.name);
  console.log(newRender.render());
});

// 6. Print the type of the UserCard class.
console.log(typeof UserCard);

// 7. Print the type of a UserCard instance.
const lastUserCard = new UserCard("Nannerl");
console.log(typeof lastUserCard);
