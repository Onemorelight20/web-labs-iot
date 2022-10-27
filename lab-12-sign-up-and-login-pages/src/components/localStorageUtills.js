export const addUser = async (values) => {
  const emails = getEmailsOrEmptyList();
  emails.push(values.email);
  localStorage.setItem("emails", JSON.stringify(emails));

  const users = getUsersAsJsonOrEmptyList();
  users.push(JSON.stringify(values));
  localStorage.setItem("users", JSON.stringify(users));
};

export const userWithSuchValuesExists = (values) => {
  const emails = getEmailsOrEmptyList();

  const receivedMail = values.email;
  if (emails.includes(receivedMail)) {
    const users = getUsersAsJsonOrEmptyList();
    const foundUser = users
      .map((jsonUser) => JSON.parse(jsonUser))
      .filter((user) => user.email == receivedMail)[0];
    return foundUser == undefined
      ? false
      : foundUser.password == values.password;
  } else {
    return false;
  }
};

export const getEmailsOrEmptyList = () => {
  const emailsFromLS = JSON.parse(localStorage.getItem("emails"));
  return emailsFromLS == null ? [] : emailsFromLS;
};

const getUsersAsJsonOrEmptyList = () => {
  const usersFromLS = JSON.parse(localStorage.getItem("users"));
  return usersFromLS == null ? [] : usersFromLS;
};
