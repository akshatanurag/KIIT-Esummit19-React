const proxy = (app) => {
  app.get("/\\/$/", (req, res) => {
    return res.redirect("/login");
  });
};

module.exports = proxy;
