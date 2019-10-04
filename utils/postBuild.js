const fs = require('fs');

fs.copyFile('README.md', 'dist/ngx-crud-forms/README.md', (err) => {
  if (err) throw err;
  console.log('README copied to package.');
});

fs.copyFile('LICENSE', 'dist/ngx-crud-forms/LICENSE', (err) => {
    if (err) throw err;
    console.log('LICENSE copied to package.');
});
