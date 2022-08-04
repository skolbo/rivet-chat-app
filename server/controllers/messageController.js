const dataMsg = [];

module.exports.getMessages = async (req, res, next) => {
  try {
    // get messages for room from database
  } catch (ex) {
    next(ex);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {

    // change this to add the messages to a database
    const { from, to, message } = req.body;
    const data = {
       message: { text: message },
       users: [from, to],
       sender: from,
     };
     dataMsg.push(data);

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};
