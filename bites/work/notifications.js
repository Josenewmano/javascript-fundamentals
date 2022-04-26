const notifyByEmail = (email) => {
  return `Email sent to: ${email}`
}

const notifyByText =  (text) => {
  return `Text sent to: ${text}`
}

const notify = (contact, method) => {
  return method(contact)
}

module.exports = {
  notifyByEmail,
  notifyByText,
  notify,
}