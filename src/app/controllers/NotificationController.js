import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const checkUser = await User.findOne({
      where: { id: req.userId },
    });

    if (!checkUser) {
      return res
        .status(401)
        .json({ error: 'Only user can load notifications' });
    }

    const notifications = await Notification.find({
      restaurant: checkUser.restaurant_id,
    })
      .sort({ createdAt: 'desc' })
      .limit(9);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      {
        read: true,
      },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
