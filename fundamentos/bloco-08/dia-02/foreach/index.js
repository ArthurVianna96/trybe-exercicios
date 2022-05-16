const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

const listEmails = (emailsList, callback) => {
  emailsList.forEach(email => {
    callback(email);
  });
}

listEmails(emailListInData, showEmailList);