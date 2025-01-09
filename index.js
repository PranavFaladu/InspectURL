// import validator from 'validator';
// import chalk from 'chalk';


// const url = "https://example.com";


// const commandLineURL = process.argv[2];
// if(commandLineURL){
// if (validator.isURL(commandLineURL)) {
//     console.log(chalk.green(`${url} is a valid URL.`));
// } else {
//     console.log(chalk.red(`${url} is not a valid URL.`));
// }
// }

// import validator from 'validator';
// import chalk from 'chalk';
// import fs from 'fs'; 

// const commandLineURL = process.argv[2];

// if (commandLineURL) {
   
//     let validationResult = false;
//     if (validator.isURL(commandLineURL)) {
//         console.log(chalk.green(`${commandLineURL} is a valid URL.`));
//         validationResult = true;
//     } else {
//         console.log(chalk.red(`${commandLineURL} is not a valid URL.`));
//     }

   
//     const data = {
//         url: commandLineURL,
//         isValid: validationResult,
//         timestamp: new Date().toISOString() 
//     };

   
//     const filePath = 'url_validation_results.json';
//     let results = [];

 
//     if (fs.existsSync(filePath)) {
//         const fileData = fs.readFileSync(filePath, 'utf-8');
//         results = JSON.parse(fileData);
//     }

   
//     results.push(data);

    
//     fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

//     console.log(chalk.blue(`Validation result has been saved to ${filePath}`));
// } else {
//     console.log(chalk.yellow("Please provide a URL as a command-line argument."));
// }

import validator from 'validator';
import chalk from 'chalk';
import fs from 'fs';

const commandLineURL = process.argv[2];

if (commandLineURL) {
    let validationResult = false;
    
    if (validator.isURL(commandLineURL)) {
        console.log(chalk.green(`${commandLineURL} is a valid URL.`));
        validationResult = true;
    } else {
        console.log(chalk.red(`${commandLineURL} is not a valid URL.`));
    }

    const data = {
        url: commandLineURL,
        isValid: validationResult,
        timestamp: new Date().toISOString()
    };

    const filePath = 'url_validation_results.json';
    let results = [];

    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf-8');
        results = JSON.parse(fileData);
    }

    results.push(data);

    // Write updated results back to the file
    fs.writeFileSync(filePath, JSON.stringify(results, null, 2), 'utf-8');
    console.log(chalk.blue('Validation results have been saved.'));
} else {
    console.log(chalk.yellow('Please provide a URL to validate.'));
}
