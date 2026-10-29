// import "fake-indexeddb/auto"

export default class Athlete {
	// databaseName = "TriathlonDataBase"
	objectStoreName = "Athletes"
	constructor (
		newId,
		newfirstName,
		newlastName,
		newAge,
		newSwimmingDuration = 0.0,
		newRunningDuration = 0.0,
		newCyclingDuration = 0.0,
		theTriathlon
	) {
		this.id = newId
		this.firstName = newfirstName
		this.lastName = newlastName
        this.age = newAge
		this.swimTime = newSwimmingDuration
		this.runTime = newRunningDuration
		this.bikeTime = newCyclingDuration
		this.speed = 0.0
		this.myTriathlon = theTriathlon
	}

    toString() {
        let result = `[Athlete No.${this.id}] ${this.firstName} ${this.lastName}\n`
        result += `Age: ${this.age} Speed: ${this.calculateSpeedKph()} kph\n`
		result += `Swimming - ${this.swimTime} hours\n`
		result += `Running - ${this.runTime} hours\n`
		result += `Cycling - ${this.bikeTime} hours`
        return result
	}

	calculateTotalDuration() {
		const durationHr = (this.swimTime + this.runTime + this.bikeTime)
		return durationHr
	}

	calculateSpeedKph() {
		let distanceKm = 	this.myTriathlon.calculateTotalDistance()
		const durationHr = this.calculateTotalDuration()
		this.speed = parseFloat((distanceKm / durationHr).toFixed(2))
		return this.speed
	}

	cacheOldValue() {
		let oldVal = {}
		oldVal['firstName'] = this.firstName
		oldVal['lastName'] = this.lastName
		oldVal['age'] = this.age
		return oldVal
	}

	editAthleteData(targetField, newValue, decision = false) {
		let edittedData = {}
		const fieldOptions = ['firstName','lastName','age']

		if (typeof targetField !== 'string') {
			throw new Error('Field must be a string')
		}

		if (typeof newValue !== 'string' && targetField !== 'age') {
			throw new Error('New value must be a string')
		}

		// Field is not in the list of options
		if(!fieldOptions.includes(targetField)) {
			throw new Error('Invalid field to update')
		}

		// No errors found
		edittedData[targetField] = newValue
		this.manageChanges(decision, edittedData)
	}

	manageChanges(decision, cachedChanges) {
		// Save changes
		if (decision) {
			for (const [key,value] of Object.entries(cachedChanges)) {
				this[key] = value
			}
			console.log('Changes saved!')
		} 
		// Discard changes
		else {
			this.cacheOldValue()
			console.log('Changes discarded!')
		}
	}

	// // The init method opens a connection to the IndexedDB
	// async initDatabase(databaseName, version = 1) {
	// return new Promise((resolve, reject) => {
	// 	// Open a connection to the database
	// 	const request = window.indexedDB.open(databaseName, version)

	// 	// Handle database opening errors
	// 	request.onerror = (event) => {
	// 	reject(new Error(`Failed to open database: ${event.target.error}`))
	// 	}

	// 	// Handle database upgrades
	// 	request.onupgradeneeded = (event) => {
	// 	const db = event.target.result
	// 	// Create a new object store if it doesn't exist
	// 	if (!db.objectStoreNames.contains(this.objectStoreName)) {
	// 		db.createObjectStore(this.objectStoreName, { keyPath: "id" })
	// 	}
	// 	}

	// 	// Handle successful database opening
	// 	request.onsuccess = (event) => {
	// 	this.db = event.target.result
	// 	resolve()
	// 	}
	// })
	// }

	// // The deleteDatabase method deletes the entire database
	// async deleteDatabase(databaseName) {
	// return new Promise((resolve, reject) => {
	// 	// Close the database before deleting it
	// 	this.close()
	// 	const request = window.indexedDB.deleteDatabase(databaseName)

	// 	// Handle errors when deleting the database
	// 	request.onerror = (event) => {
	// 	reject(new Error(`Failed to delete database: ${event.target.error}`))
	// 	}

	// 	// Handle successful database deletion
	// 	request.onsuccess = (event) => {
	// 	resolve()
	// 	}
	// })
	// }

	// // The close method closes the connection to the database
	// close() {
	// 	if (this.db) {
	// 		this.db.close()
	// 		this.db = null
	// 	}
	// }

	
	deleteDatabase(databaseToRemove) {
		const indexedDB = window.indexedDB
		const deleteRequest = indexedDB.deleteDatabase(databaseToRemove)

		deleteRequest.onsuccess = function () {
			console.log("Database deleted successfully")
		}

		deleteRequest.onerror = function (event) {
			console.error("Error deleting database")
			console.error(event)
		}
	}
}

