const fs = require('fs');
const path = require('path');


const namesFilePath = path.join(__dirname, 'names.txt');
const carBrandsFilePath = path.join(__dirname, 'car-brands.txt');


const birthDates = ['2000-01-01', '1995-05-05', '1990-10-10'];
const eyeColors = ['Niebieski', 'Zielony', 'Brązowy'];
const registrations = ['AB1234', 'CD5678', 'EF9012'];

const generateData = (number) => {
  
  const names = fs.readFileSync(namesFilePath, 'utf-8').split('\n').map(name => name.trim()).filter(name => name);
  const carBrands = fs.readFileSync(carBrandsFilePath, 'utf-8').split('\n').map(brand => brand.trim()).filter(brand => brand);
  
  
  const generatedData = [];
  for (let i = 0; i < number; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCarBrand = carBrands[Math.floor(Math.random() * carBrands.length)];
    const randomBirthDate = birthDates[Math.floor(Math.random() * birthDates.length)];
    const randomEyeColor = eyeColors[Math.floor(Math.random() * eyeColors.length)];
    const randomRegistration = registrations[Math.floor(Math.random() * registrations.length)];

    generatedData.push({ 
      id: i, 
      name: randomName, 
      car: randomCarBrand,
      birth: randomBirthDate,
      eyes: randomEyeColor,
      registration: randomRegistration
    });
  }

  
  const outputFilePath = path.join(__dirname, 'module-data.js');
  fs.writeFileSync(outputFilePath, `export const data = ${JSON.stringify(generatedData, null, 2)};`);
  
  console.log('Dane zostały wygenerowane i zapisane w module-data.js');
};

const number = process.argv[2] || 10;
generateData(number);
