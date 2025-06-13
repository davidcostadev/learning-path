// Environment variables are loaded via env-cmd in package.json scripts

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

function main(): void {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);

  // Your application code goes here
}

main();
