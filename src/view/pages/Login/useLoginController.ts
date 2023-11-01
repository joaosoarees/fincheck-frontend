import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { httpClient } from '../../../app/services/httpClient';

const schema = z.object({
  email: z.string()
    .min(1, 'E-mail é obrigatório.')
    .email('Informe um e-mail é válido.'),
  password: z.string()
    .min(8, 'Senha deve conter pelo menos 8 dígitos.')
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    await httpClient.post('/auth/signin', data)
  })

  return { handleSubmit, register, errors }
}
