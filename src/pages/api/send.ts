import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components';
import { Resend } from 'resend';

const resend = new Resend(process.env.resendApiKey);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = await req.body
  const { email, name } = body
  const { data, error } = await resend.emails.send({
    from: 'Felipe <felipemullermachado@gmail.com>',
    to: email,
    subject: 'This is Felipe Müller',
    react: EmailTemplate({ firstName: name }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};