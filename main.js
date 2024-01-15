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
		} else {
			return `${this.firstName} ${this.lastName} is younger than ${otherUser.firstName} ${otherUser.lastName}`
		}
	}
}
