// // Import the IndexedDBExample class from the external module
// import Athlete from "../../src/athlete.js"

// describe("IndexedDB Triathlon Athletes", () => {
//   // Declare a variable to hold the instance of IndexedDBExample
//   let indexedDB
//   let databaseName

//   // Before all tests, create a new instance of IndexedDBExample
//   beforeAll(() => {
//     indexedDB = new Athlete()
//     databaseName = "TriathlonDataBase"
//   })

//   // After each test, delete the database to ensure a clean state for the next test
//   afterEach((done) => {
//     indexedDB.deleteDatabase(databaseName).then(done)
//   })

//   test("Should initialize IndexedDB", async () => {
//     await indexedDB.initDatabase(databaseName)
//     expect(indexedDB.db).not.toBeNull()
//   })

// })