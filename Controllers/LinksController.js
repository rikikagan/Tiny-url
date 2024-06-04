import LinksModel from "../Models/LinksModel.js";
const LinksController = {
  getList: async (req, res) => {
    try {
      const Links = await LinksModel.find();//ללא סינון
      res.send(Links);

    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  getById: async (req, res) => {
    try {
      const link = await LinksModel.findById(req.params.id);
      if (!link) {
        return res.status(404).send();
      }
      res.send(link);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  addLink: async (req, res) => {
    const { originalUrl, userId } = req.body;
    try {
      const newLink = await Link.create({ originalUrl }); // הוספת חדש
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.links.push(newLink._id);
      await user.save();
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedLink = await LinksModel.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedLink);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await LinksModel.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  redirect: async (req, res) => {
    try {
      const link = await LinksModel.findById(req.params.id);
      if (!link) {
        return res.status(404).send();
      }
      
      const targetParamValue = req.query[link.targetParamName];
      link.clicks.push({ insertedAt: new Date(), ipAddress: req.ip, targetParamValue });
      await link.save();
      res.json(link.originalUrl);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getLinkClicks: async (req, res) => {
    const { id } = req.params;
    try {
      // מציאת הקישור במסד הנתונים על פי המזהה
      const link = await Link.findById(id);
      if (!link) {
        return res.status(404).json({ message: "Link not found" });
      }
      // החזרת מערך עם כל הקליקים של הקישור
      res.status(200).json(link.clicks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // getClicksBySource: async (req, res) => {
  //   const { id } = req.params;
  //   try {
  //     const link = await LinksModel.findById(id);
  //     if (!link) {
  //       return res.status(404).json({ message: "Link not found" });
  //     }
  //     const clicksBySource = link.clicks.reduce((acc, click) => {
  //       const source = click.targetParamValue || 'unknown';
  //       if (!acc[source]) {
  //         acc[source] = 0;
  //       }
  //       acc[source]++;
  //       return acc;
  //     }, {});
  //     res.status(200).json(clicksBySource);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // }
};

export default LinksController;

