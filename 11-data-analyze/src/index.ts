import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinAnalysist } from './analyzers/WinAnalysist';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { match } from 'assert';

// Create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('./football.csv');

// Create an instance of "MatchReader" and pass something satisfying the "DataReader" interface
const matches = new MatchReader(csvFileReader);
matches.load();
// console.log(matches.matches[2]);

const summary = new Summary(
   new WinAnalysist('Man City'),
   new ConsoleReport()
);

summary.buildAndReport(matches.matches);
