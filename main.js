class User {
	constructor(_firtsName, _lastName, _age, _location) {
		this.firstName = _firtsName
		this.lastName = _lastName
		this.age = _age
		this.location = _location
	}

	compareTo(otherUser) {
		if (this.age > otherUser.age) {
			return `${this.firstName} ${this.lastName} is older than ${otherUser.firstName} ${otherUser.lastName}`
		} else if (this.age < otherUser.age) {
			return `${this.firstName} ${this.lastName} is younger than ${otherUser.firstName} ${otherUser.lastName}`
		} else {
			return `${this.firstName} ${this.lastName} is the same age as ${otherUser.firstName} ${otherUser.lastName}`
		}
	}
}

const user1 = new User('John', 'Doe', 15, 'New York')
const user2 = new User('Jane', 'Doe', 20, 'New York')

console.log(user1.compareTo(user2))

const pets = []

const petNameInput = document.getElementById('petName')
const ownerNameInput = document.getElementById('ownerName')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')
const form = document.getElementById('petForm')
const petsRow = document.getElementById('pets')
let index = 0

class Pet {
	sameOwner = false
	constructor(_petName, _ownerName, _species, _breed) {
		this.petName = _petName
		this.ownerName = _ownerName
		this.species = _species
		this.breed = _breed
		this.id = index
		index++

		pets.push(this)
		this.hasSameOwner()
	}
	hasSameOwner() {
		if (pets.length > 1 && this.sameOwner === false) {
			pets.forEach(pet => {
				if (pet.ownerName === this.ownerName && pet.id !== this.id) {
					this.sameOwner = true
				}
			})
		}
	}
}

const displayPets = () => {
	petsRow.innerHTML = ''
	pets.forEach(pet => {
		pet.hasSameOwner()
		const content = `<div class="col">
		<div class="card">
				<div class="card-body">
					<h5 class="card-title">${pet.petName}</h5>
					<p class="card-text"><strong>Owner:</strong> ${pet.ownerName}</p>
					<p class="card-text"><strong>Species:</strong> ${pet.species}</p>
					<p class="card-text"><strong>Breed:</strong> ${pet.breed}</p>
					<p class="card-text"><strong>Has the same owner:</strong> ${pet.sameOwner}</p>
				</div>
			</div>
			</div>`
		petsRow.insertAdjacentHTML('beforeend', content)
	})
}

form.addEventListener('submit', e => {
	e.preventDefault()
	const petName = petNameInput.value
	const ownerName = ownerNameInput.value
	const species = speciesInput.value
	const breed = breedInput.value

	new Pet(petName, ownerName, species, breed)
	displayPets()
})
