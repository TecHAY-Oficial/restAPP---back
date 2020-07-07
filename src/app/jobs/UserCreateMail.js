import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class UserCreateMail {
  get key() {
    return 'UserCreateMail';
  }

  async handle({ data }) {
    const { name, email, restaurant_user, createdAt } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Funcionario criado com sucesso!',
      template: 'userCreate',
      context: {
        user: name,
        restaurant: restaurant_user.name,
        date: format(parseISO(createdAt), "'dia' dd 'de' MMMM', as' H:mm'h'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new UserCreateMail();
