
const fs = require('fs');

const count = Number(process.argv[2]);
let names = [];
let carBrands = [];


fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

   
    names = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);
    console.log("Imiona:", names);

    
    fs.readFile('./car-brands.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        
        carBrands = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);
        console.log("Marki samochodów:", carBrands);

        
        let content = "export const data = [\n";

        
        for (let i = 0; i < count; i++) {
            const name = names[Math.floor(Math.random() * names.length)];

            const birthDate = new Date(
                Math.floor(Math.random() * (2005 - 1950 + 1)) + 1950,
                Math.floor(Math.random() * 12),
                Math.floor(Math.random() * 28) + 1
            ).toISOString().split('T')[0];

            const eyeColors = ['niebieski', 'brązowy', 'zielony', 'orzechowy'];
            const eyes = eyeColors[Math.floor(Math.random() * eyeColors.length)];

            const registrationNumber =
                `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(Math.random() * 9000) + 1000}`;

            const person = {
                id: i + 1,
                name: name,
                birth: birthDate,
                eyes: eyes,
                registration: registrationNumber
            };

            content += `  ${JSON.stringify(person)},\n`;
        }

        
        for (let i = 0; i < count; i++) {
            const brand = carBrands[Math.floor(Math.random() * carBrands.length)];
            const model = `Model${Math.floor(Math.random() * 100) + 1}`;
            const year = Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000;

            const car = {
                id: count + i + 1,
                brand: brand,
                model: model,
                year: year
            };

            content += `  ${JSON.stringify(car)},\n`;
        }

        content += "];\n";

        
        fs.writeFile('module-data.js', content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("module-data.js wygenerowany");
        });
    });
});
