import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

// Create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('./football.csv');

// Create an instance of "MatchReader" and pass something satisfying the "DataReader" interface
const matches = new MatchReader(csvFileReader);
matches.load()
console.log(matches.matches[2]);

