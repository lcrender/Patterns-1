const fs = require('fs');

  ///////////////////////////////
  const gatos = [{
    type: 'leon'
  }];
  
  const getData = () => {
    let data = fs.readFileSync('./gatos.json', 'utf8');
  
    if (!data) return [];
    else {
      const file = JSON.parse(data);
      return file;
    }
  }
  
  const data = getData();
  console.log(data)