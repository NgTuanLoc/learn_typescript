import { OutputTarget } from '../Summary';
import fs from 'fs'

export class HtmlReport implements OutputTarget {
   print(report: string): void {
      const html = `
        <div>
            <h1>Analysist Result</h1>
            <h2>${report}</h2>
        </div>
        `;
      fs.writeFileSync('report.html', html);
   }
}
