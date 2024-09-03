const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              },
            ],
          },
        ],
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
      },
    ],
  
  
    findValueByKey: function (companyName) {
   
      function search(companyObject) {
        if (companyObject.name === companyName) {
          return companyObject;
        }
  
        // Перевірка  клієнтів
        if (companyObject.clients) {
          for (let client of companyObject.clients) {
            let result = search(client);
            console.log(result);
            if (result) return result;
          }
        }
  
        // Перевірка  партнерів
        if (companyObject.partners) {
          for (let partner of companyObject.partners) {
            const result = search(partner);
            console.log(result);
            if (result) return result;
          }
        }
  
        return null;
      }
  
      return search(this);
    },
  };
 
  
  console.log(company.findValueByKey('Клієнт 1.2.3'));
 // console.log(company.findValueByKey('Клієнт 1.2'));
  //console.log(company.findValueByKey('Клієнт 2'));
  //console.log(company.findValueByKey('Клієнт 5'));