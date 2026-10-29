import Athlete from './athlete'

export default class Triathlon {
	constructor(
		newEventDate = new Date(),
		newLocation = "Unknown",
		newSwimDistance = 3.5,
		newRunDistance = 10.0,
		newBikeDistance = 80.0
	){
		this.date = newEventDate
		this.location = newLocation
		this.swimDistance = newSwimDistance
		this.runDistance = newRunDistance
		this.bikeDistance = newBikeDistance
		this.allParticipants = []
		this.participantCount = 0
	}

    addAthlete(newId, newFirstName, newLastName, newAge, newSwimDuration, newRunDuration, newBikeDuration) {
        const newAthlete = new Athlete(newId, newFirstName, newLastName, newAge, newSwimDuration, newRunDuration, newBikeDuration, this)
        this.participantCount += 1
        this.allParticipants.push(newAthlete)
    }

	toString() {
		let result
		result = `[${this.formatDate()}] - ${this.location}]\nThere's ${this.participantCount} participant(s) competed on this event.`
		return result
	}

	sortParticipants() {
		this.allParticipants.sort((a, b) => {
			if (a.id < b.id) {
				return -1
			}
			if (a.id > b.id) {
				return 1
			}
			// a must be equal to b
			else {
				console.log("Warning: Non-unique IDs detected!")
				return 0
			}
		})
	}

	formatDate() {
		const d = this.date
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]
		this.date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
		return this.date
	}

	findAthlete(targetId) {
		this.sortParticipants()
		let foundAthlete = null
		for (const anAthlete of this.allParticipants) {
			if (anAthlete.id === targetId) {
				foundAthlete = anAthlete
				break
			}
		}
		return foundAthlete
	}

	calculateTotalDistance() {
		return this.swimDistance + this.runDistance + this.bikeDistance
	}

	getAll() {
		this.sortParticipants()
		let result = this.toString()
		for (let anAthlete of this.allParticipants) {
			result += anAthlete
		}
		return result
	}	

	calculateAvgSpeed() {
		let cumulativeSpeed = 0
		for (const anAthlete of this.allParticipants) {
			cumulativeSpeed += anAthlete.calculateSpeedKph()
		}
		let result = parseFloat((cumulativeSpeed / this.participantCount).toFixed(2))
		return result
	}

	isAboveAvg(targetId) {
		let targetAthlete = this.findAthlete(targetId)
		let targetAthleteSpeed = targetAthlete.calculateSpeedKph()
		const speedThreshold = this.calculateAvgSpeed()
		console.log(targetAthleteSpeed)
		return targetAthleteSpeed > speedThreshold
	}

	getAboveAvg() {
        this.sortParticipants()
		let aboveAvgParticipants = []
		for (const anAthlete of this.allParticipants) {
			if (this.isAboveAvg(anAthlete.id)) {
				aboveAvgParticipants.push(`${anAthlete.id} - ${anAthlete.firstName}: ${anAthlete.calculateSpeedKph()} kph\n`)
			}
		}
		let result = `AvgSpeed: ${this.calculateAvgSpeed()}\n${aboveAvgParticipants}`
		return result
	}

	removeAthlete(targetId) {
		let targetItem = this.findAthlete(targetId) 
		const isPresent = targetItem !== null
		if (isPresent) {
				const index = this.allParticipants.indexOf(targetItem)
				this.allParticipants.splice(index, 1)
				this.participantCount -= 1
		} else {
			throw new Error(`Athlete with id ${targetId} is not found`)
		}
	}

	saveAllToStorage(key, data) {
		window.localStorage.setItem(key, JSON.stringify(data))
		return localStorage
	}

	loadAllLocalStorage() {
		let allItems = {}
		for (let index = 0; index < localStorage.length; index++) {
			const key = localStorage.key(index)
			const data = window.localStorage.getItem(key)
			const serialized_value = JSON.parse(data)
			allItems[key] = serialized_value
		}
		return allItems
	}
}