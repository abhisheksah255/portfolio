import scannerModule from 'sonarqube-scanner';
const scanner = scannerModule.default || scannerModule;

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_c8c45be1417f241c1214efb53f3a1d432229aa51",
        options: {
            'sonar.projectName': 'sonarqube-react-project',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'sonarqube-react-project',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    error => {
        if (error) {
            console.error(error);
        }
        globalThis.process.exit();
    },
)



// // /............updates script .............

// /* eslint-disable no-console */
// // sonar-scan.js
// // Usage examples:
// //  - Local (host):   SONAR_HOST_URL=http://localhost:9000 SONAR_TOKEN=<token> node sonar-scan.js
// //  - In compose net: SONAR_HOST_URL=http://sonarqube:9000 SONAR_TOKEN=<token> node sonar-scan.js

// const scannerModule = require('sonarqube-scanner');
// const scanner = scannerModule.default || scannerModule; // support both export styles

// // Prefer env configuration; fall back to localhost for host-based runs
// const serverUrl = process.env.SONAR_HOST_URL || 'http://localhost:9000';

// // Use token (recommended) or login (legacy) from env
// const auth =
//   process.env.SONAR_TOKEN
//     ? { token: process.env.SONAR_TOKEN }
//     : process.env.SONAR_LOGIN
//     ? { login: process.env.SONAR_LOGIN }
//     : {};

// if (!auth.token && !auth.login) {
//   console.warn(
//     '[sonar-scan] No SONAR_TOKEN/SONAR_LOGIN found. ' +
//       'Set SONAR_TOKEN as an environment variable (do NOT hard-code secrets).'
//   );
// }

// scanner(
//   {
//     serverUrl,
//     // Spread the chosen auth method
//     ...auth,
//     options: {
//       // ---- Project identity ----
//       'sonar.projectKey': 'sonarqube-react-project',        // make sure this is unique on your SonarQube server
//       'sonar.projectName': 'sonarqube-react-project',
//       'sonar.projectVersion': '0.0.1',
//       'sonar.projectDescription': 'React portfolio project',

//       // ---- Sources & encoding ----
//       'sonar.sources': 'src',
//       'sonar.sourceEncoding': 'UTF-8',

//       // ---- Tests & coverage (Jest) ----
//       // Adjust if your tests or coverage live elsewhere
//       'sonar.tests': 'src',
//       'sonar.test.inclusions': '**/*.test.jsx,**/*.test.js,**/*.spec.jsx,**/*.spec.js',
//       'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',

//       // ---- Exclusions ----
//       // Exclude build artifacts, config files, and non-source assets from analysis/coverage
//       'sonar.exclusions':
//         'node_modules/**,build/**,dist/**,coverage/**,public/**,**/*.config.js,**/*.config.cjs,**/*.config.mjs',
//       'sonar.coverage.exclusions':
//         'src/**/__tests__/**,src/**/*.test.* ,src/**/*.spec.* ,**/*.config.js,**/*.config.cjs,**/*.config.mjs',
//     },
//   },
//   (error) => {
//     if (error) {
//       console.error('[sonar-scan] Analysis failed:', error);
//       process.exitCode = 1;
//     } else {
//       console.log('[sonar-scan] Analysis completed successfully.');
//     }
//     process.exit();
//   }
// );
